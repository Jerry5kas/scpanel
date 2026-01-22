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
            className="max-w-7xl mx-auto py-4 sm:py-8 overflow-hidden"
        >
            <h2
                id="subscription-plans-heading"
                className="text-[17px] font-bold mb-4 text-gray-800"
            >
                Subscription Plans
            </h2>

            {/* Horizontal Scroll on Mobile, Grid on Desktop */}
            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-x-visible sm:pb-0 sm:mx-0 sm:px-0 scrollbar-hide">
                {plans.map((plan) => (
                    <article
                        key={plan.id}
                        className="flex flex-col items-center text-center group bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] min-w-[240px] sm:min-w-full transition-all duration-500 hover:shadow-2xl hover:border-emerald-100/50 hover:-translate-y-1"
                    >
                        {/* Image Container - No Padding, Full Width */}
                        <div className="relative w-full overflow-hidden">
                            {plan.popular && (
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="bg-[#0F172A] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-lg">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            <img
                                src={plan.image}
                                alt={`${plan.title} subscription card`}
                                className="w-full h-auto block transition-transform duration-700"
                                loading="lazy"
                            />
                        </div>

                        {/* Padded Content Area */}
                        <div className="flex flex-col items-center w-full p-6 sm:p-8">
                            <h3 className="text-[18px] sm:text-[22px] font-bold text-gray-900 leading-tight">
                                {plan.title}
                            </h3>

                            <div className="mt-3 flex flex-col items-center">
                                <span className="text-[11px] sm:text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Starting From</span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[20px] sm:text-[26px] font-black text-emerald-600">{plan.price.split(' ')[0]}</span>
                                    <span className="text-[12px] sm:text-sm text-gray-500 font-bold">/ Unit</span>
                                </div>
                            </div>

                            {/* Prominent CTA */}
                            <Link
                                href="/subscriptions"
                                className="mt-8 w-full inline-flex items-center justify-center rounded-2xl px-6 py-4 text-white text-[15px] font-bold shadow-xl shadow-emerald-500/20 transition-all hover:brightness-105 active:scale-[0.98]"
                                style={{ backgroundColor: 'var(--primary-color)' }}
                                aria-label={`Subscribe to ${plan.title}`}
                            >
                                Subscribe Now
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
