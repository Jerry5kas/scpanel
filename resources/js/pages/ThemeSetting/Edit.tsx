import { Head, useForm, usePage } from '@inertiajs/react';
import { ReactNode, useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Settings, AppWindow, Cpu, ListOrdered, Package, Puzzle, Users, ShieldCheck, Palette, Save } from 'lucide-react';

interface Theme {
    id: number;
    app_name: string;
    primary_color: string;
    secondary_color: string;
    tertiary_color: string;
}

interface Props {
    theme: Theme;
}

export default function Edit({ theme }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        app_name: theme.app_name,
        primary_color: theme.primary_color,
        secondary_color: theme.secondary_color,
        tertiary_color: theme.tertiary_color,
    });

    const [activeTab, setActiveTab] = useState('settings');
    const [activeSubTab, setActiveSubTab] = useState('theme');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put('/admin/theme');
    };

    const tabs = [
        { id: 'settings', label: 'Settings', icon: Settings },
        { id: 'apps', label: 'Apps', icon: AppWindow },
        { id: 'nodes', label: 'Nodes', icon: Cpu },
        { id: 'slots', label: 'Slots', icon: ListOrdered },
        { id: 'plans', label: 'Plans', icon: Package },
        { id: 'catalog', label: 'Catalog', icon: Puzzle },
    ];

    const subTabs = [
        { id: 'users', label: 'Manage Users', icon: Users },
        { id: 'policies', label: 'Manage Policies', icon: ShieldCheck },
        { id: 'theme', label: 'Theme Styling', icon: Palette },
    ];

    return (
        <div className="space-y-6">
            <Head title="Settings" />

            {/* Header Tabs */}
            <div className="rounded-xl bg-[#00897B]/5 p-1">
                <div className="flex flex-wrap items-center gap-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-bold transition-all ${activeTab === tab.id
                                ? 'bg-[#00897B] text-white shadow-md'
                                : 'text-gray-600 hover:bg-[#00897B]/10 hover:text-[#00897B]'
                                }`}
                        >
                            <tab.icon className="h-4 w-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sub-menu Tabs */}
            <div className="flex flex-wrap items-center gap-4 border-b border-gray-100 pb-2">
                {subTabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveSubTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-bold transition-all border-b-2 ${activeSubTab === tab.id
                            ? 'border-[#00897B] text-[#00897B]'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        <tab.icon className="h-4 w-4" />
                        {tab.label}
                    </button>
                ))}
            </div>

            {activeSubTab === 'theme' && (
                <div className="max-w-4xl rounded-2xl bg-white shadow-xl shadow-gray-200/50 overflow-hidden">
                    <div className="border-b border-gray-50 bg-gray-50/30 px-8 py-5">
                        <h3 className="text-lg font-bold text-gray-800">Global Theme Styling</h3>
                        <p className="text-sm text-gray-500 mt-1">Customize the primary branding and global accent colors.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-8">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            {/* App Name */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Application Name</label>
                                <input
                                    type="text"
                                    value={data.app_name}
                                    onChange={(e) => setData('app_name', e.target.value)}
                                    className="w-full rounded-xl border-gray-200 bg-gray-50 p-3 text-sm focus:border-[#00897B] focus:ring-1 focus:ring-[#00897B] transition-all"
                                    placeholder="Enter App Name"
                                />
                                {errors.app_name && <div className="text-xs font-medium text-red-500">{errors.app_name}</div>}
                            </div>

                            {/* Colors Grid */}
                            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Primary Color */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Primary Color</label>
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="h-12 w-12 rounded-xl shadow-inner border border-gray-100"
                                            style={{ backgroundColor: data.primary_color }}
                                        />
                                        <input
                                            type="color"
                                            value={data.primary_color}
                                            onChange={(e) => setData('primary_color', e.target.value)}
                                            className="h-10 w-24 rounded-lg border-2 border-gray-100 p-1 cursor-pointer"
                                        />
                                        <input
                                            type="text"
                                            value={data.primary_color}
                                            onChange={(e) => setData('primary_color', e.target.value)}
                                            className="flex-1 rounded-lg border-gray-200 bg-gray-50 p-2 text-xs font-mono uppercase"
                                        />
                                    </div>
                                    {errors.primary_color && <div className="text-xs font-medium text-red-500">{errors.primary_color}</div>}
                                </div>

                                {/* Secondary Color */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Secondary Color</label>
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="h-12 w-12 rounded-xl shadow-inner border border-gray-100"
                                            style={{ backgroundColor: data.secondary_color }}
                                        />
                                        <input
                                            type="color"
                                            value={data.secondary_color}
                                            onChange={(e) => setData('secondary_color', e.target.value)}
                                            className="h-10 w-24 rounded-lg border-2 border-gray-100 p-1 cursor-pointer"
                                        />
                                        <input
                                            type="text"
                                            value={data.secondary_color}
                                            onChange={(e) => setData('secondary_color', e.target.value)}
                                            className="flex-1 rounded-lg border-gray-200 bg-gray-50 p-2 text-xs font-mono uppercase"
                                        />
                                    </div>
                                    {errors.secondary_color && <div className="text-xs font-medium text-red-500">{errors.secondary_color}</div>}
                                </div>

                                {/* Tertiary Color */}
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Accent Color</label>
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="h-12 w-12 rounded-xl shadow-inner border border-gray-100"
                                            style={{ backgroundColor: data.tertiary_color }}
                                        />
                                        <input
                                            type="color"
                                            value={data.tertiary_color}
                                            onChange={(e) => setData('tertiary_color', e.target.value)}
                                            className="h-10 w-24 rounded-lg border-2 border-gray-100 p-1 cursor-pointer"
                                        />
                                        <input
                                            type="text"
                                            value={data.tertiary_color}
                                            onChange={(e) => setData('tertiary_color', e.target.value)}
                                            className="flex-1 rounded-lg border-gray-200 bg-gray-50 p-2 text-xs font-mono uppercase"
                                        />
                                    </div>
                                    {errors.tertiary_color && <div className="text-xs font-medium text-red-500">{errors.tertiary_color}</div>}
                                </div>
                            </div>
                        </div>

                        {/* Live Preview Section */}
                        <div className="rounded-2xl bg-gray-50 p-6 border border-gray-100">
                            <h4 className="text-[12px] font-black text-gray-400 uppercase tracking-widest mb-6 border-b pb-2">Live Theme Preview</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: data.primary_color }}>
                                            <Palette className="h-5 w-5" />
                                        </div>
                                        <span className="text-lg font-black tracking-tight" style={{ color: data.primary_color }}>{data.app_name}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="h-8 w-20 rounded-lg text-xs font-bold flex items-center justify-center text-white" style={{ backgroundColor: data.primary_color }}>Button</div>
                                        <div className="h-8 w-10 h-8 w-20 rounded-lg text-xs font-bold flex items-center justify-center text-gray-700" style={{ backgroundColor: data.secondary_color }}>Surface</div>
                                        <div className="h-8 w-20 rounded-lg text-xs font-bold flex items-center justify-center text-white" style={{ backgroundColor: data.tertiary_color }}>Accent</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center bg-white rounded-xl h-32 border border-gray-100 shadow-sm overflow-hidden relative">
                                    <div className="absolute top-0 left-0 bottom-0 w-1" style={{ backgroundColor: data.primary_color }} />
                                    <div className="p-4 w-full">
                                        <div className="h-2 w-24 bg-gray-100 rounded mb-2" />
                                        <div className="h-6 w-16 rounded font-black text-xl mb-2" style={{ color: data.primary_color }}>1,234</div>
                                        <div className="h-2 w-32 rounded font-bold" style={{ backgroundColor: data.secondary_color, color: data.primary_color, width: 'fit-content', padding: '12px 12px' }}>PROCESSED</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="flex items-center gap-2 rounded-xl px-8 py-3 text-sm font-bold text-white shadow-lg focus:ring-2 focus:ring-offset-2 transition-all disabled:opacity-50"
                                style={{ backgroundColor: data.primary_color || '#00897B' }}
                            >
                                <Save className="h-4 w-4" />
                                {processing ? 'Updating Global Theme...' : 'Apply Changes Globally'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {activeSubTab === 'users' && (
                <div className="rounded-2xl bg-white shadow-xl shadow-gray-200/50 overflow-hidden">
                    <div className="border-b border-gray-50 bg-gray-50/30 px-8 py-6">
                        <h3 className="text-lg font-bold text-gray-800">My Profile</h3>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Full Name</p>
                                <p className="text-sm font-bold text-gray-800">Ashar N</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Phone Number</p>
                                <p className="text-sm font-bold text-gray-800">7736121233</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Change Password</label>
                            <input type="password" placeholder="••••••••" className="w-full max-w-sm rounded-xl border-gray-200 bg-gray-50 p-3 text-sm" />
                        </div>
                        <div className="border-t pt-6">
                            <div className="flex items-center gap-2 mb-4">
                                <h4 className="text-sm font-bold text-gray-800">Account Settings</h4>
                                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">VERIFIED</span>
                            </div>
                            <p className="text-xs text-gray-500">Account code: 1397</p>
                        </div>
                    </div>
                </div>
            )}

            {activeSubTab === 'policies' && (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-gray-200 shadow-sm">
                    <div className="h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                        <ShieldCheck className="h-8 w-8 text-gray-300" />
                    </div>
                    <p className="font-bold text-gray-400">Section placeholder for System Policies</p>
                </div>
            )}
        </div>
    );
}

Edit.layout = (page: ReactNode) => <AdminLayout>{page}</AdminLayout>;
