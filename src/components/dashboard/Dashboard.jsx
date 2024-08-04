import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChartLine, faUtensils, faUser, faMapMarkerAlt, faHeart, faGift, faListAlt } from '@fortawesome/free-solid-svg-icons';
import personSearchingImage from '../../assets/person-searching.svg'; // Adjust the path as necessary

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const barData = {
    labels: ['Restaurant A', 'Restaurant B', 'Restaurant C'],
    datasets: [
      {
        label: 'Ratings',
        data: [4.5, 4.0, 3.5],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Visits',
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: '#4bc0c0',
      },
    ],
  };

  return (
    <Container className="mt-5">
      <Row>
        <div className="col-12">
          <Card className="mb-4 bg-dark text-white" id="welcome">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faStar} /> Welcome to the Dashboard
              </Card.Title>
              <Row>
                <div className="col-md-8 col-lg-6 d-flex align-items-center">
                  <Card.Text>
                    <p className="fs-1 fw-bold">
                      Welcome to your personalized dashboard!
                    </p>
                    <p className="fs-5">
                      Here, you can find various metrics and insights about your favorite restaurants, past visits, and user reviews.
                    </p>
                    <p className="fs-6 fw-lighter align-self-end">
                      Use the sidebar to navigate through different sections and explore the features we offer. If you need any assistance, feel free to reach out to our support team.
                    </p>
                  </Card.Text>
                </div>
                <div className="col-md-4 col-lg-6">
                  <img src={personSearchingImage} alt="Person searching for restaurant" className="img-fluid" />
                </div>
              </Row>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 col-lg-6">
          <Card className="mb-4 bg-dark text-white">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faStar} /> Ratings
              </Card.Title>
              <Bar data={barData} />
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-6">
          <Card className="mb-4 bg-dark text-white ">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faChartLine} /> Past Visits
              </Card.Title>
              <Line data={lineData} />
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card className="mb-4 bg-dark text-white ">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faUtensils} /> Recommendations
              </Card.Title>
              <Card.Text>
                Check out these top-rated restaurants based on your preferences.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card className="mb-4 bg-dark text-white ">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faUser} /> User Reviews
              </Card.Title>
              <Card.Text>
                Read reviews from other users about their dining experiences.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
            <Card className="mb-4 bg-dark text-white ">
                <Card.Body>
                    <Card.Title>
                        <FontAwesomeIcon icon={faListAlt} /> User Preferences
                    </Card.Title>
                    <Card.Text>
                        Update your preferences to get better recommendations.
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
        <div className="col-md-6 col-lg-4">
            <Card className="mb-4 bg-dark text-white ">
                <Card.Body>
                    <Card.Title>
                        <FontAwesomeIcon icon={faChartLine}/> Other Metrics
                    </Card.Title>
                    <Card.Text>
                        Explore various other metrics and analytics.
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
        <div className="col-md-6 col-lg-4">
          <Card className="mb-4 bg-dark text-white ">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Nearby Restaurants
              </Card.Title>
              <Card.Text>
                Discover restaurants near your location.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
          <Card className="mb-4 bg-dark text-white ">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faGift} /> Special Offers
              </Card.Title>
              <Card.Text>
                Check out special offers and discounts.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-4">
            <Card className="mb-4 bg-dark text-white ">
                <Card.Body>
                    <Card.Title>
                        <FontAwesomeIcon icon={faHeart} /> Favorite Restaurants
                    </Card.Title>
                    <Card.Text>
                        Your favorite restaurants at a glance.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
      </Row>
    </Container>
  );
};

export default Dashboard;