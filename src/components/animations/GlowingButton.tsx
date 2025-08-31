'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface GlowingButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  className?: string;
}

export default function GlowingButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  size = 'md',
  glow = true,
  className = ''
}: GlowingButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-300 overflow-hidden group
    ${variant === 'primary' 
      ? 'bg-primary text-white hover:bg-primary/90' 
      : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
    }
    ${size === 'sm' ? 'px-4 py-2 text-sm' : 
      size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3'}
    ${className}
  `;

  const glowClasses = glow ? `
    before:absolute before:inset-0 before:rounded-lg before:p-[2px] 
    before:bg-gradient-to-r before:from-primary before:via-accent before:to-primary
    before:opacity-0 before:transition-opacity before:duration-300
    hover:before:opacity-100 before:-z-10
    after:absolute after:inset-[2px] after:rounded-[6px] after:bg-inherit after:z-0
  ` : '';

  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${glowClasses}`}
    >
      {/* Shimmer effect */}
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                        transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                        transition-transform duration-1000 ease-out" />
      )}
      
      <span className="relative z-10 flex items-center space-x-2">
        <span>{children}</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      </span>
    </motion.div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return <button onClick={onClick}>{content}</button>;
}
