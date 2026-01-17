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
        <div className="rounded-2xl bg-emerald-50 p-4 space-y-4">
            <h2 className="font-semibold">Categories</h2>

            <div className="space-y-2">
                {categories.map(category => (
                    <div
                        key={category.name}
                        className={`flex items-center gap-3 rounded-xl p-3 cursor-pointer transition
                            ${category.active
                            ? 'bg-emerald-500 text-white'
                            : 'bg-white hover:bg-emerald-100'
                        }
                        `}
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            className="h-10 w-10 rounded-lg object-cover"
                        />
                        <span className="text-sm font-medium">
                            {category.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
