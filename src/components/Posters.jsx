import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectPages.css';
import './Posters.css';

// Import all poster images
import Poster1 from '../assets/imgs/Posters/CRM AD.png';
import Poster2 from '../assets/imgs/Posters/Instagram post - 28.png';
import Poster3 from '../assets/imgs/Posters/Instagram post - 33.png';
import Poster4 from '../assets/imgs/Posters/LLMS.png';
import Poster5 from '../assets/imgs/Posters/No toc.png';
import Poster6 from '../assets/imgs/Posters/Own color Scheme.png';
import Poster7 from '../assets/imgs/Posters/SIMPLE SIGN UP.png';
import Poster8 from '../assets/imgs/Posters/Twitter post - 15.png';
import Poster9 from '../assets/imgs/Posters/Twitter post - 42 1.png';
import Poster10 from '../assets/imgs/Posters/Twitter post - 47.png';
import Poster11 from '../assets/imgs/Posters/Vishal - Instagram.png';
import Poster12 from '../assets/imgs/Posters/WITH & WITHOUT.png';

const posters = [
  { id: 1, image: Poster1, title: 'CRM AD', category: 'Marketing' },
  { id: 2, image: Poster2, title: 'Instagram Post 28', category: 'Social Media' },
  { id: 3, image: Poster3, title: 'Instagram Post 33', category: 'Social Media' },
  { id: 4, image: Poster4, title: 'LLMS', category: 'Technical' },
  { id: 5, image: Poster5, title: 'No TOC', category: 'Design' },
  { id: 6, image: Poster6, title: 'Own Color Scheme', category: 'Design' },
  { id: 7, image: Poster7, title: 'Simple Sign Up', category: 'UI/UX' },
  { id: 8, image: Poster8, title: 'Twitter Post 15', category: 'Social Media' },
  { id: 9, image: Poster9, title: 'Twitter Post 42', category: 'Social Media' },
  { id: 10, image: Poster10, title: 'Twitter Post 47', category: 'Social Media' },
  { id: 11, image: Poster11, title: 'Vishal Instagram', category: 'Social Media' },
  { id: 12, image: Poster12, title: 'With & Without', category: 'Design' },
];

const Posters = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredPoster, setHoveredPoster] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const handleGoBack = () => {
    navigate('/');
  };

  const categories = ['All', 'Social Media', 'Marketing', 'Technical', 'Design', 'UI/UX'];

  const filteredPosters = selectedCategory === 'All' 
    ? posters 
    : posters.filter(poster => poster.category === selectedCategory);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

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
          <div className="posters-stats">
            <div className="poster-stat">
              <span className="stat-number">{posters.length}</span>
              <span className="stat-label">Posters</span>
            </div>
            <div className="poster-stat">
              <span className="stat-number">{categories.length - 1}</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="poster-stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Organizations</span>
            </div>
          </div>
          <div className="posters-cta">
            <a 
              href="https://www.instagram.com/ieeecs_vit/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              View on Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="posters-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posters Grid */}
      <div className="posters-grid">
        {filteredPosters.map((poster, index) => (
          <div
            key={poster.id}
            className="poster-card"
            onMouseEnter={() => setHoveredPoster(poster.id)}
            onMouseLeave={() => setHoveredPoster(null)}
            onClick={() => openLightbox(poster.image)}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="poster-image-wrapper">
              <img src={poster.image} alt={poster.title} />
              <div className={`poster-overlay ${hoveredPoster === poster.id ? 'active' : ''}`}>
                <div className="poster-open-text">Open</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <img src={lightboxImage} alt="Poster" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default Posters;

