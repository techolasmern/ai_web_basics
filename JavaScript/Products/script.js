const cart_items = [];

const base_url = "https://dummyjson.com";

const get_api = (end_point) => {
    return base_url + end_point;
}

const request = async (url) => {
    try {
        const response = await fetch(url);
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
root.style.display = "block";
const cartBadgeCount = document.getElementById("cart-badge");
const loading = document.getElementById("loading");

getAllProducts().then(products => {
    loading.style.display = "none";
    root.style.display = "grid";
    products.forEach(product => {

        const disPrice = product.price * (1 - product.discountPercentage / 100);
        const images = product.images;
        const main_image = images[0];

        const productContainer = document.createElement("div");
        productContainer.className = "product-item";

        const imgWrapper = document.createElement("div");
        imgWrapper.className = "img-wrapper";

        const img = document.createElement("img");
        img.src = main_image;
        img.alt = product.title;

        img.addEventListener("mouseover", () => {
            img.src = images[1] ? images[1] : main_image;
        })
        img.addEventListener("mouseleave", () => {
            img.src = main_image;
        })

        imgWrapper.appendChild(img);

        const title = document.createElement("h2");
        title.innerHTML = product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title;

        const cartButton = document.createElement("button");
        cartButton.innerHTML = "Add to Cart";
        cartButton.classList.add("cart-button");

        const qtyContainer = document.createElement("div");

        cartButton.addEventListener("click", () => {
            const itemIndex = cart_items.findIndex(item => item.id === product.id);
            if (itemIndex == -1) {
                cart_items.push({ ...product, qty: 1 });
                qtyContainer.style.display = "flex";
                cartButton.style.display = "none";
                cartBadgeCount.innerText = cart_items.length;
                cartBadgeCount.classList.add("bump");
                setTimeout(() => {
                    cartBadgeCount.classList.remove("bump");
                }, 300);
            } else {
                cart_items[itemIndex].qty += 56;
                // a = a + b; a += b;
                // a = a - b; a -= b;
                // a = a * b; a *= b;
                // a = a / b; a /= b;
            }
        })

        qtyContainer.style.display = "none";
        const qtyDecrement = document.createElement("button");
        qtyDecrement.innerHTML = "-";
        qtyDecrement.classList.add("qty-button");
        const qty = document.createElement("span");
        qty.innerHTML = 0;
        qty.classList.add("qty");
        const qtyIncrement = document.createElement("button");
        qtyIncrement.innerHTML = "+";
        qtyIncrement.classList.add("qty-button");

        const priceBlock = document.createElement("div");
        priceBlock.classList.add("price-block");

        const leftPrice = document.createElement("div");
        leftPrice.innerHTML = "<b>$" + disPrice.toFixed(2) + "</b> <s>$" + product.price + "</s>";

        const rightRating = document.createElement("div");
        rightRating.innerHTML = "<span>" + product.rating + "</span>";

        priceBlock.appendChild(leftPrice);
        priceBlock.appendChild(rightRating);

        qtyContainer.appendChild(qtyDecrement);
        qtyContainer.appendChild(qty);
        qtyContainer.appendChild(qtyIncrement);

        productContainer.appendChild(imgWrapper);
        productContainer.appendChild(title);
        productContainer.appendChild(priceBlock);
        productContainer.appendChild(cartButton);
        productContainer.appendChild(qtyContainer);

        root.appendChild(productContainer);
    })
})