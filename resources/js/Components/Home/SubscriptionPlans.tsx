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
        title: '15-Packs Plan',
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
            className="max-w-7xl mx-auto px-4 sm:px-6 py-12"
        >
            <h2
                id="subscription-plans-heading"
                className="text-lg sm:text-xl font-semibold mb-8"
            >
                Subscription Plans
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan) => (
                    <article
                        key={plan.id}
                        className="flex flex-col"
                    >
                        {/* Card Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-md">
                            <img
                                src={plan.image}
                                alt={`${plan.title} subscription card`}
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />


                        </div>

                        {/* Text Content */}
                        <div className="mt-4">
                            <h3 className="text-base font-semibold">
                                {plan.title}
                            </h3>

                            <p className="text-sm text-gray-600 mt-1">
                                Starts from <strong>{plan.price}</strong>
                            </p>
                        </div>

                        {/* CTA */}
                        <Link
                            href="/subscriptions"
                            className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-white text-sm font-bold shadow-lg transition-all hover:brightness-110"
                            style={{ backgroundColor: 'var(--primary-color)' }}
                            aria-label={`Subscribe to ${plan.title}`}
                        >
                            Subscribe
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}
