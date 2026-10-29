import type { NavigateFunction } from "react-router";
import { useCart } from "../hooks/useCart";

interface NavbarProps {
    navigate: NavigateFunction;
}

export const Navbar = ({ navigate }: NavbarProps) => {

    const { cart } = useCart();

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <button onClick={() => navigate("/")} className="flex items-center gap-2 text-xl cursor-pointer text-gray-900 tracking-tight hover:text-indigo-600 transition-colors">
                    <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow">
                        S
                    </span>
                    StoreFront
                </button>

                <div className="flex items-center gap-3">
                    <button onClick={() => navigate("/cart")} className={`relative cursor-pointer px-4 py-2 rounded-xl border transition-all flex items-center gap-2 font-medium text-sm bg-white border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm`}>
                        <span>🛒 Cart</span>
                        <span className="bg-amber-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">{cart.length}</span>
                    </button>
                </div>
            </div>
        </header>
    );
};
