import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectPages.css';
import './Posters.css';

const Posters = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const handleGoBack = () => {
    navigate('/');
  };

  const categories = ['All', 'Social Media', 'Marketing', 'Technical', 'Design', 'UI/UX'];

  return (
    <div className="project-page-container posters-page">
      <button className="project-back-button" onClick={handleGoBack}>
        ← Back
      </button>

      {/* Hero Section */}
      <div className="posters-hero">
        <div className="posters-hero-content">
          <div className="posters-badge">Graphic Design Portfolio</div>
          <h1 className="posters-title">POSTERS</h1>
          <p className="posters-subtitle">
            A collection of creative poster designs for various clients and organizations,
            including work for KUBERNS and IEEE CS. Showcasing diverse styles, from social
            media graphics to technical illustrations and marketing materials.
          </p>
          <div className="posters-cta">
            <a
              href="https://www.instagram.com/ieeecs_vit/"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              View on Instagram
            </a>
          </div>
        </div>
      </div>

      <div style={{ padding: '4rem', textAlign: 'center', color: '#888' }}>
        <h2>Poster gallery is currently being updated.</h2>
        <p>Please check back later or visit the Instagram link above.</p>
      </div>

    </div>
  );
};

export default Posters;

