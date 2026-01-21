import { Head, Link } from '@inertiajs/react';
import { Calendar as CalendarIcon, Clock, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface DeliveryItem {
    id: number;
    name: string;
    quantity: number;
    price: string;
    image: string;
}

interface Delivery {
    id: string;
    status: 'delivered' | 'processing' | 'out_for_delivery' | 'cancelled';
    timeSlot: string;
    items: DeliveryItem[];
    address: string;
    orderId: string;
}

export default function Deliveries() {
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(todayStr);

    // Mock dates for the scroller: 7 days ago to 23 days ahead
    const dates = Array.from({ length: 30 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - 7 + i);
        return {
            full: date.toISOString().split('T')[0],
            day: date.toLocaleDateString('en-US', { weekday: 'short' }),
            num: date.getDate(),
        };
    });

    const deliveries: Record<string, Delivery[]> = {
        [todayStr]: [
            {
                id: 'DEL-101',
                orderId: '#FT-8821',
                status: 'processing',
                timeSlot: 'Morning (6:00 AM - 9:00 AM)',
                address: 'Flat 402, Green Valley Apartments, Ashok Nagar, Bengaluru',
                items: [
                    { id: 1, name: 'Cow Milk - 500ml', quantity: 2, price: '₹42 / Unit', image: '/images/products/milk.png' },
                    { id: 2, name: 'Cow Ghee - 200g', quantity: 1, price: '₹375 / Unit', image: '/images/products/ghee.png' },
                ]
            }
        ],
        [new Date(Date.now() - 86400000).toISOString().split('T')[0]]: [
            {
                id: 'DEL-100',
                orderId: '#FT-8815',
                status: 'delivered',
                timeSlot: 'Morning (6:00 AM - 9:00 AM)',
                address: 'Flat 402, Green Valley Apartments, Ashok Nagar, Bengaluru',
                items: [
                    { id: 1, name: 'Cow Milk - 500ml', quantity: 2, price: '₹42 / Unit', image: '/images/products/milk.png' },
                ]
            }
        ]
    };

    const activeDeliveries = deliveries[selectedDate] || [];

    return (
        <div className="bg-[#FAF9F6] min-h-screen pb-20 pt-10">
            <Head title="My Deliveries" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Centered Page Title */}
                <div className="text-center mb-8">
                    <h1 className="text-[28px] font-black text-gray-900 tracking-tight">
                        Delivery for {new Date(selectedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                    </h1>
                </div>

                {/* Centered Calendar Pill Scroller */}
                <div className="flex items-center justify-center mb-10">
                    <div className="flex overflow-x-auto no-scrollbar gap-2 py-2 px-4 bg-white/50 rounded-3xl backdrop-blur-sm">
                        {dates.map((date) => {
                            const isSelected = selectedDate === date.full;
                            return (
                                <button
                                    key={date.full}
                                    onClick={() => setSelectedDate(date.full)}
                                    className={`flex-shrink-0 flex flex-col items-center justify-center w-12 py-3 rounded-2xl transition-all duration-300 ${isSelected
                                            ? 'bg-[var(--primary-color)] text-white shadow-lg shadow-[var(--primary-color)]/30 scale-110'
                                            : 'text-gray-400 hover:text-gray-600 hover:bg-white'
                                        }`}
                                >
                                    <span className="text-[8px] font-black uppercase tracking-tighter mb-0.5">{date.day}</span>
                                    <span className="text-[14px] font-black">{date.num}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {activeDeliveries.length > 0 ? (
                    <div className="space-y-8 flex flex-col items-center">
                        {activeDeliveries.map((delivery) => (
                            <div key={delivery.id} className="w-full bg-white rounded-[40px] shadow-sm border border-gray-100/50 p-8 sm:p-14 relative overflow-hidden">
                                <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-14 relative z-10">
                                    <div className="space-y-7">
                                        <div className="flex items-start gap-4">
                                            <div className="h-10 w-10 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                                                <Clock className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1.5">Slot</p>
                                                <p className="text-[14px] font-black text-gray-800">{delivery.timeSlot}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="h-10 w-10 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1.5">Address</p>
                                                <p className="text-[14px] font-black text-gray-800 max-w-sm leading-snug">
                                                    {delivery.address}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="flex items-center gap-2 px-8 py-4 rounded-3xl bg-gray-900 text-white text-[13px] font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gray-200">
                                        <Phone className="h-4 w-4" />
                                        Support
                                    </button>
                                </div>

                                {/* Items Included Section */}
                                <div className="mb-14 relative z-10">
                                    <h3 className="text-[12px] font-black text-gray-400 uppercase tracking-widest mb-8">Items Included</h3>
                                    <div className="space-y-6">
                                        {delivery.items.map((item) => (
                                            <div key={item.id} className="flex items-center gap-6 group">
                                                <div className="h-18 w-18 rounded-2xl bg-gray-50 flex items-center justify-center p-3 shadow-inner group-hover:scale-105 transition-transform duration-300">
                                                    <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
                                                </div>
                                                <div>
                                                    <h4 className="text-[15px] font-black text-gray-800">{item.name}</h4>
                                                    <p className="text-[12px] font-bold text-gray-500">{item.quantity} Unit(s) - {item.price}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tracking Stepper */}
                                <div className="space-y-10 pl-1 relative z-10">
                                    <TrackingStep
                                        title="Order Confirmed"
                                        time="6:30 PM, Jan 20"
                                        isDone
                                    />
                                    <TrackingStep
                                        title="Quality Check"
                                        time="4:00 AM, Jan 21"
                                        isDone
                                        isActive={delivery.status === 'processing'}
                                    />
                                    <TrackingStep
                                        title="Out for Delivery"
                                        time="Pending"
                                        isDone={['out_for_delivery', 'delivered'].includes(delivery.status)}
                                        isActive={delivery.status === 'out_for_delivery'}
                                    />
                                    <TrackingStep
                                        title="Delivered"
                                        time="Estimated 8:30 AM"
                                        isLast
                                        isDone={delivery.status === 'delivered'}
                                        isActive={delivery.status === 'delivered'}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 px-6 rounded-[40px] bg-white border border-gray-100/50 border-dashed">
                        <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                            <CalendarIcon className="h-8 w-8 text-blue-400" />
                        </div>
                        <h2 className="text-[18px] font-black text-gray-800 mb-2">No Deliveries Scheduled</h2>
                        <p className="text-[13px] font-bold text-gray-500 text-center max-w-xs leading-relaxed">
                            It looks like you don't have any deliveries scheduled for this date.
                        </p>
                        <Link
                            href="/products"
                            className="mt-8 px-8 py-3.5 rounded-2xl bg-[var(--primary-color)] text-white text-[13px] font-black shadow-lg shadow-[var(--primary-color)]/20 hover:brightness-110 transition-all"
                        >
                            Shop Now
                        </Link>
                    </div>
                )}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}} />
        </div>
    );
}

function TrackingStep({ title, time, isDone, isActive, isLast }: { title: string; time: string; isDone?: boolean; isActive?: boolean; isLast?: boolean }) {
    return (
        <div className="relative flex items-center gap-10 group">
            {!isLast && (
                <div className={`absolute left-[7px] top-4 w-[2px] h-10 transition-colors duration-500 ${isDone ? 'bg-[var(--primary-color)]' : 'bg-gray-100'}`} />
            )}
            <div className={`relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all duration-500 ${isDone
                    ? 'border-[var(--primary-color)] bg-[var(--primary-color)] shadow-[0_0_8px_var(--primary-color)]'
                    : isActive
                        ? 'border-[var(--primary-color)] bg-white animate-pulse'
                        : 'border-gray-200 bg-white'
                }`}>
                {isDone && <CheckCircle2 className="h-2 w-2 text-white" strokeWidth={5} />}
            </div>
            <div>
                <h4 className={`text-[15px] font-black leading-tight ${isDone || isActive ? 'text-gray-800' : 'text-gray-400'}`}>{title}</h4>
                <p className="text-[12px] font-bold text-gray-400 mt-1.5">{time}</p>
            </div>
        </div>
    );
}
