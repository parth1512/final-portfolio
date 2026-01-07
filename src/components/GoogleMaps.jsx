import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectPages.css';

// Import images sequentially
import img1 from '../assets/case-study/1.png';
import img2 from '../assets/case-study/2.png';
import img3 from '../assets/case-study/3.png';
import img4 from '../assets/case-study/4.png';
import img5 from '../assets/case-study/5.png';
import img6 from '../assets/case-study/6.png';
import img7 from '../assets/case-study/7.png';
import img8 from '../assets/case-study/8.png';
import img9 from '../assets/case-study/9.png';
import img10 from '../assets/case-study/10.png';

// Import PDF
import promoPdf from '../assets/case-study/1.pdf';

const GoogleMaps = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);

    const handleGoBack = () => {
        navigate('/');
    };

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    return (
        <div className="google-maps-page" style={{ backgroundColor: '#000', minHeight: '100vh' }}>
            <button
                className="project-back-button"
                onClick={handleGoBack}
                style={{
                    position: 'fixed',
                    top: '2rem',
                    left: '2rem',
                    zIndex: 100,
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: '#fff'
                }}
            >
                ← Back
            </button>

            <div className="case-study-images" style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Case study slide ${index + 1}`}
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            maxWidth: '100vw'
                        }}
                    />
                ))}
            </div>

            <div className="download-section" style={{ padding: '6rem 2rem', textAlign: 'center', background: '#000' }}>
                <a
                    href={promoPdf}
                    download="Google_Maps_Case_Study.pdf"
                    className="download-button"
                    style={{
                        display: 'inline-block',
                        padding: '1.2rem 3rem',
                        backgroundColor: '#007AFF', // Using a system blue or brand color
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '50px',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 20px rgba(0,122,255,0.4)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,122,255,0.6)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,122,255,0.4)';
                    }}
                >
                    Download Case Study PDF
                </a>
            </div>
        </div>
    );
};

export default GoogleMaps;
