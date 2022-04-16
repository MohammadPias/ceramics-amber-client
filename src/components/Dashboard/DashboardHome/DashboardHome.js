import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../Context/AuthContext/useAuth';
import './DashboardHome.css';
import lightLogo from '../../../images/dashboard.png'
import { Badge } from 'react-bootstrap';

const DashboardHome = () => {
    const [display, setDisplay] = useState({});
    const { user, admin, handleSignOut } = useAuth();

    const displayBlock = { display: 'block' };
    const displayNone = { display: 'none' };
    const btnClose = () => {
        setDisplay(displayNone);
    }
    const btnOpen = () => {
        setDisplay(displayBlock);
    }
    return (
        <div>
            <div className="w3-sidebar w3-bar-block w3-collapse w3-card w3-animate-left side-bg" style={display} id="mySidebar">
                <button className="w3-bar-item w3-button w3-large w3-hide-large" onClick={btnClose}>Close &times;</button>
                <Link to="" className="w3-bar-item  side-link py-3">
                    <div className="d-flex align-items-center justify-content-center">
                        <img style={{ width: '70%' }} src={lightLogo} alt="" />
                    </div>
                </Link>
                {
                    user?.email &&
                    <Link to="" className="w3-bar-item side-link">
                        <div className="d-flex align-items-center">
                            <div className='user-image me-3'>
                                <img src={user?.photoURL} alt="" />
                            </div>
                            <h6 className='me-2'>{user?.displayName.split(' ')[0]}</h6>
                            {
                                user?.email && admin &&

                                <Badge pill bg="success">
                                    admin
                                </Badge>
                            }
                        </div>
                    </Link>
                }
                <Link to="/" className="w3-bar-item w3-button side-link">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-home"></i>
                        <h6 className="ms-4">Home</h6>
                    </div>
                </Link>
                <Link to="orders" className="w3-bar-item w3-button side-link">
                    <div className="d-flex align-items-center">
                        <i className="fa-brands fa-first-order-alt"></i>
                        <h6 className="ms-4">My Orders</h6>
                    </div>
                </Link>
                <Link to="shop" className="w3-bar-item w3-button side-link">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-store"></i>
                        <h6 className="ms-4">Shop</h6>
                    </div>
                </Link>
                {
                    user?.email && admin &&
                    <Link to="users" className="w3-bar-item w3-button side-link">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-user-plus"></i>
                            <h6 className="ms-4">Users</h6>
                        </div>
                    </Link>
                }
                {
                    user?.email && admin &&
                    <Link to="manageOrders" className="w3-bar-item w3-button side-link">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-cogs"></i>
                            <h6 className="ms-4">Manage Orders</h6>
                        </div>
                    </Link>
                }
                {
                    user?.email && admin &&
                    <Link to="addProducts" className="w3-bar-item w3-button side-link">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-square-plus"></i>
                            <h6 className="ms-4">Add Product</h6>
                        </div>
                    </Link>
                }
                {
                    user?.email && admin &&
                    <Link to="allProducts" className="w3-bar-item w3-button side-link">
                        <div className="d-flex align-items-center">
                            <i className="fa-solid fa-border-all"></i>
                            <h6 className="ms-4">Manage Products</h6>
                        </div>
                    </Link>
                }
                <Link to="#" className="w3-bar-item w3-button side-link">
                    <div className="d-flex align-items-center">
                        <i className="fas fa-sign-out-alt"></i>
                        <button onClick={handleSignOut} className="border-0 ms-4 fw-bold" style={{ backgroundColor: 'transparent' }}>Log Out</button>
                    </div>
                </Link>
            </div>

            <div className="w3-main" style={{ marginLeft: '200px' }}>
                <div style={{ color: '#14a6d0' }}>
                    <button style={{ border: '2px solid grey', color: 'grey', borderRadius: '6px' }} className="w3-button w3-xlarge w3-hide-large" onClick={btnOpen}>&#9776;</button>
                    <div className="w3-container shadow-sm">
                        <h3 className="text-center fw-bold my-3">{
                            user?.email && admin ? "Admin Dashboard" : "User Dashboard"
                        }</h3>
                    </div>
                </div>

                <div className="w3-container mt-3">
                    <Outlet />
                </div>

            </div>
        </div >
    );
};

export default DashboardHome;