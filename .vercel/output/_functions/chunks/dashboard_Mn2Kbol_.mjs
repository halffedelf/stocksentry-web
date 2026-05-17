import { c as createComponent } from './astro-component_Bz5AmZRl.mjs';
import 'piccolore';
import { k as createRenderInstruction, p as maybeRenderHead, j as addAttribute, t as renderTemplate, r as renderComponent, s as renderSlot, q as renderHead } from './entrypoint_DL-G7mKK.mjs';
import 'clsx';
import { s as supabase } from './supabase_lUNhk8-s.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
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
</button> </div> </div> </div> </nav> ${renderScript($$result, "/Users/musaahmed/cowork/stockSentry-website/src/components/Nav.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/musaahmed/cowork/stockSentry-website/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-slate-800 bg-dark-900 py-12"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"> <div class="flex flex-col gap-1 text-[var(--text-muted)]"> <div class="flex items-center justify-center md:justify-start gap-2"> <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M50 5L15 20V45C15 70 30 90 50 95C70 90 85 70 85 45V20L50 5Z" stroke="var(--brand-500)" stroke-width="6" stroke-linejoin="round"></path> <path d="M30 65L45 45L55 55L70 30" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="70" cy="30" r="4" fill="var(--brand-500)"></circle> </svg> <span class="font-bold text-white">StockSentry.bot</span> <span class="text-sm">© 2026</span> </div> <span class="text-xs text-[var(--text-muted)] opacity-80">A product of Seer Labs Inc., registered in Ontario.</span> </div> <div class="flex flex-col items-center md:items-end gap-3"> <div class="flex gap-6 text-sm text-[var(--text-muted)]"> <a href="/tos" class="hover:text-white transition">Terms of Service</a> <a href="/privacy" class="hover:text-white transition">Privacy Policy</a> <a href="/refund" class="hover:text-white transition">Refund Policy</a> </div> <a href="mailto:support@stocksentry.bot" class="text-xs text-[var(--text-muted)] hover:text-white transition flex items-center gap-1"> <i data-lucide="mail" class="w-3 h-3"></i> support@stocksentry.bot
</a> </div> </div> </footer> ${renderScript($$result, "/Users/musaahmed/cowork/stockSentry-website/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/musaahmed/cowork/stockSentry-website/src/components/Footer.astro", void 0);

const $$Tracker = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Tracker;
  return renderTemplate`${renderScript($$result, "/Users/musaahmed/cowork/stockSentry-website/src/components/Tracker.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/musaahmed/cowork/stockSentry-website/src/components/Tracker.astro", void 0);

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/musaahmed/cowork/stockSentry-website/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/musaahmed/cowork/stockSentry-website/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description = "The AI powered bot that constantly monitors your positions. It reads the charts, examines the news, and nudges you in plain English only when it's time to act." } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/png" href="/logo.png"><meta name="generator"', "><title>", ' | StockSentry</title><script async src="https://tally.so/widgets/embed.js"><\/script>', "", '</head> <body> <div class="bg-mesh"> <div class="mesh-blob blob-1"></div> <div class="mesh-blob blob-2"></div> <div class="mesh-blob blob-3"></div> </div> ', " ", " ", " ", "  ", " </body> </html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Nav", $$Nav, { "currentPath": currentPath }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Tracker", $$Tracker, {}), renderScript($$result, "/Users/musaahmed/cowork/stockSentry-website/src/layouts/MainLayout.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/musaahmed/cowork/stockSentry-website/src/layouts/MainLayout.astro", void 0);

const prerender = false;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Dashboard;
  const p = Astro2.url.searchParams.get("p");
  const ADMIN_PASS = "sentry123";
  if (p !== ADMIN_PASS) {
    return Astro2.redirect("/");
  }
  const thirtyDaysAgo = /* @__PURE__ */ new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const { data: views, error } = await supabase.from("page_views").select("*").filter("created_at", "gte", thirtyDaysAgo.toISOString()).order("created_at", { ascending: false });
  if (error) {
    console.error(error);
  }
  const safeViews = views || [];
  const now = /* @__PURE__ */ new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfYesterday = new Date(startOfToday);
  startOfYesterday.setDate(startOfYesterday.getDate() - 1);
  const startOfLastWeek = new Date(startOfToday);
  startOfLastWeek.setDate(startOfLastWeek.getDate() - 7);
  const startOfLastMonth = new Date(startOfToday);
  startOfLastMonth.setDate(startOfLastMonth.getDate() - 30);
  const getStats = (filteredViews) => ({
    views: filteredViews.length,
    uniques: new Set(filteredViews.map((v) => v.daily_hash)).size
  });
  const stats = {
    today: getStats(safeViews.filter((v) => new Date(v.created_at) >= startOfToday)),
    yesterday: getStats(safeViews.filter((v) => {
      const d = new Date(v.created_at);
      return d >= startOfYesterday && d < startOfToday;
    })),
    lastWeek: getStats(safeViews.filter((v) => new Date(v.created_at) >= startOfLastWeek)),
    lastMonth: getStats(safeViews.filter((v) => new Date(v.created_at) >= startOfLastMonth))
  };
  const getTrend = (current, previous) => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return Math.round((current - previous) / previous * 100);
  };
  const trends = {
    views: getTrend(stats.today.views, stats.yesterday.views)};
  const avgDuration = safeViews.length ? Math.round(safeViews.reduce((acc, v) => acc + (v.duration_seconds || 0), 0) / safeViews.length) : 0;
  const totalViews = safeViews.length;
  const pageMap = /* @__PURE__ */ new Map();
  safeViews.forEach((v) => {
    pageMap.set(v.path, (pageMap.get(v.path) || 0) + 1);
  });
  const topPages = Array.from(pageMap.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const refMap = /* @__PURE__ */ new Map();
  safeViews.forEach((v) => {
    const ref = v.referrer || "Direct";
    refMap.set(ref, (refMap.get(ref) || 0) + 1);
  });
  const topReferrers = Array.from(refMap.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const countryMap = /* @__PURE__ */ new Map();
  safeViews.forEach((v) => {
    countryMap.set(v.country, (countryMap.get(v.country) || 0) + 1);
  });
  const topCountries = Array.from(countryMap.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Traffic Dashboard" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"> <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4"> <div> <h1 class="text-3xl font-bold text-white">Market Intelligence Dashboard</h1> <p class="text-slate-400 mt-2">Privacy-first traffic monitoring for StockSentry.bot</p> </div> <div class="bg-brand-500/10 border border-brand-500/20 px-4 py-2 rounded-lg text-brand-500 text-sm font-bold">
Real-time Stats
</div> </div> <!-- Timeframe Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"> <!-- Today --> <div class="bg-dark-800 border border-slate-700 p-6 rounded-2xl relative overflow-hidden group"> <div class="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 blur-2xl rounded-full -mr-8 -mt-8"></div> <div class="flex justify-between items-start mb-4"> <div class="text-brand-500 text-xs font-bold uppercase tracking-widest">Today</div> <div${addAttribute(`flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded ${trends.views >= 0 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`, "class")}> ${trends.views >= 0 ? "+" : ""}${trends.views}%
<i${addAttribute(trends.views >= 0 ? "trending-up" : "trending-down", "data-lucide")} class="w-3 h-3"></i> </div> </div> <div class="flex justify-between items-end"> <div> <div class="text-3xl font-bold text-white mb-1">${stats.today.views}</div> <div class="text-slate-500 text-xs">Page Views</div> </div> <div class="text-right"> <div class="text-xl font-bold text-slate-300 mb-1">${stats.today.uniques}</div> <div class="text-slate-500 text-xs">Uniques</div> </div> </div> </div> <!-- Yesterday --> <div class="bg-dark-800 border border-slate-700 p-6 rounded-2xl"> <div class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Yesterday</div> <div class="flex justify-between items-end"> <div> <div class="text-3xl font-bold text-white mb-1">${stats.yesterday.views}</div> <div class="text-slate-500 text-xs">Page Views</div> </div> <div class="text-right"> <div class="text-xl font-bold text-slate-300 mb-1">${stats.yesterday.uniques}</div> <div class="text-slate-500 text-xs">Uniques</div> </div> </div> </div> <!-- Last 7 Days --> <div class="bg-dark-800 border border-slate-700 p-6 rounded-2xl"> <div class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Last 7 Days</div> <div class="flex justify-between items-end"> <div> <div class="text-3xl font-bold text-white mb-1">${stats.lastWeek.views}</div> <div class="text-slate-500 text-xs">Page Views</div> </div> <div class="text-right"> <div class="text-xl font-bold text-slate-300 mb-1">${stats.lastWeek.uniques}</div> <div class="text-slate-500 text-xs">Uniques</div> </div> </div> </div> <!-- Last 30 Days --> <div class="bg-dark-800 border border-slate-700 p-6 rounded-2xl"> <div class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Last 30 Days</div> <div class="flex justify-between items-end"> <div> <div class="text-3xl font-bold text-white mb-1">${stats.lastMonth.views}</div> <div class="text-slate-500 text-xs">Page Views</div> </div> <div class="text-right"> <div class="text-xl font-bold text-slate-300 mb-1">${stats.lastMonth.uniques}</div> <div class="text-slate-500 text-xs">Uniques</div> </div> </div> </div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> <div class="bg-dark-800/50 border border-slate-700 p-6 rounded-2xl lg:col-span-3 text-center"> <div class="text-slate-400 text-sm mb-1">Average Engagement (All Time)</div> <div class="text-3xl font-bold text-white">${avgDuration} seconds <span class="text-sm font-normal text-slate-500">per session</span></div> </div> </div> <div class="grid lg:grid-cols-2 gap-8"> <!-- Top Pages --> <div class="bg-dark-800 border border-slate-700 rounded-2xl overflow-hidden"> <div class="p-6 border-b border-slate-700 bg-dark-900/50"> <h2 class="font-bold text-white flex items-center gap-2"> <i data-lucide="file-text" class="w-5 h-5 text-brand-500"></i> Most Visited Pages
</h2> </div> <div class="p-6"> <div class="space-y-4"> ${topPages.map(([path, count]) => renderTemplate`<div class="flex items-center justify-between"> <span class="text-slate-300 font-mono text-sm">${path}</span> <div class="flex items-center gap-4"> <div class="w-32 bg-dark-900 h-2 rounded-full overflow-hidden hidden sm:block"> <div class="bg-brand-500 h-full"${addAttribute(`width: ${totalViews > 0 ? count / totalViews * 100 : 0}%`, "style")}></div> </div> <span class="text-white font-bold">${count}</span> </div> </div>`)} </div> </div> </div> <!-- Top Referrers --> <div class="bg-dark-800 border border-slate-700 rounded-2xl overflow-hidden"> <div class="p-6 border-b border-slate-700 bg-dark-900/50"> <h2 class="font-bold text-white flex items-center gap-2"> <i data-lucide="share-2" class="w-5 h-5 text-brand-500"></i> Traffic Sources
</h2> </div> <div class="p-6"> <div class="space-y-4"> ${topReferrers.map(([ref, count]) => renderTemplate`<div class="flex items-center justify-between"> <span class="text-slate-300 text-sm truncate max-w-[200px]">${ref}</span> <span class="text-white font-bold">${count}</span> </div>`)} </div> </div> </div> <!-- Global Distribution --> <div class="bg-dark-800 border border-slate-700 rounded-2xl overflow-hidden lg:col-span-2"> <div class="p-6 border-b border-slate-700 bg-dark-900/50"> <h2 class="font-bold text-white flex items-center gap-2"> <i data-lucide="globe" class="w-5 h-5 text-brand-500"></i> Global Distribution
</h2> </div> <div class="p-6"> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> ${topCountries.map(([country, count]) => renderTemplate`<div class="flex flex-col"> <span class="text-slate-400 text-xs uppercase tracking-wider mb-1">${country}</span> <span class="text-2xl font-bold text-white">${count} <span class="text-sm font-normal text-slate-500">views</span></span> </div>`)} </div> </div> </div> </div> <!-- Recent Activity Feed --> <div class="mt-12 bg-dark-800 border border-slate-700 rounded-2xl overflow-hidden"> <div class="p-6 border-b border-slate-700 bg-dark-900/50"> <h2 class="font-bold text-white flex items-center gap-2"> <i data-lucide="activity" class="w-5 h-5 text-brand-500"></i> Real-time Feed
</h2> </div> <div class="overflow-x-auto"> <table class="w-full text-left text-sm"> <thead> <tr class="bg-dark-900/30 text-slate-400 border-b border-slate-700"> <th class="p-4 font-medium">Time</th> <th class="p-4 font-medium">Location</th> <th class="p-4 font-medium">Page</th> <th class="p-4 font-medium">Engagement</th> </tr> </thead> <tbody class="divide-y divide-slate-700"> ${safeViews.slice(0, 10).map((v) => renderTemplate`<tr class="hover:bg-dark-900/20 transition"> <td class="p-4 text-slate-300">${new Date(v.created_at).toLocaleTimeString()}</td> <td class="p-4 text-white font-medium">${v.city}, ${v.country}</td> <td class="p-4 text-slate-400 font-mono text-xs">${v.path}</td> <td class="p-4"> <span${addAttribute(`px-2 py-1 rounded text-[10px] font-bold uppercase ${v.duration_seconds > 60 ? "bg-green-500/10 text-green-500" : "bg-slate-500/10 text-slate-500"}`, "class")}> ${v.duration_seconds}s stay
</span> </td> </tr>`)} </tbody> </table> </div> </div> </div> ` })}`;
}, "/Users/musaahmed/cowork/stockSentry-website/src/pages/admin/dashboard.astro", void 0);
const $$file = "/Users/musaahmed/cowork/stockSentry-website/src/pages/admin/dashboard.astro";
const $$url = "/admin/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
