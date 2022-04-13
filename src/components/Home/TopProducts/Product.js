import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Product = ({ product }) => {
    const { title, img, price, rating } = product;
    return (
        <Col>
            <Card className='h-100'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <div className='product-rating'>

                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;