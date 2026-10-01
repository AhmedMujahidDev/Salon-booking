import React from 'react'
import Logo from '../../../assets/images/logo-img.svg'
import { Link } from 'react-router-dom'
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa6";
import footerbg from "../../../assets/images/footer-shadow-1.png"

const FooterMain = () => {
    return (
        <section className='section-padding'>
            <div className='container-custom'>
                <div className='grid gap-14 lg:grid-cols-[2fr_1fr_1fr_1fr]'>
                    <div className='flex flex-col items-center md:items-start'>

                        <div className='bg-cover bg-center bg-no-repeat pt-10'
                            style={{
                                backgroundImage: `url(${footerbg})`,
                            }}>
                            <img src={Logo} alt="DreamSalon" className='h-14 w-auto' />
                        </div>

                        <p className="mt-8 md:max-w-md leading-8 text-white/70">
                            We combine modern techniques with classic grooming
                            traditions to ensure every client receives.
                        </p>

                        <h3 className="mt-12 text-2xl sm:text-3xl font-bold">
                            Subscribe for Newsletter
                        </h3>

                        <form className='flex sm:w-full items-center mt-6 overflow-hidden rounded-lg border border-white/10 '>

                            <input
                                type="email"
                                placeholder='Email Address'
                                className='min-w-0 flex-1 bg-transparent px-3 py-4 sm:px-5 sm:py-4 text-white placeholder:text-white/40 focus:outline-none' />

                            <button
                                type='submit'
                                className=" bg-primary px-3 py-4 sm:px-6 sm:py-2 rounded-sm font-semibold shrink-0 text-white transition hover:opacity-90 "
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* <div className='flex gap-20 justify-center'> */}
                    <div>

                        <h3 className="mb-8 text-3xl font-bold">
                            Quick Links
                        </h3>

                        <ul className="space-y-5">

                            <li><Link to="/">Home</Link></li>

                            <li><Link to="/about">Services</Link></li>

                            <li><Link to="/pricing">Pricing</Link></li>

                            <li><Link to="/services">Booking</Link></li>

                            <li><Link to="/packages">Shops</Link></li>

                            <li><Link to="/blogs">Pages</Link></li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="mb-8 text-3xl font-bold">
                            Company
                        </h3>

                        <ul className="space-y-5">

                            <li><Link to="/contact">Service List</Link></li>

                            <li><Link to="/">Package Grid</Link></li>

                            <li><Link to="/">Booking Appointment</Link></li>

                            <li><Link to="/">Booking Detail</Link></li>

                            <li><Link to="/">About Us</Link></li>

                            <li><Link to="/">Pricing</Link></li>

                            <li><Link to="/">Contact us</Link></li>

                        </ul>

                    </div>
                    <div>

                        <h3 className="mb-8 text-3xl font-bold">
                            Working Hours
                        </h3>

                        <div className="space-y-5">

                            <p>
                                MON - FRI
                                <span className="ml-2 text-white/70">
                                    9:30 AM - 7:30 PM
                                </span>
                            </p>

                            <p>
                                SAT - SUN
                                <span className="ml-2 text-white/70">
                                    7:30 AM - 9:30 PM
                                </span>
                            </p>

                        </div>

                        <div className="mt-10 flex gap-4">

                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition hover:bg-primary"
                            >
                                <FaFacebookF size={18} />
                            </a>

                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition hover:bg-primary"
                            >
                                <FaLinkedinIn size={18} />
                            </a>

                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition hover:bg-primary"
                            >
                                <FaYoutube size={18} />
                            </a>

                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 transition hover:bg-primary"
                            >
                                <FaInstagram size={18} />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default FooterMain