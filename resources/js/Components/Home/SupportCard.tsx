import { Phone } from 'lucide-react';

export default function SupportCard() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-6">
            <div className="bg-[#E3F2FD] rounded-3xl p-6 flex items-center justify-between border border-blue-100/50 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center gap-5">
                    <div className="bg-[#1D4ED8] p-4 rounded-2xl shadow-lg shadow-blue-600/20">
                        <Phone className="w-8 h-8 text-white fill-white/10" strokeWidth={1.5} />
                    </div>
                    <div>
                        <h3 className="text-[20px] font-bold text-gray-900 leading-tight">
                            Call Now for Support
                        </h3>
                    </div>
                </div>
                
                <a 
                    href="tel:+911234567890" 
                    className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-2xl font-bold text-sm tracking-wide transition-all hover:bg-blue-50 active:scale-95"
                >
                    Call
                </a>
            </div>
        </section>
    );
}
