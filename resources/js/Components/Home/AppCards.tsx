import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

function GlassCard({ title, subtitle, action, href, offset = 0 }: {
    title: string;
    subtitle: string;
    action: string;
    href: string;
    offset?: number;
}) {
    return (
        <Link href={href} className="group block">
            <div
                style={{ transform: `translateY(${offset}px)` }}
                className="
                    relative rounded-[28px]
                    bg-white/60 backdrop-blur-xl
                    border border-teal/40
                    px-6 py-6
                    transition-all duration-300 ease-out
                    hover:-translate-y-2 hover:shadow-xl
                "
            >
                {/* Soft glow */}
                <div className="
                    absolute inset-0 rounded-[28px]
                    bg-gradient-to-br from-white/40 to-transparent
                    opacity-0 group-hover:opacity-100
                    transition
                " />

                <div className="relative z-10">
                    <h3 className="text-base font-semibold text-gray-900">
                        {title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                        {subtitle}
                    </p>
                </div>

                {/* Hidden CTA */}
                <div className="
                    absolute bottom-4 right-5
                    flex items-center gap-2
                    text-emerald-600 text-sm font-medium
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition-all
                ">
                    <span>{action}</span>
                    <ArrowRight className="h-4 w-4" />
                </div>
            </div>
        </Link>
    );
}

export default function GlassPanels() {
    return (
        <section
            className="max-w-7xl mx-auto px-4 py-12 space-y-6"
            // style={{
            //     backgroundColor: '#1b5d59',
            //     opacity: 1
            // }}
        >
            <GlassCard
                title="Welcome Trial Pack"
                subtitle="3 bottles · ₹39"
                action="View Pack"
                href="/subscriptions/trial"
                offset={0}
            />

            <GlassCard
                title="Get Food Delivered"
                subtitle="Plan your journey ahead"
                action="Explore"
                href="/products"
                offset={-12}
            />
        </section>
    );
}
