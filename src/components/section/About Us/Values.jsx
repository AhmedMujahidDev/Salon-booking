import React from 'react'
import { User, CalendarCheck2, Users } from 'lucide-react';

const Values = () => {
    return (
        <section className='section-padding'>
            <div className='container-custom'>

                <div className='flex justify-between'>
                    <div className='flex items-center gap-5'>
                        <User color='#fff' size={70} className=' p-2 bg-primary rounded-full border-2 border-primary' />
                        <div className='flex flex-col'>
                            <h3 className='text-white text-4xl font-bold'>5,400+</h3>
                            <p className='text-white mt-1'>Customer World Wide</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <div className='h-12 w-0.5 bg-linear-to-b from-transparent via-orange-500 to-transparent'></div>
                        <CalendarCheck2 color='#fff' size={70} className=' p-2 bg-primary rounded-full border-2 border-primary' />
                        <div className='flex flex-col'>
                            <h3 className='text-white text-4xl font-bold'>10+</h3>
                            <p className='text-white mt-1'>Years of Experience</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <div className='h-12 w-0.5 bg-linear-to-b from-transparent via-orange-500 to-transparent'></div>
                        <User color='#fff' size={70} className=' p-2 bg-primary rounded-full border-2 border-primary' />
                        <div className='flex flex-col'>
                            <h3 className='text-white text-4xl font-bold'>15k+</h3>
                            <p className='text-white mt-1'>Expert Stylist</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <div className='h-12 w-0.5 bg-linear-to-b from-transparent via-orange-500 to-transparent'></div>
                        <User color='#fff' size={70} className=' p-2 bg-primary rounded-full border-2 border-primary' />
                        <div className='flex flex-col'>
                            <h3 className='text-white text-4xl font-bold'>20k+</h3>
                            <p className='text-white mt-1'>Signature Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values