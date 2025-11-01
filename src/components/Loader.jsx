import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div style={styles.overlay}>
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <p className="loader-quote">good things take time</p>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(17, 17, 17, 0.95)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    transition: 'opacity 0.4s',
  },
};

export default Loader; 