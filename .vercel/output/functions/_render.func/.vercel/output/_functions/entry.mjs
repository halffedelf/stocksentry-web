import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_fdZoRYPi.mjs';
import { manifest } from './manifest_CRtvXqhY.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/dashboard.astro.mjs');
const _page2 = () => import('./pages/api/track.astro.mjs');
const _page3 = () => import('./pages/experience.astro.mjs');
const _page4 = () => import('./pages/faq.astro.mjs');
const _page5 = () => import('./pages/performance.astro.mjs');
const _page6 = () => import('./pages/pricing.astro.mjs');
const _page7 = () => import('./pages/privacy.astro.mjs');
const _page8 = () => import('./pages/refund.astro.mjs');
const _page9 = () => import('./pages/tos.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/dashboard.astro", _page1],
    ["src/pages/api/track.ts", _page2],
    ["src/pages/experience.astro", _page3],
    ["src/pages/faq.astro", _page4],
    ["src/pages/performance.astro", _page5],
    ["src/pages/pricing.astro", _page6],
    ["src/pages/privacy.astro", _page7],
    ["src/pages/refund.astro", _page8],
    ["src/pages/tos.astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "de6ba48a-6074-4864-83fc-131830f37c53",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
