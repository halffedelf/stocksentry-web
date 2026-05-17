const A=()=>{const E=document.getElementById("proof-sparkline");if(!E)return;const R=[5.12,4.74,1.95,2.92,6.08,5.4,-.18,4.41,-3.39,8.31,-1.12,.11,-9.53,-.16,1.68,.54,0,0,0,0,0,0,0,0,-.11,-.39,.52,1.33,-2.52,4.01,1.86,-.01,-4.62,-2.25,5.48,4.23,6.37,5.24,3,-4.04,-2.15,.64,3.85,-2.56,-.68,1.72,10.96,-2.62],e=[1e4];R.forEach(t=>e.push(e[e.length-1]*(1+t/100)));const S=[.35,2.78,4.54,5.29,.66,2.24,2.44,2.98,-4.66,7.02,-.8,4.62,-5.27,-2.95,3.76,-8.78,.23,-8.25,9.21,-4.08,-9.24,8.13,5.56,-5.76,6.29,-2.51,3.71,1.6,.46,6.48,3.27,-1.63,-4.74,-2.17,9.13,4.57,1.59,5.22,3.27,-4.03,5.06,3.53,1.21,2.34,2.1,-.89,5.96,-2.05],$=700,s=340,c=52,d=88,a=60,l=36,i="JetBrains Mono, monospace",b=Math.min(...e)*.94,F=Math.max(...e)*1.08,f=e.length-1,n=t=>c+($-c-d)*(t/f),x=t=>a+(s-a-l)*(1-(t-b)/(F-b)),r=[0,12,24,36,48],C=[{from:r[0],to:r[1],fill:"rgba(16,185,129,.14)",stroke:"rgba(16,185,129,.45)",label:"'21 BULL",sub:"+39.4%",color:"#34d399"},{from:r[1],to:r[2],fill:"rgba(244,63,94,.20)",stroke:"rgba(244,63,94,.60)",label:"'22 BEAR",sub:"−7.7%",color:"#fb7185"},{from:r[2],to:r[4],fill:"rgba(255,122,26,.13)",stroke:"rgba(255,122,26,.45)",label:"'23–'24",sub:"+29.1%",color:"#ffb37a"}];let p="",w="";C.forEach(t=>{const o=n(t.from),g=n(t.to),M=g-o;p+=`<rect x="${o}" y="${a}" width="${M}" height="${s-a-l}" fill="${t.fill}"/>`,p+=`<line x1="${o}" x2="${o}" y1="${a}" y2="${s-l}" stroke="${t.stroke}" stroke-width="1" stroke-dasharray="3 4"/>`,w+=`<text x="${o+M/2}" y="${a-32}" text-anchor="middle" fill="${t.color}" font-size="10" font-weight="700" font-family="${i}" letter-spacing="1.5">${t.label}</text>`,w+=`<text x="${o+M/2}" y="${a-12}" text-anchor="middle" fill="${t.color}" font-size="17" font-weight="800" font-family="${i}">${t.sub}</text>`});const z=n(r[4]);p+=`<line x1="${z}" x2="${z}" y1="${a}" y2="${s-l}" stroke="rgba(255,122,26,.45)" stroke-width="1" stroke-dasharray="3 4"/>`;const m=[1e4];S.forEach(t=>m.push(m[m.length-1]*(1+t/100)));let G="";m.forEach((t,o)=>G+=(o===0?"M":"L")+n(o).toFixed(1)+","+x(t).toFixed(1)+" ");let u="";e.forEach((t,o)=>u+=(o===0?"M":"L")+n(o).toFixed(1)+","+x(t).toFixed(1)+" ");const H=u+" L "+n(f).toFixed(1)+","+(s-l)+" L "+c+","+(s-l)+" Z";let L="";for(let t=0;t<=3;t++){const o=b+(F-b)*(t/3),g=x(o);L+=`<line x1="${c}" x2="${$-d}" y1="${g}" y2="${g}" stroke="rgba(148,163,184,.08)" stroke-width="1"/>`,L+=`<text x="${c-10}" y="${g+4}" text-anchor="end" fill="#94a3b8" font-size="11" font-family="${i}">$${(Math.round(o/500)*500/1e3).toFixed(1)}k</text>`}let B="";[["'21",r[0]],["'22",r[1]],["'23",r[2]],["'24",r[3]]].forEach(([t,o])=>{B+=`<text x="${n(o)}" y="${s-l+20}" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="500" font-family="${i}">${t}</text>`});const I=13,h=n(I),y=x(e[I]),P=`
        <line x1="${h}" x2="${h}" y1="${y-32}" y2="${y-6}" stroke="#f43f5e" stroke-width="1" stroke-dasharray="2 2"/>
        <rect x="${h-50}" y="${y-50}" width="100" height="22" rx="5" fill="rgba(244,63,94,0.18)" stroke="rgba(244,63,94,0.55)" stroke-width="1"/>
        <text x="${h}" y="${y-35}" text-anchor="middle" fill="#fb7185" font-size="12" font-weight="700" font-family="${i}">−15.77%</text>
        <circle cx="${h}" cy="${y}" r="5" fill="#f43f5e" stroke="#030712" stroke-width="2"/>
        `,v=n(f),k=x(e[f]),T="$"+Math.round(e[f]).toLocaleString(),j=(e[f]-1e4)/1e4*100,q=`
        <line x1="${v}" x2="${$-d+10}" y1="${k}" y2="${k}" stroke="rgba(255,122,26,.5)" stroke-width="1" stroke-dasharray="2 3"/>
        <circle cx="${v}" cy="${k}" r="6" fill="#ff7a1a" stroke="#030712" stroke-width="2.5"/>
        <text x="${$-d+14}" y="${k-2}" fill="#ff7a1a" font-size="18" font-weight="800" font-family="${i}">${T}</text>
        <text x="${$-d+14}" y="${k+18}" fill="#34d399" font-size="12" font-weight="700" font-family="${i}">+${j.toFixed(2)}%</text>
        `;E.innerHTML=`
        <defs>
            <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="#ff7a1a" stop-opacity="0.42"/>
            <stop offset="100%" stop-color="#ff7a1a" stop-opacity="0"/>
            </linearGradient>
        </defs>
        ${p}
        ${w}
        ${L}
        <path d="${H}" fill="url(#sg)"/>
        <path d="${u}" stroke="#ff7a1a" stroke-width="2.5" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
        ${P}
        ${q}
        ${B}
        `};document.addEventListener("astro:page-load",()=>{A(),window.lucide&&window.lucide.createIcons()});
