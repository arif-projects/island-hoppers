import React from 'react';
import './About.css'
import about from '../../images/about.PNG'
import { Row } from 'react-bootstrap';


const About = () => {
    return (
        <div id = "about">
            <div className="about mt-5 mb-3">
                <h1 className = "about-header mb-5">Who We Are?</h1>
              
                <Row xs={1} sm={1} md={2} lg={2} style={{ marginTop: "3rem" }}>  
                        <Row>
                            <div className="about-img">
                               <img src={about} alt="" />
                            </div>
                        </Row>
                        
                        <Row>
                            <div className="about-description text-start">
                                <h2 className = "description-header">We Are Travel Experts</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                                <button className = "btn btn-info text-white">Know more</button>
                            </div>
                        </Row>
                        </Row>  
              
            </div>
        </div>
    );
};

export default About;