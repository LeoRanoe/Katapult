'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface AnimatedChartProps {
  data: Array<{ label: string; value: number; color?: string }>;
  type?: 'bar' | 'donut' | 'line';
  className?: string;
  animate?: boolean;
}

export default function AnimatedChart({ 
  data, 
  type = 'bar', 
  className = '',
  animate = true 
}: AnimatedChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (isInView && animate) {
      setAnimationStarted(true);
    }
  }, [isInView, animate]);

  const maxValue = Math.max(...data.map(item => item.value));

  if (type === 'bar') {
    return (
      <div ref={ref} className={`space-y-4 ${className}`}>
        {data.map((item, index) => (
          <div key={item.label} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">{item.label}</span>
              <motion.span 
                className="text-sm font-bold text-primary"
                initial={{ opacity: 0 }}
                animate={animationStarted ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
              >
                {item.value}%
              </motion.span>
            </div>
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{ 
                  backgroundColor: item.color || '#00FFA3',
                  backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%)',
                  backgroundSize: '10px 10px'
                }}
                initial={{ width: 0 }}
                animate={animationStarted ? { width: `${(item.value / maxValue) * 100}%` } : {}}
                transition={{
                  duration: 1.2,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              />
              {/* Shimmer effect */}
              <motion.div
                className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                initial={{ x: '-100%' }}
                animate={animationStarted ? { x: '300%' } : {}}
                transition={{
                  duration: 1.5,
                  delay: index * 0.2 + 0.5,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'donut') {
    const circumference = 2 * Math.PI * 45;
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let cumulativePercentage = 0;

    return (
      <div ref={ref} className={`relative ${className}`}>
        <svg width="200" height="200" viewBox="0 0 100 100" className="transform -rotate-90">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
            const strokeDashoffset = -((cumulativePercentage / 100) * circumference);
            cumulativePercentage += percentage;

            return (
              <motion.circle
                key={item.label}
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke={item.color || `hsl(${index * 60}, 70%, 50%)`}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                initial={{ strokeDasharray: `0 ${circumference}` }}
                animate={animationStarted ? { strokeDasharray } : {}}
                transition={{
                  duration: 1.5,
                  delay: index * 0.3,
                  ease: "easeOut"
                }}
                className="drop-shadow-sm"
              />
            );
          })}
        </svg>
        
        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div 
              className="text-2xl font-bold text-primary"
              initial={{ scale: 0, opacity: 0 }}
              animate={animationStarted ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {total}
            </motion.div>
            <div className="text-xs text-gray-500">Total</div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 space-y-2">
          {data.map((item, index) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={animationStarted ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
            >
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color || `hsl(${index * 60}, 70%, 50%)` }}
              />
              <span className="text-sm text-gray-600">{item.label}: {item.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Line chart (simplified version)
  return (
    <div ref={ref} className={`relative h-64 ${className}`}>
      <svg width="100%" height="100%" viewBox="0 0 400 200" className="overflow-visible">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00FFA3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00FFA3" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map(i => (
          <line
            key={i}
            x1="40"
            y1={40 + i * 30}
            x2="360"
            y2={40 + i * 30}
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Animated line */}
        <motion.polyline
          points={data.map((item, index) => 
            `${40 + (index * 80)},${180 - (item.value / maxValue) * 120}`
          ).join(' ')}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={animationStarted ? { pathLength: 1 } : {}}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Data points */}
        {data.map((item, index) => (
          <motion.circle
            key={index}
            cx={40 + (index * 80)}
            cy={180 - (item.value / maxValue) * 120}
            r="4"
            fill="#00FFA3"
            initial={{ scale: 0, opacity: 0 }}
            animate={animationStarted ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 1, duration: 0.3 }}
            className="drop-shadow-sm"
          />
        ))}

        {/* Labels */}
        {data.map((item, index) => (
          <motion.text
            key={index}
            x={40 + (index * 80)}
            y="195"
            textAnchor="middle"
            fontSize="12"
            fill="#666"
            initial={{ opacity: 0 }}
            animate={animationStarted ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 1.5, duration: 0.3 }}
          >
            {item.label}
          </motion.text>
        ))}
      </svg>
    </div>
  );
}

// Enhanced counter with visual effects
export function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '', 
  duration = 2,
  className = ''
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div
        className="font-display font-bold text-primary"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 font-display font-bold text-primary opacity-20 blur-sm"
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: [0.8, 1.1, 1] } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </motion.div>
    </div>
  );
}
