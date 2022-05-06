import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const UpdateProduct = () => {
    const [product, setProduct] = useState({})

    const { productId } = useParams();
    const notify = () => {
        toast.success('Product is updated Successfully')
    };

    useEffect(() => {
        fetch(`https://agile-escarpment-29078.herokuapp.com/products/${productId}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => {
                setProduct(data);
                console.log(data)
            })
    }, [productId])
    const handleOnSubmit = (e) => {
        e.preventDefault();
        delete product._id;
        
        fetch(`https://agile-escarpment-29078.herokuapp.com/products/${productId}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result?.modifiedCount >0) {
                    notify();
                }
            })
    };
    console.log(product)
    return (
        <div className='w-75 mx-auto mt-5'>
            <fieldset className='border p-4 shadow-sm'>
                <div className="heading-light">
                    <h5 className='fw-bold'>Update <span>Products</span></h5>
                </div>
                <Form onSubmit={handleOnSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                        type="text" 
                        value={product?.title}
                        onChange={(e)=>setProduct({...product, title:e.target.value})}
                         />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Material</Form.Label>
                        <Form.Control 
                        type="text" 
                        value={product?.material} 
                        onChange={(e)=>setProduct({...product, material: e.target.value})}
                        />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea"
                            value={product?.info}
                            onChange={(e)=>setProduct({...product, info: e.target.value})}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Select 
                        defaultValue={`${product?.category}`}
                        onChange={(e)=>setProduct({...product, category: e.target.value})}
                        >
                            <option value="0">Dinner set</option>
                            <option value="1">Baby set</option>
                            <option value="2">Tea set</option>
                            <option value="3">Bath accessories</option>
                            <option value="4">Decorative items</option>
                        </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control 
                        type="text" 
                        value={product?.rating} 
                        onChange={(e)=>setProduct({...product, rating: e.target.value})}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control 
                        type="text" 
                        value={product?.price} 
                        onChange={(e)=>setProduct({...product, price: e.target.value})}
                        />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>In-stock</Form.Label>
                        <Form.Control 
                        type="text" 
                        value={product?.stock} 
                        onChange={(e)=>setProduct({...product, stock: e.target.value})}
                        />
                        </Form.Group>
                    </Row>

                    <Form.Group  controlId="exampleForm.ControlTextarea1" className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                            type='text'
                            value={product?.img}
                            onChange={(e)=>setProduct({...product, img: e.target.value})}
                            />
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-3">
                            <Form.Label>Safety</Form.Label>
                            <Form.Control
                            type='text'
                            value={product?.safety}
                            onChange={(e)=>setProduct({...product, safety: e.target.value})}
                            />
                        </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </fieldset>
        </div>
    );
};

export default UpdateProduct;