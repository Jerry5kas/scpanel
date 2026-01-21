import { Link, Head } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';

import OrderSummary from '@/Components/Subscription/OrderSummary';

export default function Subscribe() {
    const [deliveryType, setDeliveryType] = useState('one-time');
    const [deliveryDate, setDeliveryDate] = useState('2026-01-24');

    return (
        <div className="bg-[#FAF9F6] min-h-screen pb-12">
            <Head title="Review Cart" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                {/* Back Button */}
                <Link
                    href="/products"
                    className="flex items-center gap-1 text-[13px] font-black text-gray-700 hover:text-[var(--primary-color)] transition-colors mb-8 group"
                >
                    <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                    Review Cart
                </Link>

                <div className="grid gap-10 lg:grid-cols-12">
                    {/* Left Column: Delivery Details */}
                    <div className="lg:col-span-7 space-y-8">

                        {/* Delivery Section */}
                        <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100/50">
                            <h2 className="text-[16px] font-black text-gray-800 mb-6">Delivery</h2>

                            <div className="rounded-2xl border-[1.5px] border-gray-100 p-6 space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-5 w-5 rounded-full border-2 border-[var(--primary-color)] flex items-center justify-center">
                                        <div className="h-2.5 w-2.5 rounded-full bg-[var(--primary-color)]" />
                                    </div>
                                    <span className="text-[14px] font-black text-gray-800">Schedule Delivery</span>
                                </div>

                                <div className="space-y-4 ml-8">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            readOnly
                                            value="One Time Order"
                                            className="w-full rounded-xl border-gray-100 bg-gray-50/50 px-5 py-3.5 text-[13px] font-bold text-gray-700 focus:ring-0"
                                        />
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="text"
                                            readOnly
                                            value="24 Jan, 2026"
                                            className="w-full rounded-xl border-gray-100 bg-white px-5 py-3.5 text-[13px] font-bold text-gray-700 shadow-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Delivery Address Section */}
                        <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100/50">
                            <h2 className="text-[16px] font-black text-gray-800 mb-6">Delivery Address</h2>

                            <button
                                className="w-full rounded-2xl border-[1.5px] py-4 text-[13px] font-black transition-all hover:shadow-sm"
                                style={{
                                    borderColor: 'var(--primary-color)',
                                    color: 'var(--primary-color)',
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--secondary-color)')}
                                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                            >
                                Add New Address
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Summary */}
                    <div className="lg:col-span-5">
                        <OrderSummary />
                    </div>
                </div>
            </div>
        </div>
    );
}

