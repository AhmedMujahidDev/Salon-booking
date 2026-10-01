import img1 from "../../../assets/images/booking-services-img-01.jpg"
import img2 from "../../../assets/images/booking-services-img-02.jpg"
import img3 from "../../../assets/images/booking-services-img-03.jpg"
import img4 from "../../../assets/images/booking-services-img-04.jpg"
import img5 from "../../../assets/images/booking-services-img-05.jpg"
import img6 from "../../../assets/images/booking-services-img-06.jpg"

export const categories =[
    {
    name: "Haircuts",
    services: [
      { image: img1, title: "Haircut & Styling", description: "Tailored haircuts for men, women, and children", price: 49, duration: "45 Mins" },
      { image: img2, title: "Hair Coloring", description: "Enhance your look with our professional hair coloring", price: 99, duration: "30 Mins" },
      { image: img3, title: "Blow Drying", description: "Get a smooth, salon-finished look with our expert.", price: 69, duration: "1 Hr" },
    ],
  },
  {
    name: "Nails",
    services: [
      { image: img4, title: "Manicure & Pedicure", description: "Pamper your hands and feet with our relaxing manicure", price: 99, duration: "30 Mins" },
      { image: img5, title: "Nail Art & Extensions", description: "Express your style with our creative nail art", price: 89, duration: "30 Mins" },
    ],
  },
  {
    name: "Wellness",
    services: [
      { image: img6, title: "Scalp Massage", description: "Unwind with a deeply relaxing scalp massage.", price: 220, duration: "30 Mins" },
    ],
  },
  {
    name: "Facial",
    services: [
      { image: img3, title: "Blow Drying", description: "Get a smooth, salon-finished look with our expert.", price: 220, duration: "30 Mins" },
    ],
  },
]