import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import "./AddBook.css";


const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();

    const notify = () => {
        toast.success('Book is added successfully')
    }

    const onSubmit = (data) => {
        console.log(data)

        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    notify();
                    reset();
                }
            })
    };
    return (
        <div className='w-75 mx-auto'>
            <fieldset className='border border-light p-4 shadow-sm'>
                <h6 className='text-center fw-bold text-secondary'>Add Books</h6>
                <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                    <div className='col-lg-6'>
                        <label type="text">Title</label>
                        <input {...register("title")} />
                    </div>
                    <div className='col-lg-6'>
                        <label type="text">Author</label>
                        <input {...register("author")} />
                    </div>
                    <div className='col-lg-6'>
                        <label>Description</label>
                        <textarea
                            className='w-100'
                            type="text"
                            {...register("info")}
                        />
                    </div>
                    <div className='col-lg-6'>
                        <label>Category</label>
                        <select className='w-100' {...register("category")}>
                            <option value="0">Action & Adventure</option>
                            <option value="1">Arts, Film & Photography</option>
                            <option value="2">Computers & Internet</option>
                            <option value="3">Medicine and Health</option>
                            <option value="4">Historical Fiction</option>
                        </select>
                    </div>
                    <div className='col-lg-6'>
                        <label type="number">Rating</label>
                        <input {...register("rating")} />
                    </div>
                    <div className='col-lg-6'>
                        <label type="number">Price</label>
                        <input {...register("price")} />
                    </div>
                    <div className='col-lg-12'>
                        <label type="text">Image</label>
                        <input {...register("img")} />
                    </div>
                    <div className="col-12">
                        <input type="submit" />

                    </div>
                </form>
            </fieldset>
        </div>
    );
};

export default AddProducts;