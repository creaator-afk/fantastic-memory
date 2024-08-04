// `src/components/FeatureSection.jsx`
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import darkTheme from '../styles/theme.js';

const features = [
  { title: 'Discover Restaurants', description: 'Find the best places to eat around you.' },
  { title: 'User Reviews', description: 'Read reviews from other users.' },
  { title: 'Personalized Recommendations', description: 'Get recommendations based on your preferences.' },
];

const FeatureSection = () => {
  return (
    <Container className="mt-5" style={{ backgroundColor: darkTheme.background, color: darkTheme.text }}>
      <Row>
        {features.map((feature, index) => (
          <Col key={index} md={4}>
            <Card className="mb-4" style={{ backgroundColor: darkTheme.cardBackground, color: darkTheme.text }}>
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeatureSection;