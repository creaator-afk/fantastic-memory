// `src/pages/DashboardPage.jsx`
import React from 'react';
import Dashboard from '../components/dashboard/Dashboard';
import Sidebar from '../components/common/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';

const DashboardPage = () => {
  return (
    <Container className="container-fluid d-flex justify-content-between">
          <Sidebar />
          <Dashboard />
    </Container>
  );
};

export default DashboardPage;