import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import GradGear from './components/GradGear.jsx';
import PortfolioProject from './components/PortfolioProject.jsx';
import RateMyDorm from './components/RateMyDorm.jsx';
import RedFlower from './components/RedFlower.jsx';
import Posters from './components/Posters.jsx';
import Loader from './components/Loader.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import UICaseStudy from './components/UICaseStudy.jsx';

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
    // Proactively load the specific faces we use
    const loads = [
      document.fonts.load('500 1em SFpro'),
      document.fonts.load('normal 1em SFpro'),
      document.fonts.load('normal 1em Hasiant')
    ];
    // Also wait for general readiness
    loads.push(document.fonts.ready);

    // Add a timeout guard to avoid hanging forever in bad network
    const timeout = new Promise(resolve => setTimeout(resolve, 4000));
    await Promise.race([Promise.all(loads), timeout]);

    // Verify both are present; if not, poll briefly
    let attempts = 0;
    const maxAttempts = 15;
    while (attempts < maxAttempts) {
      const sfproReady = document.fonts.check('500 1em SFpro') || document.fonts.check('1em SFpro');
      const hasiantReady = document.fonts.check('1em Hasiant');
      if (sfproReady && hasiantReady) break;
      await new Promise(resolve => setTimeout(resolve, 120));
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
          <CustomCursor />
          <ScrollHandler />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/GradGear" element={<GradGear />} />
            <Route path="/portfolio-project" element={<PortfolioProject />} />
            <Route path="/rate-my-dorm" element={<RateMyDorm />} />
            <Route path="/red-flower" element={<RedFlower />} />
            <Route path="/posters" element={<Posters />} />
            <Route path="/case-study" element={<UICaseStudy />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;