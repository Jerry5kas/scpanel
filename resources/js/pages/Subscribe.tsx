import { useState } from 'react';

import Checkbox from '../Components/Subscription/Checkbox';
import Chip from '../Components/Subscription/Chip';
import OrderSummary from '../Components/Subscription/OrderSummary';
import PlanCard from '../Components/Subscription/PlanCard';

export default function Subscribe() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            <h1 className="text-lg font-semibold mb-6">Subscribe</h1>

            <div className="grid gap-8 lg:grid-cols-3">

                {/* LEFT SIDE */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Available Plans */}
                    <section>
                        <h2 className="font-medium mb-4">Available Plans</h2>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <PlanCard
                                title="15-Pack Plan 480ml"
                                units="15 Unit(s)"
                                price="₹630"
                                unitPrice="₹42 / Unit"
                                active
                            />
                            <PlanCard
                                title="15-Pack Plan II"
                                units="15 Unit(s)"
                                price="₹1,260"
                                unitPrice="₹84 / Unit"
                            />
                        </div>
                    </section>

                    {/* Delivery Time */}
                    <section>
                        <h2 className="font-medium mb-2">Delivery Time</h2>
                        <input
                            disabled
                            value="Morning"
                            className="w-full rounded-lg border px-4 py-2 bg-gray-50"
                        />
                    </section>

                    {/* Pattern */}
                    <section>
                        <h2 className="font-medium mb-3">Pattern</h2>
                        <div className="flex flex-wrap gap-3">
                            <Chip active label="Daily" />
                            <Chip label="Alternate Day" />
                            <Chip label="Weekly" />
                            <Chip label="Nth Day" />
                        </div>
                    </section>

                    {/* Quantity */}
                    <section>
                        <h2 className="font-medium mb-3">Quantity Per Delivery</h2>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                className="h-9 w-9 rounded border"
                            >−</button>

                            <span>{quantity}</span>

                            <button
                                onClick={() => setQuantity(q => q + 1)}
                                className="h-9 w-9 rounded border"
                            >+</button>
                        </div>

                        <p className="mt-3 text-sm text-yellow-700 bg-yellow-50 px-4 py-2 rounded">
                            Your subscription is expected to end on 31 Jan 2026
                        </p>
                    </section>

                    {/* Start Date */}
                    <section>
                        <h2 className="font-medium mb-2">Select Start Date</h2>
                        <input
                            type="date"
                            className="w-full rounded-lg border px-4 py-2"
                        />
                    </section>

                    {/* Address */}
                    <section>
                        <h2 className="font-medium mb-2">Select Address</h2>
                        <button className="w-full rounded-lg border border-emerald-500 text-emerald-600 py-3">
                            + Add New Address
                        </button>
                    </section>

                    {/* Instructions */}
                    <section>
                        <h2 className="font-medium mb-3">Delivery Instructions</h2>
                        <div className="space-y-2">
                            <Checkbox label="Do not ring the bell and leave at the door" />
                            <Checkbox label="Ring the bell and leave at the door" />
                            <Checkbox label="Hand Deliver" />
                            <Checkbox label="Give to the Security" />
                            <Checkbox label="Other" />
                        </div>
                    </section>
                </div>

                {/* RIGHT SIDE */}
                <div className="lg:col-span-1">
                    <OrderSummary />
                </div>
            </div>
        </div>
    );
}
