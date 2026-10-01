import React from 'react'
import Hero from "../../components/section/Home/Hero"
import CustomMarquee from '../../components/section/Home/CustomMarquee'
import ExperienceCard from '../../components/section/Home/ExperienceCard'
import WhatWeOffer from '../../components/section/Home/WhatWeOffer'
import About from '../../components/section/Home/About'
import Services from '../../components/section/Home/Services'
import Expert from '../../components/section/Home/Expert'
import Testimonial from '../../components/section/Home/Testimonial'

const Home = () => {
  return (
    <div className='relative'>
      <Hero />

      <CustomMarquee />

      <ExperienceCard />

      <WhatWeOffer />

      <About />

      <Services />

      <Expert />

      <Testimonial />
    </div>
  )
}

export default Home