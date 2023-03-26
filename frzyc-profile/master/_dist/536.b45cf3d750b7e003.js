"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[536],{45536:(t,e,a)=>{a.r(e),a.d(e,{default:()=>rt});var l=a(68946),s=a(29822),o=a(3418),i=a(5359),r=a(38222),n=a(86821),c=a(80954),u=a(11611),d=a(78374),p=a(57697),h=a(66204),Z=a(98976),b=a(97278),m=a(59931),v=a(2377),g=a(53537),x=a(41664),f=a(22225),y=a(11213),k=a(29581),C=a(92183),T=a(62168),L=a(76564),w=a(70554),K=a(82260),S=a(74499);function E({mainStatKeys:t,setMainStatKeys:e,totals:a}){const{t:l}=(0,Z.$G)("artifact"),{t:s}=(0,Z.$G)("statKey_gen"),o=(0,h.useMemo)((()=>m.rW.map((t=>({key:t,label:`${s(t)}${(0,T.VR)(t)}`,variant:L.ZP.getVariant(t)})))),[s]),i=(0,h.useCallback)((t=>(0,S.tZ)(w.C,{statKey:t,iconProps:{sx:{ml:1,color:L.ZP.getVariant(t)}}})),[]),r=(0,h.useCallback)((t=>(0,S.tZ)("strong",{children:a[t]})),[a]),n=(0,h.useCallback)((t=>(0,S.tZ)(u.Z,{size:"small",label:a[t]})),[a]);return(0,S.tZ)(K.c,{options:o,valueKeys:t,onChange:e,toImg:i,toExLabel:r,toExItemLabel:n,label:l("autocompleteLabels.mainStats")})}var P=a(91508),z=a(32530),B=a(54715),$=a(34078),I=a(63980),X=a(24088);function q({artSetKeys:t,setArtSetKeys:e,totals:a}){const{t:l}=(0,Z.$G)(["artifact","artifactNames_gen"]),s=(0,h.useCallback)((t=>(0,S.tZ)(I.Z,{src:(0,$.jU)(t),size:3})),[]),o=(0,h.useCallback)((t=>(0,S.tZ)("strong",{children:a[t]})),[a]),i=(0,h.useCallback)((t=>(0,S.tZ)(u.Z,{size:"small",label:a[t]})),[a]),r=(0,h.useMemo)((()=>Object.entries(B.WO).flatMap((([t,e])=>e.map((e=>({key:e,grouper:+t,label:l(`artifactNames_gen:${e}`)}))))).sort(X.Z)),[l]);return(0,S.tZ)(K.c,{options:r,valueKeys:t,label:l("artifact:autocompleteLabels.sets"),toImg:s,toExLabel:o,toExItemLabel:i,onChange:e,groupBy:t=>{var e,a;return null!=(e=null==(a=t.grouper)?void 0:a.toString())?e:""},renderGroup:t=>t.group&&(0,S.BX)(P.Z,{component:d.Z,children:[(0,S.BX)(z.Z,{sx:{top:"-1em"},children:[t.group," ",(0,S.tZ)(k.q,{stars:+t.group,inline:!0})]},`${t.group}Header`),t.children]},t.group)})}function H({substatKeys:t,setSubstatKeys:e,totals:a}){const{t:l}=(0,Z.$G)("artifact"),{t:s}=(0,Z.$G)("statKey_gen"),o=(0,h.useMemo)((()=>m._m.map((t=>({key:t,label:`${s(t)}${(0,T.VR)(t)}`})))),[s]),i=(0,h.useCallback)((t=>(0,S.tZ)(w.C,{statKey:t,iconProps:{sx:{ml:1}}})),[]),r=(0,h.useCallback)((t=>(0,S.tZ)("strong",{children:a[t]})),[a]),n=(0,h.useCallback)((t=>(0,S.tZ)(u.Z,{size:"small",label:a[t]})),[a]);return(0,S.tZ)(K.c,{options:o,toImg:i,toExLabel:r,toExItemLabel:n,valueKeys:t,onChange:e,label:l("autocompleteLabels.substats")})}var A=a(78010),M=a(20387),W=a(88263),G=a(10228),R=a(80732),_=a(43516);let D,O=t=>t;function V({locations:t,setLocations:e,totals:a,disabled:l}){const{t:s}=(0,Z.$G)(["ui","artifact","charNames_gen"]),{database:o}=(0,h.useContext)(b.t),{gender:i}=(0,G.Z)(),r=(0,h.useCallback)((t=>s(`charNames_gen:${(0,R.LP)(o.chars.LocationToCharacterKey(t),i)}`)),[o,i,s]),n=(0,h.useCallback)((t=>(0,S.tZ)(_.Z,{src:(0,A.Li)(o.chars.LocationToCharacterKey(t),"iconSide",i),size:3})),[o,i]),c=(0,h.useCallback)((t=>(0,S.tZ)("strong",{children:a[t]})),[a]),d=(0,h.useCallback)((t=>(0,S.tZ)(u.Z,{size:"small",label:a[t]})),[a]),p=(0,h.useCallback)((t=>"Traveler"===t?R._0.some((t=>o.charMeta.get(t).favorite)):!!t&&o.charMeta.get(t).favorite),[o]),m=(0,h.useCallback)((t=>{var e;return null!=(e=(0,W.m)(o.chars.LocationToCharacterKey(t),i).elementKey)?e:void 0}),[o,i]),v=(0,h.useMemo)((()=>R.vp.filter((t=>o.chars.get(o.chars.LocationToCharacterKey(t)))).map((t=>({key:t,label:r(t),favorite:p(t),variant:m(t)}))).sort(((t,e)=>t.favorite&&!e.favorite?-1:!t.favorite&&e.favorite?1:t.label.localeCompare(e.label)))),[r,p,m,o]);return(0,S.tZ)(h.Suspense,{fallback:(0,S.tZ)(M.Z,{variant:"text",width:100}),children:(0,S.tZ)(K.c,{disabled:l,options:v,valueKeys:t,onChange:t=>e(t),toImg:n,toExLabel:c,toExItemLabel:d,label:s(D||(D=O`artifact:filterLocation.location`)),chipProps:{variant:"outlined"}})})}var j=a(86847),N=a(32932),F=a(91887);function U({levelLow:t,levelHigh:e,setLow:a,setHigh:l,setBoth:s,dark:o=!1,disabled:i=!1}){const[r,n]=(0,h.useState)(t),[c,u]=(0,h.useState)(e),d=(0,h.useCallback)(((t,e)=>{if("number"==typeof e)throw new TypeError;const[a,l]=e;n(a),u(l)}),[n,u]);return(0,h.useEffect)((()=>n(t)),[n,t]),(0,h.useEffect)((()=>u(e)),[u,e]),(0,S.BX)(j.Z,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:o?"contentDark.main":"contentLight.main",overflow:"visible"},children:[(0,S.tZ)(F.ZP,{value:r,onChange:t=>a((0,x.uZ)(t,0,e)),sx:{px:1,pl:2,width:100,borderRadius:"4px 0 0 4px"},inputProps:{sx:{textAlign:"right"}},startAdornment:"RV: ",disabled:i}),(0,S.tZ)(N.ZP,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:()=>"Arifact RV Range",value:[r,c],onChange:d,onChangeCommitted:(t,e)=>s(e[0],e[1]),valueLabelDisplay:"auto",min:0,max:900,disabled:i}),(0,S.tZ)(F.ZP,{value:c,onChange:e=>l((0,x.uZ)(e,t,900)),sx:{px:1,width:50,borderRadius:"0 4px 4px 0"},inputProps:{sx:{textAlign:"center"}},disabled:i})]})}var J=a(27088);let Q,Y,tt,et=t=>t;const at=["locked","unlocked"],lt=(0,v.X)([...m.$W]),st=(0,v.X)([...l.Ex]),ot=(0,v.X)([...at]),it=(0,v.X)([1,2,3,4]);function rt({filterOption:t,filterOptionDispatch:e,filteredIds:a,disableSlotFilter:v=!1}){const{t:T}=(0,Z.$G)(["artifact","ui"]),L=(0,h.useMemo)((()=>(0,x.O)(a,(t=>!0))),[a]),{artSetKeys:w=[],mainStatKeys:K=[],rarity:P=[],slotKeys:z=[],levelLow:B=0,levelHigh:$=20,substats:I=[],locations:X,showEquipped:A,showInventory:M,locked:W=[...at],rvLow:G=0,rvHigh:R=900,lines:_=[]}=t,{database:D}=(0,h.useContext)(b.t),{rarityTotal:O,slotTotal:j,lockedTotal:N,linesTotal:F,equippedTotal:rt,setTotal:nt,mainStatTotal:ct,subStatTotal:ut,locationTotal:dt}=(0,h.useMemo)((()=>{const t={rarityTotal:m.$W,slotTotal:l.Ex,lockedTotal:["locked","unlocked"],linesTotal:[0,1,2,3,4],equippedTotal:["equipped","unequipped"],setTotal:l.Gt,mainStatTotal:m.rW,subStatTotal:m._m,locationTotal:[...l.vp,""]};return(0,g.A)(t,(t=>Object.entries(D.arts.data).forEach((([e,a])=>{const{rarity:l,slotKey:s,location:o,setKey:i,mainStatKey:r,substats:n}=a,c=a.lock?"locked":"unlocked",u=a.substats.filter((t=>t.value)).length,d=o?"equipped":"unequipped";t.rarityTotal[l].total++,t.slotTotal[s].total++,t.lockedTotal[c].total++,t.linesTotal[u].total++,t.equippedTotal[d].total++,t.setTotal[i].total++,t.mainStatTotal[r].total++,n.forEach((a=>{const l=a.key;l&&(t.subStatTotal[l].total++,L[e]&&t.subStatTotal[l].current++)})),t.locationTotal[o].total++,L[e]&&(t.rarityTotal[l].current++,t.slotTotal[s].current++,t.lockedTotal[c].current++,t.linesTotal[u].current++,t.equippedTotal[d].current++,t.setTotal[i].current++,t.mainStatTotal[r].current++,t.locationTotal[o].current++)}))))}),[D,L]);return(0,S.BX)(n.ZP,{container:!0,spacing:1,children:[(0,S.BX)(n.ZP,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[(0,S.tZ)(y.Z,{fullWidth:!0,value:P,size:"small",children:m.$W.map((t=>(0,S.BX)(c.Z,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>e({rarity:lt(P,t)}),children:[(0,S.tZ)(k.q,{stars:t,inline:!0}),(0,S.tZ)(u.Z,{label:O[t],size:"small"})]},t)))}),(0,S.tZ)(y.Z,{fullWidth:!0,value:z,size:"small",disabled:v,children:l.Ex.map((t=>(0,S.BX)(c.Z,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>e({slotKeys:st(z,t)}),children:[(0,S.tZ)(J.Z,{slotKey:t}),(0,S.tZ)(u.Z,{label:j[t],size:"small"})]},t)))}),(0,S.tZ)(y.Z,{fullWidth:!0,value:W,size:"small",children:at.map(((t,a)=>(0,S.BX)(c.Z,{value:t,sx:{display:"flex",gap:1},onClick:()=>e({locked:ot(W,t)}),children:[a?(0,S.tZ)(i.Z,{}):(0,S.tZ)(o.Z,{}),(0,S.tZ)(Z.cC,{i18nKey:`ui:${t}`,t:T}),(0,S.tZ)(u.Z,{label:N[a?"unlocked":"locked"],size:"small"})]},t)))}),(0,S.tZ)(y.Z,{fullWidth:!0,value:_,size:"small",children:[1,2,3,4].map((t=>(0,S.BX)(c.Z,{sx:{display:"flex",gap:1,flexWrap:"wrap"},value:t,onClick:()=>e({lines:it(_,t)}),children:[(0,S.tZ)(d.Z,{whiteSpace:"nowrap",children:T("sub",{count:t})}),(0,S.tZ)(u.Z,{label:F[t],size:"small"})]},t)))}),(0,S.BX)(p.Z,{startIcon:(0,S.tZ)(r.Z,{}),color:A?"success":"secondary",onClick:()=>e({showEquipped:!A}),children:[T(Q||(Q=et`equippedArt`))," ",(0,S.tZ)(u.Z,{sx:{ml:1},label:rt.equipped,size:"small"})]}),(0,S.BX)(p.Z,{startIcon:(0,S.tZ)(s.Z,{}),color:M?"success":"secondary",onClick:()=>e({showInventory:!M}),children:[T(Y||(Y=et`artInInv`))," ",(0,S.tZ)(u.Z,{sx:{ml:1},label:rt.unequipped,size:"small"})]}),(0,S.tZ)(C.Z,{showLevelText:!0,levelLow:B,levelHigh:$,setLow:t=>e({levelLow:t}),setHigh:t=>e({levelHigh:t}),setBoth:(t,a)=>e({levelLow:t,levelHigh:a})}),(0,S.tZ)(U,{showLevelText:!0,levelLow:G,levelHigh:R,setLow:t=>e({rvLow:t}),setHigh:t=>e({rvHigh:t}),setBoth:(t,a)=>e({rvLow:t,rvHigh:a})})]}),(0,S.BX)(n.ZP,{item:!0,xs:12,md:6,display:"flex",flexDirection:"column",gap:1,children:[(0,S.tZ)(q,{totals:nt,artSetKeys:w,setArtSetKeys:t=>e({artSetKeys:t})}),(0,S.tZ)(E,{totals:ct,mainStatKeys:K,setMainStatKeys:t=>e({mainStatKeys:t})}),(0,S.tZ)(H,{totals:ut,substatKeys:I,setSubstatKeys:t=>e({substats:t})}),(0,S.tZ)(h.Suspense,{fallback:null,children:(0,S.tZ)(f.Z,{title:A?T(tt||(tt=et`locationsTooltip`)):"",placement:"top",children:(0,S.tZ)("span",{children:(0,S.tZ)(V,{totals:dt,locations:A?[]:X,setLocations:t=>e({locations:t}),disabled:A})})})})]})]})}},92183:(t,e,a)=>{a.d(e,{Z:()=>c});var l=a(86847),s=a(32932),o=a(66204),i=a(41664),r=a(91887),n=a(74499);function c({levelLow:t,levelHigh:e,setLow:a,setHigh:c,setBoth:u,dark:d=!1,disabled:p=!1,showLevelText:h=!1}){const[Z,b]=(0,o.useState)(t),[m,v]=(0,o.useState)(e),g=(0,o.useCallback)(((t,e)=>{if("number"==typeof e)throw new TypeError;const[a,l]=e;b(a),v(l)}),[b,v]);return(0,o.useEffect)((()=>b(t)),[b,t]),(0,o.useEffect)((()=>v(e)),[v,e]),(0,n.BX)(l.Z,{sx:{width:"100%",display:"flex",alignItems:"center",bgcolor:d?"contentDark.main":"contentLight.main",overflow:"visible"},children:[(0,n.tZ)(r.ZP,{value:Z,onChange:t=>a((0,i.uZ)(t,0,e)),sx:{px:1,pl:h?2:void 0,width:h?100:50,borderRadius:"4px 0 0 4px"},inputProps:{sx:{textAlign:h?"right":"center"}},startAdornment:h?"Level: ":void 0,disabled:p}),(0,n.tZ)(s.ZP,{sx:{width:100,flexGrow:1,mx:2},getAriaLabel:()=>"Arifact Level Range",value:[Z,m],onChange:g,onChangeCommitted:(t,e)=>u(e[0],e[1]),valueLabelDisplay:"auto",min:0,max:20,step:1,marks:!0,disabled:p}),(0,n.tZ)(r.ZP,{value:m,onChange:e=>c((0,i.uZ)(e,t,20)),sx:{px:1,width:50,borderRadius:"0 4px 4px 0"},inputProps:{sx:{textAlign:"center"}},disabled:p})]})}},38222:(t,e,a)=>{var l=a(54734);e.Z=void 0;var s=l(a(53948)),o=a(43188),i=(0,s.default)([(0,o.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,o.jsx)("path",{d:"M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99zm9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59l-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"},"1")],"PersonSearch");e.Z=i}}]);
//# sourceMappingURL=536.b45cf3d750b7e003.js.map