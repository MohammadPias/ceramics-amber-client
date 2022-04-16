import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Shipping = ({ formData, setFormData }) => {
    return (
        <Container className='mt-3 shadow-sm'>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            readOnly
                            value={formData.email}
                            type="email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            value={formData.state}
                            type="text"
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            value={formData.city}
                            type="text"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control
                            onChange={(e) => setFormData({ ...formData, postal: e.target.value })}
                            value={formData.postal}
                            type="number"
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        value={formData.address}
                        type='text'
                    />
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Shipping;
