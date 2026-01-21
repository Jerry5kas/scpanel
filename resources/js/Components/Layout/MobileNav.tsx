import { Link, usePage } from '@inertiajs/react';
import { Home, LayoutGrid, Calendar, ClipboardCheck, Menu } from 'lucide-react';

export default function MobileNav() {
    const { url } = usePage();

    const navItems = [
        { label: 'Home', href: '/', icon: Home },
        { label: 'Products', href: '/products', icon: LayoutGrid },
        { label: 'My Subs', href: '/subscriptions', icon: Calendar },
        { label: 'Deliveries', href: '/deliveries', icon: ClipboardCheck },
        { label: 'More', href: '/more', icon: Menu },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white px-6 pb-2 pt-2 md:hidden">
            <div className="flex items-center justify-between">
                {navItems.map(({ label, href, icon: Icon }) => {
                    const isActive = url === href;
                    return (
                        <Link
                            key={label}
                            href={href}
                            className={`flex flex-col items-center gap-1 transition-colors ${isActive ? '' : 'text-gray-400'
                                }`}
                            style={isActive ? { color: 'var(--primary-color)' } : {}}
                        >
                            <Icon className="h-6 w-6" />
                            <span className="text-[10px] font-black uppercase tracking-tighter">
                                {label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
