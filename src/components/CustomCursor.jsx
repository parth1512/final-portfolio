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
  const [cursorText, setCursorText] = useState("");

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

    const handleLinkHover = (e) => {
      setIsHovered(true);
      // Check if the hovered element or its parents have data-cursor-text
      const target = e.target.closest('[data-cursor-text]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor-text'));
      } else {
        setCursorText("");
      }
    };

    const handleLinkLeave = () => {
      setIsHovered(false);
      setCursorText("");
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Attach listeners to interactive elements
    const attachListeners = () => {
      const links = document.querySelectorAll('a, button, .card, input, textarea, [data-cursor-text]');
      links.forEach(link => {
        link.addEventListener('mouseenter', handleLinkHover);
        link.addEventListener('mouseleave', handleLinkLeave);
      });
    };

    attachListeners();

    // MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(() => {
      attachListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Add class to hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'auto'; // Restore default

      // Cleanup listeners
      const links = document.querySelectorAll('a, button, .card, input, textarea, [data-cursor-text]');
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
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
        width: cursorText ? "auto" : 20,
        height: cursorText ? 40 : 20,
        borderRadius: cursorText ? 20 : '50%',
        backgroundColor: 'white',
        mixBlendMode: 'difference', // This creates the inversion effect
        pointerEvents: 'none',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: cursorText ? '0 15px' : 0,
      }}
      animate={{
        scale: isClicked ? 0.8 : isHovered ? (cursorText ? 1 : 2.5) : 1, // Becomes larger on hover (if no text), smaller on click
        width: cursorText ? "auto" : 20,
        height: cursorText ? 32 : 20,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      {cursorText && (
        <span style={{
          fontSize: '14px',
          fontWeight: 600,
          color: 'black',
          whiteSpace: 'nowrap',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          👀 {cursorText}
        </span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
