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
        <div className="rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-32 w-full object-contain rounded-lg"
                />

                {product.bestSeller && (
                    <span className="absolute top-2 left-2 bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                        Best Seller
                    </span>
                )}
            </div>

            <h3 className="mt-4 font-medium text-sm">
                {product.name}
            </h3>

            <p className="text-sm text-gray-600 mt-1">
                {product.price}
            </p>

            <button
                className="mt-4 w-full rounded-lg border border-emerald-500 text-emerald-600 py-2 text-sm hover:bg-emerald-50"
            >
                Buy Once
            </button>
        </div>
    );
}
