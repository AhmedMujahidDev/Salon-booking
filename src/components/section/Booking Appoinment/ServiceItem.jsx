import React, { useState } from 'react'
import BookingSlot from "../../../pages/Booking Slot/BookingSlot"

const ServiceItem = ({ service }) => {
    const [showBooking, setShowBooking] = useState(false);

    return (
        <>
            <div className='flex items-center gap-4 border-t border-border px-6 py-3'>
                <img
                    src={service.image}
                    alt={service.title}
                    className='h-11 w-11 shrink-0 rounded-md object-cover' />

                <div className='min-w-0 flex-1'>
                    <p className='text-fluid-lg font-bold text-foreground'>{service.title}</p>
                    <p className='truncate text-fluid-sm text-muted-foreground'>{service.description}</p>
                </div>

                <div className='mr-6 shrink-0 text-right'>
                    <p className='text-fluid-lg font-bold text-foreground'>${service.price}</p>
                    <p className='text-fluid-sm text-muted-foreground'>{service.duration}</p>
                </div>


                <button
                    onClick={() => setShowBooking(true)}
                    className='shrink-0 rounded-sm bg-primary px-7 py-4 text-fluid-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90'>
                    Book
                </button>
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