import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "../../ui/dialog";

import { Check, Copy } from "lucide-react";

const Coupons = ({ open, onOpenChange, onContinue, CouponDetail }) => {

    const [copied, setCopied] = useState(null);

    const handlecopy = async (code, id) => {
        try {
            await navigator.clipboard.writeText(code);

            setCopied(id);

            setTimeout(() => {
                setCopied(null);
            }, 5000);

        } catch (error) {
            console.log("code not copied");
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Coupons</DialogTitle>
                    <hr />
                </DialogHeader>

                <div className="w-full">
                    <div className="flex w-full flex-col items-stretch gap-3">

                        {CouponDetail.map((c) => (
                            <div
                                key={c.id}
                                className="flex justify-between items-center gap-40 border-2 px-3 py-4"
                            >
                                <div className="flex flex-col">
                                    <span className="text">{c.title}</span>
                                    <span className="text-xs text-gray-700">{c.description}</span>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => handlecopy(c.code, c.id)}
                                    className="flex cursor-pointer gap-2 border border-dashed border-primary bg-primary/20 p-1 font-bold text-primary"
                                >
                                    {c.code}

                                    {copied === c.id ? (
                                        <Check size={16} />
                                    ) : (
                                        <Copy size={16} />
                                    )}
                                </button>
                            </div>
                        ))}

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Coupons;