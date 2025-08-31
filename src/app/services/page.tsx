'use client';

import { motion } from 'framer-motion';
import { Users, Target, TrendingUp, Shield, Clock, Award, CheckCircle, ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import PaintBrushEffect from '@/components/animations/PaintBrushEffect';

const services = [
  {
    icon: Users,
    title: 'Executive Search',
    description: 'C-level and VP positions with guaranteed results',
    features: ['Market mapping', 'Executive assessment', '90-day guarantee'],
    price: 'From €25k',
    popular: false
  },
  {
    icon: Target,
    title: 'Sales Recruitment',
    description: 'End-to-end sales talent acquisition',
    features: ['Full-cycle recruitment', 'Cultural fit assessment', '6-month replacement guarantee'],
    price: 'From €8k',
    popular: true
  },
  {
    icon: TrendingUp,
    title: 'Team Scaling',
    description: 'Rapid team expansion for growing SaaS companies',
    features: ['Bulk hiring discounts', 'Dedicated team', 'Process optimization'],
    price: 'Custom pricing',
    popular: false
  },
  {
    icon: Shield,
    title: 'Retained Search',
    description: 'Exclusive partnerships for ongoing hiring needs',
    features: ['Priority access', 'Dedicated consultant', 'Quarterly reviews'],
    price: 'Retainer model',
    popular: false
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your company culture, role requirements, and ideal candidate profile.',
    duration: '1-2 days'
  },
  {
    step: '02',
    title: 'Market Research',
    description: 'Comprehensive market mapping and competitor analysis to identify top talent.',
    duration: '3-5 days'
  },
  {
    step: '03',
    title: 'Sourcing & Screening',
    description: 'Multi-channel sourcing with rigorous screening and assessment processes.',
    duration: '2-3 weeks'
  },
  {
    step: '04',
    title: 'Presentation & Placement',
    description: 'Present qualified candidates with detailed profiles and support through offers.',
    duration: '1-2 weeks'
  }
];

const guarantees = [
  'Replacement guarantee if hire leaves within 6 months',
  'Average time-to-hire: 3-4 weeks',
  'Candidate satisfaction rate: 95%+',
  'Client retention rate: 90%+',
  '24/7 support during active searches'
];

export default function ServicesPage() {
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
              <PaintBrushEffect direction="left" delay={0.5}>
                <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6">
                  Our Services
                </h1>
              </PaintBrushEffect>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                Comprehensive SaaS sales recruitment solutions tailored to your growth stage and hiring needs.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>3-4 week avg placement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>95% satisfaction rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>6-month guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Services Grid */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              Choose Your Service
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From individual placements to complete team scaling, we have the right solution for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl border-2 p-8 hover:shadow-lg transition-all duration-300 ${
                  service.popular 
                    ? 'border-primary shadow-lg transform -translate-y-2' 
                    : 'border-gray-200 hover:border-primary/50'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-display font-bold text-xl text-secondary mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-6">
                  <p className="font-bold text-lg text-secondary mb-4">{service.price}</p>
                  <a
                    href="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                      service.popular
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'bg-gray-100 text-secondary hover:bg-gray-200'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
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
              Our 4-Step Process
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers results within 3-4 weeks.
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
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-display font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-secondary mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <span className="inline-flex items-center text-sm text-primary font-medium">
                  <Clock className="w-4 h-4 mr-2" />
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Guarantees Section */}
      <Section>
        <Container>
          <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl lg:text-4xl mb-8">
                Our Guarantees
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-left">{guarantee}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Start Your Search
                </a>
                <a
                  href="/how-we-work/companies"
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
