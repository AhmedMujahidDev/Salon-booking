import Banner from '@/components/common/Banner'
import JoinMembership from '../../components/section/Membership/JoinMembership'
import MembershipCard from '../../components/section/Membership/MembershipCard'
import { MembershipData } from "../../components/section/Membership/MembershipData"
import React from 'react'
import MembershipPlans from '../../components/section/Membership/MembershipPlans'
import MembershipFaq from '../../components/section/Membership/MembershipFaq'

const Membership = () => {
    return (
        <section>
            <Banner
                title="Membership"
                breadcrumbs={[
                    { label: "Home", to: "/" },
                    { label: "Pages", to: "/membership" },
                    { label: "Membership", to: "/membership" }
                ]} />

            <JoinMembership />

            <MembershipPlans />

            <MembershipFaq />
        </section>
    )
}

export default Membership