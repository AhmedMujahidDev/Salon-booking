import Banner from '@/components/common/Banner'
import React from 'react'
import ContactDetail from '../../components/section/Contact Us/ContactDetail'
import ContactForm from '../../components/section/Contact Us/ContactForm'
import OfficeLocation from '../../components/section/Contact Us/OfficeLocation'

const ContactUs = () => {
    return (
        <section>
            <Banner
                title="Contact Us"
                breadcrumbs={[
                    "Home",
                    "Pages",
                    "Contact Us"
                ]} />

            <div className='container-custom'>
                <div className='grid grid-cols-1 items-start gap-6 lg:grid-cols-2'>
                    <ContactDetail />
                    <ContactForm />
                </div>
            </div>

            <OfficeLocation />
        </section>
    )
}

export default ContactUs