'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';
import { JobFilters as JobFiltersType } from '@/types';
import { jobLocations, jobTypes, seniorityLevels, jobTags } from '@/data/mockJobs';

interface JobFiltersProps {
  filters: JobFiltersType;
  onFiltersChange: (filters: JobFiltersType) => void;
  totalJobs: number;
  filteredJobs: number;
}

export default function JobFilters({ 
  filters, 
  onFiltersChange, 
  totalJobs, 
  filteredJobs 
}: JobFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const updateFilter = (key: keyof JobFiltersType, value: JobFiltersType[keyof JobFiltersType]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleArrayFilter = (key: 'location' | 'seniority' | 'type' | 'tags', value: string) => {
    const currentArray = filters[key] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    updateFilter(key, newArray);
  };

  const clearFilters = () => {
    onFiltersChange({
      location: [],
      seniority: [],
      type: [],
      remote: null,
      salary: { min: 0, max: 200000 },
      tags: [],
    });
  };

  const hasActiveFilters = 
    filters.location.length > 0 ||
    filters.seniority.length > 0 ||
    filters.type.length > 0 ||
    filters.remote !== null ||
    filters.tags.length > 0 ||
    filters.salary.min > 0 ||
    filters.salary.max < 200000;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Filter className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-lg">Filters</h3>
          {hasActiveFilters && (
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
              {filteredJobs} of {totalJobs} jobs
            </span>
          )}
        </div>
        <div className="flex items-center space-x-4">
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-gray-500 hover:text-primary transition-colors text-sm font-medium"
            >
              Clear all
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center space-x-2 text-primary"
          >
            <span>Filters</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Filter Content */}
      <AnimatePresence>
        <motion.div 
          className={`${isOpen ? 'block' : 'hidden'} lg:block`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location Filter */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Location</h4>
              <div className="space-y-2">
                {jobLocations.map((location) => (
                  <label key={location} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.location.includes(location)}
                      onChange={() => toggleArrayFilter('location', location)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700">{location}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Job Type Filter */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Job Type</h4>
              <div className="space-y-2">
                {jobTypes.map((type) => (
                  <label key={type} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.type.includes(type)}
                      onChange={() => toggleArrayFilter('type', type)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Seniority Filter */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Seniority</h4>
              <div className="space-y-2">
                {seniorityLevels.map((level) => (
                  <label key={level} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.seniority.includes(level)}
                      onChange={() => toggleArrayFilter('seniority', level)}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-gray-700 capitalize">{level}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Remote Work */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Work Style</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="remote"
                    checked={filters.remote === null}
                    onChange={() => updateFilter('remote', null)}
                    className="border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">All</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="remote"
                    checked={filters.remote === true}
                    onChange={() => updateFilter('remote', true)}
                    className="border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">Remote</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="remote"
                    checked={filters.remote === false}
                    onChange={() => updateFilter('remote', false)}
                    className="border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-700">Office</span>
                </label>
              </div>
            </div>
          </div>

          {/* Salary Range */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-3">Salary Range (EUR)</h4>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="5000"
                  value={filters.salary.min}
                  onChange={(e) => updateFilter('salary', { ...filters.salary, min: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>€{(filters.salary.min / 1000).toFixed(0)}k</span>
                  <span>€{(filters.salary.max / 1000).toFixed(0)}k</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tags Filter */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-3">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {jobTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleArrayFilter('tags', tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    filters.tags.includes(tag)
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
