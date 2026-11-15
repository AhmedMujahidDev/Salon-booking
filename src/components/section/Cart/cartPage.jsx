import { useState } from "react";
import {
    FiChevronDown,
    FiCopy,
    FiMinus,
    FiPlus,
    FiShield,
    FiTrash2,
    FiX,
} from "react-icons/fi";
import { formatMoney } from "../../../services/Cartapi.jsx";
import { useCart } from "./Usecart.js";
import OrderSummary from "../../common/summaryOrder.jsx";

function CartItem({ item, currency, disabled, onQuantity, onRemove }) {
    const [imageFailed, setImageFailed] = useState(false);

    return (
        <li className="grid grid-cols-[64px_minmax(0,1fr)] min-[481px]:grid-cols-[72px_minmax(0,1fr)_auto] gap-x-4 gap-y-3 border-b border-[#e4e4e4] py-4">
            <div className="grid w-16 h-18 min-[72px]:w-18 min-[481px]:h-20 place-items-center overflow-hidden border border-[#e4e4e4] bg-[#fafafa] text-2xl font-['Oswald',sans-serif] text-[#6b6b6b]">
                {item.image && !imageFailed ? (
                    <img
                        src={item.image}
                        alt={item.name}
                        onError={() => setImageFailed(true)}
                        className="size-full object-contain"
                    />
                ) : (
                    <span aria-hidden="true">{item.name.charAt(0)}</span>
                )}
            </div>

            <div>
                <h3 className="mb-1 text-[15px] font-semibold">{item.name}</h3>
                <p className="m-0 text-xs text-[#6b6b6b]">
                    Category: <strong className="font-medium text-[#1b1b1b]">{item.category}</strong>
                    {item.variant && (
                        <>
                            <span className="mx-2">|</span>
                            {item.variant.label}:{" "}
                            <strong className="font-medium text-[#1b1b1b]">{item.variant.value}</strong>
                        </>
                    )}
                </p>
                <p className="mt-3 text-base font-medium">
                    {formatMoney(item.unitPrice * item.quantity, currency)}
                </p>
            </div>

            <div className="col-span-2 flex flex-row items-center justify-between gap-3 min-[481px]:col-span-1 min-[481px]:flex-col min-[481px]:items-end min-[481px]:justify-start">
                <div
                    className="inline-flex items-center rounded border border-[#e4e4e4]"
                    role="group"
                    aria-label={`Quantity for ${item.name}`}
                >
                    <button
                        type="button"
                        onClick={() => onQuantity(item.id, item.quantity - 1)}
                        disabled={disabled || item.quantity <= 1}
                        aria-label="Decrease quantity"
                        className="grid size-[30px] place-items-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-[#c4551a] focus-visible:outline-offset-2"
                    >
                        <FiMinus />
                    </button>
                    <span className="min-w-7 text-center font-medium" aria-live="polite">
                        {item.quantity}
                    </span>
                    <button
                        type="button"
                        onClick={() => onQuantity(item.id, item.quantity + 1)}
                        disabled={disabled || item.quantity >= item.maxQuantity}
                        aria-label="Increase quantity"
                        className="grid size-[30px] place-items-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-[#c4551a] focus-visible:outline-offset-2"
                    >
                        <FiPlus />
                    </button>
                </div>
                <button
                    type="button"
                    onClick={() => onRemove(item.id)}
                    disabled={disabled}
                    aria-label={`Remove ${item.name}`}
                    className="grid size-7.5 place-items-center rounded bg-[#fdeceb] text-[#e5312b] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-[#c4551a] focus-visible:outline-offset-2"
                >
                    <FiTrash2 />
                </button>
            </div>
        </li>
    );
}

export default function CartPage({ onCheckout = () => { }, shopHref = "/" }) {
    const {
        cart,
        status,
        loadError,
        pending,
        actionError,
        reload,
        changeQuantity,
        remove,
        clear,
        applyCoupon,
        removeCoupon,
    } = useCart();

    const pageClass =
        "mx-auto max-w-[1080px] px-5 pt-10 pb-16 font-['Poppins',system-ui,sans-serif] text-sm text-[#1b1b1b]";
    const stateClass = "py-12 text-center text-[#6b6b6b]";
    const buttonClass =
        "inline-block mt-3 rounded bg-[#c4551a] px-6 py-[13px] font-semibold text-white hover:bg-[#a74614] focus-visible:outline-2 focus-visible:outline-[#c4551a] focus-visible:outline-offset-2";

    if (status === "loading") {
        return (
            <main className={pageClass}>
                <p role="status" className={stateClass}>
                    Loading your cart...
                </p>
            </main>
        );
    }

    if (status === "error") {
        return (
            <main className={pageClass}>
                <div className={stateClass} role="alert">
                    <p>{loadError || "We couldn't load your cart."}</p>
                    <button type="button" className={buttonClass} onClick={reload}>
                        Try again
                    </button>
                </div>
            </main>
        );
    }

    if (cart.items.length === 0) {
        return (
            <main className={pageClass}>
                <h1 className="mb-5 font-['Oswald',sans-serif] text-[28px] font-semibold tracking-[.01em]">
                    Cart Summary
                </h1>
                <div className={stateClass}>
                    <p>Your cart is empty. Add a product to get started.</p>
                    <a className={buttonClass} href={shopHref}>
                        Continue Shopping
                    </a>
                </div>
            </main>
        );
    }

    return (
        <main className={pageClass}>
            <h1 className="mb-5 font-['Oswald',sans-serif] text-[28px] font-semibold tracking-[.01em]">
                Cart Summary
            </h1>

            <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
                <section aria-label="Items in your cart">
                    <div className="flex items-center justify-between border-b border-[#e4e4e4] pb-3">
                        <h2 className="font-['Oswald',sans-serif] text-xl font-semibold tracking-[.01em]">
                            Total Items({String(cart.itemCount).padStart(2, "0")})
                        </h2>
                        <button
                            type="button"
                            onClick={clear}
                            disabled={pending}
                            className="inline-flex items-center gap-1 py-1 text-xs text-[#e5312b] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-[#c4551a] focus-visible:outline-offset-2"
                        >
                            <FiX aria-hidden="true" /> Clear Cart
                        </button>
                    </div>

                    {actionError && (
                        <p className="mt-3 rounded bg-[#fdeceb] px-3 py-2.5 text-[13px] text-[#e5312b]" role="alert">
                            {actionError}
                        </p>
                    )}

                    <ul className="m-0 list-none p-0">
                        {cart.items.map((item) => (
                            <CartItem
                                key={item.id}
                                item={item}
                                currency={cart.currency}
                                disabled={pending}
                                onQuantity={changeQuantity}
                                onRemove={remove}
                            />
                        ))}
                    </ul>
                </section>

                <OrderSummary
                    cart={cart}
                    pending={pending}
                    onApply={applyCoupon}
                    onRemoveCoupon={removeCoupon}
                    onCheckout={onCheckout}
                    shopHref={shopHref}
                />
            </div>
        </main>
    );
}
