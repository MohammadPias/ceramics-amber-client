import React from 'react';

const useLocalStorage = () => {
    const addToDb = (key, value) => {
        const exist = getCart();
        let shopping_cart = {};
        if (!exist) {
            shopping_cart[key] = value;
        }
        else {
            shopping_cart = JSON.parse(exist);
            if (shopping_cart[key]) {
                shopping_cart += 1;
            };
            let pen;
            const obj = { pen: 10, book: 20 };
            if (obj[pen]) {
                obj[pen] += 1
            }
        }
    }
    const increment = () => {

    }
    const decrement = () => {

    };
    const getCart = () => localStorage.getItem('shopping_cart');
    return (
        <div>

        </div>
    );
};

export default useLocalStorage;