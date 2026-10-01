import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Signup from '../components/section/Sign Up/Signup'
import Signin from '../components/section/Sign In/Signin'
import ForgotPassword from '../components/section/Forgot Password/ForgotPassword'
import ResetPassword from '../components/section/Reset Password/resetpassword'
import ServicesSection from '../pages/Service List/ServicesSection'
import ServicesGridSection from '../pages/Services Grid/ServiceGridSection'
import Booking from '../pages/Booking Appointment/Booking'
import AboutUs from '@/pages/About Us/AboutUs'
import Expert from '@/pages/Expert/Expert'
import Pricing from '@/pages/Pricing/Pricing'
import Membership from '@/pages/Membership/Membership'
import ContactUs from '@/pages/Contact Us/ContactUs'
import ProductGrid from '@/pages/Product Grid/ProductGrid'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/booking-appointment" element={<Booking />} />

            <Route element={<MainLayout />}>
                <Route
                    path='/home'
                    element={<Home />}
                />

                <Route path='/services/services-list' element={<ServicesSection />} />
                <Route path='/services/package-grid' element={<ServicesGridSection />} />

                <Route path='/about' element={<AboutUs />} />
                <Route path='/expert' element={<Expert />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/membership' element={<Membership />} />
                <Route path='/contact-us' element={<ContactUs />} />

                <Route path='/products-Grid' element={<ProductGrid />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes