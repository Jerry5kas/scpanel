import React, { ReactNode, useState } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Download, ChevronRight } from 'lucide-react';

export default function ReportsIndex() {
    const [activeReport, setActiveReport] = useState('Sales');

    const menuItems = [
        { name: 'Sales', isNew: true },
        { name: 'Customers' },
        { name: 'Payments' },
        { name: 'Subscriptions' },
        { name: 'Orders' },
        { name: 'Transactions' },
        { name: 'Deliveries', subtitle: '(formerly Sales)' },
        { name: 'Outstanding' },
    ];

    return (
        <div className="bg-white rounded-md shadow-sm border border-gray-200 min-h-[600px] flex">
            <Head title="Reports" />
            
            {/* Sidebar */}
            <div className="w-64 border-r border-gray-200 flex-shrink-0">
                <div className="p-4 border-b border-gray-200">
                    <h2 className="text-xl font-medium text-gray-700">Reports</h2>
                </div>
                <div className="py-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveReport(item.name)}
                            className={`w-full flex items-center justify-between px-6 py-4 text-sm font-medium transition-colors hover:bg-gray-50 ${
                                activeReport === item.name 
                                    ? 'bg-gray-50 text-gray-900 border-l-4 border-l-[#148284]' 
                                    : 'text-gray-600 border-l-4 border-l-transparent'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <span>{item.name}</span>
                                {item.isNew && <span className="bg-[#5cb85c] text-white text-[10px] px-1.5 py-0.5 rounded">New</span>}
                                {item.subtitle && <span className="text-red-400 text-xs font-normal">{item.subtitle}</span>}
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-8">
                <div className="max-w-3xl">
                    <h3 className="text-2xl font-medium text-gray-700 mb-2">{activeReport} Report</h3>
                    <p className="text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
                        This report lets you export all the {activeReport.toLowerCase()} that were placed during the specific period based on {activeReport.toLowerCase()} transaction date.
                    </p>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-600">Transaction Date Between</label>
                            <input 
                                type="text" 
                                defaultValue="1 January 2026 - 24 January 2026"
                                className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:ring-[#148284] focus:border-[#148284] text-sm text-gray-700"
                            />
                        </div>

                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-[#d0e0e3] text-[#148284] rounded text-xs font-medium hover:bg-[#b0ced3]">This Month</button>
                            <button className="px-3 py-1 bg-[#d0e0e3] text-[#148284] rounded text-xs font-medium hover:bg-[#b0ced3]">Last Month</button>
                            <button className="px-3 py-1 bg-[#d0e0e3] text-[#148284] rounded text-xs font-medium hover:bg-[#b0ced3]">Last 30 Days</button>
                        </div>

                        <div className="pt-8 flex justify-end">
                            <button className="flex items-center gap-2 px-6 py-2 bg-[#148284] text-white rounded font-medium shadow-sm hover:bg-blue-600 transition-colors">
                                <Download className="w-4 h-4" />
                                Download Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReportsIndex.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;
