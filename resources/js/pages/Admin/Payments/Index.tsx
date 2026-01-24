import React, { ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import DataTable, { Column } from '@/Components/Admin/Crud/DataTable';

interface Payment {
    id: number;
    payment_id: string; // The "Id" column in image seems to be a large number, maybe distinct from DB ID
    name: string;
    phone: string;
    payment_mode: string;
    payment_status: string;
    amount: number;
    details_title: string;
    details_subtitle: string;
    details_type: 'subscription' | 'wallet'; // To distinguish icon/color
    payment_date: string;
}

const mockData: Payment[] = [
    { 
        id: 1, 
        payment_id: '1007343', 
        name: 'Milan Gauthn', 
        phone: '97024 96159', 
        payment_mode: 'Razorpay', 
        payment_status: 'Approved', 
        amount: 630.00, 
        details_title: '15-Pack', 
        details_subtitle: 'Plan ₹42.00', 
        details_type: 'subscription',
        payment_date: '23 Jan, 2026 4:36 PM' 
    },
    { 
        id: 2, 
        payment_id: '982512', 
        name: 'Sharmavathi Ts', 
        phone: '97454 94241', 
        payment_mode: 'Cash', 
        payment_status: 'Approved', 
        amount: 500.00, 
        details_title: 'Wallet', 
        details_subtitle: 'Recharge', 
        details_type: 'wallet',
        payment_date: '3 Jan, 2026 3:16 PM' 
    },
    { 
        id: 3, 
        payment_id: '982511', 
        name: 'Vikas', 
        phone: '99179 40310', 
        payment_mode: 'UPI', 
        payment_status: 'Approved', 
        amount: 369.00, 
        details_title: 'Wallet', 
        details_subtitle: 'Recharge', 
        details_type: 'wallet',
        payment_date: '4 Jan, 2026 3:14 PM' 
    },
];

export default function PaymentsIndex() {
    const columns: Column<Payment>[] = [
        { key: 'payment_id', label: 'Id', sortable: false },
        { key: 'name', label: 'Name', sortable: true },
        { key: 'phone', label: 'Phone', sortable: true },
        { key: 'payment_mode', label: 'Payment Mode', sortable: true },
        { key: 'payment_status', label: 'Payment Status', sortable: true },
        { 
            key: 'amount', 
            label: 'Amount', 
            sortable: true,
            render: (row) => (
                <span className="font-medium text-gray-700">₹{row.amount.toFixed(2)}</span>
            )
        },
        { 
            key: 'details', 
            label: 'Details', 
            render: (row) => (
                <div className="flex items-center gap-2">
                    {row.details_type === 'subscription' ? (
                        <span className="text-green-500">
                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 9h.01"/></svg>
                        </span>
                    ) : (
                        <span className="text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>
                        </span>
                    )}
                    <div className="flex flex-col">
                        <span className="text-xs font-medium text-gray-700">{row.details_title}</span>
                        <span className="text-[10px] text-gray-500">{row.details_subtitle}</span>
                    </div>
                </div>
            )
        },
        { 
            key: 'payment_date', 
            label: 'Payment Date', 
            sortable: true,
            render: (row) => (
                <div className="flex flex-col text-xs">
                    <span>{row.payment_date.split(' at ')[0]}</span>
                    <span className="text-gray-400">{row.payment_date.split(' at ')[1]}</span>
                </div>
            )
        },
        { 
            key: 'action', 
            label: 'Action', 
            render: () => (
                <button className="text-[#00a65a] hover:text-[#008d4c] font-medium text-sm transition-colors">
                    View
                </button>
            )
        },
    ];

    return (
        <div className="space-y-6">
            <Head title="Payments" />
            <DataTable 
                title="Payments"
                columns={columns}
                data={mockData}
                onAddClick={() => alert('Add Payment')}
            />
        </div>
    );
}

PaymentsIndex.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;
