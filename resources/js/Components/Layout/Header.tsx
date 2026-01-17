import { Link } from '@inertiajs/react';
import {
    Home,
    LayoutGrid,
    ClipboardList,
    Truck,
    UserCircle,
    Menu,
    X,
    ChevronDown,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

import AuthSidePanel from '@/Components/Auth/AuthSidePanel';


export default function Header() {
    const [open, setOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);
    const userRef = useRef<HTMLDivElement>(null);
    const [authOpen, setAuthOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '/', icon: Home },
        { label: 'Products', href: '/products', icon: LayoutGrid },
        { label: 'Subscriptions', href: '/subscriptions', icon: ClipboardList },
        { label: 'Deliveries', href: '/deliveries', icon: Truck },
    ];

    // Close user menu on outside click
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (userRef.current && !userRef.current.contains(e.target as Node)) {
                setUserOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <>
            {/* Header */}
            <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/home" className="flex items-center">
                        <img src="/images/logo.png" alt="FreshTick" className="h-10" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-gray-700 text-sm font-medium">
                        {navItems.map(({ label, href, icon: Icon }) => (
                            <Link
                                key={label}
                                href={href}
                                className="flex items-center gap-2 hover:text-emerald-600"
                            >
                                <Icon className="w-5 h-5" />
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Controls */}
                    <div className="flex items-center gap-4">

                        {/* User Dropdown */}
                        <div ref={userRef} className="relative hidden md:block">
                            <button
                                onClick={() => setUserOpen(!userOpen)}
                                className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-600"
                            >
                                <UserCircle className="w-6 h-6" />
                                Guest
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {userOpen && (
                                <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white shadow-xl border p-4 space-y-3">
                                    <DropdownLink href="/deliveries">Delivery History</DropdownLink>
                                    <DropdownLink href="/transactions">Transactions and Invoices</DropdownLink>
                                    <DropdownLink href="/account">Account</DropdownLink>
                                    <DropdownLink href="/refer">Refer A Friend</DropdownLink>
                                    <DropdownLink href="/support">Support</DropdownLink>

                                    <div className="pt-2 border-t">
                                        <button
                                            onClick={() => {
                                                setUserOpen(false);
                                                setAuthOpen(true);
                                            }}
                                            className="text-emerald-600 text-sm font-medium"
                                        >
                                            Login
                                        </button>

                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                            aria-label="Toggle navigation"
                        >
                            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {open && (
                <div className="fixed inset-0 z-40 bg-black/30 md:hidden" onClick={() => setOpen(false)}>
                    <aside
                        className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <nav className="space-y-4">
                            {navItems.map(({ label, href, icon: Icon }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="flex items-center gap-3 text-gray-700 text-sm font-medium"
                                    onClick={() => setOpen(false)}
                                >
                                    <Icon className="w-5 h-5" />
                                    {label}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile User Section */}
                        <div className="mt-8 pt-4 border-t space-y-3 text-sm">
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    setAuthOpen(true);
                                }}
                                className="text-emerald-600 font-medium text-left"
                            >
                                Login
                            </button>

                            <Link href="/support">Support</Link>
                        </div>
                    </aside>
                </div>
            )}

            {/* Spacer */}
            <div className="h-16" />

            {/* Auth Side Panel */}
            <AuthSidePanel open={authOpen} onClose={() => setAuthOpen(false)} />
        </>
    );
}

/* Reusable dropdown item */
interface DropdownLinkProps {
    href: string;
    children: React.ReactNode;
}

function DropdownLink({ href, children }: DropdownLinkProps) {
    return (
        <Link
            href={href}
            className="block text-sm text-gray-700 hover:text-emerald-600"
        >
            {children}
        </Link>
    );
}
