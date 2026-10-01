import React from 'react'

const PurposeImg = ({ images }) => {
    return (
        <div className='relative mx-auto h-105 w-full'>
            <img
                src={images[2]}
                alt="image 0"
                className='absolute left-6 top-0 h-ful w-full rotate-[-7deg] rounded-sm border-white object-cover shadow-xl' />

            <img
                src={images[0]}
                alt="image 1"
                className='absolute left-0 top-67 h-55 w-1/2 rotate-[-10deg] rounded-md border-[6px] border-white object-cover shadow-xl' />

            <img
                src={images[1]}
                alt="image 2"
                className='absolute left-105 top-47 h-60 w-1/2 rotate-[4deg] rounded-md border-[6px] border-white object-cover shadow-2xl' />
        </div>
    )
}

export default PurposeImg

