// Live Search

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const searchValue =
    searchInput.value.toLowerCase();

    const products =
    document.querySelectorAll(".product-card");

    products.forEach(product => {

        const title =
        product.querySelector("h3")
        .textContent
        .toLowerCase();

        if(title.includes(searchValue)){
            product.style.display = "block";
        }
        else{
            product.style.display = "none";
        }
    });

});

// Cart product counter

let cartCount = 0;

const cartButtons =
document.querySelectorAll(".add-cart");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        document.getElementById("cartCount")
        .textContent = cartCount;

        button.innerText = "Added ✓";

        setTimeout(() => {
            button.innerText = "Add to Cart";
        },1000);

    });

});