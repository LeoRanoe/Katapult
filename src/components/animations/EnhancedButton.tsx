'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Link from 'next/link';

interface EnhancedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  glowing?: boolean;
  pulse?: boolean;
}

export default function EnhancedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  glowing = true,
  pulse = false
}: EnhancedButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 relative overflow-hidden';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-primary text-white border-2 border-primary hover:bg-primary-dark hover:border-primary-dark shadow-md hover:shadow-lg',
    secondary: 'bg-secondary text-white border-2 border-secondary hover:bg-secondary-dark hover:border-secondary-dark shadow-md hover:shadow-lg',
    ghost: 'bg-transparent border-2 border-current hover:bg-current hover:text-white shadow-sm hover:shadow-md'
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const buttonContent = (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={pulse ? {
        boxShadow: [
          '0 0 0 0 rgba(0, 255, 163, 0.4)',
          '0 0 0 10px rgba(0, 255, 163, 0)',
          '0 0 0 0 rgba(0, 255, 163, 0)'
        ]
      } : {}}
      transition={pulse ? {
        duration: 2,
        repeat: Infinity,
        repeatType: 'loop'
      } : { duration: 0.2 }}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      {/* Glowing effect */}
      {glowing && (
        <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-md opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-2xl"
        initial={{ scale: 0, opacity: 1 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
