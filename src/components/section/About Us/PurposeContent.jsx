import icon1 from "../../../assets/icons/purpose-icon-1.svg"
import icon2 from "../../../assets/icons/purpose-icon-2.svg"
import icon3 from "../../../assets/icons/purpose-icon-3.svg"
import React from 'react'

const PurposeContent = () => {
    return (
        <div>
            <div>
                <h1 className="font-heading text-3xl font-bold md:text-4xl">
                    Our Purpose & Promise
                </h1>

                <p className="mt-4 leading-7 text-gray-600">
                    At the heart of everything we do is a commitment to enhancing your natural beauty with expert care, creative passion, and an experience that leaves you feeling confident, refreshed, and truly valued.
                </p>
            </div>

            <div className="mt-8 space-y-8">
                {Purpose.map((items, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 sm:gap-6"
                    >
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary sm:h-20 sm:w-20">
                            <img
                                src={items.icon}
                                alt={items.title}
                                className="h-8 w-8 object-contain sm:h-12 sm:w-12"
                            />
                        </div>

                        <div>
                            <h2 className="mb-2 font-heading text-xl font-bold sm:text-2xl">
                                {items.title}
                            </h2>

                            <p className="leading-7 text-gray-600">
                                {items.detail}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PurposeContent

const Purpose = [
    {
        icon: icon1,
        title: "Our Mission",
        detail: "To become the most trusted and innovative beauty destination in the community where creativity",
    },
    {
        icon: icon2,
        title: "Our Vision",
        detail: "To become the most trusted and innovative beauty destination in the community where creativity",
    },
    {
        icon: icon3,
        title: "Our Goals",
        detail: "Our goal is to provide personalized, high-quality beauty services in a welcoming and stylish environment",
    },
]