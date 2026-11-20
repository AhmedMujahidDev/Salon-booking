
import React, { useState } from 'react'
import BookingSlot from "../../../pages/Booking Slot/BookingSlot"

const ServiceItem = ({ service }) => {
    const [showBooking, setShowBooking] = useState(false);

    return (
        <>
            <div className='flex items-start sm:items-center gap-4 border-t border-border px-6 py-3'>

                {/* Service Image */}
                <img
                    src={service.image}
                    alt={service.title}
                    className='h-14 w-14 shrink-0 rounded-md object-cover'
                />

                {/* Service Details */}
                <div className='min-w-0 flex-1 flex flex-col sm:flex-row sm:items-center sm:gap-6'>

                    <div className='min-w-0 flex-1'>
                        <p className='text-fluid-lg font-bold text-foreground'>
                            {service.title}
                        </p>

                        <p className='text-fluid-sm text-muted-foreground'>
                            {service.description}
                        </p>
                    </div>

                    {/* Price & Duration */}
                    <div className='mt-4 shrink-0 sm:mt-0 sm:mr-6 sm:text-right'>
                        <p className='text-fluid-lg font-bold text-foreground'>
                            ${service.price}
                        </p>

                        <p className='text-fluid-sm text-muted-foreground'>
                            {service.duration}
                        </p>
                    </div>

                    {/* Book Button */}
                    <button
                        onClick={() => setShowBooking(true)}
                        className='mt-4 self-start shrink-0 rounded-sm bg-primary px-5 py-3 text-fluid-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:mt-0'
                    >
                        Book
                    </button>

                </div>
            </div>

            <BookingSlot
                open={showBooking}
                onOpenChange={setShowBooking}
                selectedService={service}
                onContinue={() => {
                    console.log("proceeding to next step");
                    setShowBooking(false);
                }}
            />
        </>
    )
}

export default ServiceItem
