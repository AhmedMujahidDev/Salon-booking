import React from 'react'

const TimeSlot = ({ times, selectedTime, onSelect }) => {
  return (
    <div className='mt-3 flex flex-wrap gap-3'>
        {times.map((time) => (
            <button
            key={time}
            onClick={() => onSelect(time)}
            className={`rounded-md border px-4 py-2 text-sm transition-colors ${
                selectedTime === time
                ? "border-primary text-primary"
                : "border-gray-200 text-gray-700"
            }`}>
                {time}
            </button>
        ))}
    </div>
  )
}

export default TimeSlot