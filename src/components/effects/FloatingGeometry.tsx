'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GeometricShape {
  id: string;
  type: 'cube' | 'pyramid' | 'sphere' | 'cylinder';
  x: number;
  y: number;
  z: number;
  size: number;
  rotationSpeed: number;
  floatSpeed: number;
}

export default function FloatingGeometry() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<GeometricShape[]>([]);

  useEffect(() => {
    // Generate random geometric shapes
    const shapes: GeometricShape[] = Array.from({ length: 8 }, (_, i) => ({
      id: `shape-${i}`,
      type: ['cube', 'pyramid', 'sphere', 'cylinder'][Math.floor(Math.random() * 4)] as GeometricShape['type'],
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random() * 100,
      size: 20 + Math.random() * 40,
      rotationSpeed: 0.5 + Math.random() * 2,
      floatSpeed: 2 + Math.random() * 4
    }));
    
    shapesRef.current = shapes;
  }, []);

  const renderShape = (shape: GeometricShape) => {
    switch (shape.type) {
      case 'cube':
        return (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              y: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              rotateX: { duration: shape.rotationSpeed * 4, repeat: Infinity, ease: "linear" },
              rotateY: { duration: shape.rotationSpeed * 3, repeat: Infinity, ease: "linear" },
              y: { duration: shape.floatSpeed, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: shape.floatSpeed * 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: true }}
          >
            <div 
              className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 transform-gpu"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)',
                filter: 'blur(0.5px)',
                boxShadow: `0 0 ${shape.size/2}px rgba(0, 255, 163, 0.3)`
              }}
            />
          </motion.div>
        );
        
      case 'pyramid':
        return (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
            }}
            animate={{
              rotateZ: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              rotateZ: { duration: shape.rotationSpeed * 5, repeat: Infinity, ease: "linear" },
              scale: { duration: shape.floatSpeed * 1.2, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: shape.floatSpeed * 2, repeat: Infinity, ease: "easeInOut" }
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.25, scale: 1 }}
            viewport={{ once: true }}
          >
            <div 
              className="w-full h-full bg-gradient-to-t from-primary/30 to-transparent transform-gpu"
              style={{
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                filter: 'blur(0.3px)',
                boxShadow: `0 0 ${shape.size/3}px rgba(0, 255, 163, 0.4)`
              }}
            />
          </motion.div>
        );
        
      case 'sphere':
        return (
          <motion.div
            key={shape.id}
            className="absolute rounded-full"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
            }}
            animate={{
              scale: [1, 1.3, 1],
              x: [-5, 5, -5],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              scale: { duration: shape.floatSpeed * 1.5, repeat: Infinity, ease: "easeInOut" },
              x: { duration: shape.floatSpeed * 2.5, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: shape.floatSpeed * 2, repeat: Infinity, ease: "easeInOut" }
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.3, scale: 1 }}
            viewport={{ once: true }}
          >
            <div 
              className="w-full h-full rounded-full bg-gradient-radial from-primary/40 to-primary/10 transform-gpu"
              style={{
                filter: 'blur(1px)',
                boxShadow: `inset 0 0 ${shape.size/4}px rgba(0, 255, 163, 0.6), 0 0 ${shape.size/2}px rgba(0, 255, 163, 0.2)`
              }}
            />
          </motion.div>
        );
        
      case 'cylinder':
        return (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size * 0.6,
              height: shape.size * 1.2,
            }}
            animate={{
              rotateY: [0, 360],
              y: [-15, 15, -15],
              opacity: [0.15, 0.35, 0.15]
            }}
            transition={{
              rotateY: { duration: shape.rotationSpeed * 6, repeat: Infinity, ease: "linear" },
              y: { duration: shape.floatSpeed * 1.8, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: shape.floatSpeed * 2.2, repeat: Infinity, ease: "easeInOut" }
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.25 }}
            viewport={{ once: true }}
          >
            <div 
              className="w-full h-full bg-gradient-to-b from-primary/25 via-primary/40 to-primary/25 transform-gpu rounded-t-full rounded-b-full"
              style={{
                filter: 'blur(0.4px)',
                boxShadow: `0 0 ${shape.size/4}px rgba(0, 255, 163, 0.3)`
              }}
            />
          </motion.div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ perspective: '1000px' }}
    >
      {shapesRef.current.map((shape) => renderShape(shape))}
      
      {/* Additional geometric grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="geometric-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00FFA3" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="30" cy="30" r="1" fill="#00FFA3" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric-grid)" />
        </svg>
      </div>
    </div>
  );
}
