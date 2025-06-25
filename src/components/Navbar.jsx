import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (location.pathname === '/') {
      // If already on the root page, scroll to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to the root page
      navigate('/');
    }
    setIsMenuOpen(false); // Close menu when logo is clicked
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
    setIsMenuOpen(false); // Close menu when navigation is triggered
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="Logo">
        {/* Handle logo click for scroll or navigation */}
        <a href="/" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" />
        </a>
      </div>
      
      {/* Hamburger Menu Button */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Desktop Menu */}
      <ul className={`navbar-list ${isMenuOpen ? 'mobile-open' : ''}`}>
        <li className="navbar-item">
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
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
