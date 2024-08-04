// `src/components/Testimonials.jsx`
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import darkTheme from '../styles/theme.js';

const testimonials = [
  { name: 'John Doe', feedback: 'Great service and amazing recommendations!' },
  { name: 'Jane Smith', feedback: 'I found my new favorite restaurant thanks to this app!' },
  { name: 'Sam Wilson', feedback: 'User-friendly and very helpful.' },
];

const Testimonials = () => {
  return (
    <Container className="mt-5" style={{ backgroundColor: darkTheme.background, color: darkTheme.text }}>
      <h2 className="text-center">Testimonials</h2>
      <Row className="mt-4">
        {testimonials.map((testimonial, index) => (
          <Col key={index} md={4}>
            <Card className="mb-4 h-100" style={{ backgroundColor: darkTheme.cardBackground, color: darkTheme.text }}>
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text>{testimonial.feedback}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;