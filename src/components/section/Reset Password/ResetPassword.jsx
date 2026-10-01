import React, { useState } from 'react'
import barber from "../../../assets/images/auth-banner-img-01.png"
import logo from "../../../assets/images/logo-white.svg"
import {
    Lock,
    Eye,
    EyeOff,
    ArrowUpRight,
} from "lucide-react";
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <section className='min-h-screen bg-[#f8f9fa] p-4 md:p-6 lg:p-8'>
            <div className=' grid grid-cols-1 overflow-hidden rounded-xl lg:grid-cols-2'>
                <div className='relative hidden h-[calc(100vh-4rem)] overflow-hidden rounded-xl bg-primary lg:block'>
                    <div className='absolute inset-0 opacity-20'>
                        <div className='absolute -left-20 top-10 h-40 w-[780px] border-[20px] border-white/20' />
                        <div className="absolute -left-20 top-40 h-40 w-[700px] border-[20px] border-white/20" />
                        <div className="absolute -left-20 bottom-20 h-40 w-[700px] border-[20px] border-white/20" />
                    </div>

                    <img
                        src={barber}
                        alt="Barber"
                        className='absolute bottom-0 left-1/2 z-10 h-[80%] w-auto max-w-none -translate-x-1/2 object-contain' />

                    <div className='absolute bottom-6 left-6 right-6 z-20 rounded-xl bg-black/50 px-8 py-7 text-center'>
                        <h2 className="font-heading text-3xl font-black text-white xl:text-4xl">
                            Create Your Salon Account
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/90">
                            Join us to manage your appointments, explore grooming
                            services, and enjoy a smooth salon booking experience
                            with our expert stylists.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center px-4 py-8 sm:px-8 lg:px-12 xl:px-20">
                    <div className='mb-7'>
                        <img
                            src={logo}
                            alt="Logo"
                            className='h-14 w-auto object-contain' />
                    </div>

                    <div className='w-full max-w-[700px] rounded-xl border border-gray-200 bg-white p-6 sm:p-8 lg:p-10'>
                        <form className='space-y-5'>

                            {/* New Password */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-foreground">
                                    New Password <span className="text-primary">*</span>
                                </label>

                                <div className="relative">
                                    <Lock
                                        size={18}
                                        className="
                                                                        absolute
                                                                        left-4
                                                                        top-1/2
                                                                        -translate-y-1/2
                                                                        text-gray-400
                                                                    "
                                    />

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="********"
                                        className="
                                                                        h-12
                                                                        w-full
                                                                        rounded-md
                                                                        border
                                                                        border-gray-200
                                                                        bg-white
                                                                        pl-12
                                                                        pr-12
                                                                        text-sm
                                                                        outline-none
                                                                        transition
                                                                        focus:border-primary
                                                                        focus:ring-2
                                                                        focus:ring-primary/10
                                                                    "
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="
                                                                        absolute
                                                                        right-4
                                                                        top-1/2
                                                                        -translate-y-1/2
                                                                        text-gray-400
                                                                        transition
                                                                        hover:text-gray-700
                                                                    "
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-foreground">
                                    Confirm Password <span className="text-primary">*</span>
                                </label>

                                <div className="relative">
                                    <Lock
                                        size={18}
                                        className="
                                                                        absolute
                                                                        left-4
                                                                        top-1/2
                                                                        -translate-y-1/2
                                                                        text-gray-400
                                                                    "
                                    />

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="********"
                                        className="
                                                                        h-12
                                                                        w-full
                                                                        rounded-md
                                                                        border
                                                                        border-gray-200
                                                                        bg-white
                                                                        pl-12
                                                                        pr-12
                                                                        text-sm
                                                                        outline-none
                                                                        transition
                                                                        focus:border-primary
                                                                        focus:ring-2
                                                                        focus:ring-primary/10
                                                                    "
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="
                                                                        absolute
                                                                        right-4
                                                                        top-1/2
                                                                        -translate-y-1/2
                                                                        text-gray-400
                                                                        transition
                                                                        hover:text-gray-700
                                                                    "
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Register */}
                            <Link
                                to="/sign-in"
                                className="
                                    flex
                                    h-13
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-md
                                    bg-[#171111]
                                    text-sm
                                    font-bold
                                    text-white
                                    transition
                                    hover:bg-primary
                                "
                            >
                                Change Password
                                <ArrowUpRight size={17} />
                            </Link>

                            {/* Login */}
                            <p className="pt-1 text-center text-sm text-gray-600">
                                Remember Password?{" "}
                                <a
                                    href="/sign-in"
                                    className="font-medium text-primary hover:underline"
                                >
                                    Sign In
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResetPassword