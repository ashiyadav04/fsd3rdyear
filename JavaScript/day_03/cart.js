const cartProducts = document.getElementById("cart-products");
const cartTotal = document.getElementById("cart-total");

const showProducts = () => {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    console.log("Cart from localStorage:", cart);

    cartProducts.innerHTML = "";

    if (cart.length === 0) {
        cartProducts.innerHTML = "<h2>Your cart is empty</h2>";
        cartTotal.innerText = "";
        return;
    }

    let total = 0;

    cart.forEach((product) => {

        const div = document.createElement("div");
        div.className = "cart-card";

        const img = document.createElement("img");
        img.src = product.image;

        const title = document.createElement("h2");
        title.innerText = product.title;

        const price = document.createElement("p");
        price.innerText = `Price: $${product.price}`;

        const quantity = document.createElement("p");
        quantity.innerText = `Quantity: ${product.quantity}`;

        const subtotal = document.createElement("p");

        const productTotal = product.price * product.quantity;

        subtotal.innerText =
            `Subtotal: $${productTotal.toFixed(2)}`;

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(quantity);
        div.appendChild(subtotal);
        div.appendChild(removeBtn);

        cartProducts.appendChild(div);

        total += productTotal;

        removeBtn.addEventListener("click", () => {

            const updatedCart = cart.filter(
                (item) => item.id !== product.id
            );

            localStorage.setItem(
                "cart",
                JSON.stringify(updatedCart)
            );

            showProducts();
        });
    });

    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
};

showProducts();