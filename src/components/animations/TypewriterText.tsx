'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterText({
  phrases,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
}: TypewriterTextProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 w-1 h-[1em] bg-primary inline-block"
      />
    </div>
  );
}
