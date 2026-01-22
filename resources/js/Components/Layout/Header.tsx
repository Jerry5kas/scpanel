import { Link, usePage } from '@inertiajs/react';
import {
    Home,
    LayoutGrid,
    ClipboardList,
    Truck,
    UserCircle,
    Menu,
    X,
    ChevronDown,
    Wallet,
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

import AuthSidePanel from '@/Components/Auth/AuthSidePanel';


export default function Header() {
    const { url } = usePage();
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
            <header className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm ring-1 ring-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <img src="/images/logo.png" alt="FreshTick" className="h-10" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10 text-gray-700 text-sm font-black tracking-tight">
                        {navItems.map(({ label, href, icon: Icon }) => (
                            <Link
                                key={label}
                                href={href}
                                className="flex items-center gap-2 group transition-all"
                            >
                                <Icon className="w-5 h-5 transition-colors group-hover:text-[var(--primary-color)]" style={{ color: url === href ? 'var(--primary-color)' : 'inherit' }} />
                                <span className="transition-colors group-hover:text-[var(--primary-color)]" style={{ color: url === href ? 'var(--primary-color)' : 'inherit' }}>
                                    {label}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Right Controls */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        {/* Wallet Section */}
                        <Link
                            href="/wallet"
                            className="flex items-center gap-3 bg-[#E0F2F1] px-3 py-2 sm:p-2 rounded-2xl transition-all active:scale-95 group sm:bg-transparent"
                        >
                            <div className="relative">
                                <Wallet className="h-6 w-6 sm:h-8 sm:w-8 text-[#00897B]" strokeWidth={1.5} />
                                {/* Desktop only badge */}
                                <div className="hidden sm:flex absolute -top-2 -right-2 bg-[#4DB6AC] text-white text-[10px] font-black px-2 py-0.5 rounded-full min-w-[24px] h-6 items-center justify-center border-2 border-white shadow-md">
                                    ₹0
                                </div>
                            </div>
                            {/* Mobile only text */}
                            <span className="text-[14px] font-black text-gray-800 sm:hidden">
                                ₹0
                            </span>
                        </Link>

                        {/* User Dropdown */}
                        <div ref={userRef} className="relative">
                            <button
                                onClick={() => setUserOpen(!userOpen)}
                                className="flex items-center gap-2 text-[13px] font-black text-gray-700 transition-colors hover:text-[var(--primary-color)]"
                            >
                                <UserCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                                <span className="hidden sm:inline">Guest</span>
                                <ChevronDown className="w-4 h-4 transition-transform duration-300 hidden sm:block" style={{ transform: userOpen ? 'rotate(180deg)' : 'none' }} />
                            </button>

                            {userOpen && (
                                <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white shadow-xl border border-gray-100 p-4 space-y-3">
                                    <DropdownLink href="/wallet">Wallet</DropdownLink>
                                    <DropdownLink href="/deliveries">Delivery History</DropdownLink>
                                    <DropdownLink href="/transactions">Transactions and Invoices</DropdownLink>
                                    <DropdownLink href="/account">Account</DropdownLink>
                                    <DropdownLink href="/refer">Refer A Friend</DropdownLink>
                                    <DropdownLink href="/support">Support</DropdownLink>

                                    <div className="pt-2 border-t border-gray-50">
                                        <button
                                            onClick={() => {
                                                setUserOpen(false);
                                                setAuthOpen(true);
                                            }}
                                            className="text-[var(--primary-color)] text-[13px] font-black"
                                        >
                                            Login
                                        </button>

                                    </div>
                                </div>
                            )}
                        </div>
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
