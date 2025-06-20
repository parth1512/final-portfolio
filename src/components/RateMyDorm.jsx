import React from 'react';
import './ProjectPages.css';

const RateMyDorm = () => {
  return (
    <div className="project-page-container">
      <div className="project-hero">
        <h1 className="project-title2">Rate My Dorm</h1>
        <p className="project-subtitle">Dormitory Rating Platform</p>
        <div className="project-tech-stack">
          <span className="tech-tag">HTML</span>
          <span className="tech-tag">CSS</span>
          <span className="tech-tag">JavaScript</span>
        </div>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Project Overview</h2>
          <p>
            A platform for students to rate and review their dormitory 
            experiences, helping future students make informed housing decisions.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li>User rating system</li>
            <li>Review management</li>
            <li>Search and filter options</li>
            <li>Interactive maps</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Technical Implementation</h2>
          <p>
            Built with vanilla JavaScript for dynamic interactions, 
            responsive CSS for cross-device compatibility, and semantic HTML 
            for accessibility.
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

export default RateMyDorm;