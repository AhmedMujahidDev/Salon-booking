import React from 'react'
import barberbg from "../../../assets/images/banner-bg.png"
import { ArrowUpRight } from 'lucide-react'
import PlayVideo from '../Home/PlayVideo'

const Hero = () => {
    return (
        <section className='relative min-h-screen bg-cover bg-center bg-no-repeat'
            style={{
                backgroundImage: `url(${barberbg})`,
            }}>
            <div className='absolute inset-0 bg-black/20' />

            <div className='relative z-10 flex min-h-screen items-center justify-center px-6 py-80'>
                <div className='container-custom'>
                    <h1 className='text-center font-sans text-5xl font-extrabold leading-tight text-white md:text-7xl'>
                        Precision Haircuts &
                        <br />

                        Premium Grooming for the
                        <br />

                        <span className="text-orange-600">
                            Modern Gentleman
                        </span>
                    </h1>

                    <button className='mx-auto mt-10 flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 font-semibold text-black transition hover:bg-orange-600 hover:text-white'>
                        Get Started
                        <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>

            <div className='absolute bottom-20 right-20'>
                <PlayVideo />
            </div>
        </section>
    )
}

export default Hero;
