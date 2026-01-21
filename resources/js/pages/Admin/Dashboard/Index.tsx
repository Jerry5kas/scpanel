import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';

import StatCard from '@/Components/Admin/StatCard';
import AdminLayout from '@/Layouts/AdminLayout';

import { CreditCard, FileText, LayoutDashboard, ShoppingCart, Truck } from 'lucide-react';

function Dashboard() {
    return (
        <div className="space-y-8">
            <Head title="Admin Dashboard" />

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <StatCard
                    title="Low Balance Subscriptions"
                    value="0"
                    subtitle="Subscriptions due for Renewal/Recharge"
                    color="red"
                    icon={FileText}
                />
                <StatCard
                    title="At-Risk Customers"
                    value="22"
                    subtitle="Long Time Since Last Order"
                    color="orange"
                    icon={ShoppingCart}
                />
                <StatCard
                    title="Today's Undelivered Orders"
                    value="0"
                    subtitle="One-Time Orders Awaiting Delivery"
                    color="emerald"
                    icon={Truck}
                />
                <StatCard
                    title="On-Demand Orders"
                    value="0"
                    subtitle="Urgent One-Time Orders for Delivery"
                    color="purple"
                    icon={ShoppingCart}
                />
                <StatCard
                    title="Unapproved Payments"
                    value="127"
                    subtitle="Payments Pending Review"
                    color="purple"
                    icon={CreditCard}
                />
            </div>

            {/* Sections Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="space-y-6">
                    {/* Past Deliveries */}
                    <div className="overflow-hidden rounded-xl bg-gray-50 shadow-sm transition-shadow hover:shadow-md">
                        <div className="bg-gray-100/50 px-4 py-3">
                            <h3 className="text-[14px] font-bold text-gray-700">Past Deliveries</h3>
                        </div>
                        <div className="p-4 space-y-2">
                            <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                                <div>
                                    <p className="text-[13px] font-bold text-gray-800">Wed, 21st January</p>
                                    <p className="text-[10px] font-bold uppercase tracking-tighter mt-0.5" style={{ color: 'var(--primary-color)' }}>One Time Order</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                                <div>
                                    <p className="text-[13px] font-bold text-gray-800">Wed, 21st January</p>
                                    <p className="text-[10px] font-bold uppercase tracking-tighter mt-0.5" style={{ color: 'var(--primary-color)' }}>Morning Slot</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Overdue Bills Summary */}
                    <div className="overflow-hidden rounded-xl bg-gray-50 shadow-sm transition-shadow hover:shadow-md">
                        <div className="bg-gray-100/50 px-4 py-3">
                            <h3 className="text-[14px] font-bold text-gray-700">Overdue Bills Summary</h3>
                        </div>
                        <div className="p-0">
                            <table className="w-full text-left">
                                <tbody className="text-[12px]">
                                    <tr className="border-b border-gray-100 transition-colors hover:bg-white/50">
                                        <td className="px-4 py-2.5 text-gray-500 font-medium">December 2025</td>
                                        <td className="px-4 py-2.5 text-right font-bold text-red-600">₹ -38,769.00</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 transition-colors hover:bg-white/50">
                                        <td className="px-4 py-2.5 text-gray-500 font-medium">November 2025</td>
                                        <td className="px-4 py-2.5 text-right font-bold text-red-600">₹ -1,581.00</td>
                                    </tr>
                                    <tr className="bg-white/70 transition-colors">
                                        <td className="px-4 py-2.5 text-gray-600 font-bold">October 2025</td>
                                        <td className="px-4 py-2.5 text-right font-bold text-red-600">₹ -234.00</td>
                                    </tr>
                                    <tr className="bg-gray-800 text-white">
                                        <td className="px-4 py-3 font-bold">Total Unpaid</td>
                                        <td className="px-4 py-3 text-right font-bold text-red-400">₹ -44,031.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Future Deliveries */}
                    <div className="overflow-hidden rounded-xl bg-gray-50 shadow-sm transition-shadow hover:shadow-md">
                        <div className="bg-gray-100/50 px-4 py-3">
                            <h3 className="text-[14px] font-bold text-gray-700">Future Deliveries</h3>
                        </div>
                        <div className="p-4 space-y-2">
                            <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                                <div>
                                    <p className="text-[13px] font-bold text-gray-800">Thu, 22nd January</p>
                                    <p className="text-[10px] font-bold uppercase tracking-tighter mt-0.5" style={{ color: 'var(--primary-color)' }}>Morning Slot</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                                <div>
                                    <p className="text-[13px] font-bold text-gray-800">Thu, 22nd January</p>
                                    <p className="text-[10px] font-bold uppercase tracking-tighter mt-0.5" style={{ color: 'var(--primary-color)' }}>One Time Order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* IMPORTANT */
Dashboard.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;

export default Dashboard;
