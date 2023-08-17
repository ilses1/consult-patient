import{_ as y}from"./CpRadioBtn-62ab35da.js";import{_ as F}from"./CpIcon-8ee8332b.js";import{_ as k}from"./CpNavBar-aed588de.js";import{_ as w}from"./avatar-doctor-206a2b5c.js";import{I as r}from"./index-e2c7d3ed.js";import{u as B}from"./consult-544b3527.js";import{d as U,y as M,x as S,r as f,m as A,a as N,b as O,c as n,e as l,w as z,h as R,n as E,f as H,i as L,p as P,k as W,_ as Y}from"./index-e92d1c66.js";import{U as j}from"./index-db79bab3.js";import{s as q}from"./function-call-d016c654.js";import{s as _}from"./request-14faacb8.js";import{F as G}from"./index-013cd62f.js";import{B as J}from"./index-366e2f39.js";import"./use-placeholder-84776c27.js";import"./index-a2f0c7ad.js";import"./index-ef91f42b.js";import"./index-e224cb23.js";import"./interceptor-a823686a.js";import"./index-bc427075.js";import"./use-route-70d6c1c8.js";import"./index-10845d08.js";import"./use-id-9e27a97e.js";const i=u=>(P("data-v-7f7fdc96"),u=u(),W(),u),K={class:"consult-illness-page"},Q={class:"illness-tip van-hairline--bottom"},X=i(()=>l("img",{class:"img",src:w},null,-1)),Z={class:"info"},$=i(()=>l("p",{class:"tit"},"在线医生",-1)),ss=i(()=>l("p",{class:"tip"},"请描述你的疾病或症状、是否用药、就诊经历，需要我听过什么样的帮助",-1)),es={class:"safe"},os=i(()=>l("span",null,"内容仅医生可见",-1)),ls={class:"illness-form"},ts={class:"item"},as=i(()=>l("p",null,"本次患病多久了？",-1)),ns={class:"item"},is=i(()=>l("p",null,"此次病情是否去医院就诊过？",-1)),us={class:"illness-img"},cs=i(()=>l("p",{class:"tip"},"上传内容仅医生可见,最多9张图,最大5MB",-1)),rs=U({__name:"ConsultIllness",setup(u){const p=M(),v=L();S(()=>{p.consult.illnessDesc&&q({title:"温馨提示",message:"是否恢复您之前填写的病情信息呢？",closeOnPopstate:!1}).then(()=>{const{illnessDesc:o,illnessTime:e,consultFlag:t,pictures:c}=p.consult;s.value={illnessDesc:o,illnessTime:e,consultFlag:t,pictures:c},d.value=c||[]})});const g=()=>{if(!s.value.illnessDesc)return _("请输入病情描述");if(s.value.illnessTime===void 0)return _("请选择症状持续时间");if(s.value.consultFlag===void 0)return _("请选择是否已经就诊");p.setIllness(s.value),v.push("/user/patient?isChange=1")},h=[{label:"一周内",value:r.Week},{label:"一月内",value:r.Month},{label:"半年内",value:r.HalfYear},{label:"大于半年",value:r.More}],V=[{label:"就诊过",value:1},{label:"没就诊过",value:0}],s=f({illnessDesc:"",illnessTime:void 0,consultFlag:void 0,pictures:[]}),d=f([]),b=o=>{Array.isArray(o)||o.file&&(o.status="uploading",o.message="上传中...",B(o.file).then(e=>{var t;o.status="done",o.message=void 0,o.url=e.data.url,(t=s.value.pictures)==null||t.push(e.data)}).catch(()=>{o.status="failed",o.message="上传失败"}))},x=o=>{var e;s.value.pictures=(e=s.value.pictures)==null?void 0:e.filter(t=>t.url!==o.url)},I=A(()=>!s.value.illnessDesc||s.value.illnessTime===void 0||s.value.consultFlag===void 0);return(o,e)=>{const t=k,c=F,C=G,m=y,D=j,T=J;return N(),O("div",K,[n(t,{title:"图文问诊"}),l("div",Q,[X,l("div",Z,[$,ss,l("p",es,[n(c,{name:"consult-safe"}),os])])]),l("div",ls,[n(C,{type:"textarea",rows:"3",placeholder:"请详细描述您的病情，病情描述不能为空",modelValue:s.value.illnessDesc,"onUpdate:modelValue":e[0]||(e[0]=a=>s.value.illnessDesc=a)},null,8,["modelValue"]),l("div",ts,[as,n(m,{options:h,modelValue:s.value.illnessTime,"onUpdate:modelValue":e[1]||(e[1]=a=>s.value.illnessTime=a)},null,8,["modelValue"])]),l("div",ns,[is,n(m,{options:V,modelValue:s.value.consultFlag,"onUpdate:modelValue":e[2]||(e[2]=a=>s.value.consultFlag=a)},null,8,["modelValue"])])]),l("div",us,[n(D,{"after-read":b,onDelete:x,modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=a=>d.value=a),"max-count":"9","max-size":5*1024*1024,"upload-icon":"photo-o","upload-text":"上传图片"},null,8,["modelValue"]),cs]),n(T,{class:E({disabled:H(I)}),onClick:g,type:"primary",block:"",round:""},{default:z(()=>[R("下一步")]),_:1},8,["class"])])}}});const Ms=Y(rs,[["__scopeId","data-v-7f7fdc96"]]);export{Ms as default};
