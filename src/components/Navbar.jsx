import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo.jsx';
import ConnectButton from './ConnectButton.jsx';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showConnectButton, setShowConnectButton] = useState(false);

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

  // Close menu when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Handle scroll detection for navbar border and button flow
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 10);

      // Trigger the button flow slightly later
      setShowConnectButton(scrollPosition > 400);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine active route
  const isProjectsActive = location.pathname === '/' && window.location.hash === '#project';

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="Logo" onClick={handleLogoClick}>
        <Logo />
      </div>

      {/* Hamburger Menu Button */}
      <div className="navbar-mobile-controls">
        <AnimatePresence>
          {showConnectButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="mobile-nav-cta"
            >
              <ConnectButton layoutId="connect-button" />
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              toggleMenu();
            }
          }}
        >
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className={`navbar-list ${isMenuOpen ? 'mobile-open' : ''}`}>
        <li className="navbar-item">
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </li>
        <li
          className={`navbar-item-project ${isProjectsActive ? 'active' : ''}`}
          onClick={() => handleNavigation('project')}
        >
          Projects
        </li>
        <li className="navbar-nav-cta desktop-only">
          <AnimatePresence mode="wait">
            {!showConnectButton ? (
              <motion.span
                key="contact-text"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={() => handleNavigation('contact')}
                className="navbar-item-contact"
              >
                Contact
              </motion.span>
            ) : (
              <motion.div
                key="nav-button"
                className="nav-connect-wrapper"
              >
                <ConnectButton layoutId="connect-button" />
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
