import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import useProducts from '../../Hooks/useProducts';

const AllProducts = () => {
    const { products } = useProducts([]);
    const allProducts = products?.result;
    console.log(allProducts)
    const handleOnclick = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            fetch('https://agile-escarpment-29078.herokuapp.com/products', {
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
                <h5 className='fw-bold'>Manage <span>Products</span></h5 >
            </div>
            <Container>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Products ({products?.count})</th>
                            <th>Product ID</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProducts?.map(product =>
                                <tr key={product._id}>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <div className="sm-image me-3">
                                                <img src={product?.img} alt="" />
                                            </div>
                                            <small>{product?.title}</small>
                                        </div>
                                    </td>
                                    <td>{product._id}</td>
                                    <td>${product?.price}</td>
                                    <td>
                                        <Link to={`${product?._id}`}>
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