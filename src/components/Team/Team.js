import React from 'react';
import './Team.css'
import t1 from '../../images/T1.jpg'
import t2 from '../../images/T2.jpg'
import t3 from '../../images/T3.jpg'

const Team = () => {
    return (
        <div id = "team" className = "container my-5">
            <div className="team">
                <h1 className = "about-header my-5">Professional Team</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="team-image">
                          <img src={t1} alt="" />
                        </div>
                        <div className="team-description">
                           <h3 className = "team-name">Jonathon Doe</h3>
                           <p>Taxi Driver & Traveler</p>
                           <p>I’d like to send you a sincere "thank you" for all of your assistance during my recent trip to Colorado.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-image">
                          <img src={t2} alt="" />
                        </div>
                        <div className="team-description">
                           <h3 className = "team-name">Jessica Jui</h3>
                           <p>Taxi Driver & Traveler</p>
                           <p>I’d like to send you a sincere "thank you" for all of your assistance during my recent trip to Colorado.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="team-image">
                          <img src={t3} alt="" />
                        </div>
                        <div className="team-description">
                           <h3 className = "team-name">Monalisa Lui</h3>
                           <p>Taxi Driver & Traveler</p>
                           <p>I’d like to send you a sincere "thank you" for all of your assistance during my recent trip to Colorado.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;