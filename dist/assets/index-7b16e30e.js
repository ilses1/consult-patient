import{d as S,c as t,X as k}from"./index-e92d1c66.js";import{c as B,t as I,m as P,J as T,I as h,w as v}from"./index-a2f0c7ad.js";const[w,s]=B("tag"),x={size:String,mark:Boolean,show:I,type:P("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var y=S({name:w,props:x,emits:["close"],setup(o,{slots:l,emit:r}){const c=e=>{e.stopPropagation(),r("close",e)},i=()=>o.plain?{color:o.textColor||o.color,borderColor:o.color}:{color:o.textColor,background:o.color},d=()=>{var e;const{type:u,mark:m,plain:g,round:f,size:a,closeable:C}=o,n={mark:m,plain:g,round:f};a&&(n[a]=a);const b=C&&t(h,{name:"cross",class:[s("close"),T],onClick:c},null);return t("span",{style:i(),class:s([n,u])},[(e=l.default)==null?void 0:e.call(l),b])};return()=>t(k,{name:o.closeable?"van-fade":void 0},{default:()=>[o.show?d():null]})}});const z=v(y);export{z as T};
