import React from 'react';
import banner from '../../../assets/images/home-banner.png';
import './banner.css'

const Banner = () => {
    return (
        <div className='row vh-100'>

            <div className="col-sm-6 col-md-8 d-flex align-items-center mb-5">
                <div className='left-space'>
                    <p className='fw-bold fontStyle'>
                        Exclusive Ceramics <br />
                        and Pottery <br />
                        Retailer.
                    </p>
                    <button className='primary-btn fw-bold w-50'>Learn More</button>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 bgSecondary mb-5">
                <div className='banner-img'>
                    <img className='img-fluid' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;