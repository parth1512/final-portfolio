import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';
import Frame from '../assets/imgs/Frame.jpg';
import Frame2 from '../assets/imgs/Frame2.jpg';
import port from '../assets/imgs/port.jpg';
import Project1 from '../assets/imgs/Project1.jpg';
import RedFlowerHome from '../assets/imgs/red flower/Home.png';
import RedFlowerCardWebP from '../assets/imgs/red flower/RedFlowerCard.webp';
import RedFlowerCardPNG from '../assets/imgs/red flower/RedFlowerCard.png';
import PosterCardWebP from '../assets/imgs/Posters/PosterCard.webp';
import PosterCardPNG from '../assets/imgs/Posters/PosterCard.png';

const Projects = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleCardClick = (path) => {
    navigate(path);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
      const isAtStart = scrollLeft <= 10;
      setShowRightArrow(!isAtEnd);
      setShowLeftArrow(!isAtStart);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const projects = [
    {
      id: 'redflower',
      title: 'Red Flower',
      subtitle: 'Premium E-Commerce UX/UI Design',
      imageWebP: RedFlowerCardWebP,
      imagePNG: RedFlowerCardPNG,
      tech: ['Figma', 'UI/UX Design', 'Design System', 'User Research'],
      path: '/red-flower',
      color: '#E63946'
    },
    {
      id: 'gradgear',
      title: 'Grad Gear',
      subtitle: 'AI-Powered Laptop Recommendations',
      image: Frame,
      tech: ['React JS', 'Tailwind CSS', 'Node JS', 'OpenAI GPT-4'],
      path: '/GradGear',
      color: '#0290FF'
    },
    {
      id: 'yantra',
      title: 'Yantra Hack',
      subtitle: 'Hackathon Registration Platform',
      image: port,
      tech: ['React JS', 'Node JS', 'Tailwind CSS'],
      path: '/portfolio-project',
      color: '#6C5CE7'
    },
    {
      id: 'concept',
      title: 'Concept Designs',
      subtitle: 'UX/UI Case Studies',
      image: Frame2,
      tech: ['Figma', 'UI/UX Design', 'Concept Design'],
      path: '/rate-my-dorm',
      color: '#02c2ff'
    },
    {
      id: 'posters',
      title: 'Posters',
      subtitle: 'Graphic Design Portfolio - KUBERNS & IEEE CS',
      imageWebP: PosterCardWebP,
      imagePNG: PosterCardPNG,
      tech: ['Graphic Design', 'Adobe Creative Suite', 'Social Media', 'Marketing'],
      path: '/posters',
      color: '#6C5CE7'
    },
  ];

  return (
    <div className="projects-responsive-wrapper">
      <div className={`projects-scroll-wrapper ${showLeftArrow ? 'has-left-arrow' : ''} ${showRightArrow ? 'has-right-arrow' : ''}`}>
        <div 
          className="projects-container" 
          id="projects-container"
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card-modern"
              onClick={() => handleCardClick(project.path)}
            >
              <div className="project-card-image-wrapper">
                {project.imageWebP ? (
                  <picture>
                    <source srcSet={project.imageWebP} type="image/webp" />
                    <img 
                      src={project.imagePNG || project.image} 
                      alt={project.title}
                      className="project-card-image"
                    />
                  </picture>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-card-image"
                  />
                )}
                <div className="project-card-overlay" />
              </div>
              <div className="project-card-content">
                <div className="project-card-header">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-subtitle">{project.subtitle}</p>
                </div>
                <div className="project-card-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="project-tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-card-footer">
                  <span className="project-card-link">
                    View Project <span className="arrow">→</span>
                  </span>
                </div>
              </div>
              <div 
                className="project-card-accent"
                style={{ '--accent-color': project.color }}
              />
            </div>
          ))}
        </div>
        {showLeftArrow && (
          <button 
            className="scroll-arrow-button scroll-arrow-left"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <svg 
              className="arrow-icon" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ background: 'transparent', backgroundColor: 'transparent' }}
            >
              <path 
                d="M15 18L9 12L15 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </button>
        )}
        {showRightArrow && (
          <button 
            className="scroll-arrow-button scroll-arrow-right"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <svg 
              className="arrow-icon" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ background: 'transparent', backgroundColor: 'transparent' }}
            >
              <path 
                d="M9 18L15 12L9 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </button>
        )}
      </div>
      <h1 className="projects-section-title">PROJECTS</h1>
    </div>
  );
};

export default Projects;
