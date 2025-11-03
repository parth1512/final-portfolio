import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { enableSmoothScroll } from './utils/smoothScroll.js'

function Root() {
  useEffect(() => {
    const cleanup = enableSmoothScroll();
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />)
