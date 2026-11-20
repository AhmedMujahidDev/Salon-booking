import { useState } from "react"
import { NavLink } from "react-router-dom"
import { NavLinks } from "../Navbar/NavLinks"
import { Menu, ChevronDown } from "lucide-react"
import textlogo from "../../../assets/images/logo-white.svg"

import {
    Sheet,
    SheetTrigger,
    SheetContent,
} from "@/components/ui/sheet"

const MobileNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative z-50 lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger className="flex h-10 w-10 items-center justify-center rounded-md bg-foreground text-primary-foreground">
                    <Menu className="h-6 w-6" />
                </SheetTrigger>

                <SheetContent side="left">
                    <div className="mt-8 flex flex-col gap-5 px-6 text-left">
                        <NavLink
                            to="/"
                            onClick={() => setOpen(false)}
                            className="mb-4 flex justify-start"
                        >
                            <img
                                src={textlogo}
                                alt="Salon Logo"
                                className="h-auto w-36 object-contain"
                            />
                        </NavLink>

                        {NavLinks.filter(Boolean).map((link) => {
                            if (link.children?.length) {
                                return (
                                    <details key={link.title} className="group">
                                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium hover:text-primary">
                                            {link.title}
                                            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                                        </summary>

                                        <div className="mt-3 flex flex-col gap-3 pl-4">
                                            {link.children.map((child) => (
                                                <NavLink
                                                    key={child.path}
                                                    to={child.path}
                                                    onClick={() => setOpen(false)}
                                                    className={({ isActive }) =>
                                                        `block w-full text-left font-medium transition-colors hover:text-primary ${isActive
                                                            ? "text-primary font-semibold"
                                                            : "text-text-secondary"
                                                        }`
                                                    }
                                                >
                                                    {child.title}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </details>
                                )
                            }

                            return (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `block w-full text-left font-medium transition-colors hover:text-primary ${isActive
                                            ? "text-primary font-semibold"
                                            : "text-text-secondary"
                                        }`
                                    }
                                >
                                    {link.title}
                                </NavLink>
                            )
                        })}

                        <NavLink
                            to="/booking-appointment"
                            onClick={() => setOpen(false)}
                            className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground"
                        >
                            Book Appointment
                        </NavLink>

                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
export default MobileNav