
const methods = [
    { id: "card", label: "Credit Card" },
    { id: "paypal", label: "PayPal" },
    { id: "stripe", label: "Stripe" },
    { id: "cod", label: "Cash On Shop" },
];

export default function PaymentMethod({ method, onChange }) {
    return (
        <section className="border border-border bg-background p-5 shadow-sm">
            <h2 className="mb-4 border-b border-border pb-3 font-['Oswald',sans-serif] text-fluid-lg font-semibold">
                Payment Method
            </h2>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {methods.map((item) => (
                    <label
                        key={item.id}
                        className={`flex cursor-pointer flex-col items-center justify-center gap-2 border p-4 text-center transition-colors ${
                            method === item.id
                                ? "border-primary"
                                : "border-border-strong"
                        }`}
                    >
                        <input
                            type="radio"
                            name="paymentMethod"
                            value={item.id}
                            checked={method === item.id}
                            onChange={() => onChange(item.id)}
                            className="accent-primary"
                        />

                        <span className="text-fluid-xs font-medium">
                            {item.label}
                        </span>
                    </label>
                ))}
            </div>
        </section>
    );
}
