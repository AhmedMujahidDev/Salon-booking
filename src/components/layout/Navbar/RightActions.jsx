import { useEffect, useRef, useState } from "react";
import {
  Search,
  CalendarDays,
  ChevronDown,
  CircleUserRound,
  LogOut,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { logout } from "../../../services/authServices";

const RightActions = () => {
  const { token, user, logoutUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const menuRef = useRef(null);
  const displayName = user?.name || "My account";
  const email = user?.email || "";
  const initials = displayName === "My account"
    ? <CircleUserRound className="h-5 w-5" aria-hidden="true" />
    : displayName.charAt(0).toUpperCase();

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const handleLogout = async () => {
    setMenuOpen(false);
    setLoggingOut(true);

    try {
      await logout(token);
    } catch (error) {
      console.error("Backend logout request failed.", error);
    } finally {
      logoutUser();
      navigate("/sign-in", { replace: true });
    }
  };

  return (
    <div className="flex w-[40%] items-center justify-end gap-2 sm:gap-4">
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

      {isAuthenticated && (
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            aria-label="Open profile menu"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 max-w-44 items-center gap-2 rounded-full border border-border bg-background px-2 text-foreground shadow-sm transition hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:h-11 sm:px-3"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {initials}
            </span>
            <span className="hidden max-w-24 truncate text-sm font-semibold sm:block">
              {displayName}
            </span>
            <ChevronDown
              className={`hidden h-4 w-4 shrink-0 transition-transform sm:block ${menuOpen ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>

          {menuOpen && (
            <div
              role="menu"
              aria-label="Profile menu"
              className="absolute right-0 z-[60] mt-3 w-[min(20rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-border bg-background shadow-xl"
            >
              <div className="border-b border-border bg-muted/50 px-4 py-4">
                <p className="truncate text-sm font-semibold text-foreground">{displayName}</p>
                {email && <p className="mt-1 truncate text-xs text-muted-foreground">{email}</p>}
              </div>

              <div className="p-2">
                <Link
                  to="/profile"
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:bg-muted focus-visible:outline-none"
                >
                  <UserRound className="h-4 w-4" aria-hidden="true" />
                  My Profile
                </Link>
                <Link
                  to="/my-bookings"
                  role="menuitem"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:bg-muted focus-visible:outline-none"
                >
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  My Bookings
                </Link>
                <div className="my-1 border-t border-border" />
                <button
                  type="button"
                  role="menuitem"
                  onClick={handleLogout}
                  disabled={loggingOut}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-red-600 transition-colors hover:bg-red-50 focus-visible:bg-red-50 focus-visible:outline-none disabled:cursor-wait disabled:opacity-60"
                >
                  <LogOut className="h-4 w-4" aria-hidden="true" />
                  {loggingOut ? "Signing out..." : "Logout"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mobile Menu */}
      <MobileNav />
    </div>
  );
};

export default RightActions;