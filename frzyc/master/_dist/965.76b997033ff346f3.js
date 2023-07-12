"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[965],{46087:(t,e,n)=>{n.r(e),n.d(e,{default:()=>ne});var i=n(37027),a=n(92135),r=n(67170),l=n(24617),s=n(18423),o=n(4837),c=n(43815),d=n(35762),u=n(78862),h=n(32782),Z=n(98621),f=n(61125),m=n(92368),p=n(86028),y=n(20387),g=n(74876),v=n(5282),b=n(86821),w=n(78374),x=n(77726),S=n(57697),k=n(5450),K=n(93124),C=n(60738),B=n(67349),P=n(66204),X=n(98976),E=n(15878),I=n(25648),A=n(31691),R=n(74499);let G,O=t=>t;const U=["rarity","onChange","filter"];function W(t){let{rarity:e,onChange:n,filter:i}=t,a=(0,E.Z)(t,U);const{t:r}=(0,X.$G)("artifact");return(0,R.tZ)(I.Z,Object.assign({},a,{title:e?(0,R.tZ)(A.q,{stars:e,inline:!0}):r(G||(G=O`editor.rarity`)),color:e?"success":"primary",children:[5,4,3].map((t=>(0,R.tZ)(K.Z,{disabled:!i(t),onClick:()=>n(t),children:(0,R.tZ)(A.q,{stars:t,inline:!0})},t)))}))}var j=n(59349),D=n(93189),L=n(36199),T=n(25063),z=n(86834);let M,$=t=>t;const H=["slotKey","onChange","hasUnselect"];function F(t){let{slotKey:e="",onChange:n,hasUnselect:a=!1}=t,r=(0,E.Z)(t,H);const{t:l}=(0,X.$G)(["artifact","ui"]);return(0,R.BX)(I.Z,Object.assign({title:l(e?`artifact:slotName:${e}`:"artifact:slot"),color:e?"success":"primary",startIcon:e?(0,R.tZ)(z.Z,{slotKey:e}):void 0},r,{children:[a&&(0,R.BX)(K.Z,{selected:""===e,disabled:""===e,onClick:()=>n(""),children:[(0,R.tZ)(D.Z,{children:(0,R.tZ)(u.Z,{})}),(0,R.tZ)(L.Z,{children:l(M||(M=$`ui:unselect`))})]}),a&&(0,R.tZ)(T.Z,{}),i.Ex.map((t=>(0,R.BX)(K.Z,{selected:e===t,disabled:e===t,onClick:()=>n(t),children:[(0,R.tZ)(D.Z,{children:(0,R.tZ)(z.Z,{slotKey:t})}),(0,R.tZ)(L.Z,{children:l(`artifact:slotName:${t}`)})]},t)))]}))}var V=n(56958),Y=n(65971),N=n(9994),_=n(25282),J=n(90137);const q=["value","onChange","disabled","float"];function Q(t){let{value:e,onChange:n,disabled:i=!1,float:a=!1}=t,r=(0,E.Z)(t,q);const[l,s]=(0,P.useState)(""),o=(0,P.useCallback)((()=>{if(""===l)return n(0);const t=a?parseFloat:parseInt;n(t(l))}),[n,l,a]);return(0,P.useEffect)((()=>{var t;return s(null!=(t=null==e?void 0:e.toString())?t:"")}),[e,s]),(0,R.tZ)(J.Z,Object.assign({value:l,"aria-label":"custom-input",type:"number",onChange:t=>s(t.target.value),onBlur:o,disabled:i,onKeyDown:t=>"Enter"===t.key&&o()},r))}var tt=n(90242),et=n(69360),nt=n(91626),it=n(53088),at=n(75767),rt=n(96772),lt=n(48878),st=n(9070);i.Gt.filter((t=>!t.startsWith("Prayers")));var ot=n(3885),ct=n(69865),dt=n(71187);function ut({efficiency:t,max:e=!1,t:n,valid:i}){const a=e?"maxSubEff":"curSubEff";return(0,R.tZ)(N.Z,{sx:{py:1,px:2},children:(0,R.BX)(b.ZP,{container:!0,spacing:1,children:[(0,R.tZ)(b.ZP,{item:!0,children:n(`editor.${a}`)}),(0,R.tZ)(b.ZP,{item:!0,flexGrow:1,children:(0,R.tZ)(ct.Z,{title:(0,R.BX)("span",{children:[(0,R.tZ)(k.Z,{variant:"h6",children:n(`editor.${a}`)}),(0,R.tZ)(k.Z,{children:(0,R.tZ)(X.cC,{t:n,i18nKey:`editor.${a}Desc`})})]})})}),(0,R.tZ)(b.ZP,{item:!0,xs:"auto",children:(0,R.tZ)(dt.Z,{valid:i,max:900,value:i?t:"ERR"})})]})})}var ht=n(32932),Zt=n(6764),ft=n(30491),mt=n(79154),pt=n(4377);let yt,gt,vt,bt,wt,xt,St,kt=t=>t;function Kt({index:t,artifact:e,setSubstat:n}){var a;const{t:l}=(0,X.$G)("artifact"),{mainStatKey:o="",rarity:c=5}=null!=e?e:{},{key:d="",value:u=0,rolls:h=[],efficiency:Z=0}=null!=(a=null==e?void 0:e.substats[t])?a:{},f=h.reduce(((t,e)=>t+e),0),m=pt.ZP.unit(d),p=h.length;let y="",g=[],v=0;if(e){const t=e.rarity,{numUpgrades:n,high:a}=i.i0[t];v=n+a-3-p,g=d?(0,r.ME)(d,t):[]}const C=7-g.length;!p&&d&&u&&(y=y||l(yt||(yt=kt`editor.substat.error.noCalc`))),v<0&&(y=y||l("editor.substat.error.noOverRoll",{value:v+p}));const B=(0,P.useMemo)((()=>d?[{value:0},...(0,r.K_)(c,d).map((t=>({value:t})))]:[{value:0}]),[d,c]);return(0,R.BX)(N.Z,{children:[(0,R.tZ)(w.Z,{sx:{display:"flex"},children:(0,R.BX)(x.Z,{size:"small",sx:{width:"100%",display:"flex"},children:[(0,R.BX)(I.Z,{startIcon:d?(0,R.tZ)(lt.C,{statKey:d}):void 0,title:d?(0,R.tZ)(V.w0,{statKey:d}):l("editor.substat.substatFormat",{value:t+1}),disabled:!e,color:d?"success":"primary",sx:{whiteSpace:"nowrap"},children:[d&&(0,R.tZ)(K.Z,{onClick:()=>n(t,{key:"",value:0}),children:l(gt||(gt=kt`editor.substat.noSubstat`))}),i._m.filter((t=>o!==t)).map((e=>(0,R.BX)(K.Z,{selected:d===e,disabled:d===e,onClick:()=>n(t,{key:e,value:0}),children:[(0,R.tZ)(D.Z,{children:(0,R.tZ)(lt.C,{statKey:e})}),(0,R.tZ)(L.Z,{children:(0,R.tZ)(V.w0,{statKey:e})})]},e)))]}),(0,R.tZ)(Zt.CC,{sx:{flexBasis:30,flexGrow:1},children:(0,R.tZ)(Zt.ZP,{float:"%"===m,placeholder:l(vt||(vt=kt`editor.substat.selectSub`)),value:d?u:void 0,onChange:e=>n(t,{key:d,value:null!=e?e:0}),disabled:!d,error:!!y,sx:{px:1},inputProps:{sx:{textAlign:"right"}}})}),!!g.length&&(0,R.tZ)(mt.Z,{children:l(bt||(bt=kt`editor.substat.nextRolls`))}),g.map(((e,i)=>{var a,l,o;let h=(0,r.Jj)(f+e,m);return h=null!=(a=null==(l=st.G.art.subRollCorrection[c])||null==(o=l[d])?void 0:o[h])?a:h,(0,R.tZ)(S.Z,{color:`roll${(0,s.re)(C+i,1,6)}`,disabled:u&&!p||v<=0,onClick:()=>n(t,{key:d,value:parseFloat(h)}),children:h},i)}))]})}),(0,R.tZ)(w.Z,{px:2,children:(0,R.tZ)(Ct,{value:u,marks:B,setValue:e=>{var i;return n(t,{key:d,value:null!=(i=e)?i:0})},disabled:!d})}),(0,R.tZ)(w.Z,{sx:{px:1,pb:1},children:y?(0,R.tZ)(ft.Z,{color:"error",children:l(wt||(wt=kt`ui:error`))}):(0,R.BX)(b.ZP,{container:!0,children:[(0,R.tZ)(b.ZP,{item:!0,children:(0,R.tZ)(ft.Z,{color:0===p?"secondary":`roll${(0,s.re)(p,1,6)}`,children:p?l("editor.substat.RollCount",{count:p}):l(xt||(xt=kt`editor.substat.noRoll`))})}),(0,R.tZ)(b.ZP,{item:!0,flexGrow:1,children:!!h.length&&[...h].sort().map(((t,e)=>(0,R.tZ)(k.Z,{component:"span",color:`roll${(0,s.re)(C+g.indexOf(t),1,6)}.main`,sx:{ml:1},children:(0,r.Jj)(t,m)},`${e}.${t}`)))}),(0,R.tZ)(b.ZP,{item:!0,xs:"auto",flexShrink:1,children:(0,R.tZ)(k.Z,{children:(0,R.BX)(X.cC,{t:l,i18nKey:"editor.substat.eff",color:"text.secondary",children:["Efficiency: ",(0,R.tZ)(dt.Z,{valid:!0,max:100*p,value:Z||l(St||(St=kt`editor.substat.noStat`))})]})})})]})})]})}function Ct({value:t,setValue:e,marks:n,disabled:i=!1}){var a,r;const[l,s]=(0,P.useState)(t);return(0,P.useEffect)((()=>s(t)),[t]),(0,R.tZ)(ht.ZP,{value:l,step:null,disabled:i,marks:n,min:0,max:null!=(a=null==(r=n[n.length-1])?void 0:r.value)?a:0,onChange:(t,e)=>s(e),onChangeCommitted:(t,n)=>e(n),valueLabelDisplay:"auto"})}const Bt=n.p+"scan_art_main.8e6fecde6da1a4ee.png",Pt=n.p+"snippet.5573acbcba497db1.png";function Xt({modalShow:t,hide:e}){return(0,R.tZ)(et.Z,{open:t,onClose:e,children:(0,R.BX)(Y.Z,{children:[(0,R.tZ)(v.Z,{sx:{py:1},children:(0,R.BX)(b.ZP,{container:!0,children:[(0,R.tZ)(b.ZP,{item:!0,flexGrow:1,children:(0,R.tZ)(k.Z,{variant:"subtitle1",children:"How do Upload Screenshots for parsing"})}),(0,R.tZ)(b.ZP,{item:!0,children:(0,R.tZ)(_.Z,{onClick:e})})]})}),(0,R.tZ)(T.Z,{}),(0,R.BX)(v.Z,{children:[(0,R.BX)(B.Z,{variant:"outlined",severity:"warning",children:["NOTE: Artifact Scanning currently only works for",(0,R.tZ)("strong",{children:"ENGLISH"})," artifacts."]}),(0,R.BX)(b.ZP,{container:!0,spacing:1,mt:1,children:[(0,R.tZ)(b.ZP,{item:!0,xs:8,md:4,children:(0,R.tZ)(w.Z,{component:"img",alt:"snippet of the screen to take",src:Pt,width:"100%",height:"auto"})}),(0,R.BX)(b.ZP,{item:!0,xs:12,md:8,children:[(0,R.tZ)(k.Z,{gutterBottom:!0,children:"Using screenshots can dramatically decrease the amount of time you manually input in stats on the Genshin Optimizer."}),(0,R.tZ)(k.Z,{variant:"h5",children:"Where to snip the screenshot."}),(0,R.BX)(k.Z,{gutterBottom:!0,children:["In game, Open your bag, and navigate to the artifacts tab. Select the artifact you want to scan with Genshin Optimizer."," ",(0,R.tZ)("b",{children:"Only artifact from this screen can be scanned."})]}),(0,R.tZ)(k.Z,{variant:"h6",children:"Single artifact"}),(0,R.BX)(k.Z,{gutterBottom:!0,children:["To take a screenshot, in Windows, the shortcut is"," ",(0,R.tZ)("strong",{children:"Shift + WindowsKey + S"}),". Once you selected the region, the image is automatically included in your clipboard."]}),(0,R.tZ)(k.Z,{variant:"h6",children:"Multiple artifacts"}),(0,R.BX)(k.Z,{gutterBottom:!0,children:["To take advantage of batch uploads, you can use a tool like"," ",(0,R.tZ)("a",{href:"https://picpick.app/",target:"_blank",rel:"noreferrer",children:"PicPick"})," ","to create a macro to easily to screenshot a region to screenshot multiple artifacts at once."]}),(0,R.tZ)(k.Z,{variant:"h5",children:"What to include in the screenshot."}),(0,R.BX)(k.Z,{children:["As shown in the Image, starting from the top with the artifact name, all the way to the set name(the text in green)."," "]})]}),(0,R.BX)(b.ZP,{item:!0,xs:12,md:7,children:[(0,R.tZ)(k.Z,{variant:"h5",children:"Adding Screenshot to Genshin Optimizer"}),(0,R.tZ)(k.Z,{children:"At this point, you should have the artifact snippet either saved to your harddrive, or in your clipboard."}),(0,R.tZ)(k.Z,{gutterBottom:!0,children:'You can click on the box next to "Browse" to browse the files in your harddrive for multiple screenshots.'}),(0,R.BX)(k.Z,{children:["For single screenshots from the snippets, just press"," ",(0,R.tZ)("strong",{children:"Ctrl + V"})," to paste from your clipboard."]}),(0,R.BX)(k.Z,{gutterBottom:!0,children:["You should be able to see a Preview of your artifact snippet, and after waiting a few seconds, the artifact set and the substats will be filled in in the ",(0,R.tZ)("b",{children:"Artifact Editor"}),"."]}),(0,R.tZ)(k.Z,{variant:"h5",children:"Finishing the Artifact"}),(0,R.BX)(k.Z,{children:["Unfortunately, computer vision is not 100%. There will always be cases where something is not scanned properly. You should always double check the scanned artifact values! Once the artifact has been filled, Click on ",(0,R.tZ)("strong",{children:"Add Artifact"})," to finish editing the artifact."]})]}),(0,R.tZ)(b.ZP,{item:!0,xs:8,md:5,children:(0,R.tZ)(w.Z,{component:"img",alt:"main screen after importing stats",src:Bt,width:"100%",height:"auto"})})]})]}),(0,R.tZ)(T.Z,{}),(0,R.tZ)(v.Z,{sx:{py:1},children:(0,R.tZ)(_.Z,{large:!0,onClick:e})})]})})}var Et=n(63304),It=n(89565);const At={r:255,g:204,b:50},Rt=new class{constructor(t,e){this.data={},this.init=void 0,this.deinit=void 0,this.init=t,this.deinit=e}async borrow(t,e){this.data[t]||(this.data[t]={value:this.init(t),refCount:0});const n=this.data[t];n.refCount+=1;const i=await e(n.value);return n.refCount-=1,n.refCount||(delete this.data[t],this.deinit(t,n.value)),i}}((async t=>{const e=(0,Et.createScheduler)(),n=Array(2).fill(0).map((async n=>{const i=await(0,Et.createWorker)({errorHandler:console.error});await i.load(),await i.loadLanguage(t),await i.initialize(t),e.addWorker(i)}));return await Promise.any(n),e}),((t,e)=>{e.then((t=>t.terminate()))})),Gt=(t,e)=>{switch(e.type){case"upload":return{processed:t.processed,outstanding:[...t.outstanding,...e.files]};case"processing":return{processed:t.processed,outstanding:[...t.outstanding]};case"processed":return t.outstanding[0].file===e.file?{processed:[...t.processed,e.result],outstanding:t.outstanding.slice(1)}:t;case"pop":return{processed:t.processed.slice(1),outstanding:t.outstanding};case"clear":return{processed:[],outstanding:[]}}};function Ot(t){if(t.result)return;const{file:e,fileName:n}=t;t.imageURL=Ut(e),t.result=t.imageURL.then((async t=>{const a=await async function(t){const e=await(u=t,new Promise((t=>{const e=new Image;e.onload=({target:e})=>t(function(t){const e=document.createElement("canvas"),n=e.getContext("2d");return e.width=t.width,e.height=t.height,n.drawImage(t,0,0,t.width,t.height),n.getImageData(0,0,t.width,t.height)}(e)),e.src=u}))),n=e.width,i=Math.floor(e.height/2),a={rectangle:{top:i,left:0,width:n,height:i}},r=[Wt(Dt(e,[140,140,140],[255,255,255],{mode:"bw",region:"top"})),Wt(Dt(e,[30,50,80],[160,160,160],{region:"bot"}),a),Wt(Dt(e,[30,160,30],[200,255,200],{mode:"bw",region:"bot"}),a)],l=function(t,e,n){const i=t;let a=0,r=0;const l=new Set([]);for(let t=0;t<n;t++){let n=0,o=!1;for(let a=0;a<e;a++){const r=4*(t*e+a);jt({r:i[r],g:i[r+1],b:i[r+2]},At)?o||(o=!0,n++):o=!1}a!==n?(a=n,r=1):a&&(r++,r>=10&&l.add((0,s.re)(a,3,5)))}return l}(e.data,e.width,e.height),[o,c,d]=await Promise.all(r);var u;return{whiteTexts:o,substatTexts:c,artifactSetTexts:d,rarities:l}}(t),[l,o]=function(t,e,n,a,l,o){const c=[...new Set([...e,"EmblemOfSeveredFate"])];let d=-1,u=[{setKey:"EmblemOfSeveredFate",rarity:3,level:0,slotKey:"flower",mainStatKey:"hp",substats:[],location:"",lock:!1}];const h=(0,s.K8)(i.$W,(t=>{let n=0;if(e.size){n+=[...e].reduce(((e,n)=>e+((0,nt.Sk)(n).rarity.includes(t)?1:0)),0)/e.size}if(a.length){n+=a.reduce(((e,n)=>e+((0,r.UW)(n.key,n.value,t).length?1:0)),0)/a.length*2}return n}));for(const t of i.Ex)for(const a of i.x1[t].stats){const i=(n.has(t)?1:0)+(l.has(a)?1:0),s=o.filter((t=>"%"!==t.unit||"%"===pt.ZP.unit(a))).map((t=>t.mainStatValue));for(const[n,l]of Object.entries(h)){const o=parseInt(n),h=c.filter((t=>(0,nt.Sk)(t).rarity.includes(o))),Z=i+l;if(!(Z+2<d)){for(const n of s){const i=(0,r.HD)(o,a),l=Math.max(0,i.findIndex((t=>t>=n))),s=Z+(i[l]===n?1:0);for(const n of h){const i=s+(e.has(n)?1:0);i>=d&&(i>d&&(u=[]),d=i,u.push({setKey:n,rarity:o,level:l,slotKey:t,mainStatKey:a,substats:[],location:"",lock:!1}))}}if(Z>=d){const n=0;for(const i of h){const r=Z+(e.has(i)?1:0);r>d&&(u=[]),d=r,u.push({setKey:i,rarity:o,level:n,slotKey:t,mainStatKey:a,substats:[],location:"",lock:!1})}}}}}const Z={},f={setKey:new Set,rarity:new Set,level:new Set,slotKey:new Set,mainStatKey:new Set,mainStatVal:new Set},m=u[0],p=(0,r.Bv)(m.mainStatKey,m.rarity,m.level);m.substats=a.filter(((t,e)=>t.key!==m.mainStatKey&&a.slice(0,e).every((e=>e.key!==t.key))));for(let t=m.substats.length;t<4;t++)m.substats.push({key:"",value:0});for(const t of u)f.setKey.add(t.setKey),f.rarity.add(t.rarity),f.level.add(t.level),f.slotKey.add(t.slotKey),f.mainStatKey.add(t.mainStatKey);function y(t,e,n){return(0,R.BX)(R.HY,{children:["Unknown ",e," : Set to"," ",(0,R.tZ)(It.Z,{color:"error",children:n(t)})]})}function g(t,e,n,i){return(0,R.BX)(R.HY,{children:["Ambiguous ",n," ",(0,R.tZ)(It.Z,{color:"error",children:i(t)})," : May also be"," ",e.filter((e=>e!==t)).map(((t,e)=>(0,R.BX)(R.HY,{children:[(0,R.tZ)("b",{children:e>0?"/":""}),(0,R.tZ)(It.Z,{color:"warning",children:i(t)})]})))]})}function v(t,e,n){return(0,R.BX)(R.HY,{children:["Detected ",e," ",(0,R.tZ)(It.Z,{color:"success",children:n(t)})]})}function b(t,e,n){return(0,R.BX)(R.HY,{children:["Inferred ",e," ",(0,R.tZ)(It.Z,{color:"warning",children:n(t)})]})}function w(t,e,n,i){const a=new Set([...f[t]].filter((t=>e.has(t))));a.size>1?Z[t]=g(m[t],[...e],n,i):1===a.size?Z[t]=v(m[t],n,i):f[t].size>1?Z[t]=y(m[t],n,i):Z[t]=b(m[t],n,i)}w("setKey",e,"Set",(t=>(0,nt.Sk)(t).name)),w("rarity",t,"Rarity",(t=>(0,R.BX)(R.HY,{children:[t," ",1!==t?"Stars":"Star"]}))),w("slotKey",n,"Slot",(t=>i.x1[t].name)),w("mainStatKey",l,"Main Stat",(t=>(0,R.tZ)(R.HY,{children:pt.ZP.getStr(t)}))),Z.substats=(0,R.tZ)(R.HY,{children:m.substats.filter((t=>""!==t.key)).map(((t,e)=>(0,R.tZ)("div",{children:v(t,"Sub Stat",(t=>(0,R.BX)(R.HY,{children:[pt.ZP.getStr(t.key),"+",(0,r.Jj)(t.value,pt.ZP.unit(t.key)),pt.ZP.unit(t.key)]})))},e)))});const x=t=>(0,R.BX)(R.HY,{children:[(0,r.Jj)(t,pt.ZP.unit(m.mainStatKey)),pt.ZP.unit(m.mainStatKey)]});o.find((t=>t.mainStatValue===p))?l.has(m.mainStatKey)?(Z.level=v(m.level,"Level",(t=>"+"+t)),Z.mainStatVal=v(p,"Main Stat value",x)):(Z.level=b(m.level,"Level",(t=>"+"+t)),Z.mainStatVal=b(p,"Main Stat value",x)):(Z.level=y(m.level,"Level",(t=>"+"+t)),Z.mainStatVal=y(p,"Main Stat value",x));return[m,Z]}(a.rarities,function(t){const e=new Set([]);for(const n of t)for(const t of i.Gt)(0,s.UX)(n.replace(/\W/g,""),(0,nt.Sk)(t).nameRaw.replace(/\W/g,""))<=2&&e.add(t);return e}(a.artifactSetTexts),function(t){const e=new Set;for(const n of t)for(const t of i.Ex)(0,s.UX)(n.replace(/\W/g,""),i.x1[t].name.replace(/\W/g,""))<=2&&e.add(t);return e}(a.whiteTexts),function(t){const e=[];for(let n of t)n=n.replace(/^[\W]+/,"").replace(/\n/,""),i._m.forEach((t=>{const i=pt.ZP.getStr(t),a=("%"===pt.ZP.unit(t)?new RegExp(i+"\\s*\\+\\s*(\\d+[\\.|,]+\\d)%","im"):new RegExp(i+"\\s*\\+\\s*(\\d+,\\d+|\\d+)($|\\s)","im")).exec(n);a&&e.push({key:t,value:parseFloat(a[1].replace(/,/g,".").replace(/\.{2,}/g,"."))})}));return e.slice(0,4)}(a.substatTexts),function(t){const e=new Set([]);for(const l of t)for(const t of i.rW){var n,a,r;l.toLowerCase().includes(null!=(n=null==(a=pt.ZP.getStr(t))?void 0:a.toLowerCase())?n:"")&&e.add(t),t.includes("_bonu")&&(0,s.UX)(l.replace(/\W/g,""),(null!=(r=pt.ZP.getStr(t))?r:"").replace(/\W/g,""))<=1&&e.add(t)}return e}(a.whiteTexts),function(t){const e=[];for(const n of t){let t=/(\d+[,|\\.]+\d)%/,i=t.exec(n);i&&e.push({mainStatValue:parseFloat(i[1].replace(/,/g,".").replace(/\.{2,}/g,".")),unit:"%"}),t=/(\d+[,|\\.]\d{3}|\d{2,3})/,i=t.exec(n),i&&e.push({mainStatValue:parseInt(i[1].replace(/[,|\\.]+/g,""))})}return e}(a.whiteTexts));return{file:e,result:{fileName:n,imageURL:t,artifact:l,texts:o}}}))}const Ut=t=>new Promise((e=>{const n=new FileReader;n.onloadend=({target:t})=>e(t.result),n.readAsDataURL(t)}));async function Wt(t,e){const n=function(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,e.getContext("2d").putImageData(t,0,0),e}(t);return(await Rt.borrow("eng",(async t=>await(await t).addJob("recognize",n,e)))).data.lines.map((t=>t.text))}function jt(t,e,n=5){const i=(t,e)=>Math.abs(t-e)<=n;return i(t.r,e.r)&&i(t.g,e.g)&&i(t.b,e.b)}function Dt(t,e,n,i){const{region:a="all",mode:r="color"}=i,l=Uint8ClampedArray.from(t.data),s="top"===a,o="bot"===a,c="all"===a,d="bw"===r,u="invert"===r,h=Math.floor(t.width*(t.height/2)*4);for(let t=0;t<l.length;t+=4){const i=l[t],a=l[t+1],r=l[t+2];(c||s&&t<h||o&&t>h)&&i>=e[0]&&i<=n[0]&&a>=e[1]&&a<=n[1]&&r>=e[2]&&r<=n[2]?d?l[t]=l[t+1]=l[t+2]=0:u&&(l[t]=255-i,l[t+1]=255-a,l[t+2]=255-r):l[t]=l[t+1]=l[t+2]=255}return new ImageData(l,t.width,t.height)}let Lt,Tt,zt,Mt,$t,Ht,Ft,Vt,Yt,Nt,_t,Jt,qt=t=>t;const Qt=new Set(i._m);function te(t,e){switch(e.type){case"reset":return;case"substat":{const{index:n,substat:i}=e,a=i.key?t.substats.findIndex((t=>t.key===i.key)):-1;return-1===a||a===n?t.substats[n]=i:[t.substats[n],t.substats[a]]=[t.substats[a],t.substats[n]],Object.assign({},t)}case"overwrite":return e.artifact;case"update":return Object.assign({},t,e.artifact)}}const ee=(0,f.ZP)("input")({display:"none"});function ne({artifactIdToEdit:t="",cancelEdit:e,allowUpload:n=!1,allowEmpty:f=!1,disableSet:E=!1,disableSlot:A=!1}){var G,O;const{t:U}=(0,X.$G)("artifact"),{database:D}=(0,P.useContext)(at.t),[L,T]=(0,P.useState)(!1),[z,M]=(0,l.NW)();(0,P.useEffect)((()=>D.arts.followAny(M)),[D,M]);const[$,H]=(0,P.useReducer)(te,void 0),J=(0,P.useMemo)((()=>$&&(0,rt.BG)($,!0)),[$]),[q,st]=(0,P.useState)(!1),[{processed:ct,outstanding:dt},ht]=(0,P.useReducer)(Gt,{processed:[],outstanding:[]}),Zt=ct[0],ft=dt[0],mt=(0,l.fJ)((()=>null==ft?void 0:ft.imageURL),[null==ft?void 0:ft.imageURL]),pt=(0,l.fJ)((()=>null==ft?void 0:ft.result),[null==ft?void 0:ft.result]),yt=ct.length+dt.length,gt=null!=(G=null==Zt?void 0:Zt.imageURL)?G:mt,{artifact:vt,texts:bt}=null!=Zt?Zt:{},wt=!(null==J||!J.location)||A;(0,P.useEffect)((()=>{!J&&vt&&H({type:"overwrite",artifact:vt})}),[J,vt,H]),(0,P.useEffect)((()=>{const t=Math.min(16-ct.length,3,dt.length),e=t&&!dt[0].result;dt.slice(0,t).forEach(Ot),e&&ht({type:"processing"})}),[ct.length,dt]),(0,P.useEffect)((()=>{pt&&ht(Object.assign({type:"processed"},pt))}),[pt,ht]);const xt=(0,P.useCallback)((t=>{t&&(T(!0),ht({type:"upload",files:Array.from(t).map((t=>({file:t,fileName:t.name})))}))}),[ht,T]),St=(0,P.useCallback)((()=>ht({type:"clear"})),[ht]);(0,P.useEffect)((()=>{const t=t=>{var e;return xt(null==(e=t.clipboardData)?void 0:e.files)};return n&&window.addEventListener("paste",t),()=>{n&&window.removeEventListener("paste",t)}}),[xt,n]);const kt=(0,P.useCallback)((t=>{t.target&&(xt(t.target.files),t.target.value="")}),[xt]),{old:Ct,oldType:Bt}=(0,P.useMemo)((()=>{var e;const n=z&&t&&D.arts.get(t);if(n)return{old:n,oldType:"edit"};if(void 0===J)return{old:void 0,oldType:""};const{duplicated:i,upgraded:a}=z&&D.arts.findDups(J);return{old:null!=(e=i[0])?e:a[0],oldType:0!==i.length?"duplicate":"upgrade"}}),[J,t,D,z]),{artifact:Pt,errors:Et}=(0,P.useMemo)((()=>{if(!J)return{artifact:void 0,errors:[]};const e=(0,rt.m1)(J,t);return Ct&&(e.artifact.location=Ct.location),e}),[J,t,Ct]);(0,P.useEffect)((()=>{"new"===t&&(T(!0),H({type:"reset"}));const e=t&&z&&D.arts.get(t);e&&(T(!0),H({type:"overwrite",artifact:structuredClone(e)}))}),[t,D,z]);const It=J?(0,nt.Sk)(J.setKey):void 0,At=(0,P.useCallback)((()=>{null==e||e(),ht({type:"pop"}),H({type:"reset"})}),[e,H]),Rt=(0,P.useCallback)((t=>{var e,n;const a=t.setKey?(0,nt.Sk)(t.setKey):It;function r(t,e,n){return t&&e.includes(t)?t:null!=n?n:e[0]}t.setKey&&(t.rarity=r(null==J?void 0:J.rarity,a.rarity,Math.max(...a.rarity)),t.slotKey=r(null==J?void 0:J.slotKey,a.slots)),t.rarity&&(t.level=null!=(e=null==J?void 0:J.level)?e:0),t.level&&(t.level=(0,s.re)(t.level,0,4*(null!=(n=t.rarity)?n:J.rarity))),t.slotKey&&(t.mainStatKey=r(null==J?void 0:J.mainStatKey,i.x1[t.slotKey].stats)),t.mainStatKey&&(t.substats=[0,1,2,3].map((e=>J&&J.substats[e].key!==t.mainStatKey?J.substats[e]:{key:"",value:0}))),H({type:"update",artifact:t})}),[J,It,H]),Ut=(0,P.useCallback)(((t,e)=>{H({type:"substat",index:t,substat:e})}),[H]),Wt=!Et.length,{rarity:jt=5,level:Dt=0,slotKey:ne="flower"}=null!=J?J:{},{currentEfficiency:ie=0,maxEfficiency:ae=0}=Pt?it.Z.getArtifactEfficiency(Pt,Qt):{},re=ct.length||dt.length,le=(0,P.useCallback)((t=>{re&&t.preventDefault(),T(!1),e()}),[re,T,e]),se=(0,m.Z)(),oe=(0,p.Z)(se.breakpoints.up("md")),ce=J?i.fR.find((t=>J.mainStatKey.includes(t))):void 0,de=J?null!=ce?ce:"success":"primary",ue=(0,P.useCallback)((t=>Rt({setKey:t})),[Rt]),he=(0,P.useCallback)((t=>""===t||!(!wt||"circlet"===ne||"PrayersForDestiny"!==t&&"PrayersForIllumination"!==t&&"PrayersForWisdom"!==t&&"PrayersToSpringtime"!==t)),[wt,ne]);return(0,R.tZ)(et.Z,{open:L,onClose:le,children:(0,R.tZ)(P.Suspense,{fallback:(0,R.tZ)(y.Z,{variant:"rectangular",sx:{width:"100%",height:L?"100%":64}}),children:(0,R.BX)(Y.Z,{children:[(0,R.tZ)(Xt,{modalShow:q,hide:()=>st(!1)}),(0,R.tZ)(g.Z,{title:(0,R.tZ)(X.cC,{t:U,i18nKey:"editor.title",children:"Artifact Editor"}),action:(0,R.tZ)(_.Z,{disabled:!!re,onClick:le})}),(0,R.BX)(v.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,R.BX)(b.ZP,{container:!0,spacing:1,columns:{xs:1,md:2},children:[(0,R.BX)(b.ZP,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[(0,R.BX)(w.Z,{sx:{display:"flex",gap:1},children:[(0,R.tZ)(j.Z,{disabled:E,size:"small",artSetKey:null!=(O=null==J?void 0:J.setKey)?O:"",setArtSetKey:ue,sx:{flexGrow:1},label:null!=J&&J.setKey?"":U("editor.unknownSetName"),getOptionDisabled:({key:t})=>he(t)}),(0,R.tZ)(W,{rarity:J?jt:void 0,onChange:t=>Rt({rarity:t}),filter:t=>{var e;return!(null==It||null==(e=It.rarity)||null==e.includes||!e.includes(t))},disabled:!It})]}),(0,R.BX)(w.Z,{component:"div",display:"flex",children:[(0,R.tZ)(Q,{id:"filled-basic",label:"Level",variant:"filled",sx:{flexShrink:1,flexGrow:1,mr:1,my:0},margin:"dense",size:"small",value:Dt,disabled:!It,placeholder:"0~"+4*jt,onChange:t=>Rt({level:t})}),(0,R.BX)(x.Z,{children:[(0,R.tZ)(S.Z,{onClick:()=>Rt({level:Dt-1}),disabled:!It||0===Dt,children:"-"}),jt?[...Array(jt+1).keys()].map((t=>4*t)).map((t=>(0,R.tZ)(S.Z,{onClick:()=>Rt({level:t}),disabled:!It||Dt===t,children:t},t))):null,(0,R.tZ)(S.Z,{onClick:()=>Rt({level:Dt+1}),disabled:!It||Dt===4*jt,children:"+"})]})]}),(0,R.BX)(w.Z,{component:"div",display:"flex",children:[(0,R.tZ)(F,{disabled:wt||!It,slotKey:ne,onChange:t=>Rt({slotKey:t})}),(0,R.tZ)(N.Z,{sx:{p:1,ml:1,flexGrow:1},children:(0,R.tZ)(P.Suspense,{fallback:(0,R.tZ)(y.Z,{width:"60%"}),children:(0,R.tZ)(k.Z,{color:"text.secondary",children:J&&null!=It&&It.getSlotName(J.slotKey)?(0,R.BX)("span",{children:[(0,R.tZ)(tt.Z,{size:2,src:(0,a.Hp)(J.setKey,J.slotKey)}),null==It?void 0:It.getSlotName(J.slotKey)]}):U(Tt||(Tt=qt`editor.unknownPieceName`))})})})]}),(0,R.BX)(w.Z,{component:"div",display:"flex",children:[(0,R.tZ)(I.Z,{startIcon:null!=J&&J.mainStatKey?(0,R.tZ)(lt.C,{statKey:J.mainStatKey}):void 0,title:(0,R.tZ)("b",{children:J?(0,R.tZ)(V.w0,{statKey:J.mainStatKey}):U(zt||(zt=qt`mainStat`))}),disabled:!It,color:de,children:i.x1[ne].stats.map((t=>(0,R.tZ)(K.Z,{selected:(null==J?void 0:J.mainStatKey)===t,disabled:(null==J?void 0:J.mainStatKey)===t,onClick:()=>Rt({mainStatKey:t}),children:(0,R.tZ)(V.Rl,{statKey:t})},t)))}),(0,R.tZ)(N.Z,{sx:{p:1,ml:1,flexGrow:1},children:(0,R.tZ)(k.Z,{color:"text.secondary",children:J?(0,r.R1)(J.mainStatKey,jt,Dt):U(Mt||(Mt=qt`mainStat`))})})]}),(0,R.tZ)(ut,{valid:Wt,efficiency:ie,t:U}),ie!==ae&&(0,R.tZ)(ut,{max:!0,valid:Wt,efficiency:ae,t:U}),n&&(0,R.tZ)(N.Z,{children:(0,R.tZ)(v.Z,{sx:{display:"flex",flexDirection:"column",gap:1},children:(0,R.BX)(P.Suspense,{fallback:(0,R.tZ)(y.Z,{width:"100%",height:"100"}),children:[(0,R.BX)(b.ZP,{container:!0,spacing:1,alignItems:"center",children:[(0,R.tZ)(b.ZP,{item:!0,flexGrow:1,children:(0,R.BX)("label",{htmlFor:"contained-button-file",children:[(0,R.tZ)(ee,{accept:"image/*",id:"contained-button-file",multiple:!0,type:"file",onChange:kt}),(0,R.tZ)(S.Z,{component:"span",startIcon:(0,R.tZ)(o.Z,{}),children:"Upload Screenshot (or Ctrl-V)"})]})}),(0,R.tZ)(b.ZP,{item:!0,children:(0,R.tZ)(S.Z,{color:"info",sx:{px:2,minWidth:0},onClick:()=>st(!0),children:(0,R.tZ)(Z.Z,{})})})]}),gt&&(0,R.tZ)(w.Z,{display:"flex",justifyContent:"center",children:(0,R.tZ)(w.Z,{component:"img",src:gt,width:"100%",maxWidth:350,height:"auto",alt:"Screenshot to parse for artifact values"})}),yt>0&&(0,R.tZ)(Y.Z,{sx:{pl:2},children:(0,R.BX)(b.ZP,{container:!0,spacing:1,alignItems:"center",children:[!Zt&&ft&&(0,R.tZ)(b.ZP,{item:!0,children:(0,R.tZ)(C.Z,{size:"1em"})}),(0,R.tZ)(b.ZP,{item:!0,flexGrow:1,children:(0,R.tZ)(k.Z,{children:(0,R.BX)("span",{children:["Screenshots in file-queue:",(0,R.tZ)("b",{children:yt})]})})}),(0,R.tZ)(b.ZP,{item:!0,children:(0,R.tZ)(S.Z,{size:"small",color:"error",onClick:St,children:"Clear file-queue"})})]})})]})})})]}),(0,R.BX)(b.ZP,{item:!0,xs:1,display:"flex",flexDirection:"column",gap:1,children:[[0,1,2,3].map((t=>(0,R.tZ)(Kt,{index:t,artifact:Pt,setSubstat:Ut},t))),bt&&(0,R.tZ)(N.Z,{children:(0,R.BX)(v.Z,{children:[(0,R.tZ)("div",{children:bt.slotKey}),(0,R.tZ)("div",{children:bt.mainStatKey}),(0,R.tZ)("div",{children:bt.mainStatVal}),(0,R.tZ)("div",{children:bt.rarity}),(0,R.tZ)("div",{children:bt.level}),(0,R.tZ)("div",{children:bt.substats}),(0,R.tZ)("div",{children:bt.setKey})]})})]})]}),Ct&&(0,R.BX)(b.ZP,{container:!0,sx:{justifyContent:"space-around"},spacing:1,children:[(0,R.tZ)(b.ZP,{item:!0,xs:12,md:5.5,lg:4,children:(0,R.BX)(N.Z,{children:[(0,R.tZ)(k.Z,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:U("edit"!==Bt?"duplicate"===Bt?$t||($t=qt`editor.dupArt`):Ht||(Ht=qt`editor.upArt`):Ft||(Ft=qt`editor.beforeEdit`))}),(0,R.tZ)(ot.Z,{artifactObj:Ct})]})}),oe&&(0,R.tZ)(b.ZP,{item:!0,md:1,display:"flex",alignItems:"center",justifyContent:"center",children:(0,R.tZ)(N.Z,{sx:{display:"flex"},children:(0,R.tZ)(c.Z,{sx:{fontSize:40}})})}),(0,R.tZ)(b.ZP,{item:!0,xs:12,md:5.5,lg:4,children:(0,R.BX)(N.Z,{children:[(0,R.tZ)(k.Z,{sx:{textAlign:"center"},py:1,variant:"h6",color:"text.secondary",children:U(Vt||(Vt=qt`editor.preview`))}),(0,R.tZ)(ot.Z,{artifactObj:Pt})]})})]}),!Wt&&(0,R.tZ)(B.Z,{variant:"filled",severity:"error",children:Et.map(((t,e)=>(0,R.tZ)("div",{children:t},e)))}),(0,R.BX)(b.ZP,{container:!0,spacing:2,children:[(0,R.tZ)(b.ZP,{item:!0,children:"edit"===Bt?(0,R.tZ)(S.Z,{startIcon:(0,R.tZ)(d.Z,{}),onClick:()=>{D.arts.set(Ct.id,$),f?At():(T(!1),e())},disabled:!$||!Wt,color:"primary",children:U(Yt||(Yt=qt`editor.btnSave`))}):(0,R.tZ)(S.Z,{startIcon:(0,R.tZ)(d.Z,{}),onClick:()=>{D.arts.new(J),f?At():(T(!1),e())},disabled:!J||!Wt,color:"duplicate"===Bt?"warning":"primary",children:U(Nt||(Nt=qt`editor.btnAdd`))})}),(0,R.tZ)(b.ZP,{item:!0,flexGrow:1,children:f&&(0,R.tZ)(S.Z,{startIcon:(0,R.tZ)(u.Z,{}),disabled:!J,onClick:()=>{window.confirm(U(Lt||(Lt=qt`editor.clearPrompt`)))&&At()},color:"error",children:U(_t||(_t=qt`editor.btnClear`))})}),(0,R.tZ)(b.ZP,{item:!0,children:!1}),Ct&&"edit"!==Bt&&(0,R.tZ)(b.ZP,{item:!0,children:(0,R.tZ)(S.Z,{startIcon:(0,R.tZ)(h.Z,{}),onClick:()=>{D.arts.set(Ct.id,Object.assign({},$,{location:Ct.location})),f?At():T(!1)},disabled:!$||!Wt,color:"success",children:U(Jt||(Jt=qt`editor.btnUpdate`))})})]})]})]})})})}}}]);
//# sourceMappingURL=965.76b997033ff346f3.js.map