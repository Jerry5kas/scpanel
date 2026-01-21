import CategorySidebar from '@/Components/Products/CategorySidebar';
import ProductCard from '@/Components/Products/ProductCard';


const products = [
    {
        id: 1,
        name: 'Cow Ghee - (200g)',
        price: '₹375 / Unit',
        image: '/images/products/ghee.png',
        bestSeller: true,
    },
    {
        id: 2,
        name: 'Cow Ghee - (100g)',
        price: '₹150 / Unit',
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
];

export default function Category({ category }: { category: string }) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <div className="grid gap-6 lg:grid-cols-12">

                {/* Sidebar */}
                <aside className="lg:col-span-3">
                    <CategorySidebar />
                </aside>

                {/* Main Content */}
                <section className="lg:col-span-9">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <h1 className="text-xl font-semibold capitalize">{category}</h1>

                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full sm:w-64 rounded-lg border px-4 py-2 pl-10"
                            />
                            <span className="absolute left-3 top-2.5 text-gray-400">
                                🔍
                            </span>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
