// `src/components/common/Sidebar.jsx`
import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faShieldAlt, faCog, faBars } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <Button variant="link" onClick={toggleSidebar} className="toggle-btn">
        <FontAwesomeIcon icon={faBars} className="icon-black icon-large" />
      </Button>
      <Nav className={`d-flex flex-column align-items-${collapsed ? "center":"start"}`}>
        <Nav.Item>
          <Nav.Link as={Link} to="/dashboard">
            <FontAwesomeIcon icon={faTachometerAlt} className="icon-black icon-large" /> <p className="mt-0 mb-0 ps-2 text-nowrap icon-text-black"> {!collapsed && "Dashboard"} </p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/settings/personal">
            <FontAwesomeIcon icon={faUser} className="icon-black icon-large" /> <p className="mt-0 mb-0 ps-2 text-nowrap icon-text-black">{!collapsed && 'Personal Settings'}</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/settings/privacy">
            <FontAwesomeIcon icon={faShieldAlt} className="icon-black icon-large" /> <p className="mt-0 mb-0 ps-2 text-nowrap icon-text-black">{!collapsed && 'Privacy Settings'}</p>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/settings/other">
            <FontAwesomeIcon icon={faCog} className="icon-black icon-large" /> <p className="mt-0 mb-0 ps-2 text-nowrap icon-text-black">{!collapsed && 'Other Settings'}</p>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;