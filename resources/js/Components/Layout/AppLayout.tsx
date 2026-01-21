import React from 'react';

import Footer from './Footer';
import Header from './Header';
import MobileNav from './MobileNav';
import TrialPackPopup from './TrialPackPopup';

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <TrialPackPopup />
            <main className="flex-grow pb-20 md:pb-0">{children}</main>
            <MobileNav />
            <Footer />
        </div>
    );
}
