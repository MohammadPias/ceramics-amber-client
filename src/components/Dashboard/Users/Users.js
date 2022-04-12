import React from 'react';
import { Container } from 'react-bootstrap';

const Users = () => {
    return (
        <div className='vh-100'>
            <Container>
                <div className="row card-bg">
                    <div className="col-md-6 col-lg-6">
                        <h6>Users</h6>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <h6>Admins</h6>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Users;