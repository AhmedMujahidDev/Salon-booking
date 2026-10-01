import React from "react"
import artical01 from "../../../assets/images/article-01.jpg"
import artical02 from "../../../assets/images/article-02.jpg"
import artical03 from "../../../assets/images/article-03.jpg"

const cards = [
    {
        number: "01",
        title: "Seamless Experience",
        description:
            "Enjoy a smooth and hassle-free journey from booking to service completion.",
        image: artical01,
    },
    {
        number: "02",
        title: "Efficient Service",
        description:
            "Professional grooming delivered with precision and minimal waiting time.",
        image: artical02,
    },
    {
        number: "03",
        title: "Community & Trust",
        description:
            "Built on strong relationships, we foster trust and a sense of community.",
        image: artical03,
    },
]

const ExperienceCard = () => {
    return (
        <section className="section-padding">
            <div className="container-custom">
                <div className="mx-auto flex gap-4">

                    {cards.map((card) => (
                        <div
                            key={card.number}
                            className="
                            group
                            flex
                            h-[450px]
                            w-1/3
                            overflow-hidden
                            transition-all
                            duration-500
                            ease-in-out
                            hover:w-[60%]
                            "
                        >

                            {/* IMAGE */}
                            <div
                                className="
                                relative
                                h-full
                                w-full
                                shrink-0
                                overflow-hidden
                                rounded-lg
                                transition-all
                                duration-500
                                group-hover:w-[calc(100%-300px)]"
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/50" />

                                {/* Number + Title */}
                                <div
                                    className="
                                    absolute
                                    inset-0
                                    z-10
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    text-center
                                    transition-all
                                    duration-300
                                    group-hover:opacity-0"
                                >
                                    <span className="text-8xl font-black text-white">
                                        {card.number}
                                    </span>

                                    <h3 className="text-3xl font-bold text-white">
                                        {card.title}
                                    </h3>
                                </div>
                            </div>

                            {/* DETAIL */}
                            <div
                                className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                text-center"
                            >
                                <span className="text-7xl font-black text-orange-600">
                                    {card.number}
                                </span>

                                <h3 className="mt-3 text-2xl font-bold text-gray-900">
                                    {card.title}
                                </h3>

                                <p className="mt-4 text-xl leading-6 text-gray-600">
                                    {card.description}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default ExperienceCard