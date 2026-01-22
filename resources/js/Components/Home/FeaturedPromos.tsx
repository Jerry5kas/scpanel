import { Link } from '@inertiajs/react';

export default function FeaturedPromos() {
    return (
        <section className="max-w-7xl mx-auto py-8">
            <div className="grid grid-cols-1 gap-6">
                <Link 
                    href="/subscriptions" 
                    className="relative overflow-hidden rounded-[24px] transition-transform group"
                >
                    <img 
                        src="/images/poster1.png" 
                        alt="Promo 1" 
                        className="w-full h-auto"
                    />
                </Link>

                <Link 
                    href="/products" 
                    className="relative overflow-hidden rounded-[24px] transition-transform group"
                >
                    <img 
                        src="/images/poster2.png" 
                        alt="Promo 2" 
                        className="w-full h-auto"
                    />
                </Link>
            </div>
        </section>
    );
}
