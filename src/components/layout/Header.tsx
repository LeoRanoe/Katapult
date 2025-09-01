'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Container from './Container';
import { cn } from '@/lib/utils';

const navigation = [
  {
    name: 'For Companies',
    href: '/companies',
    dropdown: [
      { name: 'How We Work', href: '/how-we-work/companies' },
      { name: 'Our Services', href: '/services' },
      { name: 'Case Studies', href: '/cases' },
    ],
  },
  {
    name: 'For Candidates',
    href: '/candidates',
    dropdown: [
      { name: 'Job Openings', href: '/jobs' },
      { name: 'How We Work', href: '/how-we-work/candidates' },
      { name: 'Career Resources', href: '/resources' },
    ],
  },
  {
    name: 'About',
    href: '/about',
    dropdown: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Work at Katapult', href: '/careers' },
    ],
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-brand-background/98 backdrop-blur-md shadow-lg border-b border-brand-accent/20'
          : 'bg-brand-background/95 backdrop-blur-sm border-b border-brand-accent/10 shadow-sm'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-brand-background font-display font-bold text-xl">K</span>
            </div>
            <span className="font-display font-bold text-2xl text-brand-text">
              Katapult
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-brand-text hover:text-brand-accent transition-colors font-medium"
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-brand-background/98 backdrop-blur-md shadow-xl rounded-lg border border-brand-accent/20 py-2 z-40">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-3 text-brand-text hover:text-brand-accent hover:bg-brand-accent/10 transition-colors"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="bg-brand-accent text-brand-background px-6 py-3 rounded-lg font-semibold hover:bg-brand-accent/90 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-brand-text hover:text-brand-accent transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-brand-accent/20 py-4">
            <div className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-brand-text hover:text-brand-accent transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-2 mt-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-brand-text/80 hover:text-brand-accent transition-colors py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="block bg-brand-accent text-brand-background px-6 py-3 rounded-lg font-semibold text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
