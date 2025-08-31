import { Job } from '@/types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Sales Manager',
    company: 'TechFlow',
    location: 'Amsterdam',
    salary: { min: 80000, max: 120000, currency: 'EUR' },
    type: 'full-time',
    seniority: 'senior',
    description: 'Lead a high-performing sales team in our Amsterdam office. Drive revenue growth through strategic account management and team leadership.',
    requirements: [
      '5+ years of SaaS sales experience',
      'Proven track record of team management',
      'Experience with enterprise accounts',
      'Fluent in Dutch and English'
    ],
    benefits: [
      'Competitive salary + commission',
      'Equity package',
      '25 vacation days',
      'Learning & development budget'
    ],
    remote: false,
    createdAt: '2025-01-15',
    featured: true,
    tags: ['SaaS', 'Enterprise', 'Management', 'Amsterdam']
  },
  {
    id: '2',
    title: 'Business Development Representative',
    company: 'SaaS Dynamics',
    location: 'Remote',
    salary: { min: 45000, max: 65000, currency: 'EUR' },
    type: 'full-time',
    seniority: 'junior',
    description: 'Join our fast-growing BDR team and help qualify leads for our enterprise sales team. Perfect for someone starting their SaaS sales career.',
    requirements: [
      '1-2 years of sales experience',
      'Strong communication skills',
      'Hunter mentality',
      'Experience with CRM tools'
    ],
    benefits: [
      'Remote-first culture',
      'Career progression path',
      'Monthly team events',
      'Health insurance'
    ],
    remote: true,
    createdAt: '2025-01-10',
    featured: true,
    tags: ['Remote', 'Entry-level', 'BDR', 'SaaS']
  },
  {
    id: '3',
    title: 'VP of Sales',
    company: 'CloudVenture',
    location: 'Amsterdam',
    salary: { min: 150000, max: 200000, currency: 'EUR' },
    type: 'full-time',
    seniority: 'director',
    description: 'Scale our sales organization from €5M to €50M ARR. Build and lead a world-class sales team in the European market.',
    requirements: [
      '10+ years of SaaS sales leadership',
      'Experience scaling from startup to scale-up',
      'Proven track record with enterprise deals',
      'Experience building sales processes'
    ],
    benefits: [
      'Significant equity package',
      'C-level compensation',
      'Relocation assistance',
      'Executive coaching'
    ],
    remote: false,
    createdAt: '2025-01-12',
    featured: true,
    tags: ['Leadership', 'Scale-up', 'C-level', 'Amsterdam']
  },
  {
    id: '4',
    title: 'Account Executive',
    company: 'DataPilot',
    location: 'Utrecht',
    salary: { min: 60000, max: 85000, currency: 'EUR' },
    type: 'full-time',
    seniority: 'mid',
    description: 'Drive new business acquisition for our data analytics platform. Focus on mid-market accounts across BENELUX region.',
    requirements: [
      '3-5 years of SaaS AE experience',
      'Experience with data/analytics tools',
      'Consultative selling approach',
      'BENELUX market knowledge'
    ],
    benefits: [
      'Uncapped commission',
      'Car allowance',
      'Flexible working hours',
      'Team trips'
    ],
    remote: false,
    createdAt: '2025-01-08',
    featured: false,
    tags: ['Mid-market', 'Data', 'BENELUX', 'Utrecht']
  },
  {
    id: '5',
    title: 'Sales Development Representative',
    company: 'ScaleUp Solutions',
    location: 'Remote',
    salary: { min: 40000, max: 55000, currency: 'EUR' },
    type: 'full-time',
    seniority: 'junior',
    description: 'Generate qualified opportunities for our enterprise sales team. Ideal for ambitious professionals looking to break into tech sales.',
    requirements: [
      '0-2 years of sales experience',
      'University degree preferred',
      'Excellent written communication',
      'Coachable attitude'
    ],
    benefits: [
      'Comprehensive training program',
      'Clear promotion path to AE',
      'Remote work flexibility',
      'Mentorship program'
    ],
    remote: true,
    createdAt: '2025-01-05',
    featured: false,
    tags: ['Remote', 'Training', 'Career-starter', 'SDR']
  },
  {
    id: '6',
    title: 'Enterprise Sales Director',
    company: 'CloudSecure',
    location: 'Amsterdam',
    salary: { min: 120000, max: 160000, currency: 'EUR' },
    type: 'full-time',
    seniority: 'senior',
    description: 'Lead enterprise sales efforts for our cybersecurity platform. Manage complex, multi-stakeholder sales cycles with Fortune 500 companies.',
    requirements: [
      '7+ years of enterprise sales experience',
      'Cybersecurity industry knowledge',
      'Experience with 6-7 figure deals',
      'Strong presentation skills'
    ],
    benefits: [
      'High earning potential',
      'Executive benefits package',
      'Global conference attendance',
      'Stock options'
    ],
    remote: false,
    createdAt: '2025-01-03',
    featured: false,
    tags: ['Enterprise', 'Cybersecurity', 'Director', 'Amsterdam']
  },
  {
    id: '7',
    title: 'Partner Sales Manager',
    company: 'IntegrationHub',
    location: 'Rotterdam',
    salary: { min: 70000, max: 95000, currency: 'EUR' },
    type: 'full-time',
    seniority: 'mid',
    description: 'Build and manage strategic partnerships to drive revenue growth. Focus on channel partner relationships and ecosystem development.',
    requirements: [
      '4-6 years of partner/channel experience',
      'SaaS marketplace knowledge',
      'Relationship building skills',
      'Strategic thinking ability'
    ],
    benefits: [
      'Partnership bonus structure',
      'Travel opportunities',
      'Networking events',
      'Professional development'
    ],
    remote: false,
    createdAt: '2025-01-01',
    featured: false,
    tags: ['Partnerships', 'Channel', 'Strategic', 'Rotterdam']
  },
  {
    id: '8',
    title: 'Inside Sales Representative',
    company: 'MarketingTech',
    location: 'Remote',
    salary: { min: 50000, max: 70000, currency: 'EUR' },
    type: 'full-time',
    seniority: 'mid',
    description: 'Drive inbound and outbound sales for our marketing automation platform. Focus on SMB segment across European markets.',
    requirements: [
      '2-4 years of inside sales experience',
      'Marketing tech knowledge preferred',
      'Multi-language capabilities',
      'CRM proficiency'
    ],
    benefits: [
      'Work from anywhere in EU',
      'Commission accelerators',
      'Quarterly bonuses',
      'Technology stipend'
    ],
    remote: true,
    createdAt: '2024-12-28',
    featured: false,
    tags: ['Remote', 'Marketing-tech', 'SMB', 'Inside-sales']
  }
];

export const jobLocations = ['Amsterdam', 'Rotterdam', 'Utrecht', 'Remote', 'Netherlands'];
export const jobTypes = ['full-time', 'part-time', 'contract'];
export const seniorityLevels = ['junior', 'mid', 'senior', 'director'];
export const jobTags = ['SaaS', 'Enterprise', 'Remote', 'Entry-level', 'Leadership', 'Scale-up', 'Data', 'Cybersecurity', 'Partnerships', 'Marketing-tech'];
