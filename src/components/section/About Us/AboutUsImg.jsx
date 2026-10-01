import React from 'react'
import subabout01 from "../../../assets/images/sub-about-1.jpg"
import subabout02 from "../../../assets/images/sub-about-2.jpg"
import subabout03 from "../../../assets/images/sub-about-3.jpg"

const AboutUsImg = () => {
    return (
        <div className='grid grid-cols-1 items-center gap-6 lg:grid-cols-2 '>

            <div className='lg:col-span-2'>
                <img
                    src={subabout01}
                    alt="Barber grooming"
                    className='h-[320px] w-full rounded-sm object-cover' />
            </div>

            <div>
                <img
                    src={subabout02}
                    alt="Professional barber"
                    className='h-[220px] w-full rounded-sm object-cover' />
            </div>

            <div>
                <img
                    src={subabout03}
                    alt="Barber service"
                    className='h-[220px] w-full rounded-sm object-cover' />
            </div>
        </div>
    )
}

export default AboutUsImg