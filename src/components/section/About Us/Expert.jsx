import React from 'react'
import ExpertCard from '../About Us/ExpertCard'

const Expert = () => {
    return (
        <section className='section-padding'>
            <div className='container-custom'>
                <div className='flex flex-col justify-center items-center text-center gap-3'>
                    <h2 className='text-4xl font-bold'>Meet Our Experts</h2>
                    <p className='text-base'>Our experienced stylists and beauty experts are here to bring out your best look.</p>
                </div>

                <ExpertCard />
            </div>
        </section>
    )
}

export default Expert