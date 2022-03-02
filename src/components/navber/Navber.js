import React from 'react';
import './navber.css'
import image from '../../images/logo2.png'

const navber = () => {
    return (
        <div className = "navber">
            <div className="logo">
                <img src={image} alt="" />
            </div>
            <div className="navigations">
                <div className="ancore">
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#about">About us</a>
                    <a href="#">Clients</a>
                    <a href="#team">Team</a>
                    <a href="#">Contact</a>
                </div>
           
            </div>
        </div>
    );
};

export default navber;