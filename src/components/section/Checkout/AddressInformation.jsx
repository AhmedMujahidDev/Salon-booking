import { useState } from "react";

const EMPTY_ADDRESS = {
    fullName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
};

const fields = [
    { name: "fullName", label: "Full Name", autoComplete: "name", required: true },
    { name: "addressLine1", label: "Address", autoComplete: "address-line1", required: true },
    { name: "addressLine2", label: "Apartment, suite, etc. (optional)", autoComplete: "address-line2" },
    { name: "city", label: "City", autoComplete: "address-level2", required: true },
    { name: "state", label: "State / Province", autoComplete: "address-level1", required: true },
    { name: "postalCode", label: "Postal Code", autoComplete: "postal-code", required: true },
    { name: "country", label: "Country", autoComplete: "country-name", required: true },
];

export default function AddressInformation({
    addresses,
    selectedAddressId,
    onSelect,
    onAdd,
}) {
    const [address, setAddress] = useState(EMPTY_ADDRESS);
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddress((previous) => ({ ...previous, [name]: value }));
    };

    const handleAdd = () => {
        const missingRequiredField = fields.some(
            (field) => field.required && !address[field.name].trim()
        );

        if (missingRequiredField) {
            setError("Please complete all required address fields.");
            return;
        }

        setError("");
        onAdd(address);
        setAddress(EMPTY_ADDRESS);
    };

    return (
        <section className="border border-border bg-background p-5 shadow-sm">
            <h2 className="mb-4 border-b border-border pb-3 font-['Oswald',sans-serif] text-fluid-lg font-semibold">
                Delivery Address
            </h2>

            {addresses.length > 0 && (
                <fieldset className="mb-5 space-y-3">
                    <legend className="mb-2 text-fluid-sm font-medium">
                        Select an address
                    </legend>
                    {addresses.map((item) => (
                        <label
                            key={item._id}
                            className={`block cursor-pointer border p-3 ${
                                selectedAddressId === item._id
                                    ? "border-primary"
                                    : "border-border"
                            }`}
                        >
                            <span className="flex items-start gap-2">
                                <input
                                    type="radio"
                                    name="deliveryAddress"
                                    value={item._id}
                                    checked={selectedAddressId === item._id}
                                    onChange={() => onSelect(item._id)}
                                    className="mt-1 accent-primary"
                                />
                                <span className="text-fluid-sm">
                                    <strong className="block">{item.fullName}</strong>
                                    {item.addressLine1}
                                    {item.addressLine2 && `, ${item.addressLine2}`}
                                    <br />
                                    {item.city}, {item.state} {item.postalCode}
                                    <br />
                                    {item.country}
                                </span>
                            </span>
                        </label>
                    ))}
                </fieldset>
            )}

            <h3 className="mb-3 text-fluid-sm font-semibold">Add a new address</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {fields.map((field) => (
                    <label
                        key={field.name}
                        className={`block ${
                            field.name === "addressLine1" ||
                            field.name === "addressLine2"
                                ? "sm:col-span-2"
                                : ""
                        }`}
                    >
                        <span className="mb-1 block text-fluid-xs font-medium">
                            {field.label}
                            {field.required && (
                                <span className="text-destructive"> *</span>
                            )}
                        </span>
                        <input
                            type="text"
                            name={field.name}
                            value={address[field.name]}
                            onChange={handleChange}
                            autoComplete={field.autoComplete}
                            className="w-full rounded-sm border border-border-strong px-3 py-2 text-fluid-sm outline-none focus:border-primary"
                        />
                    </label>
                ))}
            </div>

            {error && (
                <p className="mt-3 text-fluid-sm text-destructive" role="alert">
                    {error}
                </p>
            )}
            <button
                type="button"
                onClick={handleAdd}
                className="mt-4 rounded bg-foreground px-4 py-2 text-fluid-sm font-medium text-primary-foreground hover:bg-foreground focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
            >
                Add Address
            </button>
        </section>
    );
}