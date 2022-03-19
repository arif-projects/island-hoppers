import React from 'react';
import './Banner.css'
import video from '../../video/video.mp4'

const Banner = () => {
    return (
        <div className = "banner-conatiner">
          <div className="banner">
          <video autoPlay loop muted playsInline className = "bgVideo">
                <source src={video} type="video/mp4" />
            </video>
              <div className="content">
                  <h1>Island Hoppers</h1>
                  <a href="#service">Explore</a>
              </div>
          </div>  

           
        </div>
    );
};

export default Banner;