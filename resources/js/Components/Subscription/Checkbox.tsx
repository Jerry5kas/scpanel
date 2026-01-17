export default function Checkbox({ label }: any) {
    return (
        <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            {label}
        </label>
    );
}
