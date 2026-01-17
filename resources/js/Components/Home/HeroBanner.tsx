import { Link } from '@inertiajs/react';

export default function HeroBanner() {
    return (
        <section
            aria-label="Promotional banner"
            className="max-w-7xl mx-auto px-4 sm:px-6 mt-4"
        >
            <Link
                href="/subscriptions"
                aria-label="View subscription plans"
                className="block"
            >
                <div className="relative w-full h-[160px] sm:h-[240px] md:h-[380px] rounded-3xl overflow-hidden">
                    <img
                        src="/images/banner.png"
                        alt="Fresh dairy milk delivery subscription banner"
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                </div>
            </Link>
        </section>
    );
}
