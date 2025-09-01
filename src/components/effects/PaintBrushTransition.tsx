'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface PaintBrushTransitionProps {
  isVisible: boolean;
  onComplete?: () => void;
  direction?: 'left' | 'right' | 'up' | 'down' | 'diagonal';
  color?: string;
}

export default function PaintBrushTransition({
  isVisible,
  onComplete,
  direction = 'right',
  color = '#00FFA3'
}: PaintBrushTransitionProps) {
  const [brushStrokes, setBrushStrokes] = useState<number[]>([]);

  useEffect(() => {
    if (isVisible) {
      // Create multiple brush strokes for organic effect
      setBrushStrokes(Array.from({ length: 8 }, (_, i) => i));
    }
  }, [isVisible]);

  const getStrokeVariants = (index: number) => {
    const delay = index * 0.05;
    const baseWidth = 120 + Math.random() * 60;
    
    switch (direction) {
      case 'right':
        return {
          initial: { x: '-100%', scaleX: 0, opacity: 0 },
          animate: { 
            x: '100vw', 
            scaleX: [0, 1.2, 0.8, 0],
            opacity: [0, 0.9, 0.7, 0]
          },
          transition: { 
             duration: 1.5, 
             delay
           },
          onAnimationComplete: index === brushStrokes.length - 1 ? onComplete : undefined,
          style: {
            width: `${baseWidth}px`,
            height: `${100 + index * 15}vh`,
            top: `${-10 + index * 5}%`,
            transformOrigin: 'left center'
          }
        };
      
      case 'left':
        return {
          initial: { x: '100%', scaleX: 0, opacity: 0 },
          animate: { 
            x: '-100vw', 
            scaleX: [0, 1.2, 0.8, 0],
            opacity: [0, 0.9, 0.7, 0]
          },
          transition: { 
             duration: 1.8, 
             delay
           },
          onAnimationComplete: index === brushStrokes.length - 1 ? onComplete : undefined,
          style: {
            width: `${baseWidth}px`,
            height: `${100 + index * 15}vh`,
            top: `${-10 + index * 5}%`,
            transformOrigin: 'right center'
          }
        };
      
      case 'diagonal':
        return {
          initial: { x: '-50%', y: '50%', rotate: -45, scaleX: 0, opacity: 0 },
          animate: { 
            x: '150vw', 
            y: '-50vh',
            rotate: -45,
            scaleX: [0, 1.3, 0.9, 0],
            opacity: [0, 0.9, 0.7, 0]
          },
          transition: { 
              duration: 1.2, 
              delay
            },
          onAnimationComplete: index === brushStrokes.length - 1 ? onComplete : undefined,
          style: {
            width: `${baseWidth * 1.5}px`,
            height: `${80 + index * 20}px`,
            transformOrigin: 'left center'
          }
        };
      
      default:
        return {
          initial: { x: '-100%', scaleX: 0, opacity: 0 },
          animate: { 
            x: '100vw', 
            scaleX: [0, 1.2, 0.8, 0],
            opacity: [0, 0.9, 0.7, 0],
            transition: { duration: 1.5, delay }
          },
          style: {
            width: `${baseWidth}px`,
            height: '100vh',
            transformOrigin: 'left center'
          }
        };
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          {brushStrokes.map((_, index) => {
            const variants = getStrokeVariants(index);
            
            return (
              <motion.div
                key={index}
                className="absolute"
                style={variants.style}
                initial={variants.initial}
                animate={variants.animate}
                transition={variants.transition}
                exit={{ opacity: 0 }}
                onAnimationComplete={variants.onAnimationComplete}
              >
                {/* Main brush stroke */}
                <div 
                  className="w-full h-full"
                  style={{
                    background: `linear-gradient(${direction === 'diagonal' ? '135deg' : '90deg'}, 
                      ${color}00 0%, 
                      ${color}40 10%, 
                      ${color}90 30%, 
                      ${color}FF 50%, 
                      ${color}90 70%, 
                      ${color}40 90%, 
                      ${color}00 100%)`,
                    filter: `blur(${Math.random() * 2 + 1}px)`,
                    clipPath: direction === 'diagonal' 
                      ? `polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%)`
                      : `polygon(0% ${10 + Math.random() * 20}%, 100% ${5 + Math.random() * 15}%, 100% ${85 + Math.random() * 10}%, 0% ${90 + Math.random() * 5}%)`
                  }}
                />
                
                {/* Brush texture overlay */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: `radial-gradient(ellipse at ${50 + Math.random() * 20}% ${50 + Math.random() * 20}%, 
                      ${color} 0%, 
                      transparent 70%)`,
                    filter: 'blur(0.5px)',
                    mixBlendMode: 'multiply'
                  }}
                />
                
                {/* Paint drips */}
                {index < 3 && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-2 bg-primary/60 rounded-full"
                    style={{ 
                      height: `${20 + Math.random() * 40}px`,
                      marginLeft: `${-10 + Math.random() * 20}px`
                    }}
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ 
                      scaleY: 1, 
                      opacity: [0, 0.8, 0],
                      transition: { 
                        duration: 0.8, 
                        delay: (index * 0.1) + 0.3,
                        ease: "easeOut"
                      }
                    }}
                  />
                )}
              </motion.div>
            );
          })}
          
          {/* Splatter effects */}
          {Array.from({ length: 12 }).map((_, index) => (
            <motion.div
              key={`splatter-${index}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: color,
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                filter: `blur(${Math.random()}px)`
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, Math.random() * 3 + 1, 0],
                opacity: [0, 0.7, 0],
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                transition: { 
                  duration: 1, 
                  delay: Math.random() * 0.5,
                  ease: "easeOut"
                }
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

// Hook for triggering paint brush transitions
export function usePaintBrushTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const trigger = (callback?: () => void) => {
    setIsTransitioning(true);
    setTimeout(() => {
      callback?.();
      setTimeout(() => setIsTransitioning(false), 500);
    }, 800);
  };
  
  return { isTransitioning, trigger };
}
