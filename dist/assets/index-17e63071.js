import{_ as y}from"./CpIcon-8ee8332b.js";import{g as S}from"./user-b8eb9f76.js";import{d as B,u as R,r as U,x as V,s as D,a as f,b as v,e as t,c as o,t as c,w as n,h as F,F as j,v as E,i as L,p as M,k as T,_ as $}from"./index-e92d1c66.js";import{s as q}from"./function-call-d016c654.js";import"./index-ea992938.js";import{I as z,d as A}from"./index-a2f0c7ad.js";import{C as G}from"./index-10845d08.js";import{I as H}from"./index-e224cb23.js";import{C as J,R as K}from"./index-53ccc05c.js";import"./request-14faacb8.js";import"./interceptor-a823686a.js";import"./index-366e2f39.js";import"./use-route-70d6c1c8.js";import"./index-bc427075.js";import"./use-placeholder-84776c27.js";const a=_=>(M("data-v-0ce43675"),_=_(),T(),_),O={class:"user-page"},P={class:"user-page-head"},Q={class:"top"},W={class:"name"},X=a(()=>t("p",null,"收藏",-1)),Y=a(()=>t("p",null,"关注",-1)),Z=a(()=>t("p",null,"积分",-1)),ee=a(()=>t("p",null,"3",-1)),oe={class:"user-page-order"},te={class:"head"},ne=a(()=>t("h3",null,"药品订单",-1)),se=a(()=>t("p",null,"待付款",-1)),ae=a(()=>t("p",null,"待发货",-1)),le=a(()=>t("p",null,"待收货",-1)),re=a(()=>t("p",null,"已完成",-1)),ce={class:"user-page-group"},_e=a(()=>t("h3",null,"快捷工具",-1)),ue=B({__name:"index",setup(_){const g=R(),b=L(),I=async()=>{await q({title:"温馨提示",message:"您确认要退出优医问诊吗？"}),g.delUser(),b.push("/login")},s=U();V(async()=>{const p=await S();s.value=p.data});const x=[{label:"我的问诊",path:"/user/consult"},{label:"我的处方",path:"/"},{label:"家庭档案",path:"/user/patient"},{label:"地址管理",path:"/user/address"},{label:"我的评价",path:"/"},{label:"官方客服",path:"/"},{label:"设置",path:"/"}];return(p,pe)=>{var m,h;const N=H,d=z,l=J,i=K,k=D("router-link"),r=y,u=A,w=G;return f(),v("div",O,[t("div",P,[t("div",Q,[o(N,{round:"",fit:"cover",src:(m=s.value)==null?void 0:m.avatar},null,8,["src"]),t("div",W,[t("p",null,c((h=s.value)==null?void 0:h.account),1),t("p",null,[o(d,{name:"edit"})])])]),o(i,null,{default:n(()=>[o(l,{span:"6"},{default:n(()=>{var e;return[t("p",null,c((e=s.value)==null?void 0:e.collectionNumber),1),X]}),_:1}),o(l,{span:"6"},{default:n(()=>{var e;return[t("p",null,c((e=s.value)==null?void 0:e.likeNumber),1),Y]}),_:1}),o(l,{span:"6"},{default:n(()=>{var e;return[t("p",null,c((e=s.value)==null?void 0:e.score),1),Z]}),_:1}),o(l,{span:"6"},{default:n(()=>{var e;return[ee,t("p",null,c((e=s.value)==null?void 0:e.couponNumber),1)]}),_:1})]),_:1})]),t("div",oe,[t("div",te,[ne,o(k,{to:"/order"},{default:n(()=>[F("全部订单 "),o(d,{name:"arrow"})]),_:1})]),o(i,null,{default:n(()=>[o(l,{span:"6"},{default:n(()=>{var e;return[o(u,{content:((e=s.value)==null?void 0:e.orderInfo.paidNumber)||""},{default:n(()=>[o(r,{name:"user-paid"})]),_:1},8,["content"]),se]}),_:1}),o(l,{span:"6"},{default:n(()=>{var e;return[o(u,{content:((e=s.value)==null?void 0:e.orderInfo.shippedNumber)||""},{default:n(()=>[o(r,{name:"user-shipped"})]),_:1},8,["content"]),ae]}),_:1}),o(l,{span:"6"},{default:n(()=>{var e;return[o(u,{content:((e=s.value)==null?void 0:e.orderInfo.receivedNumber)||""},{default:n(()=>[o(r,{name:"user-received"})]),_:1},8,["content"]),le]}),_:1}),o(l,{span:"6"},{default:n(()=>{var e;return[o(u,{content:((e=s.value)==null?void 0:e.orderInfo.finishedNumber)||""},{default:n(()=>[o(r,{name:"user-finished"})]),_:1},8,["content"]),re]}),_:1})]),_:1})]),t("div",ce,[_e,(f(),v(j,null,E(x,(e,C)=>o(w,{key:e.label,title:e.label,to:e.path,"is-link":"",border:!1},{icon:n(()=>[o(r,{name:`user-tool-0${C+1}`},null,8,["name"])]),_:2},1032,["title","to"])),64))]),t("a",{class:"logout",href:"javascript:;",onClick:I},"退出登录")])}}});const Se=$(ue,[["__scopeId","data-v-0ce43675"]]);export{Se as default};