'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Mail } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import JobCard from '@/components/jobs/JobCard';
import JobFilters from '@/components/jobs/JobFilters';
import { mockJobs } from '@/data/mockJobs';
import { JobFilters as JobFiltersType } from '@/types';

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<JobFiltersType>({
    location: [],
    seniority: [],
    type: [],
    remote: null,
    salary: { min: 0, max: 200000 },
    tags: [],
  });

  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      // Search term filter
      if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !job.company.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !job.description.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }

      // Location filter
      if (filters.location.length > 0 && !filters.location.includes(job.location)) {
        return false;
      }

      // Job type filter
      if (filters.type.length > 0 && !filters.type.includes(job.type)) {
        return false;
      }

      // Seniority filter
      if (filters.seniority.length > 0 && !filters.seniority.includes(job.seniority)) {
        return false;
      }

      // Remote filter
      if (filters.remote !== null && job.remote !== filters.remote) {
        return false;
      }

      // Salary filter
      if (job.salary && (
        job.salary.min < filters.salary.min || 
        job.salary.max > filters.salary.max
      )) {
        return false;
      }

      // Tags filter
      if (filters.tags.length > 0 && !filters.tags.some(tag => job.tags.includes(tag))) {
        return false;
      }

      return true;
    });
  }, [searchTerm, filters]);

  const handleSubscribeToAlerts = (email: string) => {
    // Simulate email subscription
    console.log('Subscribing to job alerts:', email);
    alert('Successfully subscribed to job alerts!');
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <Container>
          <div className="text-center py-12 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display font-bold text-4xl lg:text-5xl mb-6">
                Your Next SaaS Sales Role Awaits
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Discover handpicked opportunities from the fastest-growing SaaS companies in the Netherlands
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs by title, company, or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Jobs Section */}
      <Section>
        <Container>
          {/* Job Alerts Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 mb-8 text-white"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0">
                <h3 className="font-display font-bold text-2xl mb-2">
                  Never Miss an Opportunity
                </h3>
                <p className="text-lg opacity-90">
                  Get notified when new jobs matching your criteria are posted
                </p>
              </div>
              <div className="flex w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 lg:w-80 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none"
                />
                <button
                  onClick={() => handleSubscribeToAlerts('user@example.com')}
                  className="bg-white text-primary px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Filters */}
          <JobFilters
            filters={filters}
            onFiltersChange={setFilters}
            totalJobs={mockJobs.length}
            filteredJobs={filteredJobs.length}
          />

          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display font-bold text-2xl text-secondary">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Found
              </h2>
              {searchTerm && (
                <p className="text-gray-600 mt-1">
                  Showing results for &quot;{searchTerm}&quot;
                </p>
              )}
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Most Recent</option>
              <option>Salary: High to Low</option>
              <option>Salary: Low to High</option>
              <option>Company A-Z</option>
            </select>
          </div>

          {/* Jobs Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-display font-bold text-xl text-secondary mb-4">
                No jobs found
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Try adjusting your search criteria or filters to find more opportunities
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilters({
                    location: [],
                    seniority: [],
                    type: [],
                    remote: null,
                    salary: { min: 0, max: 200000 },
                    tags: [],
                  });
                }}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}

          {/* Load More Button */}
          {filteredJobs.length > 0 && filteredJobs.length >= 9 && (
            <div className="text-center mt-12">
              <button className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                Load More Jobs
              </button>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
