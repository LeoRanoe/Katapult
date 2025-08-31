'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Star } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import AnimatedText from '@/components/animations/AnimatedText';
import FunnelOption from '@/components/sections/FunnelOption';
import GlowingButton from '@/components/animations/GlowingButton';
import FloatingCard from '@/components/animations/FloatingCard';
import CountUpAnimation from '@/components/animations/CountUpAnimation';

import GradientBlur from '@/components/animations/GradientBlur';


const heroPhases = [
  "Your next sales hire in 4 interviews",
  "Meet your next hire within 7 business days", 
  "Your new job within two weeks",
  "We score in four to katapult your growth"
];

const metrics = [
  { icon: Users, value: "500+", label: "Successful Placements" },
  { icon: Clock, value: "4", label: "Average Interviews to Hire" },
  { icon: TrendingUp, value: "95%", label: "Client Satisfaction" },
  { icon: Star, value: "7 Days", label: "Average Time to Match" },
];

const featuredJobs = [
  {
    id: 1,
    title: "Senior Sales Manager",
    company: "TechFlow",
    location: "Amsterdam",
    salary: "€80k - €120k",
    type: "Full-time",
    featured: true,
  },
  {
    id: 2,
    title: "Business Development Rep",
    company: "SaaS Dynamics",
    location: "Remote",
    salary: "€45k - €65k", 
    type: "Full-time",
    featured: true,
  },
  {
    id: 3,
    title: "VP of Sales",
    company: "CloudVenture",
    location: "Amsterdam",
    salary: "€150k - €200k",
    type: "Full-time", 
    featured: true,
  },
];

const clientLogos = [
  "TechFlow", "SaaS Dynamics", "CloudVenture", "DataPilot", "ScaleUp"
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white overflow-hidden relative">
        {/* Gradient Blur Effects */}
        <GradientBlur className="top-10 left-10" variant="primary" size="lg" opacity={0.2} />
        <GradientBlur className="bottom-20 right-10" variant="accent" size="md" opacity={0.3} />
        
        <Container>
          <div className="py-20 lg:py-32 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display font-bold text-4xl lg:text-7xl mb-8 leading-tight">
                <AnimatedText phrases={heroPhases} />
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                We&apos;re not just recruiters; we&apos;re ex-SaaS-sellers who understand your world. 
                Partner with us to build championship sales teams that drive real growth.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Dual Funnel Section */}
      <Section>
        <Container>
          <div className="py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display font-bold text-3xl lg:text-5xl text-secondary mb-6">
                Choose Your Path
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Whether you&apos;re scaling your sales team or advancing your career, we have the expertise to guide you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <FloatingCard>
                <FunnelOption
                  title="Hiring Sales Talent?"
                  subtitle="Find your next sales superstar with our proven 4-step process"
                  cta="Get Started"
                  href="/how-we-work/companies"
                  icon="briefcase"
                  color="orange"
                  delay={0.2}
                />
              </FloatingCard>
              <FloatingCard>
                <FunnelOption
                  title="Looking for Your Next Role?"
                  subtitle="Discover amazing SaaS opportunities that match your ambition"
                  cta="Browse Jobs"
                  href="/jobs"
                  icon="search"
                  color="blue"
                  delay={0.4}
                />
              </FloatingCard>
            </div>
          </div>
        </Container>
      </Section>

      {/* Metrics Section - "We Score in Four" */}
      <Section background="navy">
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl mb-6"
            >
              We Score in Four
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our proven track record speaks for itself. Here&apos;s how we deliver results that matter.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-display font-bold text-3xl lg:text-4xl text-white mb-2">
                  <CountUpAnimation value={parseInt(metric.value.replace(/\D/g, '') || '0')} suffix={metric.value.replace(/\d/g, '')} />
                </div>
                <div className="text-gray-300 font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Jobs */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              Featured Opportunities
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover your next career move with these handpicked SaaS sales positions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredJobs.map((job, index) => (
              <FloatingCard key={job.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </div>
                    <Star className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-secondary mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{job.company} • {job.location}</p>
                  <div className="font-semibold text-primary text-lg">
                    {job.salary}
                  </div>
                </motion.div>
              </FloatingCard>
            ))}
          </div>

          <div className="text-center">
            <GlowingButton href="/jobs" size="lg">
              View All Jobs
            </GlowingButton>
          </div>
        </Container>
      </Section>

      {/* Social Proof */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-2xl lg:text-3xl text-secondary mb-6"
            >
              Trusted by Leading SaaS Companies
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join the companies that have already transformed their sales teams with Katapult.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="font-display font-bold text-xl lg:text-2xl text-gray-500 hover:text-primary transition-colors"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
