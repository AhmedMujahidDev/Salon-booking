import React from 'react'
import Banner from '@/components/common/Banner'
import AboutSection from '../../components/section/About Us/AboutSection'
import WhoWeAre from '../../components/section/About Us/WhoWeAre'
import Expert from '../../components/section/About Us/Expert'
import Purpose from '../../components/section/About Us/Purpose'

const AboutUs = () => {
    return (
        <section>
            <Banner
                title="About Us"
                breadcrumbs={[
                    "Home",
                    "Pages",
                    "About Us"
                ]} />

                <AboutSection />

                <WhoWeAre />

                <Expert />

                <Purpose />
        </section>
    )
}

export default AboutUs