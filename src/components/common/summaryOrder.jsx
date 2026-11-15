
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
        <div className="border-b border-[#e4e4e4] py-4">
            <form
                className="flex overflow-hidden rounded border border-[#e4e4e4]"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    value={code}
                    onChange={(event) => setCode(event.target.value)}
                    placeholder="Enter Promo Code"
                    aria-label="Promo code"
                    autoComplete="off"
                    className="min-w-0 flex-1 px-3 py-2.5 text-[13px] focus-visible:outline-2 focus-visible:outline-[#c4551a] focus-visible:-outline-offset-2"
                />

                <button
                    type="submit"
                    disabled={disabled || !code.trim()}
                    className="bg-[#1b1b1b] px-[18px] font-semibold text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Apply
                </button>
            </form>

            {message && (
                <p className="mt-2 text-xs text-[#e5312b]" role="alert">
                    {message}
                </p>
            )}

            {cart.coupon && (
                <p className="mt-2 flex items-center justify-between text-xs text-[#1f8f4e]">
                    {cart.coupon.code} applied ({cart.coupon.percentOff}% off)

                    <button
                        type="button"
                        onClick={onRemove}
                        disabled={disabled}
                        className="cursor-pointer text-[#1b1b1b] underline disabled:opacity-50"
                    >
                        Remove
                    </button>
                </p>
            )}

            <button
                type="button"
                onClick={() => setCouponsOpen((open) => !open)}
                aria-expanded={couponsOpen}
                className="mt-3 flex w-full items-center justify-between py-1 text-xs font-medium cursor-pointer"
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
                            className="mb-2.5 rounded border border-[#e4e4e4] p-3"
                        >
                            <div className="flex items-center justify-between">
                                <span className="inline-flex items-center gap-2 rounded-sm border border-dashed border-[#c4551a] px-2 py-[3px] text-xs font-medium text-[#c4551a]">
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

                                <span className="text-xs font-medium">
                                    {coupon.percentOff}% OFF
                                </span>
                            </div>

                            <p className="mt-2 text-[11px] text-[#6b6b6b]">
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
            className="rounded border border-[#e4e4e4] bg-white p-[22px]"
            aria-label="Order summary"
        >
            <h2 className="mb-3 border-b border-[#e4e4e4] pb-3 font-['Oswald',sans-serif] text-xl font-semibold tracking-[.01em]">
                Order Summary
            </h2>

            <dl className="m-0 border-b border-[#e4e4e4] pb-3">
                <div className="flex justify-between py-[5px] text-[13px]">
                    <dt className="text-[#6b6b6b]">Sub Total</dt>
                    <dd className="m-0 font-semibold">
                        {money(totals.subtotal)}
                    </dd>
                </div>

                {totals.discount > 0 && (
                    <div className="flex justify-between py-[5px] text-[13px] text-[#1f8f4e]">
                        <dt>Discount ({cart.coupon?.code})</dt>
                        <dd className="m-0 font-semibold">
                            -{money(totals.discount)}
                        </dd>
                    </div>
                )}

                <div className="flex justify-between py-[5px] text-[13px]">
                    <dt className="text-[#6b6b6b]">Delivery Fee</dt>
                    <dd className="m-0 font-semibold">
                        {money(totals.deliveryFee)}
                    </dd>
                </div>

                <div className="flex justify-between py-[5px] text-[13px]">
                    <dt className="text-[#6b6b6b]">Tax</dt>
                    <dd className="m-0 font-semibold">
                        {money(totals.tax)}
                    </dd>
                </div>

                <div className="flex justify-between py-[5px] text-[13px]">
                    <dt className="text-[#6b6b6b]">Shipping</dt>
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

            <div className="flex justify-between py-4 font-['Oswald',sans-serif] text-xl font-semibold tracking-[.01em]">
                <span>Total</span>
                <span>{money(totals.total)}</span>
            </div>

            <button
                type="button"
                onClick={onCheckout}
                disabled={pending}
                className="block w-full rounded bg-[#c4551a] px-4 py-[13px] text-center font-semibold text-white transition-colors hover:bg-[#a74614] disabled:cursor-not-allowed disabled:opacity-50"
            >
                Proceed to Checkout
            </button>

            <a
                className="mt-3 mb-4 block text-center text-xs text-[#c4551a] underline"
                href={shopHref}
            >
                Continue Shopping
            </a>

            <p className="m-0 flex items-start gap-2.5 rounded bg-[#f1f9f4] p-3 text-[11px] text-[#6b6b6b]">
                <FiShield
                    aria-hidden="true"
                    className="size-5 shrink-0 rounded-sm border border-[#1f8f4e] p-[3px] text-[#1f8f4e]"
                />

                <span>
                    Your payment is safely processed using trusted and
                    encrypted payment methods.
                </span>
            </p>
        </aside>
    );
}
