export default function Chip({ label, active = false }: { label: string; active?: boolean }) {
    return (
        <button
            className={`px-4 py-2 rounded-full border transition-colors ${
                active
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                    : 'border-gray-300 hover:border-gray-400'
            }`}
        >
            {label}
        </button>
    );
}
