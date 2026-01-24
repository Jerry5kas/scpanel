import React, { ReactNode } from 'react';
import { ChevronDown, ChevronUp, ChevronsUpDown, Filter, X, Plus, Download, Bell, Search, Eye } from 'lucide-react';
import { Link } from '@inertiajs/react';

export interface Column<T> {
    key: keyof T | string;
    label: string;
    sortable?: boolean;
    searchable?: boolean;
    type?: 'text' | 'number' | 'boolean' | 'date' | 'custom';
    filterOptions?: string[];
    render?: (row: T) => ReactNode;
    width?: string;
}

interface PaginationMeta {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
}

interface DataTableProps<T> {
    title: string;
    columns: Column<T>[];
    data: T[];
    meta?: PaginationMeta; // Optional for now if we just mock
    onSearch?: (column: string, value: string) => void;
    onSort?: (column: string, direction: 'asc' | 'desc') => void;
    onPageChange?: (page: number) => void;
    onAddClick?: () => void;
}

export default function DataTable<T extends { id: string | number }>({
    title,
    columns,
    data,
    meta,
    onSearch,
    onSort,
    onPageChange,
    onAddClick
}: DataTableProps<T>) {
    return (
        <div className="bg-white rounded-md shadow-sm border border-gray-200">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="text-gray-600">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                    </div>
                    <h2 className="text-lg font-medium text-gray-700">{title}</h2>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 text-white bg-[#337ab7] rounded hover:bg-blue-700 transition-colors shadow-sm">
                        <Bell className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-white bg-[#5cb85c] rounded hover:bg-green-700 transition-colors shadow-sm">
                        <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-white bg-[#6dbad4] rounded hover:bg-cyan-700 transition-colors shadow-sm">
                        <Filter className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-[#d9534f] bg-red-50 rounded border border-red-100 hover:bg-red-100 transition-colors">
                        <X className="w-4 h-4" />
                    </button>
                    {onAddClick && (
                        <button 
                            onClick={onAddClick}
                            className="flex items-center gap-1 px-4 py-2 bg-[#337ab7] text-white rounded hover:bg-blue-700 transition-colors shadow-sm text-sm font-medium"
                        >
                            <Plus className="w-4 h-4" />
                            Add
                        </button>
                    )}
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-white bg-[#333333]">
                        <tr>
                            <th className="p-4 w-12 border-r border-gray-600">
                                <input type="checkbox" className="rounded border-gray-400 text-[#337ab7] focus:ring-[#337ab7]" />
                            </th>
                            {columns.map((col, idx) => (
                                <th key={String(col.key)} className="px-4 py-3 font-medium border-r border-gray-600 last:border-r-0 whitespace-nowrap">
                                    <div className="flex items-center justify-between gap-2">
                                        {col.label}
                                        {col.sortable && <ChevronsUpDown className="w-3 h-3 opacity-50 cursor-pointer hover:opacity-100" />}
                                    </div>
                                </th>
                            ))}
                        </tr>
                        {/* Search Row */}
                        <tr className="bg-white text-gray-700 border-b border-gray-200">
                             <th className="p-4 border-r border-gray-200">
                                <Search className="w-4 h-4 text-gray-400" />
                            </th>
                            {columns.map((col) => (
                                <th key={`search-${String(col.key)}`} className="px-2 py-2 border-r border-gray-200 last:border-r-0">
                                    {col.searchable !== false && (
                                        col.filterOptions ? (
                                            <select className="w-full text-xs border-gray-200 rounded px-2 py-1.5 focus:border-[#337ab7] focus:ring-1 focus:ring-[#337ab7] outline-none text-gray-500">
                                                {col.filterOptions.map(opt => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input 
                                                type="text" 
                                                placeholder={col.label === 'Action' ? '' : `Search ${col.label.replace('?', '')}`}
                                                className={`w-full text-xs border-gray-200 rounded px-2 py-1.5 focus:border-[#337ab7] focus:ring-1 focus:ring-[#337ab7] outline-none placeholder:text-gray-400 ${col.label === 'Action' ? 'invisible' : ''}`}
                                            />
                                        )
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {data.map((row, rowIndex) => (
                            <tr key={row.id} className="hover:bg-gray-50 transition-colors text-gray-600">
                                <td className="p-4 border-r border-gray-100">
                                    <input type="checkbox" className="rounded border-gray-300 text-[#337ab7] focus:ring-[#337ab7]" />
                                </td>
                                {columns.map((col) => (
                                    <td key={`${row.id}-${String(col.key)}`} className="px-4 py-3 border-r border-gray-100 last:border-r-0">
                                        {col.render ? col.render(row) : (row[col.key as keyof T] as ReactNode)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-2 text-sm text-gray-600">
                <button className="px-2 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">
                    <ChevronDown className="w-4 h-4 rotate-90" />
                </button>
                <button className="px-3 py-1 bg-[#337ab7] text-white rounded font-medium">1</button>
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">2</button>
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">3</button>
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">4</button>
                <span className="px-1 text-gray-400">...</span>
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">10</button>
                <button className="px-2 py-1 border border-gray-200 rounded hover:bg-gray-50">
                    <ChevronDown className="w-4 h-4 -rotate-90" />
                </button>
                <div className="ml-4 flex items-center gap-2">
                     <select className="border border-gray-200 rounded px-2 py-1 text-xs focus:ring-[#337ab7] focus:border-[#337ab7]">
                        <option>10 / page</option>
                        <option>20 / page</option>
                        <option>50 / page</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
