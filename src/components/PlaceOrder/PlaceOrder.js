import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import useAuth from '../Context/AuthContext/useAuth';
import useCart from '../Hooks/useCart';
import { clearTheCart } from '../Hooks/useLocalStorage';
import Contact from './Contact';
import Payment from './Payment';
import Shipping from './Shipping';


const PlaceOrder = () => {
    const { user } = useAuth();
    const [page, setPage] = useState(0);
    const email = user?.email;
    const [formData, setFormData] = useState({
        address: '',
        city: '',
        state: '',
        postal: '',
        payment: '',
        email: email,
        name: '',
        phone: ''
    });

    const navigate = useNavigate()
    const { cart } = useCart();

    let subTotal = 0;
    for (const product of cart) {
        subTotal = subTotal + parseInt(product?.price) * parseInt(product?.quantity);
    };
    const shipping = subTotal > 300 ? 25 : 15;
    const tax = (subTotal + shipping) * 10 / 100;
    let total = subTotal + tax + shipping;
    const date = new Date();

    const handlePlaceOrder = (data) => {
        const orders = {
            ...data,
            date: date.toLocaleDateString(),
            shipping,
            tax,
            total,
            cart
        }

        if (cart.length !== 0) {
            fetch('https://agile-escarpment-29078.herokuapp.com/orders', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(orders)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    if (result.insertedId) {
                        toast.success('Your orders are placed successfully');
                        navigate('/dashboard/orders')
                        setFormData({});
                        clearTheCart();
                    }
                })
        }
        else {
            toast.warn("Something is wrong. Please try again later")
        }
    };

    const pageTitles = ['Shipping Address', 'Payment Method', 'Contact'];
    const displayPage = () => {
        return page === 0 ?
            <Shipping formData={formData} setFormData={setFormData} />
            : page === 1 ?
                <Payment formData={formData} setFormData={setFormData} />
                :
                <Contact formData={formData} setFormData={setFormData} />
    }
    return (
        <div className='d-flex justify-content-center align-items-center p-4'>
            <div className='max-w-75 mx-auto mt-5'>
                <div className="heading-light">
                    <h5 className="text-center fw-bold">
                        Place Your <span>Orders</span>
                    </h5>
                </div>
                <div className="">
                    <div className="header">
                        <div className="progress-container">
                        </div>
                        <div style={{ width: page === 0 ? '33.3%' : page === 1 ? '66.6%' : '100%' }} className="progress-bar">
                        </div>
                        <h6 className="text-center fw-bold mt-3">
                            {pageTitles[page]}
                        </h6>
                    </div>
                    <div className="body">{displayPage()}</div>
                    <div className="footer d-flex justify-content-between">
                        <button
                            disabled={page === 0}
                            onClick={() => setPage((currPage) => currPage - 1)}
                            className="btn-outline-sm"
                        >Prev</button>
                        <button
                            onClick={() => {
                                if (page === pageTitles.length - 1) {
                                    handlePlaceOrder(formData);
                                }
                                else {
                                    setPage((currPage) => currPage + 1)
                                }
                            }}
                            className="btn-regular"
                        >{page === pageTitles.length - 1 ? 'Submit' : 'Next'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;