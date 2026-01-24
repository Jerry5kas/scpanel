import React, { ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import DataTable, { Column } from '@/Components/Admin/Crud/DataTable';

interface Customer {
    id: number;
    name: string;
    phone: string;
    balance: number;
    active: boolean;
    route: string;
    registered_on: string;
}

const mockData: Customer[] = [
    { id: 88, name: 'Dr Sini', phone: '90482 38888', balance: 0.00, active: true, route: 'Kaloor', registered_on: '3 Jan, 2026 12:59 AM' },
    { id: 85, name: 'Sharukh', phone: '85477 27672', balance: -3717.00, active: true, route: 'High Court', registered_on: '24 Dec, 2025 12:43 AM' },
    { id: 82, name: 'Achama', phone: '85899 12165', balance: -1097.00, active: true, route: 'Houses', registered_on: '20 Dec, 2025 5:21 PM' },
    { id: 81, name: 'Milan Gauthn', phone: '97024 96159', balance: 0.00, active: true, route: 'Malipuram', registered_on: '19 Dec, 2025 9:09 PM' },
    { id: 80, name: 'Princy Peter', phone: '79078 39601', balance: 0.00, active: true, route: 'Houses', registered_on: '18 Dec, 2025 4:01 PM' },
    { id: 79, name: 'Sobitha Agarwal', phone: '95989 11199', balance: 0.00, active: true, route: 'Malipuram', registered_on: '18 Dec, 2025 2:56 PM' },
    { id: 78, name: 'Satheesh Paul', phone: '98955 17438', balance: -630.00, active: true, route: 'High Court', registered_on: '18 Dec, 2025 1:55 PM' },
];

export default function CustomersIndex() {
    const columns: Column<Customer>[] = [
        { key: 'id', label: 'ID', sortable: true },
        { key: 'name', label: 'Name', sortable: true },
        { key: 'phone', label: 'Phone', sortable: true },
        { 
            key: 'balance', 
            label: 'Balance', 
            sortable: true,
            render: (row) => (
                <span className="font-medium text-gray-700">₹{row.balance.toFixed(2)}</span>
            )
        },
        { 
            key: 'active', 
            label: 'Active ?', 
            render: (row) => (
                <span className="text-gray-600 font-medium text-xs">Yes</span>
            )
        },
        { key: 'route', label: 'Route', sortable: true },
        { key: 'registered_on', label: 'Registered On', sortable: true },
        { 
            key: 'action', 
            label: 'Action', 
            render: (row) => (
                <button className="text-[#00a65a] hover:text-[#008d4c] font-medium text-sm transition-colors">
                    View
                </button>
            )
        },
    ];

    return (
        <div className="space-y-6">
            <Head title="Customers" />
            <DataTable 
                title="Customers"
                columns={columns}
                data={mockData}
                onAddClick={() => alert('Add Clicked')}
            />
        </div>
    );
}

CustomersIndex.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;
