import { Head, Link } from '@inertiajs/react';
import {
    Wallet as WalletIcon,
    History,
    FileText,
    Receipt,
    MapPin,
    User,
    Users,
    ChevronRight,
    Edit3
} from 'lucide-react';
import { useState } from 'react';

export default function Wallet() {
    const [amount, setAmount] = useState('');
    const [promoCode, setPromoCode] = useState('');

    const sidebarItems = [
        { label: 'Wallet', icon: WalletIcon, active: true },
        { label: 'Delivery History', icon: History },
        { label: 'Transactions & Invoices', icon: FileText },
        { label: 'Monthly bills', icon: Receipt },
        { label: 'Address Book', icon: MapPin },
        { label: 'Account', icon: User },
        { label: 'Refer A Friend', icon: Users },
    ];

    const quickAmounts = ['500', '1,000', '2,000', '5,000'];

    return (
        <div className="bg-[#FAF9F6] min-h-screen">
            <Head title="Wallet" />

            {/* Profile Header Banner */}
            <div className="bg-[var(--primary-color)] text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-1">
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl font-black tracking-tight">Techbuds Online</h1>
                            <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                                <Edit3 className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-bold text-white/80">
                            <span>techbuds57@gmail.com</span>
                            <span>7092956243</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-4xl font-black tracking-tight">₹0</p>
                        <p className="text-[12px] font-black uppercase tracking-widest text-white/70 mt-1">Your Balance</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 pb-20">
                <div className="bg-white rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-[600px]">

                    {/* Sidebar Nav */}
                    <aside className="w-full lg:w-72 bg-emerald-50/50 border-r border-gray-50 p-8 flex flex-col">
                        <nav className="space-y-1 flex-grow">
                            {sidebarItems.map((item) => (
                                <button
                                    key={item.label}
                                    className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-[14px] font-black transition-all ${item.active
                                            ? 'bg-white text-[var(--primary-color)] shadow-sm border border-gray-100'
                                            : 'text-gray-500 hover:bg-white/50 hover:text-gray-700'
                                        }`}
                                >
                                    <item.icon className={`h-5 w-5 ${item.active ? 'text-[var(--primary-color)]' : 'text-gray-400'}`} />
                                    {item.label}
                                </button>
                            ))}
                        </nav>

                        {/* Need Help Card */}
                        <div className="mt-8">
                            <div className="bg-[var(--primary-color)] rounded-3xl p-6 text-white shadow-lg shadow-[var(--primary-color)]/20 group cursor-pointer hover:brightness-110 transition-all">
                                <p className="text-[15px] font-black mb-1">Need Help?</p>
                                <p className="text-[11px] font-bold text-white/80 leading-relaxed">Reach out to support</p>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 p-8 sm:p-12">
                        <div className="max-w-4xl">
                            <h2 className="text-[20px] font-black text-gray-800 mb-10">Wallet</h2>

                            <div className="grid lg:grid-cols-12 gap-12">
                                {/* Recharge Section */}
                                <div className="lg:col-span-7 space-y-8">
                                    <div className="rounded-3xl border border-gray-100 bg-gray-50/30 p-8 space-y-6">
                                        <div className="space-y-2">
                                            <p className="text-[12px] font-black text-gray-500 uppercase tracking-widest px-1">Please enter an amount</p>
                                            <input
                                                type="text"
                                                placeholder="Please enter amount"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                className="w-full rounded-2xl border-gray-100 bg-white px-6 py-4 text-[15px] font-black placeholder:text-gray-300 focus:ring-2 focus:ring-[var(--primary-color)]/20 focus:border-[var(--primary-color)] transition-all"
                                            />
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            {quickAmounts.map((amt) => (
                                                <button
                                                    key={amt}
                                                    onClick={() => setAmount(amt.replace(',', ''))}
                                                    className="px-5 py-2.5 rounded-xl bg-amber-100/50 border border-amber-200 text-amber-800 text-[13px] font-black hover:bg-amber-200 transition-colors"
                                                >
                                                    ₹{amt}
                                                </button>
                                            ))}
                                        </div>

                                        <div className="space-y-2">
                                            <p className="text-[12px] font-black text-gray-500 uppercase tracking-widest px-1">Promo Code</p>
                                            <input
                                                type="text"
                                                placeholder="ENTER CODE HERE"
                                                value={promoCode}
                                                onChange={(e) => setPromoCode(e.target.value)}
                                                className="w-full rounded-2xl border-gray-100 bg-white px-6 py-4 text-[14px] font-black placeholder:text-gray-300 uppercase tracking-widest focus:ring-2 focus:ring-[var(--primary-color)]/20 focus:border-[var(--primary-color)] transition-all"
                                            />
                                        </div>

                                        <button className="w-full py-5 rounded-2xl bg-gray-100 text-gray-400 text-[14px] font-black transition-all hover:bg-[var(--primary-color)] hover:text-white hover:shadow-lg hover:shadow-[var(--primary-color)]/20 active:scale-[0.98]">
                                            Proceed To Add
                                        </button>
                                    </div>
                                </div>

                                {/* Summary & Info Section */}
                                <div className="lg:col-span-5 space-y-8">
                                    <button className="w-full flex items-center justify-between px-8 py-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all group">
                                        <span className="text-[14px] font-black text-gray-800">View Transaction History</span>
                                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
                                    </button>

                                    <div className="space-y-4">
                                        <p className="text-[13px] font-black text-gray-800">Please Note:</p>
                                        <ul className="space-y-3">
                                            <li className="flex gap-2 text-[12px] font-bold text-gray-500 leading-relaxed">
                                                <span className="text-gray-400">1.</span>
                                                You can use wallet money to make a purchase on FRESHTICK Website/App only.
                                            </li>
                                            <li className="flex gap-2 text-[12px] font-bold text-gray-500 leading-relaxed">
                                                <span className="text-gray-400">2.</span>
                                                Your money is 100% safe with us.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
