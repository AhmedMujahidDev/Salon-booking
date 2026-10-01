import React from 'react'

const periods = ["Morning", "Afternoon", "Evening"];
const SlotTab = ({active, onChange}) => {
  return (
    <div className='flex w-fit rounded-lg bg-gray-100 p-1'>
        {periods.map((p) =>(
            <button
            key={p}
            onClick={() => onChange(p)}
            className={`rounded-md px-4 py-1.5 text-sm transition-colors ${
            active === p
              ? "bg-white font-semibold text-gray-900 shadow-sm"
              : "text-gray-500"
          }`}>
            {p}
          </button>
        ))}
    </div>
  )
}

export default SlotTab