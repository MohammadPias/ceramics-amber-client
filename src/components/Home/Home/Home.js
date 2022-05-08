import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer'
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial';
import TopProducts from '../TopProducts/TopProducts';
import ImageGrid from '../ImageGrid/ImageGrid';
import About from '../Aboout/About';

const Home = () => {
    return (
        <div>
            <Header />
            <TopProducts />
            <About />
            <Testimonial />
            <ImageGrid />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;