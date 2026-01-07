import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectPages.css';
import { getAssetUrl } from '../utils/assets';
const projectShot1 = getAssetUrl('imgs/ss5.png');
const projectShot2 = getAssetUrl('imgs/ss6.png');

const PortfolioProject = () => {
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
        <h1 className="project-title2">Yantra Hack Registration Website</h1>
        <p className="project-subtitle">Official hackathon registration platform</p>
        <div className="project-tech-stack">
          <span className="tech-tag">React JS</span>
          <span className="tech-tag">Node JS</span>
          <span className="tech-tag">CSS</span>
        </div>
      </div>

      <div className="project-content">
        <section className="project-section">
          <h2>Project Overview</h2>
          <p>
            A dedicated registration website built for Yantra Hack, enabling participants to seamlessly register for the event with a clean, user-friendly interface and responsive design. The platform centralizes all event-related information, simplifies onboarding, and ensures smooth data handling with a structured flow tailored specifically for large-scale hackathon registrations.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li>Clean, distraction-free layout that prioritizes clarity and reduces cognitive load for users filling forms.</li>
            <li>Consistent visual hierarchy using typography, spacing, and color to guide the user smoothly through each step.</li>
            <li>Well-structured form design with logical grouping, clear labels, and intuitive flow to minimize user friction.</li>
            <li>Unified event branding with consistent colors, typefaces, and visual elements matching Yantra Hack’s theme.</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Development Process</h2>
          <p>The website was developed using React with a component-driven architecture to maintain clean structure and scalability. The registration flow was built using controlled form components, ensuring reliable state management and smooth validation. API integrations were optimized to provide fast and consistent data handling, while CSS modules were used to maintain a clean and maintainable styling system. Special attention was given to performance—lazy loading, optimized assets, and minimal re-renders ensured a lightweight experience. The UI was designed with usability in mind, incorporating clear navigation, responsive layouts, and subtle interaction cues to guide users effectively throughout the registration process.</p>
        </section>

        <section className="project-section">
          <h2>Screenshots</h2>
          <div className="project-gallery">
            <a href={projectShot1} target="_blank" rel="noopener noreferrer">
              <img src={projectShot1} alt="Yantra Hack Registration Screenshot 1" className="project-screenshot" />
            </a>
            <a href={projectShot2} target="_blank" rel="noopener noreferrer">
              <img src={projectShot2} alt="Yantra Hack Registration Screenshot 2" className="project-screenshot" />
            </a>
          </div>
        </section>

        <section className="project-section">
          <h2>Links</h2>
          <div className="project-links">
            <a href="https://yantra-main-hack-frontend.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href="https://www.figma.com/design/gloI2hM0JpdsyIkoiZyPfr/YANTRA-HACK?node-id=23-2&t=AivwLGg5JwEpKSUK-1" className="project-link" target="_blank" rel="noopener noreferrer">
              Figma Design
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioProject;
