import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Detect desktop only
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleLinkHover = () => setIsHovered(true);
    const handleLinkLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Attach listeners to interactive elements
    const links = document.querySelectorAll('a, button, .card, input, textarea');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    // MutationObserver to handle dynamically added elements (like portals or new cards)
    const observer = new MutationObserver(() => {
      const newLinks = document.querySelectorAll('a, button, .card, input, textarea');
      newLinks.forEach(link => {
        link.addEventListener('mouseenter', handleLinkHover);
        link.addEventListener('mouseleave', handleLinkLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Add class to hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto'; // Restore default
      observer.disconnect();
    };
  }, []);

  // If touch device, render nothing
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <motion.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        position: 'fixed',
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: 'white',
        mixBlendMode: 'difference', // This creates the inversion effect
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      animate={{
        scale: isClicked ? 0.8 : isHovered ? 2.5 : 1, // Becomes larger on hover, smaller on click
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default CustomCursor;
