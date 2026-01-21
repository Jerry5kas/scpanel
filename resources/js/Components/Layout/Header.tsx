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
                    <div className="flex items-center gap-6">

                        {/* Wallet */}
                        <Link
                            href="/wallet"
                            className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all hover:scale-105 active:scale-95 ${url === '/wallet'
                                    ? 'bg-[var(--primary-color)] text-white border-[var(--primary-color)] shadow-lg shadow-[var(--primary-color)]/20 scale-105'
                                    : 'text-[var(--primary-color)] bg-[var(--secondary-color)]/30 border-[var(--secondary-color)]/50'
                                }`}
                        >
                            <Wallet className="h-4 w-4" />
                            <span className="text-[13px] font-black tracking-tight">₹0</span>
                        </Link>

                        {/* User Dropdown */}
                        <div ref={userRef} className="relative hidden md:block">
                            <button
                                onClick={() => setUserOpen(!userOpen)}
                                className="flex items-center gap-2 text-[13px] font-black text-gray-700 transition-colors hover:text-[var(--primary-color)]"
                            >
                                <UserCircle className="w-6 h-6" />
                                Guest
                                <ChevronDown className="w-4 h-4 transition-transform duration-300" style={{ transform: userOpen ? 'rotate(180deg)' : 'none' }} />
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

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors"
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
