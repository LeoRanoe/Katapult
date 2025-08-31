'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { Job } from '@/types';

interface JobCardProps {
  job: Job;
  index?: number;
}

export default function JobCard({ job, index = 0 }: JobCardProps) {
  const formatSalary = (salary: Job['salary']) => {
    if (!salary) return 'Competitive salary';
    return `€${(salary.min / 1000).toFixed(0)}k - €${(salary.max / 1000).toFixed(0)}k`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/jobs/${job.id}`}>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300 cursor-pointer h-full">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                job.type === 'full-time' 
                  ? 'bg-green-100 text-green-700'
                  : job.type === 'part-time'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-purple-100 text-purple-700'
              }`}>
                {job.type}
              </div>
              {job.featured && (
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}
            </div>
            <Star className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
          </div>

          {/* Job Title & Company */}
          <h3 className="font-display font-bold text-xl text-secondary mb-2 group-hover:text-primary transition-colors">
            {job.title}
          </h3>
          <p className="text-gray-600 font-medium mb-4">{job.company}</p>

          {/* Job Details */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                {job.location} {job.remote && '(Remote)'}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">
                {new Date(job.createdAt).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short'
                })}
              </span>
            </div>
          </div>

          {/* Salary */}
          <div className="font-semibold text-primary text-lg mb-4">
            {formatSalary(job.salary)}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {job.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
              >
                {tag}
              </span>
            ))}
            {job.tags.length > 3 && (
              <span className="text-gray-500 text-sm">
                +{job.tags.length - 3} more
              </span>
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <span className="text-gray-600 font-medium capitalize">
              {job.seniority} level
            </span>
            <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
