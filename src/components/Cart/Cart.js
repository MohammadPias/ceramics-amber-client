import React, { useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
    // const [discount, setDiscount] = useState();
    const [inputChange, setInputChange] = useState();

    let subTotal = 0;
    for (const product of cart) {
        subTotal = subTotal + parseInt(product?.price) * parseInt(product?.quantity);
    };
    const shipping = subTotal > 300 ? 25 : 15;
    const tax = (subTotal + shipping) * 10 / 100;
    let total = subTotal + tax + shipping;

    const handleOnchange = (e) => {
        setInputChange(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(inputChange)
        if (inputChange === 'amber') {
            total = total - total * 20 / 100;
        }
    }
    return (
        <div>
            <Card style={{ minWidth: '18rem' }}>
                <Card.Header as="h5">My Cart</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <div className="d-flex justify-content-between align-items-center">
                            <h6>Subtotal: </h6>
                            <h5>${subTotal}</h5>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-flex justify-content-between align-items-center">
                            <h6>Shipping: </h6>
                            <h5>${shipping}</h5>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-flex justify-content-between align-items-center">
                            <h6>Tax: </h6>
                            <h5>${tax}</h5>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="">
                            <h6>Coupon: </h6>
                            <form onSubmit={handleOnSubmit} className="coupon-form d-flex justify-content-between">
                                <input onChange={handleOnchange} type="text" />
                                <Button type='submit' className='mt-2' variant="secondary" size="sm">Check</Button>
                            </form>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-flex justify-content-between align-items-center">
                            <h5>Total: </h5>
                            <h5>${total}</h5>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to='/' className='text-decoration-none'><button className="btn-outline-sm">Shop</button></Link>
                            <Link to='/placeOrder' className='text-decoration-none'><button className="btn-regular">Order</button></Link>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
};

export default Cart;