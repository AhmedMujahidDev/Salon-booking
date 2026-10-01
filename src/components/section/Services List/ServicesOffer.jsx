import React from 'react'
import ServiceCategory from '../../section/Services List/ServiceCategory';
import salonImage from '../../../assets/images/services-img.png'
import element from '../../../assets/images/element-4.svg'

const servicesoffer = {
    haircut: {
        title: "Haircut & Styling",
        items: [
            {
                name: "Classic Haircut",
                description: "Professional haircut tailored to your face shape and style.",
                price: "$90",
            },
            {
                name: "Hair Wash & Blow Dry",
                description: "Refreshing hair wash with smooth blow-dry finish.",
                price: "$20",
            },
            {
                name: "Haircut",
                description: "Complete haircut with modern styling for a sharp look.",
                price: "$35",
            },
            {
                name: "Hair Coloring",
                description: "Premium color treatment for vibrant results.",
                price: "$60",
            },
            {
                name: "Hair Spa Treatment",
                description: "Deep conditioning treatment for healthy and shiny hair.",
                price: "$45",
            },
        ],
    },

    facial: {
        title: "Facial & Grooming",
        items: [
            {
                name: "Deep Cleansing Facial",
                description: "Removes dirt and oil for a refreshed and glowing face.",
                price: "$40",
            },
            {
                name: "Skin Brightening Facial",
                description: "Enhances natural glow and improves skin texture.",
                price: "$50",
            },
            {
                name: "Blackhead Removal Treatment",
                description: "Professional skin cleaning for smoother skin.",
                price: "$30",
            },
            {
                name: "Men's Grooming Facial",
                description: "Special facial designed for men's skincare needs.",
                price: "$45",
            },
            {
                name: "Hydrating Facial",
                description: "Restores moisture and keeps skin soft and smooth.",
                price: "$57",
            },
        ],
    },

    beard: {
        title: "Beard & Shaving",
        items: [
            {
                name: "Classic Beard Trim",
                description: "Precise beard shaping to maintain a clean look.",
                price: "$15",
            },
            {
                name: "Beard Styling",
                description: "Beard styling for a modern appearance.",
                price: "$20",
            },
            {
                name: "Hot Towel Shave",
                description: "Traditional hot towel shave for a smooth finish.",
                price: "$25",
            },
            {
                name: "Beard Coloring",
                description: "Natural beard coloring to cover grays perfectly.",
                price: "$30",
            },
            {
                name: "Full Beard Grooming",
                description: "Complete beard trim, shaping, and conditioning.",
                price: "$35",
            },
        ],
    },

    coloring: {
        title: "Hair Coloring & Highlights",
        items: [
            {
                name: "Hair Coloring",
                description: "Professional color application for rich, vibrant hair tones.",
                price: "$70",
            },
            {
                name: "Root Touch-Up",
                description: "Color touch-up to cover roots and maintain a fresh look.",
                price: "$40",
            },
            {
                name: "Hair Highlights",
                description: "Stylish highlights to add dimension and brightness.",
                price: "$80",
            },
            {
                name: "Balayage Coloring",
                description: "Modern balayage technique for a natural blended hair color.",
                price: "$120",
            },
            {
                name: "Gloss & Shine Treatment",
                description: "Enhances hair color while adding smoothness and shine.",
                price: "$50",
            },
        ],
    },
};

const ServicesOffer = () => {
    return (
        <section className='overflow-hidden bg-[#f7f7f5]'>
            <div className='container-custom pt-16 text-center md:pt-24'>
                <h2 className='font-heading text-3xl font-bold text-foreground md:text-5xl'>
                    Professional Hair & Grooming Services
                </h2>
            </div>

            <div className='container-custom grid grid-cols-1 gap-10 py-16 lg:grid-cols-2 lg:gap-20'>
                <ServiceCategory {...servicesoffer.haircut} />

                <ServiceCategory {...servicesoffer.facial} />
            </div>

            <div className="relative h-[440px] md:h-[590px] lg:h-[660px]">
                <img
                    src={salonImage}
                    alt="Salon Service"
                    className="h-full w-full object-cover"
                />

            </div>

            <div className='container-custom grid grid-cols-1 gap-10 py-16 md:py-24 lg:grid-cols-[2fr_1fr_2fr] lg:gap-20'>
                <ServiceCategory {...servicesoffer.beard} />

                <div className='flex justify-center'>

                <img 
                src= {element}
                alt="Element"
                className='h-full w-1/2 object-contain' />
                </div>
                
                <ServiceCategory {...servicesoffer.coloring} />
            </div>
        </section>
    )
}

export default ServicesOffer