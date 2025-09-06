# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start the development server on http://localhost:3000
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run Next.js linting

## Project Architecture

This is a Next.js 15 application for the Signal MIDI Editor landing page. The project uses:

- **Next.js App Router** (`src/app/`) - Modern Next.js routing with React Server Components
- **Tailwind CSS v4** - Utility-first CSS framework with custom theme configuration
- **next-intl** - Modern internationalization library for Next.js with type-safe translations
- **PostCSS** - CSS processor for Tailwind CSS compilation
- **TypeScript** - Type safety throughout the codebase

### Key Directories

- `src/app/` - Next.js app router pages and layouts
  - `layout.tsx` - Root layout with Google Analytics and multilingual meta tags
  - `page.tsx` - Main landing page with hero, features, and sponsor sections
  - `privacy/` - Privacy policy page with localized content
  - `support/` - Support page
- `src/components/` - Reusable React components
  - `FeatureList/Feature.tsx` - Individual feature card component with customizable styling
  - `Footer/Footer.tsx` - Site footer with support and privacy links
  - `Navigation/Navigation.tsx` - Header navigation with logo and social icons
- `src/l18n/` - Legacy localization system (migrated to next-intl)
  - `localization.ts` - Translation strings for multiple languages
  - `useTranslations.ts` - Legacy hook (replaced by next-intl's useTranslations)

### Styling Architecture

The project uses Tailwind CSS v4 for styling (migrated from Kuma UI):

- Custom theme configuration using `@theme` directive in `src/app/globals.css`
- Brand colors: `--color-primary`, `--color-background`, `--color-text` defined as CSS variables
- Responsive design with mobile-first approach using responsive prefixes
- Component architecture: Reusable components for repeated elements (2+ uses), inline classes for single-use elements
- Advanced Tailwind selectors like `[&_img]:w-6` for child element styling

### Internationalization System

next-intl integration:

- `useTranslations()` hook from next-intl for accessing translations
- Function-based syntax: `t("translation-key")` instead of component-based approach
- Type-safe translation keys with TypeScript integration
- Support for multiple languages (English, French, Japanese, Chinese variants)
- Next.js App Router compatible with server-side rendering
- Configuration in `next.config.mjs` using `createNextIntlPlugin`

### Component Architecture Patterns

Established patterns for component organization:

- **Reusable Components**: Elements used 2+ times become React components with meaningful props
  - `Section`, `SectionContent` - Layout components for consistent page structure
  - `Feature` - Customizable feature cards with icon, title, and description props
  - `SupportRow`, `StoreLink` - Data-driven components accepting content as props
- **Inline Styling**: Single-use elements use Tailwind classes directly in JSX
- **Data-Driven Design**: Components accept data as props rather than hardcoded content
- **Type Safety**: TypeScript interfaces for all component props

### Key Features

- Landing page for Signal MIDI Editor with hero section, features list, and sponsor information
- Multi-language support using next-intl with type-safe translations
- External integrations: Google Analytics (@next/third-parties), GitHub links, app store links
- Responsive design with mobile-optimized layouts
- Privacy policy and support pages with localized content
