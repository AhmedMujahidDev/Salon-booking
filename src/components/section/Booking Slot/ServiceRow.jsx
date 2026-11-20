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
        <div className="mt-3 flex min-w-0 flex-nowrap items-center gap-4 overflow-x-auto overflow-y-hidden rounded-lg bg-muted px-4 py-8 sm:px-4 sm:py-3 sm:overflow-visible">
            <GripVertical size={16} className="shrink-0 text-border-strong" />

            <div className="min-w-[140px]">
                <p className="text-fluid-sm font-bold text-foreground">{service.title}</p>
                <p className="text-fluid-xs text-muted-foreground">{service.duration}</p>
            </div>

            <div className="min-w-[160px]">
                <p className="mb-1 text-fluid-xs font-semibold text-muted-foreground">Staff</p>
                <div className="flex items-center gap-2">
                    <img
                        src={selectedStaff?.image}
                        alt={selectedStaff?.name}
                        className="h-5 w-5 rounded-full object-cover"
                    />
                    <span className="text-fluid-sm text-foreground">{selectedStaff?.name}</span>
                    <button
                        type='button'
                        onClick={() => setshowStaff(true)}
                        className="text-muted-foreground hover:text-primary cursor-pointer">
                        <Pencil size={12} />
                    </button>
                    <button
                        type='button'
                        onClick={() => setSelectedStaff(service.staff)}
                        className="text-muted-foreground hover:text-destructive cursor-pointer">
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
                <p className="text-fluid-xs font-semibold text-muted-foreground">Date & Time</p>
                <p className="text-fluid-sm font-bold text-foreground">{service.date?.day}/{service.date?.month}</p>
                <p className="text-fluid-xs text-muted-foreground">{service.time}</p>
            </div>

            <div className="min-w-[80px]">
                <p className="text-fluid-sm font-bold text-foreground">${service.price}</p>
            </div>

            {/* <button
                onClick={() => onRemove(service.id)}
                className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-destructive text-primary-foreground"
            >
                <Trash2 size={14} />
            </button> */}
        </div>
    )
}

export default ServiceRow