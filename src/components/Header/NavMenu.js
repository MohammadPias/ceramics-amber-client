import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.svg'
import useAuth from '../Context/AuthContext/useAuth';
import userImage from '../../images/user.png'
import { getStoredCart } from '../Hooks/useLocalStorage';

const NavMenu = () => {
    const [navSize, setnavSize] = useState("5rem");
    const [navColor, setnavColor] = useState("transparent");
    const [cartItem, setCartItem] = useState(0);

    const { user, handleSignOut } = useAuth();


    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#000000") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("6rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    // get data from local storage
    useEffect(() => {
        const cart = getStoredCart();
        console.log(cart)
        let item = 0;
        for (const key in cart) {
            item = item + cart[key];
        }
        setCartItem(item)
    }, [])
    return (
        <Navbar style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s",
            position: 'fixed',
            zIndex: '1000',
            top: '0',
            left: '0',
            right: "0"
        }} collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="100"
                        height="50"
                        className="d-inline-block align-top"
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="">
                            <h6 className='navLink'>Home </h6>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">
                            <h6 className='navLink'>Dashboard</h6>
                        </Nav.Link>
                        <Nav.Link as={Link} to="">
                            <h6 className='navLink'>Explore</h6>
                        </Nav.Link>
                        <Nav.Link as={Link} to="">
                            <h6 className='navLink'>About Us</h6>
                        </Nav.Link>
                        <Nav.Link as={Link} to="">
                            <h6 className='navLink'>Contact Us</h6>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user?.email &&
                            <Nav.Link as={Link} to="/">
                                <h5 className='navLink'>{user?.displayName.split(" ")[0]}</h5>
                            </Nav.Link>
                        }
                        {
                            user?.photoURL === null && !user?.email ?

                                <Nav.Link as={Link} to="#">
                                    <div className="user-image"><img src={userImage} alt="" /></div>
                                </Nav.Link>
                                :
                                <Nav.Link as={Link} to="#">
                                    <div className="user-image"><img src={user?.photoURL} alt="" /></div>
                                </Nav.Link>
                        }
                        {
                            !user?.email ?
                                <Nav.Link as={Link} to="/login">
                                    <button className='btn-outline'>Sign in</button>
                                </Nav.Link>
                                :
                                <Nav.Link as={Link} to="#">
                                    <button onClick={handleSignOut} className='btn-outline'>Sign out</button>
                                </Nav.Link>
                        }
                        <Nav.Link as={Link} to="">
                            <div className='mt-2'>
                                <div className="linkText">0</div>
                                <div className="icon">
                                    <i className="fa-solid fa-heart navIcon"></i>
                                </div>
                            </div>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/cartHome">
                            <div className='mt-2'>
                                <div className="linkText">{cartItem}</div>
                                <div className="icon">
                                    <i className="fa-solid fa-cart-shopping navIcon"></i>
                                </div>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
};

export default NavMenu;