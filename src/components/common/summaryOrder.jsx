
import { useState } from "react";
import {
    FiChevronDown,
    FiCopy,
    FiShield,
} from "react-icons/fi";

import { formatMoney } from "../../services/Cartapi";

function PromoCode({ cart, disabled, onApply, onRemove }) {
    const [code, setCode] = useState("");
    const [message, setMessage] = useState("");
    const [couponsOpen, setCouponsOpen] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage("");

        const result = await onApply(code);

        if (result.ok) {
            setCode("");
        } else {
            setMessage(result.message);
        }
    };

    const copyCode = async (couponCode) => {
        setCode(couponCode);

        try {
            await navigator.clipboard.writeText(couponCode);
        } catch {
            // Code remains available in the input.
        }
    };

    return (
        <div className="border-b border-border py-4">
            <form
                className="flex overflow-hidden rounded border border-border"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={code}
                    onChange={(event) => setCode(event.target.value)}
                    placeholder="Enter Promo Code"
                    aria-label="Promo code"
                    autoComplete="off"
                    className="min-w-0 flex-1 px-3 py-2.5 text-fluid-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:-outline-offset-2"
                />

                <button
                    type="submit"
                    disabled={disabled || !code.trim()}
                    className="bg-foreground px-[18px] font-semibold text-primary-foreground cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Apply
                </button>
            </form>

            {message && (
                <p className="mt-2 text-fluid-xs text-destructive" role="alert">
                    {message}
                </p>
            )}

            {cart.coupon && (
                <p className="mt-2 flex items-center justify-between text-fluid-xs text-success">
                    {cart.coupon.code} applied ({cart.coupon.percentOff}% off)

                    <button
                        type="button"
                        onClick={onRemove}
                        disabled={disabled}
                        className="cursor-pointer text-foreground underline disabled:opacity-50"
                    >
                        Remove
                    </button>
                </p>
            )}

            <button
                type="button"
                onClick={() => setCouponsOpen((open) => !open)}
                aria-expanded={couponsOpen}
                className="mt-3 flex w-full items-center justify-between py-1 text-fluid-xs font-medium cursor-pointer"
            >
                Available Coupons

                <FiChevronDown
                    className={`transition-transform duration-200 ${
                        couponsOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {couponsOpen && (
                <ul className="mt-2">
                    {cart.availableCoupons.map((coupon) => (
                        <li
                            key={coupon.code}
                            className="mb-2.5 rounded border border-border p-3"
                        >
                            <div className="flex items-center justify-between">
                                <span className="inline-flex items-center gap-2 rounded-sm border border-dashed border-primary px-2 py-[3px] text-fluid-xs font-medium text-primary">
                                    {coupon.code}

                                    <button
                                        type="button"
                                        onClick={() => copyCode(coupon.code)}
                                        aria-label={`Copy code ${coupon.code}`}
                                        className="grid place-items-center cursor-pointer"
                                    >
                                        <FiCopy />
                                    </button>
                                </span>

                                <span className="text-fluid-xs font-medium">
                                    {coupon.percentOff}% OFF
                                </span>
                            </div>

                            <p className="mt-2 text-fluid-sm text-text-muted">
                                {coupon.description}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function OrderSummary({
    cart,
    pending,
    onApply,
    onRemoveCoupon,
    onCheckout,
    shopHref,
}) {
    const { totals, currency } = cart;

    const money = (cents) => formatMoney(cents, currency);

    return (
        <aside
            className="rounded border border-border bg-background p-[22px]"
            aria-label="Order summary"
        >
            <h2 className="mb-3 border-b border-border pb-3 font-['Oswald',sans-serif] text-fluid-xl font-semibold tracking-[.01em]">
                Order Summary
            </h2>

            <dl className="m-0 border-b border-border pb-3">
                <div className="flex justify-between py-[5px] text-fluid-sm">
                    <dt className="text-text-muted">Sub Total</dt>
                    <dd className="m-0 font-semibold">
                        {money(totals.subtotal)}
                    </dd>
                </div>

                {totals.discount > 0 && (
                    <div className="flex justify-between py-[5px] text-fluid-sm text-success">
                        <dt>Discount ({cart.coupon?.code})</dt>
                        <dd className="m-0 font-semibold">
                            -{money(totals.discount)}
                        </dd>
                    </div>
                )}

                <div className="flex justify-between py-[5px] text-fluid-sm">
                    <dt className="text-text-muted">Delivery Fee</dt>
                    <dd className="m-0 font-semibold">
                        {money(totals.deliveryFee)}
                    </dd>
                </div>

                <div className="flex justify-between py-[5px] text-fluid-sm">
                    <dt className="text-text-muted">Tax</dt>
                    <dd className="m-0 font-semibold">
                        {money(totals.tax)}
                    </dd>
                </div>

                <div className="flex justify-between py-[5px] text-fluid-sm">
                    <dt className="text-text-muted">Shipping</dt>
                    <dd className="m-0 font-semibold">
                        {money(totals.shipping)}
                    </dd>
                </div>
            </dl>

            <PromoCode
                cart={cart}
                disabled={pending}
                onApply={onApply}
                onRemove={onRemoveCoupon}
            />

            <div className="flex justify-between py-4 font-['Oswald',sans-serif] text-fluid-xl font-semibold tracking-[.01em]">
                <span>Total</span>
                <span>{money(totals.total)}</span>
            </div>

            <button
                type="button"
                onClick={onCheckout}
                disabled={pending}
                className="block w-full rounded bg-primary px-4 py-[13px] text-center font-semibold text-primary-foreground transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50"
            >
                Proceed to Checkout
            </button>

            <a
                className="mt-3 mb-4 block text-center text-fluid-xs text-primary underline"
                href={shopHref}
            >
                Continue Shopping
            </a>

            <p className="m-0 flex items-start gap-2.5 rounded bg-success-surface p-3 text-fluid-sm text-text-muted">
                <FiShield
                    aria-hidden="true"
                    className="size-5 shrink-0 rounded-sm border border-success p-[3px] text-success"
                />

                <span>
                    Your payment is safely processed using trusted and
                    encrypted payment methods.
                </span>
            </p>
        </aside>
    );
}
