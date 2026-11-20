import React from 'react'

const PurposeImg = ({ images }) => {
    return (
        <div className='hidden lg:block relative mx-auto aspect-[4/3] w-full max-w-[36rem]'>
            <img
                src={images[2]}
                alt="image 0"
                className='absolute inset-0 h-full w-full rotate-[-7deg] rounded-sm border border-primary-foreground object-cover shadow-xl' />

            <img
                src={images[0]}
                alt="image 1"
                className='absolute bottom-0 left-0 aspect-[4/3] w-1/2 rotate-[-10deg] rounded-md border-[6px] border-primary-foreground object-cover shadow-xl' />

            <img
                src={images[1]}
                alt="image 2"
                className='absolute right-0 bottom-0 aspect-[4/3] w-1/2 rotate-[4deg] rounded-md border-[6px] border-primary-foreground object-cover shadow-2xl' />
        </div>
    )
}

export default PurposeImg
