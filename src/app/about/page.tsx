'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Heart, Award } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We don&apos;t just make promises - we deliver. Our &quot;Score in Four&quot; methodology ensures tangible outcomes for every client.',
  },
  {
    icon: Zap,
    title: 'Bold & Direct',
    description: 'We filter the bullsh*t and tell it like it is. No fluff, no corporate speak - just honest, direct communication.',
  },
  {
    icon: Heart,
    title: 'People-First',
    description: 'Whether client or candidate, people are at the heart of everything we do. We build lasting relationships, not just transactions.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We set the bar high and consistently exceed expectations. Quality over quantity, always.',
  },
];

const stats = [
  { number: '500+', label: 'Successful Placements' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '4', label: 'Average Interviews to Hire' },
  { number: '7 Days', label: 'Average Time to Match' },
];

const timeline = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'Founded by ex-SaaS sales professionals who saw the need for specialized recruitment in the Dutch market.',
  },
  {
    year: '2020',
    title: 'First 100 Placements',
    description: 'Achieved our first major milestone while refining our unique &quot;Score in Four&quot; methodology.',
  },
  {
    year: '2022',
    title: 'Amsterdam Expansion',
    description: 'Opened our Amsterdam office and expanded our team to serve the growing SaaS ecosystem.',
  },
  {
    year: '2024',
    title: 'Market Leader',
    description: 'Became the go-to SaaS sales recruitment agency in the Netherlands with 500+ successful placements.',
  },
  {
    year: '2025',
    title: 'European Growth',
    description: 'Expanding across Europe while maintaining our commitment to quality and results.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white relative overflow-hidden">
        <Container>
          <div className="text-center py-20 lg:py-28 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display font-bold text-4xl lg:text-6xl xl:text-7xl mb-8 tracking-tight">
                We&apos;re Not Just Recruiters
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                We&apos;re <span className="text-accent font-semibold">ex-SaaS-sellers</span> who understand 
                what it takes to succeed in sales. We score in four to katapult your growth.
              </p>
            </motion.div>
          </div>
        </Container>
        
        {/* Background decoration */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
      </Section>

      {/* Stats Section */}
      <Section>
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-bold text-4xl lg:text-5xl text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section background="gray">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-8">
                Our Mission
              </h2>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                To bridge the gap between exceptional SaaS sales talent and the companies 
                that need them most. We believe in quality over quantity, results over promises, 
                and building lasting partnerships over quick transactions.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-lg font-medium text-primary italic">
                  &quot;We don&apos;t just fill positions - we build sales teams that drive exponential growth.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Values Section */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              Our Values
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from client relationships to candidate placements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section background="navy">
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl mb-6"
            >
              Our Journey
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From startup to market leader - here&apos;s how we&apos;ve grown alongside the Dutch SaaS ecosystem.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-center mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-1/2 top-16 w-0.5 h-12 bg-primary/30 transform -translate-x-0.5" />
                )}
                
                <div className={`flex items-center w-full ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <h3 className="font-display font-bold text-xl text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="w-2/12 flex justify-center relative z-10">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <span className="font-display font-bold text-white">
                        {item.year.slice(-2)}
                      </span>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="w-5/12" />
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
              Ready to Katapult Your Growth?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you&apos;re looking to hire top sales talent or find your next career opportunity, 
              we&apos;re here to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Start Hiring
              </Link>
              <Link
                href="/jobs"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Find Jobs
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
