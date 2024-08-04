// `src/components/ContactUs.jsx`
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import darkTheme from '../styles/theme.js';

const ContactUs = () => {
  return (
    <Container className="mt-5" style={{ backgroundColor: darkTheme.background, color: darkTheme.text }}>
      <h2 className="text-center">Contact Us</h2>
      <Form className="mt-4">
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" style={{ backgroundColor: darkTheme.background, color: darkTheme.text }} />
        </Form.Group>
        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" style={{ backgroundColor: darkTheme.background, color: darkTheme.text }} />
        </Form.Group>
        <Form.Group controlId="formMessage" className="mt-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" style={{ backgroundColor: darkTheme.background, color: darkTheme.text }} />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3" style={{ background: darkTheme.buttonBackground, border: 'none', color: darkTheme.text }}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactUs;