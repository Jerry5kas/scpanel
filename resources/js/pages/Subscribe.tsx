import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft, Calendar, Plus, ChevronRight } from 'lucide-react';
import AppLayout from '@/Components/Layout/AppLayout';

export default function Subscribe() {
    const subscriptions = [
        {
            id: 1,
            name: 'Fresh Cow Milk',
            image: '/images/products/milk.png',
            frequency: 'Daily',
            quantity: '500ml',
            nextDelivery: 'Tomorrow, 6:00 AM',
            status: 'Active'
        },
        {
            id: 2,
            name: 'Country Butter',
            image: '/images/products/butter.png',
            frequency: 'Weekly (Mon, Thu)',
            quantity: '200g',
            nextDelivery: 'Mon, 27 Jan',
            status: 'Active'
        }
    ];

    return (
        <AppLayout>
            <Head title="My Subscriptions" />
            
            <div className="bg-[#FAF9F6] min-h-screen pb-24 sm:pb-20">
                {/* Custom Header - Mobile Only */}
                <header className="flex-shrink-0 flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white z-20 sm:hidden">
                    <Link href="/" className="p-2 -ml-2 transition-transform active:scale-90">
                        <ChevronLeft className="w-7 h-7 text-gray-700" strokeWidth={1.5} />
                    </Link>
                    <h1 className="text-[18px] font-bold text-gray-800 tracking-tight">My Subscriptions</h1>
                    <div className="w-10" /> {/* Spacer */}
                </header>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="hidden sm:block text-[28px] font-black text-gray-900 tracking-tight">
                            My Subscriptions
                        </h2>
                        <button className="flex items-center gap-2 bg-[var(--primary-color)] text-white px-5 py-2.5 rounded-xl text-[13px] font-black shadow-lg shadow-[var(--primary-color)]/20 hover:scale-105 transition-all">
                            <Plus className="w-5 h-5" />
                            New Subscription
                        </button>
                    </div>

                    <div className="space-y-4">
                        {subscriptions.map((sub) => (
                            <div key={sub.id} className="bg-white rounded-[28px] p-4 sm:p-6 border border-gray-100/50 shadow-sm flex items-center gap-4 sm:gap-6 group active:bg-gray-50 transition-colors">
                                <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-gray-50 flex items-center justify-center p-3 flex-shrink-0">
                                    <img src={sub.image} alt={sub.name} className="max-h-full max-w-full object-contain" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-[15px] sm:text-[18px] font-black text-gray-800 mb-1">{sub.name}</h3>
                                    <div className="flex items-center gap-3 text-gray-500">
                                        <div className="flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 rounded-lg">
                                            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                                            <span className="text-[11px] font-black text-emerald-700 uppercase tracking-tighter">{sub.frequency}</span>
                                        </div>
                                        <span className="text-[12px] font-bold">{sub.quantity}</span>
                                    </div>
                                    <p className="mt-2 text-[12px] font-bold text-gray-400">Next: <span className="text-gray-600 font-black">{sub.nextDelivery}</span></p>
                                </div>
                                <ChevronRight className="w-6 h-6 text-gray-200 group-hover:text-gray-400 group-hover:translate-x-1 transition-all" />
                            </div>
                        ))}
                    </div>

                    {subscriptions.length === 0 && (
                        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[40px] border border-gray-100 border-dashed">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                <Calendar className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-[18px] font-black text-gray-800">No active subscriptions</h3>
                            <Link href="/products" className="mt-6 px-8 py-3 bg-[var(--primary-color)] text-white rounded-2xl font-black text-[13px]">
                                Browse Products
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}


