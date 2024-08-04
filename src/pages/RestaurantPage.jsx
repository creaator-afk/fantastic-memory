import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import '../styles/RestaurantPage.css';

const RestaurantPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, name: 'Restaurant A', description: 'Description A', image: 'image-a.jpg', cuisine: 'Italian', rating: 4.5 },
        { id: 2, name: 'Restaurant B', description: 'Description B', image: 'image-b.jpg', cuisine: 'Chinese', rating: 4.0 },
        { id: 3, name: 'Restaurant C', description: 'Description C', image: 'image-c.jpg', cuisine: 'Mexican', rating: 4.2 },
      ];
      setRestaurants(data);
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search restaurants..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <Button variant="outline-secondary">Search</Button>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <div className="sidebar">
            <h5>Filters</h5>
            <Form>
              <Form.Group controlId="filterCuisine">
                <Form.Label>Cuisine</Form.Label>
                <Form.Control as="select">
                  <option>All</option>
                  <option>Italian</option>
                  <option>Chinese</option>
                  <option>Mexican</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="filterRating">
                <Form.Label>Rating</Form.Label>
                <Form.Control as="select">
                  <option>All</option>
                  <option>4.5 & up</option>
                  <option>4.0 & up</option>
                  <option>3.5 & up</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
        </Col>
        <Col md={6}>
          <Row>
            {filteredRestaurants.map((restaurant) => (
              <Col md={6} key={restaurant.id} className="mb-4">
                <Card onClick={() => setSelectedRestaurant(restaurant)}>
                  <Card.Img variant="top" src={restaurant.image} />
                  <Card.Body>
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Text>{restaurant.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={3}>
          {selectedRestaurant && (
            <div className="focused-window">
              <h5>{selectedRestaurant.name}</h5>
              <img src={selectedRestaurant.image} alt={selectedRestaurant.name} className="img-fluid" />
              <p>{selectedRestaurant.description}</p>
              <p><strong>Cuisine:</strong> {selectedRestaurant.cuisine}</p>
              <p><strong>Rating:</strong> {selectedRestaurant.rating}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default RestaurantPage;