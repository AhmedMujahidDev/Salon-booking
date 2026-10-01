import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { slotPeriods, initialSelectedServices, generateDates } from "../../components/section/Booking Slot/data";
import DateCarousel from "../../components/section/Booking Slot/DateCarousel";
import SlotTabs from "../../components/section/Booking Slot/SlotTab";
import TimeSlots from "../../components/section/Booking Slot/TimeSlot";
import ServiceRow from "../../components/section/Booking Slot/ServiceRow";
import CouponBox from "../../components/section/Booking Slot/CouponBox";
import PriceSummary from "../../components/section/Booking Slot/PriceSummary";
import BookingLayout from "../../components/section/Booking Appoinment/BookingLayout";

const BookingSlot = ({ open, onOpenChange, selectedService, onContinue }) => {
    const [dates] = useState(generateDates(30));
    const [selectedDate, setSelectedDate] = useState(dates[1]);
    const [activePeriod, setActivePeriod] = useState("Morning");
    const [selectedTime, setSelectedTime] = useState(slotPeriods.Morning[0]);
    
    const getInitialServices = () => {
        if (selectedService) {
            return [{
                ...selectedService,
                id: selectedService.id || Date.now(),
                duration: selectedService.duration || "30 Mins",
                price: selectedService.price,
                // staff: { name: "Staff Member", avatar: "" },
                date: selectedDate,
                time: selectedTime
            }];
        }
        return initialSelectedServices;
    };
    
    const [services, setServices] = useState(getInitialServices());
    const [discount, setDiscount] = useState(0);
    const [showServices, setshowServices] = useState(false);


    const handleRemoveService = (id) =>
        setServices((prev) => prev.filter((s) => s.id !== id));

    const handleApplyCoupon = (code) => {
        if (code) setDiscount(10);
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent
                className="w-full overflow-y-auto p-6 sm:max-w-xl md:max-w-2xl"
            >
                <SheetHeader className="mb-2 p-0">
                    <SheetTitle className="text-xl font-bold text-gray-900">
                        Time & Date
                    </SheetTitle>
                </SheetHeader>

                <h3 className="mb-3 mt-6 text-base font-bold text-gray-900">
                    Choose Date & Time
                </h3>
                <DateCarousel
                    dates={dates}
                    selectedDate={selectedDate}
                    onSelect={setSelectedDate}
                />

                <div className="mt-6 flex items-center justify-between">
                    <h3 className="text-base font-bold text-gray-900">Choose Slot</h3>
                    <SlotTabs active={activePeriod} onChange={setActivePeriod} />
                </div>
                <TimeSlots
                    times={slotPeriods[activePeriod]}
                    selectedTime={selectedTime}
                    onSelect={setSelectedTime}
                />

                <div className="mt-6 flex items-center gap-3">
                    <h3 className="text-base font-bold text-gray-900">Services</h3>
                    <span className="rounded-md border border-gray-200 px-2 py-0.5 text-xs text-gray-500">
                        Services : {services.length}
                    </span>
                    <span className="rounded-md border border-gray-200 px-2 py-0.5 text-xs text-gray-500">
                        Total Duration : 30 Mins
                    </span>
                    <button
                        onClick={() => setshowServices(true)}
                        className="ml-auto text-sm font-semibold text-primary underline cursor-pointer">
                        Add Another Service
                    </button>

                    <BookingLayout
                        open={showServices}
                        onOpenChange={setshowServices}
                        onContinue={() => {
                            console.log("proceeding to next step");
                            setshowServices(false);
                        }} />
                </div>

                {services.map((service) => (
                    <ServiceRow 
                        key={service.id} 
                        service={{...service, date: selectedDate, time: selectedTime}} 
                        onRemove={handleRemoveService} 
                    />
                ))}

                <div className="mt-8 flex flex-col justify-between gap-8 md:flex-row">
                    <CouponBox onApply={handleApplyCoupon} />
                    <PriceSummary
                        services={services}
                        discount={discount}
                        onContinue={onContinue}
                    />
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default BookingSlot;