const sessionCarts = 'carts';
const sessionProducts = 'products';
const sessionAccounts = 'accounts';
const sessionLoginEmail = 'login_email';

function getSessionLoginEmail() {
    return JSON.parse(sessionStorage.getItem(sessionLoginEmail));
}

function setSessionLoginEmail(email) {
    sessionStorage.setItem(sessionLoginEmail, JSON.stringify(email));
}

function removeSessionLoginEmail() {
    sessionStorage.removeItem(sessionLoginEmail);
}

function getSessionCarts() {
    return JSON.parse(sessionStorage.getItem(sessionCarts)) || [];
}

function setSessionCarts(carts) {
    sessionStorage.setItem(sessionCarts, JSON.stringify(carts));
}

function getSessionCart(email) {
    const carts = getSessionCarts();
    return carts.find((item) => item.email === email);
}

function getSessionProducts() {
    return JSON.parse(sessionStorage.getItem(sessionProducts)) || [];
}

function setSessionProducts(products) {
    sessionStorage.setItem(sessionProducts, JSON.stringify(products));
}

function getSessionProduct(product_id) {
    const products = JSON.parse(sessionStorage.getItem(sessionProducts)) || [];
    return products.find((item) => item.id === product_id);;
}

function getSessionAccounts() {
    return JSON.parse(sessionStorage.getItem(sessionAccounts)) || [];
}

function setSessionAccounts(accounts) {
    sessionStorage.setItem(sessionAccounts, JSON.stringify(accounts));
}

function authenticate(email, password) {
    const accounts = getSessionAccounts();
    return accounts.some(item => item.email === email && item.password === password);
}