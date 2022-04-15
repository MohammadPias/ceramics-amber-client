import React from 'react';
import { Container } from 'react-bootstrap';
import Cart from '../Cart/Cart';

const PlaceOrder = () => {
    return (
        <Container>
            <div className="row">
                <div className="col-lg-8">

                </div>
                <div className="col-lg-4">
                    <Cart />
                </div>
            </div>
        </Container>
    );
};

export default PlaceOrder;