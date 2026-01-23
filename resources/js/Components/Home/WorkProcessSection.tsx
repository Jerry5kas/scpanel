import { Link } from '@inertiajs/react';

export default function WorkProcessSection() {
    return (
        <section className="max-w-7xl mx-auto py-0 px-2 sm:px-0 sm:py-8 bg-[#FFFFFF]">
            <Link 
                href="/" 
                className="relative block overflow-hidden rounded-[24px] transition-transform group"
            >
                <img 
                    src="/images/work-process.jpeg" 
                    alt="Work Process" 
                    className="w-full h-auto"
                />
            </Link>
        </section>
    );
}
