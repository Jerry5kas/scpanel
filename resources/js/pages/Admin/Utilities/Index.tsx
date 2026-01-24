import React, { ReactNode, useState } from 'react';
import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Truck, Car, Home, MapPin, Upload, Search, ChevronRight } from 'lucide-react';
import DataTable, { Column } from '@/Components/Admin/Crud/DataTable';

// Mock Data Interfaces
interface Route {
    id: number;
    sr_no: number;
    route_name: string;
    is_default?: boolean;
    assigned_driver: string;
    route_status: 'Active' | 'Inactive';
    hub_name: string;
}

interface Driver {
    id: number;
    sr_no: number;
    driver_name: string;
    phone: string;
    assigned_routes: string[];
    driver_status: 'Active' | 'Inactive';
    assigned_route_value: string; // for filtering
}

interface Hub {
    id: number;
    sr_no: number;
    name: string;
    status: 'Active' | 'Inactive';
}

// Mock Data
const mockRoutes: Route[] = [
    { id: 1, sr_no: 1, route_name: 'Malipuram', is_default: true, assigned_driver: 'Nishamil', route_status: 'Active', hub_name: 'FRESHTICK Hub (Vypin co-op society)' },
    { id: 2, sr_no: 2, route_name: 'Nayarambalam', assigned_driver: '-', route_status: 'Active', hub_name: 'FRESHTICK Hub (Vypin co-op society)' },
    { id: 3, sr_no: 3, route_name: 'High Court', assigned_driver: 'Nishamil', route_status: 'Active', hub_name: 'FRESHTICK Hub (Vypin co-op society)' },
    { id: 4, sr_no: 4, route_name: 'Alathurpadi Malapuram', assigned_driver: '-', route_status: 'Active', hub_name: 'Alathurpadi Malapuram' },
    { id: 5, sr_no: 5, route_name: 'Kaloor', assigned_driver: 'Nishamil', route_status: 'Active', hub_name: 'FRESHTICK Hub (Vypin co-op society)' },
    { id: 6, sr_no: 6, route_name: 'Panampilly Nagar', assigned_driver: 'Nishamil', route_status: 'Active', hub_name: 'FRESHTICK Hub (Vypin co-op society)' },
    { id: 7, sr_no: 7, route_name: 'Houses', assigned_driver: 'Akhil', route_status: 'Active', hub_name: 'FRESHTICK Hub (Vypin co-op society)' },
];

const mockDrivers: Driver[] = [
    { id: 1, sr_no: 1, driver_name: 'Nishamil', phone: '75103 65239', assigned_routes: ['Malipuram', 'High Court', 'Kaloor', 'Panampilly Nagar'], driver_status: 'Active', assigned_route_value: 'Malipuram' },
    { id: 2, sr_no: 2, driver_name: 'Akhil', phone: '99616 85679', assigned_routes: ['Houses'], driver_status: 'Active', assigned_route_value: 'Houses' },
];

const mockHubs: Hub[] = [
    { id: 1, sr_no: 1, name: 'FRESHTICK Hub (Vypin co-op society)', status: 'Active' },
    { id: 2, sr_no: 2, name: 'Alathurpadi Malapuram', status: 'Active' },
];

export default function UtilitiesIndex() {
    const [activeTab, setActiveTab] = useState<'routes' | 'drivers' | 'hubs' | 'zones' | 'bulk'>('routes');

    const routeColumns: Column<Route>[] = [
        { key: 'sr_no', label: 'Sr.No', sortable: true },
        { 
            key: 'route_name', 
            label: 'Route Name', 
            sortable: true,
            render: (row) => (
                <div className="flex items-center gap-2">
                    <span>{row.route_name}</span>
                    {row.is_default && <span className="text-[10px] bg-green-500 text-white px-1.5 py-0.5 rounded font-bold">Default</span>}
                </div>
            )
        },
        { 
            key: 'assigned_driver', 
            label: 'Assigned Driver(s)', 
            filterOptions: ['All', 'Akhil, Nish...', 'Other'],
            render: (row) => row.assigned_driver 
        },
        { 
            key: 'route_status', 
            label: 'Route Status', 
            filterOptions: ['All', 'Active', 'Inactive'],
            render: (row) => row.route_status 
        },
        { 
            key: 'hub_name', 
            label: 'Hub Name', 
            filterOptions: ['FRESHTIC...', 'Alathurpa...'],
            render: (row) => row.hub_name 
        },
        {
            key: 'action',
            label: 'Action',
            render: () => <button className="text-[#148284] hover:underline hover:text-[#2d5659] text-sm font-medium">Edit</button>
        }
    ];

    const driverColumns: Column<Driver>[] = [
        { key: 'sr_no', label: 'Sr.No', sortable: true },
        { key: 'driver_name', label: 'Driver Name', sortable: true, searchable: true },
        { key: 'phone', label: 'Phone', sortable: true, searchable: true },
        { 
            key: 'assigned_route_value', 
            label: 'Assigned Route(s)', 
            filterOptions: ['Malipuram...', 'Houses'],
            render: (row) => (
                <div className="flex flex-col gap-0.5 py-1">
                    {row.assigned_routes.map((route, i) => (
                        <span key={i} className="text-xs leading-tight">{route}</span>
                    ))}
                </div>
            )
        },
        { 
            key: 'driver_status', 
            label: 'Driver Status', 
            filterOptions: ['All', 'Active', 'Inactive'],
            render: (row) => row.driver_status 
        },
        {
            key: 'action',
            label: 'Action',
            render: () => <button className="text-[#148284] hover:underline hover:text-[#2d5659] text-sm font-medium">Edit</button>
        }
    ];

    const hubColumns: Column<Hub>[] = [
        { key: 'sr_no', label: 'Sr.No.', sortable: true },
        { key: 'name', label: 'Name', sortable: true },
        { 
            key: 'status', 
            label: 'Status', 
            filterOptions: ['Active', 'Inactive'],
            render: (row) => row.status 
        },
        {
            key: 'action',
            label: 'Action',
            render: () => <button className="text-[#148284] hover:underline hover:text-[#2d5659] text-sm font-medium">Edit</button>
        }
    ];

    return (
        <div className="space-y-6">
            <Head title="Utilities" />
            
            {/* Top Tabs */}
            <div className="grid grid-cols-5 bg-white shadow-sm border-b border-gray-200">
                <button
                    onClick={() => setActiveTab('routes')}
                    className={`flex flex-col items-center justify-center p-4 border-r border-gray-100 transition-colors ${
                        activeTab === 'routes' 
                            ? 'bg-[#148284] text-white' 
                            : 'bg-green-50/50 hover:bg-gray-50 text-gray-600'
                    }`}
                >
                    <Truck className={`w-5 h-5 mb-2 ${activeTab === 'routes' ? 'text-white' : 'text-gray-500'}`} />
                    <span className="font-medium text-sm">Routes</span>
                </button>
                <button
                    onClick={() => setActiveTab('drivers')}
                    className={`flex flex-col items-center justify-center p-4 border-r border-gray-100 transition-colors ${
                        activeTab === 'drivers' 
                            ? 'bg-[#148284] text-white' 
                            : 'bg-green-50/50 hover:bg-gray-50 text-gray-600'
                    }`}
                >
                    <Car className={`w-5 h-5 mb-2 ${activeTab === 'drivers' ? 'text-white' : 'text-gray-500'}`} />
                    <span className="font-medium text-sm">Drivers</span>
                </button>
                <button
                    onClick={() => setActiveTab('hubs')}
                    className={`flex flex-col items-center justify-center p-4 border-r border-gray-100 transition-colors ${
                        activeTab === 'hubs' 
                            ? 'bg-[#148284] text-white' 
                            : 'bg-green-50/50 hover:bg-gray-50 text-gray-600'
                    }`}
                >
                    <Home className={`w-5 h-5 mb-2 ${activeTab === 'hubs' ? 'text-white' : 'text-gray-500'}`} />
                    <span className="font-medium text-sm">Hubs</span>
                </button>
                <button
                    onClick={() => setActiveTab('zones')}
                    className={`flex flex-col items-center justify-center p-4 border-r border-gray-100 transition-colors ${
                        activeTab === 'zones' 
                            ? 'bg-[#148284] text-white' 
                            : 'bg-green-50/50 hover:bg-gray-50 text-gray-600'
                    }`}
                >
                    <MapPin className={`w-5 h-5 mb-2 ${activeTab === 'zones' ? 'text-white' : 'text-gray-500'}`} />
                    <span className="font-medium text-sm">Zones</span>
                </button>
                 <button
                    onClick={() => setActiveTab('bulk')}
                    className={`flex flex-col items-center justify-center p-4 transition-colors ${
                        activeTab === 'bulk' 
                            ? 'bg-[#148284] text-white' 
                            : 'bg-green-50/50 hover:bg-gray-50 text-gray-600'
                    }`}
                >
                    <Upload className={`w-5 h-5 mb-2 ${activeTab === 'bulk' ? 'text-white' : 'text-gray-500'}`} />
                    <span className="font-medium text-sm">Bulk Upload</span>
                </button>
            </div>

            {/* Content Area */}
            {activeTab === 'routes' && (
                <DataTable title="Routes" columns={routeColumns} data={mockRoutes} onAddClick={() => alert('Add Route')} />
            )}
            
            {activeTab === 'drivers' && (
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-4 py-2 border border-black rounded hover:bg-gray-50 bg-white">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-8" alt="Play Store" />
                        </button>
                         <button className="flex items-center gap-2 px-4 py-2 border border-black rounded hover:bg-gray-50 bg-white">
                             <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" className="h-8" alt="App Store" />
                        </button>
                         <div className="flex gap-2 ml-auto">
                            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 bg-white shadow-sm">
                                <span className="font-bold text-gray-700">Link Store</span>
                            </button>
                             <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 bg-white shadow-sm">
                                <span className="font-bold text-gray-700">Link App</span>
                            </button>
                         </div>
                    </div>
                    <DataTable title="Drivers" columns={driverColumns} data={mockDrivers} onAddClick={() => alert('Add Driver')} />
                </div>
            )}
            
            {activeTab === 'hubs' && (
                <DataTable title="Hubs" columns={hubColumns} data={mockHubs} onAddClick={() => alert('Add Hub')} />
            )}

            {activeTab === 'zones' && (
                <div className="space-y-6">
                    <DataTable 
                        title="Zones" 
                        columns={[
                            { key: 'sr_no', label: 'Sr.No.', sortable: true },
                            { key: 'name', label: 'Zone Name', sortable: true },
                            { key: 'hub', label: 'Hub', sortable: true },
                            { key: 'pincode', label: 'Area (Pincode)' },
                            { 
                                key: 'polygon', 
                                label: 'Area (Polygons)',
                                render: (row) => (
                                    <div className={`px-2 py-1 rounded ${
                                        row.id === 1 ? 'bg-green-100' : 
                                        row.id === 2 ? 'bg-green-200' :
                                        row.id === 3 ? 'bg-purple-200' :
                                        row.id === 4 ? 'bg-pink-200' :
                                        row.id === 5 ? 'bg-yellow-100' :
                                        row.id === 6 ? 'bg-blue-200' : 'bg-red-100'
                                    }`}>
                                        {row.polygon || ''}
                                    </div>
                                )
                            },
                            { key: 'active', label: 'Active', render: (row) => row.active },
                            { 
                                key: 'action', 
                                label: 'Action',
                                render: () => <button className="text-[#148284] hover:underline font-medium text-sm">Edit</button>
                            }
                        ]} 
                        data={[
                            { id: 1, sr_no: 1, name: 'Malipuram Society', hub: 'FRESHTICK Hub (Vypin co-op society)', pincode: '', polygon: '', active: 'NO' },
                            { id: 2, sr_no: 2, name: 'Malipuram', hub: 'FRESHTICK Hub (Vypin co-op society)', pincode: '', polygon: 'Malipuram', active: 'YES' },
                            { id: 3, sr_no: 3, name: 'Nayarambalam', hub: 'FRESHTICK Hub (Vypin co-op society)', pincode: '', polygon: 'Nayarambalam', active: 'YES' },
                            { id: 4, sr_no: 4, name: 'High Court', hub: 'FRESHTICK Hub (Vypin co-op society)', pincode: '', polygon: 'High Court', active: 'YES' },
                            { id: 5, sr_no: 5, name: 'Alathurpadi Malapuram', hub: 'Alathurpadi Malapuram', pincode: '', polygon: 'Alathurpadi Malapuram', active: 'YES' },
                            { id: 6, sr_no: 6, name: 'Kaloor', hub: 'FRESHTICK Hub (Vypin co-op society)', pincode: '', polygon: 'Kaloor', active: 'YES' },
                            { id: 7, sr_no: 7, name: 'Panampilly Nagar', hub: 'FRESHTICK Hub (Vypin co-op society)', pincode: '', polygon: 'Panampilly Nagar', active: 'YES' },
                        ]} 
                        onAddClick={() => alert('Add Zone')} 
                    />

                    {/* Map Preview */}
                    <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
                        <h3 className="text-lg font-medium text-gray-700 mb-4">Map Preview</h3>
                        <div className="relative w-full h-96 bg-blue-50 rounded-lg overflow-hidden border border-gray-200">
                             <div className="absolute top-4 left-4 z-10 bg-white p-2 rounded shadow-sm flex items-center gap-2">
                                <Search className="w-4 h-4 text-gray-400" />
                                <input type="text" placeholder="Search" className="text-sm outline-none w-48" />
                             </div>
                             {/* Mock Map Content */}
                             <div className="w-full h-full flex items-center justify-center bg-[#e5e7eb] relative">
                                <img src="/images/map-placeholder.png" alt="Map" className="w-full h-full object-cover opacity-50" onError={(e) => e.currentTarget.style.display = 'none'} />
                                <span className="absolute text-gray-400 font-medium">Interactive Map Area</span>
                                {/* Drawn Polygons Simulation */}
                                <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-purple-500/20 border-2 border-purple-500 rounded-lg transform rotate-12"></div>
                                <div className="absolute bottom-1/3 right-1/3 w-40 h-24 bg-blue-500/20 border-2 border-blue-500 rounded-lg transform -rotate-6"></div>
                             </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'bulk' && (
                <div className="bg-white rounded-md shadow-sm border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h2 className="text-lg font-medium text-gray-700">Bulk Upload</h2>
                    </div>
                    <div className="p-12">
                        {/* Stepper */}
                        <div className="flex items-center justify-between relative max-w-3xl mx-auto mb-16">
                            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-0"></div>
                            
                            <div className="relative z-10 flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-full border-2 border-[#148284] bg-white flex items-center justify-center text-[#148284] font-bold">1</div>
                                <span className="text-sm font-bold text-gray-800">Select</span>
                            </div>
                            
                            <div className="relative z-10 flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center text-gray-500 font-bold">2</div>
                                <span className="text-sm font-medium text-gray-500">Upload</span>
                            </div>

                            <div className="relative z-10 flex flex-col items-center gap-2">
                                <div className="w-10 h-10 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center text-gray-500 font-bold">3</div>
                                <span className="text-sm font-medium text-gray-500">Preview</span>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="max-w-xl mx-auto space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium text-gray-700">Select</h3>
                                <div className="space-y-1">
                                    <select className="w-full px-4 py-2 border border-gray-300 rounded text-sm focus:ring-[#148284] focus:border-[#148284] text-gray-500">
                                        <option>Select Type</option>
                                        <option>Customers</option>
                                        <option>Products</option>
                                        <option>Orders</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="flex justify-end pt-4">
                                <button className="px-6 py-2 bg-[#95a5a6] text-white rounded text-sm font-medium hover:bg-gray-500 flex items-center gap-1 cursor-not-allowed">
                                    Next <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

UtilitiesIndex.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;
