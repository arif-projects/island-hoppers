import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div id = "service" className = "my-5">
            <h1 className = "about-header mb-5">Popular Tour Places</h1>
            <div className="service-container container"> 
                        
                {
                  data.map(data=><Service
                  key = {data.key}
                  service = {data}
                  ></Service>)
                }
                        
                    
                
               
            </div>
        </div>
    );
};

export default Services;