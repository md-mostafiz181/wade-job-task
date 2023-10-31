import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Service from '../Service/Service';
import Business from '../Business/Business';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Blog></Blog>
            <Service></Service>
            <Business></Business>
            <Testimonial></Testimonial>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;