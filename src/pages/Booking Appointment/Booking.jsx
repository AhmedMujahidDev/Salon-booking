import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { categories } from "../../components/section/Booking Appoinment/data";
import HeroPanel from "../../components/section/Booking Appoinment/HeroPanel";
import SearchBar from "../../components/section/Booking Appoinment/SearchBar";
import ServiceCategory from "../../components/section/Booking Appoinment/ServiceCategory";
import salonHeroImg from "../../assets/images/booking-appointment-banner.jpg";
import { Link } from "react-router-dom";

const Booking = ({ onBook }) => {
    const [search, setSearch] = useState("");
    const [openCats, setOpenCats] = useState(
        categories.reduce((acc, c) => ({ ...acc, [c.name]: true }), {})
    );

    const toggleCat = (name) =>
        setOpenCats((prev) => ({ ...prev, [name]: !prev[name] }));

    const filtered = categories
        .map((cat) => ({
            ...cat,
            services: cat.services.filter((s) =>
                s.title.toLowerCase().includes(search.toLowerCase())
            ),
        }))
        .filter((cat) => cat.services.length > 0);

    return (
        <div className="flex min-h-screen">
            <HeroPanel heroImage={salonHeroImg} />

            <div className="flex w-full flex-col bg-muted lg:w-3/5">
                <h1 className="px-6 pt-6 font-heading text-fluid-2xl font-bold text-foreground lg:hidden">
                    Book Your Salon Appointment
                </h1>

                <Link
                    to="/services/services-list"
                    className="flex items-center gap-2 border-b border-border px-6 py-5 text-foreground hover:text-primary"
                >
                    <ChevronLeft size={22} />
                    <span className="text-fluid-2xl font-bold">Choose Services</span>
                </Link>

                <SearchBar value={search} onChange={setSearch} />

                <div className="flex-1 overflow-y-auto">
                    {filtered.map((cat) => (
                        <ServiceCategory
                            key={cat.name}
                            category={cat}
                            isOpen={openCats[cat.name]}
                            onToggle={() => toggleCat(cat.name)}
                            onBook={onBook}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Booking