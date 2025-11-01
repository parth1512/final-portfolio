import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import GradGear from './components/GradGear.jsx';
import PortfolioProject from './components/PortfolioProject.jsx';
import RateMyDorm from './components/RateMyDorm.jsx';
import Loader from './components/Loader.jsx';

import './App.css';

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const section = document.getElementById(id);
        if (section) {
          const offset = -150; // Adjust for sticky navbar
          const top = section.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      try {
        // Wait for fonts to load if FontFace API is available
        if (document.fonts) {
          await document.fonts.ready;
        }
        
        // Small delay for smooth transition
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setLoading(false), 400);
        }, 800);
      } catch (error) {
        console.error('Error loading:', error);
        // Fallback if anything fails
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setLoading(false), 400);
        }, 1000);
      }
    };
    loadAll();
  }, []);

  return (
    <>
      {loading && (
        <div style={{ opacity: fadeOut ? 0 : 1, transition: 'opacity 0.4s' }}>
          <Loader />
        </div>
      )}
      {!loading && (
        <Router>
          <ScrollHandler />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/GradGear" element={<GradGear />} />
            <Route path="/portfolio-project" element={<PortfolioProject />} />
            <Route path="/rate-my-dorm" element={<RateMyDorm />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;