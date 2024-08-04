import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/UserProfilePage.css';

const UserProfilePage = () => {
  const navigate = useNavigate();

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    location: 'New York, USA',
    eatingPreference: 'Vegetarian',
    budget: 'Moderate',
  };

  return (
    <Container className="user-profile-container">
      <Row>
        <Col md={8} className="mx-auto">
          <h2>User Profile</h2>
          <div className="profile-details">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Eating Preference:</strong> {user.eatingPreference}</p>
            <p><strong>Budget:</strong> {user.budget}</p>
          </div>
          <Button variant="primary" onClick={() => navigate('/profile/edit')}>
            Edit Profile
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;