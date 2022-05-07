import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer'
import Subscribe from '../Subscribe/Subscribe';
import Testimonial from '../Testimonial/Testimonial';
import TopProducts from '../TopProducts/TopProducts';
import ImageGrid from '../ImageGrid/ImageGrid';

const Home = () => {
    return (
        <div>
            <Header />
            <TopProducts />
            <ImageGrid />
            <Testimonial />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;