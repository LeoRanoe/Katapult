'use client';

import { motion } from 'framer-motion';

interface KatapultPlaceholderProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
  animated?: boolean;
}

export default function KatapultPlaceholder({ 
  width = 400, 
  height = 300, 
  text = "Katapult",
  className = "",
  animated = true 
}: KatapultPlaceholderProps) {
  const placeholderContent = (
    <div className={`relative overflow-hidden rounded-lg ${className}`} style={{ width, height }}>
      <svg 
        width={width} 
        height={height} 
        viewBox={`0 0 ${width} ${height}`}
        className="absolute inset-0"
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="katapult-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#121212" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="#00FFA3" opacity="0.1" />
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#katapult-gradient)" />
        <rect width="100%" height="100%" fill="url(#dots)" />
        
        {/* Katapult logo placeholder */}
        <g transform={`translate(${width/2}, ${height/2})`}>
          {/* K symbol */}
          <g transform="translate(-30, -20)">
            <rect x="0" y="0" width="4" height="40" fill="#00FFA3" />
            <polygon points="8,0 20,0 14,20 8,20" fill="#00FFA3" />
            <polygon points="8,20 20,40 14,40 8,20" fill="#00FFA3" />
          </g>
          
          {/* Arrow/rocket element */}
          <g transform="translate(25, -10)">
            <polygon points="0,10 15,0 15,5 25,5 25,15 15,15 15,20" fill="#00FFA3" />
          </g>
        </g>
        
        {/* Text */}
        <text 
          x={width/2} 
          y={height - 30} 
          textAnchor="middle" 
          fill="#00FFA3" 
          fontSize="16" 
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
        >
          {text}
        </text>
        
        {/* Animated elements if enabled */}
        {animated && (
          <>
            <circle cx={width * 0.2} cy={height * 0.3} r="2" fill="#00FFA3" opacity="0.6">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx={width * 0.8} cy={height * 0.7} r="1.5" fill="#00FFA3" opacity="0.4">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </>
        )}
      </svg>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {placeholderContent}
      </motion.div>
    );
  }

  return placeholderContent;
}
