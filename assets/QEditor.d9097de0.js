import{am as ke,u as F,j as y,h as f,K as D,bn as J,ae as Ce,r as z,bo as Se,bp as Be,w as P,o as j,$ as Y,a0 as L,l as I,aC as Z,aF as V,az as K,bq as Te,k as qe,p as ee,br as W,A as xe,C as ze,bs as Pe,al as $e,q as Le,aT as He}from"./index.796e9a09.js";import{Q as Oe}from"./QMenu.c288f19f.js";import{Q as Ee}from"./QTooltip.f083d71e.js";import{a as G,Q as Ae}from"./QItemSection.ae9ab285.js";const Ne=Object.prototype.toString,_=Object.prototype.hasOwnProperty,_e=new Set(["Boolean","Number","String","Function","Array","Date","RegExp"].map(e=>"[object "+e+"]"));function X(e){if(e!==Object(e)||_e.has(Ne.call(e))===!0||e.constructor&&_.call(e,"constructor")===!1&&_.call(e.constructor.prototype,"isPrototypeOf")===!1)return!1;let t;for(t in e);return t===void 0||_.call(e,t)}function te(){let e,t,o,i,r,u,s=arguments[0]||{},h=1,b=!1;const v=arguments.length;for(typeof s=="boolean"&&(b=s,s=arguments[1]||{},h=2),Object(s)!==s&&typeof s!="function"&&(s={}),v===h&&(s=this,h--);h<v;h++)if((e=arguments[h])!==null)for(t in e)o=s[t],i=e[t],s!==i&&(b===!0&&i&&((r=Array.isArray(i))||X(i)===!0)?(r===!0?u=Array.isArray(o)===!0?o:[]:u=X(o)===!0?o:{},s[t]=te(b,u,i)):i!==void 0&&(s[t]=i));return s}function oe(e,t){if(t&&e===t)return null;const o=e.nodeName.toLowerCase();if(["div","li","ul","ol","blockquote"].includes(o)===!0)return e;const i=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,r=i.display;return r==="block"||r==="table"?e:oe(e.parentNode)}function R(e,t,o){return!e||e===document.body?!1:o===!0&&e===t||(t===document?document.body:t).contains(e.parentNode)}function ne(e,t,o){if(o||(o=document.createRange(),o.selectNode(e),o.setStart(e,0)),t.count===0)o.setEnd(e,t.count);else if(t.count>0)if(e.nodeType===Node.TEXT_NODE)e.textContent.length<t.count?t.count-=e.textContent.length:(o.setEnd(e,t.count),t.count=0);else for(let i=0;t.count!==0&&i<e.childNodes.length;i++)o=ne(e.childNodes[i],t,o);return o}const Re=/^https?:\/\//;class Fe{constructor(t,o){this.el=t,this.eVm=o,this._range=null}get selection(){if(this.el){const t=document.getSelection();if(R(t.anchorNode,this.el,!0)&&R(t.focusNode,this.el,!0))return t}return null}get hasSelection(){return this.selection!==null?this.selection.toString().length!==0:!1}get range(){const t=this.selection;return t!==null&&t.rangeCount?t.getRangeAt(0):this._range}get parent(){const t=this.range;if(t!==null){const o=t.startContainer;return o.nodeType===document.ELEMENT_NODE?o:o.parentNode}return null}get blockParent(){const t=this.parent;return t!==null?oe(t,this.el):null}save(t=this.range){t!==null&&(this._range=t)}restore(t=this._range){const o=document.createRange(),i=document.getSelection();t!==null?(o.setStart(t.startContainer,t.startOffset),o.setEnd(t.endContainer,t.endOffset),i.removeAllRanges(),i.addRange(o)):(i.selectAllChildren(this.el),i.collapseToEnd())}savePosition(){let t=-1,o;const i=document.getSelection(),r=this.el.parentNode;if(i.focusNode&&R(i.focusNode,r))for(o=i.focusNode,t=i.focusOffset;o&&o!==r;)o!==this.el&&o.previousSibling?(o=o.previousSibling,t+=o.textContent.length):o=o.parentNode;this.savedPos=t}restorePosition(t=0){if(this.savedPos>0&&this.savedPos<t){const o=window.getSelection(),i=ne(this.el,{count:this.savedPos});i&&(i.collapse(!1),o.removeAllRanges(),o.addRange(i))}}hasParent(t,o){const i=o?this.parent:this.blockParent;return i!==null?i.nodeName.toLowerCase()===t.toLowerCase():!1}hasParents(t,o,i=this.parent){return i===null?!1:t.includes(i.nodeName.toLowerCase())===!0?!0:o===!0?this.hasParents(t,o,i.parentNode):!1}is(t,o){if(this.selection===null)return!1;switch(t){case"formatBlock":return o==="DIV"&&this.parent===this.el||this.hasParent(o,o==="PRE");case"link":return this.hasParent("A",!0);case"fontSize":return document.queryCommandValue(t)===o;case"fontName":const i=document.queryCommandValue(t);return i===`"${o}"`||i===o;case"fullscreen":return this.eVm.inFullscreen.value;case"viewsource":return this.eVm.isViewingSource.value;case void 0:return!1;default:const r=document.queryCommandState(t);return o!==void 0?r===o:r}}getParentAttribute(t){return this.parent!==null?this.parent.getAttribute(t):null}can(t){if(t==="outdent")return this.hasParents(["blockquote","li"],!0);if(t==="indent")return this.hasParents(["li"],!0);if(t==="link")return this.selection!==null||this.is("link")}apply(t,o,i=ke){if(t==="formatBlock")["BLOCKQUOTE","H1","H2","H3","H4","H5","H6"].includes(o)&&this.is(t,o)&&(t="outdent",o=null),o==="PRE"&&this.is(t,"PRE")&&(o="P");else if(t==="print"){i();const r=window.open();r.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `),r.print(),r.close();return}else if(t==="link"){const r=this.getParentAttribute("href");if(r===null){const u=this.selectWord(this.selection),s=u?u.toString():"";if(!s.length&&(!this.range||!this.range.cloneContents().querySelector("img")))return;this.eVm.editLinkUrl.value=Re.test(s)?s:"https://",document.execCommand("createLink",!1,this.eVm.editLinkUrl.value),this.save(u.getRangeAt(0))}else this.eVm.editLinkUrl.value=r,this.range.selectNodeContents(this.parent),this.save();return}else if(t==="fullscreen"){this.eVm.toggleFullscreen(),i();return}else if(t==="viewsource"){this.eVm.isViewingSource.value=this.eVm.isViewingSource.value===!1,this.eVm.setContent(this.eVm.props.modelValue),i();return}document.execCommand(t,!1,o),i()}selectWord(t){if(t===null||t.isCollapsed!==!0||t.modify===void 0)return t;const o=document.createRange();o.setStart(t.anchorNode,t.anchorOffset),o.setEnd(t.focusNode,t.focusOffset);const i=o.collapsed?["backward","forward"]:["forward","backward"];o.detach();const r=t.focusNode,u=t.focusOffset;return t.collapse(t.anchorNode,t.anchorOffset),t.modify("move",i[0],"character"),t.modify("move",i[1],"word"),t.extend(r,u),t.modify("extend",i[1],"character"),t.modify("extend",i[0],"word"),t}}var De=F({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const o=y(()=>{const i=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(r=>e[r]===!0).map(r=>`q-btn-group--${r}`).join(" ");return`q-btn-group row no-wrap${i.length!==0?" "+i:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>f("div",{class:o.value},D(t.default))}});const je=Object.keys(J);function Ie(e){return je.reduce((t,o)=>{const i=e[o];return i!==void 0&&(t[o]=i),t},{})}var Qe=F({name:"QBtnDropdown",props:{...J,...Ce,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:t,emit:o}){const{proxy:i}=I(),r=z(e.modelValue),u=z(null),s=Se(),h=y(()=>{const c={"aria-expanded":r.value===!0?"true":"false","aria-haspopup":"true","aria-controls":s.value,"aria-label":e.toggleAriaLabel||i.$q.lang.label[r.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(c["aria-disabled"]="true"),c}),b=y(()=>"q-btn-dropdown__arrow"+(r.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),v=y(()=>Be(e)),a=y(()=>Ie(e));P(()=>e.modelValue,c=>{u.value!==null&&u.value[c?"show":"hide"]()}),P(()=>e.split,B);function g(c){r.value=!0,o("beforeShow",c)}function C(c){o("show",c),o("update:modelValue",!0)}function p(c){r.value=!1,o("beforeHide",c)}function $(c){o("hide",c),o("update:modelValue",!1)}function k(c){o("click",c)}function q(c){Z(c),B(),o("click",c)}function x(c){u.value!==null&&u.value.toggle(c)}function O(c){u.value!==null&&u.value.show(c)}function B(c){u.value!==null&&u.value.hide(c)}return Object.assign(i,{show:O,hide:B,toggle:x}),j(()=>{e.modelValue===!0&&O()}),()=>{const c=[f(Y,{class:b.value,name:e.dropdownIcon||i.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&c.push(f(Oe,{ref:u,id:s.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:g,onShow:C,onBeforeHide:p,onHide:$},t.default)),e.split===!1?f(L,{class:"q-btn-dropdown q-btn-dropdown--simple",...a.value,...h.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:k},{default:()=>D(t.label,[]).concat(c),loading:t.loading}):f(De,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...v.value,glossy:e.glossy,stretch:e.stretch},()=>[f(L,{class:"q-btn-dropdown--current",...a.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:q},{default:t.label,loading:t.loading}),f(L,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...h.value,...v.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>c)])}}});function ie(e,t,o){t.handler?t.handler(e,o,o.caret):o.runCmd(t.cmd,t.param)}function Q(e){return f("div",{class:"q-editor__toolbar-group"},e)}function le(e,t,o,i=!1){const r=i||(t.type==="toggle"?t.toggled?t.toggled(e):t.cmd&&e.caret.is(t.cmd,t.param):!1),u=[];if(t.tip&&e.$q.platform.is.desktop){const s=t.key?f("div",[f("small",`(CTRL + ${String.fromCharCode(t.key)})`)]):null;u.push(f(Ee,{delay:1e3},()=>[f("div",{innerHTML:t.tip}),s]))}return f(L,{...e.buttonProps.value,icon:t.icon!==null?t.icon:void 0,color:r?t.toggleColor||e.props.toolbarToggleColor:t.color||e.props.toolbarColor,textColor:r&&!e.props.toolbarPush?null:t.textColor||e.props.toolbarTextColor,label:t.label,disable:t.disable?typeof t.disable=="function"?t.disable(e):!0:!1,size:"sm",onClick(s){o&&o(),ie(s,t,e)}},()=>u)}function Ue(e,t){const o=t.list==="only-icons";let i=t.label,r=t.icon!==null?t.icon:void 0,u,s;function h(){v.component.proxy.hide()}if(o)s=t.options.map(a=>{const g=a.type===void 0?e.caret.is(a.cmd,a.param):!1;return g&&(i=a.tip,r=a.icon!==null?a.icon:void 0),le(e,a,h,g)}),u=e.toolbarBackgroundClass.value,s=[Q(s)];else{const a=e.props.toolbarToggleColor!==void 0?`text-${e.props.toolbarToggleColor}`:null,g=e.props.toolbarTextColor!==void 0?`text-${e.props.toolbarTextColor}`:null,C=t.list==="no-icons";s=t.options.map(p=>{const $=p.disable?p.disable(e):!1,k=p.type===void 0?e.caret.is(p.cmd,p.param):!1;k&&(i=p.tip,r=p.icon!==null?p.icon:void 0);const q=p.htmlTip;return f(Ae,{active:k,activeClass:a,clickable:!0,disable:$,dense:!0,onClick(x){h(),e.contentRef.value!==null&&e.contentRef.value.focus(),e.caret.restore(),ie(x,p,e)}},()=>[C===!0?null:f(G,{class:k?a:g,side:!0},()=>f(Y,{name:p.icon!==null?p.icon:void 0})),f(G,q?()=>f("div",{class:"text-no-wrap",innerHTML:p.htmlTip}):p.tip?()=>f("div",{class:"text-no-wrap"},p.tip):void 0)])}),u=[e.toolbarBackgroundClass.value,g]}const b=t.highlight&&i!==t.label,v=f(Qe,{...e.buttonProps.value,noCaps:!0,noWrap:!0,color:b?e.props.toolbarToggleColor:e.props.toolbarColor,textColor:b&&!e.props.toolbarPush?null:e.props.toolbarTextColor,label:t.fixedLabel?t.label:i,icon:t.fixedIcon?t.icon!==null?t.icon:void 0:r,contentClass:u,onShow:a=>e.emit("dropdownShow",a),onHide:a=>e.emit("dropdownHide",a),onBeforeShow:a=>e.emit("dropdownBeforeShow",a),onBeforeHide:a=>e.emit("dropdownBeforeHide",a)},()=>s);return v}function Me(e){if(e.caret)return e.buttons.value.filter(t=>!e.isViewingSource.value||t.find(o=>o.cmd==="viewsource")).map(t=>Q(t.map(o=>e.isViewingSource.value&&o.cmd!=="viewsource"?!1:o.type==="slot"?D(e.slots[o.slot]):o.type==="dropdown"?Ue(e,o):le(e,o))))}function Ke(e,t,o,i={}){const r=Object.keys(i);if(r.length===0)return{};const u={default_font:{cmd:"fontName",param:e,icon:o,tip:t}};return r.forEach(s=>{const h=i[s];u[s]={cmd:"fontName",param:h,icon:o,tip:h,htmlTip:`<font face="${h}">${h}</font>`}}),u}function We(e){if(e.caret){const t=e.props.toolbarColor||e.props.toolbarTextColor;let o=e.editLinkUrl.value;const i=()=>{e.caret.restore(),o!==e.editLinkUrl.value&&document.execCommand("createLink",!1,o===""?" ":o),e.editLinkUrl.value=null};return[f("div",{class:`q-mx-xs text-${t}`},`${e.$q.lang.editor.url}: `),f("input",{key:"qedt_btm_input",class:"col q-editor__link-input",value:o,onInput:r=>{Z(r),o=r.target.value},onKeydown:r=>{if(V(r)!==!0)switch(r.keyCode){case 13:return K(r),i();case 27:K(r),e.caret.restore(),(!e.editLinkUrl.value||e.editLinkUrl.value==="https://")&&document.execCommand("unlink"),e.editLinkUrl.value=null;break}}}),Q([f(L,{key:"qedt_btm_rem",tabindex:-1,...e.buttonProps.value,label:e.$q.lang.label.remove,noCaps:!0,onClick:()=>{e.caret.restore(),document.execCommand("unlink"),e.editLinkUrl.value=null}}),f(L,{key:"qedt_btm_upd",...e.buttonProps.value,label:e.$q.lang.label.update,noCaps:!0,onClick:i})])]}}let H=0;const Ge={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Xe=["update:fullscreen","fullscreen"];function Je(){const e=I(),{props:t,emit:o,proxy:i}=e;let r,u,s;const h=z(!1);Te(e)===!0&&P(()=>i.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&a()}),P(()=>t.fullscreen,g=>{h.value!==g&&b()}),P(h,g=>{o("update:fullscreen",g),o("fullscreen",g)});function b(){h.value===!0?a():v()}function v(){h.value!==!0&&(h.value=!0,s=i.$el.parentNode,s.replaceChild(u,i.$el),document.body.appendChild(i.$el),H++,H===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:a},W.add(r))}function a(){h.value===!0&&(r!==void 0&&(W.remove(r),r=void 0),s.replaceChild(i.$el,u),h.value=!1,H=Math.max(0,H-1),H===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),i.$el.scrollIntoView!==void 0&&setTimeout(()=>{i.$el.scrollIntoView()})))}return qe(()=>{u=document.createElement("span")}),j(()=>{t.fullscreen===!0&&v()}),ee(a),Object.assign(i,{toggleFullscreen:b,setFullscreen:v,exitFullscreen:a}),{inFullscreen:h,toggleFullscreen:b}}var tt=F({name:"QEditor",props:{...xe,...Ge,modelValue:{type:String,required:!0},readonly:Boolean,disable:Boolean,minHeight:{type:String,default:"10rem"},maxHeight:String,height:String,definitions:Object,fonts:Object,placeholder:String,toolbar:{type:Array,validator:e=>e.length===0||e.every(t=>t.length),default:()=>[["left","center","right","justify"],["bold","italic","underline","strike"],["undo","redo"]]},toolbarColor:String,toolbarBg:String,toolbarTextColor:String,toolbarToggleColor:{type:String,default:"primary"},toolbarOutline:Boolean,toolbarPush:Boolean,toolbarRounded:Boolean,paragraphTag:{type:String,validator:e=>["div","p"].includes(e),default:"div"},contentStyle:Object,contentClass:[Object,Array,String],square:Boolean,flat:Boolean,dense:Boolean},emits:[...Xe,"update:modelValue","keydown","click","focus","blur","dropdownShow","dropdownHide","dropdownBeforeShow","dropdownBeforeHide","linkShow","linkHide"],setup(e,{slots:t,emit:o}){const{proxy:i}=I(),{$q:r}=i,u=ze(e,r),{inFullscreen:s,toggleFullscreen:h}=Je(),b=Pe(),v=z(null),a=z(null),g=z(null),C=z(!1),p=y(()=>!e.readonly&&!e.disable);let $,k,q=e.modelValue;document.execCommand("defaultParagraphSeparator",!1,e.paragraphTag),$=window.getComputedStyle(document.body).fontFamily;const x=y(()=>e.toolbarBg?` bg-${e.toolbarBg}`:""),O=y(()=>{const n=e.toolbarOutline!==!0&&e.toolbarPush!==!0;return{type:"a",flat:n,noWrap:!0,outline:e.toolbarOutline,push:e.toolbarPush,rounded:e.toolbarRounded,dense:!0,color:e.toolbarColor,disable:!p.value,size:"sm"}}),B=y(()=>{const n=r.lang.editor,l=r.iconSet.editor;return{bold:{cmd:"bold",icon:l.bold,tip:n.bold,key:66},italic:{cmd:"italic",icon:l.italic,tip:n.italic,key:73},strike:{cmd:"strikeThrough",icon:l.strikethrough,tip:n.strikethrough,key:83},underline:{cmd:"underline",icon:l.underline,tip:n.underline,key:85},unordered:{cmd:"insertUnorderedList",icon:l.unorderedList,tip:n.unorderedList},ordered:{cmd:"insertOrderedList",icon:l.orderedList,tip:n.orderedList},subscript:{cmd:"subscript",icon:l.subscript,tip:n.subscript,htmlTip:"x<subscript>2</subscript>"},superscript:{cmd:"superscript",icon:l.superscript,tip:n.superscript,htmlTip:"x<superscript>2</superscript>"},link:{cmd:"link",disable:d=>d.caret&&!d.caret.can("link"),icon:l.hyperlink,tip:n.hyperlink,key:76},fullscreen:{cmd:"fullscreen",icon:l.toggleFullscreen,tip:n.toggleFullscreen,key:70},viewsource:{cmd:"viewsource",icon:l.viewSource,tip:n.viewSource},quote:{cmd:"formatBlock",param:"BLOCKQUOTE",icon:l.quote,tip:n.quote,key:81},left:{cmd:"justifyLeft",icon:l.left,tip:n.left},center:{cmd:"justifyCenter",icon:l.center,tip:n.center},right:{cmd:"justifyRight",icon:l.right,tip:n.right},justify:{cmd:"justifyFull",icon:l.justify,tip:n.justify},print:{type:"no-state",cmd:"print",icon:l.print,tip:n.print,key:80},outdent:{type:"no-state",disable:d=>d.caret&&!d.caret.can("outdent"),cmd:"outdent",icon:l.outdent,tip:n.outdent},indent:{type:"no-state",disable:d=>d.caret&&!d.caret.can("indent"),cmd:"indent",icon:l.indent,tip:n.indent},removeFormat:{type:"no-state",cmd:"removeFormat",icon:l.removeFormat,tip:n.removeFormat},hr:{type:"no-state",cmd:"insertHorizontalRule",icon:l.hr,tip:n.hr},undo:{type:"no-state",cmd:"undo",icon:l.undo,tip:n.undo,key:90},redo:{type:"no-state",cmd:"redo",icon:l.redo,tip:n.redo,key:89},h1:{cmd:"formatBlock",param:"H1",icon:l.heading1||l.heading,tip:n.heading1,htmlTip:`<h1 class="q-ma-none">${n.heading1}</h1>`},h2:{cmd:"formatBlock",param:"H2",icon:l.heading2||l.heading,tip:n.heading2,htmlTip:`<h2 class="q-ma-none">${n.heading2}</h2>`},h3:{cmd:"formatBlock",param:"H3",icon:l.heading3||l.heading,tip:n.heading3,htmlTip:`<h3 class="q-ma-none">${n.heading3}</h3>`},h4:{cmd:"formatBlock",param:"H4",icon:l.heading4||l.heading,tip:n.heading4,htmlTip:`<h4 class="q-ma-none">${n.heading4}</h4>`},h5:{cmd:"formatBlock",param:"H5",icon:l.heading5||l.heading,tip:n.heading5,htmlTip:`<h5 class="q-ma-none">${n.heading5}</h5>`},h6:{cmd:"formatBlock",param:"H6",icon:l.heading6||l.heading,tip:n.heading6,htmlTip:`<h6 class="q-ma-none">${n.heading6}</h6>`},p:{cmd:"formatBlock",param:e.paragraphTag,icon:l.heading,tip:n.paragraph},code:{cmd:"formatBlock",param:"PRE",icon:l.code,htmlTip:`<code>${n.code}</code>`},"size-1":{cmd:"fontSize",param:"1",icon:l.size1||l.size,tip:n.size1,htmlTip:`<font size="1">${n.size1}</font>`},"size-2":{cmd:"fontSize",param:"2",icon:l.size2||l.size,tip:n.size2,htmlTip:`<font size="2">${n.size2}</font>`},"size-3":{cmd:"fontSize",param:"3",icon:l.size3||l.size,tip:n.size3,htmlTip:`<font size="3">${n.size3}</font>`},"size-4":{cmd:"fontSize",param:"4",icon:l.size4||l.size,tip:n.size4,htmlTip:`<font size="4">${n.size4}</font>`},"size-5":{cmd:"fontSize",param:"5",icon:l.size5||l.size,tip:n.size5,htmlTip:`<font size="5">${n.size5}</font>`},"size-6":{cmd:"fontSize",param:"6",icon:l.size6||l.size,tip:n.size6,htmlTip:`<font size="6">${n.size6}</font>`},"size-7":{cmd:"fontSize",param:"7",icon:l.size7||l.size,tip:n.size7,htmlTip:`<font size="7">${n.size7}</font>`}}}),c=y(()=>{const n=e.definitions||{},l=e.definitions||e.fonts?te(!0,{},B.value,n,Ke($,r.lang.editor.defaultFont,r.iconSet.editor.font,e.fonts)):B.value;return e.toolbar.map(d=>d.map(m=>{if(m.options)return{type:"dropdown",icon:m.icon,label:m.label,size:"sm",dense:!0,fixedLabel:m.fixedLabel,fixedIcon:m.fixedIcon,highlight:m.highlight,list:m.list,options:m.options.map(we=>l[we])};const S=l[m];return S?S.type==="no-state"||n[m]&&(S.cmd===void 0||B.value[S.cmd]&&B.value[S.cmd].type==="no-state")?S:Object.assign({type:"toggle"},S):{type:"slot",slot:m}}))}),w={$q:r,props:e,slots:t,emit:o,inFullscreen:s,toggleFullscreen:h,runCmd:A,isViewingSource:C,editLinkUrl:g,toolbarBackgroundClass:x,buttonProps:O,contentRef:a,buttons:c,setContent:E};P(()=>e.modelValue,n=>{q!==n&&(q=n,E(n,!0))}),P(g,n=>{o(`link${n?"Show":"Hide"}`)});const re=y(()=>e.toolbar&&e.toolbar.length!==0),ae=y(()=>{const n={},l=d=>{d.key&&(n[d.key]={cmd:d.cmd,param:d.param})};return c.value.forEach(d=>{d.forEach(m=>{m.options?m.options.forEach(l):l(m)})}),n}),se=y(()=>s.value?e.contentStyle:[{minHeight:e.minHeight,height:e.height,maxHeight:e.maxHeight},e.contentStyle]),ue=y(()=>`q-editor q-editor--${C.value===!0?"source":"default"}`+(e.disable===!0?" disabled":"")+(s.value===!0?" fullscreen column":"")+(e.square===!0?" q-editor--square no-border-radius":"")+(e.flat===!0?" q-editor--flat":"")+(e.dense===!0?" q-editor--dense":"")+(u.value===!0?" q-editor--dark q-dark":"")),ce=y(()=>[e.contentClass,"q-editor__content",{col:s.value,"overflow-auto":s.value||e.maxHeight}]),de=y(()=>e.disable===!0?{"aria-disabled":"true"}:{});function fe(){if(a.value!==null){const n=`inner${C.value===!0?"Text":"HTML"}`,l=a.value[n];l!==e.modelValue&&(q=l,o("update:modelValue",l))}}function he(n){if(o("keydown",n),n.ctrlKey!==!0||V(n)===!0){T();return}const l=n.keyCode,d=ae.value[l];if(d!==void 0){const{cmd:m,param:S}=d;$e(n),A(m,S,!1)}}function pe(n){T(),o("click",n)}function ge(n){if(a.value!==null){const{scrollTop:l,scrollHeight:d}=a.value;k=d-l}w.caret.save(),o("blur",n)}function me(n){Le(()=>{a.value!==null&&k!==void 0&&(a.value.scrollTop=a.value.scrollHeight-k)}),o("focus",n)}function ve(n){const l=v.value;if(l!==null&&l.contains(n.target)===!0&&(n.relatedTarget===null||l.contains(n.relatedTarget)!==!0)){const d=`inner${C.value===!0?"Text":"HTML"}`;w.caret.restorePosition(a.value[d].length),T()}}function ye(n){const l=v.value;l!==null&&l.contains(n.target)===!0&&(n.relatedTarget===null||l.contains(n.relatedTarget)!==!0)&&(w.caret.savePosition(),T())}function U(){k=void 0}function M(n){w.caret.save()}function E(n,l){if(a.value!==null){l===!0&&w.caret.savePosition();const d=`inner${C.value===!0?"Text":"HTML"}`;a.value[d]=n,l===!0&&(w.caret.restorePosition(a.value[d].length),T())}}function A(n,l,d=!0){N(),w.caret.restore(),w.caret.apply(n,l,()=>{N(),w.caret.save(),d&&T()})}function T(){setTimeout(()=>{g.value=null,i.$forceUpdate()},1)}function N(){He(()=>{a.value!==null&&a.value.focus({preventScroll:!0})})}function be(){return a.value}return j(()=>{w.caret=i.caret=new Fe(a.value,w),E(e.modelValue),T(),document.addEventListener("selectionchange",M)}),ee(()=>{document.removeEventListener("selectionchange",M)}),Object.assign(i,{runCmd:A,refreshToolbar:T,focus:N,getContentEl:be}),()=>{let n;if(re.value){const l=[f("div",{key:"qedt_top",class:"q-editor__toolbar row no-wrap scroll-x"+x.value},Me(w))];g.value!==null&&l.push(f("div",{key:"qedt_btm",class:"q-editor__toolbar row no-wrap items-center scroll-x"+x.value},We(w))),n=f("div",{key:"toolbar_ctainer",class:"q-editor__toolbars-container"},l)}return f("div",{ref:v,class:ue.value,style:{height:s.value===!0?"100%":null},...de.value,onFocusin:ve,onFocusout:ye},[n,f("div",{ref:a,style:se.value,class:ce.value,contenteditable:p.value,placeholder:e.placeholder,...b.listeners.value,onInput:fe,onKeydown:he,onClick:pe,onBlur:ge,onFocus:me,onMousedown:U,onTouchstartPassive:U})])}}});export{tt as Q};