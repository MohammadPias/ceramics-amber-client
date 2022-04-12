import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.svg'

const NavMenu = () => {
    const [navSize, setnavSize] = useState("5rem");
    const [navColor, setnavColor] = useState("transparent");
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
                        <Nav.Link eventKey={2} href="#memes">
                            <h6 className='navLink'>Home </h6>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <h6 className='navLink'>Dashboard</h6>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <h6 className='navLink'>Explore</h6>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <h6 className='navLink'>About Us</h6>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <h6 className='navLink'>Contact Us</h6>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes">
                            <button className='btn-outline'>Sign in</button>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <div className='mt-2'>
                                <div className="linkText">0</div>
                                <div className="icon">
                                    <i className="fa-solid fa-heart navIcon"></i>
                                </div>
                            </div>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <div className='mt-2'>
                                <div className="linkText">0</div>
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