import { TeamMember } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    bio: 'Former VP of Sales at a unicorn SaaS company. Built and scaled sales teams from 0 to €50M ARR. Passionate about connecting great talent with great opportunities.',
    image: '/team/sarah-chen.jpg',
    linkedin: 'https://linkedin.com/in/sarahchen',
    email: 'sarah@katapult.nl'
  },
  {
    id: '2',
    name: 'Marcus de Vries',
    role: 'Head of Talent',
    bio: 'Ex-enterprise sales director with 8+ years in SaaS. Specialized in placing senior sales leadership roles. Knows what it takes to succeed in complex sales environments.',
    image: '/team/marcus-devries.jpg',
    linkedin: 'https://linkedin.com/in/marcusdevries',
    email: 'marcus@katapult.nl'
  },
  {
    id: '3',
    name: 'Lisa van Bergen',
    role: 'Senior Recruiter',
    bio: 'Former SDR turned recruiter. Understands the candidate journey from entry-level to C-suite. Specialized in high-growth startups and scale-ups.',
    image: '/team/lisa-vanbergen.jpg',
    linkedin: 'https://linkedin.com/in/lisavanbergen',
    email: 'lisa@katapult.nl'
  },
  {
    id: '4',
    name: 'Tom Janssen',
    role: 'Business Development',
    bio: 'Builds relationships with the fastest-growing SaaS companies in Europe. Former account executive with deep knowledge of the tech ecosystem.',
    image: '/team/tom-janssen.jpg',
    linkedin: 'https://linkedin.com/in/tomjanssen',
    email: 'tom@katapult.nl'
  },
  {
    id: '5',
    name: 'Emma Rodriguez',
    role: 'Candidate Success Manager',
    bio: 'Ensures every candidate has an exceptional experience. Former sales trainer with expertise in career development and interview coaching.',
    image: '/team/emma-rodriguez.jpg',
    linkedin: 'https://linkedin.com/in/emmarodriguez',
    email: 'emma@katapult.nl'
  },
  {
    id: '6',
    name: 'David Kim',
    role: 'Data & Analytics',
    bio: 'Drives data-driven decisions across all recruitment processes. Former business analyst with expertise in sales metrics and performance optimization.',
    image: '/team/david-kim.jpg',
    linkedin: 'https://linkedin.com/in/davidkim',
    email: 'david@katapult.nl'
  }
];

export const companyStats = [
  { label: 'Team Members', value: '12+' },
  { label: 'Years Combined Experience', value: '50+' },
  { label: 'Languages Spoken', value: '8' },
  { label: 'Countries Served', value: '15+' },
];

export const openPositions = [
  {
    id: '1',
    title: 'Senior Recruiter',
    department: 'Talent',
    type: 'Full-time',
    location: 'Amsterdam',
    description: 'Join our growing team and help place the next generation of SaaS sales leaders.'
  },
  {
    id: '2', 
    title: 'Business Development Manager',
    department: 'Growth',
    type: 'Full-time',
    location: 'Remote',
    description: 'Build relationships with emerging SaaS companies across Europe.'
  },
  {
    id: '3',
    title: 'Marketing Specialist',
    department: 'Marketing',
    type: 'Part-time',
    location: 'Amsterdam',
    description: 'Drive our content strategy and employer branding initiatives.'
  }
];
