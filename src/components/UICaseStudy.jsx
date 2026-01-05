import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import './UICaseStudy.css';

// Import images
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
import pdfFile from '../assets/case-study/1.pdf';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const UICaseStudy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="case-study-container">
            <nav className="case-study-nav">
                <Link to="/" className="back-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Home
                </Link>
            </nav>

            <div className="case-study-images">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Case study slice ${index + 1}`}
                        className="case-study-img"
                        loading={index < 2 ? "eager" : "lazy"}
                    />
                ))}
            </div>

            <div className="pdf-download-section">
                <div className="pdf-card">
                    <div className="pdf-icon">📄</div>
                    <div className="pdf-info">
                        <h3>Download Full Case Study</h3>
                        <p>Get the complete documentation in PDF format.</p>
                    </div>
                    <a href={pdfFile} download="UIUX_Case_Study.pdf" className="download-btn">
                        Download PDF
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UICaseStudy;
