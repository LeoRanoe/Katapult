export interface SalaryBenchmark {
  role: string;
  level: 'Junior' | 'Mid' | 'Senior' | 'Lead' | 'Director' | 'VP';
  baseSalary: {
    min: number;
    max: number;
    median: number;
    currency: string;
  };
  oteRange: {
    min: number;
    max: number;
    median: number;
    currency: string;
  };
  equity: string;
  location: string;
  companySize: string;
  lastUpdated: string;
}

export interface MarketTrend {
  id: string;
  title: string;
  category: 'Salary' | 'Hiring' | 'Skills' | 'Market';
  trend: 'up' | 'down' | 'stable';
  percentage: number;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
  timeframe: string;
}

export const salaryBenchmarks: SalaryBenchmark[] = [
  {
    role: "Sales Development Representative (SDR)",
    level: "Junior",
    baseSalary: { min: 35000, max: 50000, median: 42500, currency: "EUR" },
    oteRange: { min: 50000, max: 75000, median: 62500, currency: "EUR" },
    equity: "0.01% - 0.05%",
    location: "Amsterdam",
    companySize: "Series A-B (50-200 employees)",
    lastUpdated: "2024-12-01"
  },
  {
    role: "Account Executive (AE)", 
    level: "Mid",
    baseSalary: { min: 55000, max: 80000, median: 67500, currency: "EUR" },
    oteRange: { min: 90000, max: 140000, median: 115000, currency: "EUR" },
    equity: "0.05% - 0.15%",
    location: "Amsterdam",
    companySize: "Series B-C (100-500 employees)",
    lastUpdated: "2024-12-01"
  },
  {
    role: "Enterprise Account Executive",
    level: "Senior", 
    baseSalary: { min: 75000, max: 110000, median: 92500, currency: "EUR" },
    oteRange: { min: 130000, max: 200000, median: 165000, currency: "EUR" },
    equity: "0.10% - 0.25%",
    location: "Amsterdam",
    companySize: "Series C+ (500+ employees)",
    lastUpdated: "2024-12-01"
  },
  {
    role: "Sales Manager",
    level: "Lead",
    baseSalary: { min: 85000, max: 120000, median: 102500, currency: "EUR" },
    oteRange: { min: 140000, max: 200000, median: 170000, currency: "EUR" },
    equity: "0.15% - 0.40%",
    location: "Amsterdam", 
    companySize: "Series B+ (200+ employees)",
    lastUpdated: "2024-12-01"
  },
  {
    role: "VP of Sales",
    level: "VP",
    baseSalary: { min: 120000, max: 180000, median: 150000, currency: "EUR" },
    oteRange: { min: 200000, max: 300000, median: 250000, currency: "EUR" },
    equity: "0.25% - 1.00%",
    location: "Amsterdam",
    companySize: "Series B+ (200+ employees)",
    lastUpdated: "2024-12-01"
  },
  {
    role: "Customer Success Manager",
    level: "Mid",
    baseSalary: { min: 50000, max: 75000, median: 62500, currency: "EUR" },
    oteRange: { min: 65000, max: 95000, median: 80000, currency: "EUR" },
    equity: "0.03% - 0.10%",
    location: "Amsterdam",
    companySize: "Series A-C (50-500 employees)", 
    lastUpdated: "2024-12-01"
  }
];

export const marketTrends: MarketTrend[] = [
  {
    id: "ai-sales-tools",
    title: "AI Sales Tools Adoption",
    category: "Skills",
    trend: "up",
    percentage: 85,
    description: "SaaS companies increasingly require sales reps proficient with AI-powered sales tools (Gong, Outreach, HubSpot AI)",
    impact: "High",
    timeframe: "Last 12 months"
  },
  {
    id: "remote-hybrid-preference", 
    title: "Remote/Hybrid Work Preference",
    category: "Hiring",
    trend: "up",
    percentage: 73,
    description: "73% of SaaS sales professionals prefer hybrid or fully remote positions",
    impact: "High",
    timeframe: "Last 18 months"
  },
  {
    id: "enterprise-sales-premium",
    title: "Enterprise Sales Premium",
    category: "Salary",
    trend: "up", 
    percentage: 22,
    description: "Enterprise AE salaries increased 22% due to shortage of qualified candidates",
    impact: "High",
    timeframe: "Last 24 months"
  },
  {
    id: "german-market-demand",
    title: "German-Speaking Talent Shortage",
    category: "Market",
    trend: "up",
    percentage: 45,
    description: "45% increase in demand for German-speaking SaaS sales professionals in Netherlands",
    impact: "Medium",
    timeframe: "Last 12 months"
  },
  {
    id: "data-privacy-expertise",
    title: "GDPR/Data Privacy Skills",
    category: "Skills", 
    trend: "up",
    percentage: 60,
    description: "60% of enterprise SaaS roles now require proven GDPR compliance experience",
    impact: "Medium",
    timeframe: "Last 18 months"
  },
  {
    id: "candidate-market-cooling",
    title: "Candidate Market Cooling",
    category: "Hiring",
    trend: "down",
    percentage: 15,
    description: "Job switching decreased 15% as market conditions stabilize",
    impact: "Medium", 
    timeframe: "Last 6 months"
  }
];

export const netherlandsSaaSData = {
  totalSaaSCompanies: "2,500+",
  employmentGrowth: "+18%",
  averageARR: "€15M", 
  unicorns: 8,
  seriesABFunding: "€2.8B",
  topCities: ["Amsterdam", "Utrecht", "Rotterdam", "Eindhoven"],
  majorHubs: [
    {
      city: "Amsterdam",
      companies: "1,200+",
      averageSalary: "€85k",
      growthRate: "+25%"
    },
    {
      city: "Utrecht", 
      companies: "400+",
      averageSalary: "€78k",
      growthRate: "+22%"
    },
    {
      city: "Rotterdam",
      companies: "300+", 
      averageSalary: "€75k",
      growthRate: "+15%"
    }
  ]
};

export const dachMarketData = {
  marketSize: "€45B",
  growth: "+12% YoY",
  companies: "15,000+",
  mainMarkets: {
    germany: {
      size: "€28B",
      companies: "9,500+",
      avgSalary: "€92k",
      keyHubs: ["Berlin", "Munich", "Hamburg", "Frankfurt"]
    },
    austria: {
      size: "€8B", 
      companies: "2,800+",
      avgSalary: "€85k", 
      keyHubs: ["Vienna", "Salzburg", "Graz"]
    },
    switzerland: {
      size: "€9B",
      companies: "2,700+", 
      avgSalary: "CHF 125k",
      keyHubs: ["Zurich", "Geneva", "Basel"]
    }
  }
};
