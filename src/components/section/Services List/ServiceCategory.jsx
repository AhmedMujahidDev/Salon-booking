import { Scissors } from 'lucide-react'
import React from 'react'

const ServiceCategory = ({ title, items }) => {
    return (
        <div className='relative'>
            <Scissors
                size={42}
                strokeWidth={1}
                className='absolute -right-3 top-0 text-gray-300' />

            <h3 className='pr-14 font-heading text-4xl font-bold text-primary md:text-3xl'>
                {title}
            </h3>

            <div className='mt-8 space-y-5'>
                {items.map((servicesoffer) => (
                    <div key={servicesoffer.name}
                        className='flex items-start justify-between gap-6'>
                        <div>
                            <h4 className='font-heading text-xl font-bold text-foreground md:text-2xl'>
                                {servicesoffer.name}
                            </h4>

                            <p className='mt-1 text-sm leading-5 text-gray-500 md:text-sm'>
                                {servicesoffer.description}
                            </p>
                        </div>

                        <span className='shrink-0 pt-1 font-heading text-xl font-bold text-foreground'>
                            {servicesoffer.price}
                        </span>
                    </div>  
                ))}
            </div>
        </div>
    )
}

export default ServiceCategory