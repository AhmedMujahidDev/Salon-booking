
export default function CardDetails({ method }) {
    if (method === "cod") return null;

    return (
        <section className="border border-border bg-background p-5 shadow-sm">
            <h2 className="mb-3 font-['Oswald',sans-serif] text-fluid-lg font-semibold">
                {method === "card"
                    ? "Card Details"
                    : method === "paypal"
                        ? "PayPal Payment"
                        : "Stripe Payment"}
            </h2>

            <div className="rounded border border-dashed border-border-strong bg-surface-soft p-5">
                <p className="text-fluid-sm font-medium">
                    Secure Payment Gateway
                </p>

                <p className="mt-2 text-fluid-xs leading-5 text-text-muted">
                    Secure payment fields will be loaded from the selected
                    payment provider. Your card details will not be stored
                    on our server.
                </p>
            </div>
        </section>
    );
}
