import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePage, Link } from '@inertiajs/react';

export default function TrialPackPopup() {
    const { url } = usePage();
    const [open, setOpen] = useState(false);

    // Only show on home page
    const isHomePage = url === '/' || url === '';

    useEffect(() => {
        if (isHomePage) {
            const timer = setTimeout(() => setOpen(true), 1000); // 1s delay for better UX
            return () => clearTimeout(timer);
        }
    }, [isHomePage]);

    if (!open || !isHomePage) return null;

    return (
        <div 
            className="fixed inset-0 z-[999] bg-black/70 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300"
            onClick={() => setOpen(false)}
        >
            <div 
                className="relative w-full max-w-[90%] sm:max-w-[420px] lg:max-w-[460px] animate-in fade-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button - Outside the image on top-right */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 z-[1001] bg-white text-gray-900 rounded-full p-2 shadow-2xl hover:scale-110 active:scale-90 transition-all border-2 border-gray-100"
                    aria-label="Close"
                >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
                </button>

                {/* Banner Content */}
                <Link 
                    href="/subscriptions" 
                    className="block relative rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] group"
                    onClick={() => setOpen(false)}
                >
                    <img
                        src="/images/trialpack.jpeg"
                        alt="Welcome Trial Pack"
                        className="w-full h-auto block transform transition-transform duration-700 group-hover:scale-[1.02]"
                        loading="eager"
                    />
                    
                    {/* Subtle Overlay to make it feel premium */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Link>
            </div>
        </div>
    );
}

