"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api = "https://dummyjson.com/products";
const fetchProducts = async () => {
    const response = await fetch(api);
    const data = await response.json();
    return data;
};
(async () => {
    const data = await fetchProducts();
    data.products.forEach(product => {
        product.reviews.forEach(review => {
            console.log(review.comment);
        });
    });
})();
//# sourceMappingURL=dummyjson.js.map