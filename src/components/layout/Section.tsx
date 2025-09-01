import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'gray' | 'navy' | 'orange';
}

const backgroundClasses = {
  default: 'bg-white',
  gray: 'bg-gray-50',
  navy: 'bg-secondary text-white',
  orange: 'bg-primary text-white',
};

export default function Section({ 
  children, 
  className,
  id,
  background = 'default'
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        'py-12 sm:py-16 lg:py-20 xl:py-24',
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  );
}
