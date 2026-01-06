import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import TextReveal from './TextReveal';
import './Project.css';

// Images
import Frame from '../assets/imgs/Frame.jpg';
import Frame2 from '../assets/imgs/Frame2.jpg';
import port from '../assets/imgs/port.jpg';
import Project1 from '../assets/imgs/Project1.jpg';
import RedFlowerHome from '../assets/imgs/red flower/Home.png';
import RedFlowerCardWebP from '../assets/imgs/red flower/RedFlowerCard.webp';
import RedFlowerCardPNG from '../assets/imgs/red flower/RedFlowerCard.png';
import PosterCardWebP from '../assets/imgs/Posters/PosterCard.webp';
import PosterCardPNG from '../assets/imgs/Posters/PosterCard.png';
import CaseStudyCover from '../assets/case-study/iPhone 16 Pro.png';
import HitwicketHero from '../assets/case-study/MacBook-01.png';

const projects = [
  {
    id: 'hitwicket-case-study',
    title: 'Hitwicket - In-Game Player Profile',
    subtitle: 'UI/UX Case Study',
    description: "Reimagining how Hitwicket users interact with their team by transforming generic static profiles into dynamic, identity-driven hero dashboards.",
    image: HitwicketHero,
    tech: ['UI/UX Design', 'Game Design', 'System Design', 'Prototyping'],
    path: '/case-study',
    color: '#1a1a1a'
  },
  {
    id: 'ui-case-study',
    title: 'Google Maps - Meet in the middle',
    subtitle: 'Feature Implementation',
    description: "A feature implementation for coordinated meet-ups between people in different locations",
    image: CaseStudyCover,
    tech: ['Figma', 'UI/UX Design', 'Prototyping', 'UX Research', 'Feature'],
    path: '/case-study',
    color: '#000000'
  },
  {
    id: 'redflower',
    title: 'Red Flower',
    subtitle: 'Premium E-Commerce UX/UI Design',
    description: "A complete design system and high-fidelity prototype for a luxury florist brand. Focusing on an elegant, seamless user journey from discovery to checkout.",
    imageWebP: RedFlowerCardWebP,
    imagePNG: RedFlowerCardPNG,
    tech: ['Figma', 'UI/UX Design', 'Design System', 'User Research'],
    path: '/red-flower',
    color: '#1a1a1a' // Darker backing for the card itself
  },
  {
    id: 'posters',
    title: 'Posters Collection',
    subtitle: 'Graphic Design Portfolio',
    description: "A curated collection of marketing assets and creative posters designed for KUBERNS & IEEE CS. Exploring typography, composition, and visual impact.",
    imageWebP: PosterCardWebP,
    imagePNG: PosterCardPNG,
    tech: ['Adobe Creative Suite', 'Graphic Design', 'Marketing', 'Typography'],
    path: '/posters',
    color: '#1a1a1a'
  },
  {
    id: 'yantra',
    title: 'Yantra Hack',
    subtitle: 'Hackathon Platform',
    description: "The official registration and management portal for Yantra Hack. handled hundreds of participants with a robust backend and smooth registration flow.",
    image: port,
    tech: ['React JS', 'Node JS', 'MongoDB', 'Tailwind CSS'],
    path: '/portfolio-project',
    color: '#1a1a1a'
  },
];

const Card = ({ i, title, subtitle, description, tech, src, imageWebP, imagePNG, image, path, progress, range, targetScale, isLast }) => {
  const container = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);

  // Dynamic top offset to create the stack effect
  const topOffset = `calc(15vh + ${i * 100}px)`;

  // All cards have the same height
  const containerHeight = '100vh';

  return (
    <div ref={container} className="card-container" style={{ height: containerHeight }}>
      <motion.div
        style={{ scale, top: topOffset }}
        className="card"
        onClick={() => navigate(path)}
        data-cursor-text="View Project"
      >
        <div className="card-body">
          <div className="card-content">
            <div className="card-header">
              <h3 className="card-subtitle">{subtitle}</h3>
              <h2 className="card-title">{title}</h2>
            </div>

            <p className="card-description">{description}</p>

            <div className="card-tech-stack">
              {tech.map((t, idx) => (
                <span key={idx} className="tech-badge">{t}</span>
              ))}
            </div>

            <div className="card-cta">
              <span>View Case Study</span>
              <span className="arrow">→</span>
            </div>
          </div>

          <div className="card-image-wrapper">
            <motion.div className="card-image-inner" style={{ scale: imageScale }}>
              {imageWebP ? (
                <picture>
                  <source srcSet={imageWebP} type="image/webp" />
                  <img
                    src={imagePNG || image}
                    alt={title}
                    className="card-image"
                  />
                </picture>
              ) : (
                <img
                  src={image}
                  alt={title}
                  className="card-image"
                />
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <div className="projects-section-wrapper" id="projects">
      <div className="projects-header">
        <TextReveal className="section-title">SELECTED WORKS</TextReveal>
        <p className="section-subtitle">A showcase of digital products, designs, and experiences.</p>
      </div>

      <div ref={container} className="projects-stack-container">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <Card
              key={project.id}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
              isLast={i === projects.length - 1}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Projects;
