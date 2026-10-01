import React from 'react'
import { ChevronUp, ChevronDown } from "lucide-react";
import ServiceItem from "./ServiceItem";

const ServiceCategory = ({ category, isOpen, onToggle, onBook }) => {
    return (
        <div className='border-t border-gray-200'>
            <button
                onClick={onToggle}
                className='flex w-full items-center justify-between px-6 py-3'>
                <span className='flex items-center gap-2 font-bold text-gray-900 text-xl'>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    {category.name}
                </span>
                <span className='rounded-md border-border-gray-200 px-2 py-0.5 text-xs text-gray-500'>
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