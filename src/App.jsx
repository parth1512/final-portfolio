import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

import GradGear from './components/GradGear.jsx';
import PortfolioProject from './components/PortfolioProject.jsx';
import RateMyDorm from './components/RateMyDorm.jsx';

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
  return (
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
  );
};

export default App;