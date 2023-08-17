import{c as Q,t as z,n as G,a as O,u as re,G as ve,H as fe,a2 as de,$ as he,v as ge,_ as V,a1 as D,p as me,D as R,w as U,b as we}from"./index-a2f0c7ad.js";import{e as pe,u as j}from"./request-14faacb8.js";import{d as q,r as K,D as F,m as d,G as $,x as J,R as ye,Q as be,L as xe,c as A,H as Z}from"./index-e92d1c66.js";const[ee,I]=Q("swipe"),Se={loop:z,width:G,height:G,vertical:Boolean,autoplay:O(0),duration:O(500),touchable:z,lazyRender:Boolean,initialSwipe:O(0),indicatorColor:String,showIndicators:z,stopPropagation:z},te=Symbol(ee);var Te=q({name:ee,props:Se,emits:["change","dragStart","dragEnd"],setup(a,{emit:y,slots:g}){const u=K(),h=K(),t=F({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let b=!1;const r=pe(),{children:m,linkChildren:s}=re(te),i=d(()=>m.length),o=d(()=>t[a.vertical?"height":"width"]),v=d(()=>a.vertical?r.deltaY.value:r.deltaX.value),p=d(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-o.value*i.value:0),M=d(()=>o.value?Math.ceil(Math.abs(p.value)/o.value):i.value),_=d(()=>i.value*o.value),x=d(()=>(t.active+i.value)%i.value),B=d(()=>{const e=a.vertical?"vertical":"horizontal";return r.direction.value===e}),ae=d(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${t.offset}px)`};if(o.value){const l=a.vertical?"height":"width",n=a.vertical?"width":"height";e[l]=`${_.value}px`,e[n]=a[n]?`${a[n]}px`:""}return e}),ie=e=>{const{active:l}=t;return e?a.loop?R(l+e,-1,i.value):R(l+e,0,M.value):l},H=(e,l=0)=>{let n=e*o.value;a.loop||(n=Math.min(n,-p.value));let f=l-n;return a.loop||(f=R(f,p.value,0)),f},w=({pace:e=0,offset:l=0,emitChange:n})=>{if(i.value<=1)return;const{active:f}=t,c=ie(e),C=H(c,l);if(a.loop){if(m[0]&&C!==p.value){const k=C<p.value;m[0].setOffset(k?_.value:0)}if(m[i.value-1]&&C!==0){const k=C>0;m[i.value-1].setOffset(k?-_.value:0)}}t.active=c,t.offset=C,n&&c!==f&&y("change",x.value)},E=()=>{t.swiping=!0,t.active<=-1?w({pace:i.value}):t.active>=i.value&&w({pace:-i.value})},ne=()=>{E(),r.reset(),D(()=>{t.swiping=!1,w({pace:-1,emitChange:!0})})},Y=()=>{E(),r.reset(),D(()=>{t.swiping=!1,w({pace:1,emitChange:!0})})};let X;const T=()=>clearTimeout(X),P=()=>{T(),+a.autoplay>0&&i.value>1&&(X=setTimeout(()=>{Y(),P()},+a.autoplay))},S=(e=+a.initialSwipe)=>{if(!u.value)return;const l=()=>{var n,f;if(!V(u)){const c={width:u.value.offsetWidth,height:u.value.offsetHeight};t.rect=c,t.width=+((n=a.width)!=null?n:c.width),t.height=+((f=a.height)!=null?f:c.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=H(e),m.forEach(c=>{c.setOffset(0)}),P()};V(u)?Z().then(l):l()},L=()=>S(t.active);let N;const le=e=>{!a.touchable||e.touches.length>1||(r.start(e),b=!1,N=Date.now(),T(),E())},oe=e=>{a.touchable&&t.swiping&&(r.move(e),B.value&&(!a.loop&&(t.active===0&&v.value>0||t.active===i.value-1&&v.value<0)||(me(e,a.stopPropagation),w({offset:v.value}),b||(y("dragStart",{index:x.value}),b=!0))))},W=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-N,l=v.value/e;if((Math.abs(l)>.25||Math.abs(v.value)>o.value/2)&&B.value){const f=a.vertical?r.offsetY.value:r.offsetX.value;let c=0;a.loop?c=f>0?v.value>0?-1:1:0:c=-Math[v.value>0?"ceil":"floor"](v.value/o.value),w({pace:c,emitChange:!0})}else v.value&&w({pace:0});b=!1,t.swiping=!1,y("dragEnd",{index:x.value}),P()},se=(e,l={})=>{E(),r.reset(),D(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,l.immediate?D(()=>{t.swiping=!1}):t.swiping=!1,w({pace:n-t.active,emitChange:!0})})},ce=(e,l)=>{const n=l===x.value,f=n?{backgroundColor:a.indicatorColor}:void 0;return A("i",{style:f,class:I("indicator",{active:n})},null)},ue=()=>{if(g.indicator)return g.indicator({active:x.value,total:i.value});if(a.showIndicators&&i.value>1)return A("div",{class:I("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return j({prev:ne,next:Y,state:t,resize:L,swipeTo:se}),s({size:o,props:a,count:i,activeIndicator:x}),$(()=>a.initialSwipe,e=>S(+e)),$(i,()=>S(t.active)),$(()=>a.autoplay,P),$([ve,fe],L),$(de(),e=>{e==="visible"?P():T()}),J(S),ye(()=>S(t.active)),he(()=>S(t.active)),be(T),xe(T),ge("touchmove",oe,{target:h}),()=>{var e;return A("div",{ref:u,class:I()},[A("div",{ref:h,style:ae.value,class:I("track",{vertical:a.vertical}),onTouchstartPassive:le,onTouchend:W,onTouchcancel:W},[(e=g.default)==null?void 0:e.call(g)]),ue()])}}});const De=U(Te),[Pe,Ce]=Q("swipe-item");var $e=q({name:Pe,setup(a,{slots:y}){let g;const u=F({offset:0,inited:!1,mounted:!1}),{parent:h,index:t}=we(te);if(!h)return;const b=d(()=>{const s={},{vertical:i}=h.props;return h.size.value&&(s[i?"height":"width"]=`${h.size.value}px`),u.offset&&(s.transform=`translate${i?"Y":"X"}(${u.offset}px)`),s}),r=d(()=>{const{loop:s,lazyRender:i}=h.props;if(!i||g)return!0;if(!u.mounted)return!1;const o=h.activeIndicator.value,v=h.count.value-1,p=o===0&&s?v:o-1,M=o===v&&s?0:o+1;return g=t.value===o||t.value===p||t.value===M,g}),m=s=>{u.offset=s};return J(()=>{Z(()=>{u.mounted=!0})}),j({setOffset:m}),()=>{var s;return A("div",{class:Ce(),style:b.value},[r.value?(s=y.default)==null?void 0:s.call(y):null])}}});const Ie=U($e);export{De as S,Ie as a};
