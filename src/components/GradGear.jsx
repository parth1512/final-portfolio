// 1. First, create separate component files for each project
// Create these files in your components folder:

// components/GradGear.jsx
import React from 'react';
import './ProjectPages.css'; // Shared styles for project pages

const GradGear = () => {
  return (
    <div className="project-page-container">
      <div className="project-hero">
        <h1 className="project-title2">Grad Gear</h1>
        <p className="project-subtitle">Tailored Laptop Recommendation Website</p>
        <div className="project-tech-stack">
          <span className="tech-tag">React JS</span>
          <span className="tech-tag">Tailwind CSS</span>
          <span className="tech-tag">Node JS</span>
        </div>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Project Overview</h2>
          <p>
            Grad Gear is a comprehensive laptop recommendation platform designed 
            to help students and professionals find the perfect laptop based on 
            their specific needs, budget, and use cases.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li>Smart recommendation algorithm</li>
            <li>Budget-based filtering</li>
            <li>Performance comparison tools</li>
            <li>User reviews and ratings</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Screenshots</h2>
          <div className="project-gallery">
            {/* Add your project screenshots here */}
            <div className="screenshot-placeholder">
              Screenshot 1
            </div>
            <div className="screenshot-placeholder">
              Screenshot 2
            </div>
          </div>
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

export default GradGear;