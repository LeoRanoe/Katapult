'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface MobileOptimizedProps {
  children: React.ReactNode;
  className?: string;
}

export default function MobileOptimized({ children, className = '' }: MobileOptimizedProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div 
      className={`${className} ${isMobile ? 'mobile-optimized' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
