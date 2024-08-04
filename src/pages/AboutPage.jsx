import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './AboutPage.css';

const AboutPage = () => {
  const [fullName, setFullName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle user information update logic here
    console.log('User information updated:', { fullName, bio, profilePicture, website, location });
  };

  return (
    <Container className="about-container">
      <h2>About</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBio">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formProfilePicture">
          <Form.Label>Profile Picture URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter profile picture URL"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formWebsite">
          <Form.Label>Website URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter website URL"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
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
        <Button variant="primary" type="submit" className="mt-3">
          Save Information
        </Button>
      </Form>
    </Container>
  );
};

export default AboutPage;