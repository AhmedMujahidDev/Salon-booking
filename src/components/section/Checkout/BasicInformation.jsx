
export default function BasicInformation({ customer, onChange }) {
    const fields = [
        { name: "firstName", label: "First Name", type: "text" },
        { name: "lastName", label: "Last Name", type: "text" },
        { name: "email", label: "Email", type: "email" },
        { name: "phone", label: "Phone Number", type: "tel" },
    ];

    return (
        <section className="border border-[#e4e4e4] bg-white p-5 shadow-sm">
            <div className="mb-4 flex justify-between border-b border-[#e4e4e4] pb-3">
                <h2 className="font-['Oswald',sans-serif] text-lg font-semibold">
                    Basic Information
                </h2>

                <button type="button" className="text-xs text-[#c4551a]">
                    Sign In
                </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {fields.map((field) => (
                    <label key={field.name} className="block">
                        <span className="mb-1 block text-xs font-medium">
                            {field.label} <span className="text-red-500">*</span>
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
                            className="w-full rounded-sm border border-[#dcdcdc] px-3 py-2 text-sm outline-none focus:border-[#c4551a]"
                        />
                    </label>
                ))}
            </div>
        </section>
    );
}
