import React from 'react';
import { Form, Button } from 'react-bootstrap';
const Checkout = () => {
  return (<div>
      <center>
      <h1>Billing Address</h1>
    
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Address</Form.Label>
    <Form.Control type="address" placeholder="Address" />
    <Form.Label>City</Form.Label>
    <Form.Control type="city" placeholder="City" />
    <Form.Label>State</Form.Label>
    <Form.Control type="state" placeholder="State" />
    <Form.Label>Pin Code</Form.Label>
    <Form.Control type="address" placeholder="Pin Code" />
  </Form.Group>
  <h2>
      Payment Method
  </h2>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
    <Form.Check type="checkbox" label="Cash on Delivery" />
    
  </Form.Group>
  <Button variant="primary" type="submit">
    Checkout
  </Button>
</Form>
</center>
  </div>);
};

export default Checkout;
