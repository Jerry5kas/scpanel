import CategorySidebar from '@/Components/Products/CategorySidebar';
import ProductCard from '@/Components/Products/ProductCard';


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
        <div className="bg-[#FAF9F6] min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                <div className="grid gap-8 lg:grid-cols-12">

                    {/* Sidebar */}
                    <aside className="lg:col-span-3">
                        <CategorySidebar />
                    </aside>

                    {/* Main Content */}
                    <section className="lg:col-span-9">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10">
                            <h1 className="text-3xl font-black text-gray-900 tracking-tight capitalize border-l-[6px] pl-5" style={{ borderColor: 'var(--primary-color)' }}>
                                {category}
                            </h1>

                            <div className="relative group w-full sm:w-80">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full rounded-2xl border-none bg-white px-5 py-3.5 pl-12 shadow-sm shadow-gray-200/50 transition-all focus:ring-2 focus:ring-offset-1 text-sm font-medium"
                                    style={{ '--tw-ring-color': 'var(--primary-color)' } as any}
                                />
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gray-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
