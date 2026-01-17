import { Link } from '@inertiajs/react';

export default function Footer() {
return (
<footer className="bg-neutral-900 text-neutral-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* Top Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div>
                <img
                    src="/images/logo_light.png"
                    alt="FreshTick"
                    className="h-10 mb-6"
                />

                <ul className="space-y-3 text-sm">
                    <li>
                        <Link href="/about" className="hover:text-white">
                        About us
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-white">
                        Contact Us
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Products */}
            <div>
                <h3 className="text-white font-medium mb-4">
                    Product
                </h3>

                <ul className="space-y-3 text-sm">
                    <li>Raw Fresh Milk - 15 Packs Plan (480ML)</li>
                    <li>Raw Fresh Milk - 30 Packs Plan (480ML)</li>
                    <li>Raw Fresh Milk - 90 Packs Plan (480ML)</li>
                    <li>Welcome Offer Plan</li>
                    <li>More</li>
                </ul>
            </div>

            {/* Policy */}
            <div>
                <h3 className="text-white font-medium mb-4">
                    Policy
                </h3>

                <ul className="space-y-3 text-sm">
                    <li>
                        <Link href="/refund-policy" className="hover:text-white">
                        Refunds/Cancellations Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="/shipping-policy" className="hover:text-white">
                        Shipping Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="/terms" className="hover:text-white">
                        Terms and Conditions
                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy-policy" className="hover:text-white">
                        Privacy Policy
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Delivery Areas */}
            <div>
                <h3 className="text-white font-medium mb-4">
                    We deliver to
                </h3>

                <ul className="space-y-4 text-sm">
                    <li>
                        <p className="font-medium text-white">Malipuram</p>
                        <p className="text-neutral-400">Malipuram</p>
                    </li>

                    <li>
                        <p className="font-medium text-white">Nayarambalam</p>
                        <p className="text-neutral-400">Nayarambalam</p>
                    </li>

                    <li>
                        <p className="font-medium text-white">High Court</p>
                        <p className="text-neutral-400">High Court</p>
                    </li>

                    <li>
                        <p className="font-medium text-white">
                            Alathurpadi Malapuram
                        </p>
                        <p className="text-neutral-400">
                            Alathurpadi Malapuram
                        </p>
                    </li>
                </ul>
            </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-neutral-700"></div>

        {/* Bottom */}
        <div className="text-center text-xs text-neutral-500">
            © {new Date().getFullYear()} FreshTick. All rights reserved.
        </div>
    </div>
</footer>
);
}
