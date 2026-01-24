import React, { ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import DataTable, { Column } from '@/Components/Admin/Crud/DataTable';

interface Order {
    id: number;
    order_number: string;
    name: string;
    phone: string;
    status: string;
    payment_status: string;
    amount: number;
    delivery_on: string;
    placed_on: string;
}

const mockData: Order[] = [
    { 
        id: 1, 
        order_number: '# 151', 
        name: 'Freshtick Team', 
        phone: '75103 65239', 
        status: 'Confirmed', 
        payment_status: 'Unpaid', 
        amount: 29.00, 
        delivery_on: '30 Jul, 2025', 
        placed_on: '31 Jul, 2025 1:20 PM' 
    },
    { 
        id: 2, 
        order_number: '# 150', 
        name: 'Freshtick Team', 
        phone: '75103 65239', 
        status: 'Confirmed', 
        payment_status: 'Unpaid', 
        amount: 58.00, 
        delivery_on: '29 Jul, 2025', 
        placed_on: '31 Jul, 2025 1:20 PM' 
    },
    { 
        id: 3, 
        order_number: '# 149', 
        name: 'Zina', 
        phone: '79946 62871', 
        status: 'Confirmed', 
        payment_status: 'Paid (Wallet)', 
        amount: 0.00, 
        delivery_on: '28 Jul, 2025', 
        placed_on: '31 Jul, 2025 12:38 PM' 
    },
];

export default function OrdersIndex() {
    const columns: Column<Order>[] = [
        { 
            key: 'order_number', 
            label: 'ID', 
            sortable: true,
            render: (row) => <span className="text-[#148284] font-medium">{row.order_number}</span>
        },
        { 
            key: 'name', 
            label: 'Name', 
            sortable: true,
            render: (row) => (
                <div className="flex flex-col">
                    <span className="text-[#148284] font-medium">{row.name}</span>
                    <span className="text-xs text-gray-500">{row.phone}</span>
                </div>
            )
        },
        { 
            key: 'status', 
            label: 'Status', 
            sortable: true,
            render: (row) => <span className="text-green-600 font-medium text-xs">{row.status}</span>
        },
        { 
            key: 'payment_status', 
            label: 'Payment Status', 
            sortable: true,
            render: (row) => (
                <span className={`font-medium text-xs ${row.payment_status.includes('Paid') && !row.payment_status.includes('Unpaid') ? 'text-green-600' : 'text-red-400'}`}>
                    {row.payment_status}
                </span>
            )
        },
        { 
            key: 'amount', 
            label: 'Amount', 
            sortable: true,
            render: (row) => <span className="font-medium text-gray-700">₹{row.amount.toFixed(2)}</span>
        },
        { key: 'delivery_on', label: 'Delivery On', sortable: true },
        { 
            key: 'placed_on', 
            label: 'Placed On', 
            sortable: true,
            render: (row) => <span className="text-xs text-gray-600">{row.placed_on}</span>
        },
        { 
            key: 'action', 
            label: 'Action', 
            render: () => (
                 <button className="text-[#148284]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            )
        },
    ];

    return (
        <div className="space-y-6">
            <Head title="Orders" />
            <DataTable 
                title="Orders"
                columns={columns}
                data={mockData}
                onAddClick={() => alert('Add Order')}
            />
        </div>
    );
}

OrdersIndex.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;
