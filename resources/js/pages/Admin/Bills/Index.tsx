import React, { ReactNode } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import DataTable, { Column } from '@/Components/Admin/Crud/DataTable';
import { Bell, Download, Filter, MessageCircle, DollarSign, Share2 } from 'lucide-react';

interface Bill {
    id: number;
    name: string;
    phone: string;
    opening_balance: number;
    bill_total: number;
    refund: number;
    payment: number;
    closing_balance: number;
    status: 'Paid' | 'Unpaid';
}

const mockBills: Bill[] = [
    { id: 1, name: 'Achama', phone: '85899 12165', opening_balance: 0.00, bill_total: 1377.00, refund: 0.00, payment: 0.00, closing_balance: -1377.00, status: 'Unpaid' },
    { id: 2, name: 'Akhilesh', phone: '86672 04374', opening_balance: -117.00, bill_total: 1230.00, refund: 90.00, payment: 1257.00, closing_balance: 0.00, status: 'Paid' },
    { id: 3, name: 'Amritha Rajeev', phone: '97787 66785', opening_balance: -2460.00, bill_total: 1230.00, refund: 0.00, payment: 2460.00, closing_balance: -1230.00, status: 'Unpaid' },
    { id: 4, name: 'Anjali Devan', phone: '95629 65428', opening_balance: -1347.00, bill_total: 1230.00, refund: 0.00, payment: 1230.00, closing_balance: -1347.00, status: 'Unpaid' },
    { id: 5, name: 'Arathi', phone: '99461 47958', opening_balance: 0.00, bill_total: 207.00, refund: 0.00, payment: 162.00, closing_balance: -45.00, status: 'Unpaid' },
    { id: 6, name: 'Asha Roy', phone: '75105 81977', opening_balance: 0.00, bill_total: 117.00, refund: 0.00, payment: 0.00, closing_balance: -117.00, status: 'Unpaid' },
    { id: 7, name: 'Augustine', phone: '98693 43685', opening_balance: -1347.00, bill_total: 0.00, refund: 0.00, payment: 1230.00, closing_balance: -117.00, status: 'Unpaid' },
];

export default function BillsIndex() {
    const columns: Column<Bill>[] = [
        { key: 'name', label: 'Name', sortable: true, searchable: true },
        { key: 'phone', label: 'Phone', sortable: true, searchable: true },
        { 
            key: 'opening_balance', 
            label: 'Opening Balance', 
            searchable: true,
            render: (row) => <span className={row.opening_balance < 0 ? 'text-red-500' : ''}>₹{row.opening_balance.toFixed(2)}</span>
        },
        { 
            key: 'bill_total', 
            label: 'Bill Total', 
            sortable: true, searchable: true,
            render: (row) => <span className="text-red-500">₹{row.bill_total.toFixed(2)}</span>
        },
        { 
            key: 'refund', 
            label: 'Refund & Cancellation', 
            searchable: true,
            render: (row) => <span className={row.refund > 0 ? 'text-red-500' : ''}>₹{row.refund.toFixed(2)}</span>
        },
        { 
            key: 'payment', 
            label: 'Payment & Credit', 
            searchable: true,
            render: (row) => <span className={row.payment > 0 ? 'text-green-600' : ''}>₹{row.payment.toFixed(2)}</span>
        },
        { 
            key: 'closing_balance', 
            label: 'Closing Balance', 
            searchable: true,
            render: (row) => <span className={row.closing_balance < 0 ? 'text-red-500' : ''}>₹{row.closing_balance.toFixed(2)}</span>
        },
        { 
            key: 'status', 
            label: 'Status', 
            filterOptions: ['All', 'Paid', 'Unpaid'],
            render: (row) => row.status // Logic to text color could be added here if needed
        },
        {
            key: 'action',
            label: 'Action',
            render: (row) => (
                <div className="flex items-center gap-2">
                    <button className="text-teal-600 hover:text-teal-800">
                        <DollarSign className="w-4 h-4" />
                    </button>
                    <button className="text-[#148284] hover:text-blue-800">
                        <Share2 className="w-4 h-4" />
                    </button>
                    <button className="text-green-500 hover:text-green-700">
                        <MessageCircle className="w-4 h-4" />
                    </button>
                    {/* Add WhatsApp icon properly if needed, mostly simulated by MessageCircle here or custom SVG */}
                </div>
            )
        }
    ];

    return (
        <div className="space-y-6">
            <Head title="Bills" />
            
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                <div className="w-full md:w-48 space-y-1">
                    <label className="text-xs text-gray-500 font-medium">Filter By</label>
                    <div className="flex gap-2">
                        <input type="text" defaultValue="December 2025" className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-[#148284] focus:border-[#148284]" />
                        <button className="bg-[#148284] hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium">Show</button>
                    </div>
                </div>
                
                 <div className="w-full md:w-auto flex items-end gap-4">
                    <div className="flex-1 md:w-96 space-y-1">
                        <label className="text-xs text-gray-500 font-medium">Filter by Routes</label>
                        <select className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-[#148284] focus:border-[#148284]">
                           <option>Malipuram, Nayarambalam, High Court, Alathurp...</option> 
                        </select>
                    </div>
                    <button className="bg-[#148284] p-2 rounded text-white shadow-sm hover:bg-blue-600">
                        <Bell className="w-5 h-5" />
                    </button>
                    <button className="bg-[#5cb85c] px-4 py-2 rounded text-white shadow-sm hover:bg-green-600 flex items-center gap-2 text-sm font-medium">
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                </div>
            </div>

            <DataTable 
                title="" // Empty title as header is custom
                columns={columns}
                data={mockBills}
                onAddClick={() => {}} // No add button on bills table usually
            />
        </div>
    );
}

BillsIndex.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;
