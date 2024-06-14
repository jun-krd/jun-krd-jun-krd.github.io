import{Q as Y}from"./QBar.57bcd1b8.js";import{Q as k}from"./QSpace.601fa16e.js";import{Q as ee}from"./QSelect.a2b6cad7.js";import{bD as ae,r as i,o as te,j as se,k as oe,bt as le,R as u,S as w,n as e,Z as t,W as H,X as o,a9 as re,F as $,a7 as B,$ as d,U as n,a1 as p,V as b,bu as Q,a0 as _,a5 as R,bE as ne,bF as ie,a6 as f,Y as x,a2 as I,ad as ue,I as M,aI as de}from"./index.796e9a09.js";import{Q as h}from"./QItemLabel.c03d9e19.js";import{a as T,Q as O}from"./QItemSection.ae9ab285.js";import{Q as ce}from"./QList.6b929fc6.js";import{Q as me}from"./QScrollArea.89704956.js";import{Q as pe}from"./QPage.976dcdc8.js";import{Q as fe}from"./QEditor.d9097de0.js";import{C as A}from"./ClosePopup.d4490053.js";import{u as ve}from"./use-quasar.737b824d.js";import{h as j}from"./moment.40bc58bf.js";import{api as E}from"./axios.cdca92d4.js";import{l as _e}from"./lodash.78b3cd6a.js";import{j as ge,n as ye}from"./json-util.11434787.js";import{u as xe}from"./setUserInfo.024a2a24.js";import"./QField.e93cf12f.js";import"./QChip.56e9ec7c.js";import"./QMenu.c288f19f.js";import"./position-engine.adea6890.js";import"./selection.e36e704c.js";import"./rtl.276c3f1b.js";import"./QResizeObserver.d2aa1720.js";import"./QScrollObserver.c24fdc4e.js";import"./TouchPan.be18c5c6.js";import"./QTooltip.f083d71e.js";import"./_commonjsHelpers.b8add541.js";const he={class:"text-subtitle2 q-px-sm"},De={class:"text-bold text-blue-14"},qe={class:"row items-center"},Ce=n("span",{class:"gt-sm q-ml-sm"},"\uB2E4\uC2DC \uBD88\uB7EC\uC624\uAE30",-1),ke=n("span",{class:"gt-sm q-ml-sm"},"\uAE00\uC4F0\uAE30",-1),be={class:"row q-px-sm items-center"},Qe={class:"col-12 col-sm-8 col-md-9 col-lg-10"},Ve={class:"col-12 col-sm-4 col-md-3 col-lg-2 q-gutter-x-sm text-right"},Ne=n("span",{class:"q-ml-sm"},"\uC218\uC815\uD558\uAE30",-1),Se=n("span",{class:"q-ml-sm"},"\uB4F1\uB85D\uD558\uAE30",-1),we=n("span",{class:"q-ml-sm"},"\uB2EB\uAE30",-1),Be=["innerHTML"],na={__name:"NoticeBoard",setup(Ie){const z=xe(),v=ve(),V=ae(),c=i(!0),g=i({deptCd:"",deptNm:""});te(()=>{g.value.deptCd=V.query.paramDeptCd,g.value.deptNm=V.query.paramDeptNm,C()});const y=i("");i(!1);const N=i(null),r=i({title:"",contents:""}),J=se(()=>v.screen.lt.sm?"150px":"400px"),D=i(!1),F=l=>{const s=j(l,"YYYY-MM-DD HH:mm:ss"),a=j().diff(s,"minutes");let m;return a<1?m="\uBC29\uAE08":a<60?m=`${a} \uBD84 \uC804`:a<24*60?m=`${Math.floor(a/60)}\uC2DC\uAC04 \uC804`:a<48*60?m="\uC5B4\uC81C":a<62*60?m="\uADF8\uC81C":m=s.format("MMM DD, YYYY"),m},S=i(null),P=l=>{S.value=l.currentTarget.querySelector(".data-id").dataset.id,console.log("dataId: ",S.value),Z(),setTimeout(()=>{c.value=!0,D.value=!0},500)};oe(()=>{const s=F("2024-02-06 15:30:30");console.log("Formatted Result: ",s)});let L=null;const K=()=>{N.value={},r.value={deptCd:g.value.deptCd,boardNo:0,userId:z.setEmpCd,userNm:z.setEmpNm,title:"",contents:"",viewCnt:0,makeDate:new Date().toLocaleDateString()},D.value=!0,L="I",c.value=!1},W=()=>{_e.exports.isEqual(r.value,N.value)?v.dialog({dark:!0,title:"\uC548\uB0B4",message:"\uBCC0\uACBD\uB41C \uC790\uB8CC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4. "}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{}):G(ge.dataJsonParse(L,r.value))},q=i("TITLE"),X=[{label:"\uC81C\uBAA9",value:"TITLE"},{label:"\uB0B4\uC6A9",value:"CONTENTS"}],U=i(null),C=async()=>{console.log("aa: ",q.value);try{const l=await E.post("/api/sys/noticeBoard_list",{paramSearchFg:q.value,paramSearchValue:y.value,paramDeptCd:g.value.deptCd});l.data.data.length===0&&le.create({type:"negative",position:"top",message:"\uC790\uB8CC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",group:!1,actions:[{icon:"close",color:"white",round:!0,handler:()=>{}}],timeout:2e3}),U.value=l.data.data}catch(l){console.error("Error fetching users:",l)}},Z=async()=>{try{const l=await E.post("/api/sys/noticeBoard_select",{paramDeptCd:g.value.deptCd,paramBoardNo:S.value});r.value.boardNo=l.data.data[0].boardNo,r.value.deptCd=l.data.data[0].deptCd,r.value.title=l.data.data[0].title,r.value.contents=l.data.data[0].contents,N.value=JSON.parse(JSON.stringify(r.value))}catch(l){console.error("Error fetching users:",l)}},G=l=>{E.post("/api/sys/noticeBoard_save",l).then(s=>{let a={};a.rtn=s.data.rtn,a.rtnMsg=s.data.rtnMsg,ye.notifyView(a)}).catch(s=>{console.log("error: ",s)})};return(l,s)=>(u(),w($,null,[e(pe,{class:H(o(v).screen.xs?"q-pa-xs":"q-pa-lg")},{default:t(()=>[e(B,{bordered:""},{default:t(()=>[e(Y,{class:"q-px-sm"},{default:t(()=>[e(o(d),{name:"list_alt"}),n("span",he,[p("\uC54C\uB9BC\uAE00 ( "),n("span",De,b(o(V).query.paramDeptNm),1),p(" )")])]),_:1}),e(Q,{class:"q-px-lg"},{default:t(()=>[n("div",qe,[e(o(_),{outline:"",color:"positive",onClick:C},{default:t(()=>[e(o(d),{name:"refresh",size:"xs"}),Ce]),_:1}),e(k),e(ee,{style:{"min-width":"80px"},filled:"",dense:"",square:"",outlined:"",color:o(v).dark.isActive?"lime-11":"dark","bg-color":o(v).dark.isActive?"green":"grey-5","options-dense":"",modelValue:q.value,"onUpdate:modelValue":s[0]||(s[0]=a=>q.value=a),options:X,"option-value":"value","option-label":"label","emit-value":"","map-options":""},null,8,["color","bg-color","modelValue"]),e(R,{square:"",outlined:"","bottom-slots":"",modelValue:y.value,"onUpdate:modelValue":s[2]||(s[2]=a=>y.value=a),dense:"",class:"q-pa-none",style:ne({width:J.value}),onKeyup:ie(C,["enter"])},{append:t(()=>[y.value!==""?(u(),f(o(d),{key:0,size:"xs",name:"close",onClick:s[1]||(s[1]=a=>y.value=""),class:"cursor-pointer"})):x("",!0),e(o(d),{name:"search",size:"xs",class:"cursor-pointer",onClick:C})]),_:1},8,["modelValue","style"]),e(k),e(o(_),{outline:"",color:"positive",onClick:K},{default:t(()=>[e(o(d),{name:"edit",size:"xs"}),ke]),_:1})])]),_:1}),e(I,{class:"q-py-xs"}),e(Q,{class:H([o(v).screen.xs?"q-px-none":"q-pa-lg","q-py-sm"])},{default:t(()=>[e(me,{style:{height:"360px","max-width":"100%"}},{default:t(()=>[e(ce,null,{default:t(()=>[(u(!0),w($,null,ue(U.value,a=>(u(),w("div",{key:a.boardNo},[M((u(),f(O,{clickable:"",onClick:P},{default:t(()=>[e(T,null,{default:t(()=>[e(h,{"data-id":a.boardNo,class:"data-id text-bold",lines:"1"},{default:t(()=>[p(b(a.title),1)]),_:2},1032,["data-id"]),e(h,{caption:"",lines:"2",innerHTML:a.contents},null,8,["innerHTML"])]),_:2},1024),e(T,{side:"",top:""},{default:t(()=>[e(h,{caption:""},{default:t(()=>[p(b(F(a.makeDate)),1)]),_:2},1024),e(h,{caption:""},{default:t(()=>[e(o(d),{name:"star",color:"orange"}),p(" "+b(a.userNm),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)),[[de]]),e(I,{spaced:"",inset:""})]))),128))]),_:1})]),_:1})]),_:1},8,["class"])]),_:1})]),_:1},8,["class"]),e(re,{"full-width":"","full-height":"",modelValue:D.value,"onUpdate:modelValue":s[6]||(s[6]=a=>D.value=a)},{default:t(()=>[e(B,null,{default:t(()=>[e(Y,{class:"q-py-xs text-subtitle1 text-bold"},{default:t(()=>[p(" \uAC8C\uC2DC\uD310 \uAD00\uB9AC "),e(k),M(e(o(_),{rounded:"",dense:"",color:"dark",icon:"close",size:"xs",class:"q-pa-xs"},null,512),[[A]])]),_:1}),e(Q,null,{default:t(()=>[n("div",be,[n("div",Qe,[e(O,null,{default:t(()=>[e(h,{class:"self-center q-mr-md"},{default:t(()=>[p("\uC81C\uBAA9")]),_:1}),e(T,null,{default:t(()=>[e(R,{readonly:c.value,autofocus:"",dense:"",modelValue:r.value.title,"onUpdate:modelValue":s[3]||(s[3]=a=>r.value.title=a)},null,8,["readonly","modelValue"])]),_:1})]),_:1})]),e(k),n("div",Ve,[c.value?(u(),f(o(_),{key:0,outline:"",color:"primary",onClick:s[4]||(s[4]=a=>c.value=!1)},{default:t(()=>[e(o(d),{name:"edit",size:"xs"}),Ne]),_:1})):x("",!0),c.value?x("",!0):(u(),f(o(_),{key:1,outline:"",color:"primary",onClick:W},{default:t(()=>[e(o(d),{name:"save",size:"xs"}),Se]),_:1})),M((u(),f(o(_),{outline:"",color:"positive"},{default:t(()=>[e(o(d),{name:"close",size:"xs"}),we]),_:1})),[[A]])])])]),_:1}),e(I),e(Q,null,{default:t(()=>[c.value?(u(),f(B,{key:0,flat:"",class:"q-mx-xl"},{default:t(()=>[n("span",{class:"q-px-lg",innerHTML:r.value.contents},null,8,Be)]),_:1})):x("",!0),c.value?x("",!0):(u(),f(fe,{key:1,modelValue:r.value.contents,"onUpdate:modelValue":s[5]||(s[5]=a=>r.value.contents=a),"min-height":"20rem","max-height":"50em"},null,8,["modelValue"]))]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};export{na as default};
