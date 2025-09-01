'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Users, Briefcase, TrendingUp, Target, Globe, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface MegaMenuProps {
  items: Array<{
    title: string;
    href?: string;
    icon?: React.ComponentType<{ className?: string }>;
    megaMenu?: {
      sections: Array<{
        title: string;
        items: Array<{
          title: string;
          description: string;
          href: string;
          icon?: React.ComponentType<{ className?: string }>;
          image?: string;
          badge?: string;
        }>;
      }>;
      featured?: {
        title: string;
        description: string;
        image: string;
        href: string;
        cta: string;
      };
    };
  }>;
  className?: string;
}

export default function MegaMenu({ items, className = '' }: MegaMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string, event: React.MouseEvent) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav className={`relative ${className}`}>
      <div className="flex items-center space-x-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="relative"
            onMouseEnter={(e) => item.megaMenu && handleMouseEnter(item.title, e)}
            onMouseLeave={handleMouseLeave}
          >
            {item.href && !item.megaMenu ? (
              <Link
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.title}
              </Link>
            ) : (
              <button
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.title}
                {item.megaMenu && (
                  <motion.div
                    animate={{ rotate: activeMenu === item.title ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                )}
              </button>
            )}

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {activeMenu === item.title && item.megaMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50"
                  onMouseEnter={handleMenuMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 min-w-[800px] backdrop-blur-sm">
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    />
                    
                    <div className="relative z-10 grid grid-cols-3 gap-8">
                      {/* Menu Sections */}
                      <div className="col-span-2 grid grid-cols-2 gap-8">
                        {item.megaMenu.sections.map((section, sectionIndex) => (
                          <div key={section.title} className="space-y-4">
                            <motion.h3
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: sectionIndex * 0.1 }}
                              className="font-display font-bold text-lg text-secondary mb-4"
                            >
                              {section.title}
                            </motion.h3>
                            <div className="space-y-2">
                              {section.items.map((menuItem, itemIndex) => (
                                <motion.div
                                  key={menuItem.title}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                                >
                                  <Link
                                    href={menuItem.href}
                                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all duration-200"
                                  >
                                    {menuItem.icon && (
                                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <menuItem.icon className="w-4 h-4 text-primary" />
                                      </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2">
                                        <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                          {menuItem.title}
                                        </h4>
                                        {menuItem.badge && (
                                          <span className="px-2 py-1 bg-primary text-white text-xs rounded-full">
                                            {menuItem.badge}
                                          </span>
                                        )}
                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                                      </div>
                                      <p className="text-sm text-gray-600 mt-1">
                                        {menuItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Featured Section */}
                      {item.megaMenu.featured && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                          className="space-y-4"
                        >
                          <div className="relative">
                            <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-8 h-8 text-primary" />
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
                          </div>
                          
                          <div className="space-y-2">
                            <h3 className="font-display font-bold text-lg text-secondary">
                              {item.megaMenu.featured.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {item.megaMenu.featured.description}
                            </p>
                          </div>
                          
                          <Link
                            href={item.megaMenu.featured.href}
                            className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                          >
                            {item.megaMenu.featured.cta}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </motion.div>
                      )}
                    </div>

                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'linear-gradient(45deg, transparent, rgba(0, 255, 163, 0.1), transparent)',
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </nav>
  );
}

// Sample menu configuration
export const megaMenuConfig = [
  {
    title: "Services",
    icon: Briefcase,
    megaMenu: {
      sections: [
        {
          title: "For Companies",
          items: [
            {
              title: "Executive Search",
              description: "C-level and VP positions for SaaS companies",
              href: "/services/executive-search",
              icon: Target,
              badge: "Premium"
            },
            {
              title: "Sales Team Building",
              description: "Build high-performing sales organizations",
              href: "/services/sales-teams",
              icon: Users
            },
            {
              title: "DACH Expansion",
              description: "German market entry and localization",
              href: "/services/dach-expansion",
              icon: Globe,
              badge: "New"
            }
          ]
        },
        {
          title: "For Candidates",
          items: [
            {
              title: "Career Coaching",
              description: "Personalized guidance for sales professionals",
              href: "/services/coaching",
              icon: TrendingUp
            },
            {
              title: "Interview Prep",
              description: "Expert preparation for SaaS interviews",
              href: "/services/interview-prep",
              icon: BookOpen
            },
            {
              title: "Salary Benchmarking",
              description: "Know your worth in the SaaS market",
              href: "/services/salary-benchmarking",
              icon: Target
            }
          ]
        }
      ],
      featured: {
        title: "Score in Four Methodology",
        description: "Our proven approach delivers the right hire in 4 interviews or less",
        image: "/featured-methodology.jpg",
        href: "/methodology",
        cta: "Learn More"
      }
    }
  },
  {
    title: "Industries",
    icon: Globe,
    megaMenu: {
      sections: [
        {
          title: "Specializations",
          items: [
            {
              title: "SaaS Platforms",
              description: "CRM, ERP, and business software solutions",
              href: "/industries/saas",
              icon: Target
            },
            {
              title: "Fintech",
              description: "Financial technology and digital banking",
              href: "/industries/fintech",
              icon: TrendingUp,
              badge: "Hot"
            },
            {
              title: "Enterprise Software",
              description: "B2B software for large organizations",
              href: "/industries/enterprise",
              icon: Briefcase
            }
          ]
        },
        {
          title: "Market Focus",
          items: [
            {
              title: "Netherlands",
              description: "Amsterdam, Rotterdam, Utrecht markets",
              href: "/markets/netherlands",
              icon: Globe
            },
            {
              title: "DACH Region",
              description: "Germany, Austria, Switzerland expansion",
              href: "/markets/dach",
              icon: Globe,
              badge: "Expanding"
            }
          ]
        }
      ],
      featured: {
        title: "Market Insights",
        description: "Latest salary trends and hiring insights for SaaS sales professionals",
        image: "/market-insights.jpg",
        href: "/insights",
        cta: "View Insights"
      }
    }
  },
  {
    title: "About",
    href: "/about"
  },
  {
    title: "Contact",
    href: "/contact"
  }
];
