import{l as b,x as I,H as W,r as p,U as A,V as N,W as _,f as O,m as T,G as M,P}from"./index-e92d1c66.js";function g(e){return N()?(_(e),!0):!1}function y(e){return typeof e=="function"?e():O(e)}const w=typeof window<"u",H=()=>{};function V(e,t=!0){b()?I(e):t?e():W(e)}function D(e,t,i={}){const{immediate:s=!0}=i,n=p(!1);let u=null;function o(){u&&(clearTimeout(u),u=null)}function r(){n.value=!1,o()}function a(...c){o(),n.value=!0,u=setTimeout(()=>{n.value=!1,u=null,e(...c)},y(t))}return s&&(n.value=!0,w&&a()),g(r),{isPending:A(n),start:a,stop:r}}function F(e){var t;const i=y(e);return(t=i==null?void 0:i.$el)!=null?t:i}const E=w?window:void 0,z=w?window.navigator:void 0;function x(...e){let t,i,s,n;if(typeof e[0]=="string"||Array.isArray(e[0])?([i,s,n]=e,t=E):[t,i,s,n]=e,!t)return H;Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s]);const u=[],o=()=>{u.forEach(d=>d()),u.length=0},r=(d,m,v,h)=>(d.addEventListener(m,v,h),()=>d.removeEventListener(m,v,h)),a=M(()=>[F(t),y(n)],([d,m])=>{o(),d&&u.push(...i.flatMap(v=>s.map(h=>r(d,v,h,m))))},{immediate:!0,flush:"post"}),c=()=>{a(),o()};return g(c),c}function Q(){const e=p(!1);return b()&&I(()=>{e.value=!0}),e}function L(e){const t=Q();return T(()=>(t.value,Boolean(e())))}function Y(e,t={}){const{window:i=E}=t,s=L(()=>i&&"matchMedia"in i&&typeof i.matchMedia=="function");let n;const u=p(!1),o=c=>{u.value=c.matches},r=()=>{n&&("removeEventListener"in n?n.removeEventListener("change",o):n.removeListener(o))},a=P(()=>{s.value&&(r(),n=i.matchMedia(y(e)),"addEventListener"in n?n.addEventListener("change",o):n.addListener(o),u.value=n.matches)});return g(()=>{a(),r(),n=void 0}),u}function B(e={}){const{navigator:t=z,read:i=!1,source:s,copiedDuring:n=1500,legacy:u=!1}=e,o=L(()=>t&&"clipboard"in t),r=T(()=>o.value||u),a=p(""),c=p(!1),d=D(()=>c.value=!1,n);function m(){o.value?t.clipboard.readText().then(l=>{a.value=l}):a.value=C()}r.value&&i&&x(["copy","cut"],m);async function v(l=y(s)){r.value&&l!=null&&(o.value?await t.clipboard.writeText(l):h(l),a.value=l,c.value=!0,d.start())}function h(l){const f=document.createElement("textarea");f.value=l??"",f.style.position="absolute",f.style.opacity="0",document.body.appendChild(f),f.select(),document.execCommand("copy"),f.remove()}function C(){var l,f,S;return(S=(f=(l=document==null?void 0:document.getSelection)==null?void 0:l.call(document))==null?void 0:f.toString())!=null?S:""}return{isSupported:r,text:a,copied:c,copy:v}}function G(e={}){const{window:t=E,initialWidth:i=Number.POSITIVE_INFINITY,initialHeight:s=Number.POSITIVE_INFINITY,listenOrientation:n=!0,includeScrollbar:u=!0}=e,o=p(i),r=p(s),a=()=>{t&&(u?(o.value=t.innerWidth,r.value=t.innerHeight):(o.value=t.document.documentElement.clientWidth,r.value=t.document.documentElement.clientHeight))};if(a(),V(a),x("resize",a,{passive:!0}),n){const c=Y("(orientation: portrait)");M(c,()=>a())}return{width:o,height:r}}export{B as a,G as u};
