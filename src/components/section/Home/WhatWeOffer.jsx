import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import wellness01 from "../../../assets/images/wellness-01.jpg"
import wellness02 from "../../../assets/images/wellness-02.jpg"
import wellness03 from "../../../assets/images/wellness-03.jpg"
import wellness04 from "../../../assets/images/wellness-04.jpg"
import wellness05 from "../../../assets/images/wellness-05.jpg"
import wellness from "../../../assets/images/well-img.jpg"

const services = [
    {
        title: "Classic Haircut",
        description: "Precision cuts tailored to your face shape and style preference.",
        image: wellness01,
    },
    {
        title: "Fade & Modern Styling",
        description: "Trendy fades and contemporary hairstyles crafted by expert barbers.",
        image: wellness02,
    },
    {
        title: "Beard Trim & Styling",
        description: "Shape, trim, and maintain your beard with professional care.",
        image: wellness03,
    },
    {
        title: "Hair Wash & Scalp Massage",
        description: "Refreshing hair cleansing paired with a relaxing scalp treatment.",
        image: wellness04,
    },
    {
        title: "Hair Coloring",
        description: "Professional coloring services for bold styles or natural looks.",
        image: wellness05,
    },
];

const WhatWeOffer = () => {
    const [active, setActive] = useState(0);
    return (
        <section className='section-padding bg-foreground'>
            <div className='container-custom'>
                <div className='grid gap-12 px-6 md:grid-cols-[320px_1fr] md:items-start'>
                    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border border-primary">
                        <img src={wellness} alt="wellness bg" />
                    </div>

                    {/* Right: hoverable list */}
                    <div>
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            What We <span className="text-primary">Offer</span>
                        </h2>

                        <div className="mt-2 divide-y divide-white/5">
                            {services.map((service, i) => (
                                <button
                                    key={service.title}
                                    onMouseEnter={() => setActive(i)}
                                    className="relative flex w-full items-center justify-between gap-6 py-5 text-left"
                                >
                                    <div>
                                        <h3
                                            className={`text-lg font-semibold transition-colors ${active === i ? "text-primary" : "text-white"
                                                }`}
                                        >
                                            {service.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-white/50">
                                            {service.description}
                                        </p>
                                    </div>

                                    {/* absolute positioned — row ki height ko affect nahi karega */}
                                    <div className="absolute right-20 top-1/2 h-[100px] w-[140px] -translate-y-1/2 overflow-hidden rounded-md shadow-lg">
                                        <AnimatePresence mode="wait">
                                            {active === i && (
                                                <motion.img
                                                    key={service.title}
                                                    src={service.image}
                                                    alt={service.title}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                                    className="absolute inset-0 h-full w-full object-cover"
                                                />
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-foreground hover:bg-primary cursor-pointer ">
                                        <ArrowUpRight size={16} />
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeOffer