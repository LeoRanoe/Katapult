'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpAnimationProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function CountUpAnimation({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2,
  className = '' 
}: CountUpAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Intl.NumberFormat("en-US").format(
          Math.round(latest)
        )}${suffix}`;
      }
    });

    return () => unsubscribe();
  }, [springValue, prefix, suffix]);

  return (
    <motion.span 
      ref={ref} 
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}0{suffix}
    </motion.span>
  );
}
