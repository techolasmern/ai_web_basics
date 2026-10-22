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

    return <div className="">
        {openedModal && <div className="fixed top-0 left-0 flex justify-center items-center backdrop-blur-md bg-black/10 h-screen w-screen">
            <div className="bg-white w-full max-w-125 p-10">
                <button onClick={() => { setOpenedModal(null); setProdImage(null);  }} className="absolute top-2 right-2">close</button>
                {prodImage && <img src={prodImage} alt="" />}
                <div>
                    {openedModal.title}
                </div>
                <div className="flex gap-3">
                    {
                        openedModal.images.map((image, index) => {
                            return <img onMouseEnter={() => setProdImage(image)} src={image} alt="" key={index} className="h-30"/>
                        })
                    }
                </div>
            </div>
        </div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {
                products.map(product => {
                    return <div key={product.id} onClick={() => {
                        setOpenedModal(product);
                        setProdImage(product.images[0])
                    }}>
                        <img src={product.images[0]} alt={product.title} />
                        <h2>{product.title}</h2>
                    </div>
                })
            }
        </div>
        <div className="flex justify-center mt-10 gap-2">
            {
                new Array(totalPages).fill(0).map((_, index) => index + 1).map(number => {
                    return <button onClick={() => setPage(number)} key={number} className="p-2 rounded-full w-10 h-10 flex items-center justify-center bg-emerald-700 text-white shrink-0">{number}</button>
                })
            }
        </div>
    </div>
}