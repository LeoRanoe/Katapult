'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Target, ArrowRight, Building2, MapPin, Euro } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import PaintBrushEffect from '@/components/animations/PaintBrushEffect';

const caseStudies = [
  {
    id: 1,
    company: 'TechFlow SaaS',
    industry: 'B2B SaaS Platform',
    location: 'Amsterdam',
    challenge: 'Scale sales team from 3 to 15 reps in 6 months',
    solution: 'Implemented structured hiring process with cultural fit assessment',
    results: {
      timeToHire: '18 days',
      positions: '12 positions filled',
      retention: '100% after 12 months',
      revenue: '€2.4M ARR increase'
    },
    testimonial: "Katapult didn't just fill positions - they built our entire sales culture. Every hire has exceeded expectations.",
    author: 'Sarah Chen, VP Sales',
    image: '/api/placeholder/600/400',
    tags: ['Team Scaling', 'B2B SaaS', 'Sales Leadership']
  },
  {
    id: 2,
    company: 'CloudSync',
    industry: 'Enterprise Software',
    location: 'Rotterdam',
    challenge: 'Find VP of Sales with deep enterprise experience',
    solution: 'Executive search with market mapping and cultural assessment',
    results: {
      timeToHire: '28 days',
      positions: '1 VP position',
      retention: 'Still with company',
      revenue: '€8M pipeline in Q1'
    },
    testimonial: "The VP we hired through Katapult transformed our enterprise sales. Worth every euro.",
    author: 'Marcus van Berg, CEO',
    image: '/api/placeholder/600/400',
    tags: ['Executive Search', 'Enterprise', 'Leadership']
  },
  {
    id: 3,
    company: 'DataPipe',
    industry: 'Data Analytics',
    location: 'Utrecht',
    challenge: 'Build international sales team for European expansion',
    solution: 'Multi-country recruitment with language and cultural considerations',
    results: {
      timeToHire: '22 days avg',
      positions: '8 positions across 4 countries',
      retention: '95% after 18 months',
      revenue: '€1.8M new market revenue'
    },
    testimonial: "Katapult understood the nuances of hiring across different European markets perfectly.",
    author: 'Elena Rodriguez, Head of International',
    image: '/api/placeholder/600/400',
    tags: ['International', 'Multi-country', 'Market Expansion']
  }
];

const metrics = [
  { value: '500+', label: 'Successful Placements', icon: Users },
  { value: '95%', label: 'Client Satisfaction', icon: Target },
  { value: '21 days', label: 'Average Time to Hire', icon: Clock },
  { value: '€50M+', label: 'Revenue Impact', icon: TrendingUp }
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white">
        <Container>
          <div className="py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <PaintBrushEffect direction="right" delay={0.5}>
                <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6">
                  Success Stories
                </h1>
              </PaintBrushEffect>
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
              Real results from real companies. See how we&apos;ve helped SaaS businesses scale their sales teams and drive growth.
            </p>
              
              {/* Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <metric.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-display font-bold text-2xl lg:text-3xl mb-1">
                      {metric.value}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Case Studies */}
      <Section>
        <Container>
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className="font-display font-bold text-3xl text-secondary mb-4">
                    {study.company}
                  </h2>
                  
                  <div className="flex items-center space-x-6 text-gray-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <Building2 className="w-4 h-4" />
                      <span>{study.industry}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{study.location}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg text-secondary mb-2">Challenge</h3>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg text-secondary mb-2">Solution</h3>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg text-secondary mb-4">Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="font-bold text-xl text-primary mb-1">
                            {study.results.timeToHire}
                          </div>
                          <div className="text-sm text-gray-600">Average Time to Hire</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="font-bold text-xl text-primary mb-1">
                            {study.results.positions}
                          </div>
                          <div className="text-sm text-gray-600">Successfully Filled</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="font-bold text-xl text-primary mb-1">
                            {study.results.retention}
                          </div>
                          <div className="text-sm text-gray-600">Retention Rate</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="font-bold text-xl text-primary mb-1">
                            {study.results.revenue}
                          </div>
                          <div className="text-sm text-gray-600">Revenue Impact</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg mt-8">
                    <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
              &ldquo;{study.testimonial}&rdquo;
            </blockquote>
                    <cite className="font-semibold text-secondary">
                      {study.author}
                    </cite>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-[4/3] flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <Building2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="font-medium">Case Study Visual</p>
                        <p className="text-sm">{study.company}</p>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center">
                      <Euro className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white text-center"
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the companies that have transformed their sales teams with Katapult. 
              Let&apos;s discuss how we can drive your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/services"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
