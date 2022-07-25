let cart = [];

if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}
export const addToCart = (newProduct, next) => {
    const existProduct = cart.find((item) => item.id === newProduct.id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity += +newProduct.quantity;
        existProduct.total += +newProduct.quantity * existProduct.priceNew;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const increaseQty = (id) => {
    console.log(id, cart);
    const productInCart = cart.find((item) => {
        console.log(item)
    });
    productInCart.quantity++;
    productInCart.total += productInCart.priceNew;
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const decreaseQty = (id, next) => {
    const currentProduct = cart.find((item) => item.id == id);
    currentProduct.quantity--;
    const total = +currentProduct.priceNew * currentProduct.quantity;
    currentProduct.total = total;

    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Ban co muon xoa khong?");
        if (confirm) {
            cart = cart.filter((item) => item.id != id);
        } else {
            currentProduct.quantity = 1;
            currentProduct.total = currentProduct.quantity * currentProduct.priceNew;
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        next();
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const removeItemInCart = (id, next) => {
    const confirm = window.confirm("Ban co muon xoa khum?");
    if (confirm) {
        cart = cart.filter((item) => item.id != id);
        localStorage.setItem("cart", JSON.stringify(cart));
        next();
    }
};
