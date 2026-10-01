import React from 'react'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileNav = () => {
    return (
        <div className='sm:hidden'>
            <Sheet>
                <SheetTrigger asChild>
                    <button className="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                        <Menu className="h-6 w-6" />
                    </button>
                </SheetTrigger>

                <SheetContent side="right">
                    <div className="mt-8 flex flex-col gap-6">
                        <a href="/">Home</a>
                        <a href="/services">Services</a>
                        <a href="/booking">Booking</a>
                        <a href="/shop">Shop</a>    
                        <a href="/pages">Pages</a>

                        <Button className="mt-4">
                            Book Appointment
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default MobileNav