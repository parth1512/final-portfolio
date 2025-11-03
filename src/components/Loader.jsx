import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div style={styles.overlay}>
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <p className="loader-quote">good things take time</p>
        <div className="device-hint" aria-live="polite">
          <svg className="device-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="12" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5"/>
            <rect x="9" y="18" width="6" height="2" rx="1" fill="currentColor"/>
          </svg>
          <span className="device-text">Best experienced on desktop</span>
        </div>
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