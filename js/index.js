const pageTitle = document.getElementById('page-title');

window.addEventListener('load', windowLoad);

function windowLoad() {
    displayMenu();
    //displayMenuCartTotal();

    loadPage('home');
}

function addCart(productId) {
    const email = getSessionLoginEmail();

    if (!email) {
        alert('Please log in to use the cart!');
        return;
    }

    let carts = getSessionCarts();

    const newCartItem = {
        'product_id': productId,
        'quantity': 1,
    };

    const cartIndex = carts.findIndex((item) => item.email === email);

    if (cartIndex !== -1) {
        const cartItems = carts[cartIndex].items;
        const productIndex = cartItems.findIndex((item) => item.product_id === productId);

        if (productIndex !== -1)
            // Product exists in cart.
            carts[cartIndex].items[productIndex].quantity += 1;
        else
            // Product does not exist in cart.
            carts[cartIndex].items.push(newCartItem);
    } else {
        // This account does not have cart information.
        carts.push({
            'email': email,
            'items': [newCartItem],
        });
    }

    setSessionCarts(carts);
    displayMenuCartTotal();
}

/*
function displayMenuCartTotal() {
    const email = getSessionLoginEmail();
    if (!email) {
        setCartTotal(0);
        return;
    }

    const cart = getSessionCart(email);
    if (!cart) {
        setCartTotal(0);
        return;
    }

    const totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);
    setCartTotal(totalItems);
}

function setCartTotal(value) {
    document.getElementById('menu-cart-total').innerHTML = value;
}
*/