import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className = "banner">
            <div className="banner-container">
            <h1 className = "banner-header">Enjoy Vacation With <span>I-Hoppers</span></h1> 
            <p className = "banner-description">Travel to the any corner of the world, without going around in circles.</p>
           <a className = "book-btn" href="#">Book A Tour</a>
            </div>
           
        </div>
    );
};

export default Banner;