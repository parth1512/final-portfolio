import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectPages.css';
import './Posters.css';

// Import all poster images - WebP with PNG fallbacks
import Poster1WebP from '../assets/imgs/Posters/CRM AD.webp';
import Poster1PNG from '../assets/imgs/Posters/CRM AD.png';
import Poster2WebP from '../assets/imgs/Posters/Instagram post - 28.webp';
import Poster2PNG from '../assets/imgs/Posters/Instagram post - 28.png';
import Poster3WebP from '../assets/imgs/Posters/Instagram post - 33.webp';
import Poster3PNG from '../assets/imgs/Posters/Instagram post - 33.png';
import Poster4WebP from '../assets/imgs/Posters/LLMS.webp';
import Poster4PNG from '../assets/imgs/Posters/LLMS.png';
import Poster5WebP from '../assets/imgs/Posters/No toc.webp';
import Poster5PNG from '../assets/imgs/Posters/No toc.png';
import Poster6WebP from '../assets/imgs/Posters/Own color Scheme.webp';
import Poster6PNG from '../assets/imgs/Posters/Own color Scheme.png';
import Poster7WebP from '../assets/imgs/Posters/SIMPLE SIGN UP.webp';
import Poster7PNG from '../assets/imgs/Posters/SIMPLE SIGN UP.png';
import Poster8WebP from '../assets/imgs/Posters/Twitter post - 15.webp';
import Poster8PNG from '../assets/imgs/Posters/Twitter post - 15.png';
import Poster9WebP from '../assets/imgs/Posters/Twitter post - 42 1.webp';
import Poster9PNG from '../assets/imgs/Posters/Twitter post - 42 1.png';
import Poster10WebP from '../assets/imgs/Posters/Twitter post - 47.webp';
import Poster10PNG from '../assets/imgs/Posters/Twitter post - 47.png';
import Poster11WebP from '../assets/imgs/Posters/Vishal - Instagram.webp';
import Poster11PNG from '../assets/imgs/Posters/Vishal - Instagram.png';
import Poster12WebP from '../assets/imgs/Posters/WITH & WITHOUT.webp';
import Poster12PNG from '../assets/imgs/Posters/WITH & WITHOUT.png';

const posters = [
  { id: 1, imageWebP: Poster1WebP, imagePNG: Poster1PNG, title: 'CRM AD', category: 'Marketing' },
  { id: 2, imageWebP: Poster2WebP, imagePNG: Poster2PNG, title: 'Instagram Post 28', category: 'Social Media' },
  { id: 3, imageWebP: Poster3WebP, imagePNG: Poster3PNG, title: 'Instagram Post 33', category: 'Social Media' },
  { id: 4, imageWebP: Poster4WebP, imagePNG: Poster4PNG, title: 'LLMS', category: 'Technical' },
  { id: 5, imageWebP: Poster5WebP, imagePNG: Poster5PNG, title: 'No TOC', category: 'Design' },
  { id: 6, imageWebP: Poster6WebP, imagePNG: Poster6PNG, title: 'Own Color Scheme', category: 'Design' },
  { id: 7, imageWebP: Poster7WebP, imagePNG: Poster7PNG, title: 'Simple Sign Up', category: 'UI/UX' },
  { id: 8, imageWebP: Poster8WebP, imagePNG: Poster8PNG, title: 'Twitter Post 15', category: 'Social Media' },
  { id: 9, imageWebP: Poster9WebP, imagePNG: Poster9PNG, title: 'Twitter Post 42', category: 'Social Media' },
  { id: 10, imageWebP: Poster10WebP, imagePNG: Poster10PNG, title: 'Twitter Post 47', category: 'Social Media' },
  { id: 11, imageWebP: Poster11WebP, imagePNG: Poster11PNG, title: 'Vishal Instagram', category: 'Social Media' },
  { id: 12, imageWebP: Poster12WebP, imagePNG: Poster12PNG, title: 'With & Without', category: 'Design' },
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

  const openLightbox = (poster) => {
    // Use WebP if supported, fallback to PNG
    const image = poster.imageWebP || poster.imagePNG;
    setLightboxImage({ webp: poster.imageWebP, png: poster.imagePNG });
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
            onClick={() => openLightbox(poster)}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="poster-image-wrapper">
              <picture>
                <source srcSet={poster.imageWebP} type="image/webp" />
                <img src={poster.imagePNG} alt={poster.title} />
              </picture>
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
          <picture>
            <source srcSet={lightboxImage.webp} type="image/webp" />
            <img src={lightboxImage.png} alt="Poster" className="lightbox-image" />
          </picture>
        </div>
      )}
    </div>
  );
};

export default Posters;

