import React from "react"
import { NavLink } from "react-router-dom"
import { NavLinks } from "../Navbar/NavLinks"
import { Menu, ChevronDown } from "lucide-react"
import textlogo from "../../../assets/images/logo-white.svg"

import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetClose,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button"

const MobileNav = () => {
    return (
        <section className="section-padding">
            <div className="relative z-50 lg:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <button
                            type="button"
                            className="flex h-10 w-10 items-center justify-center rounded-md bg-foreground text-primary-foreground"
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </SheetTrigger>

                    <SheetContent side="left">
                        <div className="mt-8 flex flex-col gap-5 px-6 text-left">
                            <SheetClose asChild>
                                <NavLink to="/" className="mb-4 flex justify-start">
                                    <img
                                        src={textlogo}
                                        alt="Salon Logo"
                                        className="h-auto w-36 object-contain"
                                    />
                                </NavLink>
                            </SheetClose>

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
                                                    <SheetClose asChild key={child.path}>
                                                        <NavLink
                                                            to={child.path}
                                                            className={({ isActive }) =>
                                                                `block w-full text-left font-medium transition-colors hover:text-primary ${isActive
                                                                    ? "text-primary font-semibold"
                                                                    : "text-text-secondary"
                                                                }`
                                                            }
                                                        >
                                                            {child.title}
                                                        </NavLink>
                                                    </SheetClose>
                                                ))}
                                            </div>
                                        </details>
                                    )
                                }

                                return (
                                    <SheetClose asChild key={link.path}>
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) =>
                                                `block w-full text-left font-medium transition-colors hover:text-primary ${isActive
                                                    ? "text-primary font-semibold"
                                                    : "text-text-secondary"
                                                }`
                                            }
                                        >
                                            {link.title}
                                        </NavLink>
                                    </SheetClose>
                                )
                            })}

                            <SheetClose asChild>
                                <Button className="mt-4">
                                    Book Appointment
                                </Button>
                            </SheetClose>

                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </section>
    )
}
export default MobileNav