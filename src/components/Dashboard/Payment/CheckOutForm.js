import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Container, Form, Spinner } from 'react-bootstrap';
import useAuth from '../../Context/AuthContext/useAuth';

const CheckOutForm = ({ order }) => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState("");

    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const price = order?.total;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)

            });
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess('')
        } else {
            setError('')
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
            setSuccess('')
        }
        else {
            setError('');
            setSuccess('Your payment processed successfully');
            setProcessing(false);
            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `http://localhost:5000/myOrders/${order?._id}`
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                })
        }
    };
    console.log(processing)
    return (
        <div className='mx-auto border border-light rounded shadow-sm p-3 mt-3' style={{ maxWidth: '500px' }}>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control readOnly type="text" value={user?.displayName} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control readOnly type="email" value={user?.email} disabled />
                    </Form.Group>
                </Form>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    {
                        processing ? <Spinner animation="border" className='ms-5' /> : <button className='btn-outline-sm my-3' type="submit" disabled={!stripe || success}>
                            Pay  ${order.total}
                        </button>}
                    {
                        error &&

                        <div className="bg-red text-center d-inline-block py-2" style={{ width: '100%', height: '40px' }}>
                            <p>{error}</p>
                        </div>
                    }
                    {
                        success &&

                        <div className="bg-green text-center d-inline-block py-2" style={{ width: '100%', height: '40px' }}>
                            <p>{success}</p>
                        </div>
                    }
                </form>

            </Container>
        </div>
    );
};

export default CheckOutForm;