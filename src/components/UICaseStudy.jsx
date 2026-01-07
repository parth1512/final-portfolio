import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import './UICaseStudy.css';

// Import Assets
import heroImage from '../assets/case-study/Game/Static without prototype.png';
// import videoDemo from '../assets/case-study/Game/Video Demo UI UX.mov';
const videoDemo = ""; // File missing
import pdfFile from '../assets/case-study/Game/Design_Approach_Documentation_Hitwicket (1).pdf';

const UICaseStudy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="case-study-container">
            {/* Navigation */}
            <nav className="case-study-nav">
                <Link to="/" className="back-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Portfolio
                </Link>
            </nav>

            {/* 1. HERO VIDEO LOOP */}
            <div className="hero-video-container">
                <video
                    className="hero-video-loop"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={heroImage}
                >
                    <source src={videoDemo} type="video/mp4" />
                    <source src={videoDemo} type="video/quicktime" />
                </video>
                <div className="video-overlay-gradient"></div>
            </div>

            {/* 2. TITLE & METADATA */}
            <header className="case-study-header">
                <div className="header-content">
                    <div className="meta-tags">
                        <span className="tag">UI/UX Design</span>
                        <span className="tag">Game Design</span>
                        <span className="tag">System Design</span>
                    </div>
                    <h1 className="main-title">Designing an In-Game Player Profile System</h1>
                    <h2 className="main-subtitle">A Hero-Centric Dashboard for Real-World Athletes</h2>
                    <p className="project-summary">
                        Reimagining how Hitwicket users interact with their team by transforming generic static profiles into dynamic, identity-driven hero dashboards inspired by modern RPGs.
                    </p>
                </div>
            </header>

            <main className="case-study-content">
                {/* 3. PROBLEM */}
                <section className="text-section">
                    <h3 className="section-label">The Product Gap</h3>
                    <h2 className="section-heading">Missing Identity in a Strategy Game</h2>
                    <p className="body-text">
                        Unlike major AAA titles like Valorant or League of Legends, where every character has a distinct identity, attributes, and lore, Hitwicket's players (real-world cricketers) were presented as generic data rows.
                    </p>
                    <p className="body-text">
                        There was no "Hero" feeling. Users struggled to form emotional connections with their squad because the interface treated them as spreadsheet entries rather than playable athletes with progression and personality.
                    </p>

                    <div className="pain-points-grid">
                        <div className="pain-point">
                            <h4>Low Engagement</h4>
                            <p>No visual hierarchy to celebrate top performers or key stats.</p>
                        </div>
                        <div className="pain-point">
                            <h4>Poor Scanability</h4>
                            <p>Critical data buried in dense, uninviting tables.</p>
                        </div>
                        <div className="pain-point">
                            <h4>Lack of Progression</h4>
                            <p>Growth and achievements weren't visualized effectively.</p>
                        </div>
                    </div>
                </section>

                {/* 4. CHALLENGE */}
                <section className="text-section challenge-wrapper">
                    <h3 className="section-label">The Challenge</h3>
                    <h2 className="section-heading-large">How might we design a scalable, game-native player profile system that treats cricketers as heroes?</h2>
                    <p className="body-text centered-text">
                        The goal was to create a system-level design solution that balances complex data density (cricket stats) with the immersive visual language of a high-end mobile game.
                    </p>
                </section>

                {/* 5. STRATEGY */}
                <section className="text-section">
                    <h3 className="section-label">Design Strategy</h3>
                    <div className="strategy-grid">
                        <div className="strategy-card">
                            <span className="strategy-icon">🎭</span>
                            <h4>Visual Storytelling</h4>
                            <p>Using pose-based character art and dynamic backgrounds to communicate "Hero Status" immediately.</p>
                        </div>
                        <div className="strategy-card">
                            <span className="strategy-icon">⚡</span>
                            <h4>Gamification Layer</h4>
                            <p>Transforming static numbers into progress bars and tier badges to trigger dopamine loops.</p>
                        </div>
                        <div className="strategy-card">
                            <span className="strategy-icon">🧩</span>
                            <h4>Atomic Architecture</h4>
                            <p>A modular card-based system scaling from mobile to tablet without breaking the grid.</p>
                        </div>
                    </div>
                </section>

                {/* 6. DESIGN DECISIONS */}
                <section className="text-section">
                    <h3 className="section-label">Key Decisions</h3>
                    <h2 className="section-heading">Information Hierarchy & Interaction</h2>
                    <p className="body-text">
                        I decoupled the "Identity Layer" (Visuals, Name, Role) from the "Utility Layer" (Stats, Skills). This ensures that the first thing a user sees is the <em>character</em>, not the math.
                    </p>
                    <ul className="decision-list">
                        <li><strong>3D to 2D Integration:</strong> Blended 3D assets with flat UI elements using glassmorphism.</li>
                        <li><strong>Progressive Disclosure:</strong> Used tabbed segmented controls to hide complexity until needed.</li>
                        <li><strong>Tactile Feedback:</strong> Designed hover states and tap interactions that feel responsive and "game-y".</li>
                    </ul>
                </section>

                {/* 7. FINAL SHOWCASE (Visuals) */}
                <section className="visual-showcase-section">
                    <div className="showcase-header">
                        <h2>Final Interface Design</h2>
                        <p>High-fidelity screens combining 3D assets, data visualization, and game UI.</p>
                    </div>
                    <div className="showcase-image-container">
                        <img src={heroImage} alt="Final UI Design Showcase" className="showcase-image" />
                        <span className="caption">Final Player Profile Interface utilizing the new system</span>
                    </div>
                </section>

                {/* 8. OUTCOMES */}
                <section className="text-section">
                    <h3 className="section-label">Outcomes</h3>
                    <h2 className="section-heading">Impact & Learnings</h2>
                    <p className="body-text">
                        This design established a new visual language for the entire game ecosystem. By treating players as "Heroes," we can increase emotional attachment, which is a key driver for retention and monetization in gacha-style sports games.
                    </p>
                    <div className="download-block">
                        <a href={pdfFile} download="Hitwicket_Player_Profile_Case_Study.pdf" className="doc-link">
                            <span className="icon">📄</span> Read Full Documentation (PDF)
                        </a>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default UICaseStudy;
