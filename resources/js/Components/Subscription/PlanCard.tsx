export default function PlanCard({ title, units, price, unitPrice, active = false }: any) {
    return (
        <div
            className={`rounded-xl border p-4 transition-all ${active ? '' : 'border-gray-200'}`}
            style={active ? {
                borderColor: 'var(--primary-color)',
                backgroundColor: 'var(--secondary-color)'
            } : {}}
        >
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">{units}</p>

            <div className="mt-3">
                <p className="text-lg font-semibold">{price}</p>
                <p className="text-sm text-gray-500">{unitPrice}</p>
            </div>
        </div>
    );
}
