import{_ as D}from"./CpIcon-8ee8332b.js";import{_ as M}from"./CpNavBar-aed588de.js";import{F as z,m as E,p as A,c as G}from"./rules-777a79d5.js";import{l as H,a as J,s as K}from"./user-b8eb9f76.js";import{d as B,c as t,u as L,r as n,o as O,a as g,b as Q,e,t as y,w as u,f as k,g as x,n as W,h as I,i as X,j as Y,p as Z,k as ee,_ as oe}from"./index-e92d1c66.js";import{s as ae,a as C}from"./request-14faacb8.js";import{c as te,t as se,m as ne,w as le,I as re}from"./index-a2f0c7ad.js";import{F as ie}from"./index-013cd62f.js";import{C as ue}from"./index-58a204d1.js";import{B as ce}from"./index-366e2f39.js";import"./use-placeholder-84776c27.js";import"./interceptor-a823686a.js";import"./index-10845d08.js";import"./use-route-70d6c1c8.js";import"./use-id-9e27a97e.js";const[de,pe]=te("divider"),me={dashed:Boolean,hairline:se,contentPosition:ne("center")};var _e=B({name:de,props:me,setup(s,{slots:d}){return()=>{var m;return t("div",{role:"separator",class:pe({dashed:s.dashed,hairline:s.hairline,[`content-${s.contentPosition}`]:!!d.default})},[(m=d.default)==null?void 0:m.call(d)])}}});const ve=le(_e),fe="/assets/qq-7e9221ab.svg",c=s=>(Z("data-v-8a963fb6"),s=s(),ee(),s),he={class:"login-page"},we={class:"login-head"},be={class:"cp-cell"},ge=c(()=>e("span",null,"我已同意",-1)),ye=c(()=>e("a",{href:"javascript:;"},"用户协议",-1)),ke=c(()=>e("span",null,"及",-1)),Ve=c(()=>e("a",{href:"javascript:;"},"隐私条款",-1)),xe={class:"cp-cell"},Ie=c(()=>e("div",{class:"cp-cell"},[e("a",{href:"javascript:;"},"忘记密码？")],-1)),Ce={class:"login-other"},Be=c(()=>e("div",{class:"icon"},[e("img",{src:fe,alt:""})],-1)),Se=B({__name:"index",setup(s){const d=L(),m=X(),S=Y(),f=n(!1),_=n(!1),p=n(""),h=n(""),w=n(""),U=async()=>{if(!f.value)return ae("请勾选用户协议");const{data:i}=r.value?await H(h.value,p.value):await J(p.value,w.value);d.setUser(i),m.replace(S.query.returnUrl||"/user"),C("登录成功")},r=n(!0),V=n(),l=n(0);let v;const P=async()=>{var i;l.value>0||(await((i=V.value)==null?void 0:i.validate("mobile")),await K(p.value,"login"),C("发送成功"),l.value=60,clearInterval(v),v=window.setInterval(()=>{l.value--,l.value<=0&&window.clearInterval(v)},1e3))};return O(()=>{window.clearInterval(v)}),(i,o)=>{const $=M,R=re,b=ie,j=D,N=ue,F=ce,q=z,T=ve;return g(),Q("div",he,[t($,{title:"","right-text":"注册",onClickRight:o[0]||(o[0]=a=>i.$router.push("/register"))}),e("div",we,[e("h3",null,y(r.value?"密码登录":"短信验证码登录"),1),e("a",{href:"javascript:;",onClick:o[1]||(o[1]=a=>r.value=!r.value)},[e("span",null,y(r.value?"短信验证码登录":"密码登录"),1),t(R,{name:"arrow"})])]),t(q,{autocomplete:"off",onSubmit:U,ref_key:"form",ref:V},{default:u(()=>[t(b,{placeholder:"请输入手机号",type:"tel",rules:k(E),modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=a=>p.value=a),name:"mobile"},null,8,["rules","modelValue"]),r.value?(g(),x(b,{key:0,placeholder:"请输入密码",type:_.value?"password":"text",rules:k(A),modelValue:h.value,"onUpdate:modelValue":o[4]||(o[4]=a=>h.value=a)},{button:u(()=>[t(j,{onClick:o[3]||(o[3]=a=>_.value=!_.value),name:`login-eye-${_.value?"on":"off"}`},null,8,["name"])]),_:1},8,["type","rules","modelValue"])):(g(),x(b,{key:1,placeholder:"短信验证码",modelValue:w.value,"onUpdate:modelValue":o[5]||(o[5]=a=>w.value=a),rules:k(G)},{button:u(()=>[e("span",{class:W(["btn-send",{active:l.value>0}]),onClick:P},y(l.value>0?`${l.value}s后再次发送`:"发送验证码"),3)]),_:1},8,["modelValue","rules"])),e("div",be,[t(N,{modelValue:f.value,"onUpdate:modelValue":o[6]||(o[6]=a=>f.value=a)},{default:u(()=>[ge,ye,ke,Ve]),_:1},8,["modelValue"])]),e("div",xe,[t(F,{block:"",round:"",type:"primary","native-type":"submit"},{default:u(()=>[I("登 录")]),_:1})]),Ie]),_:1},512),e("div",Ce,[t(T,null,{default:u(()=>[I("第三方登录")]),_:1}),Be])])}}});const He=oe(Se,[["__scopeId","data-v-8a963fb6"]]);export{He as default};