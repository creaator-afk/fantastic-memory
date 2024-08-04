import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/ProfileEditPage.css';

const ProfileEditPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [eatingPreference, setEatingPreference] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log('Profile updated:', { name, email, phone, location, eatingPreference, budget });
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3}>
          <Nav className="flex-column sidebar">
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            <Nav.Link as={Link} to="/settings/privacy">Privacy & Security</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/social">Social</Nav.Link>
            <Nav.Link as={Link} to="/settings/preferences">Preferences</Nav.Link>
          </Nav>
        </Col>
        <Col md={9}>
          <h2>Edit Profile</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEatingPreference">
              <Form.Label>Eating Preference</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter eating preference"
                value={eatingPreference}
                onChange={(e) => setEatingPreference(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBudget">
              <Form.Label>Budget</Form.Label>
              <Form.Control as="select" value={budget} onChange={(e) => setBudget(e.target.value)}>
                <option>Cheap</option>
                <option>Moderate</option>
                <option>Expensive</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Save Changes
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileEditPage;