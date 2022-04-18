import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51Jvx6NAnuYBYVLbU2Vdbfr1n94ClBv6DsExH2Q81OyYpyzyxS0VgyAke6SyrltTrgHeBhabVdEAhmkArhgQCpXHL00J8pjPXkh');

const MakePayment = () => {
    const [order, setOrder] = useState({});
    const { orderId } = useParams();

    useEffect(() => {
        fetch(`https://agile-escarpment-29078.herokuapp.com/myOrders/${orderId}`).then(res => res.json())
            .then(data => {
                setOrder(data)
            })
    }, [orderId])
    return (
        <div>
            <div className="heading-light">
                <h5 className="text-center fw-bold">
                    Make <span>Payment</span>
                </h5>
            </div>

            {

                order?.total &&
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        order={order}
                    />
                </Elements>
            }
        </div>
    );
};

export default MakePayment;