# Katapult Design System Guidelines

## 🎯 Overview

This document establishes the comprehensive design system for Katapult, ensuring visual consistency across all digital touchpoints. Based on the reference design analysis, these guidelines maintain brand integrity while providing flexibility for implementation.

## 🎨 Color System

### Primary Brand Colors
```css
/* Core Brand Colors */
--katapult-green: #BFFF00;        /* Primary brand color - lime green */
--katapult-dark-green: #1B4332;   /* Primary dark background */
--katapult-white: #FFFFFF;         /* Primary text on dark backgrounds */
```

### Usage Guidelines

**Primary Green (#BFFF00)**
- ✅ **Use for**: Logo, primary buttons, key CTAs, active states, highlights
- ✅ **Accessibility**: Ensure 4.5:1 contrast ratio with backgrounds
- ❌ **Avoid**: Large text blocks, subtle UI elements

**Dark Green (#1B4332)**
- ✅ **Use for**: Headers, hero sections, footer, navigation backgrounds
- ✅ **Pairing**: Excellent with lime green and white text
- ❌ **Avoid**: Body text, form inputs without proper contrast

### Extended Color Palette
```css
/* Semantic Colors */
--success: #10B981;     /* Success states */
--warning: #F59E0B;     /* Warning states */
--error: #EF4444;       /* Error states */
--info: #3B82F6;        /* Information states */

/* Neutral Grays */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;
```

## 🔤 Typography System

### Font Families
```css
/* Primary Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Display Font Stack */
font-family: 'Poppins', 'Inter', sans-serif;
```

### Typography Scale
```css
/* Headings */
.text-6xl { font-size: 3.75rem; line-height: 1; }      /* 60px */
.text-5xl { font-size: 3rem; line-height: 1; }         /* 48px */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; } /* 36px */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } /* 30px */
.text-2xl { font-size: 1.5rem; line-height: 2rem; }    /* 24px */
.text-xl { font-size: 1.25rem; line-height: 1.75rem; } /* 20px */

/* Body Text */
.text-lg { font-size: 1.125rem; line-height: 1.75rem; } /* 18px */
.text-base { font-size: 1rem; line-height: 1.5rem; }   /* 16px */
.text-sm { font-size: 0.875rem; line-height: 1.25rem; } /* 14px */
.text-xs { font-size: 0.75rem; line-height: 1rem; }    /* 12px */
```

### Typography Usage

**Headlines (H1-H2)**
- Font: Poppins
- Weight: 600-700 (Semibold to Bold)
- Color: Dark green or white on dark backgrounds
- Use: Page titles, hero headlines

**Subheadings (H3-H6)**
- Font: Inter
- Weight: 500-600 (Medium to Semibold)
- Color: Gray-700 or white on dark backgrounds

**Body Text**
- Font: Inter
- Weight: 400 (Regular)
- Size: 16px (text-base) for primary content
- Line Height: 1.5 for optimal readability

## 🧩 Component Guidelines

### Buttons

**Primary Button**
```css
.btn-primary {
  background-color: var(--katapult-green);
  color: var(--katapult-dark-green);
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background-color: #A6E600; /* Slightly darker lime */
  transform: translateY(-1px);
}
```

**Secondary Button**
```css
.btn-secondary {
  background-color: transparent;
  color: var(--katapult-green);
  border: 2px solid var(--katapult-green);
  font-weight: 500;
  padding: 10px 22px;
  border-radius: 8px;
}
```

### Navigation

**Header Navigation**
- Background: Dark green (#1B4332)
- Text: White with lime green highlights for active states
- Logo: Lime green on dark background
- Hover states: Subtle lime green underline or background

**Mobile Navigation**
- Maintain dark green background
- Ensure touch targets are minimum 44px
- Use lime green for active/selected states

### Cards and Containers

**Standard Card**
```css
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 24px;
  border: 1px solid var(--gray-200);
}
```

**Featured Card**
```css
.card-featured {
  background: var(--katapult-dark-green);
  color: white;
  border: 2px solid var(--katapult-green);
}
```

## 📐 Spacing System

### Spacing Scale (Tailwind-based)
```css
/* Spacing Values */
.space-1 { margin/padding: 0.25rem; }  /* 4px */
.space-2 { margin/padding: 0.5rem; }   /* 8px */
.space-3 { margin/padding: 0.75rem; }  /* 12px */
.space-4 { margin/padding: 1rem; }     /* 16px */
.space-6 { margin/padding: 1.5rem; }   /* 24px */
.space-8 { margin/padding: 2rem; }     /* 32px */
.space-12 { margin/padding: 3rem; }    /* 48px */
.space-16 { margin/padding: 4rem; }    /* 64px */
.space-20 { margin/padding: 5rem; }    /* 80px */
.space-24 { margin/padding: 6rem; }    /* 96px */
```

### Layout Guidelines

**Container Widths**
- Max width: 1200px for main content
- Padding: 16px on mobile, 24px on tablet, 32px on desktop
- Centered alignment with auto margins

**Section Spacing**
- Between sections: 80px (space-20) on desktop, 48px (space-12) on mobile
- Within sections: 32px (space-8) between elements
- Component internal spacing: 16px (space-4) to 24px (space-6)

## 🎭 Interactive States

### Hover Effects
```css
/* Standard hover transition */
transition: all 0.2s ease-in-out;

/* Hover transforms */
transform: translateY(-2px); /* Subtle lift */
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15); /* Enhanced shadow */
```

### Focus States
```css
/* Accessibility-compliant focus */
outline: 2px solid var(--katapult-green);
outline-offset: 2px;
```

### Loading States
- Use lime green for progress indicators
- Skeleton screens with gray-200 background
- Smooth fade-in animations (300ms)

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Mobile Considerations
- Touch targets: Minimum 44px
- Font sizes: Increase by 2px on mobile for readability
- Spacing: Reduce by 25-50% on mobile
- Navigation: Collapsible hamburger menu

## ♿ Accessibility Standards

### Color Contrast
- **AA Standard**: 4.5:1 for normal text, 3:1 for large text
- **AAA Standard**: 7:1 for normal text, 4.5:1 for large text
- Test all lime green combinations for compliance

### Focus Management
- Visible focus indicators on all interactive elements
- Logical tab order
- Skip links for keyboard navigation

### Screen Reader Support
- Semantic HTML structure
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for all images
- ARIA labels where needed

## 🔧 Implementation Checklist

### ✅ Brand Consistency
- [ ] Logo uses exact lime green (#BFFF00)
- [ ] Headers use dark green background (#1B4332)
- [ ] Primary buttons use lime green
- [ ] Text contrast meets AA standards

### ✅ Typography
- [ ] Headings use Poppins font
- [ ] Body text uses Inter font
- [ ] Font sizes follow established scale
- [ ] Line heights optimize readability

### ✅ Components
- [ ] Buttons follow established styles
- [ ] Cards use consistent spacing and shadows
- [ ] Navigation maintains brand colors
- [ ] Forms use proper focus states

### ✅ Responsive Design
- [ ] Mobile-first implementation
- [ ] Touch targets meet minimum size
- [ ] Content reflows properly
- [ ] Images are optimized and responsive

## 🚀 Performance Considerations

### CSS Optimization
- Use CSS custom properties for theme values
- Minimize unused CSS with PurgeCSS
- Optimize font loading with font-display: swap

### Image Optimization
- Use WebP format where supported
- Implement lazy loading for below-fold images
- Provide appropriate alt text

---

*This design system ensures Katapult maintains a consistent, professional, and accessible brand presence across all digital touchpoints while providing the flexibility needed for future growth and development.*