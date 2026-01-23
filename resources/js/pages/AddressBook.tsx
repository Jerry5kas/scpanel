import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Components/Layout/AppLayout';
import { MapPin, Plus, Home, Briefcase } from 'lucide-react';

export default function AddressBook() {
    return (
        <AppLayout>
            <Head title="Address Book" />
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h1 className="text-2xl font-black text-gray-900 mb-1">Address Book</h1>
                        <p className="text-gray-500 font-medium text-sm">Manage your delivery locations</p>
                    </div>
                    <button className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-2xl font-black text-sm shadow-lg shadow-emerald-200">
                        <Plus className="w-4 h-4" />
                        Add New
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm flex items-start gap-4">
                        <div className="bg-emerald-50 p-3 rounded-2xl">
                            <Home className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800 mb-1">Home</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Techbuds Online, Building 42, Marine Drive, Kochi, Kerala - 682031</p>
                        </div>
                        <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">Default</span>
                    </div>

                    <div className="bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm flex items-start gap-4 opacity-70">
                        <div className="bg-blue-50 p-3 rounded-2xl">
                            <Briefcase className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800 mb-1">Office</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Tech Park, Phase 1, Infopark, Kakkanad, Kochi, Kerala - 682030</p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
