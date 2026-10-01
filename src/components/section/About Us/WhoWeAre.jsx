import React from 'react'
import expert from '../../../assets/images/expert.jpg'
import bannerbg from "../../../assets/images/banner-bg-01.png"
import Values from '../About Us/Values'

const WhoWeAre = () => {
    return (
        <section className='section-padding bg-foreground relative bg-cover bg-center bg-no-repeat'
            style={{
                backgroundImage: `url(${bannerbg})`,
            }}>
            <div className='container-custom'>

                <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className='text-3xl font-bold text-white'>Who We Are</h2>
                    <p className='text-base text-white'>Welcome to Dream Salon, where beauty meets expertise and every visit is a step toward confidence and self-care.</p>
                </div>

                <div className='mt-12'>
                    <img src={expert} alt="Salon Image" className='border-14 border-primary rounded-sm' />
                </div>

                <div className='flex justify-center items-center text-center mt-10'>
                    <p className='text-white'>At our salon, we believe that looking your best begins with feeling your best. That’s why we’ve created a warm, inviting space where style, comfort, and personalized care come together. Whether you're here for a fresh haircut, a relaxing facial, or a bold new color, our experienced team is dedicated to helping you shine inside and out.</p>
                </div>

                <Values />
            </div>
        </section>
    )
}

export default WhoWeAre