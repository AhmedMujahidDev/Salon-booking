import React from 'react'

const periods = ["Morning", "Afternoon", "Evening"];
const SlotTab = ({active, onChange}) => {
  return (
    <div className='flex w-fit rounded-lg bg-secondary p-1'>
        {periods.map((p) =>(
            <button
            key={p}
            onClick={() => onChange(p)}
            className={`rounded-md px-4 py-1.5 text-fluid-sm transition-colors ${
            active === p
              ? "bg-background font-semibold text-foreground shadow-sm"
              : "text-muted-foreground"
          }`}>
            {p}
          </button>
        ))}
    </div>
  )
}

export default SlotTab