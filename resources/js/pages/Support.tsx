import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/Components/Layout/AppLayout';
import { Headphones, MessageSquare, Phone, Mail } from 'lucide-react';

export default function Support() {
    return (
        <AppLayout>
            <Head title="Support" />
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <div className="bg-emerald-100 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <Headphones className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h1 className="text-3xl font-black text-gray-900 mb-4">How can we help?</h1>
                    <p className="text-gray-500 font-medium">Our team is here to support you 24/7</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <MessageSquare className="w-8 h-8 text-emerald-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Chat with us</h3>
                        <p className="text-gray-500 mb-6 text-sm">Speak to our support team instantly via WhatsApp or live chat.</p>
                        <button className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-black text-sm w-full">Start Chat</button>
                    </div>

                    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <Phone className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Call us</h3>
                        <p className="text-gray-500 mb-6 text-sm">Call our dedicated helpline for immediate assistance with your orders.</p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-black text-sm w-full">Call Now</button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
