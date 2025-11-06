import React, { useEffect } from 'react';
import Lanyard from '../components/Lanyard.jsx';
import './About.css';
import { useNavigate, useLocation } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  const handleScroll = (id) => {
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

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
      <button className="about-back-button" onClick={handleGoBack}>
        ← Back
      </button>
    <div className="about-page">
      <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
      </div>
      <div className="info">
        <h2>Hi, I'm Parth – a <span className="blueshade">Frontend Developer </span>passionate about crafting seamless digital experiences.</h2>
        <br></br>
        <p>With a background in information technology and a strong foundation in both <span className="blueshade">design</span> & <span className="blueshade">frontend devlopment</span>, I specialize in crafting visually compelling, user-centric, and highly responsive web interfaces. I combine React with solid UI/UX principles to create clean, intuitive, and visually refined interfaces.<br></br> Let's build something exceptional together!</p>
        <button className="btn" onClick={() => handleScroll('contact')}> lets connect </button>
        <h1>ABOUT<span className="me-color"> ME</span></h1>
      </div>
      
      </>
  );
};

export default About;
