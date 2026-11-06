import type { CartProduct } from "../types/dymmyjson";
import { useCart } from "../hooks/useCart";

interface CartCardProps {
    product: CartProduct;
}

export const CartCardList = ({ product }: CartCardProps) => {
    const { incrementQty, decrementQty, removeFromCart } = useCart();

    return (
        <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
            {/* Product Info & Thumbnail */}
            <td className="py-4 px-4">
                <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-full object-contain p-1 hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 text-sm line-clamp-1">{product.title}</h4>
                        <span className="text-xs text-gray-400 capitalize">{product.category}</span>
                    </div>
                </div>
            </td>

            {/* Quantity Controls */}
            <td className="py-4 px-4 text-center">
                <div className="inline-flex items-center bg-gray-50 border border-gray-200 rounded-lg overflow-hidden p-0.5">
                    <button
                        onClick={() => decrementQty(product.id)}
                        className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-xs rounded-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                        -
                    </button>
                    <span className="w-8 text-center text-sm font-semibold text-gray-800">{product.quantity}</span>
                    <button
                        onClick={() => incrementQty(product.id)}
                        className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-xs rounded-md transition-all active:scale-95 cursor-pointer"
                    >
                        +
                    </button>
                </div>
            </td>

            {/* Price & Subtotal */}
            <td className="py-4 px-4 text-center">
                <div className="text-sm">
                    <span className="font-bold text-gray-900">${(product.price * product.quantity).toFixed(2)}</span>
                    <span className="block text-xs text-gray-400">${product.price.toFixed(2)} each</span>
                </div>
            </td>

            <td className="py-4 px-4 text-right">
                <button
                    onClick={() => removeFromCart(product.id)}
                    className="cursor-pointer text-gray-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-all inline-flex items-center justify-center"
                    title="Remove item"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </td>
        </tr>
    );
};