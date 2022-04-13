import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import footerLogo from '../../images/logo2.svg'
import FooterBottom from './Footerbottom';

const Footer = () => {
    return (
        <div>
            <div className='bg bg-dark text-white'>
                <Container className='p-5'>
                    <div className='row'>
                        <div className=" col-md-6 col-lg-3 mt-5">
                            <div>
                                <div className='mb-3'>
                                    <img style={{ width: '50%' }} src={footerLogo} alt="" />
                                </div>
                                <small style={{ color: 'lightgray' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, veniam?</small>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-5">
                            <h6>Address</h6>
                            <div className='footer-icon'>
                                <i className="fa-solid fa-location-dot"></i>
                                <small>504/3, Fatema Villa, 3rd floor, Uttara, Dahaka</small>
                            </div>
                            <div className='footer-icon'>
                                <i className="fa-solid fa-phone"></i>
                                <small>+8801300000000</small>
                            </div>
                            <div className='footer-icon'>
                                <i className="fa-solid fa-tty"></i>
                                <small>+8800001111</small>
                            </div>
                            <div className='footer-icon'>
                                <i className="fa-solid fa-envelope"></i>
                                <small>ceramics@gmail.com</small>
                            </div>
                        </div >
                        <div className="col-md-6 col-lg-3 mt-5">
                            <h6>Social Media</h6>
                            <div className='footer-icon'>
                                <i className="fa-brands fa-facebook"></i>
                                <Link to="/"><small>Facebook</small></Link>
                            </div>
                            <div className='footer-icon'>
                                <i className="fa-brands fa-instagram"></i>
                                <Link to="/"><small>Instagram</small></Link>
                            </div >
                            <div className='footer-icon'>
                                <i className="fa-brands fa-twitter"></i>
                                <Link to="/"><small>Twitter</small></Link>
                            </div >
                            <div className='footer-icon'>
                                <i className="fa-brands fa-facebook"></i>
                                <Link to="/"><small>Facebook</small></Link>
                            </div >

                        </div >
                        <div className="col-md-6 col-lg-3 mt-5">
                            <h6>Information</h6>
                            <div className='footer-icon'>
                                <Link to='/'><small>About Us</small></Link>
                            </div>
                            <div className='footer-icon'>
                                <Link to='/'><small>Delivery Information</small></Link>
                            </div>
                            <div className='footer-icon'>
                                <Link to='/'><small>Privacy Policy</small></Link>
                            </div>
                            <div className='footer-icon'>
                                <Link to='/'><small>Terms & Condition</small></Link>
                            </div>

                        </div>
                    </div >
                </Container >
            </div >
            <FooterBottom />
        </div >
    );
};

export default Footer;