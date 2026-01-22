import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { 
    ChevronRight, 
    Calendar, 
    History, 
    FileText, 
    DollarSign, 
    UserPlus, 
    MapPin, 
    ShieldCheck, 
    LogOut,
    Wallet,
    MessageCircle,
    Pencil
} from 'lucide-react';
import AppLayout from '@/Components/Layout/AppLayout';

export default function More() {
    return (
        <AppLayout>
            <Head title="More" />
            
            <div className="bg-[#FAF9F6] min-h-screen pb-24 sm:hidden">
                {/* Profile Header Section */}
                <div className="bg-white px-5 py-6 flex items-center justify-between border-b border-gray-50">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <h1 className="text-[20px] font-black text-gray-800">Techbuds Online</h1>
                            <button className="p-1">
                                <Pencil className="w-4 h-4 text-gray-400" />
                            </button>
                        </div>
                        <p className="text-[13px] font-medium text-gray-500">techbuds57@gmai...</p>
                        <p className="text-[13px] font-medium text-gray-500">7092936243</p>
                    </div>

                    <div className="bg-[#E0F2F1] rounded-2xl px-4 py-3 flex items-center gap-3">
                        <div className="bg-white/50 p-2 rounded-xl">
                            <Wallet className="w-6 h-6 text-[#00897B]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-[#00695C] uppercase">Wallet</span>
                            <span className="text-[18px] font-black text-gray-800">₹0</span>
                        </div>
                    </div>
                </div>

                {/* Support Card */}
                <div className="px-5 mt-5">
                    <div className="bg-white rounded-2xl p-4 flex items-center gap-4 border border-gray-100/50 shadow-sm">
                        <div className="bg-emerald-50 p-3 rounded-2xl">
                            <MessageCircle className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-[14px] font-bold text-gray-800">Need Help?</p>
                            <p className="text-[12px] font-medium text-gray-500">Reach out to support</p>
                        </div>
                    </div>
                </div>

                {/* Subscriptions and History */}
                <div className="px-5 mt-8">
                    <h2 className="text-[15px] font-black text-gray-800 mb-4 ml-1">Subscriptions and History</h2>
                    <div className="bg-white rounded-[24px] overflow-hidden border border-gray-100/50 shadow-sm divide-y divide-gray-50">
                        <Link href="/subscriptions" className="flex items-center gap-4 p-4 active:bg-gray-50">
                            <div className="bg-emerald-50 p-2.5 rounded-xl">
                                <Calendar className="w-5 h-5 text-emerald-600" />
                            </div>
                            <span className="flex-1 text-[14px] font-bold text-gray-700">My Subscriptions</span>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
                        </Link>
                        <Link href="/orders" className="flex items-center gap-4 p-4 active:bg-gray-50">
                            <div className="bg-emerald-50 p-2.5 rounded-xl">
                                <History className="w-5 h-5 text-emerald-600" />
                            </div>
                            <span className="flex-1 text-[14px] font-bold text-gray-700">Delivery History</span>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
                        </Link>
                    </div>
                </div>

                {/* Order and Billing */}
                <div className="px-5 mt-8">
                    <h2 className="text-[15px] font-black text-gray-800 mb-4 ml-1">Order and Billing</h2>
                    <div className="bg-white rounded-[24px] overflow-hidden border border-gray-100/50 shadow-sm divide-y divide-gray-50">
                        <Link href="/bills" className="flex items-center gap-4 p-4 active:bg-gray-50">
                            <div className="bg-emerald-50 p-2.5 rounded-xl">
                                <FileText className="w-5 h-5 text-emerald-600" />
                            </div>
                            <span className="flex-1 text-[14px] font-bold text-gray-700">Monthly Bills</span>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
                        </Link>
                        <Link href="/transactions" className="flex items-center gap-4 p-4 active:bg-gray-50">
                            <div className="bg-emerald-50 p-2.5 rounded-xl">
                                <DollarSign className="w-5 h-5 text-emerald-600" />
                            </div>
                            <span className="flex-1 text-[14px] font-bold text-gray-700">Transactions and Invoices</span>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
                        </Link>
                        <Link href="/refer" className="flex items-center gap-4 p-4 active:bg-gray-50">
                            <div className="bg-emerald-50 p-2.5 rounded-xl">
                                <UserPlus className="w-5 h-5 text-emerald-600" />
                            </div>
                            <span className="flex-1 text-[14px] font-bold text-gray-700">Refer A Friend</span>
                            <ChevronRight className="w-5 h-5 text-gray-300" />
                        </Link>
                    </div>
                </div>

                {/* Other Settings */}
                <div className="mt-8 mb-10 divide-y divide-gray-100">
                    <Link href="/address" className="flex items-center justify-between px-6 py-4 bg-white active:bg-gray-50">
                        <span className="text-[14px] font-bold text-gray-700">Address Book</span>
                        <ChevronRight className="w-5 h-5 text-gray-300" />
                    </Link>
                    <Link href="/service-area" className="flex items-center justify-between px-6 py-4 bg-white active:bg-gray-50">
                        <span className="text-[14px] font-bold text-gray-700">Service Area</span>
                        <ChevronRight className="w-5 h-5 text-gray-300" />
                    </Link>
                    <Link href="/policy" className="flex items-center justify-between px-6 py-4 bg-white active:bg-gray-50">
                        <span className="text-[14px] font-bold text-gray-700">Policy</span>
                        <ChevronRight className="w-5 h-5 text-gray-300" />
                    </Link>
                    <button className="w-full flex items-center justify-between px-6 py-4 bg-white active:bg-gray-50 border-b border-gray-100">
                        <span className="text-[14px] font-bold text-red-500">Log Out</span>
                        <LogOut className="w-5 h-5 text-red-400" />
                    </button>
                </div>
            </div>

            {/* Desktop Message */}
            <div className="hidden sm:flex min-h-screen items-center justify-center text-gray-400">
                This page is optimized for mobile viewing.
            </div>
        </AppLayout>
    );
}
