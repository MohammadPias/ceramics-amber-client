import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import slideImage from '../../../images/slide-image.png'
import './Testimonial.css';
import img from '../../../images/john.png'

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    const slideBg = {
        background: `url(${slideImage})`,
        width: '350px',
        height: '400px',
        // backgroundSize: 'cover',
    }
    return (
        <div className='vh-100 bg-dark'>
            <div className='heading-dark pt-4'>
                <h2>Testimonial</h2>
                <h5><span>Our Clients Say</span> About Us</h5>
            </div>
            <Container>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div  >
                        <div className='slide-card' style={slideBg}>
                            <div className='review-container'>
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <img style={{ width: '30%' }} src={img} alt="" />
                                    <h6>John Caryl</h6>
                                </div>
                                <p>The product images load quickly and are displayed in small frames 3 high with a side to side scroll bar.</p>
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div className='slide-card' style={slideBg}>
                            <div className='review-container'>
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <img style={{ width: '30%' }} src={img} alt="" />
                                    <h6>John Caryl</h6>
                                </div>
                                <p>The product images load quickly and are displayed in small frames 3 high with a side to side scroll bar.</p>
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div className='slide-card' style={slideBg}>
                            <div className='review-container'>
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <img style={{ width: '30%' }} src={img} alt="" />
                                    <h6>John Caryl</h6>
                                </div>
                                <p>The product images load quickly and are displayed in small frames 3 high with a side to side scroll bar.</p>
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div className='slide-card' style={slideBg}>
                            <div className='review-container'>
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <img style={{ width: '30%' }} src={img} alt="" />
                                    <h6>John Caryl</h6>
                                </div>
                                <p>The product images load quickly and are displayed in small frames 3 high with a side to side scroll bar.</p>
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div className='slide-card' style={slideBg}>
                            <div className='review-container'>
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <img style={{ width: '30%' }} src={img} alt="" />
                                    <h6>John Caryl</h6>
                                </div>
                                <p>The product images load quickly and are displayed in small frames 3 high with a side to side scroll bar.</p>
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div className='slide-card' style={slideBg}>
                            <div className='review-container'>
                                <div className='d-flex flex-column justify-content-center align-items-center'>
                                    <img style={{ width: '30%' }} src={img} alt="" />
                                    <h6>John Caryl</h6>
                                </div>
                                <p>The product images load quickly and are displayed in small frames 3 high with a side to side scroll bar.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </Container>
        </div>
    );
};

export default Testimonial;