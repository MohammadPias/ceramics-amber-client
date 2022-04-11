import React from 'react';
import { useForm } from "react-hook-form";

const Subscribe = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='mt-5 form-container position-relative'>
            <div className='position-absolute top-100 start-50 translate-middle card-bg p-4 border shadow-sm rounded-3'>
                <h4 className='text-center fw-bold w-75 ms-5'>Stay Connected With Our Email Updates</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Your E-mail' {...register("email")} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Subscribe;