import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';
import Frame from '../assets/imgs/Frame.jpg';
import Frame2 from '../assets/imgs/Frame2.jpg';
import port from '../assets/imgs/port.jpg';

const Projects = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  const projects = [
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
    }
  ];

  return (
    <div className="projects-responsive-wrapper">
      <div className="projects-container" id="projects-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card-modern"
            onClick={() => handleCardClick(project.path)}
          >
            <div className="project-card-image-wrapper">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-card-image"
              />
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
      <h1 className="projects-section-title">PROJECTS</h1>
    </div>
  );
};

export default Projects;
