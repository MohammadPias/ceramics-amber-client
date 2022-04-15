import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from "react-rating";
import ProductModel from './ProductModel';

const Product = ({ product }) => {
    const [targetProduct, setTargetProduct] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const { title, img, price, rating } = product;

    const handleClick = () => {
        setModalShow(true);
        setTargetProduct(product)
    }
    return (
        <Col>
            <ProductModel
                show={modalShow}
                setShow={setModalShow}
                onHide={() => setModalShow(false)}
                product={targetProduct}
            />
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
                            <div onClick={handleClick} className='cart-btn'>
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