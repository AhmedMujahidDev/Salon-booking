import { Search, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const RightActions = () => {
  return (
    <div className="flex items-center justify-end gap-4 w-[40%]">
      {/* Search */}
      <Button
        variant="ghost"
        size="icon"
        className="hidden lg:flex"
      >
        <Search className="h-5 w-5" />
      </Button>

      {/* Book Appointment */}
      <Link to='/booking-appointment'>
      <Button
        className="hidden lg:flex items-center gap-2 bg-primary hover:bg-accent-foreground px-6 py-6 text-white cursor-pointer"
      >
        <CalendarDays className="h-5 w-5" />
        Book Appointment
      </Button>
      </Link>

      {/* Mobile Menu */}
      <MobileNav />
    </div>
  );
};

export default RightActions;