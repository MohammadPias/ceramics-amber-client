import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer'
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Testimonial />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;