'use client';

import { motion } from 'framer-motion';

interface PaintBrushEffectProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  className?: string;
}

export default function PaintBrushEffect({ 
  children, 
  delay = 0,
  direction = 'left',
  className = ''
}: PaintBrushEffectProps) {
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay
      }
    }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      clipPath: direction === 'left' ? 'inset(0 100% 0 0)' :
               direction === 'right' ? 'inset(0 0 0 100%)' :
               direction === 'top' ? 'inset(100% 0 0 0)' : 
               'inset(0 0 100% 0)'
    },
    visible: {
      opacity: 1,
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: 0.8,
        delay: delay + 0.6
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Paint Brush SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d={direction === 'left' ? "M0,50 Q25,30 50,50 Q75,70 100,50" :
             direction === 'right' ? "M100,50 Q75,30 50,50 Q25,70 0,50" :
             direction === 'top' ? "M50,0 Q30,25 50,50 Q70,75 50,100" :
             "M50,100 Q30,75 50,50 Q70,25 50,0"}
          stroke="url(#paintGradient)"
          strokeWidth="2"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <defs>
          <linearGradient id="paintGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#4ECDC4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content with reveal animation */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}
