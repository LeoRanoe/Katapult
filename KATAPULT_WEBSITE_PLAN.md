# Katapult Website Redesign - Comprehensive Planning Document

## 🎯 Executive Summary

**Project**: Complete redesign of Katapult recruitment agency website
**Timeline**: 2 months
**Domain Migration**: katapult.amsterdam → katapult.nl
**Target**: Convert more SaaS sales leaders as clients while improving candidate experience
**Technology Stack**: WordPress (Headless CMS) + Modern Frontend + Loxo Integration

---

## 📊 Current State Analysis

### Issues with Current Website (katapult.amsterdam)
- **Conversion Problem**: Not converting enough leads from ideal customer profile
- **Poor Job Page**: No filtering, no CRM integration, outdated design
- **Limited Content**: Insufficient pages for SEO and brand building
- **Technology Constraint**: Built in Webflow, needs headless CMS flexibility
- **Domain**: Using .amsterdam instead of more professional .nl

### Competitor Analysis Summary
- **Bluebird Recruitment**: "The only Recruitment Agency without Recruiters" - unique positioning
- **Owlie Jobs**: Clean case studies presentation, clear client/candidate separation
- **DRIIVN**: Excellent use of animations, dynamic content, bold visuals

---

## 🚀 Strategic Objectives

### Primary Goals
1. **Generate More Client Leads**: Focus on SaaS sales leaders
2. **Improve Candidate Experience**: Better journey and job discovery
3. **Brand Positioning**: Modern, professional, young, bold recruitment partner
4. **Funnel Creation**: Separate experiences for clients vs candidates

### Brand Characteristics to Emphasize
- **Bold**: "Filter the bullsh*t" messaging style
- **Promise-driven**: "We score in four" type commitments
- **Bold Colors**: Vibrant, attention-grabbing color palette
- **Professional yet Young**: Balance authority with approachability

---

## 👥 Target Audience Analysis

### Primary Audience: Sales Leaders in SaaS (Clients)
- **Demographics**: 30-50 years, C-level/VP-level, tech-savvy
- **Pain Points**: Hard to find quality sales talent, time-consuming hiring
- **Goals**: Quick, quality hires with proven SaaS experience
- **Preferred Content**: Case studies, success metrics, process transparency

### Secondary Audience: Job Seekers (Candidates)
- **Demographics**: 21-35 years, sales experience, career-focused
- **Pain Points**: Finding quality SaaS opportunities, career progression
- **Goals**: Next career move, salary growth, company culture fit
- **Preferred Content**: Job listings, company insights, career advice

---

## 🔄 User Journey Mapping

### Client Journey (Sales Leaders)
1. **Awareness**: Land on homepage → See "For Companies" section
2. **Interest**: Browse services → View case studies → Check success metrics
3. **Consideration**: Read "How We Work - Company" → View team
4. **Decision**: Contact form → Schedule call → Become client

### Candidate Journey (Job Seekers)
1. **Discovery**: Job search → Land on jobs page or homepage "For Candidates"
2. **Exploration**: Filter jobs → View job details → Learn about company culture
3. **Application**: Apply to specific role → Subscribe to job alerts
4. **Engagement**: Receive updates → Interview process → Placement

---

## 🏗️ Technical Architecture

### Frontend Technology Stack
- **Framework**: Next.js 14+ (React-based, SEO-optimized)
- **Styling**: Tailwind CSS + Custom CSS for animations
- **Animations**: Framer Motion + CSS animations
- **State Management**: Zustand or React Context
- **Forms**: React Hook Form + Zod validation
- **Language Support**: i18n for EN/NL versions

### Backend & CMS
- **CMS**: WordPress (Headless) via REST API or GraphQL
- **Database**: MySQL for WordPress content
- **Integration**: Loxo CRM API for job postings
- **Hosting**: Vercel (frontend) + managed WordPress hosting
- **CDN**: Built-in Vercel CDN for global performance

### Third-party Integrations
- **Loxo CRM**: Automatic job updates, candidate management
- **Email Service**: SendGrid or Mailgun for job alerts
- **Analytics**: Google Analytics 4 + hotjar
- **SEO**: Next.js built-in SEO + Yoast WordPress plugin

---

## 🌐 Site Architecture & Navigation

### Main Navigation Structure
```
Primary Navigation:
├── Home
├── For Companies
│   ├── How We Work
│   ├── Our Services
│   └── Case Studies
├── For Candidates
│   ├── Job Openings
│   ├── How We Work
│   └── Career Resources
├── About
│   ├── About Us
│   ├── Our Team
│   └── Work at Katapult
├── Resources
│   ├── Blog
│   └── Industry Insights
└── Contact
```

### Page Hierarchy (10 Main Pages + Sub-pages)
1. **Home** (Dual-purpose landing with funnel)
2. **About Us** (Company story, mission, values)
3. **Team** (Leadership, recruiters, company culture)
4. **How We Work - Company** (Process for hiring managers)
5. **How We Work - Candidate** (Process for job seekers)
6. **Cases + Case Detail Pages** (Success stories, metrics)
7. **Job Openings / Job Detail / Application** (Job board with filtering)
8. **Blog + Blog Posts** (Industry insights, SEO content)
9. **Contact** (Multiple contact methods, office info)
10. **Work at Katapult** (Internal recruiting, company culture)

---

## 📱 Page-by-Page Detailed Specifications

### 1. Homepage
**Purpose**: Dual-funnel entry point for clients and candidates

#### Key Sections:
- **Hero Section**: Animated text rotator with bold promises
  - "Your next sales hire in 4 interviews"
  - "Meet your next hire within 7 business days"
  - "Your new job within two weeks"
- **Funnel Split**: Two clear paths with visual separation
  - Left: "Hiring Sales Talent?" → Client journey
  - Right: "Looking for Your Next Role?" → Candidate journey
- **Value Propositions**: "We Score in Four" with metrics
- **Social Proof**: Client logos, success numbers
- **Latest Jobs Preview**: 3-4 featured positions
- **CTA Sections**: Separate CTAs for each audience

#### Animations:
- Paint brush effect reveal on hero text
- Rotating testimonials/images (like driivn.nl)
- Parallax scrolling elements
- Hover effects on funnel choices

### 2. About Us
**Purpose**: Build trust and communicate company values

#### Key Sections:
- **Company Story**: Origin, mission, vision
- **Our Approach**: "Filter the bullsh*t" messaging
- **Values**: Bold, honest, results-driven
- **Why Choose Katapult**: Differentiators vs competitors
- **Office Culture**: Team photos, work environment

### 3. Team
**Purpose**: Humanize the brand, build personal connections

#### Key Sections:
- **Leadership Team**: Founder profiles, backgrounds
- **Recruiters**: Individual profiles, specializations
- **Company Culture**: Behind-the-scenes content
- **We're Hiring**: Link to internal positions

### 4. How We Work - Company
**Purpose**: Educate potential clients on process and expectations

#### Key Sections:
- **4-Step Process**: Visual timeline with detailed explanations
- **Timeline Commitments**: "Score in 4" breakdown
- **Success Metrics**: KPIs, satisfaction rates
- **Client Testimonials**: Video testimonials preferred
- **Pricing Structure**: Transparent fee information
- **Getting Started**: Simple onboarding process

### 5. How We Work - Candidate
**Purpose**: Guide candidates through the process, set expectations

#### Key Sections:
- **Candidate Journey**: Step-by-step visual guide
- **What to Expect**: Interview process, timeline
- **Success Stories**: Candidate placement examples
- **Career Coaching**: Additional services offered
- **Application Tips**: How to stand out
- **FAQ**: Common candidate questions

### 6. Cases + Case Detail Pages
**Purpose**: Provide social proof and demonstrate results

#### Case Studies Overview:
- **Grid Layout**: Visual case study cards
- **Filtering**: By industry, role type, company size
- **Metrics Highlights**: Success numbers prominently displayed
- **Load More**: Infinite scroll or pagination

#### Individual Case Detail:
- **Challenge**: Client's hiring problem
- **Solution**: Katapult's approach
- **Results**: Quantified outcomes
- **Timeline**: Process duration
- **Client Quote**: Testimonial with photo
- **Related Cases**: Similar success stories

### 7. Job Openings / Job Detail / Application
**Purpose**: Primary candidate conversion point

#### Jobs Overview Page:
- **Modern Layout**: Card-based design with company logos
- **Advanced Filtering**: 
  - Location (remote, Amsterdam, Netherlands, etc.)
  - Job Type (full-time, part-time, contract)
  - Seniority (junior, mid, senior, director)
  - Salary Range
  - Company Size
  - Industry
- **Search Functionality**: Keyword search
- **Job Alerts Subscription**: Email notifications
- **Sorting Options**: Date, salary, relevance
- **Integration**: Real-time sync with Loxo CRM

#### Job Detail Page:
- **Role Overview**: Position summary, key responsibilities
- **Company Profile**: About the hiring company
- **Requirements**: Skills, experience, qualifications
- **Benefits Package**: Salary range, perks, culture
- **Application Form**: Streamlined, mobile-optimized
- **Similar Jobs**: Related opportunities
- **Consultant Contact**: Assigned recruiter info

#### Application Process:
- **Simple Form**: Resume upload + key questions
- **Progress Indicator**: Application status tracking
- **Confirmation**: Thank you page + email
- **Follow-up**: Automated communication sequence

### 8. Blog + Blog Posts
**Purpose**: SEO, thought leadership, candidate/client education

#### Blog Overview:
- **Categories**: 
  - Sales Career Advice
  - SaaS Industry Insights
  - Hiring Best Practices
  - Company News
- **Search**: Content search functionality
- **Newsletter Signup**: Blog subscription CTA
- **Popular Posts**: Most-read articles
- **SEO Optimization**: Schema markup, optimized meta

#### Individual Blog Posts:
- **Related Articles**: Content recommendations
- **Social Sharing**: Easy sharing buttons
- **Author Profiles**: Team member bylines
- **Comments**: Engagement features
- **CTA Integration**: Job alerts, contact forms

### 9. Contact
**Purpose**: Multiple touchpoints for different audiences

#### Contact Options:
- **General Inquiries**: Main contact form
- **Client Services**: Direct line for hiring managers
- **Candidates**: Recruiter contact information
- **Office Information**: Address, phone, hours
- **Social Media**: Links to all platforms
- **Map Integration**: Google Maps embed
- **Response Promise**: "We respond within 24 hours"

### 10. Work at Katapult
**Purpose**: Internal recruiting, showcase company culture

#### Key Sections:
- **Why Work Here**: Employee value proposition
- **Open Positions**: Internal job listings
- **Team Benefits**: Comprehensive benefits package
- **Office Life**: Photo gallery, culture videos
- **Application Process**: How to apply internally
- **Employee Testimonials**: Current team member quotes

---

## 🎨 Design System & Visual Identity

### Color Palette
**Primary Colors:**
- **Katapult Orange**: #FF6B35 (Bold, energetic)
- **Deep Navy**: #1B2951 (Professional, trustworthy)
- **Bright Blue**: #4ECDC4 (Modern, fresh)

**Secondary Colors:**
- **Light Gray**: #F8F9FA (Backgrounds)
- **Dark Gray**: #343A40 (Text)
- **Success Green**: #28A745 (CTAs, success states)
- **Warning Orange**: #FD7E14 (Attention, alerts)

### Typography
**Primary Font**: Inter (Modern, readable, professional)
**Secondary Font**: Poppins (Bold headings, personality)
**Code Font**: JetBrains Mono (Technical content)

### UI Components
- **Buttons**: Rounded corners, hover animations, multiple variants
- **Cards**: Subtle shadows, hover lift effects
- **Forms**: Clean inputs, validation states, micro-interactions
- **Navigation**: Sticky header, mobile hamburger, smooth transitions

---

## 🎬 Animation & Motion Design Strategy

### Homepage Animations
1. **Hero Text Rotator**: 
   - Smooth transitions between phrases
   - Typewriter effect for emphasis
   - 3-second intervals

2. **Paint Brush Effect**:
   - SVG path animation
   - Reveals key elements
   - Triggered on scroll

3. **Funnel Split Animation**:
   - Hover states with color changes
   - Smooth transitions between states
   - Mobile-friendly touch interactions

4. **Photo Carousel** (Inspired by driivn.nl):
   - Automatic rotation every 4 seconds
   - Smooth fade transitions
   - Pause on hover

### Page Transitions
- **Fade In**: Content appears on scroll
- **Slide Up**: Cards and sections
- **Parallax**: Background elements
- **Stagger**: List items animate in sequence

### Micro-interactions
- **Button Hovers**: Scale and color changes
- **Form Focus**: Input highlighting
- **Card Hovers**: Lift effect with shadow
- **Loading States**: Skeleton screens

### Performance Considerations
- **Reduced Motion**: Respect user preferences
- **Lazy Loading**: Animations load when needed
- **Mobile Optimization**: Lighter animations on mobile
- **60fps Target**: Smooth performance across devices

---

## 📊 SEO & Content Strategy

### Technical SEO
- **Next.js SEO**: Built-in optimizations
- **Meta Tags**: Dynamic, page-specific
- **Schema Markup**: JobPosting, Organization, LocalBusiness
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Proper crawl directives

### Content Strategy
- **Keyword Targeting**:
  - "SaaS sales recruitment Netherlands"
  - "Sales jobs Amsterdam"
  - "B2B sales talent"
  - "SaaS recruitment agency"
- **Content Calendar**: Weekly blog posts
- **Local SEO**: Amsterdam/Netherlands focus
- **Job Posting SEO**: Rich snippets for job listings

### Language Optimization (EN/NL)
- **URL Structure**: /en/ and /nl/ prefixes
- **Hreflang Tags**: Proper language targeting
- **Content Localization**: Not just translation, but cultural adaptation
- **Local Keywords**: Dutch vs English search terms

---

## 🔧 Integration Requirements

### Loxo CRM Integration
**Purpose**: Automatic job sync, candidate management

**API Endpoints Needed:**
- **Jobs**: GET /jobs (active positions)
- **Job Details**: GET /jobs/{id}
- **Applications**: POST /applications
- **Candidates**: GET/POST candidate data
- **Status Updates**: Webhook notifications

**Sync Frequency**: Every 15 minutes for jobs, real-time for applications

**Data Mapping:**
- Job Title → Website Job Title
- Description → Formatted job description
- Requirements → Bullet-pointed requirements
- Location → Searchable location field
- Salary Range → If available

### Email Integration
**Job Alerts System:**
- **Frequency Options**: Daily, weekly, monthly
- **Filtering**: By preferences (location, seniority, type)
- **Template Design**: Branded email templates
- **Unsubscribe**: One-click unsubscribe

**Transactional Emails:**
- Application confirmations
- Status updates
- Interview invitations
- Welcome emails

### Analytics Integration
- **Google Analytics 4**: Enhanced ecommerce tracking
- **Goal Tracking**: Applications, contact forms, newsletter signups
- **Conversion Funnels**: Client and candidate journeys
- **Heatmaps**: User behavior analysis

---

## 📱 Mobile-First Design Strategy

### Responsive Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

### Mobile-Specific Features
- **Touch-Friendly**: Minimum 44px touch targets
- **Swipe Gestures**: Job card swiping, image carousels
- **Mobile Menu**: Hamburger with smooth animations
- **Thumb Navigation**: Bottom navigation for key actions
- **Progressive Web App**: Offline capabilities, add to homescreen

### Performance Optimization
- **Image Optimization**: Next.js Image component, WebP format
- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Images and components
- **Caching Strategy**: Static generation where possible
- **CDN**: Global content delivery

---

## 🚀 Development Phases

### Phase 1: Foundation (Weeks 1-2)
- [ ] Set up Next.js project structure
- [ ] Implement design system (colors, typography, components)
- [ ] Create basic page layouts
- [ ] Set up WordPress headless CMS
- [ ] Configure development environment

### Phase 2: Core Pages (Weeks 3-4)
- [ ] Homepage with funnel implementation
- [ ] About Us and Team pages
- [ ] How We Work pages (both versions)
- [ ] Basic contact page
- [ ] Mobile responsiveness

### Phase 3: Jobs & Integration (Weeks 5-6)
- [ ] Jobs listing page with filtering
- [ ] Job detail pages
- [ ] Application forms
- [ ] Loxo CRM integration
- [ ] Job alerts system

### Phase 4: Content & Polish (Weeks 7-8)
- [ ] Blog functionality
- [ ] Case studies pages
- [ ] Animations and micro-interactions
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Testing across devices

---

## 🧪 Testing Strategy

### User Testing
- **Target Groups**: 5 sales leaders, 5 job seekers
- **Test Scenarios**: Complete user journeys
- **Feedback Collection**: Task completion, user satisfaction
- **Iteration**: Implement feedback before launch

### Technical Testing
- **Cross-browser**: Chrome, Firefox, Safari, Edge
- **Device Testing**: iPhone, Android, tablets, desktops
- **Performance**: Page speed, Core Web Vitals
- **Accessibility**: WCAG 2.1 AA compliance
- **SEO**: Search console, ranking factors

### A/B Testing (Post-Launch)
- **Homepage Funnels**: Different split designs
- **CTA Buttons**: Wording, colors, placement
- **Job Application**: Form length, fields
- **Contact Forms**: Single vs multi-step

---

## 📈 Success Metrics & KPIs

### Business Metrics
- **Client Lead Generation**: 50% increase in qualified leads
- **Application Rate**: 25% increase in job applications
- **Conversion Rate**: Client inquiry to signed contract
- **Time on Site**: Improved engagement metrics
- **Bounce Rate**: Reduced bounce rate across key pages

### Technical Metrics
- **Page Speed**: < 3 seconds load time
- **Core Web Vitals**: All green scores
- **Mobile Usability**: 0 mobile usability issues
- **SEO Rankings**: Top 3 for target keywords
- **Uptime**: 99.9% availability

### User Experience Metrics
- **Task Completion**: Users can complete key journeys
- **User Satisfaction**: Post-interaction surveys
- **Support Tickets**: Reduced confusion-related tickets
- **Return Visitors**: Increased repeat traffic

---

## 🚦 Launch Strategy

### Pre-Launch (2 weeks before)
- [ ] Domain setup (katapult.nl)
- [ ] SSL certificate installation
- [ ] DNS configuration
- [ ] Backup strategy implementation
- [ ] Monitoring setup

### Launch Day
- [ ] Deploy to production
- [ ] Redirect old domain (katapult.amsterdam)
- [ ] Submit sitemap to search engines
- [ ] Monitor for issues
- [ ] Announce on social media

### Post-Launch (First month)
- [ ] Daily monitoring
- [ ] User feedback collection
- [ ] Performance optimization
- [ ] Content updates
- [ ] SEO tracking

---

## 💰 Budget Considerations

### Development Costs
- **Frontend Development**: 40-60 hours
- **WordPress Setup**: 10-15 hours
- **Loxo Integration**: 15-20 hours
- **Testing & Optimization**: 10-15 hours
- **Total Development**: 75-110 hours

### Ongoing Costs
- **Hosting**: €50-100/month
- **Domain**: €10/year
- **CDN**: €20-50/month
- **Email Service**: €20-40/month
- **Monitoring Tools**: €30-50/month

### Third-party Services
- **Loxo API**: Existing subscription
- **Google Analytics**: Free
- **WordPress Hosting**: €30-80/month
- **Backup Services**: €10-20/month

---

## 🔄 Maintenance & Updates

### Content Management
- **Blog Posts**: Weekly publishing schedule
- **Job Updates**: Automatic via Loxo sync
- **Case Studies**: Monthly additions
- **Team Updates**: As needed

### Technical Maintenance
- **Security Updates**: Monthly WordPress/plugin updates
- **Performance Monitoring**: Continuous
- **SEO Optimization**: Ongoing keyword tracking
- **A/B Testing**: Quarterly experiments

### Feature Enhancements
- **Quarter 1**: Advanced job filtering
- **Quarter 2**: Video testimonials
- **Quarter 3**: Candidate portal
- **Quarter 4**: AI-powered job matching

---

## 🎯 Next Steps

1. **Approve This Plan**: Review and sign off on specifications
2. **Design Mockups**: Create visual designs based on this plan
3. **Technical Setup**: Initialize development environment
4. **Content Creation**: Start writing copy and gathering assets
5. **Development Start**: Begin Phase 1 implementation

---

*This comprehensive plan serves as the foundation for creating a modern, conversion-focused website that will position Katapult as the leading SaaS sales recruitment agency in the Netherlands.*
