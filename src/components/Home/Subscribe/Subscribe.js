import React from 'react';
import { useForm } from "react-hook-form";

const Subscribe = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='mt-5 form-container position-relative vh-50'>
            <div className="heading-light">
                <h2><span>Stay Tuned</span> With Us</h2>
            </div>
            <div className='position-absolute top-100 start-50 translate-middle card-bg p-4 border shadow-sm rounded-3'>
                <h4 className='text-center fw-bold w-75 ms-5'>Subscribe</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='text-center' placeholder='Your E-mail' {...register("email")} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Subscribe;