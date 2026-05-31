# StockSentry — SEO Implementation Plan

**Audit Date:** May 31, 2026  
**Status legend:** `[ ]` = pending · `[x]` = done · `[~]` = in progress

---

## Already Completed

- [x] **Sitemap updated** — all 12 pages (incl. 5 insight pages) now in `public/sitemap.xml`

---

## Phase 1 — Critical Fixes (Do First)

These are the highest-leverage changes. Implement in a single PR.

---

### 1.1 Fix `og:url` in MainLayout

**File:** `src/layouts/MainLayout.astro`

**Problem:** `og:url` and `twitter:url` use `Astro.url`, which resolves to the request URL (e.g., `http://localhost:4321/` in dev). Should always use the canonical production URL.

**Change:**
```diff
- <meta property="og:url" content={Astro.url} />
+ <meta property="og:url" content={canonicalURL} />

- <meta property="twitter:url" content={Astro.url} />
+ <meta property="twitter:url" content={canonicalURL} />
```

`canonicalURL` is already computed on line 22 as `new URL(Astro.url.pathname, siteUrl)` — just reuse it.

---

### 1.2 Remove generator meta tag

**File:** `src/layouts/MainLayout.astro`

**Problem:** Exposes the tech stack version to scanners and competitors.

**Change:**
```diff
- <meta name="generator" content={Astro.generator} />
```

---

### 1.3 Rewrite homepage `<title>` tag

**File:** `src/pages/index.astro`

**Problem:** Current title when rendered = "AI Stock Market App | Automated Trading Monitoring & Alerts | StockSentry" (~68 chars) — too long, likely truncated.

**Target keyword:** `AI stock alert app for swing traders`

**Change:**
```diff
- title="AI Stock Market App | Automated Trading Monitoring & Alerts"
+ title="AI Stock Alert App for Swing Traders"
```

Rendered output will be: **"AI Stock Alert App for Swing Traders | StockSentry"** = 51 chars ✓

---

### 1.4 Rewrite homepage H1

**File:** `src/pages/index.astro`

**Problem:** H1 is brand copy ("Stop watching charts, start catching trends") — no target keyword. Google uses the H1 as a primary ranking signal. The `sr-only` supplement is present but search engines can treat hidden text with suspicion.

**Recommended approach:** Keep the brand copy visually, but restructure so the keyword appears in the visible H1 as a lead-in label or integrate it naturally.

**Change:**
```diff
- <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
-     Stop watching charts, <br><span class="text-brand-500">start catching trends.</span>
-     <span class="sr-only">Personalized AI Stock Monitoring & Alerting App for US Markets</span>
- </h1>
+ <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
+     The AI Stock Alert App — <br><span class="text-brand-500">stop watching charts, start catching trends.</span>
+ </h1>
```

If you want to preserve the exact visual design, a safe alternative is to keep the existing two lines but replace the `sr-only` with a visually subtle keyword-bearing subtitle right below the H1 (outside the tag), before the `<p>` description.

---

### 1.5 Fix duplicate H1 on `/pricing`

**File:** `src/pages/pricing.astro`

**Problem:** `<h1>` on pricing is identical to the homepage H1. Search engines see two pages competing for the same heading signal.

**Change:**
```diff
- <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Stop watching charts, <span class="text-brand-500">start catching trends.</span></h1>
+ <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">StockSentry Pricing — <span class="text-brand-500">Choose Your AI Stock Alert Plan</span></h1>
```

---

### 1.6 Shorten `/pricing` title tag

**File:** `src/pages/pricing.astro`

**Problem:** Current rendered title = "AI Stock Market App Pricing | Choose Your Intelligence Tier | StockSentry" (~73 chars) — truncated in SERPs.

**Change:**
```diff
- title="AI Stock Market App Pricing | Choose Your Intelligence Tier"
+ title="AI Stock Alert App Pricing & Plans"
```

Rendered: **"AI Stock Alert App Pricing & Plans | StockSentry"** = 49 chars ✓

---

### 1.7 Fix FAQ H1

**File:** `src/pages/faq.astro`

**Problem:** H1 "Frequently Asked Questions" is generic and has no keyword.

**Change:**
```diff
- <h1 class="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
+ <h1 class="text-4xl font-bold text-white mb-4">StockSentry FAQ — How Our AI Stock Alert App Works</h1>
```

---

## Phase 2 — Structured Data (Schema Markup)

These unlock SERP rich results. Implement after Phase 1.

---

### 2.1 Add `SoftwareApplication` JSON-LD to homepage

**File:** `src/pages/index.astro`

**Why:** Tells Google this is a downloadable app → enables the app info card in search results (rating, price, OS).

**Add this block** right after the `---` frontmatter closing, inside `<MainLayout>` but before the first `<section>`:

```astro
<!-- Structured Data: SoftwareApplication -->
<script type="application/ld+json" is:inline>
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "StockSentry",
  "operatingSystem": "Android",
  "applicationCategory": "FinanceApplication",
  "description": "StockSentry is an AI-powered stock monitoring and alert app for swing traders. It watches 14 technical indicators and reads news sentiment to deliver plain-English alerts only when it is time to act.",
  "url": "https://stocksentry.bot",
  "offers": [
    {
      "@type": "Offer",
      "name": "Free",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Basic",
      "price": "9.99",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Pro",
      "price": "19.99",
      "priceCurrency": "USD"
    },
    {
      "@type": "Offer",
      "name": "Advanced",
      "price": "39.99",
      "priceCurrency": "USD"
    }
  ],
  "featureList": [
    "Real-time AI stock alerts",
    "Confidence score 0–100%",
    "Daily morning briefing at 08:30 AM",
    "Stop-loss and ATR trailing ratchet alerts",
    "Earnings blackout circuit breaker",
    "No broker connection required",
    "Plain-English AI verdicts",
    "Swing trading focus"
  ],
  "author": {
    "@type": "Organization",
    "name": "StockSentry",
    "url": "https://stocksentry.bot"
  },
  "screenshot": "https://stocksentry.bot/favicon/logo.png"
}
</script>
```

> **Upgrade later:** Once you have Google Play reviews, add an `aggregateRating` block with `ratingValue` and `reviewCount`. This renders stars in the SERP.

---

### 2.2 Add `Organization` JSON-LD to `MainLayout`

**File:** `src/layouts/MainLayout.astro`

**Why:** Establishes the brand entity in Google's Knowledge Graph. Helps with branded search results.

**Add inside `<head>`**, after the Twitter card meta tags:

```astro
<!-- Structured Data: Organization -->
<script type="application/ld+json" is:inline>
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "StockSentry",
  "url": "https://stocksentry.bot",
  "logo": "https://stocksentry.bot/favicon/logo.png",
  "description": "AI-powered stock monitoring and alerting app for swing traders.",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@stocksentry.app",
    "contactType": "customer support"
  }
}
</script>
```

---

### 2.3 Add `FAQPage` JSON-LD to `/faq`

**File:** `src/pages/faq.astro`

**Why:** Renders FAQ accordion directly in Google search results. Best ROI of any schema type for a new site.

**Add right after the `---` frontmatter block**, inside `<MainLayout>` before the `<header>`:

```astro
<!-- Structured Data: FAQPage -->
<script type="application/ld+json" is:inline>
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does StockSentry execute trades for me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. StockSentry is an intelligence and alerting tool only. We identify setups and send native app notifications. You are responsible for executing trades manually in your own brokerage account."
      }
    },
    {
      "@type": "Question",
      "name": "Do you connect to my brokerage account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We operate with zero financial visibility. We do not ask for API keys, login credentials, or account balances. We only store your anonymous account ID and the specific ticker symbols you ask the app to watch."
      }
    },
    {
      "@type": "Question",
      "name": "Which platforms are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Android is available now on the Google Play Store. iOS native app is coming soon to the Apple App Store. Subscription and account management is available via the web portal."
      }
    },
    {
      "@type": "Question",
      "name": "What markets does StockSentry cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Currently US Equities only. The agent is optimized for the depth and liquidity of the US stock market, restricted to a curated universe of highly liquid US Large-Cap components. OTC, crypto, and forex are not currently supported."
      }
    },
    {
      "@type": "Question",
      "name": "How does the Alpha Club Access work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Apply via the waitlist form. Once approved, you receive 14 days of unrestricted access to the Pro tier features. No credit card is required to join the waitlist or initiate the trial. After 14 days, the app will cease monitoring unless you initiate a paid subscription via Stripe."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer refunds?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Due to the nature of data processing costs, we do not offer prorated refunds for mid-cycle cancellations. This is why we provide a strict, no-credit-card-required 14-day trial for evaluation."
      }
    },
    {
      "@type": "Question",
      "name": "Is StockSentry financial advice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely not. StockSentry is an algorithmic data tool. Alerts are generated based on mathematical technical indicators, not personalized fiduciary assessment. All trading involves risk. You are solely responsible for your financial decisions."
      }
    },
    {
      "@type": "Question",
      "name": "How does the AI work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The agent pulls up to a year of historical price data, calculates 14 different technical indicators, and reads the latest news sentiment. The AI evaluates all these angles to form a clear verdict, then translates complex chart data into a simple, easy-to-read English message."
      }
    },
    {
      "@type": "Question",
      "name": "Is StockSentry worth it for a small portfolio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The value depends on your starting capital. The Pro plan is $19.99/month ($240/year). Between 2021 and 2024, our backtested model turned $10,000 into $22,282 (a +122.8% gain over 4 years). If your portfolio is $5,000 or more, historical data suggests the subscription cost is easily absorbed by potential gains. If your portfolio is under $1,000, the fee will eat a significant portion of profits."
      }
    }
  ]
}
</script>
```

---

### 2.4 Add `FAQPage` JSON-LD to `/pricing` FAQ section

**File:** `src/pages/pricing.astro`

The pricing page already has an inline FAQ section ("Radical Transparency"). Add a `FAQPage` schema block at the top of the file (inside `<MainLayout>`) to capture those Q&As for rich results on the pricing page too.

**Key Q&As to include from pricing.astro:**
- "Is the Free tier actually useful?"
- "Why are safety features unconditional?"
- "Does it make sense to have it for a small portfolio size?"
- "How does Personalization work?"
- "Can I interrogate the Advanced agent?"
- "How are deep-dives powered?"

---

## Phase 3 — Accessibility & Image Alt Text

---

### 3.1 Add `aria-label` to Google Play button

**File:** `src/pages/index.astro`

The Google Play button div has no accessible label. Screen readers (and Googlebot) can't interpret it.

**Change:**
```diff
- <div class="flex items-center gap-3 px-5 py-3 rounded-2xl bg-dark-800 border border-slate-700 ... cursor-pointer ...">
+ <a href="https://play.google.com/store/apps/details?id=YOUR_APP_ID" 
+    aria-label="Download StockSentry on Google Play"
+    class="flex items-center gap-3 px-5 py-3 rounded-2xl bg-dark-800 border border-slate-700 ... cursor-pointer ...">
```

> Replace the wrapping `<div>` with an `<a>` tag pointing to the actual Play Store URL. This also makes it crawlable and gives you a real outbound link signal.

---

### 3.2 Add `aria-label` to App Store button

**File:** `src/pages/index.astro`

Same pattern as above, for when iOS ships:

```diff
- <div class="flex items-center gap-3 px-5 py-3 rounded-2xl bg-dark-800/40 ... cursor-pointer ...">
+ <div class="flex items-center gap-3 px-5 py-3 rounded-2xl bg-dark-800/40 ..." 
+      aria-label="App Store — Coming Soon" 
+      role="img">
```

---

## Phase 4 — Technical Infrastructure

---

### 4.1 Switch to `@astrojs/sitemap` for auto-generation

**Why:** The current `public/sitemap.xml` is hand-coded. Every new insights article must be added manually, which will be missed. The official Astro integration generates the sitemap automatically at build time.

**Steps:**

```bash
# 1. Install the integration
npm install @astrojs/sitemap

# 2. Update astro.config.mjs
```

```diff
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
+ import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://stocksentry.bot',
  adapter: vercel({ ... }),
- integrations: [tailwind()],
+ integrations: [tailwind(), sitemap()],
});
```

```bash
# 3. Delete the hand-coded sitemap (the integration generates it at build time)
rm public/sitemap.xml
```

> **Note:** The auto-generated sitemap won't have custom `<changefreq>` or `<priority>` values (Google ignores these anyway). If you need custom config (e.g., exclude admin pages), use the `sitemap()` config options.

**Pages to exclude from sitemap** (add to sitemap config):
- `/admin/*` (already exists in pages dir)
- `/api/*`

```js
sitemap({
  filter: (page) => !page.includes('/admin') && !page.includes('/api'),
})
```

---

### 4.2 Submit to Google Search Console

This is a manual step — cannot be scripted.

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → URL prefix → `https://stocksentry.bot`
3. Verify via DNS TXT record (add to Vercel/your DNS provider) or HTML file upload
4. Once verified: **Sitemaps** → Submit `https://stocksentry.bot/sitemap.xml`
5. Use **URL Inspection** to request indexing of the homepage immediately

---

## Phase 5 — New Content Pages to Create

These are net-new pages. Create each as an Astro file in `src/pages/`.

---

### 5.1 Comparison: StockSentry vs Finviz

**File:** `src/pages/vs-finviz.astro`  
**Target keyword:** `StockSentry vs Finviz`  
**Title:** `StockSentry vs Finviz — Which Stock Alert Tool is Right for You?`  
**Description:** A head-to-head comparison of StockSentry and Finviz: alert quality, AI intelligence, pricing, mobile UX, and who each tool is built for.

**Page structure:**
1. Hero: "StockSentry vs Finviz — The Honest Comparison"
2. Quick verdict summary table (same structure as the pricing page competitor table, but 2-column deep-dive)
3. Section: "What Finviz is great at" (be honest — screener depth, free tier, charting)
4. Section: "What StockSentry does differently" (AI plain-English alerts, no chart watching, no broker link, swing focus)
5. Side-by-side pricing comparison
6. Who should use each
7. CTA: Start free trial

**Add to sitemap** once created.

---

### 5.2 Comparison: StockSentry vs TradingView

**File:** `src/pages/vs-tradingview.astro`  
**Target keyword:** `StockSentry vs TradingView`  
**Title:** `StockSentry vs TradingView — AI Alerts vs Manual Charting`  
**Description:** Compare StockSentry and TradingView across alerts, AI intelligence, pricing, and user experience. Find out which is better for swing traders who don't want to watch charts.

Same page structure as 5.1.

---

### 5.3 Comparison: StockSentry vs Stock Alarm

**File:** `src/pages/vs-stock-alarm.astro`  
**Target keyword:** `StockSentry vs Stock Alarm`  
**Title:** `StockSentry vs Stock Alarm — AI Analysis vs Price Triggers`

---

### 5.4 Pillar Page: Swing Trading for Busy Professionals

**File:** `src/pages/swing-trading-for-busy-professionals.astro`  
**Target keyword:** `swing trading for busy professionals`  
**Title:** `Swing Trading for Busy Professionals — The No-Chart-Watching Guide`  
**Description:** A practical guide to swing trading for people with full-time jobs. Learn how to delegate stock monitoring, build a watchlist, and let AI do the heavy lifting.

**Page structure:**
1. The problem: you want to invest but can't watch charts all day
2. Why swing trading is uniquely suited to busy investors (link to `/insights/swing-vs-day-trading`)
3. The 4-step approach: watchlist → AI monitoring → alert → act
4. How StockSentry fits into this workflow (natural product mention, not salesy)
5. Risk management for people who check their portfolio weekly (link to bear-market article)
6. Getting started in under 5 minutes
7. CTA: Alpha Club

**Internal links to include:**
- `/insights/swing-vs-day-trading`
- `/insights/three-prong-rubric`
- `/insights/bear-market-survival`
- `/pricing`
- `/performance`

---

### 5.5 Glossary Page

**File:** `src/pages/glossary.astro`  
**Target keyword:** `swing trading glossary`, `what is ATR in stocks`, `RSI explained`  
**Title:** `Stock Trading Glossary — Key Terms Explained by StockSentry`

**Terms to define** (each should be 100–150 words, hyperlink to relevant insight articles where applicable):

| Term | Link to |
|------|---------|
| ATR (Average True Range) | — |
| RSI (Relative Strength Index) | — |
| Swing Trading | `/insights/swing-vs-day-trading` |
| Stop-Loss | `/insights/bear-market-survival` |
| Confidence Score | `/insights/three-prong-rubric` |
| 3-Prong Rubric | `/insights/three-prong-rubric` |
| Morning Briefing | — |
| Earnings Blackout | — |
| Distress Circuit Breaker | — |
| Trailing Stop / ATR Ratchet | — |
| VIX (Volatility Index) | `/insights/bear-market-survival` |
| Technical Analysis | — |
| Fundamental Analysis | — |
| Macro Overlay | `/insights/three-prong-rubric` |
| Watchlist | — |
| Entry Point | — |
| Position Sizing | — |

---

### 5.6 Micro-article: What is a Confidence Score in Stock Trading?

**File:** `src/pages/insights/what-is-confidence-score.astro`  
**Target keyword:** `what is a confidence score in stock trading`  
**Title:** `What Is a Confidence Score in Stock Trading? | StockSentry`  
**Description:** A confidence score in stock trading quantifies how many bullish signals align before you act. Learn how StockSentry's 0–100% AI confidence engine works.

**Page structure:** 400–600 words
1. Definition of a confidence score
2. Why raw signals aren't enough (false positives)
3. How the 3-Prong Rubric produces a score
4. What a "good" score looks like (>70% = actionable)
5. CTA: link to `/insights/three-prong-rubric`

**Add to sitemap** once created (handled automatically if using @astrojs/sitemap).

---

## Phase 6 — Optimise Existing Insight Articles

Apply to all four files in `src/pages/insights/`.

### Checklist per article:

- [ ] Title tag ≤60 chars and contains a target keyword with search demand
- [ ] Meta description ≤155 chars with a benefit hook
- [ ] H1 matches the title tag (minor variations OK)
- [ ] At least one H2 targets a secondary keyword
- [ ] Internal link to `/pricing` somewhere in body
- [ ] Internal link to at least one other insight article
- [ ] `datePublished` and `dateModified` in JSON-LD kept up to date
- [ ] `og:image` set to a real chart/screenshot (not just logo) — `/charts/` directory already has assets

### Per-article improvements:

**`bear-market-survival.astro`**
- Title change: `"The 2022 Survival Guide | AI Stock App Insights"` → `"How AI Risk Shields Survived the 2022 Bear Market | StockSentry"` (60 chars)
- Add H2: "What the -10% Floor Protection Actually Does"
- Add internal link to `/pricing` (tie risk shields feature to a paid tier)

**`llm-stock-prediction.astro`**
- Title is already good (57 chars) ✓
- Add H2: "Why Pure LLM Stock Prediction Fails" and "The Hybrid Architecture That Works"
- Add internal link to `/insights/three-prong-rubric`

**`swing-vs-day-trading.astro`**
- Title is good (60 chars) ✓
- Add internal link to `/swing-trading-for-busy-professionals` once that page exists
- Add H2: "The Math: Why Transaction Costs Kill Day Trading Returns"

**`three-prong-rubric.astro`**
- Title is long (65 chars) — shorten to: `"The 3-Prong Rubric: Why Charts Alone Aren't Enough | StockSentry"` (66 chars — acceptable)
- Add internal link to `/insights/what-is-confidence-score` once created
- Add H2: "Technical Prong: The 14 Indicators We Use"

---

## Implementation Order Summary

| Priority | Task | File(s) | Time |
|----------|------|---------|------|
| 🔴 **1** | Fix `og:url` | `MainLayout.astro` | 5 min |
| 🔴 **2** | Remove generator meta | `MainLayout.astro` | 2 min |
| 🔴 **3** | Rewrite homepage title + H1 | `index.astro` | 10 min |
| 🔴 **4** | Fix pricing H1 + title | `pricing.astro` | 10 min |
| 🔴 **5** | Fix FAQ H1 | `faq.astro` | 5 min |
| 🟠 **6** | Add `SoftwareApplication` JSON-LD | `index.astro` | 30 min |
| 🟠 **7** | Add `Organization` JSON-LD | `MainLayout.astro` | 20 min |
| 🟠 **8** | Add `FAQPage` JSON-LD | `faq.astro` | 30 min |
| 🟠 **9** | Add `FAQPage` JSON-LD | `pricing.astro` | 20 min |
| 🟡 **10** | Fix Google Play button → `<a>` | `index.astro` | 15 min |
| 🟡 **11** | Install `@astrojs/sitemap` | `astro.config.mjs` + `package.json` | 30 min |
| 🟡 **12** | Submit GSC + request indexing | External (GSC) | 30 min |
| 🟢 **13** | Create vs-finviz page | `vs-finviz.astro` | 3–4 hrs |
| 🟢 **14** | Create vs-tradingview page | `vs-tradingview.astro` | 3–4 hrs |
| 🟢 **15** | Create swing trading pillar | `swing-trading-for-busy-professionals.astro` | 1 day |
| 🟢 **16** | Create glossary page | `glossary.astro` | 4–6 hrs |
| 🟢 **17** | Create confidence score article | `insights/what-is-confidence-score.astro` | 2 hrs |
| 🟢 **18** | Optimise 4 existing articles | `insights/*.astro` | 3–4 hrs |
| 🔵 **19** | Link building (Product Hunt, etc.) | External | Ongoing |

---

*Last updated: May 31, 2026*
