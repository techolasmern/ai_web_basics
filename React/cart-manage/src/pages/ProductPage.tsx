import { Fragment, useEffect, useState } from "react";
import type { Product } from "../types/dymmyjson";
import { getProduct } from "../services/dummyjson";
import { useNavigate, useParams } from "react-router";
import { Navbar } from "../components/NavBar";

export const ProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedImage, setSelectedImage] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            if (!id) return;
            const response = await getProduct(Number(id));
            if (!response.ok) return alert(response.message);
            setProduct(response.data || null);
            if (response.data?.images?.[0]) {
                setSelectedImage(response.data.images[0]);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div className="flex justify-center items-center min-h-screen text-lg">Loading...</div>;
    }

    const discountedPrice = (product.price - (product.price * product.discountPercentage) / 100).toFixed(2);

    return <Fragment>
        <Navbar navigate={navigate}/>
        <div className="max-w-6xl mx-auto p-6 text-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <img src={selectedImage || product.thumbnail} alt={product.title} className="w-full h-96 object-contain rounded-xl border border-gray-200 shadow-sm" />
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {product.images.map((img, index) => (
                            <img key={index} src={img} alt={`${product.title} ${index}`} onClick={() => setSelectedImage(img)} className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${selectedImage === img ? "border-blue-600" : "border-transparent"}`} />
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{product.category}</span>
                    <h1 className="text-3xl font-bold">{product.title}</h1>

                    <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold text-green-600">${discountedPrice}</span>
                        <span className="text-lg text-gray-400 line-through">${product.price.toFixed(2)}</span>
                        <span className="text-sm font-semibold text-red-500 bg-red-50 px-2 py-1 rounded">{product.discountPercentage}% OFF</span>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-semibold">★ {product.rating}</span>
                        <span>•</span>
                        <span className="font-medium text-gray-700">{product.brand}</span>
                        <span>•</span>
                        <span>SKU: {product.sku}</span>
                    </div>

                    <p className="text-gray-600 leading-relaxed">{product.description}</p>

                    <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
                        <p><strong className="text-gray-900">Availability:</strong> <span className={product.stock > 0 ? "text-green-600 font-medium" : "text-red-600 font-medium"}>{product.availabilityStatus} ({product.stock} left)</span></p>
                        <p><strong className="text-gray-900">Minimum Order:</strong> {product.minimumOrderQuantity} units</p>
                        <p><strong className="text-gray-900">Shipping:</strong> {product.shippingInformation}</p>
                        <p><strong className="text-gray-900">Warranty:</strong> {product.warrantyInformation}</p>
                        <p><strong className="text-gray-900">Return Policy:</strong> {product.returnPolicy}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {product.tags.map((tag, i) => (
                            <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">#{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-200 pt-8">
                <h2 className="text-xl font-bold mb-4">Specifications & Dimensions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-lg text-sm">
                    <div>
                        <span className="text-gray-500 block">Weight</span>
                        <span className="font-medium">{product.weight} kg</span>
                    </div>
                    <div>
                        <span className="text-gray-500 block">Width</span>
                        <span className="font-medium">{product.dimensions.width} cm</span>
                    </div>
                    <div>
                        <span className="text-gray-500 block">Height</span>
                        <span className="font-medium">{product.dimensions.height} cm</span>
                    </div>
                    <div>
                        <span className="text-gray-500 block">Depth</span>
                        <span className="font-medium">{product.dimensions.depth} cm</span>
                    </div>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-200 pt-8">
                <h2 className="text-xl font-bold mb-6">Customer Reviews</h2>
                {product.reviews && product.reviews.length > 0 ? (
                    <div className="space-y-4">
                        {product.reviews.map((review, index) => (
                            <div key={index} className="border border-gray-100 bg-white p-4 rounded-lg shadow-sm">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-semibold text-gray-900">{review.reviewerName}</span>
                                    <span className="text-xs text-gray-400">{new Date(review.date).toLocaleDateString()}</span>
                                </div>
                                <div className="text-yellow-500 text-sm mb-2">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                                <p className="text-gray-600 text-sm">{review.comment}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-sm">No reviews yet for this product.</p>
                )}
            </div>
        </div>
    </Fragment>
};