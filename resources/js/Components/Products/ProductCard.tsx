type Props = {
    product: {
        name: string;
        price: string;
        image: string;
        bestSeller?: boolean;
    };
};

export default function ProductCard({ product }: Props) {
    return (
        <div className="group relative flex items-center gap-4 rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100/50">
            {/* Image Section */}
            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-2">
                <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Info Section */}
            <div className="flex flex-1 flex-col justify-between h-24 py-0.5">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        {/* Veg Dot */}
                        <div className="flex h-3.5 w-3.5 items-center justify-center rounded-sm border-[1px] border-green-600 p-[1.5px]">
                            <div className="h-full w-full rounded-full bg-green-600" />
                        </div>
                        {product.bestSeller && (
                            <span className="rounded bg-purple-600 px-1.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-tight shadow-sm">
                                Best Seller
                            </span>
                        )}
                    </div>
                    <h3 className="text-[13px] font-black text-gray-800 line-clamp-1 leading-tight">
                        {product.name}
                    </h3>
                    <p className="mt-0.5 text-[12px] font-black text-gray-500">
                        {product.price}
                    </p>
                </div>

                <div className="flex justify-end">
                    <button
                        className="rounded-lg border-[1.5px] px-4 py-1.5 text-[11px] font-black tracking-tight transition-all hover:shadow-sm"
                        style={{
                            borderColor: 'var(--primary-color)',
                            color: 'var(--primary-color)',
                        }}
                        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--secondary-color)')}
                        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                    >
                        Buy Once
                    </button>
                </div>
            </div>
        </div>
    );
}
