import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { getAssetUrl } from '../utils/assets';
const pp = getAssetUrl('imgs/pp.png');

const ConnectButton = ({ layoutId }) => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
        setIsHovered(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    return (
        <motion.a
            layoutId={layoutId}
            layout="position"
            className="connect-btn"
            href="#contact"
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            animate={{
                x: position.x * 0.2, // Magnetic strength
                y: position.y * 0.2,
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 20,
                mass: 0.1,
                layout: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
            }}
            style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 40px',
                borderRadius: '9999px',
                textDecoration: 'none',
                cursor: 'pointer',
                overflow: 'hidden',
                background: 'rgba(20, 20, 20, 0.4)', // Darker base
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                transformStyle: 'preserve-3d', // For 3D text
            }}
        >
            {/* Moving Gradient Spotlight */}
            <motion.div
                animate={{
                    x: isHovered ? position.x * 0.8 : 0,
                    y: isHovered ? position.y * 0.8 : 0,
                    opacity: isHovered ? 1 : 0,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '200%',
                    height: '200%',
                    transform: 'translate(-50%, -50%)',
                    background: 'radial-gradient(circle closest-side, rgba(2, 144, 255, 0.4), transparent)',
                    zIndex: 0,
                    pointerEvents: 'none',
                }}
            />

            {/* Shimmer Border */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '9999px',
                    padding: '2px', // Border width
                    background: 'linear-gradient(90deg, transparent, rgba(2, 144, 255, 0.5), transparent)',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    pointerEvents: 'none',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                }}
            />

            {/* Text Container */}
            <motion.span
                layout="position"
                style={{
                    position: 'relative',
                    zIndex: 1,
                    color: 'white',
                    fontFamily: "'SFpro', sans-serif",
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                }}
            >
                <img
                    src={pp}
                    alt="pfp"
                    style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}
                />
                <span style={{ textShadow: isHovered ? "0 0 15px rgba(2, 144, 255, 0.8)" : "none", transition: "text-shadow 0.3s" }}>Connect Me</span>
                <motion.span
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    →
                </motion.span>
            </motion.span>
        </motion.a>
    );
};

export default ConnectButton;
