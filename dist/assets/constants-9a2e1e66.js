import{a3 as u,c as r,a as p,m as S,t as h,a4 as v,w as b}from"./index-a2f0c7ad.js";import{u as w}from"./request-14faacb8.js";import{d as D,m as H,G as g,c as C}from"./index-e92d1c66.js";import{I as o}from"./index-e2c7d3ed.js";function P(e,l){const{days:a}=l;let{hours:s,minutes:i,seconds:n,milliseconds:t}=l;if(e.includes("DD")?e=e.replace("DD",u(a)):s+=a*24,e.includes("HH")?e=e.replace("HH",u(s)):i+=s*60,e.includes("mm")?e=e.replace("mm",u(i)):n+=i*60,e.includes("ss")?e=e.replace("ss",u(n)):t+=n*1e3,e.includes("S")){const c=u(t,3);e.includes("SSS")?e=e.replace("SSS",c):e.includes("SS")?e=e.replace("SS",c.slice(0,2)):e=e.replace("S",c.charAt(0))}return e}const[f,k]=r("count-down"),x={time:p(0),format:S("HH:mm:ss"),autoStart:h,millisecond:Boolean};var I=D({name:f,props:x,emits:["change","finish"],setup(e,{emit:l,slots:a}){const{start:s,pause:i,reset:n,current:t}=v({time:+e.time,millisecond:e.millisecond,onChange:m=>l("change",m),onFinish:()=>l("finish")}),c=H(()=>P(e.format,t.value)),d=()=>{n(+e.time),e.autoStart&&s()};return g(()=>e.time,d,{immediate:!0}),w({start:s,pause:i,reset:d}),()=>C("div",{role:"timer",class:k()},[a.default?a.default(t.value):c.value])}});const T=b(I),y=[{label:"一周内",value:o.Week},{label:"一月内",value:o.Month},{label:"半年内",value:o.HalfYear},{label:"大于半年",value:o.More}],A=[{label:"就诊过",value:0},{label:"没就诊过",value:1}];export{T as C,A as f,y as t};
