import { Search, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const RightActions = () => {
  return (
    <div className="flex items-center justify-end gap-4 w-[40%]">
      {/* Search */}
      <div className="hidden lg:block">
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5" />
        </Button>
      </div>

      {/* Book Appointment */}
      <div className="hidden lg:block">
        <Link to='/booking-appointment'>
          <Button className="items-center gap-2 bg-primary px-6 py-6 text-primary-foreground hover:bg-accent-foreground">
            <CalendarDays className="h-5 w-5" />
            Book Appointment
          </Button>
        </Link>
      </div>

      {/* Mobile Menu */}
      <MobileNav />
    </div>
  );
};

export default RightActions;