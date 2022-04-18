import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const UpdateProduct = () => {
    const [product, setProduct] = useState({})
    const { register, handleSubmit, reset, watch } = useForm();

    const { productId } = useParams();
    console.log(productId)
    const notify = () => {
        toast.success('Product is added Successfully')
    };

    useEffect(() => {
        fetch(`https://agile-escarpment-29078.herokuapp.com/products/${productId}`, {
            method: 'GET'
        }).then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [])
    const onSubmit = (data) => {
        console.log(data)

        fetch('https://agile-escarpment-29078.herokuapp.com/products', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    notify();
                    reset();
                }
            })
    };
    return (
        <div className='w-75 mx-auto mt-5'>
            <fieldset className='border p-4 shadow-sm'>
                <div className="heading-light">
                    <h5 className='fw-bold'>Update <span>Products</span></h5>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="row g-3 mt-3">
                    <div className='col-lg-6'>
                        <label type="text">Title</label>
                        <input value={product?.title} {...register("title")} />
                    </div>
                    <div className='col-lg-6'>
                        <label type="text">Material</label>
                        <input {...register("material")} />
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
                            <option value="0">Dinner set</option>
                            <option value="1">Baby set</option>
                            <option value="2">Tea set</option>
                            <option value="3">Baht accessories</option>
                            <option value="4">Decorative items</option>
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
                        <input {...register("img", { required: true })} />
                    </div>
                    <div className='col-lg-6'>
                        <label type="text">Safety</label>
                        <input {...register("safety")} />
                    </div>
                    <div className='col-lg-6'>
                        <label type="number">In Stock</label>
                        <input {...register("stock")} />
                    </div>
                    <div className="col-12">
                        <input type="submit" />

                    </div>
                </form>
            </fieldset>
        </div>
    );
};

export default UpdateProduct;