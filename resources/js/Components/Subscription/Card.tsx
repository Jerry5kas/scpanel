function Chip({ label, active = false }: any) {
    return (
        <button
            className={`px-4 py-1 rounded-full border text-sm ${
                active ? 'bg-yellow-500 text-white border-yellow-500' : ''
            }`}
        >
            {label}
        </button>
    );
}
