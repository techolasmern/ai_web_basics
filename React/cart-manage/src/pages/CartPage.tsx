import { Fragment } from "react";
import { Navbar } from "../components/NavBar";
import { useNavigate } from "react-router";
import { useCart } from "../hooks/useCart";

export const CartPage = () => {

    const { cart, incrementQty, decrementQty, removeFromCart, totalPrice } = useCart();
    const navigate = useNavigate();
    
    return <Fragment>
        <Navbar navigate={navigate} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {
                cart.map(product => {
                    return <div key={product.id} className="flex flex-col p-2">
                        <div className="h-80">
                            <img src={product.images[0]} alt={product.title} className="h-full object-contain"/>
                        </div>
                        <div className="flex justify-between max-w-1/2 w-full mx-auto">
                            <button onClick={() => decrementQty(product.id)}>-</button>
                            <p>{product.quantity}</p>
                            <button onClick={() => incrementQty(product.id)}>+</button>
                        </div>
                        <button onClick={() => removeFromCart(product.id)} className="bg-red-700 p-2 w-full rounded-md text-white">Remove</button>
                    </div>
                })
            }
        </div>
        <div>Total Cart Value: ${totalPrice.toFixed(2)}</div>
    </Fragment>
};