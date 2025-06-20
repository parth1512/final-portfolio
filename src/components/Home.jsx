import React from 'react';
import Hero from '../components/Hero.jsx';
import AnimatedBlueGradient from '../components/AnimatedBlueGradient.jsx';
import Projects from '../components/Projects.jsx';
import ContactMe from '../components/ContactMe.jsx';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="gradient-container">
        <AnimatedBlueGradient />
      </div>
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
