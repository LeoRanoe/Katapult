'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollParallaxProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function ScrollParallax({
  children,
  speed = 0.5,
  direction = 'up',
  className = ''
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const transforms = {
    up: useTransform(scrollYProgress, [0, 1], [0, -50 * speed]),
    down: useTransform(scrollYProgress, [0, 1], [0, 50 * speed]),
    left: useTransform(scrollYProgress, [0, 1], [0, -50 * speed]),
    right: useTransform(scrollYProgress, [0, 1], [0, 50 * speed])
  };

  const getTransform = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: transforms[direction] };
      case 'left':
      case 'right':
        return { x: transforms[direction] };
      default:
        return { y: transforms.up };
    }
  };

  return (
    <motion.div
      ref={ref}
      style={getTransform()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
