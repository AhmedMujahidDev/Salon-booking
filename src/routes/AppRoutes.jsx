import MainLayout from '@/layouts/MainLayout'
import PrivateRoutes from "../routes/PrivateRoutes"
import Home from '@/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from '../components/section/Sign Up/Signup'
import VerifyOtp from '../components/section/Sign Up/VerifyOtp'
import Signin from '../components/section/Sign In/Signin'
import VerifyLoginOtp from '../components/section/Sign In/VerifyLoginOtp'
import ForgotPassword from '../components/section/Forgot Password/ForgotPassword'
import ResetPassword from '../components/section/Reset Password/ResetPassword'
import ServicesSection from '../pages/Service List/ServicesSection'
import ServicesGridSection from '../pages/Services Grid/ServiceGridSection'
import Booking from '../pages/Booking Appointment/Booking'
import AboutUs from '@/pages/About Us/AboutUs'
import Expert from '@/pages/Expert/Expert'
import Pricing from '@/pages/Pricing/Pricing'
import Membership from '@/pages/Membership/Membership'
import ContactUs from '@/pages/Contact Us/ContactUs'
import ProductGrid from '@/pages/Product Grid/ProductGrid'
import ProductDetail from '@/pages/Product Detail/ProductDetail'
import Cart from '@/pages/Cart/cart'
import CheckoutPage from '@/pages/Checkout/checkoutPages'
import { MyBookings, MyProfile } from '@/pages/Account/AccountPages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/sign-in" element={<Signin />} />
            <Route path="/verify-login-otp" element={<VerifyLoginOtp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/booking-appointment" element={<Booking />} />

            <Route element={<MainLayout />}>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<MyProfile />} />
                    <Route path="/my-bookings" element={<MyBookings />} />
                </Route>

                <Route path='/services/services-list' element={<ServicesSection />} />
                <Route path='/services/package-grid' element={<ServicesGridSection />} />

                <Route path='/about' element={<AboutUs />} />
                <Route path='/expert' element={<Expert />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/membership' element={<Membership />} />
                <Route path='/contact-us' element={<ContactUs />} />

                <Route path='/products-Grid' element={<ProductGrid />} />
                <Route path='/products-detail/:id' element={<ProductDetail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<CheckoutPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes