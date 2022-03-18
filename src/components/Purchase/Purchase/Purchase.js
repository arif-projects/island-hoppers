import React, { useRef, useState } from 'react';
// import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useForm } from "react-hook-form";
import UseAuth from '../../../Hooks/UseAuth';

const Purchase = () => {
    const{users} = UseAuth();
    const {serviceId} = useParams();
    const [service,setService] = useState({})

    const serviceNameRef = useRef();
    const servicePriceRef = useRef();
    const userEmailRef = useRef();
    const userNameRef = useRef();
    const userPhoneRef = useRef();
    const serviceDescriptionRef = useRef();

    useEffect(()=>{
        fetch(`https://islandhoppers.herokuapp.com/services/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])




    

    const handlePurchese = e =>{
        const serviceName = serviceNameRef.current.value
        const servicePrice = servicePriceRef.current.value
        const serviceDescription = serviceDescriptionRef.current.value
        const customerName = userNameRef.current.value
        const customerEmail = userEmailRef.current.value
        const customerPhone = userPhoneRef.current.value

        const newPurchese = {serviceName,servicePrice,serviceDescription,customerName,customerEmail,customerPhone}
        fetch('https://islandhoppers.herokuapp.com/purchese',{
           method: 'POST',
           headers:{
               'content-type': 'application/json'
           },
           body:JSON.stringify(newPurchese) 
        })

        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Order Placed successfully');
                e.target.reset();
            }
        })

       e.preventDefault();

    }

    return (
        <div className = "addService">
            <h1 className = "text text-success">Please Check Carefully & Purchese</h1>

            <form onSubmit = {handlePurchese} action="">

                 <input type="text" value = {users.displayName} ref = {userNameRef} />

                 <input type="text" value = {users.email} ref = {userEmailRef} />

                 <input type="number"  ref = {userPhoneRef} placeholder = "Your number" required />

                 <input type="text" value = {service.name} ref = {serviceNameRef} />

                 <input type="number" value = {service.price} ref = {servicePriceRef} id="" disabled />

                 <textarea type="text" value = {service.description} ref = {serviceDescriptionRef}  disabled/>
                 
                 <input className = "btn btn-success" type="submit" value="Place Order" />
            </form>         

        </div>
    );
};

export default Purchase;