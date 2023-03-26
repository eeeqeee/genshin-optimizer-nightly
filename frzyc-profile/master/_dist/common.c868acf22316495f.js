(self.webpackChunk=self.webpackChunk||[]).push([[592],{24060:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var a=n(15878),r=n(91508),i=n(78374),l=n(32530),o=n(66204),s=n(98976),c=n(54715),d=n(34078),Z=n(82260),p=n(63980),h=n(29581),u=n(24088),g=n(74499);const m=["artSetKey","setArtSetKey","label"];function y(e){let{artSetKey:t,setArtSetKey:n,label:y=""}=e,f=(0,a.Z)(e,m);const{t:x}=(0,s.$G)(["artifact","artifactNames_gen"]);y=y||x("artifact:autocompleteLabels.set");const C=(0,o.useMemo)((()=>Object.entries(c.WO).flatMap((([e,t])=>t.map((t=>({key:t,label:x(`artifactNames_gen:${t}`),grouper:+e}))))).sort(u.Z)),[x]),v=(0,o.useCallback)((e=>e?(0,g.tZ)(p.Z,{src:(0,d.jU)(e),size:2}):void 0),[]),b=(0,o.useCallback)((e=>n(null!=e?e:"")),[n]);return(0,g.tZ)(Z._,Object.assign({options:C,valueKey:t,onChange:b,toImg:v,label:y,groupBy:e=>{var t,n;return null!=(t=null==(n=e.grouper)?void 0:n.toString())?t:""},renderGroup:e=>e.group&&(0,g.BX)(r.Z,{component:i.Z,children:[(0,g.BX)(l.Z,{sx:{top:"-1em"},children:[e.group," ",(0,g.tZ)(h.q,{stars:+e.group,inline:!0})]},`${e.group}Header`),e.children]},e.group)},f))}},85386:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=(0,n(61125).ZP)("img")({width:"100%",height:"auto"})},60715:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(15878),r=n(61125),i=n(57697),l=n(74499);const o=["children","disabled"],s=(0,r.ZP)(i.Z)((({theme:e})=>({"&.Mui-disabled":{backgroundColor:e.palette.primary.dark,color:e.palette.text.secondary}})));function c(e){let{children:t}=e,n=(0,a.Z)(e,o);return(0,l.tZ)(s,Object.assign({},n,{disabled:!0,children:t}))}},74082:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var a=n(15878),r=n(68946),i=n(72060),l=n(92368),o=n(86028),s=n(80954),c=n(78374),d=n(11611),Z=n(2377),p=n(11213),h=n(74499);const u=["value","totals","onChange"],g=(0,Z.X)([...r.U1]);function m(e){let{value:t,totals:n,onChange:Z}=e,m=(0,a.Z)(e,u);const y=(0,l.Z)(),f=!(0,o.Z)(y.breakpoints.up("sm"));return(0,h.tZ)(p.Z,Object.assign({exclusive:!0,value:t},m,{children:r.U1.map((e=>(0,h.tZ)(s.Z,{value:e,sx:{p:f?1:void 0,minWidth:f?0:"7em",display:"flex",gap:f?0:1},onClick:()=>Z(g(t,e)),children:(0,h.BX)(c.Z,{display:"flex",children:[(0,h.tZ)("strong",{children:e}),(0,h.tZ)(i.Z,{}),(0,h.tZ)(d.Z,{label:n[e],size:"small"})]})},e)))}))}},16299:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>S});var a=n(68946),r=n(78010),i=n(5282),l=n(86821),o=n(90137),s=n(25063),c=n(37270),d=n(78374),Z=n(5450),p=n(66204),h=n(98976),u=n(62440),g=n(59540),m=n(97278),y=n(53537),f=n(59401),x=n(50210),C=n(48774),v=n(63980),b=n(39006),w=n(29581),k=n(74082),B=n(47364),X=n(74499);function S({show:e,ascension:t=0,onHide:n,onSelect:S,filter:T=(()=>!0),weaponTypeFilter:z}){const{t:I}=(0,h.$G)(["page_weapon","weaponNames_gen"]),[P,M]=(0,p.useState)(z?[z]:[...a.yd]),{database:W}=(0,p.useContext)(m.t),[_,L]=(0,p.useState)(W.displayWeapon.get());(0,p.useEffect)((()=>W.displayWeapon.follow(((e,t)=>L(t)))),[W]),(0,p.useEffect)((()=>z&&M([z])),[z]);const[O,j]=(0,p.useState)(""),D=(0,p.useDeferredValue)(O),{rarity:E}=_,G=(0,p.useMemo)((()=>a.fG.filter((e=>T((0,g.ub)(e)))).filter((e=>P.includes((0,g.ub)(e).weaponType))).filter((e=>!D||I(`weaponNames_gen:${e}`).toLowerCase().includes(D.toLowerCase()))).filter((e=>E.includes((0,g.ub)(e).rarity))).sort(((e,t)=>(0,g.ub)(t).rarity-(0,g.ub)(e).rarity))),[D,T,E,I,P]),N=(0,p.useMemo)((()=>(0,y.W)(a.yd,(e=>a.fG.forEach((t=>{const n=(0,g.ub)(t).weaponType;e[n].total++,G.includes(t)&&e[n].current++}))))),[G]),V=(0,p.useMemo)((()=>(0,y.W)(a.U1,(e=>a.fG.forEach((t=>{const n=(0,g.ub)(t).rarity;e[n].total++,G.includes(t)&&e[n].current++}))))),[G]);return(0,X.tZ)(b.Z,{open:e,onClose:n,children:(0,X.BX)(f.Z,{children:[(0,X.tZ)(i.Z,{sx:{py:1},children:(0,X.BX)(l.ZP,{container:!0,spacing:1,children:[(0,X.tZ)(l.ZP,{item:!0,children:(0,X.tZ)(B.Z,{value:P,totals:N,onChange:M,disabled:!!z,size:"small"})}),(0,X.tZ)(l.ZP,{item:!0,children:(0,X.tZ)(k.Z,{sx:{height:"100%"},onChange:e=>W.displayWeapon.set({rarity:e}),value:E,totals:V,size:"small"})}),(0,X.tZ)(l.ZP,{item:!0,flexGrow:1,children:(0,X.tZ)(o.Z,{autoFocus:!0,size:"small",value:O,onChange:e=>j(e.target.value),label:I("weaponName"),sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})}),(0,X.tZ)(l.ZP,{item:!0,children:(0,X.tZ)(C.Z,{onClick:n})})]})}),(0,X.tZ)(s.Z,{}),(0,X.tZ)(i.Z,{children:(0,X.tZ)(l.ZP,{container:!0,spacing:1,children:G.map((e=>{var a;const i=(0,g.ub)(e);return(0,X.tZ)(l.ZP,{item:!0,lg:3,md:4,children:(0,X.tZ)(x.Z,{sx:{height:"100%"},children:(0,X.BX)(c.Z,{onClick:()=>{n(),S(e)},sx:{display:"flex"},children:[(0,X.tZ)(d.Z,{component:"img",src:(0,r.Aq)(e,t>=2),sx:{width:100,height:"auto"},className:` grad-${i.rarity}star`}),(0,X.BX)(d.Z,{sx:{flexGrow:1,px:1},children:[(0,X.tZ)(Z.Z,{variant:"subtitle1",children:i.name}),(0,X.BX)(Z.Z,{sx:{display:"flex",alignItems:"baseline"},children:[(0,X.tZ)(v.Z,{size:1.5,src:null==(a=u.Z.weaponTypes)?void 0:a[i.weaponType]}),(0,X.tZ)(w.q,{stars:i.rarity,colored:!0})]})]})]})})},e)}))})}),(0,X.tZ)(s.Z,{}),(0,X.tZ)(i.Z,{sx:{py:1},children:(0,X.tZ)(C.Z,{large:!0,onClick:n})})]})})}},36682:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>H});var a=n(15878),r=n(68946),i=n(78010),l=n(41508),o=n(14849),s=n(5282),c=n(78374),d=n(90137),Z=n(25063),p=n(86821),h=n(61125),u=n(23540),g=n(43874),m=n(39469),y=n(37270),f=n(5450),x=n(66204),C=n(98976),v=n(59401),b=n(50210),w=n(2089),k=n(48774),B=n(39006),X=n(97259),S=n(47946),T=n(29581),z=n(4958),I=n(47364),P=n(17609),M=n(88263),W=n(59695),_=n(97278),L=n(30963),O=n(13336),j=n(43571),D=n(10228),E=n(74978),G=n(65305),N=n(46357),V=n(53537),K=n(74499);const $=["className"],R=Object.keys(G.V3);function H({show:e,onHide:t,onSelect:n,filter:a=(()=>!0),newFirst:i=!1}){const{t:l}=(0,C.$G)(["page_character","charNames_gen"]),{database:o}=(0,x.useContext)(_.t),[h,u]=(0,x.useState)((()=>o.displayCharacter.get()));(0,x.useEffect)((()=>o.displayCharacter.follow(((e,t)=>u(t)))),[o,u]);const{gender:g}=(0,D.Z)(),[m,y]=(0,E.Z)();(0,x.useEffect)((()=>o.charMeta.followAny((()=>y()))),[y,o]);const[f,b]=(0,x.useState)(""),w=(0,x.useDeferredValue)(f),S=(0,x.useDeferredValue)(h),T=(0,x.useDeferredValue)(m),W=(0,x.useMemo)((()=>{var e;const{element:t,weaponType:n,sortType:l,ascending:s}=S,c=[...i?["new"]:[],...null!=(e=G.V3[l])?e:[]];return T&&r.IV.filter((e=>a(o.chars.get(e),(0,M.m)(e,g)))).filter((0,N.C)({element:t,weaponType:n,name:w},(0,G.zU)(o))).sort((0,N.e)(c,s,(0,G._L)(o),["new","favorite"]))}),[o,i,S,T,w,g,a]),L=(0,x.useMemo)((()=>(0,V.W)(r.yd,(e=>r.IV.forEach((t=>{const n=(0,M.m)(t,o.gender).weaponTypeKey;e[n].total++,W.includes(t)&&e[n].current++}))))),[W,o]),O=(0,x.useMemo)((()=>(0,V.W)(r.UB,(e=>r.IV.forEach((t=>{const n=(0,M.m)(t,o.gender).elementKey;e[n].total++,W.includes(t)&&e[n].current++}))))),[W,o]),{weaponType:j,element:$,sortType:H,ascending:q}=h;return(0,K.tZ)(B.Z,{open:e,onClose:t,sx:{"& .MuiContainer-root":{justifyContent:"normal"}},children:(0,K.BX)(v.Z,{children:[(0,K.BX)(s.Z,{sx:{py:1,display:"flex",alignItems:"center",gap:1,flexWrap:"wrap"},children:[(0,K.tZ)(I.Z,{sx:{height:"100%"},onChange:e=>o.displayCharacter.set({weaponType:e}),value:j,totals:L,size:"small"}),(0,K.tZ)(z.Z,{sx:{height:"100%"},onChange:e=>o.displayCharacter.set({element:e}),value:$,totals:O,size:"small"}),(0,K.tZ)(c.Z,{flexGrow:1,children:(0,K.tZ)(d.Z,{autoFocus:!0,value:f,onChange:e=>b(e.target.value),label:l("characterName"),size:"small",sx:{height:"100%"},InputProps:{sx:{height:"100%"}}})}),(0,K.tZ)(X.Z,{sx:{height:"100%"},sortKeys:R,value:H,onChange:e=>o.displayCharacter.set({sortType:e}),ascending:q,onChangeAsc:e=>o.displayCharacter.set({ascending:e})}),(0,K.tZ)(k.Z,{onClick:t})]}),(0,K.tZ)(Z.Z,{}),(0,K.tZ)(P.R.Provider,{value:{teamData:void 0},children:(0,K.tZ)(s.Z,{children:(0,K.tZ)(p.ZP,{container:!0,spacing:1,columns:{xs:2,sm:3,md:4,lg:5},children:W.map((e=>(0,K.tZ)(p.ZP,{item:!0,xs:1,children:(0,K.tZ)(A,{characterKey:e,onClick:()=>{t(),null==n||n(e)}})},e)))})})})]})})}const q=(0,h.ZP)((e=>{let{className:t}=e,n=(0,a.Z)(e,$);return(0,K.tZ)(u.Z,Object.assign({},n,{classes:{popper:t}}))}))({[`& .${g.Z.tooltip}`]:{padding:0}});function A({characterKey:e,onClick:t}){var n;const{gender:a}=(0,D.Z)(),r=(0,M.m)(e,a),s=(0,O.Z)(e),{favorite:d}=(0,j.Z)(e),{database:Z}=(0,x.useContext)(_.t),[p,h,u]=(0,L.Z)(),{level:g=1,ascension:C=0,constellation:v=0}=null!=s?s:{};return(0,K.tZ)(q,{enterDelay:300,enterNextDelay:300,arrow:!0,placement:"bottom",open:p,onClose:u,onOpen:h,title:(0,K.tZ)(c.Z,{sx:{width:300},children:(0,K.tZ)(w.Z,{hideStats:!0,characterKey:e})}),children:(0,K.tZ)(c.Z,{children:(0,K.BX)(b.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:[(0,K.tZ)(c.Z,{sx:{position:"absolute",opacity:.7,zIndex:2},children:(0,K.tZ)(m.Z,{sx:{p:.25},onClick:t=>{u(),Z.charMeta.set(e,{favorite:!d})},children:d?(0,K.tZ)(l.Z,{}):(0,K.tZ)(o.Z,{})})}),(0,K.tZ)(y.Z,{onClick:t,children:(0,K.BX)(c.Z,{display:"flex",position:"relative",className:`grad-${null==r?void 0:r.rarity}star`,sx:{"&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.5,backgroundImage:`url(${(0,i.Li)(e,"banner",a)})`,backgroundPosition:"center",backgroundSize:"cover"}},width:"100%",children:[(0,K.tZ)(c.Z,{flexShrink:1,sx:{maxWidth:{xs:"33%",lg:"30%"}},alignSelf:"flex-end",display:"flex",flexDirection:"column",zIndex:1,children:(0,K.tZ)(c.Z,{component:"img",src:(0,i.Li)(e,"icon",a),width:"100%",height:"auto",maxWidth:256,sx:{mt:"auto"}})}),(0,K.BX)(c.Z,{flexGrow:1,sx:{pr:1,pt:1},display:"flex",flexDirection:"column",zIndex:1,justifyContent:"space-evenly",children:[(0,K.tZ)(f.Z,{variant:"body2",sx:{flexGrow:1},children:(0,K.tZ)(S.Z,{color:null==r?void 0:r.elementKey,sx:{opacity:.85,textShadow:"0 0 5px gray"},children:null==r?void 0:r.name})}),s?(0,K.BX)(c.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:[(0,K.BX)(c.Z,{sx:{textShadow:"0 0 5px gray"},children:[(0,K.BX)(f.Z,{variant:"body2",component:"span",whiteSpace:"nowrap",children:["Lv. ",g]}),(0,K.BX)(f.Z,{variant:"body2",component:"span",color:"text.secondary",children:["/",W.SJ[C]]})]}),(0,K.BX)(f.Z,{variant:"body2",children:["C",v]})]}):(0,K.tZ)(f.Z,{component:"span",variant:"body2",children:(0,K.tZ)(S.Z,{children:"NEW"})}),(0,K.tZ)(T.q,{stars:null!=(n=null==r?void 0:r.rarity)?n:1,colored:!0})]})]})})]})})})}},78230:(e,t,n)=>{"use strict";n.d(t,{Z:()=>L});var a=n(78010),r=n(7047),i=n(84815),l=n(42537),o=n(46701),s=n(37270),c=n(78374),d=n(20387),Z=n(39469),p=n(5450),h=n(5282),u=n(23540),g=n(57697),m=n(66204),y=n(98976),f=n(62440),x=n(50210),C=n(6806),v=n(18311),b=n(19432),w=n(63980),k=n(29581),B=n(59695),X=n(59540),S=n(97278),T=n(23202),z=n(27492),I=n(61793),P=n(81720),M=n(74499);let W,_=e=>e;function L({weaponId:e,onClick:t,onEdit:n,onDelete:L,canEquip:O=!1,extraButtons:j}){var D;const{t:E}=(0,y.$G)(["page_weapon","ui"]),{database:G}=(0,m.useContext)(S.t),N=(0,P.Z)(e),V=null!=N&&N.key?(0,X.ub)(N.key):void 0,K=(0,m.useCallback)((e=>e.weaponTypeKey===(null==V?void 0:V.weaponType)),[V]),$=(0,m.useCallback)((n=>(0,M.tZ)(s.Z,{onClick:()=>null==t?void 0:t(e),children:n})),[t,e]),R=(0,m.useCallback)((e=>(0,M.tZ)(c.Z,{children:e})),[]),H=(0,m.useCallback)((t=>e&&G.weapons.set(e,{location:t})),[G,e]),q=(0,m.useMemo)((()=>V&&N&&(0,z.mP)([V.data,(0,z.v0)(N)])),[V,N]);if(!N||!V||!q)return null;const{level:A,ascension:U,refinement:F,id:J,location:Y="",lock:Q}=N,ee=q.get(T.ri.weapon.type).value,te=[T.ri.weapon.main,T.ri.weapon.sub,T.ri.weapon.sub2].map((e=>q.get(e))),ne=(0,a.Aq)(N.key,U>=2);return(0,M.tZ)(m.Suspense,{fallback:(0,M.tZ)(d.Z,{variant:"rectangular",sx:{width:"100%",height:"100%",minHeight:300}}),children:(0,M.BX)(x.Z,{sx:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,M.BX)(b.Z,{condition:!!t,wrapper:$,falseWrapper:R,children:[(0,M.BX)(c.Z,{className:`grad-${V.rarity}star`,sx:{position:"relative",pt:2,px:2},children:[!t&&(0,M.tZ)(Z.Z,{color:"primary",onClick:()=>G.weapons.set(J,{lock:!Q}),sx:{position:"absolute",right:0,bottom:0,zIndex:2},children:Q?(0,M.tZ)(r.Z,{}):(0,M.tZ)(i.Z,{})}),(0,M.BX)(c.Z,{sx:{position:"relative",zIndex:1},children:[(0,M.BX)(c.Z,{component:"div",sx:{display:"flex",alignItems:"center",gap:1,mb:1},children:[(0,M.tZ)(w.Z,{size:2,src:null==(D=f.Z.weaponTypes)?void 0:D[ee]}),(0,M.tZ)(p.Z,{noWrap:!0,sx:{textAlign:"center",backgroundColor:"rgba(100,100,100,0.35)",borderRadius:"1em",px:1},children:(0,M.tZ)("strong",{children:V.name})})]}),(0,M.BX)(p.Z,{component:"span",variant:"h5",children:["Lv. ",A]}),(0,M.BX)(p.Z,{component:"span",variant:"h5",color:"text.secondary",children:["/",B.SJ[U]]}),(0,M.BX)(p.Z,{variant:"h6",children:["Refinement ",(0,M.tZ)("strong",{children:F})]}),(0,M.tZ)(k.q,{stars:V.rarity,colored:!0})]}),(0,M.tZ)(c.Z,{sx:{height:"100%",position:"absolute",right:0,top:0},children:(0,M.tZ)(c.Z,{component:"img",src:null!=ne?ne:"",width:"auto",height:"100%",sx:{float:"right"}})})]}),(0,M.tZ)(h.Z,{children:te.map((e=>e.info.name?(0,M.BX)(c.Z,{sx:{display:"flex"},children:[(0,M.BX)(p.Z,{flexGrow:1,children:[e.info.icon," ",e.info.name]}),(0,M.tZ)(p.Z,{children:(0,I.p)(e)})]},JSON.stringify(e.info)):null))})]}),(0,M.BX)(c.Z,{sx:{p:1,display:"flex",gap:1,justifyContent:"space-between",alignItems:"center"},children:[(0,M.tZ)(c.Z,{sx:{flexGrow:1},children:O?(0,M.tZ)(C.W,{location:Y,setLocation:H,filter:K,autoCompleteProps:{getOptionDisabled:e=>!e.key}}):(0,M.tZ)(v.Z,{location:Y})}),(0,M.BX)(c.Z,{display:"flex",gap:1,alignItems:"stretch",height:"100%",sx:{"& .MuiButton-root":{minWidth:0,height:"100%"}},children:[!!n&&(0,M.tZ)(u.Z,{title:(0,M.tZ)(p.Z,{children:E(W||(W=_`page_weapon:edit`))}),placement:"top",arrow:!0,children:(0,M.tZ)(g.Z,{color:"info",size:"small",onClick:()=>n(J),children:(0,M.tZ)(o.Z,{})})}),!!L&&(0,M.tZ)(g.Z,{color:"error",size:"small",onClick:()=>L(J),disabled:!!Y||Q,children:(0,M.tZ)(l.Z,{})}),j]})]})]})})}},19059:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(50968),r=n(74499);const i=(0,a.Z)((0,r.tZ)("path",{d:"M 20.332031 4.226562 C 18.777344 3.5 17.117188 2.972656 15.378906 2.671875 C 15.164062 3.058594 14.917969 3.574219 14.746094 3.988281 C 12.898438 3.710938 11.070312 3.710938 9.257812 3.988281 C 9.085938 3.574219 8.832031 3.058594 8.617188 2.671875 C 6.875 2.972656 5.214844 3.503906 3.660156 4.230469 C 0.527344 8.96875 -0.324219 13.585938 0.101562 18.136719 C 2.179688 19.6875 4.195312 20.632812 6.175781 21.25 C 6.664062 20.574219 7.097656 19.859375 7.476562 19.105469 C 6.757812 18.835938 6.074219 18.5 5.425781 18.109375 C 5.597656 17.980469 5.765625 17.847656 5.929688 17.710938 C 9.878906 19.558594 14.167969 19.558594 18.070312 17.710938 C 18.234375 17.847656 18.402344 17.980469 18.574219 18.109375 C 17.921875 18.5 17.238281 18.835938 16.519531 19.109375 C 16.898438 19.859375 17.332031 20.578125 17.820312 21.25 C 19.804688 20.632812 21.820312 19.691406 23.898438 18.136719 C 24.394531 12.859375 23.046875 8.285156 20.332031 4.226562 Z M 8.011719 15.335938 C 6.828125 15.335938 5.855469 14.230469 5.855469 12.882812 C 5.855469 11.535156 6.808594 10.425781 8.011719 10.425781 C 9.21875 10.425781 10.191406 11.53125 10.171875 12.882812 C 10.171875 14.230469 9.21875 15.335938 8.011719 15.335938 Z M 15.988281 15.335938 C 14.800781 15.335938 13.828125 14.230469 13.828125 12.882812 C 13.828125 11.535156 14.78125 10.425781 15.988281 10.425781 C 17.191406 10.425781 18.164062 11.53125 18.144531 12.882812 C 18.144531 14.230469 17.191406 15.335938 15.988281 15.335938 Z M 15.988281 15.335938 "}),"Discord")},43815:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(50968),r=n(43188);const i=(0,a.Z)((0,r.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"ChevronRight")},59009:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(50968),r=n(43188);const i=(0,a.Z)((0,r.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"InsertLink")},78862:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(50968),r=n(43188);const i=(0,a.Z)((0,r.jsx)("path",{d:"M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"}),"Replay")},44507:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});n(66204);var a=n(50968),r=n(43188);const i=(0,a.Z)((0,r.jsx)("path",{d:"M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"}),"YouTube")},57730:(e,t,n)=>{"use strict";var a=n(12017);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,l){if(l!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},97641:(e,t,n)=>{e.exports=n(57730)()},12017:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=common.c868acf22316495f.js.map