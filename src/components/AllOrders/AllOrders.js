import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';

const AllOrders = () => {
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/purchese')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    // console.log(orders);
 
    return (
        <div className = "mt-5 mb-3">
            <h3 className = "text text-primary">All Orders :{orders.length}</h3>
            <div className="container">
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Place Name</th>
      <th>Price</th>
      <th>Customer Name</th>
      <th>Customer Email</th>
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