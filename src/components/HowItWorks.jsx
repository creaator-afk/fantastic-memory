// `src/components/HowItWorks.jsx`
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import darkTheme from '../styles/theme.js';

const HowItWorks = () => {
  return (
    <Container className="mt-5" style={{ backgroundColor: darkTheme.background, color: darkTheme.text }}>
      <h2 className="text-center">How It Works</h2>
      <Row className="mt-4">
        <Col md={4}>
          <h4>Step 1: Search</h4>
          <p>Use our search box to find restaurants based on your preferences.</p>
        </Col>
        <Col md={4}>
          <h4>Step 2: Review</h4>
          <p>Read reviews from other users to make an informed decision.</p>
        </Col>
        <Col md={4}>
          <h4>Step 3: Enjoy</h4>
          <p>Visit the restaurant and enjoy your meal!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HowItWorks;