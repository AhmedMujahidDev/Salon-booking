import { Bell, CircleDot } from 'lucide-react'
import React from 'react'
import AboutFeatureCard from '../Home/AboutFeatureCard'

const AboutUsContent = () => {
    return (
        <div>
            <h2 className='max-w-xl text-3xl font-black leading-tight text-foreground md:text-4xl'>
                Your Ultimate One Stop Salon Management Solution
            </h2>

            <p className='mt-4 max-w-2xl text-sm leading-6 text-gray-600'>
               Our salon is dedicated to providing modern grooming services designed for today’s stylish and confident men. We combine professional expertise, quality products, and a comfortable atmosphere to deliver a premium grooming experience for every client.
            </p>

            <div className='mt-8 flex flex-col gap-6'>
                <AboutFeatureCard
                    icon={Bell}
                    title="Professional Experts"
                    description="A stylish and comfortable salon designed for relaxation and confidence."
                    iconColor="bg-primary"
                    layout="icon-left"
                />

                <AboutFeatureCard
                    icon={CircleDot}
                    title="Modern Approach"
                    description="We are expertise in modern hairstyles, fades, classic cuts, and beard shaping."
                    iconColor="bg-gray-900"
                    layout="icon-left"
                />

            </div>
        </div>
    )
}

export default AboutUsContent