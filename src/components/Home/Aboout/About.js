import React from 'react';
import { Container } from 'react-bootstrap';
import amber from '../../../images/amber.jpg'

const About = () => {
    return (
        <div className='max-vh-100 my-5' id='about'>
            <div className="heading-light">
                <h2><span>About</span> Us</h2>
            </div>
            <Container className='my-4'>
                <div className="row">
                    <div className=".col-12 col-lg-6">
                        <img style={{width: '100%'}} src={amber} alt="" />
                    </div>
                    <div className=".col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <div className='text-gray'>
                            <h4>Ceramics Amber</h4>
                            <p className=''>Ceramics Amber is an online ceramics products seller. We are wholesaler and retailer. We collect products from the root level company then we supply whole country.</p>
                            <button className="btn-outline-sm text-center">Learn More</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;