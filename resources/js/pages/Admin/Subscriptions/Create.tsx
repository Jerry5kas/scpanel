import React, { useState, ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

export default function Create() {
    const [activeTab, setActiveTab] = useState<'one-time' | 'subscription'>('subscription');

    return (
        <div className="space-y-6">
            <Head title="Add Subscription" />
            
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Add a New</h1>
                    <div className="flex rounded-md overflow-hidden bg-gray-200 shadow-inner">
                        <button 
                            onClick={() => setActiveTab('one-time')}
                            className={`px-5 py-2 text-sm font-medium transition-all duration-200 ${
                                activeTab === 'one-time' 
                                    ? 'bg-[#37696c] text-white shadow-sm' 
                                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                            }`}
                        >
                            One-Time Order
                        </button>
                        <button 
                            onClick={() => setActiveTab('subscription')}
                            className={`px-5 py-2 text-sm font-medium transition-all duration-200 ${
                                activeTab === 'subscription' 
                                    ? 'bg-[#37696c] text-white shadow-sm' 
                                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                            }`}
                        >
                            Subscription
                        </button>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden mb-6">
                    <div className="bg-[#e9f2f4] px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-bold text-gray-800">Customer</h2>
                    </div>
                    
                    <div className="p-8">
                        <div className="flex flex-col md:flex-row md:items-end gap-4">
                            <div className="w-full max-w-md">
                                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                                    Search customer by Name / Phone
                                </label>
                                <input 
                                    type="text" 
                                    className="w-full h-11 px-4 border border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#37696c]/20 focus:border-[#37696c] transition-all bg-gray-50 focus:bg-white"
                                />
                            </div>
                            
                            <div className="flex items-center gap-4 pb-0.5">
                                <span className="text-gray-500 font-bold px-1 text-sm uppercase">Or</span>
                                <button className="bg-[#5cb85c] hover:bg-[#449d44] text-white px-6 h-11 rounded-lg shadow-sm font-bold transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-95 whitespace-nowrap">
                                    Add New Customer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                    <button className="bg-[#d9534f] hover:bg-[#c9302c] text-white px-6 py-2.5 rounded-lg shadow-sm font-bold transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-95">
                        Cancel
                    </button>
                    <button className="bg-[#337ab7] hover:bg-[#286090] text-white px-6 py-2.5 rounded-lg shadow-sm font-bold transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-95">
                        Create & New
                    </button>
                    <button className="bg-[#337ab7] hover:bg-[#286090] text-white px-6 py-2.5 rounded-lg shadow-sm font-bold transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-95">
                        Create & View
                    </button>
                </div>
            </div>
        </div>
    );
}

Create.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;
