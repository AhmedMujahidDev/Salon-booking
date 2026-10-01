import React from 'react'
import PricingCard from '../../components/section/Pricing/PricingCard'
import { plans } from '../../components/section/Pricing/PricingData'
import Banner from '@/components/common/Banner'

const Pricing = () => {
    return (
        <section>

            <Banner
                title="Pricing"
                breadcrumbs={[
                    "Home",
                    "Pages",
                    "Pricing"
                ]} />

            <div className="space-y-6 m-16">

                {plans.map((plan) => (
                    <PricingCard
                        key={plan.name}
                        plan={plan}
                    />
                ))}

            </div>
        </section>
    )
}

export default Pricing