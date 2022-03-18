import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UseAuth from '../../Hooks/UseAuth';

const MyOrders = () => {
    const [orders,setOrders] = useState([]);
    const{users} = UseAuth();

    useEffect(()=>{
        fetch('https://islandhoppers.herokuapp.com/purchese')
        .then(res=>res.json())
        .then(data=>{
const order = data.filter(singleData=> users.email==singleData.customerEmail);
            setOrders(order);
        })
    },[])

    return (
        <div>
            <h2>All my Orders</h2>
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

export default MyOrders;