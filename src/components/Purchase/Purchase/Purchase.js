import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import UseAuth from '../../../Hooks/UseAuth';

const Purchase = () => {
    const{users} = UseAuth();
    const {serviceId} = useParams();
    const [service,setService] = useState({})


    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => 
    // console.log(data);
    axios.post('http://localhost:5000/purchese',data)
    .then(res=>{
        // console.log(res);
        if(res.data.insertedId){
            alert('Service added successfully.');
            reset();
        }
    })
    
    return (
        <div className = "addService">
            <h1 className = "text text-success">Please Check Carefully & Purchese</h1>
            {/* <h1>This is purchase {serviceId}.</h1> */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue  = {users.displayName} {...register("name",)} />
                <input defaultValue  = {users.email} {...register("email",)} />
                <input {...register("phone",)} placeholder = "Please Enter Your phone Number" required />
                <input defaultValue  = {service.name} {...register("serviceName",)} />
                <textarea defaultValue  = {service.description} {...register("description")} placeholder = "Description" />
                <input defaultValue  = {service.price} type="number" {...register("price",)} />
                <input className = "btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default Purchase;