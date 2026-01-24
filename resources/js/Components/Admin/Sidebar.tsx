import { Link, usePage } from '@inertiajs/react';
import {
    BarChart3,
    ChevronLeft,
    ChevronRight,
    CreditCard,
    FileCheck2,
    LayoutDashboard,
    Megaphone,
    PlusCircle,
    Receipt,
    Settings,
    ShoppingCart,
    Truck,
    Users,
    Wrench,
} from 'lucide-react';

const menu = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard' },
    { label: 'New Subscription', icon: PlusCircle, href: '/admin/subscriptions/create' },
    { label: 'Customers', icon: Users, href: '/admin/customers' },
    { label: 'Payments', icon: CreditCard, href: '/admin/payments' },
    { label: 'Subscriptions', icon: FileCheck2, href: '/admin/subscriptions' },
    { label: 'Orders', icon: ShoppingCart, href: '/admin/orders' },
    { label: 'Delivery Overview', icon: Truck, href: '/admin/delivery' },
    { label: 'Marketing', icon: Megaphone, href: '/admin/marketing' },
    { label: 'Utilities', icon: Wrench, href: '/admin/utilities' },
    { label: 'Bills', icon: Receipt, href: '/admin/bills' },
    { label: 'Reports', icon: BarChart3, href: '/admin/reports' },
    { label: 'Settings', icon: Settings, href: '/admin/settings' },
];

interface SidebarProps {
    isCollapsed?: boolean;
    onToggleCollapse?: () => void;
    onClose?: () => void;
}

export default function Sidebar({ isCollapsed = false, onToggleCollapse, onClose }: SidebarProps) {
    const { url } = usePage();

    return (
        <aside className="relative flex h-full flex-col bg-white shadow-[20px_0_50px_-20px_rgba(0,0,0,0.05)] transition-all duration-300">
            <div className={`flex h-16 min-h-[64px] items-center ${isCollapsed ? 'lg:justify-center justify-between px-6 lg:px-0' : 'justify-between px-6'}`} style={{ backgroundColor: '#148284' }}>
                <div className={`flex items-center gap-2 ${isCollapsed ? 'lg:hidden' : ''}`}>
                    <img src="/images/logo_light.png" alt="freshtick" className="h-6 w-auto" />
                </div>

                <button
                    onClick={onToggleCollapse}
                    className="hidden lg:flex h-8 w-8 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                >
                    {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                </button>
            </div>

            <div className="flex flex-1 flex-col justify-between overflow-y-auto overflow-x-hidden">
                <nav className="space-y-[1px]">
                    {menu.map(({ label, icon: Icon, href }) => {
                        const isActive = url.startsWith(href);
                        return (
                            <Link
                                key={label}
                                href={href}
                                title={isCollapsed ? label : undefined}
                                onClick={() => onClose?.()}
                                className={`flex items-center gap-3 py-2.5 text-[13px] font-medium transition-colors ${isCollapsed ? 'lg:justify-center px-6 lg:px-0' : 'px-6'
                                    } ${isActive
                                        ? 'text-white border-l-4'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent'
                                    }`}
                                style={isActive ? { backgroundColor: '#148284', borderColor: '#148284', filter: 'brightness(1.1)' } : {}}
                            >
                                <Icon className={`h-[18px] w-[18px] min-w-[18px] ${isActive ? 'text-white' : 'text-gray-500'}`} />
                                <span className={`truncate ${isCollapsed ? 'lg:hidden' : ''}`}>{label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className={`mt-4 px-6 pb-6 text-[10px] text-gray-500 leading-relaxed ${isCollapsed ? 'lg:hidden' : ''}`}>
                    <p>User: Admin User</p>
                    <p>Version: 1.0.0</p>
                    <p>Time: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    <p className="mt-2 uppercase tracking-wider">
                        Product By <span className="font-bold" style={{ color: '#148284' }}>{(usePage().props.theme as any)?.app_name || 'FRESHTICK'}</span>
                    </p>
                </div>
            </div>
        </aside>
    );
}
