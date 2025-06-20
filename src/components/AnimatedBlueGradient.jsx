import React from 'react';

const AnimatedBlueGradient = () => {
  return (
    <div className="gradient-container">
      <div className="gradient-wrapper">
        <div className="gradient-piece gradient-1"></div>
        <div className="gradient-piece gradient-2"></div>
        <div className="gradient-piece gradient-3"></div>
      </div>
      
      <style jsx>{`
        .gradient-container {
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
        }
        
        .gradient-wrapper {
          position: relative;
          width: 500px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 15;
          background: transparent;
        }
        
        .gradient-piece {
          position: absolute;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          filter: blur(40px);
          mix-blend-mode: screen;
          opacity: 0.9;
          will-change: transform, box-shadow, background;
          transition: all 1500ms ease-in-out;
        }
        
        .gradient-1 {
          background: radial-gradient(circle, #0290FF, #0232AB, #005FA9);
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          animation: float1 2500ms ease-in-out infinite;
          box-shadow: 
            0 0 80px rgba(2, 144, 255, 0.6),
            0 0 160px rgba(2, 50, 171, 0.4),
            0 0 240px rgba(0, 95, 169, 0.3);
        }
        
        .gradient-2 {
          background: radial-gradient(circle, #0232AB, #005FA9, #0290FF);
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          animation: float2 2500ms ease-in-out infinite;
          box-shadow: 
            0 0 80px rgba(2, 50, 171, 0.6),
            0 0 160px rgba(0, 95, 169, 0.4),
            0 0 240px rgba(2, 144, 255, 0.3);
        }
        
        .gradient-3 {
          background: radial-gradient(circle, #005FA9, #0290FF, #0232AB);
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          animation: float3 2500ms ease-in-out infinite;
          box-shadow: 
            0 0 80px rgba(0, 95, 169, 0.6),
            0 0 160px rgba(2, 144, 255, 0.4),
            0 0 240px rgba(2, 50, 171, 0.3);
        }
        
        @keyframes float1 {
          0%, 100% {
            transform: translateY(-50%) translateX(0);
          }
          33% {
            transform: translateY(-50%) translateX(15px);
          }
          66% {
            transform: translateY(-50%) translateX(-15px);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translateY(-50%) translateX(0);
          }
          33% {
            transform: translateY(-50%) translateX(-15px);
          }
          66% {
            transform: translateY(-50%) translateX(15px);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          33% {
            transform: translateX(-50%) translateY(15px);
          }
          66% {
            transform: translateX(-50%) translateY(-15px);
          }
        }
        
        @media (max-width: 768px) {
          .gradient-wrapper {
            width: 400px;
            height: 320px;
          }
          
          .gradient-piece {
            width: 200px;
            height: 200px;
          }
        }
        
        @media (max-width: 480px) {
          .gradient-wrapper {
            width: 320px;
            height: 260px;
          }
          
          .gradient-piece {
            width: 160px;
            height: 160px;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBlueGradient;
