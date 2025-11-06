// 1. First, create separate component files for each project
// Create these files in your components folder:

// components/GradGear.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectPages.css'; // Shared styles for project pages
import ss1 from '../assets/imgs/ss1.png';
import ss2 from '../assets/imgs/ss2.png';

const GradGear = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="project-page-container">
      <button className="project-back-button" onClick={handleGoBack}>
        ← Back
      </button>
      <div className="project-hero">
        <h1 className="project-title2">Grad Gear</h1>
        <p className="project-subtitle">Tailored Laptop Recommendation Website</p>
        <div className="project-tech-stack">
          <span className="tech-tag">React JS</span>
          <span className="tech-tag">Tailwind CSS</span>
          <span className="tech-tag">Node JS</span>
          <span className="tech-tag">OpenAI GPT-4</span>
          <span className="tech-tag">Amazon Affiliate API</span>
        </div>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Project Overview</h2>
          <p>
            Grad Gear is an AI-powered laptop recommendation platform designed to simplify the search for the perfect device. By leveraging OpenAI's GPT-4 and Amazon's Affiliate API, Grad Gear analyzes user preferences, budget, and specific needs through an interactive multi-step questionnaire. The platform delivers highly personalized laptop suggestions, complete with direct purchase links and the option to receive recommendations via email. With a modern, responsive interface and seamless user experience, Grad Gear helps students and professionals make informed decisions quickly and confidently.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li>Smart recommendation algorithm powered by OpenAI GPT-4</li>
            <li>Budget-based filtering with Amazon Affiliate API integration</li>
            <li>Receive personalized laptop recommendations directly to your email</li>
            <li>Modern, responsive UI with real-time validation and smooth animations</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Screenshots</h2>
          <div className="project-gallery">
            <a href={ss2} target="_blank" rel="noopener noreferrer">
              <img src={ss2} alt="Grad Gear Screenshot 1" className="project-screenshot" />
            </a>
            <a href={ss1} target="_blank" rel="noopener noreferrer">
              <img src={ss1} alt="Grad Gear Screenshot 2" className="project-screenshot" />
            </a>
          </div>
        </section>

        <section className="project-section">
          <h2>Links</h2>
          
          <div className="project-links">
          <a href="https://gradgear-1-frontend.onrender.com" className="project-link" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://github.com/parth1512/GradGear-" className="project-link" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GradGear;