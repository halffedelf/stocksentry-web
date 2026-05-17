import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, e as renderTemplate, r as renderComponent, h as renderSlot, i as renderHead } from './astro/server_DmvSwgss.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$Astro$4 = createAstro("https://stocksentry.bot");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Nav;
  const { currentPath } = Astro2.props;
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/performance", label: "Performance" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav id="main-nav" class="border-b border-transparent bg-dark-900/0 backdrop-blur-md fixed w-full z-50 transition-all duration-300"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16 items-center"> <a href="/" class="flex items-center gap-2"> <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M50 5L15 20V45C15 70 30 90 50 95C70 90 85 70 85 45V20L50 5Z" stroke="var(--brand-500)" stroke-width="6" stroke-linejoin="round"></path> <path d="M30 65L45 45L55 55L70 30" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="70" cy="30" r="4" fill="var(--brand-500)"></circle> </svg> <span class="text-xl font-bold text-white tracking-tight">StockSentry<span class="text-brand-500">.bot</span></span> </a> <!-- Desktop Navigation --> <div class="hidden md:flex space-x-8"> ${navLinks.map(({ href, label }) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`transition hover:text-white ${currentPath === href || href !== "/" && currentPath?.startsWith(href) ? "text-white font-medium" : "text-slate-300"}`, "class")}> ${label} </a>`)} </div> <div class="flex items-center gap-4"> <button data-tally-open="KYv4MD" data-tally-layout="modal" data-tally-hide-title="1" data-tally-auto-close="0" class="hidden sm:flex bg-brand-600 hover:bg-brand-500 text-white px-5 py-2.5 rounded-lg font-medium transition text-sm items-center gap-2 btn-hover-effect"> <i data-lucide="send" class="w-4 h-4"></i>
Apply for Access
</button> <!-- Mobile Menu Button --> <button id="mobile-menu-button" class="md:hidden text-slate-300 hover:text-white focus:outline-none p-2" aria-label="Menu"> <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> </div> <!-- Mobile Menu: Dim backdrop --> <div id="mobile-menu-overlay" class="fixed inset-0 z-[40] md:hidden pointer-events-none" style="background: rgba(0,0,0,0.6); opacity: 0; transition: opacity 0.3s ease;"></div> <!-- Mobile Menu: Glass card --> <div id="mobile-menu" class="md:hidden fixed top-[4.5rem] inset-x-4 z-[50] pointer-events-none" style="opacity: 0; transform: translateY(-12px) scale(0.97); transition: opacity 0.3s ease, transform 0.3s ease;"> <div style="background: rgba(10, 16, 36, 0.97); border: 1px solid rgba(255,255,255,0.12); border-radius: 2rem; box-shadow: 0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08); overflow: hidden;"> <div style="height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent); margin: 0 1.5rem;"></div> <div class="p-3 space-y-1 pt-4"> ${navLinks.map(({ href, label }) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute(`flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-200 ${currentPath === href || href !== "/" && currentPath?.startsWith(href) ? "text-brand-500 font-bold" : "text-white/90 hover:text-white"}`, "class")}${addAttribute(currentPath === href || href !== "/" && currentPath?.startsWith(href) ? "background: rgba(59,130,246,0.15);" : "", "style")}> <div style="width:2.25rem; height:2.25rem; border-radius:0.65rem; background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; flex-shrink:0;"> <i${addAttribute(
    label === "Home" ? "home" : label === "Experience" ? "compass" : label === "Performance" ? "line-chart" : label === "Pricing" ? "credit-card" : "help-circle",
    "data-lucide"
  )} class="w-4 h-4 text-brand-500"></i> </div> <span class="text-[15px] font-medium">${label}</span> </a>`)} </div> <div class="px-3 pb-4 pt-2"> <div style="height:1px; background:rgba(255,255,255,0.08); margin-bottom:0.75rem;"></div> <button data-tally-open="KYv4MD" data-tally-layout="modal" data-tally-hide-title="1" data-tally-auto-close="0" class="flex items-center justify-center gap-3 w-full text-white font-bold transition-all duration-200 active:scale-[0.98]" style="background: linear-gradient(135deg, var(--brand-600, #2563eb), var(--brand-500, #3b82f6)); padding:1rem; border-radius:1.25rem; box-shadow:0 4px 16px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.2); font-size:0.95rem;"> <i data-lucide="send" class="w-4 h-4"></i>
Apply for Access
</button> </div> </div> </div> </nav> `;
}, "/Users/musaahmed/cowork/stockSentry-website/src/components/Nav.astro", void 0);

const $$Astro$3 = createAstro("https://stocksentry.bot");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-slate-800 bg-dark-900 py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"> <div class="flex flex-col gap-1 text-[var(--text-muted)]"> <div class="flex items-center justify-center md:justify-start gap-2"> <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M50 5L15 20V45C15 70 30 90 50 95C70 90 85 70 85 45V20L50 5Z" stroke="var(--brand-500)" stroke-width="6" stroke-linejoin="round"></path> <path d="M30 65L45 45L55 55L70 30" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="70" cy="30" r="4" fill="var(--brand-500)"></circle> </svg> <span class="font-bold text-white">StockSentry.bot</span> <span class="text-sm">© 2026</span> </div> <span class="text-xs text-[var(--text-muted)] opacity-80">A product of Seer Labs Inc., registered in Ontario.</span> </div> <div class="flex flex-col items-center md:items-end gap-3"> <div class="flex gap-6 text-sm text-[var(--text-muted)]"> <a href="/tos" class="hover:text-white transition">Terms of Service</a> <a href="/privacy" class="hover:text-white transition">Privacy Policy</a> <a href="/refund" class="hover:text-white transition">Refund Policy</a> </div> <a href="mailto:support@stocksentry.bot" class="text-xs text-[var(--text-muted)] hover:text-white transition flex items-center gap-1"> <i data-lucide="mail" class="w-3 h-3"></i> support@stocksentry.bot
</a> </div> </div> </footer> `;
}, "/Users/musaahmed/cowork/stockSentry-website/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://stocksentry.bot");
const $$Tracker = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Tracker;
  return renderTemplate``;
}, "/Users/musaahmed/cowork/stockSentry-website/src/components/Tracker.astro", void 0);

const $$Astro$1 = createAstro("https://stocksentry.bot");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/musaahmed/cowork/stockSentry-website/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://stocksentry.bot");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description = "The AI powered bot that constantly monitors your positions. It reads the charts, examines the news, and nudges you in plain English only when it's time to act." } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/png" href="/logo.png"><meta name="generator"', "><title>", ' | StockSentry</title><script async src="https://tally.so/widgets/embed.js"><\/script>', "", '</head> <body> <div class="bg-mesh"> <div class="mesh-blob blob-1"></div> <div class="mesh-blob blob-2"></div> <div class="mesh-blob blob-3"></div> </div> ', " ", " ", " ", "   </body> </html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Nav", $$Nav, { "currentPath": currentPath }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Tracker", $$Tracker, {}));
}, "/Users/musaahmed/cowork/stockSentry-website/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
