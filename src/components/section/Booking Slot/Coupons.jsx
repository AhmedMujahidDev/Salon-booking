
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
            <DialogContent className="flex max-h-[85dvh] w-[calc(100%-2rem)] max-w-lg flex-col overflow-hidden p-4 sm:p-6">
                <DialogHeader>
                    <DialogTitle>Coupons</DialogTitle>
                    <hr />
                </DialogHeader>

                <div className="min-h-0 w-full flex-1 overflow-y-auto">
                    <div className="flex w-full flex-col gap-3">

                        {CouponDetail.map((c) => (
                            <div
                                key={c.id}
                                className="flex min-w-0 flex-col gap-3 rounded-md border-2 px-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                            >
                                <div className="min-w-0 flex-1">
                                    <span className="block text-fluid-base font-semibold">
                                        {c.title}
                                    </span>

                                    <span className="block break-words text-fluid-xs text-text-secondary">
                                        {c.description}
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => handlecopy(c.code, c.id)}
                                    className="flex w-fit shrink-0 cursor-pointer items-center gap-2 border border-dashed border-primary bg-primary/20 p-2 font-bold text-primary"
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