import React from 'react'
import logo from "../../../assets/images/logo-img.svg"

const HeroPanel = ({ heroImage }) => {
  return (
    <div className='relative hidden w-2/5 flex-col justify-center bg-cover bg-center p-12 lg:flex'
    style={{ backgroundImage: `url(${heroImage})`}}
    >
        <div className='absolute inset-0 bg-blac/40' />
        <div className='relative z-10'>
            <div className='m-8 flex items-center gap-2 text-fluid-lg font-bold text-primary-foreground'>
                <img 
                src={logo} 
                alt="Logo"
                className='w-2/5 h-full object-cover' />
            </div>
            <h1 className='m-8 text-fluid-4xl text-left font-extrabold uppercase leading-tight text-primary-foreground'>
                Start Book <br/>
                Your Salon <br />

                <span className='text-fluid-4xl text-primary'>Appointment</span>
            </h1>
        </div>
    </div>
  )
}

export default HeroPanel