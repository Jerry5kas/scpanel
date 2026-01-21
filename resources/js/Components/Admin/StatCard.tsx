import { ArrowRight, LucideIcon } from 'lucide-react';

interface StatCardProps {
    title: string;
    value: string | number;
    subtitle: string;
    icon: LucideIcon;
    color?: 'red' | 'orange' | 'emerald' | 'purple';
}

const colorMap = {
    red: {
        bg: 'bg-red-500',
        text: 'text-red-500',
    },
    orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-500',
    },
    emerald: {
        bg: 'bg-emerald-500',
        text: 'text-emerald-500',
    },
    purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-500',
    },
};

export default function StatCard({ title, value, subtitle, icon: Icon, color = 'emerald' }: StatCardProps) {
    const config = colorMap[color] || colorMap.emerald;

    return (
        <div className="relative group flex flex-col justify-between rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 overflow-hidden border border-gray-100/50">
            {/* Colored Pattern Accent Bar */}
            <div className={`absolute top-0 left-0 bottom-0 w-1 ${config.bg}`} />

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className={`${config.text}`}>
                        <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[12px] font-bold text-gray-700 tracking-tight">{title}</span>
                </div>
                <ArrowRight className={`h-3 w-3 ${config.text} opacity-70`} />
            </div>

            <div className="mt-3">
                <div className="text-2xl font-black text-gray-900 leading-none tracking-tight">{value}</div>
                <p className="mt-1.5 text-[10px] font-bold uppercase tracking-widest truncate" style={{ color: 'var(--primary-color)' }}>{subtitle}</p>
            </div>
        </div>
    );
}
