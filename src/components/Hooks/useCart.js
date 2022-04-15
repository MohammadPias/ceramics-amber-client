import { useEffect, useState } from 'react';
import { getStoredCart } from './useLocalStorage';

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const saveCart = getStoredCart();
        const keysProps = Object.keys(saveCart);
        fetch('http://localhost:5000/products/keys', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(keysProps)
        })
            .then(res => res.json())
            .then(result => {
                if (result.length) {
                    const cartProducts = result;
                    const newCart = [];
                    for (const props in saveCart) {
                        const addedProducts = cartProducts?.find(product => product?._id === props);
                        if (addedProducts) {
                            const quantity = saveCart[props];
                            addedProducts.quantity = quantity;
                            newCart.push(addedProducts);
                        }
                    };
                    setCart(newCart);
                }

            })
    }, []);

    return {
        cart,
        setCart
    }
};

export default useCart;