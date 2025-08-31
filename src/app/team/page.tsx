'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Users, Globe, MessageCircle } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { teamMembers, companyStats, openPositions } from '@/data/mockTeam';

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-secondary to-secondary/90 text-white">
        <Container>
          <div className="text-center py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6">
                Meet the Team
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                We're not just recruiters - we're <span className="text-primary font-semibold">former sales professionals</span> who 
                understand what it takes to succeed in SaaS sales.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Company Stats */}
      <Section>
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-bold text-3xl lg:text-4xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Members */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              Our People
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each team member brings unique experience from the SaaS world, ensuring we understand 
              both sides of the recruitment equation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="text-white font-display font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                {/* Info */}
                <h3 className="font-display font-bold text-xl text-secondary mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Contact */}
                <div className="flex justify-center space-x-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Culture Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6">
                Our Culture
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We believe in creating an environment where everyone can thrive. 
                Remote-first, results-focused, and always learning.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-secondary mb-3">
                  Remote-First
                </h3>
                <p className="text-gray-600">
                  Work from anywhere in Europe. We believe great work happens when people have flexibility.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-secondary mb-3">
                  Collaborative
                </h3>
                <p className="text-gray-600">
                  We win together. Knowledge sharing, peer support, and collective success drive everything we do.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl text-secondary mb-3">
                  Transparent
                </h3>
                <p className="text-gray-600">
                  Open communication, honest feedback, and no corporate politics. Just real people doing great work.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Open Positions */}
      <Section background="navy">
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl mb-6"
            >
              Join Our Team
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to help shape the future of SaaS recruitment? We're always looking for talented people to join our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {position.type}
                  </div>
                  <MapPin className="w-4 h-4 text-gray-400" />
                </div>
                
                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-primary transition-colors">
                  {position.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {position.department} • {position.location}
                </p>
                <p className="text-gray-400 text-sm">
                  {position.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-300 mb-6">
              Don't see the right role? We're always interested in hearing from exceptional people.
            </p>
            <a
              href="mailto:careers@katapult.nl"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
