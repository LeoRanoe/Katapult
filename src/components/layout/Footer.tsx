import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import Container from './Container';

const navigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'How We Work', href: '/how-we-work/companies' },
    { name: 'Case Studies', href: '/cases' },
  ],
  candidates: [
    { name: 'Job Openings', href: '/jobs' },
    { name: 'How We Work', href: '/how-we-work/candidates' },
    { name: 'Career Resources', href: '/resources' },
    { name: 'Work at Katapult', href: '/careers' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Industry Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/katapult', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/katapult', icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <Container>
        <div className="py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-display font-bold text-xl">K</span>
                </div>
                <span className="font-display font-bold text-2xl">
                  Katapult
                </span>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                We&apos;re not just recruiters; we&apos;re ex-SaaS-sellers. 
                We score in four to katapult your growth.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hello@katapult.nl</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+31 (0)20 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Amsterdam, Netherlands</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="font-display font-semibold text-lg mb-4">For Companies</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold text-lg mb-4">For Candidates</h3>
              <ul className="space-y-3">
                {navigation.candidates.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-secondary/50 rounded-2xl p-8 mb-12">
            <div className="max-w-md">
              <h3 className="font-display font-bold text-xl mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest SaaS jobs and industry insights delivered to your inbox.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-r-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Katapult. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
