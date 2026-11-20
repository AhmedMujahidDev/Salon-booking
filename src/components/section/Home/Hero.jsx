import React from 'react'
import barberbg from "../../../assets/images/banner-bg.png"
import { ArrowUpRight } from 'lucide-react'
import PlayVideo from '../Home/PlayVideo'

const Hero = () => {
    return (
        <section className='relative min-h-[550px] sm:min-h-screen bg-cover bg-center bg-no-repeat'
            style={{
                backgroundImage: `url(${barberbg})`,
            }}>
            <div className='absolute inset-0 bg-foreground/20' />

            <div className='relative z-10 flex items-center justify-center px-6 py-32 md:py-80'>
                <div className=''>
                    <h1 className='text-center font-sans text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl font-extrabold leading-tight text-primary-foreground'>
                        Precision Haircuts &
                        <br />

                        Premium Grooming for the
                        <br />

                        <span className="text-primary">
                            Modern Gentleman
                        </span>
                    </h1>

                    <button className='mx-auto mt-10 flex items-center justify-center gap-2 rounded-md bg-background px-5 py-3 sm:px-7 sm:py-4 font-semibold text-foreground transition hover:bg-primary hover:text-primary-foreground'>
                        Get Started
                        <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>

            <div className='absolute bottom-10 sm:bottom-20 right-20'>
                <PlayVideo />
            </div>
        </section>
    )
}

export default Hero;
