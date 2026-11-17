
export default function BasicInformation({ customer, onChange }) {
    const fields = [
        { name: "firstName", label: "First Name", type: "text" },
        { name: "lastName", label: "Last Name", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone Number", type: "tel" },
    ];

    return (
        <section className="border border-border bg-background p-5 shadow-sm">
            <div className="mb-4 flex justify-between border-b border-border pb-3">
                <h2 className="font-['Oswald',sans-serif] text-fluid-lg font-semibold">
                    Basic Information
                </h2>

                <button type="button" className="text-fluid-xs text-primary">
                    Sign In
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {fields.map((field) => (
                    <label key={field.name} className="block">
                        <span className="mb-1 block text-fluid-xs font-medium">
                            {field.label} <span className="text-destructive">*</span>
                        </span>

                        <input
                            type={field.type}
                            name={field.name}
                            value={customer[field.name]}
                            onChange={onChange}
                            required
                            autoComplete={field.name === "firstName"
                                ? "given-name"
                                : field.name === "lastName"
                                    ? "family-name"
                                    : field.name === "email"
                                        ? "email"
                                        : "tel"}
                            className="w-full rounded-sm border border-border-strong px-3 py-2 text-fluid-sm outline-none focus:border-primary"
                        />
                    </label>
                ))}
            </div>
        </section>
    );
}
