import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Show button when user is near the bottom (within 200px of bottom)
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 200;
      setIsVisible(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button 
      className="scroll-to-top-button" 
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <span className="scroll-text">scroll to top</span>
    </button>
  );
};

export default ScrollToTop;

