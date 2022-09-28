import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavMenus = () => {
    return (
        <Navbar sticky="top" style={{ fontFamily: 'EssenceFont' }} collapseOnSelect expand="lg" bg="transparent" variant="light">
            <Container>
                <Navbar.Brand href="#home" className='fs-2 fw-bold'>Ceramic-Amber</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto fs-4">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Dashboard</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>

                    </Nav>
                    <Nav className="fs-4">
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavMenus;