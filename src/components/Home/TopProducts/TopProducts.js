import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import Product from './Product';

const TopProducts = () => {
    const { products } = useProducts([]);
    return (
        <Container>
            <div className='min-vh-100'>
                <div className='heading-light'>
                    <h2><span>Feature</span> Products</h2>
                </div>
                <Row xs={1} md={3} lg={4} className="g-4 mt-4">
                    {
                        products?.slice(0, 8).map(product => <Product
                            key={product._id}
                            product={product}
                        />)
                    }
                </Row>
            </div>
        </Container>
    );
};

export default TopProducts;