const api = "https://dummyjson.com/products";

type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

type Dimensions = {
    width: number;
    height: number;
    depth: number;
}

type Meta = {
        createdAt: string;
        updatedAt: string;
        barcode: string,
        qrCode: string
    }

type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: "No return policy";
    minimumOrderQuantity: 48;
    meta: Meta;
    images: string[];
    thumbnail: string;
}

type ApiResponse = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

const fetchProducts = async (): Promise<ApiResponse> => {
    const response = await fetch(api);
    const data = await response.json();
    return data;
}
// ------------- OR ----------------------------------------
// const fetchProducts = async () => {
//     const response = await fetch(api);
//     const data = await response.json();
//     return data as ApiResponse;
// }

(async () => {
    const data = await fetchProducts();
    data.products.forEach(product => {
        product.reviews.forEach(review => {
            console.log(review.comment);
        })
    })
})();