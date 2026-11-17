import { Scissors } from 'lucide-react'
import React from 'react'

const ServiceCategory = ({ title, items }) => {
    return (
        <div className='relative'>
            <Scissors
                size={42}
                strokeWidth={1}
                className='absolute -right-3 top-0 text-border-strong' />

            <h3 className='pr-14 font-heading text-fluid-4xl font-bold text-primary'>
                {title}
            </h3>

            <div className='mt-8 space-y-5'>
                {items.map((servicesoffer) => (
                    <div key={servicesoffer.name}
                        className='flex items-start justify-between gap-6'>
                        <div>
                            <h4 className='font-heading text-fluid-2xl font-bold text-foreground'>
                                {servicesoffer.name}
                            </h4>

                            <p className='mt-1 text-fluid-sm leading-5 text-muted-foreground'>
                                {servicesoffer.description}
                            </p>
                        </div>

                        <span className='shrink-0 pt-1 font-heading text-fluid-xl font-bold text-foreground'>
                            {servicesoffer.price}
                        </span>
                    </div>  
                ))}
            </div>
        </div>
    )
}

export default ServiceCategory