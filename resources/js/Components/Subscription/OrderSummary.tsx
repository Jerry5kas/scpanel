import { Plus, Minus, MessageSquarePlus } from 'lucide-react';
import { useState } from 'react';

export default function OrderSummary() {
    const [quantity, setQuantity] = useState(1);

    return (
        <aside className="space-y-6">
            {/* Items Summary Card */}
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100/50 space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-[14px] font-black text-gray-800">One Time Order(1)</h3>
                </div>

                {/* Product Item */}
                <div className="flex items-center gap-4 py-2">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-1.5 shadow-inner">
                        <img
                            src="/images/products/ghee.png"
                            alt="Cow Ghee"
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                            <h4 className="text-[13px] font-black text-gray-800 truncate">Cow Ghee - (200g)</h4>
                            <div className="flex items-center rounded-lg border-[1.5px] border-[var(--primary-color)] px-2 py-1 gap-3">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-[var(--primary-color)]">
                                    <Minus className="h-3 w-3" strokeWidth={3} />
                                </button>
                                <span className="text-[12px] font-black text-gray-800 w-3 text-center">{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)} className="text-[var(--primary-color)]">
                                    <Plus className="h-3 w-3" strokeWidth={3} />
                                </button>
                            </div>
                        </div>
                        <p className="text-[11px] font-bold text-gray-500 mt-1">₹375/unit</p>
                    </div>
                </div>

                <div className="border-t border-dashed border-gray-200" />

                {/* Upsell section */}
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[12px] font-black text-gray-800">Need anything else?</p>
                        <p className="text-[10px] font-bold text-gray-500">Add other items.</p>
                    </div>
                    <button
                        className="rounded-lg border-[1.5px] px-4 py-1.5 text-[11px] font-black transition-all"
                        style={{ borderColor: 'var(--primary-color)', color: 'var(--primary-color)' }}
                    >
                        Add
                    </button>
                </div>

                <div className="border-t border-dashed border-gray-200" />

                {/* Add Instruction */}
                <button className="flex items-center gap-2 text-[12px] font-black py-1" style={{ color: 'var(--primary-color)' }}>
                    <Plus className="h-4 w-4" />
                    Add Instruction
                </button>
            </div>

            {/* Offers Section */}
            <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100/50">
                <h3 className="text-[13px] font-black text-gray-800 mb-4">Offers & Benefits</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="ENTER CODE HERE"
                        className="w-full rounded-xl border-gray-100 bg-gray-50/50 px-5 py-3.5 text-[12px] font-black placeholder:text-gray-400 focus:ring-0"
                    />
                </div>
            </div>

            {/* Bill Details */}
            <div className="rounded-3xl bg-[var(--secondary-color)]/30 p-6 shadow-sm border border-[var(--secondary-color)]/50 space-y-4">
                <h3 className="text-[13px] font-black text-gray-800 flex items-center gap-1">
                    Bill Details <span className="text-[10px] font-bold text-gray-400 font-normal">(Includes Taxes)</span>
                </h3>

                <div className="space-y-2.5">
                    <BillRow label="Item Total" value="₹375" />
                    <BillRow label="Delivery Fee" value="FREE" isTheme />
                    <div className="pt-2 border-t border-[var(--secondary-color)]" />
                    <div className="flex justify-between items-center text-[15px] font-black text-gray-900">
                        <span>To Pay</span>
                        <span>₹375</span>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <button
                className="w-full rounded-2xl py-5 text-[14px] font-black text-white shadow-lg transition-all hover:brightness-105 active:scale-[0.98]"
                style={{ backgroundColor: 'var(--primary-color)' }}
            >
                Proceed To Pay ₹375
            </button>
        </aside>
    );
}

function BillRow({ label, value, isTheme }: { label: string; value: string; isTheme?: boolean }) {
    return (
        <div className="flex justify-between items-center text-[12px] font-bold">
            <span className="text-gray-500">{label}</span>
            <span className={isTheme ? 'font-black' : 'text-gray-800'} style={isTheme ? { color: 'var(--primary-color)' } : {}}>{value}</span>
        </div>
    );
}


