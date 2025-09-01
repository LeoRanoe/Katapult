'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'white' | 'secondary';
  className?: string;
}

export default function LoadingSpinner({
  size = 'md',
  variant = 'primary',
  className = ''
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colors = {
    primary: '#00FFA3',
    white: '#FFFFFF',
    secondary: '#1B2951'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} relative`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke={colors[variant]}
            strokeWidth="2"
            strokeOpacity="0.2"
          />
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke={colors[variant]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="31.416"
            strokeDashoffset="15.708"
          />
        </svg>
      </motion.div>
    </div>
  );
}

// Skeleton Screen Component
export function SkeletonLoader({ 
  className = '', 
  rows = 3,
  animated = true 
}: { 
  className?: string; 
  rows?: number;
  animated?: boolean;
}) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: rows }).map((_, index) => (
        <motion.div
          key={index}
          className={`h-4 bg-gray-200 rounded-lg ${
            animated ? 'animate-pulse' : ''
          }`}
          style={{ width: `${Math.random() * 40 + 60}%` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        />
      ))}
    </div>
  );
}

// Card Skeleton
export function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-200 p-6 ${className}`}>
      <div className="animate-pulse">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
          <div className="h-3 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}
