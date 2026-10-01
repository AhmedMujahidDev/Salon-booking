import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import {
    Dialog,
    DialogContent,
} from "../../ui/dialog";

import { categories } from "./data";
import SearchBar from "./SearchBar";
import ServiceCategory from "../../section/Booking Appoinment/ServiceCategory";

const BookingLayout = ({
    open,
    onOpenChange,
    onBack,
    onBook,
}) => {
    const [search, setSearch] = useState("");

    const [openCats, setOpenCats] = useState(
        categories.reduce(
            (acc, c) => ({
                ...acc,
                [c.name]: true,
            }),
            {}
        )
    );

    const toggleCat = (name) =>
        setOpenCats((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));

    const filtered = categories
        .map((cat) => ({
            ...cat,
            services: cat.services.filter((s) =>
                s.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
            ),
        }))
        .filter((cat) => cat.services.length > 0);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl p-0">
                <div className="flex max-h-[80vh]">
                    <div className="flex w-full flex-col bg-gray-50">

                        <div className="flex items-center gap-2 border-b border-gray-200 px-6 py-5">
                            <button
                                onClick={onBack}
                                className="group text-gray-700"
                            >
                                <ChevronLeft
                                    size={22}
                                    className="cursor-pointer text-gray-700 hover:text-primary"
                                />
                            </button>

                            <h2 className="cursor-pointer text-2xl font-bold text-gray-900 hover:text-primary">
                                Choose Services
                            </h2>
                        </div>

                        <SearchBar
                            value={search}
                            onChange={setSearch}
                        />

                        <div className="flex-1 overflow-y-auto">
                            {filtered.map((cat) => (
                                <ServiceCategory
                                    key={cat.name}
                                    category={cat}
                                    isOpen={openCats[cat.name]}
                                    onToggle={() =>
                                        toggleCat(cat.name)
                                    }
                                    onBook={onBook}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BookingLayout;