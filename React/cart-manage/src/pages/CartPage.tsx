import { Fragment, useState } from "react";
import { Navbar } from "../components/NavBar";
import { useNavigate } from "react-router";
import { useCart } from "../hooks/useCart";
import { CartCard } from "../components/CartCard";
import { CartCardList } from "../components/CartListView";

export const CartPage = () => {

    const { cart, totalPrice } = useCart();
    const navigate = useNavigate();
    const [isGrid, setIsGrid] = useState(true);
    
    return <Fragment>
        <Navbar navigate={navigate} />
        <div className="max-w-7xl mx-auto">
            <div className="p-3 flex justify-between">
                <h1 className="text-2xl font-bold underline">SHOPPING CART</h1>
                <button onClick={() => setIsGrid(!isGrid)} className="bg-indigo-600 text-white rounded-lg p-2 px-4 cursor-pointer w-30 active:scale-95 shadow active:shadow-none text-sm">{isGrid ? "List View" : "Grid View"}</button>
            </div>
            <div className="p-3 mb-3">Total Cart Value: ${totalPrice.toFixed(2)}</div>
            
            {!isGrid && <table className="table w-full">
                <thead>
                    <tr className="border-b-2 border-b-gray-400 ">
                        <th className="w-1/5">PRODUCT</th>
                        <th className="w-1/4">QUANTITY</th>
                        <th className="w-1/4">PRICE</th>
                        <th className="w-1/3">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(product => {
                            return <CartCardList key={product.id} product={product} />
                        })
                    }
                </tbody>
            </table>}

            {isGrid && <div className="grid grid-cols-1 px-3 py-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
                {
                    cart.map(product => {
                        return <CartCard key={product.id} product={product} />
                    })
                }
            </div>}
        </div>
    </Fragment>
};