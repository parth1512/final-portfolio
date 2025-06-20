import React from 'react';
import './ProjectPages.css';

const PortfolioProject = () => {
  return (
    <div className="project-page-container">
      <div className="project-hero">
        <h1 className="project-title2">Portfolio Website</h1>
        <p className="project-subtitle">Interactive Personal Portfolio</p>
        <div className="project-tech-stack">
          <span className="tech-tag">React JS</span>
          <span className="tech-tag">Node JS</span>
          <span className="tech-tag">Tailwind CSS</span>
        </div>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Project Overview</h2>
          <p>
            A modern, interactive portfolio website showcasing my projects, 
            skills, and experience with smooth animations and responsive design.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li>Responsive design</li>
            <li>Interactive animations</li>
            <li>Project showcase</li>
            <li>Contact form</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Development Process</h2>
          <p>
            Built using modern React practices with a focus on performance 
            and user experience. Implemented custom animations and interactive 
            components.
          </p>
        </section>

        <section className="project-section">
          <h2>Links</h2>
          <div className="project-links">
            <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioProject;