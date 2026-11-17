import React from 'react'
import logo from "../../../assets/images/logo-white.svg"
import salon1 from "../../../assets/images/salon-img-1.jpg"
import salon2 from "../../../assets/images/salon-img-2.jpg"
import salon3 from "../../../assets/images/salon-img-3.jpg"
import {
    Sheet,
    SheetTrigger,
    SheetContent,
} from "@/components/ui/sheet"
import { MapPinCheck } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Menu } from 'lucide-react';

const SideView = () => {
    return (
        <section className='hidden section-padding sm:block'>
            <div className='container-custom'>
                <Sheet>
                    <SheetTrigger asChild>
                        <button className="flex h-12 w-12 items-center justify-center rounded-md bg-foreground text-primary-foreground">
                            <Menu className="h-6 w-6" />
                        </button>
                    </SheetTrigger>

                    <SheetContent side="right" className="p-6">
                        <img src={logo} alt="logo" className='max-w-52 h-auto' />
                        <div className="flex flex-col gap-4">
                            <p className='mt-5 font-heading text-fluid-sm text-muted-foreground'>We blend modern techniques with classic grooming to deliver personalized care and great results.</p>

                            <div className='grid grid-cols-3 gap-3'>
                                <img src={salon1} alt="Salon Product" className='aspect-square w-full min-w-0 rounded-sm object-cover' />
                                <img src={salon2} alt="Salon Product" className='aspect-square w-full min-w-0 rounded-sm object-cover' />
                                <img src={salon3} alt="Salon Product" className='aspect-square w-full min-w-0 rounded-sm object-cover' />
                            </div>

                            <hr />

                            <div>
                                <h2 className='text-fluid-2xl font-medium'>Get In Touch</h2>
                                <div className='flex gap-6 mt-4'>
                                    <div className='flex items-start gap-4'>
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-secondary">
                                            <MapPinCheck className='rounded-2xl' />
                                        </div>

                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-muted-foreground">
                                            Address
                                        </h3>
                                        <p className="text-fluid-base mt-1 text-foreground font-medium">
                                            123 Madison Street, New York
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex gap-6 mt-4'>
                                        <div className='flex items-start gap-4'>
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-secondary">
                                                <Mail className='rounded-2xl' />
                                            </div>

                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-muted-foreground">
                                                Email
                                            </h3>
                                            <p className="text-fluid-base mt-1 text-foreground font-medium">
                                                info@example.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex gap-6 mt-4'>
                                        <div className='flex items-start gap-4'>
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-secondary">
                                                <Phone className='rounded-2xl' />
                                            </div>

                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-muted-foreground">
                                                Phone Number
                                            </h3>
                                            <p className="text-fluid-base mt-1 text-foreground font-medium">
                                                +1 51254 21356
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <hr className='mt-7' />
                            </div>
                            <h2 className='text-fluid-2xl font-medium'>Working Hours</h2>
                            <div className='flex flex-col gap-2'>
                                <p>MON - FRI 9:30 AM - 7:30 PM</p>
                                <p>SAT - SUN 7:30 AM - 9:30 PM</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </section>
    )
}

export default SideView