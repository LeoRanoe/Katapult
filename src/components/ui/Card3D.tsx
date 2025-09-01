'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, MouseEvent } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowEffect?: boolean;
  flipOnHover?: boolean;
  backContent?: React.ReactNode;
}

export default function Card3D({
  children,
  className = '',
  intensity = 1,
  glowEffect = true,
  flipOnHover = false,
  backContent
}: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15 * intensity, -15 * intensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15 * intensity, 15 * intensity]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-1000">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative transform-gpu ${className}`}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={flipOnHover ? { 
          rotateY: 180,
          transition: { duration: 0.6, ease: "easeInOut" }
        } : {
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Front of card */}
        <div 
          className="relative bg-white rounded-2xl border border-gray-200 p-6 shadow-lg"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          }}
        >
          {/* Glow effect */}
          {glowEffect && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 blur-xl"
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.3 }}
              style={{ transform: 'translateZ(-10px)' }}
            />
          )}
          
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          
          {/* Reflection effect */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, transparent 50%, rgba(0,255,163,0.1) 100%)',
              transform: 'translateZ(1px)'
            }}
          />
          
          {/* Content */}
          <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
            {children}
          </div>
          
          {/* Edge highlights */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Back of card (if flip is enabled) */}
        {flipOnHover && backContent && (
          <div 
            className="absolute inset-0 bg-secondary text-white rounded-2xl border border-primary/20 p-6 shadow-lg flex items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg) translateZ(0)',
            }}
          >
            <div className="text-center">
              {backContent}
            </div>
          </div>
        )}
        
        {/* Floating particles around card */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              transform: `translateZ(${10 + i * 5}px)`
            }}
            animate={{
              y: [-5, 5, -5],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Specialized testimonial card with enhanced 3D effects
export function TestimonialCard3D({ 
  quote, 
  author, 
  role, 
  company, 
  avatar 
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}) {
  return (
    <Card3D 
      className="h-full"
      intensity={1.2}
      glowEffect={true}
      flipOnHover={true}
      backContent={
        <div className="space-y-4">
          <div className="text-primary font-bold text-lg">✨ Success Metrics</div>
          <div className="space-y-2 text-sm">
            <div>• Hired within 3 weeks</div>
            <div>• 4 candidate maximum</div>
            <div>• 100% success rate</div>
            <div>• Still performing after 18 months</div>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          {avatar ? (
            <img 
              src={avatar} 
              alt={author}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-primary font-bold">
              {author.charAt(0)}
            </div>
          )}
          <div>
            <div className="font-semibold text-secondary">{author}</div>
            <div className="text-sm text-gray-600">{role}</div>
            <div className="text-xs text-gray-500">{company}</div>
          </div>
        </div>
        
        <blockquote className="text-gray-700 italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="w-4 h-4 text-yellow-400">⭐</div>
            ))}
          </div>
          <div className="text-xs text-gray-500">
            Hover to see metrics
          </div>
        </div>
      </div>
    </Card3D>
  );
}
