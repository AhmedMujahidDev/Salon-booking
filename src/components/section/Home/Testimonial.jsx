import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import user09 from "../../../assets/images/user-09.jpg"
import user10 from "../../../assets/images/user-10.jpg"
import user11 from "../../../assets/images/user-11.jpg"
import user12 from "../../../assets/images/user-12.jpg"
import user13 from "../../../assets/images/user-13.jpg"
import user14 from "../../../assets/images/user-14.jpg"
import TestimonialCard from "./TestimonialCard"

const testimonials = [
    {
        name: "Matthew Taylor",
        country: "Canada",
        image: user09,
        review:
            "Clean, stylish salon with expert specialists. I always get the exact haircut and beard style I want.",
        rating: "5.0",
    },
    {
        name: "James Markram",
        country: "USA",
        image: user10,
        review:
            "Clean, stylish salon with expert specialists. I always get the exact haircut and beard style I want.",
        rating: "5.0",
    },
    {
        name: "Olivia Madison",
        country: "Canada",
        image: user11,
        review:
            "Clean, stylish salon with expert specialists. I always get the exact haircut and beard style I want.",
        rating: "5.0",
    },
    {
        name: "Emma Jenifer",
        country: "USA",
        image: user12,
        review:
            "Clean, stylish salon with expert specialists. I always get the exact haircut and beard style I want.",
        rating: "5.0",
    },
    {
        name: "Ava Hazel",
        country: "Germany",
        image: user13,
        review:
            "Clean, stylish salon with expert specialists. I always get the exact haircut and beard style I want.",
        rating: "5.0",
    },
    {
        name: "Maria Grace",
        country: "France",
        image: user14,
        review:
            "Clean, stylish salon with expert specialists. I always get the exact haircut and beard style I want.",
        rating: "5.0",
    },
]
const Testimonial = () => {
    return (
        <section className="section-padding bg-[#fff9f6]">
            <div className="container-custom">

                {/* Badge */}
                <div className="text-center">
                    <span className="inline-flex items-center gap-3 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white">
                        <span>•</span>
                        Our Testimonials
                        <span>•</span>
                    </span>
                </div>

                {/* Heading */}
                <h2 className="mt-5 text-center font-heading text-3xl font-bold text-foreground md:text-4xl">
                    What Our Customers Say’s
                </h2>

                {/* Slider */}
                <div className="mt-16">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="testimonial-slider pb-14"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide
                                key={testimonial.name}
                                className="flex justify-center"
                            >
                                <TestimonialCard {...testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default Testimonial