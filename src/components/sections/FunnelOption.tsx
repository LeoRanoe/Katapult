'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Briefcase, Search, ArrowRight } from 'lucide-react';

interface FunnelOptionProps {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  icon: 'briefcase' | 'search';
  color: 'orange' | 'blue';
  delay?: number;
}

const icons = {
  briefcase: Briefcase,
  search: Search,
};

const colorClasses = {
  orange: {
    bg: 'bg-gradient-to-br from-primary to-warning',
    hover: 'hover:from-primary/90 hover:to-warning/90',
    text: 'text-white',
    border: 'border-primary/20',
  },
  blue: {
    bg: 'bg-gradient-to-br from-accent to-blue-500',
    hover: 'hover:from-accent/90 hover:to-blue-500/90', 
    text: 'text-white',
    border: 'border-accent/20',
  },
};

export default function FunnelOption({
  title,
  subtitle,
  cta,
  href,
  icon,
  color,
  delay = 0,
}: FunnelOptionProps) {
  const Icon = icons[icon];
  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={href} className="block group">
        <div className={`
          relative overflow-hidden rounded-2xl p-8 lg:p-12 h-full
          ${colors.bg} ${colors.hover}
          ${colors.text}
          border-2 ${colors.border}
          transition-all duration-300
          group-hover:shadow-2xl group-hover:-translate-y-1
        `}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12" />
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="w-8 h-8" />
              </div>
            </div>

            {/* Content */}
            <div className="mb-8">
              <h3 className="font-display font-bold text-2xl lg:text-3xl mb-3">
                {title}
              </h3>
              <p className="text-lg opacity-90 leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between">
              <span className="font-semibold text-lg">
                {cta}
              </span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
