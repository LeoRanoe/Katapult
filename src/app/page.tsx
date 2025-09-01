'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Star } from 'lucide-react';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import TypewriterText from '@/components/animations/TypewriterText';
import FunnelOption from '@/components/sections/FunnelOption';
import GlowingButton from '@/components/animations/GlowingButton';
import EnhancedButton from '@/components/animations/EnhancedButton';
import FloatingCard from '@/components/animations/FloatingCard';
import Card3D from '@/components/ui/Card3D';
import GlassmorphismCard from '@/components/ui/GlassmorphismCard';
import ScrollParallax from '@/components/animations/ScrollParallax';

import GradientBlur from '@/components/animations/GradientBlur';
import FloatingGeometry from '@/components/effects/FloatingGeometry';
import InteractiveParticles from '@/components/effects/InteractiveParticles';
import DramaticText from '@/components/typography/DramaticText';
import { OverlappingText } from '@/components/typography/DramaticText';
import PaintBrushTransition from '@/components/effects/PaintBrushTransition';
import CustomCursor from '@/components/effects/CustomCursor';
import AnimatedChart, { AnimatedCounter } from '@/components/animations/AnimatedChart';


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
  // Paint brush transition hook removed as it's not currently used

  return (
    <>
      <CustomCursor />
      {/* Hero Section */}
      <Section className="bg-secondary text-white overflow-hidden relative min-h-screen">
        <PaintBrushTransition 
          direction="diagonal"
          color="#BFFF00"
          isVisible={false}
        />
        {/* Interactive Background Effects - Contained and properly layered */}
        <div className="absolute inset-0 z-0">
          <FloatingGeometry />
          <InteractiveParticles />
        </div>
        {/* Gradient Blur Effects - Positioned to avoid text overlap */}
        <GradientBlur className="top-32 left-10" variant="primary" size="lg" opacity={0.1} />
        <GradientBlur className="bottom-32 right-10" variant="primary" size="md" opacity={0.15} />
        
        <Container>
          <div className="py-24 lg:py-40 text-center relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <DramaticText 
                  variant="hero"
                  className="font-display font-bold text-4xl lg:text-7xl mb-4 drop-shadow-lg text-primary"
                >
                  We Score in Four
                </DramaticText>
                <div className="mb-4">
                  <OverlappingText 
                    frontText="katapult" 
                    backText="GROWTH"
                    className="text-2xl lg:text-4xl"
                  />
                </div>
                <h2 className="font-display font-semibold text-xl lg:text-3xl mb-8 leading-tight text-white/90 drop-shadow-md">
                  <TypewriterText phrases={heroPhases} />
                </h2>
                <ScrollParallax speed={0.3} direction="up">
                  <GlassmorphismCard className="inline-block">
                    <div className="text-primary px-6 py-2 text-lg font-semibold">
                      Maximum 4 candidates per role - Quality over quantity
                    </div>
                  </GlassmorphismCard>
                </ScrollParallax>
              </div>
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-4xl mx-auto border border-primary/20">
                <p className="text-xl lg:text-2xl text-white/95 leading-relaxed drop-shadow-sm">
                  We&apos;re ex-SaaS-sellers who understand your world. Our &ldquo;Score in Four&rdquo; methodology delivers 
                  the right hire in 4 interviews or less - no cure, no pay guarantee.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <EnhancedButton href="/contact" size="lg" glowing pulse>
                  Book a Call Now
                </EnhancedButton>
                <EnhancedButton 
                  onClick={() => window.open('https://wa.me/31612345678?text=Hi%20Katapult%2C%20I%27m%20interested%20in%20your%20SaaS%20recruitment%20services', '_blank')}
                  variant="ghost" 
                  size="lg"
                  className="bg-green-500 text-white border-green-500 hover:bg-green-600"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.448"/>
                  </svg>
                  Send WhatsApp Message
                </EnhancedButton>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Dual Funnel Section */}
      <Section className="bg-secondary text-white">
        <Container>
          <div className="py-16 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <DramaticText 
                variant="section"
                className="font-display font-bold text-3xl lg:text-5xl text-primary mb-6"
              >
                Choose Your Path
              </DramaticText>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Whether you&apos;re scaling your sales team or advancing your career, we have the expertise to guide you.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <ScrollParallax speed={0.2} direction="left">
                <GlassmorphismCard className="h-full">
                  <FunnelOption
                    title="Hiring Sales Talent?"
                    subtitle="Find your next sales superstar with our proven 4-step process"
                    cta="Get Started"
                    href="/how-we-work/companies"
                    icon="briefcase"
                    color="orange"
                    delay={0.2}
                  />
                </GlassmorphismCard>
              </ScrollParallax>
              <ScrollParallax speed={0.2} direction="right">
                <GlassmorphismCard className="h-full">
                  <FunnelOption
                    title="Looking for Your Next Role?"
                    subtitle="Discover amazing SaaS opportunities that match your ambition"
                    cta="Browse Jobs"
                    href="/jobs"
                    icon="search"
                    color="blue"
                    delay={0.4}
                  />
                </GlassmorphismCard>
              </ScrollParallax>
            </div>
          </div>
        </Container>
      </Section>

      {/* Score in Four Methodology Section */}
      <Section className="bg-secondary/95 text-white">
        <Container>
          <div className="py-16 lg:py-24">
            <div className="text-center mb-16">
              <DramaticText 
                variant="section"
                className="font-display font-bold text-3xl lg:text-5xl text-primary mb-6"
              >
                Score in Four Methodology
              </DramaticText>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
                Why waste time with 20+ candidates when the right hire is in the first 4? 
                As ex-SaaS sellers, we know exactly what works.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <OverlappingText 
                  frontText="TRADITIONAL" 
                  backText="VS KATAPULT"
                  className="font-display font-bold text-xl text-secondary mb-6"
                />
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      ✗
                    </div>
                    <div>
                      <span className="font-semibold text-white/60">Others:</span> Send 20+ CVs hoping something sticks
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <span className="font-semibold text-primary">katapult:</span> Maximum 4 hand-picked candidates who fit
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      ✗
                    </div>
                    <div>
                      <span className="font-semibold text-white/60">Others:</span> Generic recruitment approach
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <span className="font-semibold text-primary">katapult:</span> Ex-SaaS sellers who speak your language
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
                <h4 className="font-display font-bold text-xl text-primary mb-4">
                  Our Guarantee
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>No cure, no pay contract</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Maximum 4 candidates per role</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>24-hour response guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Exclusive talent pool access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Metrics Section - "We Score in Four" */}
      <Section className="bg-secondary text-white">
        <Container>
          <div className="text-center mb-16 relative z-10">
            <DramaticText 
              variant="section"
              className="font-display font-bold text-3xl lg:text-4xl mb-6 text-enhanced-visibility text-primary"
            >
              Proven Results
            </DramaticText>
            <p className="text-xl text-white/80 max-w-2xl mx-auto text-enhanced-visibility">
              Our &ldquo;Score in Four&rdquo; methodology delivers results that matter - every single time.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative z-10">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <motion.div 
                  className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 relative overflow-hidden"
                  whileHover={{ scale: 1.1, rotateY: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <metric.icon className="w-8 h-8 text-primary relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <div className="font-display font-bold text-3xl lg:text-4xl text-white mb-2 text-enhanced-visibility">
                  <AnimatedCounter 
                    value={parseInt(metric.value.replace(/\D/g, '') || '0')} 
                    suffix={metric.value.replace(/\d/g, '')} 
                    className="text-3xl lg:text-4xl"
                  />
                </div>
                <div className="text-white/70 font-medium text-enhanced-visibility">
                  {metric.label}
                </div>
                {/* Floating particles around metrics */}
                <motion.div
                  className="absolute -top-2 -right-2 w-2 h-2 bg-primary rounded-full"
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 2 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Enhanced data visualization */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-primary/20"
            >
              <h3 className="font-display font-bold text-xl text-white mb-6 text-center">
                Success Rate Breakdown
              </h3>
              <AnimatedChart
                type="bar"
                data={[
                  { label: "First Interview Success", value: 85, color: "#BFFF00" },
                  { label: "Final Round Success", value: 95, color: "#9AE600" },
                  { label: "Offer Acceptance", value: 90, color: "#7ACC00" },
                  { label: "90-Day Retention", value: 98, color: "#5C9900" }
                ]}
                className="max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Featured Jobs */}
      <Section className="bg-secondary/90 text-white">
        <Container>
          <div className="text-center mb-16">
            <DramaticText 
              variant="section"
              className="font-display font-bold text-3xl lg:text-4xl text-primary mb-6"
            >
              Featured Opportunities
            </DramaticText>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
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
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-primary/20 p-6 hover:shadow-lg transition-shadow group cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </div>
                    <Star className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {job.title}
                  </h3>
                  <p className="text-white/70 mb-4">{job.company} • {job.location}</p>
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

      {/* Real Client Success Stories */}
      <Section className="bg-secondary text-white">
        <Container>
          <div className="text-center mb-16">
            <DramaticText 
              variant="section"
              className="font-display font-bold text-3xl lg:text-4xl text-primary mb-6"
            >
              Real Results from Real SaaS Companies
            </DramaticText>
            <div className="mb-6">
              <OverlappingText 
                frontText="SUCCESS" 
                backText="STORIES"
                className="text-lg lg:text-xl opacity-60"
              />
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s how our &ldquo;Score in Four&rdquo; methodology has delivered 
              exceptional results for leading SaaS companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              // Enhanced testimonials with 3D card effects
              {
                quote: "Katapult found our Head of Customer Success within 3 weeks. Their &lsquo;Score in Four&rsquo; approach delivered exactly what they promised - quality candidates, not quantity.",
                company: "Leading HR Tech SaaS",
                role: "VP of Sales",
                result: "Hired in 3 weeks",
                background: "After 6 months of failed searches with other agencies"
              },
              {
                quote: "We used 6 recruitment agencies without any result. Katapult found our SDR within weeks where others failed for months. Game changer.",
                company: "Fast-Growing Fintech", 
                role: "Head of Revenue",
                result: "Hired in 2 weeks",
                background: "Previous agencies sent 50+ irrelevant CVs"
              },
              {
                quote: "Katapult hired 3 German-speaking Account Executives in four weeks. Incredible speed and quality - they truly understand SaaS sales.",
                company: "Series B Data Platform",
                role: "Country Manager DACH",
                result: "3 hires in 4 weeks",
                background: "Expanding into German market"
              }
            ].map((testimonial, index) => (
              <Card3D
                key={index}
                className="h-80"
                flipOnHover={true}
                glowEffect={true}
                intensity={1.2}
                backContent={
                  <div className="p-8 h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-4">
                        {testimonial.result}
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">Time to hire: {testimonial.result}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">Quality candidates: 4 max</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">Success rate: 95%+</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">Client satisfaction: 100%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="mb-6 flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold">
                        {testimonial.result}
                      </div>
                      <div className="text-xs text-white/50">
                        {testimonial.background}
                      </div>
                    </div>
                    <blockquote className="text-white/90 text-lg leading-relaxed italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                  </div>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-primary">{testimonial.role}</div>
                    <div className="text-white/70">{testimonial.company}</div>
                  </div>
                  <div className="text-center mt-4 text-sm text-white/50">
                    Hover to see impact metrics →
                  </div>
                </div>
              </Card3D>
            ))}
          </div>

          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/10 rounded-2xl p-8 max-w-3xl mx-auto border border-primary/20"
            >
              <h3 className="font-display font-bold text-2xl text-primary mb-4">
                Ready to Experience the &ldquo;Score in Four&rdquo; Difference?
              </h3>
              <p className="text-white/80 mb-6 text-lg">
                Join the SaaS companies who&apos;ve discovered that quality beats quantity. 
                Get your next sales hire in 4 interviews or less - guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlowingButton href="/contact" size="lg">
                  Book Your Free Consultation
                </GlowingButton>
                <motion.a
                  href="https://wa.me/31612345678?text=Hi%20katapult%2C%20I%27d%20like%20to%20learn%20about%20your%20Score%20in%20Four%20methodology"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-2xl hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.448"/>
                  </svg>
                  Quick WhatsApp Chat
                </motion.a>
              </div>
              <p className="text-sm text-white/60 mt-4">
                ✓ 24-hour response guarantee ✓ No cure, no pay ✓ Maximum 4 candidates per role
              </p>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="font-display font-bold text-xl lg:text-2xl text-white/50 hover:text-primary transition-colors"
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
