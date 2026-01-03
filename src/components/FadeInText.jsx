import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FadeInText = ({ children, className = "", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
                duration: 0.6,
                ease: [0.2, 0.65, 0.3, 0.9],
                delay: delay
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInText;
