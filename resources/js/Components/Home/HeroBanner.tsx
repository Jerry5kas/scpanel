import { Link } from '@inertiajs/react';

export default function HeroBanner() {
    return (
        <section aria-label="Promotional banner" className="mx-auto mt-4 max-w-7xl px-4 sm:px-6">
            <Link href="/subscriptions" aria-label="View subscription plans" className="block">
                <div className="relative h-auto w-full overflow-hidden rounded-2xl sm:h-60 md:h-96">
                    <img
                        src="/images/banner.png"
                        alt="Fresh dairy milk delivery subscription banner"
                        className="h-auto w-full object-cover"
                        loading="eager"
                    />
                </div>
            </Link>
        </section>
    );
}
