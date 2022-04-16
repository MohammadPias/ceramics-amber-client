import React, { useState } from 'react';
import { Card, Form, Row, Spinner } from 'react-bootstrap';
import Product from '../../Home/TopProducts/Product';
import useProducts from '../../Hooks/useProducts';

const Shop = () => {
    const [selectValue, setSelectValue] = useState();
    const { products } = useProducts([]);

    let filterProducts = [];
    if (selectValue >= 0) {
        filterProducts = products?.filter(product => product?.category === selectValue);
    }
    else {
        filterProducts = products
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setSelectValue(e.target.value)
    };
    console.log(filterProducts)
    return (
        <div className=''>
            <div className='heading-light'>
                <h2><span>Feature</span> Products</h2>
            </div>
            {
                filterProducts?.length === 0 ?
                    <div className='spinner-container'>
                        <Spinner animation="grow" />
                    </div>
                    :
                    <div className="row mt-3">
                        <div className="col-lg-9">
                            <div className='min-vh-100'>
                                <Row xs={1} md={2} lg={3} className="g-4">
                                    {
                                        filterProducts?.map(product => <Product
                                            key={product._id}
                                            product={product}
                                        />)
                                    }
                                </Row>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <Card style={{ minWidth: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>Filter</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        <Form.Select value={selectValue} onChange={handleSubmit} aria-label="Default select example">
                                            <option>All products</option>
                                            <option value="0">Dinner set</option>
                                            <option value="1">Baby set</option>
                                            <option value="2">Tea set</option>
                                            <option value="3">Bath accessories</option>
                                            <option value="4">Decorative items</option>
                                        </Form.Select>
                                    </Card.Subtitle>

                                </Card.Body>
                            </Card>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Shop;