import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import useProducts from '../../Hooks/useProducts';

const AllProducts = () => {
    const { products } = useProducts([]);
    const handleOnclick = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            fetch('http://localhost:5000/products', {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ id })
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        toast.success("Product is deleted successfully")
                    }
                })
        }
    }
    return (
        <div>
            <div className="heading-light">
                <h5 className='fw-bold'>all <span>Products</span></h5 >
            </div>
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(product =>
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product?.title}</td>
                                    <td>${product?.price}</td>
                                    <td>
                                        <Link to={`/dashboard/allProducts/${product?._id}`}>
                                            <i className="fa-solid fa-pen-to-square i-link"></i>
                                        </Link>
                                    </td>
                                    <td><i onClick={() => handleOnclick(product?._id)} className="fa-solid fa-trash i-link"></i></td>
                                </tr>
                            )
                        }

                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default AllProducts;