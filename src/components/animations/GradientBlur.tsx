'use client';

import { motion } from 'framer-motion';

interface GradientBlurProps {
  className?: string;
  variant?: 'primary' | 'accent' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
}

export default function GradientBlur({ 
  className = '',
  variant = 'primary',
  size = 'md',
  opacity = 0.3
}: GradientBlurProps) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[32rem] h-[32rem]'
  };

  const gradientClasses = {
    primary: 'from-primary/60 via-primary/30 to-transparent',
    accent: 'from-accent/60 via-accent/30 to-transparent',
    secondary: 'from-secondary/60 via-secondary/30 to-transparent'
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity }}
      transition={{ duration: 2, ease: "easeOut" }}
      className={`
        absolute blur-3xl rounded-full 
        bg-gradient-radial ${gradientClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    />
  );
}
