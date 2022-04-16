import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const Payment = ({ formData, setFormData }) => {
    return (
        <div>
            <h3>Add your payment method</h3>
            <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                    Stripe
                </Form.Label>
                <Col sm={10}>

                    <Form.Check
                        onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                        type="radio"
                        value="Master Card"
                        label="Master Card"
                        checked={formData.payment === 'Master Card'}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                        type="radio"
                        value="Visa"
                        label="Visa"
                        checked={formData.payment === 'Visa'}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                    <Form.Check
                        onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                        type="radio"
                        value="Credit Card"
                        label="Credit Card"
                        checked={formData.payment === 'Credit Card'}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                    />
                </Col>
                <Form.Label as="legend" column sm={2}>
                    SSL COMMERZ
                </Form.Label>
                <Col sm={10}>

                    <Form.Check
                        onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                        type="radio"
                        value="B-kash"
                        label="B-kash"
                        checked={formData.payment === 'B-kash'}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                        type="radio"
                        value="Nagad"
                        label="Nagad"
                        checked={formData.payment === 'Nagad'}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                    <Form.Check
                        onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                        type="radio"
                        value="Rocket"
                        label="Rocket"
                        checked={formData.payment === 'Rocket'}
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                    />
                </Col>
            </Form.Group>
        </div>
    );
};

export default Payment;