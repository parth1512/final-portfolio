import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero.jsx';
import AnimatedBlueGradient from '../components/AnimatedBlueGradient.jsx';
import Projects from '../components/Projects.jsx';
import ContactMe from '../components/ContactMe.jsx';
import './Home.css';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const desktop = width > 1024;
      setIsDesktop(desktop);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          // Also add visible class to projects container for card animations
          if (entry.target.id === 'project') {
            const container = document.getElementById('projects-container');
            if (container) {
              container.classList.add('visible');
            }
          }
        }
      });
    }, observerOptions);

    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress indicator
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollProgress(progress);

      // Add scrolled class to body for background effect
      if (scrollTop > 100) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
      <Hero />
      {isDesktop && window.innerWidth > 1024 && (
        <div className="gradient-container">
          <AnimatedBlueGradient />
        </div>
      )}
      <div className="projects-section" id="project" ref={projectsRef}>
        <Projects />
      </div>
      <div className="contact-section" id="contact" ref={contactRef}>
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
