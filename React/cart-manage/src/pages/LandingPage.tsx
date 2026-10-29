import { Fragment, useEffect, useState } from "react";
import type { Product } from "../types/dymmyjson";
import { getProducts } from "../services/dummyjson";
import { FETCH_LIMIT } from "../constants/api";
import { ProductCardSkeleton } from "../components/ProductCardSkeleton";
import { ProductCard } from "../components/ProductCard";
import { Navbar } from "../components/NavBar";
import { useNavigate } from "react-router";
import { useCart } from "../hooks/useCart";

export const LandingPage = () => {

    const { addToCart } = useCart();
    const [totalPages, setTotalPages] = useState<number>(10);
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductsData = async () => {
            setIsLoading(true);
            const skip = (page - 1) * FETCH_LIMIT;
            const response = await getProducts(FETCH_LIMIT, skip);
            if (!response.ok) {
                alert(response.message);
                return setIsLoading(false);
            }
            setProducts(response.data?.products || []);
            setIsLoading(false);
            setTotalPages(Math.ceil(response.data?.total || 0) / FETCH_LIMIT);
        };
        fetchProductsData();
    }, [page]);

    const handleAddToCart = (product: Product) => {
        addToCart(product);
    };

    return <Fragment>
        <Navbar navigate={navigate}/>
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Products</h1>
            {
                isLoading ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                    {Array.from({ length: FETCH_LIMIT }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    {products.map((product) => (
                        <ProductCard navigate={navigate} key={product.id} product={product} onAddToCart={handleAddToCart} />
                    ))}
                </div>
            }

            <div className="flex justify-center items-center gap-4">
                <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1 || isLoading} className="px-6 py-2.5 bg-gray-200 text-gray-700 font-medium rounded-lg shadow hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" >
                    Previous
                </button>

                <span className="text-gray-600 cursor-pointer font-medium">
                    Page {page}
                </span>

                <button onClick={() => setPage(prev => prev + 1)} disabled={isLoading || page >= totalPages} className="px-6 cursor-pointer py-2.5 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" >
                    Next
                </button>
            </div>
        </div>
    </Fragment>
};