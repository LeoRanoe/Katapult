import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Katapult Brand Colors - Aligned with brand theme
        primary: {
          DEFAULT: '#BFFF00', // Bright yellow/lime accent from logo
          light: '#D4FF33',
          dark: '#9AE600',
          50: '#F7FFE6',
          100: '#EFFFCC',
          200: '#E3FF99',
          300: '#D4FF66',
          400: '#BFFF00',
          500: '#9AE600',
          600: '#7ACC00',
          700: '#5C9900',
          800: '#3D6600',
          900: '#1F3300',
        },
        secondary: {
          DEFAULT: '#2D4A3A', // Dark green background matching reference image
          light: '#2D5A47',
          dark: '#0F2A1F',
          50: '#F0F5F2',
          100: '#D9E6DD',
          200: '#B3CCBB',
          300: '#8CB399',
          400: '#669977',
          500: '#2D4A3A', // Main brand background color
          600: '#40916C',
          700: '#2D5A47',
          800: '#2D4A3A',
          900: '#0F2A1F',
        },
        // Brand-specific colors for consistency
        brand: {
          background: '#2D4A3A', // Main dark green background matching reference
          accent: '#BFFF00', // Yellow/lime accent
          text: '#FFFFFF', // White text on dark background
          'text-muted': '#A3A3A3', // Muted text
        },
        accent: {
          DEFAULT: '#BFFF00',
          light: '#74C69D',
          dark: '#40916C',
        },
        // System colors
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'brand': '0 10px 25px -5px rgba(191, 255, 0, 0.1), 0 4px 6px -2px rgba(191, 255, 0, 0.05)',
        'brand-lg': '0 20px 25px -5px rgba(191, 255, 0, 0.15), 0 10px 10px -5px rgba(191, 255, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
