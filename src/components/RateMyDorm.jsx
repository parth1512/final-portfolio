import React, { useEffect } from 'react';
import './ProjectPages.css';
import ss3 from '../assets/imgs/ss3.png';
import ss4 from '../assets/imgs/ss4.png';

const RateMyDorm = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="project-page-container">
      <div className="project-hero">
        <h1 className="project-title2">Mobile App Concept Redesigns</h1>
        <p className="project-subtitle">A UX/UI Case Study (Spotify & Apple Pay)</p>
        <div className="project-tech-stack">
          <span className="tech-tag">Figma</span>
          <span className="tech-tag">UI/UX Design</span>
          <span className="tech-tag">Concept Design</span>
        </div>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Project Overview</h2>
          <p>
          This project is a conceptual exploration of two popular mobile 
            applications, redesigned to solve specific UX challenges. 
            The goal was to analyze existing user flows and propose new, 
            high-fidelity designs.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Design Decisions</h2>
          <ul className="feature-list">
            <li>
              <strong>Spotify:</strong> Prototyped a redesign by blending Apple Music's 
              clean interface with a modern frosted-glass UI aesthetic.
            </li>
            <li>
              <strong>Spotify:</strong> Focused on improving one-handed navigation 
              and creating a more intuitive "favourite" action.
            </li>
            <li>
              <strong>Apple Pay:</strong> Designed a localized product concept for 
              'Apple Pay for India,' aligning with regional user behaviors.
            </li>
            <li>
              <strong>Apple Pay:</strong> Created a seamless UX that integrated a 
              prominent QR scanner and a peer-to-peer payment flow.
            </li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Design Process & Tools</h2>
          <p>
            The entire design process was executed in Figma. This included 
            analyzing existing app screenshots, wireframing new user flows, 
            and building high-fidelity, interactive prototypes to test 
            the conceptual solutions.
          </p>
        </section>

        <section className="project-section">
          <h2>Screenshots</h2>
          <div className="project-gallery">
            <a href={ss3} target="_blank" rel="noopener noreferrer">
              <img src={ss3} alt="Concept Designs Screenshot 1" className="project-screenshot" />
            </a>
            <a href={ss4} target="_blank" rel="noopener noreferrer">
              <img src={ss4} alt="Concept Designs Screenshot 2" className="project-screenshot" />
            </a>
          </div>
        </section>

        <section className="project-section">
          <h2>Links</h2>
          <div className="project-links">
            {/* Update href="#" with your actual links */}
            <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
              View Case Study
            </a>
            <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
              Figma Prototype
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RateMyDorm;