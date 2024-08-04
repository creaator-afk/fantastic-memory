// `src/components/common/Navbar.jsx`
import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar = () => {
  return (
    <Nav className="flex-column bg-light p-3">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  );
};

export default Navbar;