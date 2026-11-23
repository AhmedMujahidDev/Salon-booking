
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signup } from '../../../services/authServices'
import barber from "../../../assets/images/auth-banner-img-01.png"
import logo from "../../../assets/images/logo-white.svg"
import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowUpRight,
} from "lucide-react";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        if (!agreeTerms) {
            setError("Please accept the Terms & Service.");
            return;
        }

        setLoading(true);

        try {
            const response = await signup({
                name,
                email,
                password,
            });

            setSuccess(response.message || "Registration successful. OTP sent to your email.");

            // OTP verification page ko next step mein connect karenge.
            // Email ko next page par bhejne ke liye use kar sakte hain.
            navigate(`/verify-otp?email=${encodeURIComponent(email)}`, { state: { email } });

        } catch (err) {
            setError(
                err.response?.data?.message ||
                err.response?.data?.error ||
                "Registration failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='min-h-screen bg-surface-subtle p-4 md:p-6 lg:p-8'>
            <div className='grid grid-cols-1 overflow-hidden rounded-xl lg:grid-cols-2'>

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

                <div className="flex flex-col items-center justify-center px-4 py-8 sm:px-8 lg:px-12 xl:px-20">

                    <div className='mb-7'>
                        <img
                            src={logo}
                            alt="Logo"
                            className='h-14 w-auto object-contain'
                        />
                    </div>

                    <div className='w-full max-w-[700px] rounded-xl border border-border bg-background p-6 sm:p-8 lg:p-10'>

                        <form className='space-y-5' onSubmit={handleSignup}>

                            {/* Name */}
                            <div>
                                <label className='mb-2 block text-fluid-sm font-semibold text-foreground'>
                                    Name <span className="text-primary">*</span>
                                </label>

                                <div className='relative'>
                                    <User
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="h-12 w-full rounded-md border border-border bg-background pl-12 pr-4 text-fluid-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    />
                                </div>
                            </div>

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
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        minLength={12}
                                        className="h-12 w-full rounded-md border border-border bg-background pl-12 pr-12 text-fluid-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    />

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
                                <p className="mt-1 text-fluid-xs text-muted-foreground">
                                    Password must be at least 12 characters.
                                </p>
                            </div>

                            {/* Terms */}
                            <div className="flex items-center gap-2">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                                    className="h-4 w-4 cursor-pointer rounded border-border-strong accent-primary"
                                />

                                <label
                                    htmlFor="terms"
                                    className="cursor-pointer text-fluid-sm text-text-secondary"
                                >
                                    I agree with{" "}
                                    <a
                                        href="#"
                                        className="font-medium text-primary hover:underline"
                                    >
                                        Terms & Service
                                    </a>
                                </label>
                            </div>

                            {/* Error / Success */}
                            {error && (
                                <p className="text-sm text-red-500">{error}</p>
                            )}

                            {success && (
                                <p className="text-sm text-green-600">{success}</p>
                            )}

                            {/* Register */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex h-13 w-full items-center justify-center gap-2 rounded-md bg-foreground text-fluid-sm font-bold text-primary-foreground transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading ? "Registering..." : "Register"}
                                {!loading && <ArrowUpRight size={17} />}
                            </button>

                            {/* Divider */}
                            <div className="flex items-center gap-4 py-2">
                                <div className="h-px flex-1 bg-border" />

                                <span className="text-fluid-sm text-muted-foreground">
                                    OR
                                </span>

                                <div className="h-px flex-1 bg-border" />
                            </div>

                            {/* Social buttons */}
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                                <button
                                    type="button"
                                    className="flex h-12 items-center justify-center gap-2 rounded-md border border-border text-fluid-sm font-semibold text-text-secondary transition hover:bg-primary hover:text-primary-foreground"
                                >
                                    <FaFacebookF size={16} className="text-social-facebook" />
                                    Facebook
                                </button>

                                <button
                                    type="button"
                                    className="flex h-12 items-center justify-center gap-2 rounded-md border border-border text-fluid-sm font-semibold text-text-secondary transition hover:bg-primary hover:text-primary-foreground"
                                >
                                    <FaGoogle size={16} />
                                    Google
                                </button>

                            </div>

                            {/* Login */}
                            <p className="pt-1 text-center text-fluid-sm text-text-secondary">
                                Already Have Account?{" "}
                                <Link
                                    to="/sign-in"
                                    className="font-medium text-primary hover:underline"
                                >
                                    Sign In
                                </Link>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
