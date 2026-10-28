import { useEffect, useState } from "react"
import { getProducts } from "./services/products"
import { type Product, type DummyJsonResponse } from "./types/dummyjson";

const LIMIT = 30;

// (10 - 1) * 10 = 90

export const App = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0)
    const [openedModal, setOpenedModal] = useState<Product | null>(null);
    const [prodImage, setProdImage] = useState<string | null>(null)

    useEffect(() => {
        (async () => {
            const response = await getProducts(LIMIT, (page - 1) * LIMIT);
            if (!response.ok) {
                return alert(response.message);
            }
            const data = response.data as DummyJsonResponse;
            const total_pages = Math.ceil(data.total / LIMIT)
            setProducts(data.products);
            setTotalPages(total_pages);
        })();
    }, [page])

    return <div className="w-full max-w-7xl mx-auto px-3">
        {openedModal && <div className="fixed z-2 top-0 left-0 flex justify-center items-center backdrop-blur-md bg-black/10 h-screen w-screen">
            <div className="bg-white relative w-full max-w-125 p-10">
                <button onClick={() => { setOpenedModal(null); setProdImage(null); }} className="absolute cursor-pointer top-2 right-2">close</button>
                {prodImage && <img src={prodImage} alt="" />}
                <div>
                    {openedModal.title}
                </div>
                <div className="flex gap-3 overflow-x-scroll scrollbar-none">
                    {
                        openedModal.images.map((image, index) => {
                            return <img onMouseEnter={() => setProdImage(image)} src={image} alt="" key={index} className="h-30 shrink-0"/>
                        })
                    }
                </div>
            </div>
        </div>}
        <h1 className="text-center text-3xl font-bold my-4">Products Store</h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {
                products.map(product => {
                    return <div key={product.id} onClick={() => {
                        setOpenedModal(product);
                        setProdImage(product.images[0])
                    }} className="shadow shadow-black/30 rounded-md p-2 text-center">
                        <div className="overflow-hidden h-40 flex justify-center">
                            <img src={product.images[0]} className="hover:scale-110 object-contain aspect-square h-full cursor-pointer duration-300" alt={product.title} />
                        </div>
                        <h2 className="truncate">{product.title}</h2>
                        <div className="flex justify-between my-2">
                            <div>
                                <p>{product.rating.toFixed(1)}</p>
                            </div>
                            <div className="flex gap-1">
                                <s className="font-semibold text-gray-400">${product.price.toFixed(2)}</s>
                                <p className="font-semibold text-emerald-700">${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</p>
                            </div>
                        </div>
                        <button className="bg-emerald-700 text-white w-full p-2 rounded-md">Add To Cart</button>
                    </div>
                })
            }
        </div>
        <div className="flex justify-center mt-10 mb-5 gap-2">
            {
                new Array(totalPages).fill(0).map((_, index) => index + 1).map(number => {
                    return <button onClick={() => setPage(number)} key={number} className="p-2 cursor-pointer rounded-full w-10 h-10 flex items-center justify-center bg-emerald-700 text-white shrink-0">{number}</button>
                })
            }
        </div>
    </div>
}