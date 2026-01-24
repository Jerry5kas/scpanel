import React, { ReactNode, useState } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import DataTable, { Column } from '@/Components/Admin/Crud/DataTable';

interface Subscription {
    id: number;
    name: string;
    phone: string;
    product: string;
    details_price: number;
    details_unit: string;
    details_plan: string;
    details_balance: number;
    time: string;
    status: 'Active' | 'Inactive';
}

const mockData: Subscription[] = [
    { 
        id: 1, 
        name: 'Milan GauthN', 
        phone: '97024 96159', 
        product: '15-Pack Plan', 
        details_price: 42.00,
        details_unit: '1 Unit',
        details_plan: 'Everyday Plan: 15 unit',
        details_balance: 14,
        time: 'Morning',
        status: 'Active'
    },
    { 
        id: 2, 
        name: 'Dr Sini', 
        phone: '90482 38888', 
        product: 'Raw Fresh Milk - 30 Packs Plan (480ML)', 
        details_price: 41.00,
        details_unit: '1 Unit',
        details_plan: 'Everyday Plan: 30 unit',
        details_balance: 9,
        time: 'Morning',
        status: 'Active'
    },
    { 
        id: 3, 
        name: 'Nirupama Panda', 
        phone: '91314 44801', 
        product: 'Raw Fresh Milk - 30 Packs Plan (1L)', 
        details_price: 81.00,
        details_unit: '1 Unit',
        details_plan: 'Everyday Plan: 30 unit',
        details_balance: 4,
        time: 'Morning',
        status: 'Active'
    },
];

export default function SubscriptionsIndex() {
    const [activeTab, setActiveTab] = useState<'all' | 'low_balance'>('all');

    const columns: Column<Subscription>[] = [
        { key: 'name', label: 'Name', sortable: true },
        { key: 'phone', label: 'Phone', sortable: true },
        { key: 'product', label: 'Product', sortable: true },
        { 
            key: 'details', 
            label: 'Details', 
            render: (row) => (
                <div className="flex flex-col text-xs leading-relaxed">
                    <span className="font-semibold text-gray-700">₹{row.details_price.toFixed(2)} | {row.details_unit} |</span>
                    <span className="text-gray-600">{row.details_plan} | Balance:</span>
                    <span className="font-bold text-gray-800">{row.details_balance}</span>
                </div>
            )
        },
        { key: 'time', label: 'Time', sortable: true },
        { 
            key: 'status', 
            label: 'Status', 
            render: (row) => (
                <span className="px-2 py-0.5 rounded text-white text-[10px] font-bold bg-[#5cb85c]">
                    {row.status}
                </span>
            )
        },
    ];

    return (
        <div className="space-y-4">
            <Head title="Subscriptions" />
            
            {/* Tabs */}
            <div className="flex items-center space-x-1">
                 <button 
                    onClick={() => setActiveTab('all')}
                    className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors ${
                        activeTab === 'all' 
                            ? 'bg-[#37696c] text-white' 
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                >
                    Subscriptions
                </button>
                <button 
                    onClick={() => setActiveTab('low_balance')}
                    className={`px-4 py-2 text-sm font-medium rounded-t-md transition-colors ${
                        activeTab === 'low_balance' 
                            ? 'bg-[#37696c] text-white' 
                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                >
                    Low Balance Subscriptions
                </button>
            </div>

            <DataTable 
                title={activeTab === 'all' ? 'Subscriptions' : 'Low Balance Subscriptions'}
                columns={columns}
                data={mockData}
                onAddClick={() => window.location.href = '/admin/subscriptions/create'}
            />
        </div>
    );
}

SubscriptionsIndex.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;
