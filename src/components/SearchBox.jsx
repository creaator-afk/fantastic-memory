// `src/components/SearchBox.jsx`
import React, { useEffect, useRef } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import darkTheme from '../styles/theme.js';

const SearchBox = () => {
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  return (
    <Form className="d-flex" style={{ backgroundColor: darkTheme.background, color: darkTheme.text }}>
      <FormControl
        type="search"
        placeholder="Search for restaurants..."
        className="me-2"
        aria-label="Search"
        ref={searchInput}
        style={{ backgroundColor: darkTheme.background, color: darkTheme.text }}
      />
      <Button
        variant="outline-success"
        style={{ background: darkTheme.buttonBackground, border: 'none', color: darkTheme.text }}
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;