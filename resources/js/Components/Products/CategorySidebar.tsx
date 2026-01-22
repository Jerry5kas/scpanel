const categories = [
    { name: 'Ghee', image: '/images/products/ghee.png', active: true },
    { name: 'Fresh Curd', image: '/images/products/freshcurd.png' },
    { name: 'Paneer', image: '/images/products/paneer.png' },
    { name: 'Butter Milk', image: '/images/products/buttermilk.png' },
    { name: 'Country Butter', image: '/images/products/butter.png' },
    { name: 'Milk Subscription', image: '/images/products/milk.png' },
];

export default function CategorySidebar() {
    return (
        <div className="flex flex-col sm:bg-[#E0F2F1] sm:rounded-[32px] sm:p-5 sm:min-h-[600px] sm:shadow-sm">
            <h2 className="hidden sm:block text-[22px] font-black text-gray-800 tracking-tight ml-3 mb-6">Categories</h2>
            
            <div className="flex flex-col sm:space-y-3">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className={`group flex flex-col sm:flex-row items-center sm:gap-4 py-4 sm:py-3.5 px-2 sm:px-4 cursor-pointer transition-all border-l-4 sm:border-l-0 sm:rounded-2xl ${
                            category.active 
                            ? 'bg-white sm:bg-[#4DB6AC] border-[var(--primary-color)] sm:border-transparent sm:shadow-md' 
                            : 'border-transparent hover:bg-white/50 sm:bg-white/40'
                        }`}
                    >
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden mb-2 sm:mb-0 flex items-center justify-center transition-all flex-shrink-0 ${
                            category.active 
                            ? 'bg-[var(--secondary-color)] sm:bg-white/20' 
                            : 'bg-white sm:bg-white/60 shadow-inner'
                        }`}>
                            <img
                                src={category.image}
                                alt={category.name}
                                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110`}
                            />
                        </div>
                        <span className={`text-[10px] sm:text-[15px] font-black text-center sm:text-left leading-tight transition-colors ${
                            category.active ? 'text-[var(--primary-color)] sm:text-white' : 'text-gray-500 sm:text-[#00695C]'
                        }`}>
                            {category.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}



