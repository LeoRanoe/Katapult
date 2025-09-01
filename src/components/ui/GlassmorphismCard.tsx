'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  blur?: 'sm' | 'md' | 'lg';
  opacity?: number;
}

export default function GlassmorphismCard({
  children,
  className = '',
  hover = true,
  blur = 'md',
  opacity = 0.1
}: GlassmorphismCardProps) {
  const blurValues = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg'
  };

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl border border-white/20
        bg-white/10 ${blurValues[blur]}
        ${hover ? 'hover:bg-white/20 hover:border-white/30' : ''}
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { 
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0, 255, 163, 0.1)'
      } : {}}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl">
        <div className="absolute inset-0 rounded-2xl border border-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}
