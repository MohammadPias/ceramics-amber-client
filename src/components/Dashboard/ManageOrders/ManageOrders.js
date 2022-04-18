import React, { useEffect, useState } from 'react';
import { Badge, Container, Table } from 'react-bootstrap';
import { toast } from 'react-toastify'
import useAuth from '../../Context/AuthContext/useAuth';
import OrdersCard from '../Orders/OrdersCard';

const ManageOrders = () => {
    const [orderData, setOrderData] = useState([]);
    const [order, setOrder] = useState({});
    const [refresh, setRefresh] = useState(false);
    const { user } = useAuth() || {};
    const email = user?.email;

    let orders = [];
    for (const orderInfo of orderData) {
        const newOrders = orderInfo['cart']
        orders = [...orders, ...newOrders]
    };

    const handleDelete = (id) => {
        console.log(id)
        const proceed = window.confirm('Are you sure you wan to delete the order?')
        if (proceed) {
            fetch(`https://agile-escarpment-29078.herokuapp.com/myOrders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Your order is deleted successfully')
                        setRefresh(true)
                    }
                })
        }
    }

    const handleDetail = (id) => {
        const currOrder = orderData?.find(order => order?._id === id);
        setOrder(currOrder)
    };
    const handleUdateStatus = (id) => {
        console.log(id)
        fetch(`https://agile-escarpment-29078.herokuapp.com/myOrders/${id}`, { method: "PUT" })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Order status has been updated');
                    setRefresh(true)
                }
            })
    }
    useEffect(() => {
        fetch('https://agile-escarpment-29078.herokuapp.com/myorders')
            .then(res => res.json())
            .then(data => {
                setOrderData(data)
            })
    }, [refresh])
    return (
        <Container>
            <div className="heading-light">
                <h5 className="text-center fw-bold">
                    My <span>Orders</span>
                </h5>
            </div>
            <div className="row">
                <div className="col-lg-7">
                    <Table responsive striped bordered hover>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Status</th>
                                <th>Delete</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderData?.map(data =>
                                    <tr key={data?._id}>
                                        <td>#{data?._id}</td>
                                        <td>
                                            {
                                                !data?.status ?
                                                    <Badge onClick={() => handleUdateStatus(data?._id)} className='badge-btn' bg="primary">update</Badge>
                                                    :
                                                    <Badge bg="success">updated</Badge>
                                            }
                                        </td>
                                        <td className='ms-3'>
                                            <i onClick={() => handleDelete(data?._id)} className="fa-solid fa-trash info-btn"></i>
                                        </td>
                                        <td className='d-flex justify-content-center align-items-center'>
                                            <i onClick={() => handleDetail(data?._id)} className="fa-solid fa-circle-info info-btn"></i>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
                <div className="col-lg-5">
                    <OrdersCard
                        orderCart={order?.cart || []}
                        order={order || {}}
                    />
                </div>
            </div>
        </Container>
    );
};

export default ManageOrders;