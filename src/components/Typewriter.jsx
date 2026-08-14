import React from 'react';
import { motion } from 'framer-motion';

export default function Typewriter({ text }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      variants={{
        hidden: { opacity: 1 },
        visible: { transition: { staggerChildren: 0.05 } },
      }}
      className="inline-block"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
