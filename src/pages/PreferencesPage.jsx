import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './PreferencesPage.css';

const PreferencesPage = () => {
  const [notificationPreference, setNotificationPreference] = useState('email');
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('dark');
  const [timezone, setTimezone] = useState('GMT');
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [dataSharing, setDataSharing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle preferences update logic here
    console.log('Preferences updated:', { notificationPreference, language, theme, timezone, profileVisibility, dataSharing });
  };

  return (
    <Container className="preferences-container">
      <h2>Preferences</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNotificationPreference">
          <Form.Label>Notification Preference</Form.Label>
          <Form.Control as="select" value={notificationPreference} onChange={(e) => setNotificationPreference(e.target.value)}>
            <option value="email">Email</option>
            <option value="sms">SMS</option>
            <option value="push">Push Notifications</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formLanguage">
          <Form.Label>Language</Form.Label>
          <Form.Control as="select" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formTheme">
          <Form.Label>Theme</Form.Label>
          <Form.Control as="select" value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formTimezone">
          <Form.Label>Timezone</Form.Label>
          <Form.Control type="text" placeholder="Enter timezone" value={timezone} onChange={(e) => setTimezone(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formProfileVisibility">
          <Form.Label>Profile Visibility</Form.Label>
          <Form.Control as="select" value={profileVisibility} onChange={(e) => setProfileVisibility(e.target.value)}>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formDataSharing">
          <Form.Check type="checkbox" label="Allow data sharing" checked={dataSharing} onChange={(e) => setDataSharing(e.target.checked)} />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Save Preferences
        </Button>
      </Form>
    </Container>
  );
};

export default PreferencesPage;