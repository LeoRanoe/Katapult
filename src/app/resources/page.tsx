'use client';

import { motion } from 'framer-motion';
import { BookOpen, Download, Play, FileText, TrendingUp, Users, Target, Clock, ExternalLink } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import PaintBrushEffect from '@/components/animations/PaintBrushEffect';

const resources = [
  {
    id: 1,
    type: 'Guide',
    title: 'The Complete SaaS Sales Interview Guide',
    description: 'Everything you need to know to ace your SaaS sales interviews, from preparation to negotiation.',
    icon: BookOpen,
    downloadCount: '2.3k',
    category: 'Career Development',
    format: 'PDF',
    pages: '24 pages'
  },
  {
    id: 2,
    type: 'Template',
    title: 'Sales Resume Template for SaaS Professionals',
    description: 'Proven resume template that gets you noticed by top SaaS companies.',
    icon: FileText,
    downloadCount: '1.8k',
    category: 'Career Development',
    format: 'DOCX',
    pages: '2 templates'
  },
  {
    id: 3,
    type: 'Webinar',
    title: 'Scaling Sales Teams: Lessons from 50+ SaaS Companies',
    description: 'Key insights from successful SaaS scale-ups on building high-performing sales teams.',
    icon: Play,
    downloadCount: '950',
    category: 'Team Building',
    format: 'Video',
    pages: '45 min'
  },
  {
    id: 4,
    type: 'Report',
    title: 'SaaS Sales Salary Report 2024',
    description: 'Comprehensive salary benchmarks for SaaS sales roles across Europe.',
    icon: TrendingUp,
    downloadCount: '3.1k',
    category: 'Market Insights',
    format: 'PDF',
    pages: '18 pages'
  },
  {
    id: 5,
    type: 'Checklist',
    title: 'Sales Hiring Checklist for Managers',
    description: 'Step-by-step checklist to ensure you hire the right sales talent every time.',
    icon: Target,
    downloadCount: '1.2k',
    category: 'Hiring',
    format: 'PDF',
    pages: '6 pages'
  },
  {
    id: 6,
    type: 'Template',
    title: 'Sales Onboarding Plan Template',
    description: 'Comprehensive 90-day onboarding plan to get new sales hires up to speed fast.',
    icon: Users,
    downloadCount: '800',
    category: 'Onboarding',
    format: 'DOCX',
    pages: '12 pages'
  }
];

const categories = ['All', 'Career Development', 'Market Insights', 'Team Building', 'Hiring', 'Onboarding'];

const webinars = [
  {
    title: 'The Future of SaaS Sales: Trends for 2024',
    date: 'March 15, 2024',
    speaker: 'Lisa van Dijk, Head of Recruitment',
    attendees: '450+',
    duration: '60 min',
    status: 'upcoming'
  },
  {
    title: 'Building High-Converting Sales Funnels',
    date: 'February 28, 2024',
    speaker: 'Marco Visser, Sales Strategy Expert',
    attendees: '320',
    duration: '45 min',
    status: 'available'
  },
  {
    title: 'Remote Sales Team Management',
    date: 'February 14, 2024',
    speaker: 'Sarah Chen, VP Operations',
    attendees: '280',
    duration: '50 min',
    status: 'available'
  }
];

export default function ResourcesPage() {
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
              <PaintBrushEffect direction="bottom" delay={0.5}>
                <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6">
                  Career Resources
                </h1>
              </PaintBrushEffect>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                Free resources to accelerate your SaaS sales career. Templates, guides, and insights 
                from industry experts.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>8,000+ downloads</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Free for candidates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Expert created</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Resources Grid */}
      <Section>
        <Container>
          {/* Categories Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <resource.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {resource.type}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-display font-bold text-xl text-secondary mb-3 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Format</span>
                    <span className="font-medium text-secondary">{resource.format}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Length</span>
                    <span className="font-medium text-secondary">{resource.pages}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Downloads</span>
                    <span className="font-medium text-primary">{resource.downloadCount}</span>
                  </div>
                </div>
                
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download Free</span>
                </button>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Webinars Section */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              Webinars & Events
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our expert-led webinars and learn from industry leaders about SaaS sales trends and strategies.
            </p>
          </div>

          <div className="space-y-6">
            {webinars.map((webinar, index) => (
              <motion.div
                key={webinar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-3">
                      <Play className="w-6 h-6 text-primary" />
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        webinar.status === 'upcoming' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {webinar.status === 'upcoming' ? 'Upcoming' : 'Available Now'}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-secondary mb-2">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {webinar.speaker}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{webinar.attendees} attendees</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Play className="w-4 h-4" />
                      <span>{webinar.duration}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <button className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 w-full lg:w-auto ${
                      webinar.status === 'upcoming'
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}>
                      {webinar.status === 'upcoming' ? (
                        <>
                          <span>Register</span>
                          <ExternalLink className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>Watch Now</span>
                          <Play className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Newsletter Section */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white text-center"
          >
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-6">
              Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get exclusive access to new resources, market insights, and career opportunities 
              delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-300">
              Join 5,000+ sales professionals. Unsubscribe anytime.
            </p>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
