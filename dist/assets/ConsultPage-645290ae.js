import{_ as Ae}from"./CpNavBar-aed588de.js";import{_ as je}from"./avatar-doctor-206a2b5c.js";import{O as $,C as ce}from"./index-e2c7d3ed.js";import{P as Me}from"./request-14faacb8.js";import{a as Ne,b as Be,c as $e}from"./index-4906b622.js";import{r as T,G as pe,d as ae,x as Ve,P as ze,L as qe,c as v,q as We,F as Ce,H as Fe,i as Ue,m as He,a as k,b as D,e as x,t as J,n as Xe,f as O,w as _,h as P,z as F,g as ee,p as Ye,k as Ge,_ as me,v as Je}from"./index-e92d1c66.js";import{c as Ke,U as Qe,h as Ze,m as ue,E as et,n as tt,t as Q,f as nt,r as we,e as ot,I as rt,V as at,w as it}from"./index-a2f0c7ad.js";import{B as st}from"./index-366e2f39.js";import{j as lt}from"./consult-544b3527.js";import{L as ct,T as ut,a as ft}from"./index-766fafc5.js";import"./use-placeholder-84776c27.js";import"./interceptor-a823686a.js";import"./order-e0974591.js";import"./use-route-70d6c1c8.js";import"./use-id-9e27a97e.js";import"./index-ef91f42b.js";import"./use-refs-7c3c1893.js";function L(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function he(e){var t=L(e).Element;return e instanceof t||e instanceof Element}function R(e){var t=L(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ke(e){if(typeof ShadowRoot>"u")return!1;var t=L(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var H=Math.round;function de(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function pt(){return!/^((?!chrome|android).)*safari/i.test(de())}function ne(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var o=e.getBoundingClientRect(),r=1,a=1;t&&R(e)&&(r=e.offsetWidth>0&&H(o.width)/e.offsetWidth||1,a=e.offsetHeight>0&&H(o.height)/e.offsetHeight||1);var c=he(e)?L(e):window,s=c.visualViewport,i=!pt()&&n,u=(o.left+(i&&s?s.offsetLeft:0))/r,l=(o.top+(i&&s?s.offsetTop:0))/a,d=o.width/r,m=o.height/a;return{width:d,height:m,top:l,right:u+d,bottom:l+m,left:u,x:u,y:l}}function Pe(e){var t=L(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function dt(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function vt(e){return e===L(e)||!R(e)?Pe(e):dt(e)}function A(e){return e?(e.nodeName||"").toLowerCase():null}function ie(e){return((he(e)?e.ownerDocument:e.document)||window.document).documentElement}function mt(e){return ne(ie(e)).left+Pe(e).scrollLeft}function j(e){return L(e).getComputedStyle(e)}function ye(e){var t=j(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function ht(e){var t=e.getBoundingClientRect(),n=H(t.width)/e.offsetWidth||1,o=H(t.height)/e.offsetHeight||1;return n!==1||o!==1}function yt(e,t,n){n===void 0&&(n=!1);var o=R(t),r=R(t)&&ht(t),a=ie(t),c=ne(e,r,n),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(o||!o&&!n)&&((A(t)!=="body"||ye(a))&&(s=vt(t)),R(t)?(i=ne(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=mt(a))),{x:c.left+s.scrollLeft-i.x,y:c.top+s.scrollTop-i.y,width:c.width,height:c.height}}function gt(e){var t=ne(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function ge(e){return A(e)==="html"?e:e.assignedSlot||e.parentNode||(ke(e)?e.host:null)||ie(e)}function Re(e){return["html","body","#document"].indexOf(A(e))>=0?e.ownerDocument.body:R(e)&&ye(e)?e:Re(ge(e))}function te(e,t){var n;t===void 0&&(t=[]);var o=Re(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),a=L(o),c=r?[a].concat(a.visualViewport||[],ye(o)?o:[]):o,s=t.concat(c);return r?s:s.concat(te(ge(c)))}function wt(e){return["table","td","th"].indexOf(A(e))>=0}function be(e){return!R(e)||j(e).position==="fixed"?null:e.offsetParent}function bt(e){var t=/firefox/i.test(de()),n=/Trident/i.test(de());if(n&&R(e)){var o=j(e);if(o.position==="fixed")return null}var r=ge(e);for(ke(r)&&(r=r.host);R(r)&&["html","body"].indexOf(A(r))<0;){var a=j(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function Le(e){for(var t=L(e),n=be(e);n&&wt(n)&&j(n).position==="static";)n=be(n);return n&&(A(n)==="html"||A(n)==="body"&&j(n).position==="static")?t:n||bt(e)||t}var U="top",oe="bottom",K="right",q="left",Ie="auto",Ot=[U,oe,K,q],De="start",re="end",_t=[].concat(Ot,[Ie]).reduce(function(e,t){return e.concat([t,t+"-"+De,t+"-"+re])},[]),xt="beforeRead",Et="read",St="afterRead",Ct="beforeMain",kt="main",Pt="afterMain",Rt="beforeWrite",Lt="write",It="afterWrite",ve=[xt,Et,St,Ct,kt,Pt,Rt,Lt,It];function Dt(e){var t=new Map,n=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function r(a){n.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(s){if(!n.has(s)){var i=t.get(s);i&&r(i)}}),o.push(a)}return e.forEach(function(a){n.has(a.name)||r(a)}),o}function Tt(e){var t=Dt(e);return ve.reduce(function(n,o){return n.concat(t.filter(function(r){return r.phase===o}))},[])}function At(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function N(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return[].concat(n).reduce(function(r,a){return r.replace(/%s/,a)},e)}var V='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',jt='Popper: modifier "%s" requires "%s", but "%s" modifier is not available',Oe=["name","enabled","phase","fn","effect","requires","options"];function Mt(e){e.forEach(function(t){[].concat(Object.keys(t),Oe).filter(function(n,o,r){return r.indexOf(n)===o}).forEach(function(n){switch(n){case"name":typeof t.name!="string"&&console.error(N(V,String(t.name),'"name"','"string"','"'+String(t.name)+'"'));break;case"enabled":typeof t.enabled!="boolean"&&console.error(N(V,t.name,'"enabled"','"boolean"','"'+String(t.enabled)+'"'));break;case"phase":ve.indexOf(t.phase)<0&&console.error(N(V,t.name,'"phase"',"either "+ve.join(", "),'"'+String(t.phase)+'"'));break;case"fn":typeof t.fn!="function"&&console.error(N(V,t.name,'"fn"','"function"','"'+String(t.fn)+'"'));break;case"effect":t.effect!=null&&typeof t.effect!="function"&&console.error(N(V,t.name,'"effect"','"function"','"'+String(t.fn)+'"'));break;case"requires":t.requires!=null&&!Array.isArray(t.requires)&&console.error(N(V,t.name,'"requires"','"array"','"'+String(t.requires)+'"'));break;case"requiresIfExists":Array.isArray(t.requiresIfExists)||console.error(N(V,t.name,'"requiresIfExists"','"array"','"'+String(t.requiresIfExists)+'"'));break;case"options":case"data":break;default:console.error('PopperJS: an invalid property has been provided to the "'+t.name+'" modifier, valid properties are '+Oe.map(function(o){return'"'+o+'"'}).join(", ")+'; but "'+n+'" was provided.')}t.requires&&t.requires.forEach(function(o){e.find(function(r){return r.name===o})==null&&console.error(N(jt,String(t.name),o,o))})})})}function Nt(e,t){var n=new Set;return e.filter(function(o){var r=t(o);if(!n.has(r))return n.add(r),!0})}function se(e){return e.split("-")[0]}function Bt(e){var t=e.reduce(function(n,o){var r=n[o.name];return n[o.name]=r?Object.assign({},r,o,{options:Object.assign({},r.options,o.options),data:Object.assign({},r.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}function Te(e){return e.split("-")[1]}function $t(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Vt(e){var t=e.reference,n=e.element,o=e.placement,r=o?se(o):null,a=o?Te(o):null,c=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,i;switch(r){case U:i={x:c,y:t.y-n.height};break;case oe:i={x:c,y:t.y+t.height};break;case K:i={x:t.x+t.width,y:s};break;case q:i={x:t.x-n.width,y:s};break;default:i={x:t.x,y:t.y}}var u=r?$t(r):null;if(u!=null){var l=u==="y"?"height":"width";switch(a){case De:i[u]=i[u]-(t[l]/2-n[l]/2);break;case re:i[u]=i[u]+(t[l]/2-n[l]/2);break}}return i}var _e="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",zt="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",xe={placement:"bottom",modifiers:[],strategy:"absolute"};function Ee(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function qt(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,r=t.defaultOptions,a=r===void 0?xe:r;return function(s,i,u){u===void 0&&(u=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},xe,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},d=[],m=!1,f={state:l,setOptions:function(E){var p=typeof E=="function"?E(l.options):E;g(),l.options=Object.assign({},a,l.options,p),l.scrollParents={reference:he(s)?te(s):s.contextElement?te(s.contextElement):[],popper:te(i)};var w=Tt(Bt([].concat(o,l.options.modifiers)));l.orderedModifiers=w.filter(function(C){return C.enabled});{var S=Nt([].concat(w,l.options.modifiers),function(C){var W=C.name;return W});if(Mt(S),se(l.options.placement)===Ie){var b=l.orderedModifiers.find(function(C){var W=C.name;return W==="flip"});b||console.error(['Popper: "auto" placements require the "flip" modifier be',"present and enabled to work."].join(" "))}var h=j(i),I=h.marginTop,B=h.marginRight,X=h.marginBottom,Y=h.marginLeft;[I,B,X,Y].some(function(C){return parseFloat(C)})&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding',"between the popper and its reference element or boundary.","To replicate margin, use the `offset` modifier, as well as","the `padding` option in the `preventOverflow` and `flip`","modifiers."].join(" "))}return M(),f.update()},forceUpdate:function(){if(!m){var E=l.elements,p=E.reference,w=E.popper;if(!Ee(p,w)){console.error(_e);return}l.rects={reference:yt(p,Le(w),l.options.strategy==="fixed"),popper:gt(w)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(C){return l.modifiersData[C.name]=Object.assign({},C.data)});for(var S=0,b=0;b<l.orderedModifiers.length;b++){if(S+=1,S>100){console.error(zt);break}if(l.reset===!0){l.reset=!1,b=-1;continue}var h=l.orderedModifiers[b],I=h.fn,B=h.options,X=B===void 0?{}:B,Y=h.name;typeof I=="function"&&(l=I({state:l,options:X,name:Y,instance:f})||l)}}},update:At(function(){return new Promise(function(y){f.forceUpdate(),y(l)})}),destroy:function(){g(),m=!0}};if(!Ee(s,i))return console.error(_e),f;f.setOptions(u).then(function(y){!m&&u.onFirstUpdate&&u.onFirstUpdate(y)});function M(){l.orderedModifiers.forEach(function(y){var E=y.name,p=y.options,w=p===void 0?{}:p,S=y.effect;if(typeof S=="function"){var b=S({state:l,name:E,instance:f,options:w}),h=function(){};d.push(b||h)}})}function g(){d.forEach(function(y){return y()}),d=[]}return f}}var Z={passive:!0};function Wt(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=r===void 0?!0:r,c=o.resize,s=c===void 0?!0:c,i=L(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach(function(l){l.addEventListener("scroll",n.update,Z)}),s&&i.addEventListener("resize",n.update,Z),function(){a&&u.forEach(function(l){l.removeEventListener("scroll",n.update,Z)}),s&&i.removeEventListener("resize",n.update,Z)}}var Ft={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Wt,data:{}};function Ut(e){var t=e.state,n=e.name;t.modifiersData[n]=Vt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Ht={name:"popperOffsets",enabled:!0,phase:"read",fn:Ut,data:{}},Xt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Yt(e){var t=e.x,n=e.y,o=window,r=o.devicePixelRatio||1;return{x:H(t*r)/r||0,y:H(n*r)/r||0}}function Se(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,c=e.offsets,s=e.position,i=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,d=e.isFixed,m=c.x,f=m===void 0?0:m,M=c.y,g=M===void 0?0:M,y=typeof l=="function"?l({x:f,y:g}):{x:f,y:g};f=y.x,g=y.y;var E=c.hasOwnProperty("x"),p=c.hasOwnProperty("y"),w=q,S=U,b=window;if(u){var h=Le(n),I="clientHeight",B="clientWidth";if(h===L(n)&&(h=ie(n),j(h).position!=="static"&&s==="absolute"&&(I="scrollHeight",B="scrollWidth")),h=h,r===U||(r===q||r===K)&&a===re){S=oe;var X=d&&h===b&&b.visualViewport?b.visualViewport.height:h[I];g-=X-o.height,g*=i?1:-1}if(r===q||(r===U||r===oe)&&a===re){w=K;var Y=d&&h===b&&b.visualViewport?b.visualViewport.width:h[B];f-=Y-o.width,f*=i?1:-1}}var C=Object.assign({position:s},u&&Xt),W=l===!0?Yt({x:f,y:g}):{x:f,y:g};if(f=W.x,g=W.y,i){var G;return Object.assign({},C,(G={},G[S]=p?"0":"",G[w]=E?"0":"",G.transform=(b.devicePixelRatio||1)<=1?"translate("+f+"px, "+g+"px)":"translate3d("+f+"px, "+g+"px, 0)",G))}return Object.assign({},C,(t={},t[S]=p?g+"px":"",t[w]=E?f+"px":"",t.transform="",t))}function Gt(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=o===void 0?!0:o,a=n.adaptive,c=a===void 0?!0:a,s=n.roundOffsets,i=s===void 0?!0:s;{var u=j(t.elements.popper).transitionProperty||"";c&&["transform","top","right","bottom","left"].some(function(d){return u.indexOf(d)>=0})&&console.warn(["Popper: Detected CSS transitions on at least one of the following",'CSS properties: "transform", "top", "right", "bottom", "left".',`

`,'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.",`

`,"We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "))}var l={placement:se(t.placement),variation:Te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Se(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Se(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Jt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Gt,data:{}};function Kt(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},r=t.attributes[n]||{},a=t.elements[n];!R(a)||!A(a)||(Object.assign(a.style,o),Object.keys(r).forEach(function(c){var s=r[c];s===!1?a.removeAttribute(c):a.setAttribute(c,s===!0?"":s)}))})}function Qt(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var r=t.elements[o],a=t.attributes[o]||{},c=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),s=c.reduce(function(i,u){return i[u]="",i},{});!R(r)||!A(r)||(Object.assign(r.style,s),Object.keys(a).forEach(function(i){r.removeAttribute(i)}))})}}var Zt={name:"applyStyles",enabled:!0,phase:"write",fn:Kt,effect:Qt,requires:["computeStyles"]},en=[Ft,Ht,Jt,Zt],tn=qt({defaultModifiers:en});function nn(e,t,n){var o=se(e),r=[q,U].indexOf(o)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,c=a[0],s=a[1];return c=c||0,s=(s||0)*r,[q,K].indexOf(o)>=0?{x:s,y:c}:{x:c,y:s}}function on(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=r===void 0?[0,0]:r,c=_t.reduce(function(l,d){return l[d]=nn(d,t.rects,a),l},{}),s=c[t.placement],i=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=u),t.modifiersData[o]=c}var rn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:on};const an=(e,t)=>{const n=T(e());return pe(e,o=>{o!==n.value&&(n.value=o)}),pe(n,o=>{o!==e()&&t(o)}),n},[sn,z]=Ke("popover"),ln=["overlay","duration","teleport","overlayStyle","overlayClass","closeOnClickOverlay"],cn={show:Boolean,theme:ue("light"),overlay:Boolean,actions:et(),trigger:ue("click"),duration:tt,showArrow:Q,placement:ue("bottom"),iconPrefix:String,overlayClass:nt,overlayStyle:Object,closeOnClickAction:Q,closeOnClickOverlay:Q,closeOnClickOutside:Q,offset:{type:Array,default:()=>[0,8]},teleport:{type:[String,Object],default:"body"}};var un=ae({name:sn,props:cn,emits:["select","touchstart","update:show"],setup(e,{emit:t,slots:n,attrs:o}){let r;const a=T(),c=T(),s=T(),i=an(()=>e.show,p=>t("update:show",p)),u=()=>({placement:e.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},ot({},rn,{options:{offset:e.offset}})]}),l=()=>c.value&&s.value?tn(c.value,s.value.popupRef.value,u()):null,d=()=>{Fe(()=>{i.value&&(r?r.setOptions(u()):(r=l(),we&&(window.addEventListener("animationend",d),window.addEventListener("transitionend",d))))})},m=p=>{i.value=p},f=()=>{e.trigger==="click"&&(i.value=!i.value)},M=(p,w)=>{p.disabled||(t("select",p,w),e.closeOnClickAction&&(i.value=!1))},g=()=>{i.value&&e.closeOnClickOutside&&(!e.overlay||e.closeOnClickOverlay)&&(i.value=!1)},y=(p,w)=>n.action?n.action({action:p,index:w}):[p.icon&&v(rt,{name:p.icon,classPrefix:e.iconPrefix,class:z("action-icon")},null),v("div",{class:[z("action-text"),at]},[p.text])],E=(p,w)=>{const{icon:S,color:b,disabled:h,className:I}=p;return v("div",{role:"menuitem",class:[z("action",{disabled:h,"with-icon":S}),I],style:{color:b},tabindex:h?void 0:0,"aria-disabled":h||void 0,onClick:()=>M(p,w)},[y(p,w)])};return Ve(()=>{d(),ze(()=>{var p;a.value=(p=s.value)==null?void 0:p.popupRef.value})}),qe(()=>{r&&(we&&(window.removeEventListener("animationend",d),window.removeEventListener("transitionend",d)),r.destroy(),r=null)}),pe(()=>[i.value,e.offset,e.placement],d),Qe([c,a],g,{eventName:"touchstart"}),()=>{var p;return v(Ce,null,[v("span",{ref:c,class:z("wrapper"),onClick:f},[(p=n.reference)==null?void 0:p.call(n)]),v(Me,We({ref:s,show:i.value,class:z([e.theme]),position:"",transition:"van-popover-zoom",lockScroll:!1,"onUpdate:show":m},o,Ze(e,ln)),{default:()=>[e.showArrow&&v("div",{class:z("arrow")},null),v("div",{role:"menu",class:z("content")},[n.default?n.default():e.actions.map(E)])]})])}}});const fn=it(un),le=e=>(Ye("data-v-94d75c2e"),e=e(),Ge(),e),pn={class:"consult-item"},dn={class:"head van-hairline--bottom"},vn=le(()=>x("img",{class:"img",src:je},null,-1)),mn={class:"body-row"},hn=le(()=>x("div",{class:"body-label"},"病情描述",-1)),yn={class:"body-value"},gn={class:"body-row"},wn=le(()=>x("div",{class:"body-label"},"价格",-1)),bn={class:"body-value"},On={class:"body-row"},_n=le(()=>x("div",{class:"body-label"},"创建时间",-1)),xn={class:"body-value tip"},En={key:0,class:"foot"},Sn={key:1,class:"foot"},Cn={key:2,class:"foot"},kn={key:3,class:"foot"},Pn={class:"more"},Rn={key:4,class:"foot"},Ln=ae({__name:"ConsultItem",props:{item:null},emits:["on-delete"],setup(e,{emit:t}){const n=e;Ue();const{loading:o,cancelConsultOrder:r}=Ne(),{loading:a,deleteConsultOrder:c}=Be(()=>{t("on-delete",n.item.id)}),s=T(!1),i=He(()=>[{text:"查看处方",disabled:!n.item.prescriptionId},{text:"删除订单"}]),u=(d,m)=>{m===0&&l(n.item.prescriptionId),m===1&&c(n.item)},{onShowPrescription:l}=$e();return(d,m)=>{var g;const f=st,M=fn;return k(),D("div",pn,[x("div",dn,[vn,x("p",null,J(((g=e.item.docInfo)==null?void 0:g.name)||"暂未分配医生"),1),x("span",{class:Xe({orange:e.item.status===O($).ConsultPay,green:e.item.status===O($).ConsultChat})},J(e.item.statusValue),3)]),x("div",{class:"body",onClick:m[0]||(m[0]=y=>d.$router.push(`/user/consult/${e.item.id}`))},[x("div",mn,[hn,x("div",yn,J(e.item.illnessDesc),1)]),x("div",gn,[wn,x("div",bn,"¥ "+J(e.item.payment.toFixed(2)),1)]),x("div",On,[_n,x("div",xn,J(e.item.createTime),1)])]),e.item.status===O($).ConsultPay?(k(),D("div",En,[v(f,{class:"gray",plain:"",size:"small",round:"",loading:O(o),onClick:m[1]||(m[1]=y=>O(r)(e.item))},{default:_(()=>[P("取消问诊")]),_:1},8,["loading"]),v(f,{type:"primary",plain:"",size:"small",round:"",to:`/user/consult/${e.item.id}`},{default:_(()=>[P(" 去支付 ")]),_:1},8,["to"])])):F("",!0),e.item.status===O($).ConsultWait?(k(),D("div",Sn,[v(f,{class:"gray",plain:"",size:"small",round:"",loading:O(o),onClick:m[2]||(m[2]=y=>O(r)(e.item))},{default:_(()=>[P("取消问诊")]),_:1},8,["loading"]),v(f,{type:"primary",plain:"",size:"small",round:"",to:`/room?orderId=${e.item.id}`},{default:_(()=>[P(" 继续沟通 ")]),_:1},8,["to"])])):F("",!0),e.item.status===O($).ConsultChat?(k(),D("div",Cn,[e.item.prescriptionId?(k(),ee(f,{key:0,class:"gray",plain:"",size:"small",round:""},{default:_(()=>[P(" 查看处方 ")]),_:1})):F("",!0),v(f,{type:"primary",plain:"",size:"small",round:"",to:`/room?orderId=${e.item.id}`},{default:_(()=>[P(" 继续沟通 ")]),_:1},8,["to"])])):F("",!0),e.item.status===O($).ConsultComplete?(k(),D("div",kn,[x("div",Pn,[v(M,{placement:"top-start",show:s.value,"onUpdate:show":m[3]||(m[3]=y=>s.value=y),actions:O(i),onSelect:u},{reference:_(()=>[P(" 更多 ")]),_:1},8,["show","actions"])]),v(f,{class:"gray",plain:"",size:"small",round:"",to:`/room?orderId=${e.item.id}`},{default:_(()=>[P(" 问诊记录 ")]),_:1},8,["to"]),e.item.evaluateId?(k(),ee(f,{key:1,class:"gray",plain:"",size:"small",round:""},{default:_(()=>[P(" 查看评价 ")]),_:1})):(k(),ee(f,{key:0,type:"primary",plain:"",size:"small",round:""},{default:_(()=>[P(" 去评价 ")]),_:1}))])):F("",!0),e.item.status===O($).ConsultCancel?(k(),D("div",Rn,[v(f,{class:"gray",plain:"",size:"small",round:"",loading:O(a),onClick:m[4]||(m[4]=y=>O(c)(e.item))},{default:_(()=>[P("删除订单")]),_:1},8,["loading"]),v(f,{type:"primary",plain:"",size:"small",round:"",to:"/"},{default:_(()=>[P("咨询其他医生")]),_:1})])):F("",!0)])}}});const In=me(Ln,[["__scopeId","data-v-94d75c2e"]]),Dn={class:"consult-list"},Tn=ae({__name:"ConsultList",props:{type:null},setup(e){const n=T({type:e.type,current:1,pageSize:5}),o=T(!1),r=T(!1),a=T([]),c=async()=>{const i=await lt(n.value);a.value.push(...i.data.rows),n.value.current<i.data.pageTotal?n.value.current++:r.value=!0,o.value=!1},s=i=>{a.value=a.value.filter(u=>u.id!==i),a.value.length||c()};return(i,u)=>{const l=ct;return k(),D("div",Dn,[v(l,{loading:o.value,"onUpdate:loading":u[0]||(u[0]=d=>o.value=d),finished:r.value,"finished-text":"没有更多了",onLoad:c},{default:_(()=>[(k(!0),D(Ce,null,Je(a.value,d=>(k(),ee(In,{key:d.id,item:d,onOnDelete:s},null,8,["item"]))),128))]),_:1},8,["loading","finished"])])}}});const fe=me(Tn,[["__scopeId","data-v-de1e7209"]]),An={class:"consult-page"},jn=ae({__name:"ConsultPage",setup(e){return(t,n)=>{const o=Ae,r=ut,a=ft;return k(),D("div",An,[v(o,{title:"问诊记录"}),v(a,{sticky:""},{default:_(()=>[v(r,{title:"极速问诊"},{default:_(()=>[v(fe,{type:O(ce).Fast},null,8,["type"])]),_:1}),v(r,{title:"找医生"},{default:_(()=>[v(fe,{type:O(ce).Doctor},null,8,["type"])]),_:1}),v(r,{title:"开药问诊"},{default:_(()=>[v(fe,{type:O(ce).Medication},null,8,["type"])]),_:1})]),_:1})])}}});const Zn=me(jn,[["__scopeId","data-v-1d9cec42"]]);export{Zn as default};