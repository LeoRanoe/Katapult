'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, TrendingUp, Users, Award, CheckCircle, ArrowRight, Star, Briefcase } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import PaintBrushEffect from '@/components/animations/PaintBrushEffect';

const benefits = [
  {
    icon: Search,
    title: 'Curated Opportunities',
    description: 'Access to exclusive SaaS sales roles that aren\'t advertised elsewhere',
    metric: '70% hidden market'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Average 30-50% salary increase for candidates we place',
    metric: '40% avg. increase'
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Career coaching from ex-SaaS sales leaders who\'ve been there',
    metric: '15+ years experience'
  },
  {
    icon: Award,
    title: 'Top Companies',
    description: 'Direct access to fast-growing SaaS scale-ups and enterprises',
    metric: '100+ partner companies'
  }
];

const testimonials = [
  {
    quote: "Katapult helped me transition from a traditional sales role to SaaS. The guidance and opportunities they provided were incredible.",
    author: "Mike Johnson",
    role: "Senior Sales Executive",
    company: "TechFlow",
    previousRole: "Account Manager",
    increase: "45% salary increase"
  },
  {
    quote: "I went from SDR to AE in 8 months with Katapult\'s support. They truly understand career progression in SaaS.",
    author: "Lisa Chen",
    role: "Account Executive",
    company: "CloudSync",
    previousRole: "SDR",
    increase: "Career advancement"
  },
  {
    quote: "The interview preparation and market insights were game-changing. I landed my dream role at a unicorn startup.",
    author: "David Rodriguez",
    role: "VP Sales",
    company: "DataPipe",
    previousRole: "Sales Manager",
    increase: "60% salary increase"
  }
];

const jobTypes = [
  {
    title: 'Sales Development',
    roles: ['SDR', 'BDR', 'Lead Generation'],
    salary: '€35k - €55k',
    companies: '50+ openings',
    growth: 'High growth potential'
  },
  {
    title: 'Account Executive',
    roles: ['Mid-Market AE', 'Enterprise AE', 'Inside Sales'],
    salary: '€55k - €85k',
    companies: '30+ openings',
    growth: 'Direct promotion path'
  },
  {
    title: 'Sales Management',
    roles: ['Team Lead', 'Sales Manager', 'Regional Manager'],
    salary: '€70k - €110k',
    companies: '15+ openings',
    growth: 'Leadership track'
  },
  {
    title: 'Sales Leadership',
    roles: ['VP Sales', 'Head of Sales', 'Chief Revenue Officer'],
    salary: '€100k - €200k+',
    companies: '8+ openings',
    growth: 'C-level trajectory'
  }
];

const process = [
  {
    step: '01',
    title: 'Career Consultation',
    description: 'Free 30-minute career consultation to understand your goals and experience',
    action: 'Book your call'
  },
  {
    step: '02',
    title: 'Profile Optimization',
    description: 'We optimize your LinkedIn and CV to attract top SaaS companies',
    action: 'Get profile review'
  },
  {
    step: '03',
    title: 'Opportunity Matching',
    description: 'Access curated opportunities that match your skills and career goals',
    action: 'View opportunities'
  },
  {
    step: '04',
    title: 'Interview Support',
    description: 'Comprehensive interview preparation and salary negotiation support',
    action: 'Land your role'
  }
];

export default function CandidatesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <PaintBrushEffect direction="right" delay={0.3}>
                <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6">
                  Accelerate Your SaaS Career
                </h1>
              </PaintBrushEffect>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                Join the fastest-growing companies in Europe. Get exclusive access to SaaS sales roles 
                that aren&apos;t advertised anywhere else.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/jobs"
                  className="bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Browse Opportunities</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  Get Career Advice
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="font-display font-bold text-2xl mb-6">Why Choose Katapult?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-white" />
                    <span>70% of roles from hidden market</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="w-5 h-5 text-white" />
                    <span>40% average salary increase</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-white" />
                    <span>Ex-SaaS sales leader guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-white" />
                    <span>100+ partner companies</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              Why Work With Us
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re not just recruiters - we&apos;re career partners who understand the SaaS sales landscape 
              and know how to accelerate your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="font-display font-bold text-2xl text-accent mb-2">
                  {benefit.metric}
                </div>
                <h3 className="font-display font-bold text-xl text-secondary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Job Types Section */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              Opportunities by Level
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From entry-level to C-suite, we have opportunities across all career stages in SaaS sales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Briefcase className="w-6 h-6 text-accent" />
                  <h3 className="font-display font-bold text-lg text-secondary">
                    {type.title}
                  </h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  {type.roles.map((role, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{role}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Salary Range</span>
                    <span className="font-medium text-secondary">{type.salary}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Open Roles</span>
                    <span className="font-medium text-accent">{type.companies}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Growth</span>
                    <span className="font-medium text-green-600">{type.growth}</span>
                  </div>
                </div>
                
                <Link
                  href="/jobs"
                  className="w-full bg-accent/10 text-accent py-3 rounded-lg font-semibold transition-colors hover:bg-accent hover:text-white flex items-center justify-center space-x-2 group-hover:bg-accent group-hover:text-white"
                >
                  <span>View Roles</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              How We Help You Succeed
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven 4-step process to accelerate your SaaS sales career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-display font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                <span className="inline-flex items-center text-sm text-accent font-medium">
                  {step.action}
                </span>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              Success Stories
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we&apos;ve helped sales professionals advance their careers in SaaS.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                
                <div className="border-t pt-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Company:</span>
                      <span className="font-medium">{testimonial.company}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Previous:</span>
                      <span className="font-medium">{testimonial.previousRole}</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium mt-4">
                    {testimonial.increase}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-accent to-primary text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <h2 className="font-display font-bold text-3xl lg:text-5xl mb-6">
              Ready to Accelerate Your Career?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of sales professionals who&apos;ve advanced their careers with Katapult.
              Your next opportunity is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/jobs"
                className="bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Browse Jobs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Get Career Consultation
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
