'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorPosition {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    // Handle cursor variants based on element types
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.matches('button, a, [role="button"]')) {
        setCursorVariant('button');
      } else if (target.matches('input, textarea, [contenteditable]')) {
        setCursorVariant('text');
      } else if (target.matches('[data-cursor="magnetic"]')) {
        setCursorVariant('magnetic');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseenter', mouseEnter);
    window.addEventListener('mouseleave', mouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseenter', mouseEnter);
      window.removeEventListener('mouseleave', mouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: '#00FFA3',
      mixBlendMode: 'difference' as const,
    },
    button: {
      width: 64,
      height: 64,
      backgroundColor: 'transparent',
      border: '2px solid #00FFA3',
      mixBlendMode: 'normal' as const,
    },
    text: {
      width: 2,
      height: 24,
      backgroundColor: '#00FFA3',
      mixBlendMode: 'difference' as const,
    },
    magnetic: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(0, 255, 163, 0.2)',
      border: '1px solid #00FFA3',
      mixBlendMode: 'normal' as const,
    }
  };

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      style={{
        x: mousePosition.x - (variants[cursorVariant as keyof typeof variants]?.width || 16) / 2,
        y: mousePosition.y - (variants[cursorVariant as keyof typeof variants]?.height || 16) / 2,
      }}
      animate={variants[cursorVariant as keyof typeof variants]}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: isVisible ? 1 : 0 }}
    />
  );
}
