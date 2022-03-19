import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import UseAuth from '../../Hooks/UseAuth';
import swal from 'sweetalert';

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
                        title: "Order Cenceled Successfully!",
                        icon: "success",
                      });
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
    
            })
        }

    return (
        <div className = "mt-5">
            <h2 className = "text text-primary mb-3">All my Orders</h2>
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
                <td><button onClick = {()=>handleDelete(order._id)} className="btn btn-danger">Cencel Order</button></td>
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