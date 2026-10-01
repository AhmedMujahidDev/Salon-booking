import staffAvatar from "../../../assets/images/user-09.jpg";
import staff01 from "../../../assets/images/user-10.jpg";
import staff02 from "../../../assets/images/user-11.jpg";
import staff03 from "../../../assets/images/user-12.jpg";

export const slotPeriods = {
  Morning: ["09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
  Afternoon: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM"],
  Evening: ["05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"],
};

export const initialSelectedServices = [
  {
    id: 1,
    title: "Hair Coloring",
    duration: "30 Mins",
    price: 99,
    staff: { name: "Denny Goldman", avatar: staffAvatar },
    time: "10:00 AM - 10:30 AM",
  },
];

export const generateDates = (count = 6, startFrom = new Date()) => {
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(startFrom);
    d.setDate(d.getDate() + i);
    return {
      full: d,
      month: d.toLocaleDateString("default", { month: "short" }),
      day: String(d.getDate()).padStart(2, "0"),
      weekday: d.toLocaleString("default", { weekday: "short" }),
    };
  });
};

export const CouponDetail = [
  {
    id: 1,
    title: "Firt Booking",
    description: "20% of on first booking",
    code: "FIRSTBOOKING",
  },
  {
    id: 2,
    title: "Loyalty Reward",
    description: "15% off of returning customer",
    code: "LOYALTY15",
  },
  {
    id: 3,
    title: "Referral Bonus",
    description: "Get $10 off for every friend your refer",
    code: "REFER10",
  },
  {
    id: 4,
    title: "Birthday Special",
    description: "Enjoy a tretment on your birthday",
    code: "BIRTHDAYGIFT",
  },
  {
    id: 5,
    title: "Seasonal Promotion",
    description: "25% off all services during the holiday season",
    code: "HOLIDAY25",
  },
];

export const Staff = [
  {
    id: 1,
    image: staff01,
    name: "Kathleen Morse",
    role: "Senior Stylist",
  },

  {
    id: 2,
    image: staff02,
    name: "Denny Goldman",
    role: "Senior Stylist",
  },

  {
    id: 3,
    image: staff03,
    name: "James Anderson",
    role: "Senior Stylist",
  },
];
