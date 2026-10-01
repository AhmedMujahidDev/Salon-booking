import React from 'react'
import AboutUsImg from '../About Us/AboutUsImg'
import AboutUsContent from '../About Us/AboutUsContent'

const AboutSection = () => {
    return (
        <section className='section-padding'>
            <div className='container-custom'>
                <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
                    <AboutUsImg />
                    <AboutUsContent />
                </div>
            </div>
        </section>
    )
}

export default AboutSection