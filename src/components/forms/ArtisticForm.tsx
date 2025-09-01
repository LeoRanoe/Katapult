'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, AlertCircle, Eye, EyeOff, Upload, X } from 'lucide-react';

interface ArtisticInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  success?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export function ArtisticInput({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  success,
  required,
  icon,
  className = ''
}: ArtisticInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isFloating = isFocused || value.length > 0;
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`relative group ${className}`}>
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/10 blur-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isFocused ? 0.8 : 0,
          scale: isFocused ? 1.1 : 0.8
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative">
        {/* Main input container */}
        <motion.div
          className={`
            relative border-2 rounded-2xl transition-all duration-300 overflow-hidden
            ${error ? 'border-red-400 bg-red-50/50' : 
              success ? 'border-green-400 bg-green-50/50' : 
              isFocused ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white/80'}
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Animated border effect */}
          <motion.div
            className="absolute inset-0 border-2 border-primary rounded-2xl"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: isFocused ? 1 : 0,
              opacity: isFocused ? 1 : 0
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />

          {/* Icon */}
          {icon && (
            <motion.div
              className={`
                absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors
                ${isFocused ? 'text-primary' : 'text-gray-400'}
              `}
              animate={{ scale: isFocused ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {icon}
            </motion.div>
          )}

          {/* Input field */}
          <input
            ref={inputRef}
            type={inputType}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              w-full px-4 py-4 bg-transparent outline-none transition-all duration-300
              ${icon ? 'pl-12' : 'pl-4'}
              ${type === 'password' ? 'pr-12' : 'pr-4'}
              ${isFloating ? 'pt-6 pb-2' : 'py-4'}
            `}
            placeholder={isFloating ? '' : placeholder}
          />

          {/* Floating label */}
          <motion.label
            className={`
              absolute left-4 pointer-events-none transition-all duration-300 font-medium
              ${icon ? 'left-12' : 'left-4'}
              ${isFloating ? 
                'top-2 text-xs text-primary font-bold' : 
                'top-1/2 transform -translate-y-1/2 text-gray-500'
              }
            `}
            animate={{
              scale: isFloating ? 0.85 : 1,
              y: isFloating ? -2 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {label}
            {required && (
              <motion.span
                className="text-red-500 ml-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                *
              </motion.span>
            )}
          </motion.label>

          {/* Password toggle */}
          {type === 'password' && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          )}

          {/* Success/Error icons */}
          <AnimatePresence>
            {(success || error) && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className={`
                  absolute right-4 top-1/2 transform -translate-y-1/2
                  ${type === 'password' ? 'right-12' : 'right-4'}
                `}
              >
                {success ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-500" />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Error/Success message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              className="mt-2 px-4 text-sm text-red-600 font-medium"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Magical particles on focus */}
      <AnimatePresence>
        {isFocused && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${10 + (i % 2) * 80}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  y: [0, -20, 0]
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// Artistic File Upload Component
export function ArtisticFileUpload({
  label,
  accept,
  multiple = false,
  onFileSelect,
  className = ''
}: {
  label: string;
  accept?: string;
  multiple?: boolean;
  onFileSelect: (files: FileList) => void;
  className?: string;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (newFiles: FileList) => {
    const fileArray = Array.from(newFiles);
    setFiles(multiple ? [...files, ...fileArray] : fileArray);
    onFileSelect(newFiles);
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  return (
    <div className={className}>
      <motion.div
        className={`
          relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300
          ${isDragging ? 'border-primary bg-primary/10' : 'border-gray-300 hover:border-primary/50'}
        `}
        whileHover={{ scale: 1.02 }}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
      >
        {/* Animated upload icon */}
        <motion.div
          className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center"
          animate={{ 
            scale: isDragging ? 1.1 : 1,
            rotate: isDragging ? 360 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <Upload className="w-8 h-8 text-primary" />
        </motion.div>

        <h3 className="font-bold text-lg mb-2 text-gray-900">{label}</h3>
        <p className="text-gray-600 mb-4">
          Drag & drop files here or{' '}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="text-primary font-medium hover:underline"
          >
            browse
          </button>
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
          className="hidden"
        />

        {/* Floating particles during drag */}
        <AnimatePresence>
          {isDragging && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [0, -20, 0]
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>

      {/* File list */}
      <AnimatePresence>
        {files.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 space-y-2"
          >
            {files.map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
              >
                <span className="text-sm font-medium truncate">{file.name}</span>
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Artistic Button Component
export function ArtisticButton({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  className = ''
}: {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const baseClasses = 'relative font-bold rounded-2xl transition-all duration-300 overflow-hidden group';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    ghost: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white'
  };

  return (
    <motion.button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        ${baseClasses} 
        ${sizeClasses[size]} 
        ${variantClasses[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: loading ? [-100, 400] : [-100, -100],
        }}
        transition={{
          duration: loading ? 1.5 : 2,
          repeat: loading ? Infinity : 0,
          ease: "linear"
        }}
      />

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading && (
          <motion.div
            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        )}
        {children}
      </span>

      {/* Hover particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
          style={{
            left: `${25 + i * 20}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.button>
  );
}
