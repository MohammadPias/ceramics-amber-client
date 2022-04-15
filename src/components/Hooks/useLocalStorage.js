// add key value to local storage 
const addToDb = (key, value) => {
    const exist = getCart();
    let shopping_cart = {};
    if (!exist) {
        shopping_cart[key] = value;
    }
    else {
        shopping_cart = JSON.parse(exist);
        if (shopping_cart[key]) {
            // console.log(typeof (shopping_cart[key]), typeof (value))
            const newCount = shopping_cart[key] + value;
            shopping_cart[key] = newCount
        }
        else {
            shopping_cart[key] = value;
        }
    }
    updateDb(shopping_cart)
};
// remove item from db
const removeFromDb = (id) => {
    const exist = getCart();
    if (!exist) {

    }
    else {
        const shopping_cart = JSON.parse(exist);
        delete shopping_cart[id];
        updateDb(shopping_cart);
    }
}

///  increase count
const increment = (id) => {
    const exist = getCart();
    let shopping_cart = {};
    if (!exist) {
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(exist);
        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount
        }
        else {
            shopping_cart[id] = 1;
        }
    }
    updateDb(shopping_cart)
};

// decrease count
const decrement = (id) => {
    const exist = getCart();
    let shopping_cart = {};
    if (!exist) {
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(exist);
        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] - 1;
            shopping_cart[id] = newCount
        }
        else {
            shopping_cart[id] = 1;
        }
    }
    updateDb(shopping_cart)
};

const getCart = () => localStorage.getItem('shopping_cart');
const updateDb = cart => localStorage.setItem('shopping_cart', JSON.stringify(cart));

// store shopping cart
const getStoredCart = () => {
    const exist = getCart();
    return exist ? JSON.parse(exist) : {};
};

// clear whole cart
const clearTheCart = () => {
    localStorage.removeItem('shopping_cart');
}

export {
    addToDb, removeFromDb,
    increment,
    decrement,
    getStoredCart,
    clearTheCart
}