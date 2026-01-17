import { Link } from '@inertiajs/react';

export default function PosterSection() {
    return (
        <section
            aria-label="Promotional banner"
            className="max-w-7xl mx-auto py-10"
        >
            <Link
                href="/subscriptions"
                aria-label="FreshTick offers and dairy products"
                className="block"
            >
                <div className="relative overflow-hidden rounded-3xl">
                    <img
                        src="/images/poster1.png"
                        alt="FreshTick promotional banner showing subscription savings and fresh dairy products"
                        className="w-full h-[180px] sm:h-[240px] md:h-[300px] object-cover"
                        loading="lazy"
                    />
                </div>
            </Link>
        </section>
    );
}
