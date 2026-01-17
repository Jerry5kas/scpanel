export default function PlanCard({ title, units, price, unitPrice, active = false }: any) {
    return (
        <div className={`rounded-xl border p-4 ${active ? 'border-emerald-500 bg-emerald-50' : ''}`}>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">{units}</p>

            <div className="mt-3">
                <p className="text-lg font-semibold">{price}</p>
                <p className="text-sm text-gray-500">{unitPrice}</p>
            </div>
        </div>
    );
}
