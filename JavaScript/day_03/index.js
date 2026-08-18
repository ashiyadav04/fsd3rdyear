const products = document.getElementById("products");

let productsData = [];

const getProductsData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    productsData = data.products;

    productsData.forEach((product) => {

        const div = document.createElement("div");
        div.className = "product-card";

        const img = document.createElement("img");
        img.src = product.thumbnail;

        const title = document.createElement("h1");
        title.innerText = product.title;

        const price = document.createElement("h2");
        price.innerText = `$${product.price}`;

        const incrementBtn = document.createElement("button");
        incrementBtn.innerText = "+";

        const decrementBtn = document.createElement("button");
        decrementBtn.innerText = "-";

        const span = document.createElement("span");
        span.innerText = "0";

        const addBtn = document.createElement("button");
        addBtn.innerText = "Add to Cart";

        let counter = 0;

        // Counter container
        const counterDiv = document.createElement("div");
        counterDiv.className = "counter";

        counterDiv.appendChild(decrementBtn);
        counterDiv.appendChild(span);
        counterDiv.appendChild(incrementBtn);

        // Add elements to card
        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(counterDiv);
        div.appendChild(addBtn);

        products.appendChild(div);

        // +
        incrementBtn.addEventListener("click", () => {
            counter++;
            span.innerText = counter;
        });

        // -
        decrementBtn.addEventListener("click", () => {
            if (counter > 0) {
                counter--;
                span.innerText = counter;
            }
        });

        // Add to cart
        addBtn.addEventListener("click", () => {

            if (counter === 0) {
                alert("Please select quantity first");
                return;
            }

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existingProduct = cart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                existingProduct.quantity += counter;
            } else {
                cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.thumbnail,
                    quantity: counter
                });
            }

            localStorage.setItem("cart", JSON.stringify(cart));

            console.log("Cart:", cart);

            alert("Product added to cart!");

            counter = 0;
            span.innerText = "0";
        });
    });
};

getProductsData();