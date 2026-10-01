import React from 'react'
import ServiceItem from "../Home/ServiceItem"

const ServiceList = ({
    title,
    services,
}) => {
    return (
        <div>
            <h3 className='mb-4 text-3xl font-bold text-forground'>
                {title}
            </h3>

            <div>
                {services.map((service, index) => (
                    <ServiceItem
                        key={index}
                        title={service.title}
                        description={service.description}
                        price={service.price}
                    />
                )
                )}
            </div>
        </div>
    )
}

export default ServiceList