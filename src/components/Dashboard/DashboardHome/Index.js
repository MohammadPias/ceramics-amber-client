import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/AuthContext/useAuth';

const Index = () => {
    const { user, admin } = useAuth();
    return (
        <Container>
            {
                user?.email && admin ?
                    <div className="admin-container">
                        <div className="row g-3">
                            <div className="col-sm-6 col-lg-3">
                                <Link to='/dashboard/users' className='link-style'>
                                    <div className="div-container bg-green d-flex justify-content-center align-items-center shadow-sm">
                                        <h5 className='fw-bold text-center'>Manage Users</h5>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <Link to='/dashboard/manageOrders' className='link-style'>
                                    <div className="div-container bg-blue d-flex justify-content-center align-items-center shadow-sm">
                                        <h5 className='fw-bold text-center'>Manage Orders</h5>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <Link to='/dashboard/addProducts' className='link-style'>
                                    <div className="div-container bg-gold d-flex justify-content-center align-items-center shadow-sm">
                                        <h5 className='fw-bold text-center'>Add Product</h5>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <Link to='/dashboard/allProducts' className='link-style'>

                                    <div className="div-container bg-red d-flex justify-content-center align-items-center shadow-sm">
                                        <h5 className='fw-bold text-center'>Manage Products</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    :

                    <div className="user-container">
                        <div className="row g-3">
                            <div className="col-sm-6 col-lg-3">
                                <Link to='/dashboard/shop' className='link-style'>

                                    <div className="div-container bg-green d-flex justify-content-center align-items-center shadow-sm">
                                        <h5 className='fw-bold text-center'>Shop</h5>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <Link to='/dashboard/orders' className='link-style'>

                                    <div className="div-container bg-blue d-flex justify-content-center align-items-center shadow-sm">
                                        <h5 className='fw-bold text-center'>My Orders</h5>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <Link to='/cartHome' className='link-style'>

                                    <div className="div-container bg-gold d-flex justify-content-center align-items-center shadow-sm">
                                        <h5 className='fw-bold text-center'>My Cart</h5>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <Link to='/wishlist' className='link-style'>

                                    <div className="div-container bg-red d-flex justify-content-center align-items-center shadow-sm">
                                        <h5 className='fw-bold text-center'>Wishlist</h5>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
            }
        </Container>
    );
};

export default Index;