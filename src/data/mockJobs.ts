import { Job } from '@/types';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Enterprise Sales Manager - DACH Region',
    company: 'Leading HR Tech SaaS',
    location: 'Amsterdam',
    salary: { min: 85000, max: 120000, currency: 'EUR' },
    type: 'full-time',
    seniority: 'senior',
    description: 'Join a fast-growing HR technology platform serving 1M+ users globally. Lead enterprise sales expansion into German-speaking markets. This role offers the opportunity to build and scale the DACH sales strategy from the ground up while working with cutting-edge HR automation technology.',
    requirements: [
      'Native German speaker with business-level English',
      '5+ years enterprise B2B SaaS sales experience (€100k+ deals)',
      'Proven track record selling to DACH market enterprises',
      'Experience with complex sales cycles (6-18 months)',
      'Understanding of German business culture and procurement processes',
      'Experience with GDPR compliance in sales processes',
      'Track record of exceeding quota by 20%+ consistently'
    ],
    benefits: [
      'Base salary €85k-120k + OTE €150k-180k',
      'Equity package 0.15%-0.25%',
      'German health insurance contribution',
      '30 vacation days + German holidays',
      'Hybrid work (Amsterdam office 2 days/week)',
      'Professional development budget €5k/year',
      '€1,500 home office setup allowance',
      'Annual company retreat + quarterly team events'
    ],
    remote: true,
    createdAt: '2024-12-01',
    featured: true,
    tags: ['SaaS', 'Enterprise', 'Management', 'Amsterdam']
  },
  {
    id: '2',
    title: 'Senior Account Executive - Enterprise SaaS',
    company: 'Fast-Growing Fintech',
    location: 'Amsterdam/Remote',
    salary: { min: 75000, max: 100000, currency: 'EUR' },
    type: 'full-time',
    seniority: 'senior',
    description: 'Drive enterprise growth for innovative payment solutions serving 500+ European banks. Own full sales cycle from lead to close for deals €250k-€2M+. Work with C-level executives at tier-1 financial institutions across Europe.',
    requirements: [
      '4+ years enterprise B2B SaaS sales experience',
      'Proven track record with €500k+ annual quota achievement',
      'Experience selling to financial services/fintech sector',
      'Understanding of European banking regulations',
      'Fluent Dutch and English (German a plus)',
      'Experience with Salesforce, Outreach, and modern sales stack',
      'Consultative selling approach for complex technical solutions'
    ],
    benefits: [
      'Base €75k-100k + OTE €140k-180k (top performers €200k+)',
      'Equity 0.10%-0.20% with high growth potential',
      'Comprehensive benefits including pension',
      '28 vacation days + flexible time off',
      'Choice of Amsterdam office or fully remote',
      '€3k annual learning & development budget',
      'Latest MacBook Pro + €1k home office budget',
      'Quarterly team events and annual company offsite'
    ],
    remote: true,
    createdAt: '2024-11-28',
    featured: true,
    tags: ['Remote', 'Entry-level', 'BDR', 'SaaS']
  },
  {
    id: '3',
    title: 'Head of Sales - AI Data Platform',
    company: 'Series B Data Platform',
    location: 'Amsterdam',
    salary: { min: 130000, max: 180000, currency: 'EUR' },
    type: 'full-time',
    seniority: 'director',
    description: 'Build and lead the entire sales organization for a cutting-edge AI-powered analytics platform. Scale from current €5M to €25M ARR over 24 months. Work directly with the founding team to establish sales processes, hire A-players, and drive enterprise adoption across Europe.',
    requirements: [
      '7+ years sales leadership experience in B2B SaaS',
      'Proven track record scaling revenue 3-5x at high-growth startups',
      'Experience selling complex technical solutions to C-level executives',
      'Background in data/analytics/AI preferred',
      'Experience with Fortune 500 enterprise sales',
      'Team building experience (hired and developed 10+ sales reps)',
      'Fluent English, Dutch preferred for local market expansion'
    ],
    benefits: [
      'Base €130k-180k + equity package 0.25%-1.00%',
      'Significant upside with fast-growing Series B company',
      'Comprehensive benefits + pension matching',
      '30 vacation days + unlimited sick leave',
      'Hybrid work model (3 days Amsterdam office)',
      '€10k annual professional development budget',
      'Executive coaching and leadership development',
      'Company equity program with high growth potential'
    ],
    remote: false,
    createdAt: '2024-11-30',
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
