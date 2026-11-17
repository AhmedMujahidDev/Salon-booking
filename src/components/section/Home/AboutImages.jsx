import React from 'react'
import about01 from "../../../assets/images/about-01.jpg"
import about02 from "../../../assets/images/about-02.jpg"
import about03 from "../../../assets/images/about-03.jpg"

const AboutImages = () => {
  return (
    <div className='hidden lg:block'>
      <div className='grid grid-cols-3 items-center gap-5'>
        <img 
        src={about01} 
        alt="Barber grooming"
        className='aspect-[8/21] w-full min-w-0 rounded-sm object-cover' />

        <img 
        src={about02} 
        alt="Professional barber"
        className='mt-14 aspect-[8/21] w-full min-w-0 rounded-sm object-cover' />

        <img 
        src={about03} 
        alt="Barber service"
        className='aspect-[8/21] w-full min-w-0 rounded-sm object-cover' />
      </div>
    </div>
  )
}

export default AboutImages