'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Target, Phone, Mail } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

const process = [
  {
    step: 1,
    title: 'Discovery Call',
    duration: '30 minutes',
    description: 'We dive deep into your hiring needs, company culture, and ideal candidate profile.',
    details: [
      'Understand your sales process and methodology',
      'Define the role requirements and success metrics',
      'Discuss compensation, benefits, and growth opportunities',
      'Align on timeline and expectations'
    ]
  },
  {
    step: 2,
    title: 'Talent Sourcing',
    duration: '3-5 days',
    description: 'Our expert team leverages our network and proven sourcing strategies to find your perfect match.',
    details: [
      'Access to our exclusive candidate database',
      'Proactive outreach to passive candidates',
      'Comprehensive screening and qualification',
      'Initial interviews and skill assessments'
    ]
  },
  {
    step: 3,
    title: 'Candidate Presentation',
    duration: '1-2 days',
    description: 'We present 3-4 highly qualified candidates with detailed profiles and our assessment.',
    details: [
      'Detailed candidate profiles and assessments',
      'Salary expectations and availability',
      'Cultural fit evaluation',
      'Interview guidance and scheduling'
    ]
  },
  {
    step: 4,
    title: 'Hire & Onboard',
    duration: '1-2 weeks',
    description: 'We facilitate the interview process, negotiations, and ensure a smooth start.',
    details: [
      'Interview coordination and feedback collection',
      'Offer negotiation and acceptance',
      'Reference checks and background screening',
      '90-day onboarding support and check-ins'
    ]
  }
];

const benefits = [
  {
    icon: Target,
    title: '95% Success Rate',
    description: 'Our candidates have a 95% success rate in passing probation periods.'
  },
  {
    icon: Clock,
    title: '7-Day Average',
    description: 'We typically present qualified candidates within 7 business days.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our recruiters are former SaaS sales professionals who understand your needs.'
  }
];

const testimonials = [
  {
    quote: "Katapult delivered exactly what they promised. We hired our VP of Sales in 2 weeks and he&apos;s exceeded all expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechFlow",
    company: "TechFlow"
  },
  {
    quote: "Finally, a recruitment agency that understands SaaS sales. The quality of candidates was exceptional.",
    author: "Mark Peters",
    role: "CRO, CloudVenture", 
    company: "CloudVenture"
  },
  {
    quote: "They don't just send CVs - they send solutions. Our new sales manager hit quota in month 2.",
    author: "Lisa Chen",
    role: "Head of People, DataPilot",
    company: "DataPilot"
  }
];

export default function HowWeWorkCompaniesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <Container>
          <div className="py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6">
                We Score in Four
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Our proven 4-step process ensures you get the right sales talent, 
                fast. No endless candidate streams - just quality matches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Start Hiring
                </a>
                <a
                  href="#process"
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  See How It Works
                </a>
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
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
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
      <Section id="process" background="gray">
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              Our 4-Step Process
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial consultation to successful hire - here&apos;s exactly how we work together.
            </p>
          </div>

          <div className="space-y-16">
            {process.map((step, index) => (
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
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-2xl text-secondary">
                          {step.title}
                        </h3>
                        <p className="text-primary font-medium">
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
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
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
              What Our Clients Say
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from the companies we&apos;ve helped grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
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
                    {testimonial.role}
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
            className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white"
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
              Ready to Scale Your Sales Team?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s discuss your hiring needs and show you how we can deliver 
              your next sales superstar in just 4 steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Schedule a Call</span>
              </a>
              <a
                href="mailto:hello@katapult.nl"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send us an Email</span>
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
