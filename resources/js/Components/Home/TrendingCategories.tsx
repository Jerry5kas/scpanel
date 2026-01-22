import { Link } from '@inertiajs/react';

const categories = [
    {
        name: 'Country Butter',
        image: '/images/products/butter.png',
        href: '/products?category=butter'
    },
    {
        name: 'Butter Milk',
        image: '/images/products/buttermilk.png',
        href: '/products?category=buttermilk'
    },
    {
        name: 'Paneer',
        image: '/images/products/paneer.png',
        href: '/products?category=paneer'
    },
    {
        name: 'Fresh Curd',
        image: '/images/products/freshcurd.png',
        href: '/products?category=curd'
    },
    {
        name: 'Ghee',
        image: '/images/products/ghee.png',
        href: '/products?category=ghee'
    }
];

export default function TrendingCategories() {
    return (
        <section className="w-full bg-white py-8 sm:py-12 border-b border-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-[18px] sm:text-[22px] font-bold mb-6 sm:mb-10 text-gray-900 px-1">
                    Trending Product Categories
                </h2>
                
                <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 pb-6 lg:pb-0 gap-5 sm:gap-6 lg:gap-8 scrollbar-hide -mx-2 px-2 lg:mx-0 lg:px-0">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            href={category.href}
                            className="flex-shrink-0 lg:flex-shrink flex flex-col items-center gap-4 w-[160px] sm:w-[220px] lg:w-full group"
                        >
                            <div className="w-full aspect-[4/3] sm:aspect-square rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-[14px] sm:text-[17px] font-bold text-gray-800 text-center leading-tight transition-colors group-hover:text-emerald-600">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
