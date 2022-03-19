import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageServices = () => {
    const [services,setService] = useState([]);
    useEffect(()=>{
        fetch(`https://islandhoppers.herokuapp.com/services`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[]);
    const handleDelete = id =>{
        const url = `https://islandhoppers.herokuapp.com/services/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                swal({
                    title: "Service Deleted Successfully!",
                    icon: "success",
                  });
                const remaining = services.filter(service => service._id !== id);
                setService(remaining);
            }

        })
    }
    return (
        <div className = "mt-5">
            <h2 className = "text text-primary  mb-3">Manage all services.</h2>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>Service Name</th>
      <th>Price</th>
      <th>Action</th> 
    </tr>
  </thead>
  <tbody>
      {
          services.map(service => 
            <tr>
                <td>{service.name}</td>
                <td>{service.price}</td>
                <td><button onClick = {()=>handleDelete(service._id)} className="btn btn-danger">Delete Service</button></td>
          </tr>
          )
      }
   
  </tbody>
</Table>
            
        </div>
    );
};

export default ManageServices;