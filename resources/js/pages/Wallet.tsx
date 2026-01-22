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
    Edit3,
    ChevronLeft
} from 'lucide-react';
import { useState } from 'react';
import AppLayout from '@/Components/Layout/AppLayout';

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
        <AppLayout>
            <Head title="Wallet" />

            <div className="bg-[#FAF9F6] min-h-screen pb-24 sm:pb-20">
                {/* Custom Header - Mobile Only */}
                <header className="flex-shrink-0 flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white z-20 sm:hidden">
                    <Link href="/more" className="p-2 -ml-2 transition-transform active:scale-90">
                        <ChevronLeft className="w-7 h-7 text-gray-700" strokeWidth={1.5} />
                    </Link>
                    <h1 className="text-[18px] font-bold text-gray-800 tracking-tight">My Wallet</h1>
                    <div className="w-10" /> {/* Spacer */}
                </header>

                {/* Profile Header Banner - Desktop Only */}
                <div className="hidden sm:block bg-[var(--primary-color)] text-white py-12">
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

                <div className="max-w-7xl mx-auto px-4 sm:px-6 sm:-mt-8 py-6 sm:py-0">
                    {/* Mobile Balance Card */}
                    <div className="sm:hidden bg-[var(--primary-color)] rounded-[32px] p-8 mb-6 text-white shadow-xl shadow-emerald-900/10">
                        <p className="text-[12px] font-black uppercase tracking-[0.2em] text-white/60 mb-2">Total Balance</p>
                        <p className="text-[42px] font-black leading-none">₹0</p>
                    </div>

                    <div className="bg-white rounded-[32px] sm:rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex flex-col lg:flex-row min-h-0 sm:min-h-[600px]">

                        {/* Sidebar Nav - Desktop Only */}
                        <aside className="hidden lg:flex w-72 bg-emerald-50/50 border-r border-gray-50 p-8 flex-col">
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
                        <main className="flex-1 p-6 sm:p-12">
                            <div className="max-w-4xl">
                                <h2 className="hidden sm:block text-[20px] font-black text-gray-800 mb-10">Wallet</h2>

                                <div className="grid lg:grid-cols-12 gap-8 sm:gap-12">
                                    {/* Recharge Section */}
                                    <div className="lg:col-span-12 space-y-8">
                                        <div className="rounded-3xl border border-gray-100 bg-gray-50/30 p-6 sm:p-8 space-y-6">
                                            <div className="space-y-3">
                                                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest px-1">Topup Amount</p>
                                                <div className="relative">
                                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[20px] font-black text-gray-400">₹</span>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter amount"
                                                        value={amount}
                                                        onChange={(e) => setAmount(e.target.value)}
                                                        className="w-full rounded-2xl border-gray-100 bg-white pl-12 pr-6 py-4 text-[20px] font-black placeholder:text-gray-200 focus:ring-2 focus:ring-[var(--primary-color)]/20 focus:border-[var(--primary-color)] transition-all"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                                {quickAmounts.map((amt) => (
                                                    <button
                                                        key={amt}
                                                        onClick={() => setAmount(amt.replace(',', ''))}
                                                        className="flex-1 min-w-[80px] px-4 py-3 rounded-xl bg-white border border-gray-100 text-gray-700 text-[13px] font-black hover:border-[var(--primary-color)] hover:bg-emerald-50/50 transition-all shadow-sm active:scale-95"
                                                    >
                                                        ₹{amt}
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="space-y-3">
                                                <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest px-1">Have a promo code?</p>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Code"
                                                    value={promoCode}
                                                    onChange={(e) => setPromoCode(e.target.value)}
                                                    className="w-full rounded-2xl border-gray-100 bg-white px-6 py-4 text-[14px] font-black placeholder:text-gray-300 uppercase tracking-widest focus:ring-2 focus:ring-[var(--primary-color)]/20 focus:border-[var(--primary-color)] transition-all"
                                                />
                                            </div>

                                            <button className="w-full py-5 rounded-[20px] bg-[var(--primary-color)] text-white text-[15px] font-black transition-all shadow-lg shadow-emerald-900/10 active:scale-[0.98]">
                                                Add Money
                                            </button>
                                        </div>
                                    </div>
                                    
                                    {/* Info Section */}
                                    <div className="lg:col-span-12 space-y-6 pt-4">
                                        <div className="space-y-4">
                                            <p className="text-[13px] font-black text-gray-800">Please Note:</p>
                                            <ul className="space-y-4">
                                                <li className="flex gap-3 text-[12px] font-bold text-gray-500 leading-relaxed">
                                                    <div className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-[10px] font-black">1</div>
                                                    You can use wallet money to make a purchase on FRESHTICK Website/App only.
                                                </li>
                                                <li className="flex gap-3 text-[12px] font-bold text-gray-500 leading-relaxed">
                                                    <div className="h-5 w-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 text-[10px] font-black">2</div>
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
        </AppLayout>
    );
}
    );
}
