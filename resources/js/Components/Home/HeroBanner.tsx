import { Link } from '@inertiajs/react';

export default function HeroBanner() {
    return (
        <section aria-label="Promotional banner" className="mx-auto mt-4 max-w-7xl">
            <Link href="/subscriptions" aria-label="View subscription plans" className="block">
                <div className="relative h-auto w-full overflow-hidden rounded-2xl">
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
