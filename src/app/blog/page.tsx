'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User, Tag, TrendingUp } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import PaintBrushEffect from '@/components/animations/PaintBrushEffect';

const blogPosts = [
  {
    id: 1,
    title: 'The Ultimate Guide to SaaS Sales Hiring in 2024',
    excerpt: 'Everything you need to know about building a world-class SaaS sales team in today\'s competitive market.',
    author: 'Lisa van Dijk',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Hiring Strategy',
    featured: true,
    image: '/api/placeholder/600/400',
    tags: ['SaaS', 'Hiring', 'Sales Strategy']
  },
  {
    id: 2,
    title: 'Remote vs. In-Office: What Works Best for SaaS Sales Teams?',
    excerpt: 'Analyzing the pros and cons of different work arrangements for sales professionals and their impact on performance.',
    author: 'Marco Visser',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Remote Work',
    featured: false,
    image: '/api/placeholder/600/400',
    tags: ['Remote Work', 'Team Management', 'Productivity']
  },
  {
    id: 3,
    title: 'Salary Benchmarks: SaaS Sales Roles in the Netherlands 2024',
    excerpt: 'Comprehensive salary data and market insights for SaaS sales positions across the Netherlands.',
    author: 'Sarah Chen',
    date: '2024-01-05',
    readTime: '12 min read',
    category: 'Market Insights',
    featured: true,
    image: '/api/placeholder/600/400',
    tags: ['Salary', 'Market Data', 'Netherlands']
  },
  {
    id: 4,
    title: 'The Psychology of High-Performing Sales Teams',
    excerpt: 'Understanding what drives successful sales professionals and how to identify these traits during recruitment.',
    author: 'Tom de Boer',
    date: '2023-12-28',
    readTime: '10 min read',
    category: 'Psychology',
    featured: false,
    image: '/api/placeholder/600/400',
    tags: ['Psychology', 'Performance', 'Team Building']
  },
  {
    id: 5,
    title: 'AI and Automation in Sales: Threat or Opportunity?',
    excerpt: 'How artificial intelligence is reshaping the sales landscape and what it means for sales professionals.',
    author: 'Emma Rodriguez',
    date: '2023-12-20',
    readTime: '7 min read',
    category: 'Technology',
    featured: false,
    image: '/api/placeholder/600/400',
    tags: ['AI', 'Automation', 'Future of Sales']
  },
  {
    id: 6,
    title: 'Building Sales Culture in Early-Stage Startups',
    excerpt: 'Essential strategies for establishing a winning sales culture when your startup is just getting started.',
    author: 'David Park',
    date: '2023-12-15',
    readTime: '9 min read',
    category: 'Startup Culture',
    featured: false,
    image: '/api/placeholder/600/400',
    tags: ['Startups', 'Culture', 'Early Stage']
  }
];

const categories = ['All', 'Hiring Strategy', 'Market Insights', 'Remote Work', 'Psychology', 'Technology', 'Startup Culture'];

export default function BlogPage() {
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
              <PaintBrushEffect direction="top" delay={0.5}>
                <h1 className="font-display font-bold text-4xl lg:text-6xl mb-6">
                  Insights & Trends
                </h1>
              </PaintBrushEffect>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                Expert insights on SaaS sales recruitment, market trends, and team building strategies from our experienced consultants.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Weekly insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Expert authors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>5-10 min reads</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Featured Posts */}
      <Section>
        <Container>
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-12 text-center"
            >
              Featured Articles
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <TrendingUp className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Featured Article</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                    </div>
                    
                    <h3 className="font-display font-bold text-xl text-secondary mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-secondary">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.readTime}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* All Posts */}
      <Section background="gray">
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
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <Tag className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-xs">{post.category}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="font-display font-bold text-lg text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="text-primary font-medium">{post.author}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white text-center mt-16"
          >
            <h3 className="font-display font-bold text-2xl mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-200 mb-6 max-w-md mx-auto">
              Get the latest insights on SaaS sales recruitment delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
