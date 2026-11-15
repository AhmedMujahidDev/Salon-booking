
export default function CardDetails({ method }) {
    if (method === "cod") return null;

    return (
        <section className="border border-[#e4e4e4] bg-white p-5 shadow-sm">
            <h2 className="mb-3 font-['Oswald',sans-serif] text-lg font-semibold">
                {method === "card"
                    ? "Card Details"
                    : method === "paypal"
                        ? "PayPal Payment"
                        : "Stripe Payment"}
            </h2>

            <div className="rounded border border-dashed border-[#ccc] bg-[#fafafa] p-5">
                <p className="text-sm font-medium">
                    Secure Payment Gateway
                </p>

                <p className="mt-2 text-xs leading-5 text-[#6b6b6b]">
                    Secure payment fields will be loaded from the selected
                    payment provider. Your card details will not be stored
                    on our server.
                </p>
            </div>
        </section>
    );
}
