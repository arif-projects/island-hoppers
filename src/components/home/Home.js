import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navber from '../navber/Navber';
import Team from '../Team/Team';

const home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <About></About>
            <Team></Team>
            <Footer></Footer>
        </div>
    );
};

export default home;