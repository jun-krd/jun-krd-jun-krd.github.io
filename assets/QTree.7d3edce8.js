import{u as J,p as se,h as f,M as fe,A as he,C as ve,r as H,ax as ye,j as K,w as V,l as ke,q as be,aF as ge,aW as xe,$ as W,aY as _e,al as Z,I as Te,aZ as qe,a_ as G}from"./index.796e9a09.js";var Se=J({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(l,{slots:q,emit:g}){let _=!1,T,S,y=null,k=null,h,C;function m(){T&&T(),T=null,_=!1,y!==null&&(clearTimeout(y),y=null),k!==null&&(clearTimeout(k),k=null),S!==void 0&&S.removeEventListener("transitionend",h),h=null}function F(c,x,o){x!==void 0&&(c.style.height=`${x}px`),c.style.transition=`height ${l.duration}ms cubic-bezier(.25, .8, .50, 1)`,_=!0,T=o}function $(c,x){c.style.overflowY=null,c.style.height=null,c.style.transition=null,m(),x!==C&&g(x)}function L(c,x){let o=0;S=c,_===!0?(m(),o=c.offsetHeight===c.scrollHeight?0:void 0):(C="hide",c.style.overflowY="hidden"),F(c,o,x),y=setTimeout(()=>{y=null,c.style.height=`${c.scrollHeight}px`,h=b=>{k=null,(Object(b)!==b||b.target===c)&&$(c,"show")},c.addEventListener("transitionend",h),k=setTimeout(h,l.duration*1.1)},100)}function w(c,x){let o;S=c,_===!0?m():(C="show",c.style.overflowY="hidden",o=c.scrollHeight),F(c,o,x),y=setTimeout(()=>{y=null,c.style.height=0,h=b=>{k=null,(Object(b)!==b||b.target===c)&&$(c,"hide")},c.addEventListener("transitionend",h),k=setTimeout(h,l.duration*1.1)},100)}return se(()=>{_===!0&&m()}),()=>f(fe,{css:!1,appear:l.appear,onEnter:L,onLeave:w},q.default)}});const Ke=["none","strict","leaf","leaf-filtered"];var me=J({name:"QTree",props:{...he,nodes:{type:Array,required:!0},nodeKey:{type:String,required:!0},labelKey:{type:String,default:"label"},childrenKey:{type:String,default:"children"},dense:Boolean,color:String,controlColor:String,textColor:String,selectedColor:String,icon:String,tickStrategy:{type:String,default:"none",validator:l=>Ke.includes(l)},ticked:Array,expanded:Array,selected:{},noSelectionUnset:Boolean,defaultExpandAll:Boolean,accordion:Boolean,filter:String,filterMethod:Function,duration:{},noConnectors:Boolean,noTransition:Boolean,noNodesLabel:String,noResultsLabel:String},emits:["update:expanded","update:ticked","update:selected","lazyLoad","afterShow","afterHide"],setup(l,{slots:q,emit:g}){const{proxy:_}=ke(),{$q:T}=_,S=ve(l,T),y=H({}),k=H(l.ticked||[]),h=H(l.expanded||[]);let C={};ye(()=>{C={}});const m=K(()=>`q-tree q-tree--${l.dense===!0?"dense":"standard"}`+(l.noConnectors===!0?" q-tree--no-connectors":"")+(S.value===!0?" q-tree--dark":"")+(l.color!==void 0?` text-${l.color}`:"")),F=K(()=>l.selected!==void 0),$=K(()=>l.icon||T.iconSet.tree.icon),L=K(()=>l.controlColor||l.color),w=K(()=>l.textColor!==void 0?` text-${l.textColor}`:""),c=K(()=>{const t=l.selectedColor||l.color;return t?` text-${t}`:""}),x=K(()=>l.filterMethod!==void 0?l.filterMethod:(t,i)=>{const e=i.toLowerCase();return t[l.labelKey]&&t[l.labelKey].toLowerCase().indexOf(e)!==-1}),o=K(()=>{const t={},i=(e,r)=>{const n=e.tickStrategy||(r?r.tickStrategy:l.tickStrategy),d=e[l.nodeKey],u=e[l.childrenKey]&&Array.isArray(e[l.childrenKey])&&e[l.childrenKey].length!==0,E=e.disabled!==!0&&F.value===!0&&e.selectable!==!1,v=e.disabled!==!0&&e.expandable!==!1,ue=n!=="none",N=n==="strict",Y=n==="leaf-filtered",O=n==="leaf"||n==="leaf-filtered";let Q=e.disabled!==!0&&e.tickable!==!1;O===!0&&Q===!0&&r&&r.tickable!==!0&&(Q=!1);let A=e.lazy;A===!0&&y.value[d]!==void 0&&Array.isArray(e[l.childrenKey])===!0&&(A=y.value[d]);const a={key:d,parent:r,isParent:u,lazy:A,disabled:e.disabled,link:e.disabled!==!0&&(E===!0||v===!0&&(u===!0||A===!0)),children:[],matchesFilter:l.filter?x.value(e,l.filter):!0,selected:d===l.selected&&E===!0,selectable:E,expanded:u===!0?h.value.includes(d):!1,expandable:v,noTick:e.noTick===!0||N!==!0&&A&&A!=="loaded",tickable:Q,tickStrategy:n,hasTicking:ue,strictTicking:N,leafFilteredTicking:Y,leafTicking:O,ticked:N===!0?k.value.includes(d):u===!0?!1:k.value.includes(d)};if(t[d]=a,u===!0&&(a.children=e[l.childrenKey].map(s=>i(s,a)),l.filter&&(a.matchesFilter!==!0?a.matchesFilter=a.children.some(s=>s.matchesFilter):a.noTick!==!0&&a.disabled!==!0&&a.tickable===!0&&Y===!0&&a.children.every(s=>s.matchesFilter!==!0||s.noTick===!0||s.tickable!==!0)===!0&&(a.tickable=!1)),a.matchesFilter===!0&&(a.noTick!==!0&&N!==!0&&a.children.every(s=>s.noTick)===!0&&(a.noTick=!0),O))){if(a.ticked=!1,a.indeterminate=a.children.some(s=>s.indeterminate===!0),a.tickable=a.tickable===!0&&a.children.some(s=>s.tickable),a.indeterminate!==!0){const s=a.children.reduce((R,oe)=>oe.ticked===!0?R+1:R,0);s===a.children.length?a.ticked=!0:s>0&&(a.indeterminate=!0)}a.indeterminate===!0&&(a.indeterminateNextState=a.children.every(s=>s.tickable!==!0||s.ticked!==!0))}return a};return l.nodes.forEach(e=>i(e,null)),t});V(()=>l.ticked,t=>{k.value=t}),V(()=>l.expanded,t=>{h.value=t});function b(t){const i=[].reduce,e=(r,n)=>{if(r||!n)return r;if(Array.isArray(n)===!0)return i.call(Object(n),e,r);if(n[l.nodeKey]===t)return n;if(n[l.childrenKey])return e(null,n[l.childrenKey])};return e(null,l.nodes)}function X(){return k.value.map(t=>b(t))}function p(){return h.value.map(t=>b(t))}function ee(t){return t&&o.value[t]?o.value[t].expanded:!1}function te(){l.expanded!==void 0?g("update:expanded",[]):h.value=[]}function M(){const t=[],i=e=>{e[l.childrenKey]&&e[l.childrenKey].length!==0&&e.expandable!==!1&&e.disabled!==!0&&(t.push(e[l.nodeKey]),e[l.childrenKey].forEach(i))};l.nodes.forEach(i),l.expanded!==void 0?g("update:expanded",t):h.value=t}function B(t,i,e=b(t),r=o.value[t]){if(r.lazy&&r.lazy!=="loaded"){if(r.lazy==="loading")return;y.value[t]="loading",Array.isArray(e[l.childrenKey])!==!0&&(e[l.childrenKey]=[]),g("lazyLoad",{node:e,key:t,done:n=>{y.value[t]="loaded",e[l.childrenKey]=Array.isArray(n)===!0?n:[],be(()=>{const d=o.value[t];d&&d.isParent===!0&&j(t,!0)})},fail:()=>{delete y.value[t],e[l.childrenKey].length===0&&delete e[l.childrenKey]}})}else r.isParent===!0&&r.expandable===!0&&j(t,i)}function j(t,i){let e=h.value;const r=l.expanded!==void 0;if(r===!0&&(e=e.slice()),i){if(l.accordion&&o.value[t]){const n=[];o.value[t].parent?o.value[t].parent.children.forEach(d=>{d.key!==t&&d.expandable===!0&&n.push(d.key)}):l.nodes.forEach(d=>{const u=d[l.nodeKey];u!==t&&n.push(u)}),n.length!==0&&(e=e.filter(d=>n.includes(d)===!1))}e=e.concat([t]).filter((n,d,u)=>u.indexOf(n)===d)}else e=e.filter(n=>n!==t);r===!0?g("update:expanded",e):h.value=e}function le(t){return t&&o.value[t]?o.value[t].ticked:!1}function z(t,i){let e=k.value;const r=l.ticked!==void 0;r===!0&&(e=e.slice()),i?e=e.concat(t).filter((n,d,u)=>u.indexOf(n)===d):e=e.filter(n=>t.includes(n)===!1),r===!0&&g("update:ticked",e)}function ie(t,i,e){const r={tree:_,node:t,key:e,color:l.color,dark:S.value};return G(r,"expanded",()=>i.expanded,n=>{n!==i.expanded&&B(e,n)}),G(r,"ticked",()=>i.ticked,n=>{n!==i.ticked&&z([e],n)}),r}function I(t){return(l.filter?t.filter(i=>o.value[i[l.nodeKey]].matchesFilter):t).map(i=>ce(i))}function ne(t){if(t.icon!==void 0)return f(W,{class:"q-tree__icon q-mr-sm",name:t.icon,color:t.iconColor});const i=t.img||t.avatar;if(i)return f("img",{class:`q-tree__${t.img?"img":"avatar"} q-mr-sm`,src:i})}function re(){g("afterShow")}function ae(){g("afterHide")}function ce(t){const i=t[l.nodeKey],e=o.value[i],r=t.header&&q[`header-${t.header}`]||q["default-header"],n=e.isParent===!0?I(t[l.childrenKey]):[],d=n.length!==0||e.lazy&&e.lazy!=="loaded";let u=t.body&&q[`body-${t.body}`]||q["default-body"];const E=r!==void 0||u!==void 0?ie(t,e,i):null;return u!==void 0&&(u=f("div",{class:"q-tree__node-body relative-position"},[f("div",{class:w.value},[u(E)])])),f("div",{key:i,class:`q-tree__node relative-position q-tree__node--${d===!0?"parent":"child"}`},[f("div",{class:"q-tree__node-header relative-position row no-wrap items-center"+(e.link===!0?" q-tree__node--link q-hoverable q-focusable":"")+(e.selected===!0?" q-tree__node--selected":"")+(e.disabled===!0?" q-tree__node--disabled":""),tabindex:e.link===!0?0:-1,ariaExpanded:n.length>0?e.expanded:null,role:"treeitem",onClick:v=>{D(t,e,v)},onKeypress(v){ge(v)!==!0&&(v.keyCode===13?D(t,e,v,!0):v.keyCode===32&&P(t,e,v,!0))}},[f("div",{class:"q-focus-helper",tabindex:-1,ref:v=>{C[e.key]=v}}),e.lazy==="loading"?f(xe,{class:"q-tree__spinner",color:L.value}):d===!0?f(W,{class:"q-tree__arrow"+(e.expanded===!0?" q-tree__arrow--rotate":""),name:$.value,onClick(v){P(t,e,v)}}):null,e.hasTicking===!0&&e.noTick!==!0?f(_e,{class:"q-tree__tickbox",modelValue:e.indeterminate===!0?null:e.ticked,color:L.value,dark:S.value,dense:!0,keepColor:!0,disable:e.tickable!==!0,onKeydown:Z,"onUpdate:modelValue":v=>{de(e,v)}}):null,f("div",{class:"q-tree__node-header-content col row no-wrap items-center"+(e.selected===!0?c.value:w.value)},[r?r(E):[ne(t),f("div",t[l.labelKey])]])]),d===!0?l.noTransition===!0?e.expanded===!0?f("div",{class:"q-tree__node-collapsible"+w.value,key:`${i}__q`},[u,f("div",{class:"q-tree__children"+(e.disabled===!0?" q-tree__node--disabled":""),role:"group"},n)]):null:f(Se,{duration:l.duration,onShow:re,onHide:ae},()=>Te(f("div",{class:"q-tree__node-collapsible"+w.value,key:`${i}__q`},[u,f("div",{class:"q-tree__children"+(e.disabled===!0?" q-tree__node--disabled":""),role:"group"},n)]),[[qe,e.expanded]])):u])}function U(t){const i=C[t];i&&i.focus()}function D(t,i,e,r){r!==!0&&i.selectable!==!1&&U(i.key),F.value&&i.selectable?l.noSelectionUnset===!1?g("update:selected",i.key!==l.selected?i.key:null):i.key!==l.selected&&g("update:selected",i.key===void 0?null:i.key):P(t,i,e,r),typeof t.handler=="function"&&t.handler(t)}function P(t,i,e,r){e!==void 0&&Z(e),r!==!0&&i.selectable!==!1&&U(i.key),B(i.key,!i.expanded,t,i)}function de(t,i){if(t.indeterminate===!0&&(i=t.indeterminateNextState),t.strictTicking)z([t.key],i);else if(t.leafTicking){const e=[],r=n=>{n.isParent?(i!==!0&&n.noTick!==!0&&n.tickable===!0&&e.push(n.key),n.leafTicking===!0&&n.children.forEach(r)):n.noTick!==!0&&n.tickable===!0&&(n.leafFilteredTicking!==!0||n.matchesFilter===!0)&&e.push(n.key)};r(t),z(e,i)}}return l.defaultExpandAll===!0&&M(),Object.assign(_,{getNodeByKey:b,getTickedNodes:X,getExpandedNodes:p,isExpanded:ee,collapseAll:te,expandAll:M,setExpanded:B,isTicked:le,setTicked:z}),()=>{const t=I(l.nodes);return f("div",{class:m.value,role:"tree"},t.length===0?l.filter?l.noResultsLabel||T.lang.tree.noResults:l.noNodesLabel||T.lang.tree.noNodes:t)}}});export{me as Q};