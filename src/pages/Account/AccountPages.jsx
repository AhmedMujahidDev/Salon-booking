import { Link } from "react-router-dom";
import { CalendarDays, UserRound } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const AccountPageLayout = ({ title, description, icon: Icon, children }) => (
    <section className="min-h-screen bg-surface-subtle section-padding">
        <div className="container-custom rounded-xl border border-border bg-background p-6 shadow-sm sm:p-8">
            <div className="mb-8 flex items-center gap-4 border-b border-border pb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                    <h1 className="font-heading text-fluid-2xl font-bold text-foreground">{title}</h1>
                    <p className="mt-1 text-fluid-sm text-muted-foreground">{description}</p>
                </div>
            </div>
            {children}
        </div>
    </section>
);

export const MyProfile = () => {
    const { user } = useAuth();

    return (
        <AccountPageLayout
            title="My Profile"
            description="Your account information"
            icon={UserRound}
        >
            <dl className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-lg bg-muted/50 p-4">
                    <dt className="text-sm text-muted-foreground">Name</dt>
                    <dd className="mt-1 font-semibold text-foreground">{user?.name || "Not provided"}</dd>
                </div>
                <div className="rounded-lg bg-muted/50 p-4">
                    <dt className="text-sm text-muted-foreground">Email</dt>
                    <dd className="mt-1 break-all font-semibold text-foreground">{user?.email || "Not provided"}</dd>
                </div>
            </dl>
        </AccountPageLayout>
    );
};

export const MyBookings = () => (
    <AccountPageLayout
        title="My Bookings"
        description="View and manage your salon appointments"
        icon={CalendarDays}
    >
        <div className="py-8 text-center">
            <CalendarDays className="mx-auto h-10 w-10 text-muted-foreground" aria-hidden="true" />
            <h2 className="mt-4 font-heading text-lg font-semibold text-foreground">No bookings to show</h2>
            <p className="mt-2 text-fluid-sm text-muted-foreground">
                Your appointments will appear here once they are available.
            </p>
            <Link
                to="/booking-appointment"
                className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
                Book an appointment
            </Link>
        </div>
    </AccountPageLayout>
);
