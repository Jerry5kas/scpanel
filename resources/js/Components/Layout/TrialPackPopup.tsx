import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TrialPackPopup() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const seen = localStorage.getItem('trial_pack_seen');
        if (!seen) {
            setTimeout(() => setOpen(true), 600); // smooth delay
        }
    }, []);

    const close = () => {
        localStorage.setItem('trial_pack_seen', '1');
        setOpen(false);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-4">
            <div className="relative max-w-sm w-full rounded-3xl overflow-hidden shadow-2xl animate-scaleIn">

                {/* Close */}
                <button
                    onClick={close}
                    className="absolute top-3 right-3 z-10 bg-white/90 rounded-full p-1 hover:scale-110 transition"
                    aria-label="Close"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Promo Image */}
                <img
                    src="/images/trialpack.jpeg"
                    alt="Welcome Trial Pack – 3 Milk Packs at ₹117"
                    className="w-full h-auto"
                />

                {/* CTA Overlay (optional but recommended) */}
                <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                    <button
                        onClick={() => {
                            close();
                            window.location.href = '/subscriptions';
                        }}
                        className="bg-white text-emerald-600 font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
                    >
                        Try Now
                    </button>
                </div>
            </div>
        </div>
    );
}

