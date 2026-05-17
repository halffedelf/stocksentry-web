const st=()=>{const t={threshold:.15,rootMargin:"0px 0px -50px 0px"},e=new IntersectionObserver(n=>{n.forEach(a=>{a.isIntersecting&&a.target.classList.add("active")})},t);document.querySelectorAll("section > div > div:first-child, .reveal-group, .reveal-direct").forEach(n=>{n.classList.add("reveal"),e.observe(n)})};document.addEventListener("astro:page-load",()=>{st(),typeof Tally<"u"&&Tally.loadEmbeds()});const lt=()=>{const t=document.getElementById("main-nav"),e=()=>{window.scrollY>10?(t?.classList.remove("bg-dark-900/0","border-transparent"),t?.classList.add("bg-dark-900/95","border-slate-800","shadow-lg")):(t?.classList.remove("bg-dark-900/95","border-slate-800","shadow-lg"),t?.classList.add("bg-dark-900/0","border-transparent"))};window.addEventListener("scroll",e),e()},dt=()=>{const t=document.getElementById("mobile-menu-button"),e=document.getElementById("mobile-menu"),n=document.getElementById("mobile-menu-overlay"),a=document.getElementById("menu-icon"),o=document.getElementById("close-icon"),r=e?.querySelectorAll("a");if(!t||!e||t.hasAttribute("data-nav-initialized"))return;let s=!1;const c=()=>{s=!0,document.body.style.overflow="hidden",e.style.opacity="1",e.style.transform="translateY(0) scale(1)",e.style.pointerEvents="auto",n&&(n.style.opacity="1",n.style.pointerEvents="auto"),a?.classList.add("hidden"),o?.classList.remove("hidden")},d=()=>{s=!1,e.style.opacity="0",e.style.transform="translateY(-12px) scale(0.97)",e.style.pointerEvents="none",n&&(n.style.opacity="0",n.style.pointerEvents="none"),a?.classList.remove("hidden"),o?.classList.add("hidden"),document.body.style.overflow=""},h=()=>s?d():c();t.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation(),h()}),n?.addEventListener("click",d),document.addEventListener("click",l=>{s&&!e.contains(l.target)&&!t.contains(l.target)&&d()}),r?.forEach(l=>{l.addEventListener("click",d)}),t.setAttribute("data-nav-initialized","true")};document.addEventListener("astro:page-load",()=>{window.lucide&&window.lucide.createIcons(),lt(),dt()});/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=([t,e,n])=>{const a=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(e).forEach(o=>{a.setAttribute(o,String(e[o]))}),n?.length&&n.forEach(o=>{const r=W(o);a.appendChild(r)}),a},ht=(t,e={})=>{const n="svg",a={...j,...e};return W([n,a,t])};/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=(...t)=>t.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim();/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase());/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=t=>{const e=ft(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=t=>Array.from(t.attributes).reduce((e,n)=>(e[n.name]=n.value,e),{}),O=t=>typeof t=="string"?t:!t||!t.class?"":t.class&&typeof t.class=="string"?t.class.split(" "):t.class&&Array.isArray(t.class)?t.class:"",B=(t,{nameAttr:e,icons:n,attrs:a})=>{const o=t.getAttribute(e);if(o==null)return;const r=mt(o),s=n[r];if(!s)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);const c=yt(t),d=ut(c)?{}:{"aria-hidden":"true"},h={...j,"data-lucide":o,...d,...a,...c},l=O(c),i=O(a),u=pt("lucide",`lucide-${o}`,...l,...i);u&&Object.assign(h,{class:u});const p=ht(s,h);return t.parentNode?.replaceChild(p,t)};/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=[["path",{d:"M10 10h4"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"}],["path",{d:"M 22 16 L 2 16"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2"}],["circle",{cx:"16",cy:"13",r:".5"}],["circle",{cx:"18",cy:"3",r:".5"}],["circle",{cx:"20",cy:"21",r:".5"}],["circle",{cx:"20",cy:"8",r:".5"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=[["path",{d:"M12 18V5"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["path",{d:"M10 12h4"}],["path",{d:"M10 8h4"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h7"}],["path",{d:"M21 10h-5.5"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"m19 9-5 5-4-4-3 3"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=[["path",{d:"M20 6 9 17l-5-5"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=[["path",{d:"m6 9 6 6 6-6"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"}],["path",{d:"m18 15 4-4"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}],["path",{d:"M12 11h.01"}],["path",{d:"M16 11h.01"}],["path",{d:"M8 11h.01"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"M12 19v3"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M5 12h14"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["polygon",{points:"12 2 19 21 12 17 5 21 12 2"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"M12 17V7"}],["path",{d:"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=[["path",{d:"M12 3v18"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7"}],["path",{d:"M7 21h10"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"m18 14 4 4-4 4"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=[["path",{d:"M16 17h6v-6"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["path",{d:"M16 7h6v6"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["path",{d:"m16 11 2 2 4-4"}],["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];/**
 * @license lucide v1.14.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=({icons:t={},nameAttr:e="data-lucide",attrs:n={},root:a=document,inTemplates:o}={})=>{if(!Object.values(t).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof a>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(a.querySelectorAll(`[${e}]`)).forEach(s=>B(s,{nameAttr:e,icons:t,attrs:n})),o&&Array.from(a.querySelectorAll("template")).forEach(c=>H({icons:t,nameAttr:e,attrs:n,root:c.content,inTemplates:o})),e==="data-lucide"){const s=a.querySelectorAll("[icon-name]");s.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(s).forEach(c=>B(c,{nameAttr:"icon-name",icons:t,attrs:n})))}},G={Send:xe,Mail:le,Scan:Ee,Binoculars:Et,MessageCircle:he,Activity:vt,Shield:ke,EyeOff:Kt,MessageSquare:pe,Sunrise:Pe,Radar:we,Brain:St,Info:re,AlertTriangle:Oe,Paperclip:ve,Mic:fe,Scale:Ae,TrendingDown:Ve,TrendingUp:Ne,UserCheck:Be,Loader2:ie,Check:Pt,Minus:me,Download:Wt,UserPlus:ze,Play:ge,ArrowLeft:Mt,MoreVertical:Gt,Menu:de,Smile:Re,DollarSign:jt,Target:De,LineChart:It,PieChart:Rt,ShieldAlert:Le,CheckCheck:Ht,Eye:Zt,Users:Ue,Clock:Ut,FileText:Jt,Share2:Se,Globe:ne,BellRing:bt,BrainCircuit:xt,MessageSquareMore:ue,Search:Te,Lock:se,CheckCircle2:Nt,MinusCircle:Ot,XCircle:zt,Building2:Ct,CreditCard:$t,Component:qt,Cpu:Xt,Navigation2:ye,Zap:Fe,Gauge:Qt,Sparkles:He,CalendarOff:kt,Compass:Ft,Home:oe,HelpCircle:Bt,ShieldCheck:Ce,Briefcase:Lt,ArrowRight:gt,CheckCircle:Vt,Copy:Yt,Database:_t,Receipt:be,GitBranch:te,GitFork:ee,ChevronDown:Dt,Bell:At,Layers:ce,BookOpen:Tt,ArrowUpRight:wt,Pill:Me,Hammer:ae,Shuffle:Ie},qe=()=>{H({icons:G})};window.lucide={createIcons:(t={})=>{H({icons:G,...t})}};document.addEventListener("astro:page-load",qe);let K,g=0,L;const k=async(t="pageview",e={})=>{const n={type:t,path:window.location.pathname,referrer:document.referrer,viewId:K,...e};try{await fetch("/api/track",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n),keepalive:!0})}catch{}},Z=()=>{K=typeof crypto.randomUUID=="function"?crypto.randomUUID():Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),g=0,k("pageview"),L&&clearInterval(L),L=setInterval(()=>{g+=15,k("heartbeat",{duration:g})},15e3)};Z();document.addEventListener("astro:after-swap",Z);window.addEventListener("beforeunload",()=>{g>0&&k("heartbeat",{duration:g})});const M="data-astro-transition-persist";function Ye(t){for(const e of document.scripts)for(const n of t.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!e.src&&e.textContent===n.textContent||e.src&&e.type===n.type&&e.src===n.src)){n.dataset.astroExec="";break}}function Xe(t){const e=document.documentElement,n=[...e.attributes].filter(({name:a})=>(e.removeAttribute(a),a.startsWith("data-astro-")));[...t.documentElement.attributes,...n].forEach(({name:a,value:o})=>e.setAttribute(a,o))}function $e(t){for(const e of Array.from(document.head.children)){const n=We(e,t);n?n.remove():e.remove()}document.head.append(...t.head.children)}function _e(t,e){e.replaceWith(t);for(const n of e.querySelectorAll(`[${M}]`)){const a=n.getAttribute(M),o=t.querySelector(`[${M}="${a}"]`);o&&(o.replaceWith(n),o.localName==="astro-island"&&Ge(n)&&!Ke(n,o)&&(n.setAttribute("ssr",""),n.setAttribute("props",o.getAttribute("props"))))}}const je=()=>{const t=document.activeElement;if(t?.closest(`[${M}]`)){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){const e=t.selectionStart,n=t.selectionEnd;return()=>C({activeElement:t,start:e,end:n})}return()=>C({activeElement:t})}else return()=>C({activeElement:null})},C=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(typeof e=="number"&&(t.selectionStart=e),typeof n=="number"&&(t.selectionEnd=n)))},We=(t,e)=>{const n=t.getAttribute(M),a=n&&e.head.querySelector(`[${M}="${n}"]`);if(a)return a;if(t.matches("link[rel=stylesheet]")){const o=t.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${o}"]`)}return null},Ge=t=>{const e=t.dataset.astroTransitionPersistProps;return e==null||e==="false"},Ke=(t,e)=>t.getAttribute("props")===e.getAttribute("props"),Ze=t=>{Ye(t),Xe(t),$e(t);const e=je();_e(t.body,document.body),e()},Je="astro:before-preparation",Qe="astro:after-preparation",tn="astro:before-swap",en="astro:after-swap",nn=t=>document.dispatchEvent(new Event(t));class J extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(e,n,a,o,r,s,c,d,h,l){super(e,n),this.from=a,this.to=o,this.direction=r,this.navigationType=s,this.sourceElement=c,this.info=d,this.newDocument=h,this.signal=l,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class an extends J{formData;loader;constructor(e,n,a,o,r,s,c,d,h,l){super(Je,{cancelable:!0},e,n,a,o,r,s,c,d),this.formData=h,this.loader=l.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class on extends J{direction;viewTransition;swap;constructor(e,n){super(tn,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument,e.signal),this.direction=e.direction,this.viewTransition=n,this.swap=()=>Ze(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function rn(t,e,n,a,o,r,s,c,d){const h=new an(t,e,n,a,o,r,window.document,s,c,d);return document.dispatchEvent(h)&&(await h.loader(),h.defaultPrevented||(nn(Qe),h.navigationType!=="traverse"&&P({scrollX,scrollY}))),h}function cn(t,e){const n=new on(t,e);return document.dispatchEvent(n),n.swap(),n}const sn=history.pushState.bind(history),A=history.replaceState.bind(history),P=t=>{history.state&&(history.scrollRestoration="manual",A({...history.state,...t},""))},D=!!document.startViewTransition,V=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),Q=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let f,y,T;const tt=t=>document.dispatchEvent(new Event(t)),et=()=>tt("astro:page-load"),ln=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},z="data-astro-transition-persist",U="data-astro-transition",I="data-astro-transition-fallback";let F,w=0;history.state?(w=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):V()&&(A({index:w,scrollX,scrollY},""),history.scrollRestoration="manual");async function dn(t,e){try{const n=await fetch(t,e),o=(n.headers.get("content-type")??"").split(";",1)[0].trim();return o!=="text/html"&&o!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:o}}catch{return null}}function nt(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function hn(){let t=Promise.resolve();for(const e of document.getElementsByTagName("script")){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const a=document.createElement("script");a.innerHTML=e.innerHTML;for(const o of e.attributes){if(o.name==="src"){const r=new Promise(s=>{a.onload=a.onerror=s});t=t.then(()=>r)}a.setAttribute(o.name,o.value)}a.dataset.astroExec="",e.replaceWith(a)}return t}const at=(t,e,n,a,o)=>{const r=Q(e,t),s=document.title;document.title=a;let c=!1;if(t.href!==location.href&&!o)if(n.history==="replace"){const d=history.state;A({...n.state,index:d.index,scrollX:d.scrollX,scrollY:d.scrollY},"",t.href)}else sn({...n.state,index:++w,scrollX:0,scrollY:0},"",t.href);if(document.title=s,T=t,r||(scrollTo({left:0,top:0,behavior:"instant"}),c=!0),o)scrollTo(o.scrollX,o.scrollY);else{if(t.hash){history.scrollRestoration="auto";const d=history.state;location.href=t.href,history.state||(A(d,""),r&&window.dispatchEvent(new PopStateEvent("popstate")))}else c||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function un(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${z}="${n.getAttribute(z)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const a=document.createElement("link");a.setAttribute("rel","preload"),a.setAttribute("as","style"),a.setAttribute("href",n.getAttribute("href")),e.push(new Promise(o=>{["load","error"].forEach(r=>a.addEventListener(r,o)),document.head.append(a)}))}return e}async function q(t,e,n,a,o){async function r(d){function h(p){const m=p.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const l=document.getAnimations();document.documentElement.setAttribute(I,d);const u=document.getAnimations().filter(p=>!l.includes(p)&&!h(p));return Promise.allSettled(u.map(p=>p.finished))}if(o==="animate"&&!n.transitionSkipped&&!t.signal.aborted)try{await r("old")}catch{}const s=document.title,c=cn(t,n.viewTransition);at(c.to,c.from,e,s,a),tt(en),o==="animate"&&(!n.transitionSkipped&&!c.signal.aborted?r("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function pn(){return f?.controller.abort(),f={controller:new AbortController}}async function ot(t,e,n,a,o){const r=pn();if(!V()||location.origin!==n.origin){r===f&&(f=void 0),location.href=n.href;return}const s=o?"traverse":a.history==="replace"?"replace":"push";if(s!=="traverse"&&P({scrollX,scrollY}),Q(e,n)&&(t!=="back"&&n.hash||t==="back"&&e.hash)){at(n,e,a,document.title,o),r===f&&(f=void 0);return}const c=await rn(e,n,t,s,a.sourceElement,a.info,r.controller.signal,a.formData,d);if(c.defaultPrevented||c.signal.aborted){r===f&&(f=void 0),c.signal.aborted||(location.href=n.href);return}async function d(i){const u=i.to.href,p={signal:i.signal};if(i.formData){p.method="POST";const v=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");p.body=v?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const m=await dn(u,p);if(m===null){i.preventDefault();return}if(m.redirected){const v=new URL(m.redirected);if(v.origin!==i.to.origin){i.preventDefault();return}i.to=v}if(F??=new DOMParser,i.newDocument=F.parseFromString(m.html,m.mediaType),i.newDocument.querySelectorAll("noscript").forEach(v=>v.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const S=un(i.newDocument);S.length&&!i.signal.aborted&&await Promise.all(S)}async function h(){if(y&&y.viewTransition){try{y.viewTransition.skipTransition()}catch{}try{await y.viewTransition.updateCallbackDone}catch{}}return y={transitionSkipped:!1}}const l=await h();if(c.signal.aborted){r===f&&(f=void 0);return}if(document.documentElement.setAttribute(U,c.direction),D)l.viewTransition=document.startViewTransition(async()=>await q(c,a,l,o));else{const i=(async()=>{await Promise.resolve(),await q(c,a,l,o,nt())})();l.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(u=>l.viewTransitionFinished=u),skipTransition:()=>{l.transitionSkipped=!0,document.documentElement.removeAttribute(I)}}}l.viewTransition?.updateCallbackDone.finally(async()=>{await hn(),et(),ln()}),l.viewTransition?.finished.finally(()=>{l.viewTransition=void 0,l===y&&(y=void 0),r===f&&(f=void 0),document.documentElement.removeAttribute(U),document.documentElement.removeAttribute(I)});try{await l.viewTransition?.updateCallbackDone}catch(i){const u=i;console.log("[astro]",u.name,u.message,u.stack)}}async function Y(t,e){await ot("forward",T,new URL(t,location.href),e??{})}function fn(t){if(!V()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,a=n>w?"forward":"back";w=n,ot(a,T,new URL(location.href),{},e)}const X=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&P({scrollX,scrollY})};{if(D||nt()!=="none")if(T=new URL(location.href),addEventListener("popstate",fn),addEventListener("load",et),"onscrollend"in window)addEventListener("scrollend",X);else{let t,e,n,a;const o=()=>{if(a!==history.state?.index){clearInterval(t),t=void 0;return}if(e===scrollY&&n===scrollX){clearInterval(t),t=void 0,X();return}else e=scrollY,n=scrollX};addEventListener("scroll",()=>{t===void 0&&(a=history.state?.index,e=scrollY,n=scrollX,t=window.setInterval(o,50))},{passive:!0})}for(const t of document.getElementsByTagName("script"))t.dataset.astroExec=""}const rt=new Set,E=new WeakSet;let R,ct,$=!1;function mn(t){$||($=!0,R??=t?.prefetchAll,ct??=t?.defaultStrategy??"hover",yn(),vn(),Mn(),wn())}function yn(){for(const t of["touchstart","mousedown"])document.body.addEventListener(t,e=>{b(e.target,"tap")&&x(e.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function vn(){let t;document.body.addEventListener("focusin",a=>{b(a.target,"hover")&&e(a)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),N(()=>{for(const a of document.getElementsByTagName("a"))E.has(a)||b(a,"hover")&&(E.add(a),a.addEventListener("mouseenter",e,{passive:!0}),a.addEventListener("mouseleave",n,{passive:!0}))});function e(a){const o=a.target.href;t&&clearTimeout(t),t=setTimeout(()=>{x(o)},80)}function n(){t&&(clearTimeout(t),t=0)}}function Mn(){let t;N(()=>{for(const e of document.getElementsByTagName("a"))E.has(e)||b(e,"viewport")&&(E.add(e),t??=gn(),t.observe(e))})}function gn(){const t=new WeakMap;return new IntersectionObserver((e,n)=>{for(const a of e){const o=a.target,r=t.get(o);a.isIntersecting?(r&&clearTimeout(r),t.set(o,setTimeout(()=>{n.unobserve(o),t.delete(o),x(o.href)},300))):r&&(clearTimeout(r),t.delete(o))}})}function wn(){N(()=>{for(const t of document.getElementsByTagName("a"))b(t,"load")&&x(t.href)})}function x(t,e){t=t.replace(/#.*/,"");const n=e?.ignoreSlowConnection??!1;if(bn(t,n))if(rt.add(t),document.createElement("link").relList?.supports?.("prefetch")&&e?.with!=="fetch"){const a=document.createElement("link");a.rel="prefetch",a.setAttribute("href",t),document.head.append(a)}else fetch(t,{priority:"low"})}function bn(t,e){if(!navigator.onLine||!e&&it())return!1;try{const n=new URL(t,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!rt.has(t)}catch{}return!1}function b(t,e){if(t?.tagName!=="A")return!1;const n=t.dataset.astroPrefetch;return n==="false"?!1:e==="tap"&&(n!=null||R)&&it()?!0:n==null&&R||n===""?e===ct:n===e}function it(){if("connection"in navigator){const t=navigator.connection;return t.saveData||/2g/.test(t.effectiveType)}return!1}function N(t){t();let e=!1;document.addEventListener("astro:page-load",()=>{if(!e){e=!0;return}t()})}function An(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function _(t){return t.dataset.astroReload!==void 0}(D||An()!=="none")&&(document.addEventListener("click",t=>{let e=t.target;if(t.composed&&(e=t.composedPath()[0]),e instanceof Element&&(e=e.closest("a, area")),!(e instanceof HTMLAnchorElement)&&!(e instanceof SVGAElement)&&!(e instanceof HTMLAreaElement))return;const n=e instanceof HTMLElement?e.target:e.target.baseVal,a=e instanceof HTMLElement?e.href:e.href.baseVal,o=new URL(a,location.href).origin;_(e)||e.hasAttribute("download")||!e.href||n&&n!=="_self"||o!==location.origin||t.button!==0||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey||t.defaultPrevented||(t.preventDefault(),Y(a,{history:e.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:e}))}),document.addEventListener("submit",t=>{let e=t.target;if(e.tagName!=="FORM"||t.defaultPrevented||_(e))return;const n=e,a=t.submitter,o=new FormData(n,a),r=typeof n.action=="string"?n.action:n.getAttribute("action"),s=typeof n.method=="string"?n.method:n.getAttribute("method");let c=a?.getAttribute("formaction")??r??location.pathname;const d=a?.getAttribute("formmethod")??s??"get";if(d==="dialog"||location.origin!==new URL(c,location.href).origin)return;const h={sourceElement:a??n};if(d==="get"){const l=new URLSearchParams(o),i=new URL(c);i.search=l.toString(),c=i.toString()}else h.formData=o;t.preventDefault(),Y(c,h)}),mn({prefetchAll:!0}));
