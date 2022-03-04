import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
    const [services,setService] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/services`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[]);
    const handleDelete = id =>{
        const url = `http://localhost:5000/services/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                alert('Service deleted');
                const remaining = services.filter(service => service._id !== id);
                setService(remaining);
            }

        })
    }
    return (
        <div>
            <h2  className = "text text-danger">Manage all services.</h2>
            {
                services.map(service=><div>
                    <h3>{service.name}</h3>
                    <button onClick = {()=>handleDelete(service._id)} className = "btn btn-danger">Delete</button>
                </div>)
            }
            
        </div>
    );
};

export default ManageServices;