import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from "react-rating";

const Product = ({ product }) => {
    const { title, img, price, rating } = product;
    return (
        <Col>
            <Card className='h-100 product-card shadow-sm'>
                <Card.Img variant="top" src={img} />
                <div className='img-cover'></div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <div>
                            <Rating
                                readonly
                                initialRating={rating}
                                emptySymbol="fa fa-star-o product-rating"
                                fullSymbol="fa fa-star product-rating "
                            />
                        </div>
                        <div>
                            <h5>Price: ${price}</h5>
                        </div>
                        <div className='hidden-btn'>
                            <div className='cart-btn'>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className='heart-btn'>
                                <i className="fa-solid fa-heart"></i>
                            </div>
                        </div>

                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;