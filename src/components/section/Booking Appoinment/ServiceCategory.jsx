import React from 'react'
import { ChevronUp, ChevronDown } from "lucide-react";
import ServiceItem from "./ServiceItem";

const ServiceCategory = ({ category, isOpen, onToggle, onBook }) => {
    return (
        <div className='border-t border-border'>
            <button
                onClick={onToggle}
                className='flex w-full items-center justify-between px-6 py-3'>
                <span className='flex items-center gap-2 font-bold text-fluid-xl text-foreground'>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    {category.name}
                </span>
                <span className='rounded-md border border-border px-2 py-0.5 text-fluid-xs text-muted-foreground'>
                    {String(category.services.length).padStart(2, "0")} Services
                </span>
            </button>

            {isOpen &&
                category.services.map((service) => (
                    <ServiceItem key={service.title} service={service} onBook={onBook} />
                ))}
        </div>
    )
}

export default ServiceCategory