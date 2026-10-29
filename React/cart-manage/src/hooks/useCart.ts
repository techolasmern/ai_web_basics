import { useContext } from "react"
import { CartContext } from "../providers/CartProvider"
import type { CartProduct, Product } from "../types/dymmyjson";

type CartContextType = {
    addToCart: (product: Product) => void;
    cart: CartProduct[];
    incrementQty: (id: number) => void;
    decrementQty: (id: number) => void;
    removeFromCart: (id: number) => void;
    totalPrice: number;
}

export const useCart = () => {
    return useContext(CartContext) as CartContextType;
}