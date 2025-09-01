'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Companies', href: '/how-we-work/companies' },
  { label: 'Candidates', href: '/how-we-work/candidates' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' }
];

export default function EnhancedNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveItem(window.location.pathname);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-background/95 backdrop-blur-md shadow-lg border-b border-brand-accent/20' 
            : 'bg-brand-background/90 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center mr-3">
                  <span className="text-brand-background font-bold text-xl">K</span>
                </div>
                <span className="font-display font-bold text-xl text-brand-text">
                  Katapult
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  className="relative"
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={item.href}
                    className="font-medium transition-colors duration-300 text-brand-text hover:text-brand-accent"
                  >
                    {item.label}
                  </Link>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-accent origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Active indicator */}
                  {activeItem === item.href && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-accent rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-brand-accent text-brand-background px-6 py-2 rounded-full font-semibold hover:bg-brand-accent/90 transition-colors duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-brand-text"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-brand-background border-t border-brand-accent/20"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-brand-text hover:text-brand-accent hover:bg-brand-accent/10 rounded-md transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-brand-accent text-brand-background px-6 py-3 rounded-full font-semibold hover:bg-brand-accent/90 transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
