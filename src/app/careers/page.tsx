'use client';

import { motion } from 'framer-motion';
import { Heart, Zap, Users, Globe, Briefcase, MapPin, ArrowRight, CheckCircle, Coffee, Laptop, Plane } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import PaintBrushEffect from '@/components/animations/PaintBrushEffect';

const values = [
  {
    icon: Heart,
    title: 'People First',
    description: 'We believe great companies are built by great people. Every decision we make considers the human impact first.'
  },
  {
    icon: Zap,
    title: 'Move Fast',
    description: 'In the fast-paced world of SaaS, speed matters. We make decisions quickly and iterate based on results.'
  },
  {
    icon: Users,
    title: 'Win Together',
    description: 'Success is a team sport. We celebrate wins together and support each other through challenges.'
  },
  {
    icon: Globe,
    title: 'Think Global',
    description: 'We&apos;re building the future of European SaaS recruitment with a global mindset and local expertise.'
  }
];

const benefits = [
  {
    icon: Laptop,
    title: 'Remote-First Culture',
    description: 'Work from anywhere in Europe with quarterly team meetups in Amsterdam'
  },
  {
    icon: Coffee,
    title: 'Learning Budget',
    description: '€2,000 annual budget for courses, conferences, and professional development'
  },
  {
    icon: Plane,
    title: 'Unlimited PTO',
    description: 'Take the time you need to recharge and come back stronger'
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Premium health insurance, mental health support, and wellness stipend'
  }
];

const openRoles = [
  {
    title: 'Senior Recruitment Consultant',
    location: 'Amsterdam / Remote',
    type: 'Full-time',
    description: 'Join our core recruitment team and help scale-ups build world-class sales teams.',
    requirements: ['3+ years recruitment experience', 'SaaS/Tech background preferred', 'Fluent in Dutch & English'],
    salary: '€55k - €75k + commission'
  },
  {
    title: 'Business Development Manager',
    location: 'Rotterdam / Remote',
    type: 'Full-time', 
    description: 'Drive new business growth by building relationships with fast-growing SaaS companies.',
    requirements: ['5+ years B2B sales experience', 'SaaS industry knowledge', 'Hunter mentality'],
    salary: '€60k - €80k + commission'
  },
  {
    title: 'Marketing Manager',
    location: 'Amsterdam / Remote',
    type: 'Full-time',
    description: 'Lead our marketing efforts to build the Katapult brand across Europe.',
    requirements: ['3+ years B2B marketing', 'Content creation skills', 'Growth mindset'],
    salary: '€50k - €70k'
  }
];

const team = [
  {
    name: 'Lisa van Dijk',
    role: 'Founder & CEO',
    background: 'Former VP Sales at 3 SaaS unicorns',
    quote: 'Building the recruitment company I wished existed when I was scaling teams.'
  },
  {
    name: 'Marco Visser',
    role: 'Head of Recruitment',
    background: 'Ex-Head of Talent at Adyen',
    quote: 'Great companies are built by great people. We find the best.'
  },
  {
    name: 'Sarah Chen',
    role: 'VP Operations',
    background: 'Former McKinsey consultant',
    quote: 'Process and people - when you get both right, magic happens.'
  }
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white">
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
                  Work at Katapult
                </h1>
              </PaintBrushEffect>
              <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed">
                Join a team of ex-SaaS leaders building the future of European recruitment. 
                Remote-first, people-focused, and growing fast.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="font-display font-bold text-3xl mb-2">25+</div>
                  <div className="text-gray-300 text-sm">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-3xl mb-2">8</div>
                  <div className="text-gray-300 text-sm">Countries</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-3xl mb-2">€50M+</div>
                  <div className="text-gray-300 text-sm">Revenue Impact</div>
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-3xl mb-2">4.9★</div>
                  <div className="text-gray-300 text-sm">Glassdoor Rating</div>
                </div>
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
              These aren&apos;t just words on a wall - they guide every decision we make and every hire we bring on board.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl text-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              Why You&apos;ll Love It Here
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;ve designed our benefits package based on what we&apos;d want as employees ourselves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg text-secondary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200 p-8"
          >
            <h3 className="font-display font-bold text-2xl text-secondary mb-6 text-center">
              And Much More...
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Equity package for all employees',
                'Top-tier MacBook Pro + equipment',
                'Co-working space stipend',
                'Annual company retreat',
                'Flexible working hours',
                'Career mentorship program',
                'Team lunches & social events',
                'Sabbatical after 3 years',
                'Professional coaching budget'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Open Roles Section */}
      <Section>
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              Open Positions
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re growing fast and looking for exceptional people to join our mission.
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="font-display font-bold text-2xl text-secondary">
                        {role.title}
                      </h3>
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {role.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{role.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{role.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {role.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-secondary mb-3">Requirements:</h4>
                      <div className="space-y-2">
                        {role.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <a
                      href="mailto:careers@katapult.nl"
                      className="bg-accent hover:bg-accent/90 text-white py-4 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 mb-4"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <p className="text-sm text-gray-500 text-center">
                      Send your CV and cover letter
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Perfect Match */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-display font-bold text-xl text-secondary mb-4">
                Don&apos;t See the Perfect Role?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We&apos;re always interested in hearing from exceptional people. Send us your CV and 
                tell us what you&apos;re passionate about.
              </p>
              <a
                href="mailto:careers@katapult.nl"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              Meet the Leadership Team
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced leaders who&apos;ve built and scaled SaaS companies themselves.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl text-secondary mb-2">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.background}</p>
                <blockquote className="text-gray-700 italic">
                  &ldquo;{member.quote}&rdquo;
                </blockquote>
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
              Ready to Join the Team?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Help us build the future of European SaaS recruitment. Apply today or reach out 
              to learn more about upcoming opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@katapult.nl"
                className="bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Ask Questions
              </a>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
