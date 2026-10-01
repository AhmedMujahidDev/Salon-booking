import React, { useState } from 'react'
import ListingImg01 from '../../../assets/images/listing-img-01.jpg'
import ListingImg02 from '../../../assets/images/listing-img-02.jpg'
import ListingImg03 from '../../../assets/images/listing-img-03.jpg'
import ListingImg04 from '../../../assets/images/listing-img-04.jpg'
import ListingImg05 from '../../../assets/images/listing-img-05.jpg'
import ListingImg06 from '../../../assets/images/listing-img-06.jpg'
import ListingImg07 from '../../../assets/images/listing-img-07.jpg'
import ListingImg08 from '../../../assets/images/listing-img-08.jpg'
import ListingImg09 from '../../../assets/images/listing-img-09.jpg'
import { Check, Clock } from 'lucide-react'

const servicePackages = [
    {
        Image: ListingImg01,
        title: "Hair Care & Styling Package",
        description: "Revitalize your hair with nourishing treatments and expert styling for a smooth and polished finish.",
        features: ["Professional Haircut", "Hair Spa Treatment"],
        duration: "2 Hours",
        price: 79
    },
    {
        Image: ListingImg02,
        title: "Skin Refresh Package",
        description: "A rejuvenating skincare session that deeply cleanses and refreshes your skin for a healthy glow.",
        features: ["Deep Cleansing Facial", "Face Massage Therapy"],
        duration: "30 Mins",
        price: 69
    },
    {
        Image: ListingImg03,
        title: "Relax & Refresh Package",
        description: "Enjoy a relaxing salon experience with grooming, skincare, and massage treatments.",
        features: ["Shoulder Massage", "Hair Wash & Styling"],
        duration: "40 Mins",
        price: 50
    },
    {
        Image: ListingImg04,
        title: "Luxury Grooming Package",
        description: "A premium grooming experience combining advanced hair care and skin treatments.",
        features: ["Premium Hair Spa", "Advanced Facial Treatment"],
        duration: "40 Mins",
        price: 179
    },
    {
        Image: ListingImg05,
        title: "Quick Groom Package",
        description: "A quick grooming solution for a restored, polished appearance before meetings or events.",
        features: ["Hair Trim", "Beard Grooming / Clean Shave"],
        duration: "20 Mins",
        price: 49
    },
    {
        Image: ListingImg06,
        title: "Hair Transformation Package",
        description: "Give your hair a fresh new look with expert cutting, styling, and nourishing treatments.",
        features: ["Precision Haircut", "Hair Wash & Conditioning"],
        duration: "2 Hours",
        price: 59
    },
    {
        Image: ListingImg07,
        title: "Style & Shine Package",
        description: "Perfect for events or special occasions when you want a polished and stylish appearance.",
        features: ["Hair Wash & Styling", "Professional Hair Setting"],
        duration: "60 Mins",
        price: 79
    },
    {
        Image: ListingImg08,
        title: "Glow & Care Package",
        description: "Enhance your natural glow with rejuvenating skin treatments and relaxing grooming services.",
        features: ["Brightening Facial", "Face Massage Therapy"],
        duration: "60 Mins",
        price: 99
    },
    {
        Image: ListingImg09,
        title: "Beard & Groom Package",
        description: "A complete grooming session focused on beard shaping, skin care, and refreshing styling.",
        features: ["Beard Trim & Styling", "Face Clean-Up"],
        duration: "2 Hours",
        price: 55
    },
];

const PER_PAGE = 6;
const ServiceGridCard = () => {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(servicePackages.length / PER_PAGE);
    const start = (page - 1) * PER_PAGE;
    const packages = servicePackages.slice(start, start + PER_PAGE);

    return (
        <section className='section-padding'>
            <div className='container-custom'>
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {packages.map((pkg) => (
                        <div
                            key={pkg.title}
                            className='overflow-hidden rounded-sm p-4 border border-black/10 bg-black/[0.03] transition-colors'>
                            <div className='group h-72 w-full overflow-hidden cursor-pointer'>
                                <img
                                    src={pkg.Image}
                                    alt={pkg.title}
                                    className="h-full w-full object-cover rounded-sm transition-transform duration-500 ease-out group-hover:scale-110" />
                            </div>

                            <div className='p-4'>
                                <h3 className='text-2xl font-semibold hover:text-primary cursor-pointer'>
                                    {pkg.title}
                                </h3>

                                <p className='mt-3 text-gray-600 text-sm leading-relaxed '>
                                    {pkg.description}
                                </p>

                                <div className='flex items-center gap-3 mt-4 '>
                                    {pkg.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className='flex items-center gap-1.5 text-sm text-gray-700'>
                                            <Check size={13} className='shrink-0 text-primary' />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                <hr className='my-5 border-black/15' />

                                <div className='mt-4 flex items-center justify-between border-t border-white/10 pt-3'>
                                    <div>
                                        <p className='text-sm text-gray-600 uppercase tracking-wide'>
                                            Start From
                                        </p>

                                        <p className='text-3xl font-semibold'>
                                            ${pkg.price}
                                        </p>
                                    </div>

                                    <div className='flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-0.5 text-base bg-black/5 '>
                                        <Clock size={15} />
                                        {pkg.duration}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-10 flex items-center justify-center gap-2'>
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors disabled:opacity-30'>
                        ‹
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                        <button
                            key={num}
                            onClick={() => setPage(num)}
                            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors ${page === num
                                ? "bg-primary text-white"
                                : "border border-white/10 hover:border-primary/40"
                                }`}>
                            {num}
                        </button>
                    ))}

                    <button
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className='flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-primary/40 disabled:opacity-30'>
                        ›
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ServiceGridCard