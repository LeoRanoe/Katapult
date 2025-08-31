'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, DollarSign, ArrowLeft, Send, Star } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import JobCard from '@/components/jobs/JobCard';
import { mockJobs } from '@/data/mockJobs';
import Link from 'next/link';

interface JobDetailPageProps {
  params: {
    id: string;
  };
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const [isApplying, setIsApplying] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: '',
    linkedin: '',
    experience: '',
  });

  const job = mockJobs.find(j => j.id === params.id);
  
  if (!job) {
    notFound();
  }

  const relatedJobs = mockJobs
    .filter(j => j.id !== job.id && (
      j.company === job.company || 
      j.seniority === job.seniority ||
      j.tags.some(tag => job.tags.includes(tag))
    ))
    .slice(0, 3);

  const formatSalary = (salary: typeof job.salary) => {
    if (!salary) return 'Competitive salary';
    return `€${(salary.min / 1000).toFixed(0)}k - €${(salary.max / 1000).toFixed(0)}k`;
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationData);
    alert('Application submitted successfully! We&apos;ll be in touch soon.');
    setIsApplying(false);
  };

  return (
    <>
      {/* Job Header */}
      <Section className="bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <Container>
          <div className="py-12 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back Button */}
              <Link
                href="/jobs"
                className="inline-flex items-center space-x-2 text-gray-200 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Jobs</span>
              </Link>

              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                      job.type === 'full-time' 
                        ? 'bg-green-500/20 text-green-300'
                        : job.type === 'part-time'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-purple-500/20 text-purple-300'
                    }`}>
                      {job.type}
                    </div>
                    {job.featured && (
                      <div className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  <h1 className="font-display font-bold text-4xl lg:text-5xl mb-4">
                    {job.title}
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-200 mb-6">
                    {job.company}
                  </p>

                  {/* Job Meta */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-300">Location</p>
                        <p className="font-medium">
                          {job.location} {job.remote && '(Remote)'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-300">Salary</p>
                        <p className="font-medium">{formatSalary(job.salary)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-300">Level</p>
                        <p className="font-medium capitalize">{job.seniority}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-300">Posted</p>
                        <p className="font-medium">
                          {new Date(job.createdAt).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="ml-8">
                  <button
                    onClick={() => setIsApplying(true)}
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Job Details */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Job Description */}
                <div>
                  <h2 className="font-display font-bold text-2xl text-secondary mb-4">
                    About This Role
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* Requirements */}
                <div>
                  <h2 className="font-display font-bold text-2xl text-secondary mb-4">
                    What We&apos;re Looking For
                  </h2>
                  <ul className="space-y-3">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="font-display font-bold text-2xl text-secondary mb-4">
                    What We Offer
                  </h2>
                  <ul className="space-y-3">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div>
                  <h2 className="font-display font-bold text-2xl text-secondary mb-4">
                    Skills & Technologies
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24 space-y-8"
              >
                {/* Apply Card */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-display font-bold text-xl text-secondary mb-4">
                    Ready to Apply?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Join {job.company} and take your sales career to the next level.
                  </p>
                  <button
                    onClick={() => setIsApplying(true)}
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Apply for This Position
                  </button>
                </div>

                {/* Company Info */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="font-display font-bold text-xl text-secondary mb-4">
                    About {job.company}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A leading SaaS company focused on delivering innovative solutions
                    to help businesses scale and grow.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Industry:</strong> SaaS Technology</p>
                    <p><strong>Size:</strong> 50-200 employees</p>
                    <p><strong>Founded:</strong> 2018</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Jobs */}
      {relatedJobs.length > 0 && (
        <Section background="gray">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-3xl text-secondary text-center mb-12">
                Similar Opportunities
              </h2>
              <div className="grid lg:grid-cols-3 gap-6">
                {relatedJobs.map((relatedJob, index) => (
                  <JobCard key={relatedJob.id} job={relatedJob} index={index} />
                ))}
              </div>
            </motion.div>
          </Container>
        </Section>
      )}

      {/* Application Modal */}
      {isApplying && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-2xl text-secondary">
                Apply for {job.title}
              </h3>
              <button
                onClick={() => setIsApplying(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicationData.name}
                    onChange={(e) => setApplicationData({...applicationData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicationData.email}
                    onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    value={applicationData.linkedin}
                    onChange={(e) => setApplicationData({...applicationData, linkedin: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Sales Experience *
                </label>
                <select
                  required
                  value={applicationData.experience}
                  onChange={(e) => setApplicationData({...applicationData, experience: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="2-3">2-3 years</option>
                  <option value="4-6">4-6 years</option>
                  <option value="7-10">7-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter *
                </label>
                <textarea
                  required
                  rows={6}
                  value={applicationData.coverLetter}
                  onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                  placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setIsApplying(false)}
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}
