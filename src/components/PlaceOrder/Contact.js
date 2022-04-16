import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contact = ({ formData, setFormData }) => {
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
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            value={formData.name}
                            type="text"
                        />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        value={formData.phone}
                        type='number'
                    />
                </Form.Group>
            </Form>
        </Container>
    );
};

export default Contact;