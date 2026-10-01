import { Button } from '@base-ui/react'
import { ArrowUpRight, Bell, CircleDot } from 'lucide-react'
import React from 'react'
import AboutFeatureCard from '../Home/AboutFeatureCard'

const AboutContent = () => {
    return (
        <div>
            <span className='inline-flex items-center gap-3 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white'>
                <span>•</span>
                About Us
                <span>•</span>
            </span>

            <h2 className='mt-4 max-w-xl text-3xl font-black leading-tight text-foreground md:text-4xl'>
                Crafting Confidence Through Expert Grooming
            </h2>

            <p className='mt-4 max-w-2xl text-sm leading-6 text-gray-600'>
                From precise fades to luxury beard grooming, we ensure every visit leaves you looking sharp and confident.
            </p>

            <div className='mt-8 grid grid-cols-1 gap-5 md:grid-cols-2'>
                <AboutFeatureCard
                    icon={Bell}
                    title="Professional Experts"
                    description="A stylish and comfortable salon designed for relaxation and confidence."
                    iconColor="bg-primary"
                />

                <AboutFeatureCard
                    icon={CircleDot}
                    title="Modern Approach"
                    description="We are expertise in modern hairstyles, fades, classic cuts, and beard shaping."
                    iconColor="bg-gray-900"
                />

            </div>

            <Button className="flex items-center gap-2 mt-8 rounded-sm bg-foreground px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary cursor-pointer">
                More About Us
                <ArrowUpRight size={16} />
            </Button>
        </div>
    )
}

export default AboutContent