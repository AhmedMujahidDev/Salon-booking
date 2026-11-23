
import { useState } from 'react'
import { login } from '../../../services/authServices'
import {
    ArrowUpRight,
    Eye,
    EyeOff,
    Lock,
    Mail,
} from 'lucide-react'
import barber from "../../../assets/images/auth-banner-img-01.png"
import logo from "../../../assets/images/logo-white.svg"
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Signin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState(location.state?.email || "")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(location.state?.successMessage || "")

    const handleLogin = async (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")
        setLoading(true)

        try {
            const response = await login({ email, password })
            setSuccess(response.message || "OTP sent successfully")
            navigate("/verify-login-otp", {
                replace: true,
                state: { email }
            })
        } catch (error) {
            setError(
                error.response?.data?.message ||
                error.response?.data?.error ||
                "Login failed. Please try again."
            )
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className='min-h-screen bg-surface-subtle p-4 md:p-6 lg:p-8'>
            <div className='grid grid-cols-1 overflow-hidden rounded-xl lg:grid-cols-2'>

                {/* Left Banner */}
                <div className='relative hidden h-[calc(100vh-4rem)] overflow-hidden rounded-xl bg-primary lg:block'>

                    <div className='absolute inset-0 opacity-20'>
                        <div className='absolute -left-20 top-10 h-40 w-[780px] border-[20px] border-primary-foreground/20' />
                        <div className="absolute -left-20 top-40 h-40 w-[700px] border-[20px] border-primary-foreground/20" />
                        <div className="absolute -left-20 bottom-20 h-40 w-[700px] border-[20px] border-primary-foreground/20" />
                    </div>

                    <img
                        src={barber}
                        alt="Barber"
                        className='absolute bottom-0 left-1/2 z-10 h-[80%] w-auto max-w-none -translate-x-1/2 object-contain'
                    />

                    <div className='absolute bottom-6 left-6 right-6 z-20 rounded-xl bg-foreground/50 px-8 py-7 text-center'>

                        <h2 className="font-heading text-fluid-3xl font-black text-primary-foreground">
                            Create Your Salon Account
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-fluid-sm leading-6 text-primary-foreground/90">
                            Join us to manage your appointments, explore grooming
                            services, and enjoy a smooth salon booking experience
                            with our expert stylists.
                        </p>

                    </div>
                </div>

                {/* Right Login Form */}
                <div className="flex flex-col items-center justify-center px-4 py-8 sm:px-8 lg:px-12 xl:px-20">

                    <div className='mb-7'>
                        <img
                            src={logo}
                            alt="Logo"
                            className='h-14 w-auto object-contain'
                        />
                    </div>

                    <div className='w-full max-w-[700px] rounded-xl border border-border bg-background p-6 sm:p-8 lg:p-10'>

                        <form onSubmit={handleLogin} className='space-y-5'>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-fluid-sm font-semibold text-foreground">
                                    Email <span className="text-primary">*</span>
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Enter Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="h-12 w-full rounded-md border border-border bg-background pl-12 pr-4 text-fluid-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label className="mb-2 block text-fluid-sm font-semibold text-foreground">
                                    Password <span className="text-primary">*</span>
                                </label>

                                <div className="relative">
                                    <Lock
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                                    />

                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder="Enter Password"
                                        className="h-12 w-full rounded-md border border-border bg-background pl-12 pr-12 text-fluid-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    />

                                    {/* Show / Hide Password */}
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-text-secondary"
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Error / Success Messages */}
                            {error && (
                                <p className="text-sm text-red-500">
                                    {error}
                                </p>
                            )}

                            {success && (
                                <p className="text-sm text-green-600">
                                    {success}
                                </p>
                            )}

                            {/* Remember Me / Forgot Password */}
                            <div className="flex justify-between items-center gap-2">

                                <div className='flex gap-2'>
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        className="h-4 w-4 cursor-pointer rounded border-border-strong accent-primary"
                                    />

                                    <label
                                        htmlFor="terms"
                                        className="cursor-pointer text-fluid-sm text-foreground"
                                    >
                                        Remember Me
                                    </label>
                                </div>

                                <Link
                                    to="/forgot-password"
                                    className="cursor-pointer text-primary hover:underline"
                                >
                                    Forgot Password?
                                </Link>

                            </div>

                            {/* Sign In Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex h-13 w-full items-center justify-center gap-2 rounded-md bg-foreground text-fluid-sm font-bold text-primary-foreground transition hover:bg-primary disabled:opacity-50"
                            >
                                {loading ? "Please wait..." : "Sign In"}

                                {!loading && <ArrowUpRight size={17} />}
                            </button>

                            {/* Register */}
                            <p className="pt-1 text-center text-fluid-sm text-text-secondary">
                                Don't have an account?{" "}

                                <Link
                                    to="/sign-up"
                                    className="font-medium text-primary hover:underline"
                                >
                                    Sign Up
                                </Link>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signin