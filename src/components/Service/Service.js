import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {_id,name, price, description, img} = props.service
    return (
        <div>
            <div className="service pb-3">
                <img className="w-100" src={img} alt="" />
                <h3 className="about-header">{name}</h3>
                <p className = "description">{description}</p>
                <p className = "price">${price}</p>
                <Link to = {`/purchese/${_id}`}>
                <button className = "btn btn-success">Apply booking</button>
                </Link>
                
            </div>
        </div>
    );
};

export default Service;