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
- **Internationalization** - Multi-language support with custom localization system

### Key Directories

- `src/app/` - Next.js app router pages and layouts
  - `layout.tsx` - Root layout with Google Analytics and multilingual meta tags
  - `page.tsx` - Main landing page with hero, features, and sponsor sections
  - `privacy/` - Privacy policy page with localized content
  - `support/` - Support page
- `src/components/` - Reusable React components
  - `FeatureList/` - Product features display
  - `Footer/` - Site footer
  - `Navigation/` - Header navigation with logo and social links
  - `Localized.tsx` - Internationalization helper component
- `src/l18n/` - Localization system
  - `localization.ts` - Translation strings for en, fr, ja, zh-Hans, zh-Hant
  - `useLocalization.ts` - React hook for accessing translations

### Styling Architecture

The project uses Tailwind CSS v4 for styling:
- Custom theme colors defined in `@theme` directive in `globals.css`
- Responsive design with Tailwind's responsive prefixes (e.g., `max-md:`, `lg:`)
- Reusable React components with Tailwind classes for styling
- Custom CSS variables for brand colors (primary, background, text colors)

### Internationalization System

Custom i18n implementation:
- `LocalizationContext` provides language context throughout the app
- `<Localized name="key" />` component renders translated strings
- Translation keys stored in `localization.ts` with support for 5 languages
- SEO-optimized with hrefLang meta tags for each supported language

### Key Features

- Landing page for Signal MIDI Editor with hero section, features list, and sponsor information
- Multi-language support (English, French, Japanese, Simplified Chinese, Traditional Chinese)
- External integrations: Google Analytics, Carbon Ads, GitHub Sponsors
- Links to app stores (Mac App Store, Microsoft Store) and social platforms
- Privacy policy and support pages
- Responsive design optimized for desktop browsers