import { useParams } from "react-router";
import { Fragment, useEffect, useState } from "react";
import { getSingleProduct } from "../services/products";
import type { Product } from "../types/dymmyjson";
import { FaStar } from "react-icons/fa";

export const SingleProductPage = () => {

    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [defaultImage, setDefaultImage] = useState<string>("");

    useEffect(() => {
        (async () => {
            const response = await getSingleProduct(Number(id));
            if (!response.ok) {
                return alert(response.message);
            }
            const data = response.data as Product;
            setProduct(data);
            setDefaultImage(data.images[0]);
        })();
    }, [id]);

    return <Fragment>
        {
            product ? <div className="flex min-h-screen flex-row gap-3">
                <div className="w-full flex flex-col items-center h-2/3">
                    <div className="h-100 overflow-hidden">
                        <img src={defaultImage} alt={product?.title} className="h-full hover:scale-1125duration-300" />
                    </div>
                    <div className="flex gap-2">
                        {
                            product?.images.map((image, index) => {
                                return <img src={image} alt={product?.title} key={index} className="h-36" onMouseOver={() => setDefaultImage(image)} />;
                            })
                        }
                    </div>
                </div>
                <div className="w-full">
                    <h1>{product?.title}</h1>
                    <p>{product?.description}</p>
                    <div className="flex gap-1">
                        <s className="font-bold text-lg text-slate-500">${product?.price}</s>
                        <p className="font-bold text-lg text-emerald-700">${(product?.price - (product?.price * product?.discountPercentage / 100)).toFixed(2)}</p>
                    </div>
                    <p className="flex items-center">Rating: <FaStar className={`ms-1 ${product.rating < 2 ? "text-red-600" : product.rating >= 2 && product.rating < 4 ? "text-yellow-500" : "text-green-600" }`} /> {product?.rating.toFixed(1)}</p>
                </div>
            </div> : <div className="flex justify-center pt-10">
                    <div className="w-10 h-10 border-4 rounded-full border-gray-600 animate-spin border-t-transparent border-b-transparent"></div>
            </div>
        }
    </Fragment>
};