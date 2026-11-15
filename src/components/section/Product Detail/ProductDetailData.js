import { Volume } from "lucide-react";
import productimg01 from "../../../assets/images/product-01.png";
import productimg02 from "../../../assets/images/product-02.png";
import productimg03 from "../../../assets/images/product-03.png";
import productimg04 from "../../../assets/images/product-04.png";
import productimg05 from "../../../assets/images/product-05.png";
import productimg06 from "../../../assets/images/product-06.png";
import productimg07 from "../../../assets/images/product-07.png";
import productimg08 from "../../../assets/images/product-08.png";
import productimg09 from "../../../assets/images/product-09.png";

export const productsDetailData = [
  {
    id: "1",
    name: "Pro Cut Trimmer",
    price: 120,
    originalPrice: 150,
    discount: 20,
    rating: 5,
    reviews: 280,
    type: "Grooming Tools",

    images: [productimg01, productimg01, productimg01],

    colors: ["Royal Grey", "Red", "Black"],

    shortDescription:
      "Achieve precise and effortless grooming with the Pro Cut Hair Trimmer. Designed for smooth trimming and comfortable handling.",

    description:
      "The Pro Cut Hair Trimmer is designed for smooth and consistent trimming. It features sharp stainless-steel blades, a powerful motor and an ergonomic design for comfortable handling.",

    specifications: {
      Battery: "120 Minutes",
      Charging: "USB Type-C",
      Blade: "Stainless Steel",
      "Water Resistant": "Yes",
    },

    shipping:
      "Quick and secure delivery to your doorstep within 3–5 business days.",

    returns:
      "Hassle-free returns within 7 days if it doesn't meet expectations.",
  },

  {
    id: "2",
    name: "Silk Glow Hair Dryer",
    price: 80,
    originalPrice: 100,
    discount: 20,
    rating: 5,
    reviews: 190,

    images: [
      "/products/hair-dryer-1.png",
      "/products/hair-dryer-2.png",
      "/products/hair-dryer-3.png",
    ],

    colors: ["Brown", "Black"],

    shortDescription:
      "Professional hair dryer designed for fast drying and smooth styling.",

    description:
      "Silk Glow Hair Dryer provides powerful airflow and multiple heat settings for fast and efficient hair styling.",

    specifications: {
      Power: "1800W",
      "Heat Settings": "3",
      "Speed Settings": "2",
      Motor: "Professional AC Motor",
    },

    shipping:
      "Quick and secure delivery to your doorstep within 3–5 business days.",

    returns:
      "Hassle-free returns within 7 days if it doesn't meet expectations.",
  },

  {
    id: "3",
    name: "Vitamin C Cream",
    price: 60,
    originalPrice: null,
    discount: 0,
    rating: 5,
    reviews: 150,

    images: ["/products/vitamin-c-1.png", "/products/vitamin-c-2.png"],

    colors: ["Orange"],

    shortDescription:
      "Vitamin C cream designed to brighten and nourish your skin.",

    description:
      "A lightweight Vitamin C cream designed for daily skincare and hydration.",

    specifications: {
      "Skin Type": "All Skin Types",
      Volume: "50ml",
      Texture: "Cream",
      Usage: "Daily",
    },

    shipping:
      "Quick and secure delivery to your doorstep within 3–5 business days.",

    returns:
      "Hassle-free returns within 7 days if it doesn't meet expectations.",
  },

  {
    id: "4",
    name: "Moisturizing Cream",
    price: 40,
    originalPrice: 40,
    discount: 0,
    rating: 15,
    reviews: 4,

    images: ["/products/vitamin-c-1.png", "/products/vitamin-c-2.png"],

    colors: ["Orange"],

    shortDescription:
      "Vitamin C cream designed to brighten and nourish your skin.",

    description:
      "A lightweight Vitamin C cream designed for daily skincare and hydration.",

    specifications: {
      "Skin Type": "All Skin Types",
      Volume: "50ml",
      Texture: "Cream",
      Usage: "Daily",
    },

    shipping:
      "Quick and secure delivery to your doorstep within 3–5 business days.",

    returns:
      "Hassle-free returns within 7 days if it doesn't meet expectations.",
  },

  {
    id: "5",
    name: "Shine Hair Serum",
    price: 40,
    originalPrice: 40,
    discount: 0,
    rating: 4,
    reviews: 15,

    images: ["/products/vitamin-c-1.png", "/products/vitamin-c-2.png"],

    colors: ["Orange"],

    shortDescription:
      "Shine Hair Serum adds a beautiful shine to your hair while helping reduce frizz and leaving it smooth, soft, and manageable.",

    description:
      "Give your hair a smooth, shiny, and healthy-looking finish with Shine Hair Serum. Its lightweight formula helps tame frizz, reduce the appearance of flyaways, and make hair easier to manage. Perfect for everyday styling, it leaves your hair feeling soft and looking glossy without weighing it down. Enjoy a sleek, polished look with every use.",

    specifications: {
      "Skin Type": "All Skin Types",
      Benefits: "Adds Shine, Helps Control Frizz, Smooths Hair",
      "Suitable For": "Men and Women",
      Volume: "100ml",
    },

    shipping:
      "Quick and secure delivery to your doorstep within 3–5 business days.",

    returns:
      "Hassle-free returns within 7 days if it doesn't meet expectations.",
  },
  {
    id: 6,
    name: "Night Repair Gel",
    category: "Skin Care",
    color: "Green",
    price: 120,
    originalPrice: 150,
    rating: 5,
    reviews: 12,
    discount: 20,
    createdAt: "2026-09-07",
    image: productimg06,
  },
  {
    id: "7",
    name: "Night Repair Gel",
    price: 120,
    originalPrice: 150,
    discount: 20,
    rating: 5,
    reviews: 12,

    images: ["/products/vitamin-c-1.png", "/products/vitamin-c-2.png"],

    colors: ["Orange"],

    shortDescription:
      "A lightweight night repair gel that hydrates, nourishes, and refreshes your skin overnight.",

    description:
      "Night Repair Gel is designed to keep your skin hydrated, soft, and refreshed while you sleep. Its lightweight, non-greasy formula absorbs easily into the skin, helping maintain moisture and support a healthy-looking complexion by morning.",

    specifications: {
      "Skin Type": "All Skin Types",
      "Product Type": "Night Repair Gel",
      Application: "Nighttime Use",
      Volume: "50ml",
      Usage: "Apply to clean, dry skin before bedtime",
      Storage: "Store in a cool, dry place away from direct sunlight",
    },

    shipping:
      "Quick and secure delivery to your doorstep within 3–5 business days.",

    returns:
      "Hassle-free returns within 7 days if it doesn't meet expectations.",
  },

  {
    id: "8",
    name: "Keratin Boost Serum",
    price: 45,
    originalPrice: 45,
    discount: 0,
    rating: 5,
    reviews: 17,

    images: ["/products/vitamin-c-1.png", "/products/vitamin-c-2.png"],

    colors: ["Orange"],

    shortDescription:
      "Keratin Boost Serum helps nourish, smooth, and strengthen the appearance of hair while adding shine and reducing frizz.",

    description:
      "Keratin Boost Serum is designed to improve the look and feel of your hair by providing smoothness, shine, and manageable texture. Its lightweight formula helps tame frizz, reduce the appearance of dryness, and leave hair looking softer and healthier. Ideal for regular hair care, it helps keep your hair smooth, silky, and easy to style.",

    specifications: {
      "Product Type": "Hair Serum",
      Volume: "50ml",
      Texture: "Cream",
      Usage: "Daily",
    },

    shipping:
      "Quick and secure delivery to your doorstep within 3–5 business days.",

    returns:
      "Hassle-free returns within 7 days if it doesn't meet expectations.",
  },

  {
    id: "9",
    name: "Style Hold Hair Wax",
    price: 50,
    originalPrice: 50,
    discount: 0,
    rating: 4,
    reviews: 10,

    images: ["/products/vitamin-c-1.png", "/products/vitamin-c-2.png"],

    colors: ["Orange"],

    shortDescription:
      "Provides a strong, long-lasting hold to keep your hairstyle neat and stylish throughout the day.",

    description:
      "Style Hold Hair Wax helps you create and maintain your desired hairstyle with a firm, flexible hold and a natural-looking finish. Easy to apply and style, it adds definition and control without making your hair feel overly stiff. Ideal for everyday use and a variety of hairstyles.",

    specifications: {
      "Product Type": "Hair Styling Wax",
      "Hair Type": "Suitable for most hair types",
      Texture: "Wax",
      Purpose: "Styling, shaping, and defining hair",
      Usage: "Daily",
    },

    shipping:
      "Quick and secure delivery to your doorstep within 3–5 business days.",

    returns:
      "Hassle-free returns within 7 days if it doesn't meet expectations.",
  },

  {
    id: "10",
    name: "Pure Glow Face Cleanser",
    price: 60,
    originalPrice: 70,
    discount: 14,
    rating: 5,
    reviews: 28,

    images: ["/products/vitamin-c-1.png", "/products/vitamin-c-2.png"],

    colors: ["Orange"],

    shortDescription:
      "Gently cleanses the skin, removes dirt and excess oil, and leaves your face feeling fresh, clean, and radiant.",

    description:
      "Pure Glow Face Cleanser is designed to cleanse your skin by removing everyday dirt, excess oil, and impurities. Its gentle cleansing action helps leave your face feeling refreshed, smooth, and clean without an overly heavy feel. Ideal for incorporating into your daily skincare routine for a fresh, healthy-looking glow.",

    specifications: {
      "Skin Type": "Suitable for most skin types",
      "Product Type": "Facial Cleanser",
      Volume: "50ml",
      Texture: "Liquid / Gel",
      Packaging: "Bottle or tube",
      Usage: "Daily",
    },

    shipping:
      "Quick and secure delivery to your doorstep within 3–5 business days.",

    returns:
      "Hassle-free returns within 7 days if it doesn't meet expectations.",
  },
];


export const reviewData = [
  {
    id: "review_123",
    productId: "product_456",
    user: {
      id: "user_783",
      name: "Ahmed",
    },
    rating: 3,
    comment: "Excellent product!",
    createdAt: "2026-11-10T12:30:00.000Z",
  },

  {
    id: "review_124",
    productId: "product_457",
    user: {
      id: "user_785",
      name: "Ali",
    },
    rating: 5,
    comment: "Need impovement in the product!",
    createdAt: "2026-11-10T12:30:00.000Z",
  },

  {
    id: "review_125",
    productId: "product_458",
    user: {
      id: "user_786",
      name: "Usman",
    },
    rating: 4,
    comment: "Not upto the mark",
    createdAt: "2026-11-10T12:30:00.000Z",
  },

  {
    id: "review_126",
    productId: "product_459",
    user: {
      id: "user_787",
      name: "Zain",
    },
    rating: 5,
    comment: "Recomended",
    createdAt: "2026-11-10T12:30:00.000Z",
  },

  {
    id: "review_127",
    productId: "product_451",
    user: {
      id: "user_788",
      name: "Saad",
    },
    rating: 2,
    comment: "Excellent product!",
    createdAt: "2026-11-10T12:30:00.000Z",
  },

  {
    id: "review_128",
    productId: "product_452",
    user: {
      id: "user_789",
      name: "Osama",
    },
    rating: 3,
    comment: "I use this product very much usefull",
    createdAt: "2026-11-10T12:30:00.000Z",
  },
];
export default reviewData;