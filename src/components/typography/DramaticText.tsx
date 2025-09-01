'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface DramaticTextProps {
  children: string;
  variant?: 'hero' | 'section' | 'overlay';
  className?: string;
  animate?: boolean;
}

export default function DramaticText({ 
  children, 
  variant = 'hero', 
  className = '',
  animate = true 
}: DramaticTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return {
          fontSize: 'clamp(3rem, 8vw, 12rem)',
          fontWeight: 900,
          lineHeight: 0.8,
          letterSpacing: '-0.05em',
          textTransform: 'uppercase' as const,
        };
      case 'section':
        return {
          fontSize: 'clamp(2rem, 6vw, 8rem)',
          fontWeight: 800,
          lineHeight: 0.9,
          letterSpacing: '-0.03em',
          textTransform: 'uppercase' as const,
        };
      case 'overlay':
        return {
          fontSize: 'clamp(4rem, 12vw, 20rem)',
          fontWeight: 900,
          lineHeight: 0.7,
          letterSpacing: '-0.08em',
          textTransform: 'uppercase' as const,
        };
      default:
        return {};
    }
  };

  const words = children.split(' ');

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        className="relative z-10"
        style={animate ? { y, scale, opacity } : {}}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-4 font-display"
            style={{
              ...getVariantStyles()
            }}
            className="text-primary"
            initial={{ opacity: 0, y: 100, rotateX: -90 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              rotateX: 0,
              transition: {
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.2 }
            }}
            viewport={{ once: true }}
          >
            {word}
            
            {/* Text shadow/outline effect */}
            <span
              className="absolute inset-0 -z-10"
              style={{ ...getVariantStyles(), color: 'rgba(191, 255, 0, 0.1)', transform: 'translate(2px, 2px)' }}
            >
              {word}
            </span>
          </motion.span>
        ))}
      </motion.div>
      
      {/* Background decorative elements */}
      {variant === 'hero' && (
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <motion.div
            className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-primary/10"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-primary/15"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      )}
    </div>
  );
}

// Overlapping text component for artistic layouts
export function OverlappingText({ 
  frontText, 
  backText, 
  className = '' 
}: { 
  frontText: string; 
  backText: string; 
  className?: string; 
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Background text */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-primary/10 font-display font-bold text-6xl lg:text-8xl">
          {backText}
        </div>
      </motion.div>
      
      {/* Foreground text */}
      <div className="relative z-10">
        <div className="text-primary font-display font-bold text-4xl lg:text-6xl">
          {frontText}
        </div>
      </div>
    </div>
  );
}
