import { MapPin } from 'lucide-react'
import bannerbg from "../../../assets/images/banner-bg-01.png"
import React from 'react'

const OfficeLocation = () => {
    return (
        <section className='section-padding bg-foreground border-b relative bg-cover bg-center bg-no-repeat'
            style={{
                backgroundImage: `url(${bannerbg})`,
            }}>
            <div className='container-custom'>
                <div className='flex justify-center mb-10'>
                    <h2 className='text-background text-3xl font-bold'>Our Office Locations</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-5">
                    {LocationDetail.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="flex w-full items-center gap-5 bg-background p-7 sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] lg:p-9">
                                <div className='flex items-center justify-center'>
                                    <Icon className='h-7 w-7 text-primary' />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-foreground'>{item.location}</h3>
                                    <p className='mt-1 text-muted-foreground'>{item.address}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}

export default OfficeLocation

const LocationDetail = [
    {
        icon: MapPin,
        location: "San Francisco, CA",
        address: "45 Oxford street, 3rd Floor New York, NSW 90001.",
    },
    {
        icon: MapPin,
        location: "Austin, TX",
        address: "1st Floor, 110 South MoPac Expressway, Austin, TX 78746",
    },
    {
        icon: MapPin,
        location: "San Francisco, CA",
        address: "Suite 305, 120 Sunset Blvd, San Francisco, CA 90026",
    }
]