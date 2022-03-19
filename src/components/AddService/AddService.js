import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import './AddService.css'


const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>
    //  console.log(data);
    axios.post('https://islandhoppers.herokuapp.com/services',data)
    .then(res=>{
        // console.log(res);
        if(res.data.insertedId){
            swal({
                title: "Service Added Successfully!",
                icon: "success",
              });
            reset();
        }
    })
    return (
        <div className = "addService mt-5">
            <h2 className = "text text-primary  mb-3">Add a service.</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder = "Name" />
            <textarea {...register("description")} placeholder = "Description" />
            <input {...register("img")} placeholder = "Image Url" />
            <input type="number" {...register("price")} placeholder="price" />
            <input className = "btn btn-success" type="submit" />
    </form>
        </div>
    );
};

export default AddService;