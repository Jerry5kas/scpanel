import React, { useState, useEffect } from 'react';

import { usePage } from '@inertiajs/react';
import { Phone } from 'lucide-react';
import Footer from './Footer';
import Header from './Header';
import MobileNav from './MobileNav';
import TrialPackPopup from './TrialPackPopup';
import LocationLanguagePopup from './LocationLanguagePopup';

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const { url } = usePage();
    const isHomePage = url === '/';
    
    const [showLocationPopup, setShowLocationPopup] = useState(false);
    const [showTrialPopup, setShowTrialPopup] = useState(false);
    const [showFloatingActions, setShowFloatingActions] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        if (isHomePage) {
            setShowLocationPopup(true);
        }
    }, [isHomePage]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down
                setShowFloatingActions(false);
            } else {
                // Scrolling up
                setShowFloatingActions(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleLocationClose = (data?: { language: string, zone: string }) => {
        setShowLocationPopup(false);
        if (data) {
            localStorage.setItem('user_language', data.language);
            localStorage.setItem('user_zone', data.zone);
        }
        // Small delay before showing the trial pack popup
        setTimeout(() => {
            setShowTrialPopup(true);
        }, 500);
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Header: Hidden on mobile unless it's the home page */}
            <div className={`${isHomePage ? 'block' : 'hidden sm:block'}`}>
                <Header />
            </div>
            
            {showLocationPopup && <LocationLanguagePopup onClose={handleLocationClose} />}
            <TrialPackPopup shouldShow={showTrialPopup} />
            
            <main className="flex-grow pb-24 md:pb-0">
                {children}
                {/* Footer: Hidden on mobile always */}
                <div className="hidden sm:block">
                    <Footer />
                </div>
            </main>

            {/* Floating Actions: Home Page Only */}
            {isHomePage && (
                <div 
                    className={`fixed right-4 bottom-22 md:bottom-10 z-[60] flex flex-col gap-3 transition-all duration-500 transform ${
                        showFloatingActions ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
                    }`}
                >
                    {/* Phone Button - Professional Glossy Blue */}
                    <a 
                        href="tel:+910000000000" 
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-full shadow-[0_8px_20px_rgba(37,99,235,0.3)] border-t border-white/30 backdrop-blur-sm transition-all hover:scale-110 hover:-translate-y-1 active:scale-95 group overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                        <Phone className="w-5 h-5 fill-white drop-shadow-md" />
                    </a>

                    {/* WhatsApp Button - Using SVG with Glossy Effect */}
                    <a 
                        href="https://wa.me/910000000000" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.3)] border-t border-white/30 backdrop-blur-sm transition-all hover:scale-110 hover:-translate-y-1 active:scale-95 group overflow-hidden relative"
                    >
                        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                        <img 
                            src="/images/whatsapp.svg" 
                            alt="WhatsApp" 
                            className="w-7 h-7 drop-shadow-md brightness-0 invert" 
                        />
                    </a>
                </div>
            )}
            
            <MobileNav />
        </div>
    );
}
