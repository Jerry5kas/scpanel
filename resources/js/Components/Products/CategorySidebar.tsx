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
        <div
            className="rounded-3xl p-5 space-y-6"
            style={{ backgroundColor: 'var(--secondary-color)' }}
        >
            <h2 className="text-[20px] font-black text-gray-800 tracking-tight ml-1">Categories</h2>

            <div className="space-y-3">
                {categories.map(category => (
                    <div
                        key={category.name}
                        className={`group flex items-center gap-4 rounded-2xl p-2 cursor-pointer transition-all duration-300 shadow-sm`}
                        style={category.active ? {
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            boxShadow: '0 8px 30px -10px var(--primary-color)'
                        } : {
                            backgroundColor: 'white'
                        }}
                        onMouseOver={(e) => {
                            if (!category.active) {
                                e.currentTarget.style.transform = 'translateX(4px)';
                                e.currentTarget.style.backgroundColor = '#fcfcfc';
                            }
                        }}
                        onMouseOut={(e) => {
                            if (!category.active) {
                                e.currentTarget.style.transform = 'translateX(0)';
                                e.currentTarget.style.backgroundColor = 'white';
                            }
                        }}
                    >
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50/50 shadow-inner flex items-center justify-center p-1.5">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="max-h-full max-w-full object-contain transition-transform group-hover:scale-110"
                            />
                        </div>
                        <span className={`text-[14px] font-black tracking-tight ${category.active ? 'text-white' : 'text-gray-700'}`}>
                            {category.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
