import { createContext, useState } from "react";
import type { CartProduct, Product } from "../types/dymmyjson";

type CartContextType = {
    addToCart: (product: Product) => void;
    cart: CartProduct[];
    incrementQty: (id: number) => void;
    decrementQty: (id: number) => void;
    removeFromCart: (id: number) => void;
    totalPrice: number;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<CartProduct[] | []>([]);

    const addToCart = (product: Product) => {
        const index = cart.findIndex(item => item.id === product.id);
        if (index === -1) {
            setCart(prev => [...prev, { ...product, quantity: 1 }]);
        } else {
            setCart(prev => {
                const updatedCart = prev.map(item => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                })
                return updatedCart;
            });
        }  
    }

    const incrementQty = (id: number) => {
        const index = cart.findIndex(item => item.id === id);
        if (index === -1) return;
        setCart(prev => {
            return prev.map(item => {
                if (item.id === id) {
                    return {...item, quantity: item.quantity + 1};
                }
                return item;
            })
        })
    }

    const removeFromCart = (id: number) => {
        const index = cart.findIndex(item => item.id === id);
        if (index === -1) return;
        setCart(prev => {
            const updated = prev.filter(item => item.id !== id);
            return updated;
        });
    }

    const decrementQty = (id: number) => {
        const product = cart.find(item => item.id === id);
        if (!product) return;
        if (product.quantity === 1) {
            removeFromCart(id);
        } else {
            setCart(prev => {
                return prev.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1};
                    }
                    return item;
                })
            })
        }
    }

    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return <CartContext.Provider value={{ addToCart, cart, incrementQty, decrementQty, removeFromCart, totalPrice }}>
        {children}
    </CartContext.Provider>
}