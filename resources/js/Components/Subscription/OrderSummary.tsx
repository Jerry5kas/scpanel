export default function OrderSummary() {
    return (
        <aside className="sticky top-24 rounded-xl bg-emerald-50 p-6 space-y-6">
            <h2 className="font-medium">Subscription</h2>

            <div className="flex gap-3">
                <img
                    src="/images/sub15.png"
                    className="h-14 w-14 rounded"
                    alt=""
                />
                <div className="flex-1">
                    <p className="font-medium">15-Pack Plan</p>
                    <p className="text-sm text-gray-500">₹42 / unit</p>
                    <button className="text-sm text-emerald-600 mt-1">
                        + Add Instruction
                    </button>
                </div>
            </div>

            <div>
                <h3 className="font-medium mb-2">Offers & Benefits</h3>
                <div className="flex gap-2">
                    <input
                        placeholder="ENTER CODE HERE"
                        className="flex-1 rounded border px-3 py-2"
                    />
                    <button className="px-4 rounded border">
                        APPLY
                    </button>
                </div>
            </div>

            <div>
                <h3 className="font-medium mb-3">Bill Details</h3>
                <div className="space-y-2 text-sm">
                    <Row label="MRP" value="₹630" />
                    <Row label="Delivery Fee" value="FREE" green />
                    <Row label="To Pay" value="₹630" bold />
                </div>
            </div>

            <button className="w-full bg-emerald-600 text-white py-3 rounded-lg">
                Proceed To Pay
            </button>
        </aside>
    );
}

function Row({ label, value, bold, green }: any) {
    return (
        <div className={`flex justify-between ${bold ? 'font-semibold' : ''}`}>
            <span>{label}</span>
            <span className={green ? 'text-emerald-600' : ''}>{value}</span>
        </div>
    );
}

