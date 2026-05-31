# StockSentry — 90-Day SEO Content Calendar

**Period:** June – August 2026  
**Goal:** Establish search engine presence in the "AI stock alert app" and "swing trading tools" keyword clusters.  
**Status legend:** `[ ]` = planned · `[~]` = drafting · `[x]` = published

---

## Strategy Overview

| Month | Theme | Focus |
|-------|-------|-------|
| **June** | Foundation | Technical SEO fixes + seed content that captures branded and bottom-of-funnel queries |
| **July** | Competition | Comparison pages + pillar content targeting decision-stage buyers |
| **August** | Authority | Long-form educational content + link-building push |

**Publishing cadence:** 1–2 pieces of new content per week. Quality over velocity — one well-optimised 1,200-word article beats four 300-word stubs.

---

## Month 1 — June 2026: Fix the Foundation

**North star:** Get indexed. Win branded queries. Start appearing for product-specific long-tails.

---

### Week 1 (June 1–7) — Technical + Quick Content

**Monday June 2**
- [ ] **IMPLEMENT** Phase 1 (all 5 critical fixes from implementation plan) — `og:url`, generator tag, homepage title, homepage H1, pricing H1/title, FAQ H1
- [ ] **IMPLEMENT** Phase 2 (all 4 schema blocks) — SoftwareApplication, Organization, FAQPage on /faq, FAQPage on /pricing

**Wednesday June 4**
- [ ] **IMPLEMENT** Phase 3 + 4 — Fix Google Play button aria-label; install `@astrojs/sitemap`
- [ ] **ACTION** Submit sitemap to Google Search Console; request indexing for homepage, /pricing, /faq, /performance

**Friday June 6**
- [ ] **PUBLISH** Micro-article: *"What Is a Confidence Score in Stock Trading?"*  
  URL: `/insights/what-is-confidence-score`  
  Target keyword: `confidence score stock trading`  
  Word count: ~500 words  
  Internal links: → `/insights/three-prong-rubric`, → `/pricing`

---

### Week 2 (June 9–13) — Optimise Existing Articles

The 4 existing insight articles are already well-written but not SEO-optimised. Quick wins that require no new content.

**Monday June 9**
- [ ] **OPTIMISE** `bear-market-survival.astro`
  - New title: *"How AI Risk Shields Survived the 2022 Bear Market | StockSentry"*
  - Update meta description to include "algorithmic stop-loss" 
  - Add H2: "What the -10% Floor Protection Actually Does"
  - Add internal link → `/pricing` ("see how risk shields are included in every paid plan")

**Wednesday June 11**
- [ ] **OPTIMISE** `three-prong-rubric.astro`
  - Add H2: "The 14 Technical Indicators We Evaluate"
  - Add internal link → `/insights/what-is-confidence-score`
  - Add internal link → `/pricing`

**Friday June 13**
- [ ] **OPTIMISE** `swing-vs-day-trading.astro`
  - Add H2: "The Math: Why Transaction Costs Destroy Day Trading Returns"
  - Add internal link → `/performance` (show the actual backtested returns)
  
- [ ] **OPTIMISE** `llm-stock-prediction.astro`
  - Add H2: "Why Hybrid Architecture Beats Pure LLM Prediction"
  - Add internal link → `/insights/three-prong-rubric`

---

### Week 3 (June 16–20) — First Comparison Page

**Monday June 16**
- [ ] **DRAFT** *"StockSentry vs Stock Alarm — AI Analysis vs Price Triggers"*  
  URL: `/vs-stock-alarm`  
  Target keyword: `StockSentry vs Stock Alarm`  
  Why first: Stock Alarm is the closest direct competitor (same price point, same mobile-first approach)

**Wednesday June 18**
- [ ] **PUBLISH** `vs-stock-alarm.astro`  
  Word count: 1,000–1,200 words  
  Structure: Quick verdict → feature table → pricing → who each is for → CTA  
  Internal links: → `/pricing`, → `/faq`, → `/performance`

**Friday June 20**
- [ ] **ACTION** Share the new comparison page on Reddit (`r/investing`, `r/stocks`, `r/personalfinance`) framed as "I built a tool and wrote an honest comparison vs the closest competitor" — do not spam; contribute to the thread first

---

### Week 4 (June 23–27) — Glossary Launch

A glossary page earns passive long-tail traffic from "what is [term]" queries and provides an internal linking anchor for all future articles.

**Monday June 23**
- [ ] **DRAFT** Glossary page — at minimum 12 terms from the implementation plan list

**Thursday June 26**
- [ ] **PUBLISH** `/glossary`  
  Target keywords: `swing trading glossary`, `what is ATR stocks`, `RSI explained trading`  
  Word count: 1,800–2,500 words (dictionary format, each entry 100–150 words)  
  Internal links: Every term with a related insight article links to it

**Friday June 27**
- [ ] **ACTION** Check Google Search Console — are pages starting to get impressions?  
- [ ] **ACTION** Use URL Inspection to request indexing of all new pages published this month

---

### June KPIs

| Metric | Baseline (June 1) | Target (June 30) |
|--------|-------------------|-----------------|
| Pages indexed by Google | ~0 | 10+ |
| GSC impressions | 0 | 500+ |
| GSC clicks | 0 | 20+ |
| New pages published | 0 | 3 (confidence score, glossary, vs-stock-alarm) |
| Structured data errors | 4 | 0 |

---

## Month 2 — July 2026: Win the Comparison Searches

**North star:** Intercept buyers who are actively comparing tools. These are your highest-intent visitors.

---

### Week 5 (June 30 – July 4) — Finviz Comparison

**Tuesday July 1**
- [ ] **DRAFT** *"StockSentry vs Finviz — Which Stock Alert Tool Is Right for You?"*  
  URL: `/vs-finviz`  
  Target keyword: `StockSentry vs Finviz`  
  Angle: Finviz is a screener for quants; StockSentry is an alert system for busy investors. Different jobs-to-be-done.

**Thursday July 3**
- [ ] **PUBLISH** `/vs-finviz`  
  Word count: 1,200–1,500 words  
  Be honest about Finviz strengths (free screener, depth of filters) — this builds credibility  
  Include the full comparison table from the pricing page, expanded

---

### Week 6 (July 7–11) — TradingView Comparison

**Monday July 7**
- [ ] **DRAFT** *"StockSentry vs TradingView — AI Alerts vs Manual Charting"*  
  URL: `/vs-tradingview`  
  Target keyword: `StockSentry vs TradingView`  
  Angle: TradingView requires you to sit in front of charts. StockSentry delegates the watching so you don't have to.

**Thursday July 10**
- [ ] **PUBLISH** `/vs-tradingview`  
  Word count: 1,200–1,500 words  

**Friday July 11**
- [ ] **INTERNAL LINKING AUDIT** — now that you have 3 comparison pages, link them to each other ("See also: StockSentry vs Finviz"). Also ensure the homepage and pricing page link to the comparison hub.
- [ ] Consider adding a "Compare" nav item in the site navigation

---

### Week 7 (July 14–18) — Pillar Page: Swing Trading for Busy Professionals

This is the highest-effort piece of the quarter but will drive the most long-term traffic.

**Monday July 14**
- [ ] **DRAFT** *"Swing Trading for Busy Professionals — The No-Chart-Watching Guide"*  
  URL: `/swing-trading-for-busy-professionals`  
  Target keyword: `swing trading for busy professionals`  
  Word count: 2,000–2,500 words  

**Structure:**
  1. The problem: you want to build wealth but have a full-time job (empathy-first opening)
  2. Why swing trading fits busy schedules (positions held weeks/months, not minutes)
  3. The biggest mistake busy investors make: checking too often
  4. Building a low-maintenance watchlist → link to FAQ "how to get most out of app"
  5. The morning briefing routine: 5 minutes a day
  6. What to do when you get an alert
  7. Risk management without obsession (the -10% floor concept)
  8. How StockSentry fits in (organic, ~300 words, not a sales pitch)
  9. FAQ at bottom (eligibility for FAQ schema)

**Thursday July 17**
- [ ] **PUBLISH** `/swing-trading-for-busy-professionals`

---

### Week 8 (July 21–25) — "Best Stock Alert Apps" Listicle

**Tuesday July 22**
- [ ] **DRAFT** *"Best Stock Alert Apps for Swing Traders in 2026"*  
  URL: `/insights/best-stock-alert-apps-2026`  
  Target keyword: `best stock alert apps 2026`  
  Word count: 1,500–2,000 words  

**Structure:**
  1. What to look for in a stock alert app (criteria: AI quality, mobile UX, price, privacy, trading style fit)
  2. The list (5–7 apps): StockSentry at #1, then honest assessment of each competitor
     - StockSentry — best for swing traders, AI-powered plain English alerts
     - Stock Alarm — best for price-trigger simplicity
     - TradingView — best for chart-lovers
     - Finviz — best free screener
     - Trade Ideas — best for day traders
     - Benzinga Pro — best for news-driven traders
  3. Head-to-head comparison table
  4. Verdict and CTA

**Friday July 25**
- [ ] **PUBLISH** `/insights/best-stock-alert-apps-2026`

---

### July KPIs

| Metric | Target (July 31) |
|--------|-----------------|
| Pages indexed | 18+ |
| GSC impressions | 3,000+ |
| GSC clicks | 100+ |
| Avg position for brand queries | Top 5 |
| New pages published | 5 (2 comparisons, pillar, listicle, TradingView comparison) |

---

## Month 3 — August 2026: Build Authority

**North star:** Become the authoritative voice on AI-assisted swing trading. Attract backlinks. Rank for non-branded educational queries.

---

### Week 9 (July 28 – August 1) — Link Building Push #1

**Monday July 28**
- [ ] **SUBMIT** StockSentry to Product Hunt  
  Best day: Tuesday morning (PT). Include the comparison page link and performance page in the description.

**Wednesday July 30**
- [ ] **SUBMIT** to Betalist, There's An AI For That, and AI tools directories  
  These are high-DA sites that give dofollow links to new tools.

**Friday August 1**
- [ ] **REDDIT CAMPAIGN** — Post the swing trading pillar page to:
  - `r/investing` ("I wrote a guide on swing trading for people with full-time jobs")
  - `r/personalfinance` (framed around risk management + stop-losses)
  - `r/Daytrading` (contrast: why day trading doesn't work for most people)

---

### Week 10 (August 4–8) — "How StockSentry Works" Explainer

A dedicated "how it works" page captures mid-funnel searchers who found you and want to understand before converting.

**Monday August 4**
- [ ] **DRAFT** *"How StockSentry Works — From Watchlist to Sell Alert"*  
  URL: `/how-it-works`  
  Target keyword: `how does StockSentry work`  
  Word count: 800–1,000 words  
  This is essentially an expanded, SEO-optimised version of the "How it Works" section on the homepage — pulled out into its own URL.

**Wednesday August 6**
- [ ] **PUBLISH** `/how-it-works`  
  Add `HowTo` JSON-LD schema to the page  
  Internal links: → `/pricing`, → `/insights/three-prong-rubric`, → `/faq`

---

### Week 11 (August 11–15) — "How to Set a Stop-Loss" Educational Article

High search volume informational query that naturally leads to the stop-loss alert feature.

**Monday August 11**
- [ ] **DRAFT** *"How to Set a Stop-Loss on Stocks — A Practical Guide for Swing Traders"*  
  URL: `/insights/how-to-set-stop-loss`  
  Target keywords: `how to set a stop loss`, `stock stop loss strategy`  
  Word count: 1,200–1,500 words  

**Structure:**
  1. What is a stop-loss (brief, link to glossary)
  2. Fixed percentage stop-loss (the -10% rule)
  3. ATR-based trailing stop-loss (how StockSentry uses this)
  4. When NOT to move your stop-loss
  5. The psychology of stop-loss violations
  6. How StockSentry automates stop-loss monitoring

**Thursday August 14**
- [ ] **PUBLISH** `/insights/how-to-set-stop-loss`

---

### Week 12 (August 18–22) — Link Building Push #2 + Refresh Review

**Monday August 18**
- [ ] **OUTREACH** Find 10 fintech bloggers / newsletter authors who cover retail investing tools. Email each with a personal note about the bear-market-survival article or swing-trading guide — request a mention or link. Target newsletters: Finimize, The Daily Upside, Stockstotrade blog.

**Wednesday August 20**
- [ ] **CONTENT REFRESH** Review June articles for:
  - GSC click data: which articles got impressions but not clicks? Rewrite titles/descriptions.
  - Which articles rank on page 2? Add more depth to push them to page 1.

**Friday August 22**
- [ ] **PUBLISH** Optional: *"AI vs Human Stock Analysis — Who Wins?"*  
  URL: `/insights/ai-vs-human-stock-analysis`  
  A thought-leadership piece; strong backlink magnet for finance blogs.

---

### Week 13 (August 25–29) — Quarterly Review + Q4 Planning

**Monday August 25**
- [ ] **REVIEW** GSC data: which keyword clusters are gaining traction?
- [ ] **REVIEW** Which pages have the highest time-on-page? (signals Google quality)
- [ ] **IDENTIFY** Top 5 keywords on pages 2–3 that need a push

**Wednesday August 27**
- [ ] **AUDIT** Internal link structure — every new page from this quarter should be linked from at least 2 other pages

**Friday August 29**
- [ ] **PLAN** Q4 content calendar based on what worked

---

### August KPIs

| Metric | Target (August 31) |
|--------|-------------------|
| Pages indexed | 25+ |
| GSC impressions | 10,000+ |
| GSC clicks | 400+ |
| Backlinks acquired | 10+ (directories + organic) |
| Ranking keywords | 20+ (any position) |
| Top-10 rankings | 3+ (branded + long-tail) |

---

## Full Content Inventory — End of August

| URL | Status | Primary Keyword |
|-----|--------|----------------|
| `/` | Optimised | AI stock alert app for swing traders |
| `/pricing` | Optimised | AI stock alert app pricing |
| `/performance` | Existing | AI stock app performance |
| `/faq` | Optimised | StockSentry FAQ AI stock app |
| `/glossary` | **New — June** | swing trading glossary |
| `/how-it-works` | **New — August** | how does StockSentry work |
| `/swing-trading-for-busy-professionals` | **New — July** | swing trading for busy professionals |
| `/vs-stock-alarm` | **New — June** | StockSentry vs Stock Alarm |
| `/vs-finviz` | **New — July** | StockSentry vs Finviz |
| `/vs-tradingview` | **New — July** | StockSentry vs TradingView |
| `/insights` | Existing | stock market insights |
| `/insights/llm-stock-prediction` | Optimised | can LLMs predict stock prices |
| `/insights/bear-market-survival` | Optimised | AI risk shields bear market 2022 |
| `/insights/swing-vs-day-trading` | Optimised | swing trading vs day trading |
| `/insights/three-prong-rubric` | Optimised | 3-prong trading rubric |
| `/insights/what-is-confidence-score` | **New — June** | confidence score stock trading |
| `/insights/best-stock-alert-apps-2026` | **New — July** | best stock alert apps 2026 |
| `/insights/how-to-set-stop-loss` | **New — August** | how to set a stop loss |
| `/insights/ai-vs-human-stock-analysis` | **New — August (optional)** | AI vs human stock analysis |

---

## Ongoing Weekly Habits

- **Every Monday:** Check GSC for new impressions, click-through rate changes, crawl errors
- **Every Wednesday:** 1 internal linking pass — do any new articles link back to `/pricing`?
- **Every Friday:** Schedule or publish one piece of content

---

*Last updated: May 31, 2026*
