import { Link } from '@inertiajs/react';

export default function PromoBanner() {
    return (
        <section
            aria-label="Big dairy sale promotion"
            className="max-w-7xl mx-auto px-4 sm:px-6 py-10"
        >
            <Link
                href="/products"
                aria-label="Shop dairy products with 50 percent discount"
                className="block"
            >
                <div className="relative overflow-hidden rounded-[2rem]">
                    <img
                        src="/images/poster2.png"
                        alt="Big dairy sale get 50 percent off on curd buttermilk paneer and ghee"
                        className="
                            w-full
                            h-[180px]
                            sm:h-[240px]
                            md:h-[300px]
                            lg:h-[340px]
                            object-cover
                        "
                        loading="lazy"
                    />
                </div>
            </Link>
        </section>
    );
}
