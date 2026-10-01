const marqueeItems = [
    "Premium Grooming Products",
    "Online Appointment Booking",
    "Trendy and Classic Hairstyles",
];

const CustomMarquee = () => {
    const repeatedItems = [...marqueeItems, ...marqueeItems];

    return (
        <section className="pt-4 sm:pt-8 lg:pt-12">
            <div className="overflow-hidden bg-white/70 pt-5 backdrop-blur-sm">
                <div className="marquee-track flex w-max min-w-full items-center gap-8 whitespace-nowrap">
                    {repeatedItems.map((item, index) => (
                        <div key={`${item}-${index}`} className="flex items-center gap-8">
                            <span className="text-2xl font-heading font-extralight text-transparent [-webkit-text-stroke:2px_gray] hover:text-primary hover:[-webkit-text-stroke:3px] sm:text-3xl lg:text-4xl">
                                {item}
                            </span>
                            <span className="text-2xl text-primary sm:text-3xl lg:text-6xl animate-[spin_4s_linear_infinite]"> ✺</span>
                        </div>
                    ))}
                </div>

                <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: marquee-scroll 25s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
            </div>
        </section>
    );
};

export default CustomMarquee;
