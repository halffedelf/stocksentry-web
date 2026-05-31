---
version: alpha
name: StockSentry Dark
description: A high-contrast fintech landing system with sharp navy surfaces, bright orange calls to action, and dense alert-style messaging.
colors:
  primary: "#E66A15"
  secondary: "#C7CCD6"
  tertiary: "#2B3650"
  neutral: "#030712"
  surface: "#0B1120"
  on-surface: "#FFFFFF"
  on-surface-muted: "#CFD4D7"
  border: "#334155"
  success: "#22C55E"
  error: "#EF4444"
  accent-glow: "#1F3B73"
typography:
  headline-display:
    fontFamily: ui-sans-serif
    fontSize: 48px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: 0px
  headline-lg:
    fontFamily: ui-sans-serif
    fontSize: 38px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: 0px
  headline-md:
    fontFamily: ui-sans-serif
    fontSize: 29px
    fontWeight: 700
    lineHeight: 35px
    letterSpacing: 0px
  headline-sm:
    fontFamily: ui-sans-serif
    fontSize: 23px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: 0px
  body-lg:
    fontFamily: ui-sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 29px
    letterSpacing: 0px
  body-md:
    fontFamily: ui-sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
    letterSpacing: 0px
  body-sm:
    fontFamily: ui-sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  label-lg:
    fontFamily: ui-sans-serif
    fontSize: 16px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 0px
  label-md:
    fontFamily: ui-sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 14px
    letterSpacing: 0px
  label-sm:
    fontFamily: ui-sans-serif
    fontSize: 12px
    fontWeight: 600
    lineHeight: 12px
    letterSpacing: 0.04em
  caption:
    fontFamily: ui-sans-serif
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 0px
  overline:
    fontFamily: ui-sans-serif
    fontSize: 12px
    fontWeight: 700
    lineHeight: 12px
    letterSpacing: 0.08em
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  xl: 16px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 28px
  lg: 40px
  xl: 64px
  gutter: 24px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: 10px 20px
    height: 40px
  button-primary-hover:
    backgroundColor: "#F07A2A"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: 10px 20px
    height: 40px
  button-secondary-hover:
    backgroundColor: "#111A2E"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: 0px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body-sm}"
    rounded: "2px 16px 16px"
    padding: 14px
  input:
    backgroundColor: "#0A1324"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: 10px 16px
    height: 40px
  chip:
    backgroundColor: "#10192B"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  badge:
    backgroundColor: "#1A2438"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 10px
---

# StockSentry Dark

## Overview
StockSentry feels like a focused, high-stakes fintech product for traders who want speed, confidence, and a sense of control. The tone is professional and assertive, with a dramatic dark backdrop and a vivid orange accent that signals urgency and action. The layout is spacious at the page level but dense inside the product mockups, balancing premium marketing polish with alert-driven utility.

## Colors
- **Primary (#E66A15):** A saturated safety-orange used for the main CTA, highlight words, status pills, and micro-icons. It carries the brand’s energy and gives the interface a decisive, “act now” feeling.
- **Neutral / Background (#030712):** An almost-black navy that defines the overall canvas. It creates maximum contrast for white text and lets the orange accents glow strongly.
- **Surface (#0B1120):** A deep card and panel color used for the mobile mockup, alert blocks, and raised content areas. It is only slightly lighter than the background, keeping the UI moody and cohesive.
- **On-surface (#FFFFFF):** Pure white for headlines, navigation, button labels, and the most important emphasis. It ensures clarity and keeps the hierarchy crisp.
- **On-surface-muted (#CFD4D7):** A cool light gray for supporting body copy, metadata, and secondary labels. It softens the reading experience without losing legibility.
- **Secondary (#C7CCD6):** A restrained desaturated gray-blue used when text needs to recede further than white but remain visible against dark surfaces.
- **Border (#334155):** A slate border color for cards, inputs, and structural dividers. It replaces heavy shadow with precise outlines.
- **Error (#EF4444):** Used for negative alert states, warning badges, and sell/stop-loss messaging. It adds urgency without competing with the primary orange.
- **Accent Glow (#1F3B73):** A deep electric blue used as a subtle atmospheric glow in the hero background, helping the composition feel cinematic and layered.

## Typography
The system uses a clean `ui-sans-serif` stack with strong weight contrast rather than decorative branding fonts. Headlines are bold and compact: `headline-display` and `headline-lg` create the dominant marketing statements, while `headline-md` and `headline-sm` support section titles and card headers. Body copy is relatively large and readable (`body-lg` and `body-md`), reflecting a product that wants to communicate trust and clarity quickly.

Labels and badges use medium-to-bold weights with tight line-height for a more app-like, operational feel. Small uppercase-style chips, such as the “REAL-TIME PERFORMANCE” pill, rely on increased letter spacing (`overline`) to reinforce an alert/terminal aesthetic. The overall typographic rhythm is sharp, modern, and highly legible, with no serif contrast or ornamental styling.

## Layout & Spacing
The page uses a wide, hero-led landing layout with large negative space around the main message and device preview. Content is arranged in two primary zones: a left-aligned marketing column and a right-aligned product mockup, which creates an immediate narrative hierarchy. Sections below continue this pattern with centered headings and generous breathing room.

Spacing should follow the provided scale: `xs` for tight internal gaps, `sm` and `md` for component spacing, and `lg` to `xl` for section breaks and major vertical rhythm. Buttons and chips use compact padding, while cards use modest internal padding to feel information-dense. The overall feel is spacious at the macro level and efficient at the micro level.

## Elevation & Depth
Depth is subtle and mostly achieved through tonal separation, borders, and selective glow rather than dramatic shadow stacks. The main surfaces are nearly flat, with `border` lines outlining cards and inputs to keep the interface crisp in dark mode. The hero background adds a soft blue-to-orange atmospheric gradient, which gives the composition cinematic depth without making elements feel bulky.

Card shadow treatment is restrained and inset-like, supporting the sense of a technical dashboard rather than a glossy consumer app. Strong foreground contrast does most of the hierarchy work, so elevation should never overwhelm the content.

## Shapes
The shape language is a mix of controlled sharpness and selective softness. Most interactive elements use small-to-medium radii: `rounded.md` and `rounded.lg` for buttons, pills, and inputs, while cards can use the asymmetric `2px 16px 16px` treatment seen in the source. This creates a distinctive, engineered feel rather than a universally rounded one.

Full pills (`rounded.full`) are reserved for chips, badges, and compact status indicators. Use minimal rounding on structural containers and slightly more rounding on action surfaces to keep the system balanced between technical and approachable.

## Components
Buttons are the most expressive component in the system.
- `button-primary` is the dominant CTA: orange background, white text, 40px height, and 10px/20px padding. It should read as immediate and high priority.
- `button-primary-hover` can brighten slightly, but should stay within the same orange family.
- `button-secondary` is a dark-outline button with a transparent fill and white text. It is appropriate for secondary actions like “View Example Alerts.”
- `button-secondary-hover` should deepen the surface tone rather than introduce a new accent color.
- `button-link` is reserved for inline or low-emphasis actions; keep it text-only and unboxed.

Cards should use `card` styling: deep navy surface, slate border, compact padding, and muted text. They should feel like contained alert panels or product modules, not decorative tiles. Keep internal sections separated by thin borders or tonal blocks when additional hierarchy is needed.

Inputs should remain compact and technical. Use the `input` token for message fields and form controls: dark background, muted text, pill-like radius, and modest padding. Focus states should be visible through border brightening or subtle glow, not oversized shadows.

Chips and badges should stay small, highly legible, and tightly padded. Use `chip` for status pills like monitoring or performance tags, and `badge` for alert markers and metadata labels. These elements rely on contrast and spacing more than size.

Lists and stacked alert items should feel dense but breathable: use small gaps, muted metadata, and strong headline text. When icons appear, they should be compact and orange or status-colored, never overly illustrative.

## Do's and Don'ts
- Do keep the background nearly black and let orange carry the brand accent.
- Do use large, bold headlines with minimal letter spacing for the hero and section titles.
- Do separate content with borders and tonal surfaces instead of heavy shadows.
- Do keep buttons compact, with one clear primary action and one quieter secondary option.
- Do preserve the alert/dashboard tone in cards and mockups; write like a trading tool, not a lifestyle brand.
- Don't introduce bright multi-color palettes or playful gradients that weaken the serious fintech tone.
- Don't use overly round corners on core surfaces; keep the interface controlled and engineered.
- Don't make body copy too small or too light; readability and trust are essential.