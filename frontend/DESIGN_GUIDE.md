# 🎨 Vercel-Style Design System - Quick Reference

## Color Usage Guide

### When to use what:

#### **Background Colors**
```tsx
// Main page background
className="bg-background"

// Card/elevated surfaces
className="bg-card"

// Subtle sections
className="bg-muted/30"

// Inverted sections (like CTA)
className="bg-foreground text-background"
```

#### **Text Colors**
```tsx
// Primary text
className="text-foreground"

// Secondary/muted text
className="text-muted-foreground"

// On dark backgrounds
className="text-background"
```

#### **Border Colors**
```tsx
// Standard borders
className="border border-border"

// Subtle borders
className="border-border/50"
```

---

## Typography Scale

```tsx
// Hero/Display
className="text-5xl md:text-7xl font-bold"

// Page Title
className="text-4xl md:text-6xl font-bold"

// Section Heading
className="text-3xl md:text-5xl font-bold"

// Card Title
className="text-2xl font-bold"

// Subsection
className="text-xl font-semibold"

// Body Large
className="text-lg"

// Body
className="text-base"

// Small/Muted
className="text-sm text-muted-foreground"
```

---

## Common Patterns

### Button Variants

```tsx
// Primary (Black button, white text)
<Button>Primary Action</Button>

// Secondary (Light gray button)
<Button variant="outline">Secondary</Button>

// Ghost (Transparent)
<Button variant="ghost">Ghost</Button>

// Rounded/Pill
<Button className="rounded-full">Get Started</Button>
```

### Card Patterns

```tsx
// Basic card
<Card className="p-6">
  <h3>Title</h3>
  <p>Content</p>
</Card>

// Hoverable card
<Card className="p-6 hover:shadow-lg transition-all duration-300">
  Content
</Card>

// Interactive card
<Card className="p-6 cursor-pointer group">
  <h3 className="group-hover:text-muted-foreground transition-colors">
    Title
  </h3>
</Card>
```

### Layout Containers

```tsx
// Max-width container
<div className="max-w-7xl mx-auto px-6">
  Content
</div>

// Section spacing
<section className="py-20 md:py-32">
  Content
</section>

// Center content
<div className="max-w-3xl mx-auto text-center">
  Content
</div>
```

### Grid Layouts

```tsx
// 2-column grid
<div className="grid md:grid-cols-2 gap-6">

// 3-column grid
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

// 4-column grid
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
```

---

## Spacing System

```
px-6    = Horizontal padding (24px)
py-20   = Vertical padding (80px)
py-32   = Large vertical padding (128px)
gap-4   = Grid/flex gap (16px)
gap-6   = Medium gap (24px)
gap-8   = Large gap (32px)
mb-6    = Margin bottom (24px)
mt-16   = Margin top (64px)
```

---

## Transitions & Animations

```tsx
// Basic hover transition
className="transition-colors duration-200"

// Transform transition
className="transition-all duration-300"

// Hover states
className="hover:text-foreground"
className="hover:shadow-lg"
className="hover:scale-105"

// Group hover (parent affects child)
<div className="group">
  <h3 className="group-hover:text-muted-foreground">Title</h3>
</div>
```

---

## Responsive Design

```tsx
// Mobile first approach

// Hidden on mobile, visible on desktop
className="hidden md:flex"

// Stack on mobile, row on desktop
className="flex flex-col sm:flex-row"

// Full width on mobile, auto on desktop
className="w-full sm:w-auto"

// Responsive text size
className="text-4xl md:text-6xl"

// Responsive padding
className="p-4 md:p-8"
```

---

## Special Effects

### Grid Background Pattern
```tsx
<div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
```

### Gradient Text
```tsx
<span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
  Gradient Text
</span>
```

### Backdrop Blur
```tsx
className="bg-background/80 backdrop-blur-md"
```

---

## Icons (SVG)

### Arrow Right
```tsx
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
</svg>
```

### Star
```tsx
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
```

---

## Adding More shadcn/ui Components

```bash
# Dialog/Modal
npx shadcn@latest add dialog

# Dropdown Menu
npx shadcn@latest add dropdown-menu

# Input Field
npx shadcn@latest add input

# Form
npx shadcn@latest add form

# Table
npx shadcn@latest add table

# Tabs
npx shadcn@latest add tabs

# Accordion
npx shadcn@latest add accordion

# Sheet (Slide-over)
npx shadcn@latest add sheet

# Toast/Notifications
npx shadcn@latest add toast

# See all components
npx shadcn@latest add
```

---

## Pro Tips

1. **Use semantic color tokens** instead of hardcoded colors
   - ✅ `bg-background` instead of `bg-white`
   - ✅ `text-foreground` instead of `text-black`

2. **Mobile-first responsive design**
   - Start with mobile, add `md:` and `lg:` prefixes

3. **Consistent spacing**
   - Use `px-6` for horizontal container padding
   - Use `py-20` or `py-32` for section padding

4. **Hover states should be subtle**
   - 200-300ms transitions
   - Slight color shifts

5. **Keep it minimal**
   - Less is more with black & white
   - Use whitespace generously

---

## File Organization

```
✅ Keep components small (< 200 lines)
✅ One component per file
✅ Use "use client" only when needed (interactivity)
✅ Extract repeated patterns into utilities
✅ Group related components in folders
```

---

**Remember:** Vercel's design is about clarity, speed, and confidence. Keep it simple!
