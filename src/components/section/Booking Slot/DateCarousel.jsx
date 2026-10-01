import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";

const DateCarousel = ({ dates, selectedDate, onSelect, onPrev, onNext }) => {
    return (
        <div className='flex items-center gap-3'>

            <div className='flex flex-1 gap-3 overflow-x-auto'>
                {dates.map((d) => {
                    const isActive = d.day === selectedDate?.day && d.month === selectedDate?.month;
                    return (
                        <button
                            key={`${d.month}-${d.day}`}
                            onClick={() => onSelect(d)}
                            className={`flex min-w-[80px] flex-col items-center rounded-lg border px-3 py-2.5 text-center transition-colors ${isActive ? "border-primary border-[1px]" : "border-gray-200"
                                }`}>
                            <span className='text-xs text-gray-500'>{d.month}</span>
                            <span className='my-0.5 text-xl font-bold text-gray-900'>{d.day}</span>
                            <span className='text-xs text-gray-500'>{d.weekday}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default DateCarousel