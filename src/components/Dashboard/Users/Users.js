import React, { useEffect, useState } from 'react';
import { Card, Container, Form, Modal, Table } from 'react-bootstrap';
import useAuth from '../../Context/AuthContext/useAuth';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [adminRole, setAdminRole] = useState([]);
    const [reload, setReload] = useState(false);


    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    };
    // handle delete user
    const handleDelete = (id, email) => {
        const isProceed = window.confirm('Are you sure you want to delete the user?')
        if (isProceed) {
            // handleDeleteUser(email);
            fetch(`https://agile-escarpment-29078.herokuapp.com/users/${id}`, { method: 'DELETE' })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('User has been deleted successfully');
                        setReload(true)
                    }
                })
        }
    }

    // make admin role
    const handleAdminRole = () => {
        // e.preventDefault();
        const user = { email };
        fetch('https://agile-escarpment-29078.herokuapp.com/users/admin', {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Admin is made successfully');
                    setEmail('');
                    setReload(true);
                }
            })


    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // fetch all users
    useEffect(() => {
        fetch('https://agile-escarpment-29078.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [reload]);
    //fetch admins
    useEffect(() => {
        fetch('https://agile-escarpment-29078.herokuapp.com/users/admin')
            .then(res => res.json())
            .then(data => {
                setAdminRole(data)
            })
    }, [reload]);

    return (
        <div className='vh-100'>
            {/* Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                onBlur={handleOnBlur}
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={() => handleAdminRole(email)} className="btn-regular">Add</button>
                </Modal.Footer>
            </Modal>
            <Container>
                <h5 className='text-center fw-bold'>users</h5>
                <div className="row mt-4">
                    <div className="col-md-6 col-lg-8">
                        <Table striped bordered hover className='shadow-sm'>
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Email Address</th>
                                    <th>Remove User</th>
                                    <th>Make Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map(user =>
                                        <tr key={user?._id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className='user-image me-3'>
                                                        <img src={user?.photoURL} alt="" />
                                                    </div>
                                                    <h6>{user?.displayName}</h6>
                                                </div>
                                            </td>
                                            <td>{user?.email}</td>
                                            <td><i onClick={() => handleDelete(user?._id, user?.email)} className="fa-solid fa-user-slash i-link"></i></td>
                                            <td onClick={handleShow}><i className="fa-solid fa-user-plus i-link"></i></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        {/* <h5 className='text-center fw-bold'>Make Admin</h5> */}
                        <Card className='bg-light shadow-sm' style={{ minWidth: '18rem' }}>
                            <Card.Header><h6 className='text-center'>Add Admin</h6></Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <div onClick={handleShow} className='d-flex justify-content-center align-items-center '>
                                        <i className="fa-solid fa-circle-plus fs-1 i-link"></i>
                                    </div>
                                </Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Table striped bordered hover className='mt-3 shadow-sm'>
                            <thead>
                                <tr>
                                    <th>
                                        <h5 className='text-center'>Admins</h5>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    adminRole?.map(user =>
                                        <tr key={user?._id}>
                                            <td>
                                                <div className="d-flex align-items-center flex-column">
                                                    <div className='user-image me-3'>
                                                        <img src={user?.photoURL} alt="" />
                                                    </div>
                                                    <h6>{user?.displayName}</h6>
                                                    <h6>Email: {user?.email}</h6>
                                                    <button
                                                        onClick={handleShow}
                                                        className='btn-regular-sm'
                                                    >Remove</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Users;