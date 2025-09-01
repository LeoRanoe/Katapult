'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedInputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  className?: string;
}

export default function AnimatedInput({
  label,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  className = ''
}: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isFloating = isFocused || value.length > 0;

  return (
    <div className={`relative ${className}`}>
      {/* Input Container */}
      <div className="relative">
        <motion.input
          ref={inputRef}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-4 bg-white border-2 rounded-2xl
            transition-all duration-300 outline-none
            ${error 
              ? 'border-red-400 focus:border-red-500' 
              : 'border-gray-200 focus:border-primary hover:border-gray-300'
            }
            ${isFocused ? 'shadow-lg' : 'shadow-sm'}
          `}
          placeholder=""
        />
        
        {/* Floating Label */}
        <motion.label
          htmlFor={inputRef.current?.id}
          className={`
            absolute left-4 cursor-text select-none font-medium
            transition-all duration-300 pointer-events-none
            ${error ? 'text-red-500' : isFocused ? 'text-primary' : 'text-gray-500'}
          `}
          animate={{
            top: isFloating ? '0.5rem' : '1rem',
            fontSize: isFloating ? '0.75rem' : '1rem',
            fontWeight: isFloating ? 600 : 400
          }}
          transition={{ duration: 0.2 }}
        >
          {label} {required && <span className="text-red-400">*</span>}
        </motion.label>

        {/* Focus Ring Animation */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ 
            opacity: isFocused ? 0.3 : 0,
            scale: isFocused ? 1 : 0.95
          }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="text-red-500 text-sm mt-2 px-1"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Animation */}
      {value && !error && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute right-3 top-4 text-green-500"
        >
          ✓
        </motion.div>
      )}
    </div>
  );
}
