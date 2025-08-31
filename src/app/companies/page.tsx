'use client';

import { motion } from 'framer-motion';
import { Users, TrendingUp, Clock, Shield, CheckCircle, ArrowRight, Target, Award, Zap } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import PaintBrushEffect from '@/components/animations/PaintBrushEffect';

const benefits = [
  {
    icon: Clock,
    title: 'Faster Hiring',
    description: 'Average 3-4 weeks from brief to hire vs industry average of 8-12 weeks',
    metric: '60% faster'
  },
  {
    icon: Target,
    title: 'Higher Quality',
    description: 'Rigorous screening process ensures only top 5% of candidates reach you',
    metric: '95% success rate'
  },
  {
    icon: Shield,
    title: 'Guaranteed Results',
    description: 'Free replacement if hire leaves within first 6 months',
    metric: '6-month guarantee'
  },
  {
    icon: Award,
    title: 'Expert Partners',
    description: 'Former SaaS sales leaders who understand your challenges',
    metric: '15+ years experience'
  }
];

const testimonials = [
  {
    quote: "Katapult didn't just fill our sales roles - they transformed our entire hiring process. Every candidate was pre-qualified and culture-fit tested.",
    author: "Sarah Chen",
    role: "VP Sales, TechFlow",
    company: "B2B SaaS Platform",
    result: "Scaled from 3 to 15 reps in 6 months"
  },
  {
    quote: "The quality of candidates was exceptional. Our new VP of Sales generated €8M in pipeline within their first quarter.",
    author: "Marcus van Berg",
    role: "CEO, CloudSync",
    company: "Enterprise Software",
    result: "€8M pipeline in Q1"
  },
  {
    quote: "Finally, a recruitment partner that understands SaaS sales. They delivered exactly what we needed, when we needed it.",
    author: "Elena Rodriguez",
    role: "Head of International, DataPipe",
    company: "Data Analytics",
    result: "8 hires across 4 countries"
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery Workshop',
    description: 'We dive deep into your company culture, sales process, and ideal candidate profile through our comprehensive discovery workshop.',
    timeline: '1-2 days',
    deliverables: ['Role specification', 'Candidate persona', 'Success metrics']
  },
  {
    step: '02',
    title: 'Market Intelligence',
    description: 'Comprehensive market mapping and competitor analysis to identify and approach the best talent in your space.',
    timeline: '3-5 days',
    deliverables: ['Market map', 'Salary benchmarks', 'Talent pipeline']
  },
  {
    step: '03',
    title: 'Sourcing & Assessment',
    description: 'Multi-channel sourcing combined with our proven assessment framework including technical, cultural, and motivational fit.',
    timeline: '2-3 weeks',
    deliverables: ['Candidate shortlist', 'Assessment reports', 'Interview guide']
  },
  {
    step: '04',
    title: 'Placement & Support',
    description: 'Present qualified candidates with detailed profiles and provide support through offers, negotiations, and onboarding.',
    timeline: '1-2 weeks',
    deliverables: ['Candidate presentations', 'Offer support', '90-day check-ins']
  }
];

export default function CompaniesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <PaintBrushEffect direction="left" delay={0.3}>
                <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6">
                  Scale Your SaaS Sales Team
                </h1>
              </PaintBrushEffect>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                Partner with ex-SaaS sales leaders who understand your challenges. 
                We don't just fill roles - we build championship teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Start Hiring</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/how-we-work/companies"
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  See How It Works
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="font-display font-bold text-2xl mb-6">Why Companies Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-white" />
                    <span>3-4 week average placement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-white" />
                    <span>95% candidate success rate</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-5 h-5 text-white" />
                    <span>6-month placement guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-white" />
                    <span>500+ successful placements</span>
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
              The Katapult Advantage
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're not just recruiters - we're former SaaS sales leaders who've walked in your shoes. 
              Here's what makes us different.
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
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-display font-bold text-2xl text-primary mb-2">
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
              Our Proven Process
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach that delivers results in 3-4 weeks, not months.
            </p>
          </div>

          <div className="space-y-12">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-white font-display font-bold">{step.step}</span>
                    </div>
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {step.timeline}
                    </div>
                  </div>
                  
                  <h3 className="font-display font-bold text-2xl text-secondary mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {step.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-secondary mb-3">Deliverables:</h4>
                    <div className="space-y-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl aspect-square flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-display font-bold text-primary">{step.step}</span>
                      </div>
                      <p className="font-medium">{step.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section>
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
              See how we've helped SaaS companies scale their sales teams and drive growth.
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
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t pt-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{testimonial.company}</p>
                  <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium">
                    Result: {testimonial.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary to-accent text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <h2 className="font-display font-bold text-3xl lg:text-5xl mb-6">
              Ready to Scale Your Team?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join 500+ companies that have successfully scaled their sales teams with Katapult. 
              Let's discuss your hiring needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Schedule a Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/cases"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
