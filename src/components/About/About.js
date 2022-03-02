import React from 'react';
import './About.css'
import about from '../../images/about.PNG'


const About = () => {
    return (
        <div id = "about">
            <div className="about my-5">
                <h1 className = "about-header mb-5">Who We Are?</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="about-img">
                               <img src={about} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-description text-start">
                                <h2 className = "description-header">We Are Travel Experts</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                                <a className = "about-btn mt-2" href="#">Learn More.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;