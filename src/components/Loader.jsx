import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random jumps for a premium feel
        const jump = Math.floor(Math.random() * 10) + 1;
        return Math.min(prev + jump, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loader-overlay">


      <div className="loader-center">
        <div className="counter-number">
          {count}
        </div>
      </div>

      <div className="loader-grain" />
    </div>
  );
};

export default Loader;