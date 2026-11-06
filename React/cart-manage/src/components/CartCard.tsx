import type { CartProduct } from "../types/dymmyjson";
import { useCart } from "../hooks/useCart";

interface CartCardProps {
    product: CartProduct;
}

export const CartCard = ({ product }: CartCardProps) => {
    const { incrementQty, decrementQty, removeFromCart } = useCart();

    return (
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 gap-4">
            <div className="flex gap-4">
                <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                    <img src={product.thumbnail} alt={product.title} className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300" />
                    <span className="absolute top-1.5 left-1.5 bg-black/60 backdrop-blur-sm text-white text-[10px] px-1.5 py-0.5 rounded font-medium uppercase tracking-wider">
                        {product.category}
                    </span>
                </div>

                <div className="flex flex-col grow justify-between">
                    <div>
                        <div className="flex justify-between items-start gap-2">
                            <h3 className="font-semibold text-gray-800 text-base line-clamp-1">{product.title}</h3>
                            <button onClick={() => removeFromCart(product.id)} className="text-gray-400 hover:text-red-600 transition-colors p-1" title="Remove item" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-gray-400 text-xs line-clamp-1 mt-0.5">{product.description}</p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                            {product.discountPercentage > 0 && (
                                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                                    {product.discountPercentage}% OFF
                                </span>
                            )}
                        </div>
                        <div className="flex items-center text-amber-500 text-xs font-medium bg-amber-50/60 px-2 py-0.5 rounded-full">
                            <span>★</span>
                            <span className="ml-1 text-gray-700">{product.rating}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg overflow-hidden p-0.5">
                    <button onClick={() => decrementQty(product.id)} className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-xs rounded-md transition-all active:scale-95 disabled:opacity-50">
                        -
                    </button>
                    <span className="w-8 text-center text-sm font-semibold text-gray-800">{product.quantity}</span>
                    <button onClick={() => incrementQty(product.id)} className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-xs rounded-md transition-all active:scale-95">
                        +
                    </button>
                </div>

                <div className="text-right">
                    <span className="text-xs text-gray-400 block">Subtotal</span>
                    <span className="text-sm font-bold text-indigo-600">
                        ${(product.price * product.quantity).toFixed(2)}
                    </span>
                </div>
            </div>
        </div>
    );
};