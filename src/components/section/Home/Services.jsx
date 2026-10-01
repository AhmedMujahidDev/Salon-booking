import React from "react"
import ServiceList from "./ServiceList"

import haircutImage from "../../../assets/images/services-img-1.jpg"
import groomingImage from "../../../assets/images/services-img-2.jpg"

const hairServices = [
  {
    title: "Classical Haircut",
    description: "Professional haircut tailored to your face shape and style.",
    price: 30,
  },
  {
    title: "Hair Wash & Blow Dry",
    description: "Refreshing hair wash with smooth blow-dry finish.",
    price: 20,
  },
  {
    title: "Haircut & Styling",
    description: "Complete haircut with modern styling for a sharp look.",
    price: 35,
  },
  {
    title: "Hair Coloring",
    description: "Premium color treatment for vibrant and natural results.",
    price: 60,
  },
  {
    title: "Hair Spa Treatment",
    description: "Deep conditioning treatment for healthy and shiny hair.",
    price: 45,
  },
]

const groomingServices = [
  {
    title: "Deep Cleansing Facial",
    description: "Removes dirt and oil for a refreshed and glowing face.",
    price: 40,
  },
  {
    title: "Skin Brightening Facial",
    description: "Enhances natural glow and improves skin texture.",
    price: 50,
  },
  {
    title: "Blackhead Removal Treatment",
    description: "Professional skin cleaning for smoother skin.",
    price: 30,
  },
  {
    title: "Men's Grooming Facial",
    description: "Special facial designed for men's skincare needs.",
    price: 45,
  },
  {
    title: "Hydrating Facial",
    description: "Restores moisture and keeps skin soft and smooth.",
    price: 57,
  },
]

const Services = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-3 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
            • Services •
          </span>

          <h2 className="mt-3 text-3xl font-black text-foreground md:text-4xl">
            Our Signature Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">

          {/* LEFT TOP */}
          <div className="overflow-hidden">
            <img
              src={haircutImage}
              alt="Haircut service"
              className="h-[500px] w-full object-cover"
            />
          </div>

          {/* RIGHT TOP */}
          <ServiceList
            title="Haircut & Styling"
            services={hairServices}
          />

          {/* LEFT BOTTOM */}
          <ServiceList
            title="Facial & Grooming"
            services={groomingServices}
          />

          {/* RIGHT BOTTOM */}
          <div className="overflow-hidden">
            <img
              src={groomingImage}
              alt="Grooming service"
              className="h-[500px] w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services