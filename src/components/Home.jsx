import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import AnimatedBlueGradient from '../components/AnimatedBlueGradient.jsx';
import Projects from '../components/Projects.jsx';
import ContactMe from '../components/ContactMe.jsx';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const desktop = width > 1024;
      console.log('Screen width:', width, 'Is desktop:', desktop);
      setIsDesktop(desktop);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  console.log('Current isDesktop state:', isDesktop);

  return (
    <div>
      <Hero />
      {isDesktop && window.innerWidth > 1024 && (
        <div className="gradient-container">
          <AnimatedBlueGradient />
        </div>
      )}
      <div className="projects-section" id="project">
        <Projects />
      </div>
      <div className="contact-section" id="contact">
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
