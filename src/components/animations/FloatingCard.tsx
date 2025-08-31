'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  rotateIntensity?: number;
}

export default function FloatingCard({ 
  children, 
  className = '',
  intensity = 20,
  rotateIntensity = 10
}: FloatingCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${rotateIntensity}deg`, `-${rotateIntensity}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${rotateIntensity}deg`, `${rotateIntensity}deg`]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ z: intensity }}
      className={`transform-gpu transition-shadow duration-300 hover:shadow-2xl ${className}`}
    >
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
