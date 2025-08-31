'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedTextProps {
  phrases: string[];
  className?: string;
  interval?: number;
}

export default function AnimatedText({ 
  phrases, 
  className = '', 
  interval = 3000 
}: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, interval);

    return () => clearInterval(timer);
  }, [phrases.length, interval]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ 
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          className="block"
        >
          {phrases[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
