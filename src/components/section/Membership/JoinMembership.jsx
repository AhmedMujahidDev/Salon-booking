import Header from '@/components/common/Header'
import MembershipImg1 from "../../../assets/images/membership-img-01.svg"
import MembershipImg2 from "../../../assets/images/membership-img-02.svg"
import MembershipImg3 from "../../../assets/images/membership-img-03.svg"
import MembershipImg4 from "../../../assets/images/membership-img-04.svg"
import MembershipImg5 from "../../../assets/images/membership-img-05.svg"
import MembershipImg6 from "../../../assets/images/membership-img-06.svg"
import React from 'react'

const JoinMembership = () => {
    return (
        <section className='section-padding'>
            <div className='container-custom'>
                <Header
                    heading="Why Join Our Membership?"
                    detail="Our memberships are designed to make grooming effortless. Enjoy regular services,
                        exclusive perks, and priority treatment every time you visit." />

                <div className='mt-8 grid grid-cols-1 items-center gap-6 lg:grid-cols-3'>
                    {membership.map((member, index) => (
                        <div
                            key={index}
                            className='p-4 border border-gray-200 rounded-sm sm:gap-6'>

                            <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-sm bg-primary sm:h-16 sm:w-16'>
                                <img
                                    src={member.icon}
                                    alt={member.title}
                                    className='h-7 w-7 object-contain sm:h-10 sm:w-10' />
                            </div>

                            <div className='mt-4'>
                                <h3 className='font-bold text-2xl'>
                                    {member.title}
                                </h3>
                            </div>

                            <div className='mt-1'>
                                <p className='text-gray-600'>
                                    {member.detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JoinMembership

const membership = [
    {
        icon: MembershipImg1,
        title: "Priority Booking",
        detail: "Skip the wait and book your preferred time slots with exclusive member access.",
    },
    {
        icon: MembershipImg2,
        title: "Professional Styling",
        detail: "Expert cuts and styles our award-winning grooming specialists.",
    },
    {
        icon: MembershipImg3,
        title: "Members-Only Discounts",
        detail: "Enjoy special pricing on all services and retail products year-round.",
    },
    {
        icon: MembershipImg4,
        title: "Premium Grooming Products",
        detail: "Access to exclusive salon-grade products for at-home care.",
    },
    {
        icon: MembershipImg5,
        title: "Free Beard Maintenance",
        detail: "Complimentary beard trimming and styling with every visit.",
    },
    {
        icon: MembershipImg6,
        title: "Dedicated Grooming Experts",
        detail: "Work with the same trusted stylist who knows your preferences.",
    },
]