import React, { useState } from "react";
import Coupons from "../../section/Booking Slot/Coupons"
import { CouponDetail } from "./data";

const CouponBox = ({ onApply }) => {
    const [code, setCode] = useState("");
    const [showCoupons, setShowCoupons] = useState(false);

    return (
        <div>
            <div className="flex gap-3">
                <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter Code"
                    className="w-full max-w-[220px] rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-primary"
                />
                <button
                    onClick={() => onApply(code)}
                    className="rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white"
                >
                    Apply
                </button>
            </div>

            <button
                onClick={() => setShowCoupons(true) }
                className="mt-2 text-sm font-medium text-primary underline cursor-pointer">
                View All Coupons
            </button>

            <Coupons
                open={showCoupons}
                onOpenChange={setShowCoupons}
                CouponDetail={CouponDetail}
                onContinue={() => {
                    console.log("proceeding to next step");
                    setShowCoupons(false);
                }} />

                    

        </div>
    );
};

export default CouponBox;