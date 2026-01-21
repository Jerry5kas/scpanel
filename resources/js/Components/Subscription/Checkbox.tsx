export default function Checkbox({ label }: any) {
    return (
        <label className="flex items-center gap-2 text-[13px] font-medium text-gray-700 cursor-pointer">
            <input
                type="checkbox"
                className="rounded border-gray-300 transition-all focus:ring-0"
                style={{ accentColor: 'var(--primary-color)' }}
            />
            {label}
        </label>
    );
}
