import type { NavigateFunction } from "react-router";
import type { Product } from "../types/dymmyjson";

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
    navigate: NavigateFunction;
}

export const ProductCard = ({ product, onAddToCart, navigate }: ProductCardProps) => {
    return (
        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div>
                <div onClick={() => navigate(`/p/${product.id}`)} className="relative h-48 w-full bg-gray-100 overflow-hidden">
                    <img src={product.thumbnail} alt={product.title} className="w-full h-full object-contain hover:scale-105 transition-transform duration-300" />
                    <span className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-medium">
                        {product.category}
                    </span>
                </div>

                <div className="p-4">
                    <h3 className="font-bold text-gray-800 text-lg line-clamp-1 mb-1">{product.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-3">{product.description}</p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold text-indigo-600">${product.price.toFixed(2)}</span>
                            {
                                product.discountPercentage > 0 && (
                                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                                        {product.discountPercentage}% OFF
                                    </span>
                                )
                            }
                        </div>
                        <div className="flex items-center text-amber-500 text-sm font-semibold">
                            <span>★</span>
                            <span className="ml-1 text-gray-700">{product.rating}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 pt-0">
                <button onClick={() => onAddToCart?.(product)} className="w-full cursor-pointer py-2.5 px-4 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};