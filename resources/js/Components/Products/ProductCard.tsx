type Props = {
    product: {
        id: number;
        name: string;
        price: string;
        image: string;
        bestSeller?: boolean;
    };
};

export default function ProductCard({ product }: Props) {
    return (
        <article className="group relative flex flex-col bg-white rounded-[28px] border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] overflow-hidden h-fit p-1 animate-scaleIn">
            <div className="flex gap-3 h-full overflow-hidden">
                {/* Product Image - Locked in container */}
                <div className="relative h-24 w-24 sm:h-28 sm:w-28 flex-shrink-0 overflow-hidden rounded-[24px] bg-[#F8F9FA]">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 scale-100 group-hover:scale-110"
                    />
                </div>

                {/* Product Details Section */}
                <div className="flex flex-1 flex-col justify-between py-1.5 pr-2 overflow-hidden">
                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                            {/* Veg Icon */}
                            <div className="flex-shrink-0 flex h-3.5 w-3.5 items-center justify-center rounded-sm border-[1px] border-green-600 p-[1.5px]">
                                <div className="h-full w-full rounded-full bg-green-600" />
                            </div>
                            
                            {product.bestSeller && (
                                <span className="bg-[#9370DB] text-white text-[9px] font-black px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
                                    BEST SELLER
                                </span>
                            )}
                        </div>

                        <h3 className="text-[14px] sm:text-[15px] font-black text-gray-800 leading-tight line-clamp-2 transition-colors group-hover:text-[var(--primary-color)]">
                            {product.name}
                        </h3>
                        
                        <div className="flex items-baseline gap-1 pt-0.5">
                            <span className="text-[17px] font-black text-gray-900">{product.price.split(' ')[0]}</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">/ Unit</span>
                        </div>
                    </div>

                    {/* Button Section - Pushed to bottom right */}
                    <div className="flex justify-end mt-auto">
                        <button
                            className="rounded-xl border-[1.5px] px-4 py-1.5 text-[12px] font-black transition-all active:scale-90 hover:bg-[var(--primary-color)] hover:text-white"
                            style={{
                                borderColor: 'var(--primary-color)',
                                color: 'var(--primary-color)',
                            }}
                        >
                            Buy Once
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}



