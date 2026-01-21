export default function Chip({ label, active = false }: { label: string; active?: boolean }) {
    return (
        <button
            className={`px-4 py-2 rounded-full border transition-colors ${active ? '' : 'border-gray-300 hover:border-gray-400'
                }`}
            style={active ? {
                borderColor: 'var(--primary-color)',
                backgroundColor: 'var(--secondary-color)',
                color: 'var(--primary-color)'
            } : {}}
        >
            {label}
        </button>
    );
}
