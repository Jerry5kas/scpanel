import CategorySidebar from '@/Components/Products/CategorySidebar';
import ProductCard from '@/Components/Products/ProductCard';
import { Link, Head } from '@inertiajs/react';
import { ChevronLeft, Search } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Cow Ghee - (100g)',
        price: '₹150 / Unit',
        image: '/images/products/ghee.png',
        bestSeller: true,
    },
    {
        id: 2,
        name: 'Cow Ghee - (200g)',
        price: '₹375 / Unit',
        image: '/images/products/ghee.png',
        bestSeller: true,
    },
    {
        id: 3,
        name: 'Cow Ghee - (500g)',
        price: '₹750 / Unit',
        image: '/images/products/ghee.png',
        bestSeller: true,
    },
    {
        id: 4,
        name: 'Cow Ghee - (1L)',
        price: '₹1,500 / Unit',
        image: '/images/products/ghee.png',
        bestSeller: true,
    },
    {
        id: 5,
        name: 'Buffalo Ghee - (500g)',
        price: '₹650 / Unit',
        image: '/images/products/ghee.png',
    },
];

export default function Category({ category }: { category: string }) {
    return (
        <>
            <Head title={`Store - ${category}`} />
            
            <div className="bg-white sm:bg-[#FAF9F6] flex flex-col overflow-hidden fixed sm:relative top-0 sm:top-0 bottom-[64px] sm:bottom-0 inset-x-0 z-10 sm:min-h-screen">
                {/* Custom Store Header - Mobile Only */}
                <header className="flex-shrink-0 flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white z-20 sm:hidden">
                    <Link href="/" className="p-2 -ml-2 transition-transform active:scale-90">
                        <ChevronLeft className="w-7 h-7 text-gray-700" strokeWidth={1.5} />
                    </Link>
                    <h1 className="text-[18px] font-bold text-gray-800 tracking-tight">Store</h1>
                    <button className="p-2 -mr-2 transition-transform active:scale-90">
                        <Search className="w-6 h-6 text-emerald-600/60" strokeWidth={1.5} />
                    </button>
                </header>

                <div className="flex flex-1 overflow-hidden h-full sm:max-w-7xl sm:mx-auto sm:px-6 sm:py-10 sm:gap-10 sm:overflow-visible">
                    {/* Fixed Category Sidebar - Independent Scroll on Mobile, Static on Desktop */}
                    <aside className="w-[80px] sm:w-[320px] flex-shrink-0 bg-[#F8F9FA] sm:bg-transparent border-r border-gray-100 sm:border-r-0 h-full sm:h-auto overflow-y-auto sm:overflow-visible scrollbar-hide">
                        <CategorySidebar />
                        {/* Mobile bottom spacer */}
                        <div className="h-20 sm:hidden" />
                    </aside>

                    {/* Main Product Area */}
                    <main className="flex-1 overflow-y-auto sm:overflow-visible bg-white sm:bg-transparent scrollbar-hide h-full sm:h-auto flex flex-col">
                        {/* Desktop Header */}
                        <div className="hidden sm:flex items-center justify-between mb-8">
                            <h2 className="text-[28px] font-black text-gray-900 tracking-tight capitalize border-l-[6px] pl-5" style={{ borderColor: 'var(--primary-color)' }}>
                                {category}
                            </h2>
                            
                            <div className="relative w-80">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full rounded-2xl border-none bg-white px-5 py-4 pl-12 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all focus:ring-2 text-sm font-medium"
                                    style={{ '--tw-ring-color': 'var(--primary-color)' } as any}
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>
                        </div>

                        {/* Mobile Category Indicator */}
                        <div className="sm:hidden px-4 py-2 bg-white sticky top-0 z-10 border-b border-gray-50 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                            <p className="text-[10px] font-black uppercase tracking-widest text-[var(--primary-color)]">
                                <span className="opacity-40 text-gray-500">Category:</span> {category}
                            </p>
                        </div>

                        {/* Products List/Grid */}
                        <div className="divide-y divide-gray-100 sm:grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:divide-y-0">
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                            
                            {/* Final spacer for mobile */}
                            <div className="h-24 sm:hidden" />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}





