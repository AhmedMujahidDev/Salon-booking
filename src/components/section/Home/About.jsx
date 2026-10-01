import React from 'react'
import AboutImages from '../Home/AboutImages'
import AboutContent from '../Home/AboutContent'
import AboutLogos from '../Home/AboutLogos'

const About = () => {
    return (
        <section className='section-padding bg-[#fff9f6]'>
            <div className='container-custom'>
                <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
                    <AboutImages />
                    <AboutContent />
                </div>

                <AboutLogos />
            </div>
        </section>
    )
}

export default About