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
    description: string;
  }[];
  timeline: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  tags: string[];
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "hr-tech-saas-expansion",
    title: "Scaling Sales Team for €50M ARR HR Tech Platform",
    client: "Leading HR Tech SaaS",
    industry: "HR Technology",
    challenge: "Fast-growing HR SaaS platform needed to scale their sales team from 8 to 25 reps within 6 months to support European expansion. Previous recruitment efforts with 4 agencies over 8 months yielded zero quality hires.",
    solution: "Implemented our 'Score in Four' methodology focusing exclusively on candidates with proven SaaS sales track records. Created targeted talent mapping in DACH region and leveraged our ex-SaaS seller network for warm introductions.",
    results: [
      {
        metric: "Time to Hire",
        value: "3 weeks average",
        description: "vs. 6+ months with previous agencies"
      },
      {
        metric: "Quality Ratio", 
        value: "4:1 candidate ratio",
        description: "Maximum 4 candidates per role vs. industry standard 20+"
      },
      {
        metric: "Success Rate",
        value: "12 out of 13 hires",
        description: "92% success rate with 6-month retention"
      },
      {
        metric: "Revenue Impact",
        value: "€8M ARR increase",
        description: "Direct attribution from new sales team performance"
      }
    ],
    timeline: "6 months",
    testimonial: {
      quote: "Katapult found our Head of Customer Success within 3 weeks. Their 'Score in Four' approach delivered exactly what they promised - quality candidates, not quantity. We went from 8 months of failed searches to building our entire European sales team in under 6 months.",
      author: "Marcus Jensen",
      role: "VP of Sales EMEA", 
      company: "Leading HR Tech SaaS"
    },
    tags: ["Enterprise Sales", "Team Scaling", "European Expansion", "HR Tech"],
    featured: true
  },
  {
    id: "fintech-dach-expansion",
    title: "DACH Market Entry for Series B Fintech",
    client: "Fast-Growing Fintech",
    industry: "Financial Technology",
    challenge: "Amsterdam-based fintech needed native German speakers to penetrate DACH market. Required deep understanding of German banking regulations and B2B sales cycles. 6 previous recruitment agencies failed to deliver suitable candidates.",
    solution: "Leveraged our DACH network of ex-SaaS sellers with fintech experience. Focused on candidates who had successfully navigated German regulatory environment and understood complex B2B sales in financial services.",
    results: [
      {
        metric: "Market Entry Speed",
        value: "2 weeks to first hire",
        description: "vs. 8 months of previous failed attempts"
      },
      {
        metric: "German Market Results",
        value: "€2.5M ARR in 9 months",
        description: "Exceeded targets by 150% in first year"
      },
      {
        metric: "Team Performance",
        value: "3 A-players hired",
        description: "All exceeded quota within 6 months"
      },
      {
        metric: "Regulatory Success",
        value: "100% compliance",
        description: "Zero regulatory issues with German authorities"
      }
    ],
    timeline: "4 months",
    testimonial: {
      quote: "We used 6 recruitment agencies without any result. Katapult found our German-speaking SDR within weeks where others failed for months. The quality difference was night and day - these weren't just German speakers, they were fintech specialists who understood our market.",
      author: "Sophie Mueller",
      role: "Head of Revenue",
      company: "Fast-Growing Fintech"
    },
    tags: ["DACH Expansion", "Fintech", "Regulatory Compliance", "German Market"],
    featured: true
  },
  {
    id: "data-platform-scale-up",
    title: "Building Enterprise Sales Team for AI Platform",
    client: "Series B Data Platform", 
    industry: "Data & Analytics",
    challenge: "AI-powered analytics platform needed to transition from product-led growth to enterprise sales. Required senior sales leaders who understood complex technical sales cycles and could sell to C-level executives at Fortune 500 companies.",
    solution: "Targeted ex-enterprise AEs from established data companies (Snowflake, Databricks, Palantir). Used our methodology to identify candidates who had successfully sold €1M+ deals and could articulate complex technical value propositions.",
    results: [
      {
        metric: "Enterprise Pipeline",
        value: "€15M in 6 months",
        description: "Built from zero enterprise pipeline"
      },
      {
        metric: "Deal Size Growth",
        value: "10x average deal size",
        description: "From €50k to €500k average deals"
      },
      {
        metric: "Sales Leadership",
        value: "VP Sales + 3 AEs",
        description: "Complete enterprise sales team in 4 weeks"
      },
      {
        metric: "Fortune 500 Logos",
        value: "5 enterprise clients",
        description: "Including 2 Fortune 100 companies"
      }
    ],
    timeline: "4 weeks",
    testimonial: {
      quote: "Katapult hired 3 enterprise Account Executives in four weeks. Incredible speed and quality - they truly understand SaaS sales. Our new VP of Sales closed our first €1M deal within 8 weeks of starting.",
      author: "David Kim",
      role: "Country Manager DACH",
      company: "Series B Data Platform"
    },
    tags: ["Enterprise Sales", "AI/ML", "Technical Sales", "C-Level Selling"],
    featured: true
  },
  {
    id: "saas-expansion-benelux",
    title: "Benelux Expansion for Martech SaaS",
    client: "Martech Scale-up",
    industry: "Marketing Technology", 
    challenge: "US-based martech company expanding into Benelux. Needed sales team that understood European data privacy regulations (GDPR) and could navigate complex procurement processes at enterprise level.",
    solution: "Built hybrid team of Dutch and Belgian sales professionals with proven martech experience. Focused on candidates who had successfully managed GDPR compliance and enterprise procurement cycles.",
    results: [
      {
        metric: "Market Entry",
        value: "3 months total",
        description: "From zero to €1M ARR in Benelux"
      },
      {
        metric: "GDPR Compliance", 
        value: "100% clean record",
        description: "Zero compliance issues or fines"
      },
      {
        metric: "Enterprise Success",
        value: "8 Fortune 500 clients",
        description: "Penetrated enterprise market successfully"
      },
      {
        metric: "Team Retention",
        value: "100% at 18 months",
        description: "Perfect retention record"
      }
    ],
    timeline: "3 months",
    testimonial: {
      quote: "Katapult understood both the technical requirements and cultural nuances of expanding into Europe. Their candidates weren't just great salespeople - they were European market experts who made our expansion seamless.",
      author: "Lisa Van Der Berg",
      role: "VP International",
      company: "Martech Scale-up"
    },
    tags: ["Market Expansion", "GDPR Compliance", "Martech", "Enterprise"],
    featured: false
  }
];

export const caseStudyStats = {
  totalPlacements: "500+",
  averageTimeToHire: "3.2 weeks", 
  clientSatisfaction: "96%",
  candidateRetention: "94%",
  averageRevenue: "€2.8M",
  fortuneClients: "45+"
};
