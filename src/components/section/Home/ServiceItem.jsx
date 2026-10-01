import React from 'react'

const ServiceItem = ({
    title,
    description,
    price,
}) => {
    return (
        <div className='flex items-center justify-between gap-6 py-4'>
            <div>
                <h4 className='text-xl font-bold text-foreground'>
                    {title}
                </h4>

                <p className='mt-1 max-w-md text-base leading-4 text-gray-500'>
                    {description}
                </p>
            </div>

            <span className='shrink-0 text-lg font-bold text-foreground'>
                ${price}
            </span>
        </div>
    )
}

export default ServiceItem