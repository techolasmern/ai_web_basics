const cart_items = [];

// ----------------- base url ----------------
const base_url = "https://dummyjson.com";

// ----------------- get api (end point -> path after the base url) ----------------
const get_api = (end_point) => { // end_point -> example: /products?skip=85 (getting from line number 21)
    return base_url + end_point; // returns example: https://dummyjson.com/products?skip=85
}

const request = async (url) => { // url -> example: https://dummyjson.com/products?skip=85 (getting from line number 22)
    try {
        const response = await fetch(url);
        return await response.json(); // return response
    } catch (err) {
        return null;
    }
}

const getAllProducts = async () => {
    const api = get_api("/products?skip=85"); // example: https://dummyjson.com/products?skip=85
    const response = await request(api);
    return response.products; // return only products array
}

const root = document.getElementById("root");
root.style.display = "block"; // grid by default (to avoid conflict with loading spinner);
const cartBadgeCount = document.getElementById("cart-badge");
const loading = document.getElementById("loading");

getAllProducts().then(products => {
    loading.style.display = "none"; // hide loading spinner after getting products
    root.style.display = "grid"; // reset to grid after loading products completed.
    products.forEach(product => {

        const disPrice = product.price * (1 - product.discountPercentage / 100); // discounted price
        const images = product.images; // product image
        const main_image = images[0]; // main image

        // -------------- product container / card start --------------
        const productContainer = document.createElement("div");
        productContainer.className = "product-item";

        // -------------- image container / wrapper --------------------
        const imgWrapper = document.createElement("div");
        imgWrapper.className = "img-wrapper";

        // ---------------- image ----------------
        const img = document.createElement("img");
        img.src = main_image;
        img.alt = product.title;

        // ----------------- image events (hover and leave) -----------------
        img.addEventListener("mouseover", () => {
            img.src = images[1] ? images[1] : main_image; // if images[1] exist, use it, else use main image
        })
        img.addEventListener("mouseleave", () => {
            img.src = main_image; // while mouse leave reset to main image
        })

        // ----------------- append image to image wrapper ----------------
        imgWrapper.appendChild(img);
        // ----------------- append image wrapper to product container ----------------
        productContainer.appendChild(imgWrapper);

        // ----------------- add title ----------------
        const title = document.createElement("h2");
        title.innerHTML = product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title;

        // ----------------- append title to product container ----------------
        productContainer.appendChild(title);

        // ----------------- add price container / wrapper ----------------
        const priceWrapper = document.createElement("div");
        priceWrapper.classList.add("price-block");

        // ----------------- add price block ----------------
        const leftPrice = document.createElement("div");
        leftPrice.innerHTML = "<b>$" + disPrice.toFixed(2) + "</b> <s>$" + product.price + "</s>";

        // ----------------- add rating block ----------------
        const rightRating = document.createElement("div");
        rightRating.innerHTML = "<span>" + product.rating + "</span>";

        // ------------------- append both blocks to price wrapper ----------------
        priceWrapper.appendChild(leftPrice);
        priceWrapper.appendChild(rightRating);

        // ------------------- append price wrapper to product container ----------------
        productContainer.appendChild(priceWrapper);

        // ----------------- add cart button ----------------
        const cartButton = document.createElement("button");
        cartButton.innerHTML = "Add to Cart";
        cartButton.classList.add("cart-button");

        // ----------------- add click event (add to cart) to cart button ----------------
        cartButton.addEventListener("click", () => {
            const itemIndex = cart_items.findIndex(item => item.id === product.id);
            // if item is not in cart, add it with qty 1, else increment qty
            if (itemIndex == -1) {
                cart_items.push({ ...product, qty: 1 });
                qtyWrapper.style.display = "flex";
                cartButton.style.display = "none";
                cartBadgeCount.innerText = cart_items.length;
                cartBadgeCount.classList.add("bump");
                setTimeout(() => {
                    cartBadgeCount.classList.remove("bump");
                }, 300);
            } else {
                cart_items[itemIndex].qty += 1;
            }
        })

        // ----------------- append cart button to product container ----------------
        productContainer.appendChild(cartButton);

        // ----------------- add qty container / wrapper ----------------
        const qtyWrapper = document.createElement("div");
        qtyWrapper.classList.add("qty-container"); // hidden by default (check style.css);

        // ----------------- add qty display section ----------------
        const qty_span = document.createElement("span");
        qty_span.innerHTML = 1;
        qty_span.classList.add("qty");

        // ----------------- add qty decrement button ----------------
        const qtyDecrement = document.createElement("button");
        qtyDecrement.innerHTML = "-";
        qtyDecrement.classList.add("qty-button");

        // ----------------- add click event (decrement qty) to qty decrement button ----------------
        qtyDecrement.addEventListener("click", () => {
            const itemIndex = cart_items.findIndex(item => item.id === product.id);
            if (itemIndex == -1) return;
            // if qty is 1, remove item from cart & show cart button
            if (cart_items[itemIndex].qty <= 1) {
                qtyWrapper.style.display = "none";
                cartButton.style.display = "block";
                cart_items.splice(itemIndex, 1);
                cartBadgeCount.innerText = cart_items.length;
                return;
            }
            cart_items[itemIndex].qty -= 1;
            qty_span.innerHTML = cart_items[itemIndex].qty;
        })

        // ----------------- add qty increment button ----------------
        const qtyIncrement = document.createElement("button");
        qtyIncrement.innerHTML = "+";
        qtyIncrement.classList.add("qty-button");

        // ----------------- add click event (increment qty) to qty increment button ----------------
        qtyIncrement.addEventListener("click", () => {
            const itemIndex = cart_items.findIndex(item => item.id === product.id);
            if (itemIndex == -1) return;
            cart_items[itemIndex].qty += 1;
            qty_span.innerHTML = cart_items[itemIndex].qty;
        })

        // ----------------- append qty buttons and qty to qty wrapper in an order ----------------
        qtyWrapper.appendChild(qtyDecrement); // left 
        qtyWrapper.appendChild(qty_span); // center
        qtyWrapper.appendChild(qtyIncrement); // right

        // --------------------- append qty wrapper to product container ----------------
        productContainer.appendChild(qtyWrapper);

        // -------------------- final append product container to root ----------------
        root.appendChild(productContainer);

        // pack up 😶‍🌫️
    })
})