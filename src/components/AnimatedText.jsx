import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedText({ text, children, className = '', mode: _mode = 'chars' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  if (text) {
    const items = text.split(' ');

    return (
      <motion.span
        ref={ref}
        className={`inline-block ${className}`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 1 },
          visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
        }}
      >
        {items.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom mr-1.5 md:mr-2">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: "110%", rotateZ: 5 },
                visible: { opacity: 1, y: 0, rotateZ: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );
}
