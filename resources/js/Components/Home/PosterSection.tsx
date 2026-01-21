import { Link } from '@inertiajs/react';

export default function PosterSection() {
    return (
        <section
            aria-label="Promotional banner"
            className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10"
        >
            <Link
                href="/subscriptions"
                aria-label="FreshTick offers and dairy products"
                className="block focus:outline-none rounded-2xl transition-shadow focus:ring-4 focus:ring-opacity-50"
                style={{ '--tw-ring-color': 'var(--primary-color)' } as any}
            >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl group">

                    {/* Banner Image */}
                    <img
                        src="/images/poster1.png"
                        alt="FreshTick promotional banner showing subscription savings and fresh dairy products"
                        className="
                            w-full
                            aspect-[16/7]
                            sm:aspect-[16/6]
                            md:aspect-[16/5]
                            object-cover
                            transition-transform
                            duration-300
                            group-hover:scale-[1.02]
                        "
                        loading="lazy"
                        decoding="async"
                    />

                </div>
            </Link>
        </section>
    );
}
