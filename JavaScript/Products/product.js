const search = new URLSearchParams(window.location.search);
const id = search.get("id") || 1; // Defaults to ID 1 if no 'id' parameter is provided

const base_url = "https://dummyjson.com";

const get_api = (end_point) => base_url + end_point;

const request = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        return null;
    }
};

const getProduct = async () => {
    const api = get_api(`/products/${id}`);
    const response = await request(api);
    return response;
};

// Render function built purely with DOM element creation
const renderProductPage = (product) => {
    const app = document.getElementById("app");
    app.innerHTML = ""; // Clear loading message

    if (!product || product.message) {
        app.textContent = "Product not found.";
        return;
    }

    // --- Top Wrapper (Left Image Gallery + Right Details) ---
    const productContainer = document.createElement("div");
    productContainer.className = "product-container";

    // 1. LEFT SIDE: Image Gallery
    const gallery = document.createElement("div");
    gallery.className = "gallery";

    const mainImg = document.createElement("img");
    mainImg.className = "main-img";
    mainImg.src = product.thumbnail;
    mainImg.alt = product.title;

    const thumbnailsDiv = document.createElement("div");
    thumbnailsDiv.className = "thumbnails";

    const images = product.images && product.images.length ? product.images : [product.thumbnail];
    images.forEach((imgUrl, index) => {
        const thumb = document.createElement("img");
        thumb.className = `thumb ${index === 0 ? "active" : ""}`;
        thumb.src = imgUrl;
        thumb.alt = `${product.title} ${index + 1}`;

        thumb.addEventListener("click", () => {
            mainImg.src = imgUrl;
            thumbnailsDiv.querySelectorAll(".thumb").forEach((t) => t.classList.remove("active"));
            thumb.classList.add("active");
        });

        thumbnailsDiv.appendChild(thumb);
    });

    gallery.appendChild(mainImg);
    gallery.appendChild(thumbnailsDiv);

    // 2. RIGHT SIDE: Product Details
    const details = document.createElement("div");
    details.className = "details";

    const categoryBadge = document.createElement("span");
    categoryBadge.className = "badge";
    categoryBadge.textContent = product.category.toUpperCase();

    const title = document.createElement("h1");
    title.textContent = product.title;
    title.style.margin = "0";

    const brand = document.createElement("p");
    brand.textContent = `Brand: ${product.brand || "Generic"}`;
    brand.style.color = "#64748b";

    const priceRow = document.createElement("div");
    priceRow.className = "price-row";

    const price = document.createElement("span");
    price.textContent = `$${product.price}`;

    const discount = document.createElement("span");
    discount.className = "discount";
    discount.textContent = `${product.discountPercentage}% OFF`;

    priceRow.appendChild(price);
    priceRow.appendChild(discount);

    const descriptionHeader = document.createElement("h3");
    descriptionHeader.textContent = "Overview";

    const description = document.createElement("p");
    description.textContent = product.description;

    const stock = document.createElement("p");
    stock.innerHTML = `<strong>Availability:</strong> ${product.stock} units in stock (${product.availabilityStatus})`;

    details.appendChild(categoryBadge);
    details.appendChild(title);
    details.appendChild(brand);
    details.appendChild(priceRow);
    details.appendChild(descriptionHeader);
    details.appendChild(description);
    details.appendChild(stock);

    // Append Left and Right sides to top wrapper
    productContainer.appendChild(gallery);
    productContainer.appendChild(details);

    // --- 3. BOTTOM: Reviews Section ---
    const reviewsContainer = document.createElement("div");
    reviewsContainer.className = "reviews-container";

    const reviewsHeader = document.createElement("h2");
    reviewsHeader.textContent = `Customer Reviews (${product.reviews ? product.reviews.length : 0})`;
    reviewsContainer.appendChild(reviewsHeader);

    if (product.reviews && product.reviews.length > 0) {
        product.reviews.forEach((review) => {
            const reviewCard = document.createElement("div");
            reviewCard.className = "review-card";

            const reviewer = document.createElement("strong");
            reviewer.textContent = review.reviewerName;

            const rating = document.createElement("div");
            rating.className = "star-rating";
            rating.textContent = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

            const comment = document.createElement("p");
            comment.textContent = review.comment;

            const date = document.createElement("small");
            date.style.color = "#94a3b8";
            date.textContent = new Date(review.date).toLocaleDateString();

            reviewCard.appendChild(reviewer);
            reviewCard.appendChild(rating);
            reviewCard.appendChild(comment);
            reviewCard.appendChild(date);

            reviewsContainer.appendChild(reviewCard);
        });
    } else {
        const noReviews = document.createElement("p");
        noReviews.textContent = "No reviews available for this product.";
        reviewsContainer.appendChild(noReviews);
    }

    // Append everything to the app element
    app.appendChild(productContainer);
    app.appendChild(reviewsContainer);
};

// Execute product fetching and rendering
getProduct().then((responseData) => {
    renderProductPage(responseData);
});