import React, { ReactNode, useState } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Calendar, ChevronDown, ChevronRight, Menu, Check } from 'lucide-react';

export default function DeliveryIndex() {
    const [showResult, setShowResult] = useState(false);
    const [isSummariesOpen, setIsSummariesOpen] = useState(true);

    return (
        <div className="space-y-6">
            <Head title="Delivery Overview" />
            
            {/* Filter Card */}
            <div className="bg-white rounded-md shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-100">
                    <h2 className="text-lg font-medium text-gray-700">Delivery Sheet</h2>
                </div>
                
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                        {/* Delivery Date */}
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-600">Delivery Date</label>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    defaultValue="24-01-2026"
                                    className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded text-sm focus:ring-[#148284] focus:border-[#148284]" 
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none bg-[#148284] rounded-r border border-[#148284]">
                                    <Calendar className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Delivery Time */}
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-600">Delivery Time</label>
                            <div className="relative">
                                <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm appearance-none focus:ring-[#148284] focus:border-[#148284] bg-white text-gray-700">
                                    <option>One Time Order</option>
                                    <option>Morning</option>
                                    <option>Evening</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Hub */}
                        <div className="space-y-1 md:col-span-1">
                            <label className="text-xs font-semibold text-gray-600">Hub</label>
                             <div className="relative">
                                <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm appearance-none focus:ring-[#148284] focus:border-[#148284] bg-white text-gray-700">
                                    <option>FRESHTICK Hub (Vypin co-op s...</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                         {/* Route-Rider */}
                         <div className="space-y-1 md:col-span-1">
                            <label className="text-xs font-semibold text-gray-600">Route-Rider</label>
                             <div className="relative">
                                <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm appearance-none focus:ring-[#148284] focus:border-[#148284] bg-white text-gray-700">
                                    <option>Malipuram → Nishamil, Nayara...</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Button */}
                        <div className="flex gap-2">
                             <button 
                                onClick={() => setShowResult(true)}
                                className="flex-1 py-2 px-4 bg-[#148284] hover:bg-blue-700 text-white rounded shadow-sm text-sm font-medium transition-colors"
                            >
                                Show
                            </button>
                             <button className="px-3 py-2 bg-[#5cb85c] hover:bg-green-600 text-white rounded shadow-sm transition-colors">
                                <ChevronRight className="w-4 h-4 rotate-180" />
                            </button>
                             <button className="px-3 py-2 bg-[#5cb85c] hover:bg-green-600 text-white rounded shadow-sm transition-colors">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            {showResult && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-white rounded-md p-6 shadow-sm border border-gray-200">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-gray-700">
                                    Overview : Saturday 24 Jan 2026 (One Time Order)
                                </h3>
                                <p className="text-xs text-gray-500">Generated at Jan 24 2026, 6:57 am</p>
                                
                                <div className="flex items-center gap-2">
                                    <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
                                        <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300"/>
                                        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"></label>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Label Print</span>
                                </div>
                                
                                <button className="text-[#148284] text-sm hover:underline">Optimize</button>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <div className="w-5 h-5 bg-[#148284] rounded border-none flex items-center justify-center">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-sm text-gray-600">Deliveries</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <div className="w-5 h-5 border border-gray-300 rounded bg-white"></div>
                                        <span className="text-sm text-gray-600">Split Route Wise</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <div className="w-5 h-5 border border-gray-300 rounded bg-white"></div>
                                        <span className="text-sm text-gray-600">Changes Only</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <div className="w-5 h-5 border border-gray-300 rounded bg-white"></div>
                                        <span className="text-sm text-gray-600">Expected Only</span>
                                    </label>
                                </div>
                                <button className="p-2 bg-[#148284] text-white rounded shadow-sm hover:bg-blue-700">
                                    <Menu className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Summaries Accordion */}
                    <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
                        <button 
                            onClick={() => setIsSummariesOpen(!isSummariesOpen)}
                            className="w-full flex items-center justify-between px-6 py-3 bg-gray-200/50 border-b border-gray-200 hover:bg-gray-200 transition-colors"
                        >
                            <span className="font-semibold text-gray-700">Summaries</span>
                            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isSummariesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {isSummariesOpen && (
                            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Product Summary */}
                                <div className="space-y-4">
                                    <h4 className="text-lg font-medium text-gray-600">Product Summary</h4>
                                    <div className="border border-gray-200 rounded">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="bg-[#333333] text-white">
                                                    <th className="px-4 py-2 text-left font-medium">Sr.No.</th>
                                                    <th className="px-4 py-2 text-left font-medium">Name</th>
                                                    <th className="px-4 py-2 text-left font-medium">Quantity</th>
                                                </tr>
                                            </thead>
                                        </table>
                                        <div className="p-4 bg-red-50 text-red-500 text-sm">
                                            Summary is empty.
                                        </div>
                                    </div>
                                    
                                    <div className="pt-4">
                                        <h4 className="text-lg font-medium text-gray-600 mb-4">Hub Wise Summary</h4>
                                        <div className="border border-gray-200 rounded">
                                            <table className="w-full text-sm">
                                                <thead>
                                                    <tr className="bg-[#333333] text-white">
                                                        <th className="px-4 py-2 text-left font-medium">Sr.No</th>
                                                        <th className="px-4 py-2 text-center font-medium">Product Name</th>
                                                        <th className="px-4 py-2 text-right font-medium">Total Quantity</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* Status Summary */}
                                <div className="space-y-4">
                                    <h4 className="text-lg font-medium text-gray-600">Status Summary</h4>
                                    <div className="border border-gray-200 rounded">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="bg-[#333333] text-white">
                                                    <th className="px-4 py-2 text-left font-medium">Status</th>
                                                    <th className="px-4 py-2 text-left font-medium">Deliveries</th>
                                                    <th className="px-4 py-2 text-left font-medium">Quantity</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-4 py-2 font-medium bg-gray-50">Pending Delivery</td>
                                                    <td className="px-4 py-2">0</td>
                                                    <td className="px-4 py-2">0</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-medium bg-gray-50">Delivered</td>
                                                    <td className="px-4 py-2">0</td>
                                                    <td className="px-4 py-2">0</td>
                                                </tr>
                                                <tr className="font-bold border-t border-gray-300">
                                                    <td className="px-4 py-2">Total</td>
                                                    <td className="px-4 py-2">0</td>
                                                    <td className="px-4 py-2">0</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                 </div>
            )}

            {!showResult && (
                <div className="flex flex-col items-center justify-center p-12 text-center text-gray-500">
                    <p>Click "Show" to view delivery report details based on the selected filters.</p>
                </div>
            )}
        </div>
    );
}

DeliveryIndex.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;
