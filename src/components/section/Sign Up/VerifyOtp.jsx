import { useState } from "react";
import { Navigate, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowUpRight, MailCheck } from "lucide-react";
import barber from "../../../assets/images/auth-banner-img-01.png";
import logo from "../../../assets/images/logo-white.svg";
import { resendOtp, verifyOtp } from "../../../services/authServices";

const getApiError = (error, fallback) =>
    error.response?.data?.error ||
    error.response?.data?.message ||
    error.message ||
    fallback;

const VerifyOtp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const email = location.state?.email || searchParams.get("email") || "";
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    if (!email) {
        return <Navigate to="/sign-up" replace />;
    }

    const handleVerify = async (event) => {
        event.preventDefault();
        setError("");
        setMessage("");
        setLoading(true);

        try {
            await verifyOtp({ email, code });
            navigate("/sign-in", {
                replace: true,
                state: {
                    email,
                    successMessage: "Your email is verified. You can now sign in.",
                },
            });
        } catch (requestError) {
            setError(getApiError(requestError, "Unable to verify your code. Please try again."));
        } finally {
            setLoading(false);
        }
    };

    const handleResend = async () => {
        setError("");
        setMessage("");
        setResending(true);

        try {
            const response = await resendOtp(email);
            setMessage(response.data?.message || "A new verification code has been sent.");
        } catch (requestError) {
            setError(getApiError(requestError, "Unable to resend the code. Please try again."));
        } finally {
            setResending(false);
        }
    };

    return (
        <section className="min-h-screen bg-surface-subtle p-4 md:p-6 lg:p-8">
            <div className="grid min-h-[calc(100vh-2rem)] grid-cols-1 overflow-hidden rounded-xl lg:grid-cols-2">
                <div className="relative hidden min-h-[calc(100vh-3rem)] overflow-hidden rounded-xl bg-primary lg:block">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute -left-20 top-10 h-40 w-[780px] border-[20px] border-primary-foreground/20" />
                        <div className="absolute -left-20 top-40 h-40 w-[700px] border-[20px] border-primary-foreground/20" />
                        <div className="absolute -left-20 bottom-20 h-40 w-[700px] border-[20px] border-primary-foreground/20" />
                    </div>

                    <img
                        src={barber}
                        alt="Barber"
                        className="absolute bottom-0 left-1/2 z-10 h-[80%] w-auto max-w-none -translate-x-1/2 object-contain"
                    />

                    <div className="absolute bottom-6 left-6 right-6 z-20 rounded-xl bg-foreground/50 px-8 py-7 text-center">
                        <h1 className="font-heading text-fluid-3xl font-black text-primary-foreground">
                            One Last Step
                        </h1>
                        <p className="mx-auto mt-4 max-w-xl text-fluid-sm leading-6 text-primary-foreground/90">
                            Verify your email to finish setting up your salon account.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center px-4 py-8 sm:px-8 lg:px-12 xl:px-20">
                    <div className="mb-7">
                        <img src={logo} alt="Salon" className="h-14 w-auto object-contain" />
                    </div>

                    <div className="w-full max-w-[700px] rounded-xl border border-border bg-background p-6 sm:p-8 lg:p-10">
                        <div className="mb-6 text-center">
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <MailCheck size={28} aria-hidden="true" />
                            </div>
                            <h2 className="font-heading text-fluid-2xl font-bold text-foreground">
                                Verify your email
                            </h2>
                            <p className="mt-2 text-fluid-sm text-muted-foreground">
                                Enter the 6-digit code sent to{" "}
                                <span className="font-semibold text-foreground">{email}</span>.
                            </p>
                        </div>

                        <form className="space-y-5" onSubmit={handleVerify}>
                                <div>
                                    <label htmlFor="verification-code" className="mb-2 block text-fluid-sm font-semibold text-foreground">
                                        Verification code
                                    </label>
                                    <input
                                        id="verification-code"
                                        name="code"
                                        type="text"
                                        inputMode="numeric"
                                        autoComplete="one-time-code"
                                        pattern="[0-9]{6}"
                                        maxLength={6}
                                        value={code}
                                        onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 6))}
                                        required
                                        aria-describedby="otp-help"
                                        className="h-14 w-full rounded-md border border-border bg-background text-center text-fluid-2xl font-bold tracking-[0.5em] text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    />
                                    <p id="otp-help" className="mt-2 text-fluid-xs text-muted-foreground">
                                        The code expires after 10 minutes.
                                    </p>
                                </div>

                                {error && (
                                    <p role="alert" className="rounded-md bg-danger-surface p-3 text-fluid-sm text-destructive">
                                        {error}
                                    </p>
                                )}
                                {message && (
                                    <p role="status" className="rounded-md bg-success-surface p-3 text-fluid-sm text-success">
                                        {message}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading || code.length !== 6}
                                    className="flex h-13 w-full items-center justify-center gap-2 rounded-md bg-foreground text-fluid-sm font-bold text-primary-foreground transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {loading ? "Verifying..." : "Verify Email"}
                                    {!loading && <ArrowUpRight size={17} />}
                                </button>

                                <p className="text-center text-fluid-sm text-text-secondary">
                                    Didn&apos;t receive a code?{" "}
                                    <button
                                        type="button"
                                        onClick={handleResend}
                                        disabled={resending}
                                        className="font-medium text-primary hover:underline disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {resending ? "Sending..." : "Resend code"}
                                    </button>
                                </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VerifyOtp;
