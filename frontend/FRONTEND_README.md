# P2P Marketplace Frontend

A minimalist, Vercel-inspired Next.js application with TypeScript, Tailwind CSS, and shadcn/ui.

## 🎨 Design Features

- **Black & White Color Scheme**: Pure monochromatic design inspired by Vercel
- **Geist Font**: Using Vercel's beautiful Geist Sans and Geist Mono fonts
- **shadcn/ui Components**: Accessible, customizable UI components
- **Responsive Design**: Mobile-first approach with smooth transitions
- **Modern Stack**: Next.js 15 + TypeScript + Tailwind CSS v4

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with font configuration
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles with black & white theme
│   │
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── separator.tsx
│   │   │
│   │   ├── navigation.tsx   # Top navigation bar
│   │   ├── hero.tsx         # Hero section
│   │   ├── features.tsx     # Features grid
│   │   ├── industry-showcase.tsx
│   │   ├── cta.tsx          # Call to action
│   │   └── footer.tsx       # Footer
│   │
│   └── lib/
│       └── utils.ts         # Utility functions
│
├── components.json          # shadcn/ui configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Color System

The application uses a pure black and white color palette:

### Light Mode
- Background: `#FFFFFF` (Pure White)
- Foreground: `#000000` (Pure Black)
- Muted: `#F5F5F5` (Light Gray)
- Border: `#E5E5E5` (Lighter Gray)

### Dark Mode
- Background: `#000000` (Pure Black)
- Foreground: `#FFFFFF` (Pure White)
- Muted: `#1A1A1A` (Dark Gray)
- Border: `#262626` (Darker Gray)

## 🔧 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Fonts**: [Geist](https://vercel.com/font) by Vercel
- **Icons**: SVG icons (inline)

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎯 Key Features

### Components

1. **Navigation**: Fixed header with logo, nav links, and CTA buttons
2. **Hero**: Eye-catching hero section with gradient text and stats
3. **Features**: Grid layout showcasing framework features
4. **Industry Showcase**: Industry templates with examples
5. **CTA**: Call-to-action section with inverted colors
6. **Footer**: Comprehensive footer with links and social icons

### Design Principles

- **Minimalist**: Clean, distraction-free interface
- **Fast**: Optimized for performance with Next.js 15
- **Accessible**: Built with accessibility in mind
- **Responsive**: Works perfectly on all devices
- **Smooth**: Subtle transitions and hover effects

## 🛠️ Customization

### Adding New Components

```bash
# Add shadcn/ui components
npx shadcn@latest add [component-name]
```

### Modifying Colors

Edit `src/app/globals.css` to customize the color palette:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 0%;
  /* ... */
}
```

### Changing Fonts

Update `src/app/layout.tsx` to use different fonts:

```typescript
import { GeistSans } from "geist/font/sans";
```

## 📝 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

```bash
# Build
npm run build

# The output will be in the `.next` folder
```

## 📄 License

MIT License - see the [LICENSE](../LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using [Next.js](https://nextjs.org/) and [shadcn/ui](https://ui.shadcn.com/)
