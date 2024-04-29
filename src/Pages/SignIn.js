import React from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import '../Stylesheets/productCard.css';

function SignIn() {
  return (
    <Container className= "auth">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h3>Sign In</h3>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" style={{borderRadius: '0%'}}/>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" style={{borderRadius: '0%'}}/>
            </Form.Group>
            <Button variant="primary" type="submit" id='add-to-cart-button'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;