import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import ProductModel from '../Home/TopProducts/ProductModel';
import useCart from '../Hooks/useCart';
import { decrement, increment, removeFromDb } from '../Hooks/useLocalStorage';

const CartHome = () => {
    const { cart, setCart } = useCart([]);
    const [targetProduct, setTargetProduct] = useState({});
    const [modalShow, setModalShow] = useState(false);

    const handleIncrease = (id) => {
        const newCart = [];
        for (const product of cart) {
            if (product?._id === id) {
                product.quantity += 1;
            }
            newCart.push(product)
        };
        setCart(newCart);
        increment(id);

    }
    const handleDecrease = (id) => {
        const newCart = [];
        for (const product of cart) {
            if (product?._id === id && product?.quantity > 1) {
                product.quantity -= 1;
            }
            newCart.push(product)
        };
        setCart(newCart);
        decrement(id);
    };
    const handleClick = (id) => {
        console.log(id)
        setModalShow(true);
        const product = cart?.find(pdt => pdt?._id === id)
        setTargetProduct(product)
    };

    const handleRemove = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const product = cart?.filter(pdt => pdt?._id !== id)
            setCart(product);
            removeFromDb(id);
        }
    }

    return (
        <Container className='mt-5 vh-100'>
            <ProductModel
                show={modalShow}
                setShow={setModalShow}
                onHide={() => setModalShow(false)}
                product={targetProduct}
            />
            <div className="heading-light">
                <h5 className="text-center fw-bold">
                    Check <span>Out</span>
                </h5>
            </div>
            <div className="row g-3">
                <div className="col-lg-9">
                    {
                        cart?.length === 0 ?
                            <div className='text-danger mt-5 text-center'>
                                <h4 className='fw-bold'>You didn't add any products.</h4>
                            </div>
                            :
                            <Table responsive striped bordered hover>
                                <thead>
                                    <tr>
                                        <th className='text-center'>Id</th>
                                        <th className='text-center'>Title</th>
                                        <th className='text-center'>Price</th>
                                        <th className='text-center'>Quantity</th>
                                        <th className='text-center'>Detail</th>
                                        <th className='text-center'>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart?.map(product =>
                                            <tr key={product?._id}>
                                                <td>{product?._id}</td>
                                                <td>{product?.title}</td>
                                                <td>${product?.price}</td>
                                                <td>
                                                    <div className='count-btn'>
                                                        <div onClick={() => handleDecrease(product?._id)} className='count-down'>
                                                            <i className="fa-solid fa-circle-minus"></i>
                                                        </div>
                                                        <input readOnly type="number" min={1} value={product?.quantity} id="" />
                                                        <div onClick={() => handleIncrease(product?._id)} className='count-up'>
                                                            <i className="fa-solid fa-circle-plus"></i>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className=''>
                                                    <i onClick={() => handleClick(product?._id)} className="fa-solid fa-circle-info info-btn ms-3 mt-2"></i>
                                                </td>
                                                <td className=''>
                                                    <i onClick={() => handleRemove(product?._id)} className="fa-solid fa-trash info-btn ms-3 mt-2"></i>
                                                </td>
                                            </tr>
                                        )
                                    }

                                </tbody>
                            </Table>
                    }
                </div>
                <div className="col-lg-3">
                    <Cart cart={cart} />
                </div>
            </div>
        </Container>
    );
};

export default CartHome;