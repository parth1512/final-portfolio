// First, let's add some debugging to your Projects component
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TiltedCard from './TiltedCard';
import './Project.css';
import Gradient from '../assets/imgs/Gradient.png';
import Frame from '../assets/imgs/Frame.jpg';
import Frame2 from '../assets/imgs/Frame2.jpg';
import port from '../assets/imgs/port.jpg';

const Projects = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    console.log('Card clicked, navigating to:', path); // Debug log
    navigate(path);
  };

  // Test function to verify navigation works
  const testNavigation = () => {
    console.log('Test navigation triggered');
    navigate('/GradGear');
  };

  return (
    <div className="projects-responsive-wrapper">
      
      
      <div className="projects-container">
        <TiltedCard
          imageSrc={Frame}
          altText="Grad Gear Project"
          captionText="React JS , Tailwind CSS, Node JS"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">GRAD GEAR</p>
          }
          onClick={() => {
            console.log('TiltedCard onClick triggered for GradGear'); // Debug log
            handleCardClick('/GradGear');
          }}
        />
        
        <TiltedCard
          imageSrc={port}
          altText="Yantra Hack"
          captionText="React JS , Node JS , Tailwind CSS"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">Yantra Hack</p>
          }
          onClick={() => {
            console.log('TiltedCard onClick triggered for Portfolio'); // Debug log
            handleCardClick('/portfolio-project');
          }}
        />
        
        <TiltedCard
          imageSrc={Frame2}
          altText="Concept Designs"
          captionText="HTML, CSS, JavaScript"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">Concept Designs</p>
          }
          onClick={() => {
            console.log('TiltedCard onClick triggered for Concept Designs'); // Debug log
            handleCardClick('/rate-my-dorm');
          }}
        />
      </div>
      
      <div className="project-title-container">
        <h1 className="project-title">PROJECTS</h1>
        <p className="project-title-detail">
          Showcasing a blend of <span className="blue-text">creativity</span> and{' '}
          <span className="blue-text">functionality</span> through GradGear, a
          tailored laptop recommendation website; this interactive portfolio;
          and an exciting project coming soon
        </p>
      </div>

      <div className="gradeient2">
        <img src={Gradient} alt="Gradient" />
      </div>
    </div>
  );
};

export default Projects;