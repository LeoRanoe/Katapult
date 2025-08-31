'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Star, Shield, Phone, Mail, User } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

const candidateProcess = [
  {
    step: 1,
    title: 'Initial Conversation',
    duration: '20 minutes',
    description: 'We get to know you, your career goals, and what you&apos;re looking for in your next role.',
    details: [
      'Understand your career aspirations and motivations',
      'Review your experience and achievements',
      'Discuss salary expectations and requirements',
      'Learn about your ideal company culture and role'
    ]
  },
  {
    step: 2,
    title: 'Role Matching',
    duration: '1-3 days',
    description: 'We match you with opportunities that align with your goals and experience.',
    details: [
      'Access to exclusive, often unlisted positions',
      'Personalized job recommendations',
      'Detailed company and role insights',
      'Salary benchmarking and market intelligence'
    ]
  },
  {
    step: 3,
    title: 'Interview Preparation',
    duration: 'Ongoing',
    description: 'We prepare you for success with insider knowledge and interview coaching.',
    details: [
      'Company research and culture insights',
      'Interview coaching and practice sessions',
      'Feedback and guidance throughout the process',
      'Salary negotiation support and advice'
    ]
  },
  {
    step: 4,
    title: 'Career Success',
    duration: '90 days',
    description: 'We support your transition and early success in your new role.',
    details: [
      'Offer negotiation and contract review',
      'Onboarding support and check-ins',
      '90-day success monitoring',
      'Ongoing career development advice'
    ]
  }
];

const benefits = [
  {
    icon: Shield,
    title: 'Confidential Process',
    description: 'Your job search remains completely confidential until you&apos;re ready to move forward.'
  },
  {
    icon: Star,
    title: 'Exclusive Opportunities',
    description: 'Access to roles that aren&apos;t advertised publicly, often with better compensation.'
  },
  {
    icon: User,
    title: 'Personal Advocate',
    description: 'We represent you throughout the process, ensuring you get the best possible outcome.'
  }
];

const candidateTestimonials = [
  {
    quote: "Katapult didn&apos;t just find me a job - they found me a career. The role was perfect and the salary exceeded my expectations.",
    author: "Michael Zhang",
    role: "Senior Account Executive",
    company: "CloudVenture"
  },
  {
    quote: "The interview preparation was incredible. They knew exactly what the company was looking for and helped me ace every round.",
    author: "Emma Thompson", 
    role: "VP of Sales",
    company: "TechFlow"
  },
  {
    quote: "Finally, a recruiter who actually listens. They understood what I wanted and delivered exactly that.",
    author: "David Rodriguez",
    role: "Business Development Manager",
    company: "SaaS Dynamics"
  }
];

const tips = [
  {
    title: 'Perfect Your Sales Story',
    description: 'Prepare specific examples of how you&apos;ve driven revenue, exceeded quotas, and solved customer problems.',
    icon: '📈'
  },
  {
    title: 'Know Your Numbers',
    description: 'Be ready to discuss your performance metrics, quota attainment, and deal sizes with confidence.',
    icon: '🎯'
  },
  {
    title: 'Research the Company',
    description: 'Understand their product, market position, and sales process. Show genuine interest in their business.',
    icon: '🔍'
  },
  {
    title: 'Ask Smart Questions',
    description: 'Inquire about sales methodology, team structure, and growth opportunities. Show you&apos;re thinking strategically.',
    icon: '❓'
  }
];

export default function HowWeWorkCandidatesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-accent to-blue-600 text-white">
        <Container>
          <div className="py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6">
                Your Career, Katapulted
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                We don&apos;t just find you a job - we find you the perfect next step in your 
                SaaS sales career. Personalized, confidential, and results-driven.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Start Your Journey
                </a>
                <Link
                  href="/jobs"
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  Browse Opportunities
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section>
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl text-secondary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              How We Work Together
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From first conversation to career success - here&apos;s how we&apos;ll partner to find your perfect role.
            </p>
          </div>

          <div className="space-y-16">
            {candidateProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:gap-16 gap-8`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-2xl text-secondary">
                          {step.title}
                        </h3>
                        <p className="text-accent font-medium">
                          {step.duration}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-accent to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-display font-bold text-4xl">
                        {step.step}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Interview Tips */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              Interview Success Tips
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insider advice from our team of ex-SaaS sales professionals to help you ace your interviews.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-secondary mb-3">
                      {tip.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="navy">
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl mb-6"
            >
              Success Stories
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear from professionals who&apos;ve katapulted their careers with our help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {candidateTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <p className="text-gray-200 mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="text-white font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-accent to-blue-500 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
              Ready to Katapult Your Career?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s have a confidential conversation about your career goals and 
              how we can help you achieve them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Schedule a Call</span>
              </a>
              <a
                href="mailto:candidates@katapult.nl"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Your CV</span>
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
