'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface FullViewportSectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  parallaxIntensity?: number;
  enableTextAnimations?: boolean;
  enableParallaxText?: boolean;
}

export default function FullViewportSection({
  children,
  className = '',
  backgroundImage,
  backgroundColor = '#121212',
  textColor = '#ffffff',
  parallaxIntensity = 0.5,
  enableTextAnimations = true,
  enableParallaxText = true
}: FullViewportSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${parallaxIntensity * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.section
      ref={ref}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
      style={{ 
        backgroundColor,
        color: textColor,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image with Parallax */}
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <div
            className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      )}

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 text-center"
        style={enableParallaxText ? { y, opacity, scale } : { opacity, scale }}
      >
        {enableTextAnimations ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

// Text scroll interaction component
export function ScrollTextReveal({ 
  text, 
  className = '',
  staggerDelay = 0.1 
}: { 
  text: string; 
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const words = text.split(' ');

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0, 
            rotateX: 0 
          } : {}}
          transition={{
            duration: 0.6,
            delay: index * staggerDelay,
            ease: "easeOut"
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

// Immersive CTA section with interactive elements
export function ImmersiveCTA({
  title,
  subtitle,
  ctaText,
  onCtaClick,
  backgroundGradient = "from-primary/20 via-primary/10 to-transparent"
}: {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  backgroundGradient?: string;
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <FullViewportSection
      backgroundColor="transparent"
      className={`bg-gradient-to-br ${backgroundGradient} relative cursor-none`}
      enableParallaxText={false}
    >
      <div ref={ref} className="relative w-full h-full flex items-center justify-center">
        {/* Interactive Background Glow */}
        <motion.div
          className="absolute w-96 h-96 bg-primary/30 rounded-full blur-[100px]"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ScrollTextReveal 
              text={title}
              className="font-display font-bold text-4xl lg:text-7xl mb-6 text-white"
            />
            
            <motion.p
              className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-primary text-white font-bold text-lg rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCtaClick}
              >
                <span className="relative z-10">{ctaText}</span>
                
                {/* Button hover effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Sparkle effects */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${20 + (i % 2) * 60}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </FullViewportSection>
  );
}
