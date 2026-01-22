import React from 'react';

import { usePage } from '@inertiajs/react';
import Footer from './Footer';
import Header from './Header';
import MobileNav from './MobileNav';
import TrialPackPopup from './TrialPackPopup';

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const { url } = usePage();
    const isHomePage = url === '/';

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header: Hidden on mobile unless it's the home page */}
            <div className={`${isHomePage ? 'block' : 'hidden sm:block'}`}>
                <Header />
            </div>
            
            <TrialPackPopup />
            
            <main className="flex-grow">
                {children}
                {/* Footer: Hidden on mobile always */}
                <div className="hidden sm:block">
                    <Footer />
                </div>
            </main>
            
            <MobileNav />
        </div>
    );
}

