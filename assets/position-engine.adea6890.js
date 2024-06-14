import{c as K}from"./selection.e36e704c.js";import{r as j,aE as N,az as S,q as Q,ak as $,w as E,o as X,p as R,l as Y,aj as D,bc as L,bd as q,b7 as F,b0 as U}from"./index.796e9a09.js";const G={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},lt={...G,contextMenu:Boolean};function nt({showing:t,avoidEmit:l,configureAnchorEl:n}){const{props:e,proxy:a,emit:s}=Y(),o=j(null);let c=null;function d(i){return o.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const u={};n===void 0&&(Object.assign(u,{hide(i){a.hide(i)},toggle(i){a.toggle(i),i.qAnchorHandled=!0},toggleKey(i){N(i,13)===!0&&u.toggle(i)},contextClick(i){a.hide(i),S(i),Q(()=>{a.show(i),i.qAnchorHandled=!0})},prevent:S,mobileTouch(i){if(u.mobileCleanup(i),d(i)!==!0)return;a.hide(i),o.value.classList.add("non-selectable");const r=i.target;$(u,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{c=null,a.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){o.value.classList.remove("non-selectable"),c!==null&&(clearTimeout(c),c=null),t.value===!0&&i!==void 0&&K()}}),n=function(i=e.contextMenu){if(e.noParentEvent===!0||o.value===null)return;let r;i===!0?a.$q.platform.is.mobile===!0?r=[[o.value,"touchstart","mobileTouch","passive"]]:r=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:r=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],$(u,"anchor",r)});function h(){D(u,"anchor")}function y(i){for(o.value=i;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;n()}function p(){if(e.target===!1||e.target===""||a.$el.parentNode===null)o.value=null;else if(e.target===!0)y(a.$el.parentNode);else{let i=e.target;if(typeof e.target=="string")try{i=document.querySelector(e.target)}catch{i=void 0}i!=null?(o.value=i.$el||i,n()):(o.value=null,console.error(`Anchor: target "${e.target}" not found`))}}return E(()=>e.contextMenu,i=>{o.value!==null&&(h(),n(i))}),E(()=>e.target,()=>{o.value!==null&&h(),p()}),E(()=>e.noParentEvent,i=>{o.value!==null&&(i===!0?h():n())}),X(()=>{p(),l!==!0&&e.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),R(()=>{c!==null&&clearTimeout(c),h()}),{anchorEl:o,canShow:d,anchorEvents:u}}function it(t,l){const n=j(null);let e;function a(c,d){const u=`${d!==void 0?"add":"remove"}EventListener`,h=d!==void 0?d:e;c!==window&&c[u]("scroll",h,L.passive),window[u]("scroll",h,L.passive),e=d}function s(){n.value!==null&&(a(n.value),n.value=null)}const o=E(()=>t.noParentEvent,()=>{n.value!==null&&(s(),l())});return R(o),{localScrollTarget:n,unconfigureScrollTarget:s,changeScrollEvent:a}}const{notPassiveCapture:W}=L,g=[];function M(t){const l=t.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let n=q.length-1;for(;n>=0;){const e=q[n].$;if(e.type.name==="QTooltip"){n--;continue}if(e.type.name!=="QDialog")break;if(e.props.seamless!==!0)return;n--}for(let e=g.length-1;e>=0;e--){const a=g[e];if((a.anchorEl.value===null||a.anchorEl.value.contains(l)===!1)&&(l===document.body||a.innerRef.value!==null&&a.innerRef.value.contains(l)===!1))t.qClickOutside=!0,a.onClickOutside(t);else return}}function ot(t){g.push(t),g.length===1&&(document.addEventListener("mousedown",M,W),document.addEventListener("touchstart",M,W))}function at(t){const l=g.findIndex(n=>n===t);l!==-1&&(g.splice(l,1),g.length===0&&(document.removeEventListener("mousedown",M,W),document.removeEventListener("touchstart",M,W)))}let A,B;function rt(t){const l=t.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ut(t){return t?!(t.length!==2||typeof t[0]!="number"||typeof t[1]!="number"):!0}const z={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(t=>{z[`${t}#ltr`]=t,z[`${t}#rtl`]=t});function st(t,l){const n=t.split(" ");return{vertical:n[0],horizontal:z[`${n[1]}#${l===!0?"rtl":"ltr"}`]}}function J(t,l){let{top:n,left:e,right:a,bottom:s,width:o,height:c}=t.getBoundingClientRect();return l!==void 0&&(n-=l[1],e-=l[0],s+=l[1],a+=l[0],o+=l[0],c+=l[1]),{top:n,bottom:s,height:c,left:e,right:a,width:o,middle:e+(a-e)/2,center:n+(s-n)/2}}function Z(t,l,n){let{top:e,left:a}=t.getBoundingClientRect();return e+=l.top,a+=l.left,n!==void 0&&(e+=n[1],a+=n[0]),{top:e,bottom:e+1,height:1,left:a,right:a+1,width:1,middle:a,center:e}}function _(t,l){return{top:0,center:l/2,bottom:l,left:0,middle:t/2,right:t}}function P(t,l,n,e){return{top:t[n.vertical]-l[e.vertical],left:t[n.horizontal]-l[e.horizontal]}}function O(t,l=0){if(t.targetEl===null||t.anchorEl===null||l>5)return;if(t.targetEl.offsetHeight===0||t.targetEl.offsetWidth===0){setTimeout(()=>{O(t,l+1)},10);return}const{targetEl:n,offset:e,anchorEl:a,anchorOrigin:s,selfOrigin:o,absoluteOffset:c,fit:d,cover:u,maxHeight:h,maxWidth:y}=t;if(F.is.ios===!0&&window.visualViewport!==void 0){const H=document.body.style,{offsetLeft:b,offsetTop:v}=window.visualViewport;b!==A&&(H.setProperty("--q-pe-left",b+"px"),A=b),v!==B&&(H.setProperty("--q-pe-top",v+"px"),B=v)}const{scrollLeft:p,scrollTop:i}=n,r=c===void 0?J(a,u===!0?[0,0]:e):Z(a,c,e);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:y||"100vw",maxHeight:h||"100vh",visibility:"visible"});const{offsetWidth:k,offsetHeight:T}=n,{elWidth:V,elHeight:I}=d===!0||u===!0?{elWidth:Math.max(r.width,k),elHeight:u===!0?Math.max(r.height,T):T}:{elWidth:k,elHeight:T};let m={maxWidth:y,maxHeight:h};(d===!0||u===!0)&&(m.minWidth=r.width+"px",u===!0&&(m.minHeight=r.height+"px")),Object.assign(n.style,m);const x=_(V,I);let f=P(r,x,s,o);if(c===void 0||e===void 0)C(f,r,x,s,o);else{const{top:H,left:b}=f;C(f,r,x,s,o);let v=!1;if(f.top!==H){v=!0;const w=2*e[1];r.center=r.top-=w,r.bottom-=w+2}if(f.left!==b){v=!0;const w=2*e[0];r.middle=r.left-=w,r.right-=w+2}v===!0&&(f=P(r,x,s,o),C(f,r,x,s,o))}m={top:f.top+"px",left:f.left+"px"},f.maxHeight!==void 0&&(m.maxHeight=f.maxHeight+"px",r.height>f.maxHeight&&(m.minHeight=m.maxHeight)),f.maxWidth!==void 0&&(m.maxWidth=f.maxWidth+"px",r.width>f.maxWidth&&(m.minWidth=m.maxWidth)),Object.assign(n.style,m),n.scrollTop!==i&&(n.scrollTop=i),n.scrollLeft!==p&&(n.scrollLeft=p)}function C(t,l,n,e,a){const s=n.bottom,o=n.right,c=U(),d=window.innerHeight-c,u=document.body.clientWidth;if(t.top<0||t.top+s>d)if(a.vertical==="center")t.top=l[e.vertical]>d/2?Math.max(0,d-s):0,t.maxHeight=Math.min(s,d);else if(l[e.vertical]>d/2){const h=Math.min(d,e.vertical==="center"?l.center:e.vertical===a.vertical?l.bottom:l.top);t.maxHeight=Math.min(s,h),t.top=Math.max(0,h-s)}else t.top=Math.max(0,e.vertical==="center"?l.center:e.vertical===a.vertical?l.top:l.bottom),t.maxHeight=Math.min(s,d-t.top);if(t.left<0||t.left+o>u)if(t.maxWidth=Math.min(o,u),a.horizontal==="middle")t.left=l[e.horizontal]>u/2?Math.max(0,u-o):0;else if(l[e.horizontal]>u/2){const h=Math.min(u,e.horizontal==="middle"?l.middle:e.horizontal===a.horizontal?l.right:l.left);t.maxWidth=Math.min(o,h),t.left=Math.max(0,h-t.maxWidth)}else t.left=Math.max(0,e.horizontal==="middle"?l.middle:e.horizontal===a.horizontal?l.left:l.right),t.maxWidth=Math.min(o,u-t.left)}export{ut as a,it as b,nt as c,ot as d,lt as e,st as p,at as r,O as s,G as u,rt as v};
