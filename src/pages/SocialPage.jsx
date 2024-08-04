import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './SocialPage.css';

const SocialPage = () => {
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [instagram, setInstagram] = useState('');
  const [github, setGithub] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle social settings update logic here
    console.log('Social settings updated:', { facebook, twitter, linkedin, instagram, github });
  };

  return (
    <Container className="social-container">
      <h2>Social Settings</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFacebook">
          <Form.Label>Facebook URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter Facebook URL"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formTwitter">
          <Form.Label>Twitter Handle</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Twitter Handle"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formLinkedin">
          <Form.Label>LinkedIn URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter LinkedIn URL"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formInstagram">
          <Form.Label>Instagram Handle</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Instagram Handle"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formGithub">
          <Form.Label>GitHub URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter GitHub URL"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Save Social Settings
        </Button>
      </Form>
    </Container>
  );
};

export default SocialPage;