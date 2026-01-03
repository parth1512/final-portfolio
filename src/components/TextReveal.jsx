import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TextReveal = ({ children, className = "", justify = "center" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    const text = typeof children === 'string' ? children : '';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03, // Speed of typing effect relative to each char
                delayChildren: 0.1
            }
        }
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: 90 // Slight 3D rotation reveal
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <motion.h1
            ref={ref}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: justify, gap: '0.2em' }} // Flex to handle words
            aria-label={text}
        >
            {text.split(" ").map((word, i) => (
                <span key={i} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                    {word.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={childVariants}
                            style={{ display: 'inline-block' }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.h1>
    );
};

export default TextReveal;
