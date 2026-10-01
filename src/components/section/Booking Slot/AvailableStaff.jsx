import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "../../ui/dialog";

import { CirclePlus, Check } from "lucide-react";

const AvailableStaff = ({ open, onOpenChange, Staff = [], selectedStaffId, onSelectStaff, }) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Available Staff</DialogTitle>
                    <hr />
                </DialogHeader>

                <div className="w-full">
                    <div className="flex w-full flex-col items-stretch gap-3">

                        {Staff.map((s) => {
                            const isSelected = selectedStaffId === s.id;

                            return (
                                <div
                                    key={s.id}
                                    className={`flex items-center justify-between border-2 px-3 py-4 transition-all ${
                                        isSelected ? "opacity-50 bg-gray-200 cursor-not-allowed" : ""
                                    }`}
                                >
                                    <div className="flex justify-center items-center gap-4 ">
                                        <img
                                            src={s.image}
                                            alt={s.name}
                                            className="h-12 w-12 rounded-sm object-cover" />

                                        <div className="flex flex-col gap-1">
                                            <span className="text-base font-medium">{s.name}</span>
                                            <span className="text-xs text-gray-700">
                                                {s.role}
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        disabled={isSelected}
                                        onClick={() => !isSelected && onSelectStaff(s)}
                                        className={`${
                                            isSelected
                                                ? "cursor-not-allowed opacity-50"
                                                : "cursor-pointer"
                                        }`}>
                                        {isSelected ? (
                                            <Check className="text-green-600" />
                                        ) : (
                                            <CirclePlus className="text-primary" />
                                        )}
                                    </button>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AvailableStaff;