import React from 'react'
import MembershipCard from '../Membership/MembershipCard'
import Header from '@/components/common/Header'
import { MembershipData } from './MembershipData'

const MembershipPlans = () => {
    return (
        <section className='section-padding bg-foreground'>
            <div className='container-custom'>
                <Header
                    heading="Membership Plans"
                    detail="Our memberships are designed to make grooming effortless. Enjoy regular services,
                            exclusive perks, and priority treatment every time you visit."
                    dark={true} />

                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {MembershipData.map((Membership) => (
                        <MembershipCard
                            key={Membership.name}
                            Membership={Membership}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MembershipPlans