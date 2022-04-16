import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const OrdersCard = ({ orderCart, order }) => {
    return (
        <Card style={{ minWidth: '18rem', backgroundColor: '#f2f2f2', minHeight: '20rem' }}>
            <Card.Header as='h4' className='text-center'>Order Details</Card.Header>
            <ListGroup variant="flush">
                {
                    orderCart?.length !== 0 ?
                        <ListGroup.Item style={{ backgroundColor: '#f2f2f2' }}>
                            <div className='text-center bg-green py-2'>
                                <h4 className="fw-bold">Id: #{order?._id}</h4>
                            </div>
                            <div className="heading-light text-start mt-2">
                                <h5 className="fw-bold">
                                    Shipping
                                </h5>
                                <small>{order?.address} <br />{order?.city},{order?.state} ({order?.postal}) </small>
                            </div>
                            <div className="heading-light text-start mt-2">
                                <h5 className="fw-bold">
                                    Payment
                                </h5>
                                <small>Payment Method: {order?.payment}</small>
                                <br />
                                <small className='bg-red px-5 py-2 d-inline-block mt-2 rounded-pill'>Not Paid</small>
                                <button className="btn-regular my-2">Pay </button>
                            </div>
                            <div className="heading-light text-start mt-2">
                                <h5 className="fw-bold">
                                    Contact info
                                </h5>
                                <small>Name: {order?.name}</small>
                                <br />
                                <small>Email: {order?.email}</small>
                                <br />
                                <small>Phone: {order?.phone}</small>
                                <br />
                            </div>
                            {
                                orderCart?.map(product =>
                                    <div key={product?._id} className="heading-light text-start mt-2">
                                        <div key={product?._id} className="row">
                                            <div className="col-6">
                                                <div className="d-flex align-items-center">
                                                    <div className="sm-image me-3">
                                                        <img src={product?.img} alt="" />
                                                    </div>
                                                    <small>{product?.title}</small>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="d-flex justify-content-between align-items center">
                                                    <span>${product?.price} x {product?.quantity}</span>
                                                    <span>= ${parseInt(product?.price) * parseInt(product?.quantity)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </ListGroup.Item>
                        :
                        <div className="bg-red text-center">
                            <h4>Select Your Order</h4>
                        </div>
                }
            </ListGroup>
        </Card>
    );
};

export default OrdersCard;