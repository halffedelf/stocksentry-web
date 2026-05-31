# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2026-05-31

### Added
- **Structured Data (JSON-LD):** Added four schema blocks for rich SERP results:
    - `SoftwareApplication` schema on the homepage (pricing tiers, feature list, OS).
    - `Organization` schema in the global layout (brand entity, logo, support contact).
    - `FAQPage` schema on `/faq` (9 Q&A pairs for FAQ accordion in search results).
    - `FAQPage` schema on `/pricing` (6 Q&A pairs from the Radical Transparency section).
- **Auto-generated Sitemap:** Installed `@astrojs/sitemap` integration. The sitemap is now generated automatically at build time at `/sitemap-index.xml`, eliminating the need to manually update `public/sitemap.xml` when new pages are added. Admin and API routes are excluded via filter.
- **SEO Planning Docs:** Added `SEO_IMPLEMENTATION_PLAN.md` and `SEO_CONTENT_CALENDAR.md` to the repo for reference.

### Changed
- **On-page SEO — Title Tags:** Rewrote title tags on homepage, `/pricing`, and `/faq` to target primary keywords within the 60-character SERP limit.
    - Homepage: `"AI Stock Alert App for Swing Traders"` (renders as 51 chars)
    - Pricing: `"AI Stock Alert App Pricing & Plans"` (renders as 49 chars)
    - FAQ: `"StockSentry FAQ — How Our AI Stock Alert App Works"`
- **On-page SEO — H1s:** Replaced generic or duplicate H1s with keyword-bearing, page-unique headings across homepage, `/pricing`, and `/faq`.
- **Open Graph URLs:** Fixed `og:url` and `twitter:url` in `MainLayout.astro` to always resolve to the canonical production URL (`https://stocksentry.bot/...`) instead of the request URL (which resolved to `localhost` in dev).
- **Google Play Button:** Converted the Google Play `<div>` to a proper `<a>` tag linking to `https://play.google.com/store/apps/details?id=com.stocksentry.app`. Added `aria-label`, `target="_blank"`, and `rel="noopener noreferrer"`.
- **App Store Button:** Added `role="img"` and `aria-label="App Store — Coming Soon"` to the inert App Store placeholder.

### Removed
- **Generator Meta Tag:** Removed `<meta name="generator">` from `MainLayout.astro` to avoid exposing the tech stack version.
- **Hand-coded `public/sitemap.xml`:** Deleted in favour of the auto-generated sitemap from `@astrojs/sitemap`.

## [1.0.0] - 2026-05-24

### Added
- **Insights Hub:** A new educational center (`/insights`) for deep-dive research and strategy.
- **High-Fidelity Articles:**
    - "Can LLMs Predict Stocks?" - Analysis of AI in finance.
    - "2022 Survival Guide" - Technical post-mortem of bear market risk shields.
    - "Swing vs. Day Trading" - Mathematical comparison of trade expectancy.
    - "Understanding the 3-Prong Rubric" - Deep dive into signal logic.
- **SEO Assets:** Generated `sitemap.xml` and `robots.txt` for better search engine discovery.
- **Social Metadata:** Added Open Graph and Twitter Card tags to all pages with custom sharing images.
- **Navigation:** Added "Resources" column to the footer with links to Insights, Performance, and FAQ.
- **UX Components:** Added a "Back to Top" floating button on long-form content pages.

### Changed
- **Mobile App Transition:** Rebranded the service from a Telegram bot to a native mobile app across the entire website.
- **UI Overhaul:** 
    - Updated homepage hero with native app mockups and official Google Play/App Store buttons.
    - Replaced generic icons with official full-color brand assets.
    - Switched all card backgrounds to solid high-contrast dark theme.
- **Pricing Overhaul:** Implemented a new 4-tier pricing model (Free, Basic, Pro, Advanced) with a beautified comparison table.
- **Branding:** Renamed "Premium" tier to "Advanced" and updated administrative email to `admin@stocksentry.bot`.
- **Navigation:** Streamlined header navigation to focus on Home, Performance, and Pricing.
- **Performance Data:** Updated the performance audit to include the full 2021-2024 cycle with +122.8% cumulative return.

### Removed
- **Experience Page:** Decommissioned the dedicated "Experience" page, merging high-value sections (Personas and Comparison Table) into the Homepage and Pricing page.
- **Redundant Sections:** Removed the "Always On" timeline and "Sentry in Action" section from the homepage to reduce friction and cognitive load.
