import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';

const AllOrders = () => {
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://islandhoppers.herokuapp.com/purchese')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    // console.log(orders);

    // delete operation 
    const handleDelete = id =>{
        const url = `https://islandhoppers.herokuapp.com/purchese/${id}`
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.deletedCount){
                swal({
                    title: "Order Deleted!",
                    icon: "success",
                  });
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining);
            }

        })
    }
 
    return (
        <div className = "mt-5">
            <h2 className = "text text-primary  mb-3">All Orders :{orders.length}</h2>
            <div className="container">
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Place Name</th>
      <th>Price</th>
      <th>Customer Name</th>
      <th>Customer Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          orders.map(order => 
            <tr>
                <td>{order.serviceName}</td>
                <td>{order.servicePrice}</td>
                <td>{order.customerName}</td>
                <td>{order.customerEmail}</td>
                <td><button onClick = {()=>handleDelete(order._id)} className = "btn btn-danger">Cencel Order</button></td>
          </tr>
          )
      }
   
  </tbody>
</Table>
            </div>
        </div>
    );
};

export default AllOrders;