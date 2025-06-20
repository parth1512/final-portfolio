import React from 'react';
import Lanyard from '../components/Lanyard.jsx';
import './About.css';
import { useEffect } from 'react';

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const offset = -150; // Adjust this based on your sticky navbar height or other factors
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className="about-page">
      <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
      </div>
      <div className="info">
        <h2>Hi, I'm Parth – a <span className="blueshade">Frontend Developer </span>passionate about crafting seamless digital experiences.</h2>
        <br></br>
        <p>With a background in<span className="blueshade"> computer science</span>  and a creative approach, I specialize in building user-friendly, visually appealing, and responsive web interfaces using modern tools like React and Tailwind CSS. Let’s create something amazing together!</p>
        <button className="btn" onClick={() => handleScroll('contact')}> lets connect </button>
        <h1>ABOUT<span className="me-color"> ME</span></h1>
      </div>
      
      </>
  );
};

export default About;
