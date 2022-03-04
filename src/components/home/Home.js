import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Team from '../Team/Team';

const home = () => {
    return (
        <div id = "home">
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default home;