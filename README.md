# Northwood Solicitors Website

A professional Next.js website for Northwood Solicitors, featuring modern design elements and comprehensive legal service information.

## Features

- Modern, responsive design using Tailwind CSS
- Animated hero slider with Swiper
- Smooth animations with Framer Motion
- Service pages for all practice areas
- Contact form for client inquiries
- Team member profiles
- Mobile-friendly navigation

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Swiper
- Lucide React Icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
northwood-solicitors-web/
├── app/
│   ├── about/          # About page
│   ├── services/       # Services page
│   ├── contact/        # Contact page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Hero slider
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── WhyChooseUs.tsx
│   ├── TeamSection.tsx
│   └── CTASection.tsx
└── public/             # Static assets
```

## Color Scheme

- Primary Gold: #c9a961
- Primary Navy: #1a2332
- Secondary Blue: #2c5f8d
- Dark Grey: #4a4a4a
- Light Grey: #f8f9fa

## Images Required

Place the following images in the `public/` folder:
- logo.png
- logo-white.png
- hero-1.jpg
- hero-2.jpg
- about-main.jpg
- about-hero.jpg
- about-story.jpg
- team-1.jpg, team-2.jpg, team-3.jpg
- service-*.jpg (for each service)
- contact-hero.jpg
- cta-bg.jpg
- pattern-bg.jpg
- map-placeholder.jpg

## Deployment

Build for production:
```bash
npm run build
npm start
```

## License

© 2024 Northwood Solicitors. All rights reserved.
