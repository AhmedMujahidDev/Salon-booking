
import { useRef, useState } from "react";
import { useCart } from "../../components/section/Cart/Usecart";

import BasicInformation from "../../components/section/Checkout/BasicInformation";
import AddressInformation from "../../components/section/Checkout/AddressInformation.jsx";
import PaymentMethod from "../../components/section/Checkout/PaymentMethod.jsx";
import CardDetails from "../../components/section/Checkout/CardDetails.jsx";
import CheckoutOrderSummary from "../../components/common/summaryOrder.jsx";
import Banner from "@/components/common/Banner";

export default function CheckoutPage({ onPlaceOrder }) {
    const formRef = useRef(null);
    const {
        cart,
        status,
        pending,
        applyCoupon,
        removeCoupon,
    } = useCart();

    const [customer, setCustomer] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const [addresses, setAddresses] = useState([]);

    const [selectedAddressId, setSelectedAddressId] = useState("");

    const [paymentMethod, setPaymentMethod] = useState("card");

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleCustomerChange = (e) => {
        const { name, value } = e.target;

        setCustomer((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddAddress = (newAddress) => {
        const addressWithId = {
            ...newAddress,
            _id: crypto.randomUUID(),
        };

        setAddresses((prev) => [...prev, addressWithId]);
        setSelectedAddressId(addressWithId._id);
    };

    const handlePlaceOrder = async () => {
        setError("");

        if (!formRef.current?.reportValidity()) {
            return;
        }

        if (!selectedAddressId) {
            setError("Please select or add a delivery address.");
            return;
        }

        setSubmitting(true);

        try {
            const payload = {
                customer,
                addressId: selectedAddressId,
                payment: {
                    method: paymentMethod,
                },
                couponCode: cart.coupon?.code || null,
            };

            if (!onPlaceOrder) {
                throw new Error("Checkout API is not connected yet.");
            }

            await onPlaceOrder(payload);
        } catch (err) {
            setError(err.message || "Unable to place your order.");
        } finally {
            setSubmitting(false);
        }
    };

    if (status === "loading") {
        return <p className="py-12 text-center">Loading checkout...</p>;
    }

    if (status === "error") {
        return <p className="py-12 text-center">Unable to load your cart.</p>;
    }

    if (!cart?.items?.length) {
        return <p className="py-12 text-center">Your cart is empty.</p>;
    }

    return (
        <section>
            <Banner
                title="Cart"
                breadcrumbs={[
                    "Home",
                    "Shop",
                    "Cart"
                ]} />

            <div className="mx-auto max-w-[1080px] px-5 py-10 font-['Poppins',system-ui,sans-serif] text-[#1b1b1b]">

                <h1 className="mb-5 font-['Oswald',sans-serif] text-2xl font-semibold">
                    Secure Checkout
                </h1>

                <form
                    ref={formRef}
                    onSubmit={(e) => {
                        e.preventDefault();
                        handlePlaceOrder();
                    }}
                    className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]"
                >
                    <div className="space-y-5">
                        <BasicInformation
                            customer={customer}
                            onChange={handleCustomerChange}
                        />

                        <AddressInformation
                            addresses={addresses}
                            selectedAddressId={selectedAddressId}
                            onSelect={setSelectedAddressId}
                            onAdd={handleAddAddress}
                        />

                        <PaymentMethod
                            method={paymentMethod}
                            onChange={setPaymentMethod}
                        />

                        <CardDetails method={paymentMethod} />
                    </div>

                    <div>
                        <CheckoutOrderSummary
                            cart={cart}
                            pending={pending || submitting}
                            onApply={applyCoupon}
                            onRemoveCoupon={removeCoupon}
                            onCheckout={handlePlaceOrder}
                            shopHref="/products-Grid"
                        />

                        {error && (
                            <p className="mt-3 rounded bg-red-50 p-3 text-sm text-red-600">
                                {error}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}
