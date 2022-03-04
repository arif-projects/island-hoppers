import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404 Page not found!!</h1>
            <img src='https://ibb.co/xDxf7jF' alt="" />
            <Link to ="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;