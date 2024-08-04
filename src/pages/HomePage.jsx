// `src/pages/HomePage.jsx`
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox.jsx';
import FeatureSection from '../components/FeatureSection.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Testimonials from '../components/Testimonials.jsx';
import ContactUs from '../components/ContactUs.jsx';
import darkTheme from '../styles/theme';
import '../styles/custom.css';

const HomePage = () => {
  return (
    <Container className="mt-5" style={{ backgroundColor: darkTheme.background, color: darkTheme.text }}>
      <h1 className="text-center">Welcome to Restaurant Recommender</h1>
      <SearchBox />
      <FeatureSection />
      <HowItWorks />
      <Testimonials />
      <ContactUs />
    </Container>
  );
};

export default HomePage;