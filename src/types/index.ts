export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  type: 'full-time' | 'part-time' | 'contract';
  seniority: 'junior' | 'mid' | 'senior' | 'director';
  description: string;
  requirements: string[];
  benefits: string[];
  remote: boolean;
  createdAt: string;
  featured: boolean;
  tags: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  timeline: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export interface JobFilters {
  location: string[];
  seniority: string[];
  type: string[];
  remote: boolean | null;
  salary: {
    min: number;
    max: number;
  };
  tags: string[];
}
