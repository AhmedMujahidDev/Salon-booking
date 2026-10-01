import React, { useState } from 'react'
import { Trash2, Pencil, GripVertical } from "lucide-react";
import AvailableStaff from './AvailableStaff';
import { Staff } from './data';

const ServiceRow = ({ service, onRemove }) => {
    const [showStaff, setshowStaff] = useState(false)
    const [selectedStaff, setSelectedStaff] = useState(service.staff);

    const handleSelectStaff = (staff) => {
        setSelectedStaff(staff);
        setshowStaff(false)
    }
    return (
        <div className="mt-3 flex items-center gap-4 rounded-lg bg-gray-50 px-4 py-3">
            <GripVertical size={16} className="shrink-0 text-gray-300" />

            <div className="min-w-[140px]">
                <p className="text-sm font-bold text-gray-900">{service.title}</p>
                <p className="text-xs text-gray-500">{service.duration}</p>
            </div>

            <div className="min-w-[160px]">
                <p className="mb-1 text-xs font-semibold text-gray-500">Staff</p>
                <div className="flex items-center gap-2">
                    <img
                        src={selectedStaff?.image }
                        alt={selectedStaff?.name }
                        className="h-5 w-5 rounded-full object-cover"
                    />
                    <span className="text-sm text-gray-900">{selectedStaff?.name}</span>
                    <button
                        type='button'
                        onClick={() => setshowStaff(true)}
                        className="text-gray-400 hover:text-primary cursor-pointer">
                        <Pencil size={12} />
                    </button>
                    <button
                        type='button'
                        onClick={() => setSelectedStaff(service.staff)}
                        className="text-gray-400 hover:text-red-500 cursor-pointer">
                        <Trash2 size={12} />
                    </button>

                    <AvailableStaff
                        open={showStaff}
                        onOpenChange={setshowStaff}
                        Staff={Staff}
                        selectedStaffId={selectedStaff?.id}
                        onSelectStaff={handleSelectStaff}
                    />

                </div>
            </div>

            <div className="min-w-[140px]">
                <p className="text-xs font-semibold text-gray-500">Date & Time</p>
                <p className="text-sm font-bold text-gray-900">{service.date?.day}/{service.date?.month}</p>
                <p className="text-xs text-gray-500">{service.time}</p>
            </div>

            <div className="min-w-[80px]">
                <p className="text-sm font-bold text-gray-900">${service.price}</p>
            </div>

            {/* <button
                onClick={() => onRemove(service.id)}
                className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-white"
            >
                <Trash2 size={14} />
            </button> */}
        </div>
    )
}

export default ServiceRow