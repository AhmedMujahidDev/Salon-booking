import React from 'react'
import about01 from "../../../assets/images/about-01.jpg"
import about02 from "../../../assets/images/about-02.jpg"
import about03 from "../../../assets/images/about-03.jpg"

const AboutImages = () => {
  return (
    <div className='flex items-center justify-center gap-5'>
        <img 
        src={about01} 
        alt="Barber grooming"
        className='h-[420px] w-[160px] rounded-sm object-cover' />

        <img 
        src={about02} 
        alt="Professional barber"
        className='mt-14 h-[420px] w-[160px] rounded-sm object-cover' />

        <img 
        src={about03} 
        alt="Barber service"
        className='h-[420px] w-[160px] rounded-sm object-cover' />
    </div>
  )
}

export default AboutImages