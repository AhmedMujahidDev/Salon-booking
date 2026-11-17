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
                <div className="mx-auto flex flex-col md:flex-row gap-4">

                    {cards.map((card) => (
                        <div
                            key={card.number}
                            className="group relative flex h-[350px] w-full md:h-[450px] md:w-1/3 md:overflow-hidden md:transition-all md:duration-500 md:ease-in-out md:hover:w-[60%]"
                        >

                            {/* IMAGE */}
                            <div
                                className="relative hidden h-full w-full shrink-0 overflow-hidden rounded-lg md:block md:transition-all md:duration-500 md:group-hover:w-[calc(100%-300px)]"
                            >
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-foreground/35 transition-all duration-500 group-hover:bg-foreground/50" />

                                {/* Number + Title */}
                                <div
                                    className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:opacity-0"
                                >
                                    <span className="text-fluid-4xl font-black text-primary-foreground">
                                        {card.number}
                                    </span>

                                    <h3 className="text-fluid-3xl font-bold text-primary-foreground">
                                        {card.title}
                                    </h3>
                                </div>
                            </div>

                            {/* DETAIL */}
                            <div
                                className="flex w-full flex-col items-start sm:items-center justify-center bg-background px-3 text-left sm:text-center rounded-2xl border-2 md:absolute md:inset-y-0 md:right-0 md:w-[300px] md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100"
                            >
                                <span className="text-fluid-4xl font-black text-primary">
                                    {card.number}
                                </span>

                                <h3 className="mt-3 text-fluid-2xl font-bold text-foreground">
                                    {card.title}
                                </h3>

                                <p className="mt-4 text-fluid-xl leading-6 text-text-secondary">
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