import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react"
const TestimonialCard =({
    image,
    name,
    country,
    review,
    rating = "5.0",
}) => {
  return (
    <section>
        <div>
            <div className='group w-full max-w-[420px] bg-white px-8 py-10 text-center shadpow-lg rounded-sm hover:bg-black'>
                <div className='flex flex-col items-center'>
                    <div className='h-20 w-20 overflow-hidden rounded-full bg-pink-300'>
                        <img 
                        src={image}
                        alt={name}
                        className='h-full w-full object-cover'/>
                    </div>

                    <h3 className='mt-3 font-heading text-2xl font-bold text-foreground group-hover:text-white'>
                        {name}
                    </h3>

                    <p className='mt-1 text-lg font-semibold text-gray-500 group-hover:text-white'>
                        {country}
                    </p>
                </div>

                <p className='mx-auto mt-2 max-w-[380px] text-base font-medium leading-7 text-gray-500 group-hover:text-white'>
                    {review}
                </p>

                <div className='mt-6 flex items-center justify-center gap-3'>
                    <div className='flex gap-1 text-primary'>
                        {[...Array(5)].map((_, index) => (
                            <Star 
                            key={index}
                            size={20}
                            fill='currentColor'
                            strokeWidth={0}/>
                        ))}
                    </div>

                    <span className='text-lg font-semibold text-gray-500 group-hover:text-white'>
                        {rating}
                    </span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TestimonialCard