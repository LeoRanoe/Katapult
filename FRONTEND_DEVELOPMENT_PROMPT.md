# Katapult Website Frontend Development Prompt

## 🎯 Project Overview
Build a modern, conversion-focused recruitment website for Katapult - a SaaS sales recruitment agency. The site must serve two distinct audiences (clients and candidates) with separate user journeys and feature bold animations, mobile-first design, and seamless integrations.

## 🏗️ Technical Requirements

### Core Stack
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod validation
- **Internationalization**: next-i18next (EN/NL support)

### Key Features to Implement
1. **Dual-Funnel Homepage**: Separate entry paths for clients vs candidates
2. **Job Board**: Advanced filtering, search, Loxo CRM integration simulation
3. **Dynamic Animations**: Text rotators, paint brush effects, parallax scrolling
4. **Mobile-First Design**: Touch-friendly, responsive across all devices
5. **SEO Optimization**: Meta tags, schema markup, sitemap generation

## 🎨 Design System

### Color Palette
```css
:root {
  --katapult-orange: #FF6B35;
  --deep-navy: #1B2951;
  --bright-blue: #4ECDC4;
  --light-gray: #F8F9FA;
  --dark-gray: #343A40;
  --success-green: #28A745;
  --warning-orange: #FD7E14;
}
```

### Typography
- **Primary**: Inter (system font)
- **Secondary**: Poppins (bold headings)
- **Sizes**: Mobile-first responsive scaling

## 📱 Pages to Build

### 1. Homepage (`/`)
**Key Components:**
- **Hero Section**: Animated text rotator with phrases:
  - "Your next sales hire in 4 interviews"
  - "Meet your next hire within 7 business days" 
  - "Your new job within two weeks"
- **Dual Funnel**: Visual split with hover animations
  - Left: "Hiring Sales Talent?" → Client CTA
  - Right: "Looking for Your Next Role?" → Candidate CTA
- **Value Props**: "We Score in Four" metrics section
- **Featured Jobs**: 3-4 job cards with hover effects
- **Social Proof**: Client logos, testimonial carousel

### 2. Jobs Page (`/jobs`)
**Features:**
- **Modern Grid Layout**: Job cards with company logos
- **Advanced Filtering**: Location, seniority, job type, salary
- **Search Bar**: Real-time job search
- **Pagination/Infinite Scroll**: Performance optimized
- **Job Alerts Signup**: Email subscription form

### 3. Job Detail Page (`/jobs/[slug]`)
**Layout:**
- **Job Header**: Title, company, location, salary
- **Apply Button**: Prominent, sticky on mobile
- **Job Description**: Rich text formatting
- **Company Profile**: About the hiring company
- **Similar Jobs**: Related opportunities
- **Application Form**: Modal or separate page

### 4. About Pages
- **About Us** (`/about`): Company story, mission, values
- **Team** (`/team`): Team member cards with hover effects
- **How We Work - Company** (`/how-we-work/companies`)
- **How We Work - Candidates** (`/how-we-work/candidates`)

### 5. Case Studies (`/cases`)
- **Grid Layout**: Case study cards with metrics
- **Case Detail Pages**: `/cases/[slug]` with full success stories
- **Filtering**: By industry, role type, results

### 6. Contact (`/contact`)
- **Multiple Forms**: General, client, candidate inquiries
- **Office Information**: Address, phone, hours
- **Map Integration**: Google Maps embed
- **Social Links**: All social media platforms

## 🎭 Animation Requirements

### Homepage Animations
1. **Text Rotator**: Smooth transitions every 3 seconds
2. **Paint Brush Effect**: SVG path animation revealing content
3. **Parallax Scrolling**: Background elements with different speeds
4. **Hover States**: Scale and color transitions on interactive elements

### Page Transitions
- **Fade In**: Content appears on scroll (Intersection Observer)
- **Stagger Animation**: List items animate in sequence
- **Loading States**: Skeleton screens for better UX

### Performance
- **Reduced Motion**: Respect `prefers-reduced-motion`
- **60fps Target**: Optimize all animations
- **Mobile Considerations**: Lighter animations on touch devices

## 📊 Mock Data Structure

### Jobs Data
```typescript
interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  type: 'full-time' | 'part-time' | 'contract';
  seniority: 'junior' | 'mid' | 'senior' | 'director';
  description: string;
  requirements: string[];
  benefits: string[];
  remote: boolean;
  createdAt: string;
  featured: boolean;
}
```

### Case Studies Data
```typescript
interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  timeline: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}
```

## 🔧 Component Architecture

### Core Components
- **Header**: Sticky navigation with mobile hamburger
- **Footer**: Multi-column layout with links and newsletter signup
- **JobCard**: Reusable job listing component
- **CaseStudyCard**: Case study preview component
- **ContactForm**: Multi-purpose form component
- **AnimatedText**: Text rotator component
- **FilterBar**: Job filtering interface

### Layout Components
- **PageLayout**: Consistent page wrapper
- **Section**: Standardized section spacing
- **Container**: Responsive max-width container
- **Grid**: Flexible grid system

## 📝 Content Management

### Static Content
- Create JSON files for easy content updates
- Separate content by language (EN/NL)
- Image optimization with Next.js Image component

### Dynamic Content Simulation
- Mock API endpoints for jobs data
- Simulate Loxo CRM integration with static data
- Email form submissions (console log for now)

## 🚀 Development Priorities

### Phase 1: Foundation
1. Set up Next.js project with TypeScript
2. Configure Tailwind CSS and design system
3. Create basic page layouts and navigation
4. Implement responsive design system

### Phase 2: Core Pages
1. Build homepage with dual funnel
2. Create jobs listing and detail pages
3. Implement basic filtering and search
4. Add about and contact pages

### Phase 3: Animations & Polish
1. Add Framer Motion animations
2. Implement text rotator and parallax effects
3. Optimize performance and accessibility
4. Test across all devices and browsers

## 📋 Specific Implementation Notes

### Homepage Funnel Implementation
```jsx
// Pseudo-code for dual funnel
<div className="grid md:grid-cols-2 gap-8">
  <FunnelOption
    title="Hiring Sales Talent?"
    subtitle="Find your next sales superstar"
    cta="Get Started"
    href="/how-we-work/companies"
    icon="briefcase"
    color="orange"
  />
  <FunnelOption
    title="Looking for Your Next Role?"
    subtitle="Discover amazing SaaS opportunities"
    cta="Browse Jobs"
    href="/jobs"
    icon="search"
    color="blue"
  />
</div>
```

### Job Filtering Logic
```jsx
// Filter state management
const [filters, setFilters] = useState({
  location: [],
  seniority: [],
  type: [],
  remote: false,
  salary: { min: 0, max: 200000 }
});

// Filter jobs based on criteria
const filteredJobs = jobs.filter(job => {
  return (
    (filters.location.length === 0 || filters.location.includes(job.location)) &&
    (filters.seniority.length === 0 || filters.seniority.includes(job.seniority)) &&
    // ... additional filter logic
  );
});
```

### Animation Examples
```jsx
// Text rotator with Framer Motion
const phrases = [
  "Your next sales hire in 4 interviews",
  "Meet your next hire within 7 business days",
  "Your new job within two weeks"
];

<AnimatePresence mode="wait">
  <motion.h1
    key={currentPhrase}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {phrases[currentPhrase]}
  </motion.h1>
</AnimatePresence>
```

## ✅ Success Criteria

### Functionality
- [ ] All pages render correctly on mobile and desktop
- [ ] Job filtering works smoothly with real-time updates
- [ ] Forms validate properly with error states
- [ ] Animations perform at 60fps
- [ ] Navigation works intuitively for both user types

### Performance
- [ ] Lighthouse score > 90 for all metrics
- [ ] First Contentful Paint < 2 seconds
- [ ] Largest Contentful Paint < 3 seconds
- [ ] Images optimized and properly sized

### Accessibility
- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation works throughout
- [ ] Screen reader friendly
- [ ] Color contrast meets standards

## 🎬 Bonus Features (If Time Permits)
- **PWA Features**: Service worker, offline support
- **Advanced Animations**: GSAP integration for complex animations
- **Blog System**: Dynamic blog with categories and search
- **Video Testimonials**: Video player integration
- **Dark Mode**: Toggle between light and dark themes

---

**Goal**: Create a website that converts 50% more leads than the current site while providing an exceptional user experience that positions Katapult as the premier SaaS sales recruitment agency in the Netherlands.

Start with the foundation and build incrementally, testing each component thoroughly before moving to the next phase.
