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

const waitForFonts = async () => {
  if (!document.fonts) {
    // Fallback if Font Loading API is not available
    await new Promise(resolve => setTimeout(resolve, 1500));
    return;
  }

  try {
    // Wait for fonts defined in CSS @font-face to load
    // This respects the existing CSS font declarations
    await document.fonts.ready;
    
    // Double check both fonts are actually loaded
    let attempts = 0;
    const maxAttempts = 10;
    
    while (attempts < maxAttempts) {
      const sfproReady = document.fonts.check('1em SFpro');
      const hasiantReady = document.fonts.check('1em Hasiant');
      
      if (sfproReady && hasiantReady) {
        break;
      }
      
      await new Promise(resolve => setTimeout(resolve, 100));
      attempts++;
    }
  } catch (error) {
    console.error('Error waiting for fonts:', error);
    // Fallback: wait a bit longer if font checking fails
    await new Promise(resolve => setTimeout(resolve, 1500));
  }
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      try {
        // Wait for fonts defined in CSS to load (without overriding them)
        await waitForFonts();
        
        // Small delay for smooth transition
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setLoading(false), 400);
        }, 300);
      } catch (error) {
        console.error('Error loading:', error);
        // Fallback if anything fails
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setLoading(false), 400);
        }, 1500);
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