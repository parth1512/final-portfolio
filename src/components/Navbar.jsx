import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (location.pathname === '/') {
      // If already on the root page, scroll to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to the root page
      navigate('/');
    }
  };

  const handleNavigation = (id) => {
    if (location.pathname === '/') {
      // Scroll directly if already on the home page
      const section = document.getElementById(id);
      if (section) {
        const offset = -150; // Adjust for sticky navbar
        const top = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      // Navigate to home with the section ID in state
      navigate('/', { state: { scrollTo: id } });
    }
  };

  return (
    <div className="navbar">
      <div className="Logo">
        {/* Handle logo click for scroll or navigation */}
        <a href="/" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li
          className="navbar-item-project"
          onClick={() => handleNavigation('project')}
        >
          Projects
        </li>
        <li
          className="navbar-item-contact"
          onClick={() => handleNavigation('contact')}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
