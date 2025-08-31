'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, User, Building } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';

interface ContactForm {
  type: 'client' | 'candidate' | 'general';
  name: string;
  email: string;
  phone: string;
  company?: string;
  role?: string;
  message: string;
  budget?: string;
  timeline?: string;
}

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<'client' | 'candidate' | 'general'>('general');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    type: 'general',
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        type: activeForm,
        name: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 3000);
  };

  const updateFormData = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
                Let's Talk
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                Ready to katapult your growth? Whether you're hiring sales talent or 
                looking for your next opportunity, we're here to help.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display font-bold text-3xl text-secondary mb-8">
                  Get In Touch
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We respond to all inquiries within 24 hours. Choose the best way to reach us:
                </p>

                {/* Contact Methods */}
                <div className="space-y-6 mb-12">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Email</p>
                      <a href="mailto:hello@katapult.nl" className="text-gray-600 hover:text-primary transition-colors">
                        hello@katapult.nl
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Phone</p>
                      <a href="tel:+31201234567" className="text-gray-600 hover:text-primary transition-colors">
                        +31 (0)20 123 4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Office</p>
                      <p className="text-gray-600">
                        Herengracht 182<br />
                        1016 BR Amsterdam<br />
                        Netherlands
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">Office Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 - 18:00<br />
                        Weekend: By appointment
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-secondary">
                    Quick Contact
                  </h3>
                  <div className="flex flex-col space-y-3">
                    <a
                      href="mailto:clients@katapult.nl"
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Building className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-secondary">For Companies</p>
                        <p className="text-sm text-gray-600">clients@katapult.nl</p>
                      </div>
                    </a>
                    <a
                      href="mailto:candidates@katapult.nl"
                      className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <User className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-secondary">For Candidates</p>
                        <p className="text-sm text-gray-600">candidates@katapult.nl</p>
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
              >
                {!isSubmitted ? (
                  <>
                    {/* Form Type Selector */}
                    <div className="mb-8">
                      <h3 className="font-display font-bold text-2xl text-secondary mb-4">
                        Send us a Message
                      </h3>
                      <div className="grid grid-cols-3 gap-2 p-1 bg-gray-100 rounded-lg">
                        {[
                          { id: 'client', label: 'Hiring', icon: Building },
                          { id: 'candidate', label: 'Job Seeker', icon: User },
                          { id: 'general', label: 'General', icon: Mail }
                        ].map(({ id, label, icon: Icon }) => (
                          <button
                            key={id}
                            onClick={() => {
                              setActiveForm(id as typeof activeForm);
                              updateFormData('type', id as typeof activeForm);
                            }}
                            className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-colors ${
                              activeForm === id
                                ? 'bg-primary text-white'
                                : 'text-gray-600 hover:text-secondary'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span className="hidden sm:inline">{label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Basic Info */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => updateFormData('name', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => updateFormData('email', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => updateFormData('phone', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {activeForm === 'client' ? 'Company' : activeForm === 'candidate' ? 'Current Role' : 'Organization'}
                          </label>
                          <input
                            type="text"
                            value={activeForm === 'candidate' ? formData.role : formData.company}
                            onChange={(e) => updateFormData(activeForm === 'candidate' ? 'role' : 'company', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                      </div>

                      {/* Conditional Fields */}
                      {activeForm === 'client' && (
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Budget Range
                            </label>
                            <select
                              value={formData.budget}
                              onChange={(e) => updateFormData('budget', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                              <option value="">Select budget</option>
                              <option value="€5k-€10k">€5k - €10k</option>
                              <option value="€10k-€25k">€10k - €25k</option>
                              <option value="€25k-€50k">€25k - €50k</option>
                              <option value="€50k+">€50k+</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Timeline
                            </label>
                            <select
                              value={formData.timeline}
                              onChange={(e) => updateFormData('timeline', e.target.value)}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                              <option value="">Select timeline</option>
                              <option value="ASAP">ASAP</option>
                              <option value="1-2 weeks">1-2 weeks</option>
                              <option value="1 month">1 month</option>
                              <option value="2-3 months">2-3 months</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => updateFormData('message', e.target.value)}
                          placeholder={
                            activeForm === 'client' 
                              ? 'Tell us about the role you need to fill, ideal candidate profile, and any specific requirements...'
                              : activeForm === 'candidate'
                              ? 'Tell us about your career goals, experience, and what type of role you\'re looking for...'
                              : 'How can we help you?'
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  /* Success State */
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-secondary mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <div className="w-8 h-1 bg-primary rounded-full mx-auto animate-pulse" />
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl lg:text-4xl text-secondary mb-6"
            >
              Visit Our Office
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Amsterdam, we're always happy to meet in person.
            </p>
          </div>
          
          {/* Placeholder for Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">
                Interactive map would be embedded here
              </p>
              <p className="text-gray-500 text-sm">
                Herengracht 182, 1016 BR Amsterdam
              </p>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
