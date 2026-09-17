const base_url = "https://dummyjson.com";

const get_api = (end_point) => {
    return base_url + end_point;
}

const request = async (url) => {
    try {
        const response = await fetch(url);
        console.log(response);
        return await response.json();
    } catch (err) {
        return null;
    }
}

const getAllProducts = async () => {
    const api = get_api("/products?skip=85");
    const response = await request(api);
    return response.products;
}

const root = document.getElementById("root");

getAllProducts().then(products => {
    products.forEach(product => {

        const disPrice = product.price * (product.price - product.discountPercentage / 100);
        const images = product.images;

        const main_image = images[0];

        const productContainer = document.createElement("div");
        productContainer.className = "product-item";
        const img = document.createElement("img");
        img.src = main_image;
        img.alt = product.title;

        img.addEventListener("mouseover", () => {
            img.src = images[1] ? images[1] : main_image;
        })
        img.addEventListener("mouseleave", () => {
            img.src = main_image;
        })

        const title = document.createElement("h2");
        title.innerHTML = product.title.length > 15 ? product.title.slice(0, 15) + "..." : product.title;

        const cartButton = document.createElement("button");
        cartButton.innerHTML = "Add to cart";
        cartButton.classList.add("cart-button");

        const priceBlock = document.createElement("div");
        priceBlock.classList.add("price-block");

        const leftPrice = document.createElement("div");
        leftPrice.innerHTML = "<b><s>$" + product.price + "</s> $" + disPrice.toFixed(2) +"</b>"

        const rightRating = document.createElement("div");
        rightRating.innerHTML = "<span>" + product.rating + "</span>";

        priceBlock.appendChild(leftPrice);
        priceBlock.appendChild(rightRating);
        productContainer.appendChild(img);
        productContainer.appendChild(title);
        productContainer.appendChild(priceBlock);
        productContainer.appendChild(cartButton);
        root.appendChild(productContainer);
    })
})
