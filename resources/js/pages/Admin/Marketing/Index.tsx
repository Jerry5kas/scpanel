import React, { ReactNode, useState } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Bell, FileText, UserPlus, FolderOpen, Download, Edit } from 'lucide-react';
import DataTable, { Column } from '@/Components/Admin/Crud/DataTable';

interface Discount {
    id: number;
    sr_no: number;
    name: string;
    code: string;
    type: string;
    status: 'Active' | 'Inactive';
}

const mockDiscounts: Discount[] = [
    { id: 1, sr_no: 1, name: 'MEGASAVER', code: 'MEGASAVER', type: 'Fixed Amount', status: 'Active' },
    { id: 2, sr_no: 2, name: 'Complimentary', code: 'COMPLEMENTARY', type: 'Fixed Amount', status: 'Active' },
    { id: 3, sr_no: 3, name: 'WELCOME PLAN', code: 'WLCM39', type: 'Fixed Amount', status: 'Active' },
    { id: 4, sr_no: 4, name: '15TO30', code: '15TO30', type: 'Percentage', status: 'Active' },
];

export default function MarketingIndex() {
    const [activeTab, setActiveTab] = useState<'notifications' | 'discounts' | 'refer'>('notifications');
    const [notificationType, setNotificationType] = useState<'email' | 'push'>('email');

    const discountColumns: Column<Discount>[] = [
        { key: 'sr_no', label: 'Sr.No.', sortable: true },
        { key: 'name', label: 'Name', sortable: true },
        { key: 'code', label: 'Code', sortable: true },
        { key: 'type', label: 'Type', sortable: true },
        { key: 'status', label: 'Status', render: (row) => row.status },
        {
            key: 'action',
            label: 'Action',
            render: (row) => (
                <div className="flex items-center gap-2">
                    <button className="text-[#337ab7] hover:underline text-sm font-medium">Edit</button>
                    <button className="p-1 px-2 bg-[#5cb85c] hover:bg-green-600 text-white rounded">
                        <Download className="w-4 h-4" />
                    </button>
                </div>
            )
        }
    ];

    return (
        <div className="space-y-6">
            <Head title="Marketing" />
            
            {/* Top Tabs */}
            <div className="grid grid-cols-3 bg-white shadow-sm border-b border-gray-200">
                <button
                    onClick={() => setActiveTab('notifications')}
                    className={`flex flex-col items-center justify-center p-4 border-r border-gray-100 transition-colors ${
                        activeTab === 'notifications' 
                            ? 'bg-[#37696c] text-white' 
                            : 'bg-green-50/50 hover:bg-gray-50 text-gray-600'
                    }`}
                >
                    <Bell className={`w-6 h-6 mb-2 ${activeTab === 'notifications' ? 'text-white' : 'text-gray-500'}`} />
                    <span className="font-medium text-sm">Notifications</span>
                </button>
                <button
                    onClick={() => setActiveTab('discounts')}
                    className={`flex flex-col items-center justify-center p-4 border-r border-gray-100 transition-colors ${
                        activeTab === 'discounts' 
                            ? 'bg-[#37696c] text-white' 
                            : 'bg-green-50/50 hover:bg-gray-50 text-gray-600'
                    }`}
                >
                    <FileText className={`w-6 h-6 mb-2 ${activeTab === 'discounts' ? 'text-white' : 'text-gray-500'}`} />
                    <span className="font-medium text-sm">Discounts</span>
                </button>
                <button
                    onClick={() => setActiveTab('refer')}
                    className={`flex flex-col items-center justify-center p-4 transition-colors ${
                        activeTab === 'refer' 
                            ? 'bg-[#37696c] text-white' 
                            : 'bg-green-50/50 hover:bg-gray-50 text-gray-600'
                    }`}
                >
                    <UserPlus className={`w-6 h-6 mb-2 ${activeTab === 'refer' ? 'text-white' : 'text-gray-500'}`} />
                    <span className="font-medium text-sm">Refer A Friend</span>
                </button>
            </div>

            {/* Notifications Tab Content */}
            {activeTab === 'notifications' && (
                <div className="bg-white rounded-md shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="text-lg font-medium text-gray-700">Send New Notification</h2>
                        <button className="p-2 bg-[#37696c] text-white rounded hover:bg-[#2d5659]">
                            <FolderOpen className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="p-8 max-w-4xl space-y-8">
                        {/* Notification Type */}
                        <div className="space-y-4">
                            <label className="text-sm font-medium text-gray-600">Notification Type</label>
                            <div className="flex gap-1">
                                <button 
                                    onClick={() => setNotificationType('email')}
                                    className={`px-6 py-2 rounded-sm text-sm font-medium border transition-colors ${
                                        notificationType === 'email' 
                                            ? 'bg-[#37696c] text-white border-[#37696c]' 
                                            : 'bg-gray-100 text-gray-700 border-gray-200'
                                    }`}
                                >
                                    Email
                                </button>
                                <button 
                                    onClick={() => setNotificationType('push')}
                                    className={`px-6 py-2 rounded-sm text-sm font-medium border transition-colors ${
                                        notificationType === 'push' 
                                            ? 'bg-[#37696c] text-white border-[#37696c]' 
                                            : 'bg-gray-100 text-gray-700 border-gray-200'
                                    }`}
                                >
                                    Push Notification
                                </button>
                            </div>
                        </div>

                        {/* Customer Type */}
                        <div className="space-y-4">
                            <label className="text-sm font-medium text-gray-600">Select Customer Type <span className="text-red-500">*</span></label>
                            <select className="w-full max-w-md px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-[#37696c] focus:border-[#37696c] text-sm text-gray-600">
                                <option>All Customers</option>
                            </select>
                        </div>

                        {/* Email Subject */}
                        {notificationType === 'email' && (
                            <div className="space-y-4">
                                <label className="text-sm font-medium text-gray-600">Email Subject</label>
                                <input 
                                    type="text" 
                                    className="w-full max-w-2xl px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-[#37696c] focus:border-[#37696c]" 
                                />
                            </div>
                        )}

                        {/* Body */}
                        <div className="space-y-4">
                            <label className="text-sm font-medium text-gray-600">{notificationType === 'email' ? 'Email Body' : 'Message Body'}</label>
                            <textarea 
                                rows={4}
                                className="w-full max-w-2xl px-4 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-[#37696c] focus:border-[#37696c]" 
                            />
                        </div>

                        {/* Abbreviations Helper */}
                        <div className="pt-8 border-t border-gray-100 text-xs text-gray-500 space-y-2">
                            <p className="font-medium">Please use the following abbreviations for better understanding</p>
                            <p><span className="text-orange-400 font-bold">{`{{BRAND_NAME}}`}</span>: Name</p>
                            <p><span className="text-orange-400 font-bold">{`{{USER}}`}</span>: User name</p>
                        </div>

                        {/* Footer Buttons */}
                        <div className="flex justify-end gap-3 pt-4">
                            <button className="px-6 py-2 bg-[#d9534f] text-white rounded text-sm font-medium hover:bg-red-600 transition-colors">
                                Back
                            </button>
                            <button className="px-6 py-2 bg-[#337ab7] text-white rounded text-sm font-medium hover:bg-blue-600 transition-colors">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Discounts Tab Content */}
            {activeTab === 'discounts' && (
                <div className="space-y-6">
                    <DataTable 
                        title="Discount Coupons"
                        columns={discountColumns}
                        data={mockDiscounts}
                        onAddClick={() => alert('Add Coupon')}
                    />
                </div>
            )}

            {/* Refer A Friend Tab Content */}
            {activeTab === 'refer' && (
                <div className="space-y-6">
                    <div className="bg-white rounded-md shadow-sm border border-gray-200">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                            <h2 className="text-lg font-medium text-gray-700">Refer A Friend:</h2>
                            <button className="p-2 bg-[#37696c] text-white rounded hover:bg-[#2d5659]">
                                <FolderOpen className="w-4 h-4" />
                            </button>
                        </div>
                        
                        <div className="p-8">
                            {/* Reward Toggle */}
                            <div className="flex flex-wrap gap-8 mb-8">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="reward_type" className="w-5 h-5 text-[#37696c] border-gray-300 focus:ring-[#37696c]" />
                                    <span className="text-sm text-gray-600">Refer without reward</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="reward_type" defaultChecked className="w-5 h-5 text-[#37696c] border-gray-300 focus:ring-[#37696c]" />
                                    <span className="text-sm text-gray-600">Refer with reward</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="reward_type" className="w-5 h-5 text-[#37696c] border-gray-300 focus:ring-[#37696c]" />
                                    <span className="text-sm text-gray-600">Disable</span>
                                </label>
                            </div>

                            {/* Short Link */}
                            <div className="mb-6 space-y-2">
                                <label className="text-xs font-bold text-gray-700">Enter short link for Web & App (eg. https://onelink.to/your_packageID)</label>
                                <input 
                                    type="text" 
                                    defaultValue="https://freshtick.rekart.io/home"
                                    className="w-full max-w-lg px-3 py-2 border border-gray-300 rounded text-sm focus:ring-[#37696c] focus:border-[#37696c]" 
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Message to share (Max 300 chars)</label>
                                    <p className="text-xs text-gray-400 mb-2">Variables: {'{{REFEREE_REWARD}}'}, {'{{MIN_RECHARGE_AMOUNT}}'}, {'{{REF_CODE}}'}, {'{{SHORT_LINK_URL}}'}</p>
                                    <textarea 
                                        rows={8}
                                        defaultValue={`Get cashback of {{REFEREE_REWARD}} on your first recharge of {{MIN_RECHARGE_AMOUNT}}.
Use my referral code: {{REF_CODE}}
Link to download app {{SHORT_LINK_URL}}`}
                                        className="w-full p-3 border border-gray-300 rounded text-sm focus:ring-[#37696c] focus:border-[#37696c]"
                                    />
                                </div>

                                {/* Rewards Inputs */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-bold text-gray-700">Referrer's rewards :</label>
                                        <input 
                                            type="text" 
                                            defaultValue="82"
                                            className="w-40 px-3 py-2 border border-gray-300 rounded text-sm text-right focus:ring-[#37696c] focus:border-[#37696c]" 
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-bold text-gray-700">Referee's rewards :</label>
                                        <input 
                                            type="text" 
                                            defaultValue="42"
                                            className="w-40 px-3 py-2 border border-gray-300 rounded text-sm text-right focus:ring-[#37696c] focus:border-[#37696c]" 
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-bold text-gray-700">First minimum recharge amount :</label>
                                        <input 
                                            type="text" 
                                            defaultValue="503"
                                            className="w-40 px-3 py-2 border border-gray-300 rounded text-sm text-right focus:ring-[#37696c] focus:border-[#37696c]" 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end mt-8">
                                <button className="px-8 py-2 bg-[#5cb85c] hover:bg-green-600 text-white rounded font-medium shadow-sm transition-colors">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* History Table */}
                    <div className="bg-white rounded-md shadow-sm border border-gray-200">
                        <div className="px-6 py-4 border-b border-gray-100">
                            <h2 className="text-lg font-medium text-gray-700">Refer A Friend</h2>
                        </div>
                        <div className="p-6">
                            <table className="w-full text-sm text-left">
                                <thead className="text-white bg-[#333333]">
                                    <tr>
                                        <th className="px-4 py-3 font-medium border-r border-gray-600">#</th>
                                        <th className="px-4 py-3 font-medium border-r border-gray-600">Name</th>
                                        <th className="px-4 py-3 font-medium border-r border-gray-600">Mobile</th>
                                        <th className="px-4 py-3 font-medium border-r border-gray-600">Reward count</th>
                                        <th className="px-4 py-3 font-medium border-r border-gray-600">Signed up count</th>
                                        <th className="px-4 py-3 font-medium border-r border-gray-600">Reward amount</th>
                                        <th className="px-4 py-3 font-medium">Eligible for reward?</th>
                                    </tr>
                                </thead>
                                <tbody className="border border-gray-200">
                                    <tr className="border-b border-gray-100 h-10">
                                        <td className="px-4 py-2 border-r border-gray-100">1</td>
                                        <td className="px-4 py-2 border-r border-gray-100"></td>
                                        <td className="px-4 py-2 border-r border-gray-100"></td>
                                        <td className="px-4 py-2 border-r border-gray-100"></td>
                                        <td className="px-4 py-2 border-r border-gray-100"></td>
                                        <td className="px-4 py-2 border-r border-gray-100"></td>
                                        <td className="px-4 py-2"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

MarketingIndex.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;
