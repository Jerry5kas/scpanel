import { Link } from '@inertiajs/react';

type Plan = {
    id: number;
    title: string;
    image: string;
    price: string;
    popular?: boolean;
};

const plans: Plan[] = [
    {
        id: 1,
        title: '15-Pack Plan',
        image: '/images/sub15.png',
        price: '₹42 / Unit',
    },
    {
        id: 2,
        title: '30-Packs Plan',
        image: '/images/sub30.png',
        price: '₹41 / Unit',
        popular: true,
    },
    {
        id: 3,
        title: '90-Packs Plan',
        image: '/images/sub90.png',
        price: '₹40 / Unit',
    },
];

export default function SubscriptionPlans() {
    return (
        <section
            aria-labelledby="subscription-plans-heading"
            className="max-w-7xl mx-auto py-6 sm:py-12 overflow-hidden"
        >
            <div className="flex items-center justify-between mb-5 sm:mb-8 px-1">
                <h2
                    id="subscription-plans-heading"
                    className="text-[18px] sm:text-[24px] font-black text-gray-900 tracking-tight"
                >
                    Subscription Plans
                </h2>
                <Link 
                    href="/subscriptions"
                    className="text-[13px] font-bold text-[var(--primary-color)] hover:opacity-80 transition-opacity md:hidden"
                >
                    View All
                </Link>
            </div>

            {/* Horizontal Scroll on Mobile, Grid on Desktop */}
            <div className="flex overflow-x-auto pb-4 -mx-4 px-4 gap-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:p-0 md:mx-0 scrollbar-hide">
                {plans.map((plan) => (
                    <article
                        key={plan.id}
                        className="flex-shrink-0 min-w-[170px] w-[170px] md:w-auto md:min-w-0 flex flex-col items-center group bg-white rounded-[24px] md:rounded-[32px] overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-emerald-100/50 hover:-translate-y-1"
                    >
                        {/* Image Container */}
                        <div className="relative w-full">
                            <img
                                src={plan.image}
                                alt={`${plan.title} subscription card`}
                                className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                        </div>

                        {/* Content Area - Compact on Mobile */}
                        <div className="flex flex-col items-center w-full p-4 md:p-8 flex-1">
                            <h3 className="text-[14px] md:text-[22px] font-bold text-gray-900 leading-tight text-center mb-1 md:mb-2 text-wrap">
                                {plan.title}
                            </h3>

                            <div className="flex flex-col items-center mb-4 md:mb-6">
                                <span className="hidden md:block text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Starting From</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[16px] md:text-[28px] font-black text-emerald-600">{plan.price.split(' ')[0]}</span>
                                    <span className="text-[10px] md:text-sm text-gray-500 font-bold">/ Unit</span>
                                </div>
                            </div>

                            {/* CTA Button - Compact on Mobile */}
                            <Link
                                href="/subscriptions"
                                className="mt-auto w-full inline-flex items-center justify-center rounded-xl md:rounded-2xl py-2.5 md:py-4 text-white text-[12px] md:text-[15px] font-bold shadow-lg md:shadow-xl shadow-emerald-500/20 transition-all hover:brightness-105 active:scale-[0.98]"
                                style={{ backgroundColor: 'var(--primary-color)' }}
                            >
                                Subscribe
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
