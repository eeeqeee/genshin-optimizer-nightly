"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[169,898],{94247:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(68946),r=n(78010),i=n(78374),o=n(5450),c=n(62440),l=n(62168),s=n(70554),d=n(59401),h=n(47946),u=n(61731),Z=n(74499);function m({artifactObj:e,slotKey:t}){if(!e)return(0,Z.tZ)(d.Z,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:(0,Z.tZ)(i.Z,{sx:{width:"100%",pb:"100%",position:"relative"},children:(0,Z.tZ)(i.Z,{sx:{position:"absolute",width:"70%",height:"70%",left:"50%",top:"50%",transform:"translate(-50%, -50%)",opacity:.7},component:"img",src:c.Z.slot[t]})})});const{mainStatKey:n,rarity:m,level:p}=e,f=a.fR.find((t=>e.mainStatKey.includes(t))),g=null!=f?f:"secondary";return(0,Z.tZ)(u.Z,{art:e,children:(0,Z.BX)(d.Z,{sx:{display:"flex",flexDirection:"column",position:"relative"},children:[(0,Z.tZ)(i.Z,{component:"img",className:`grad-${m}star`,src:(0,r.Hp)(e.setKey,e.slotKey),maxWidth:"100%",maxHeight:"100%"}),(0,Z.tZ)(o.Z,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:(0,Z.tZ)("strong",{children:(0,Z.tZ)(h.Z,{sx:{p:.5},color:l.ZP.levelVariant(p),children:(0,Z.BX)("strong",{children:["+",p]})})})}),(0,Z.tZ)(o.Z,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:(0,Z.tZ)(h.Z,{color:g,sx:{p:.5},children:(0,Z.tZ)(s.C,{statKey:n,iconProps:{fontSize:"inherit"}})})})]})})}},61731:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(78010),r=n(29822),i=n(78374),o=n(20387),c=n(5450),l=n(66204),s=n(98976),d=n(54715),h=n(62168),u=n(97278),Z=n(76564),m=n(70554),p=n(10228),f=n(69035),g=n(80732),v=n(41664),C=n(22225),y=n(56627),x=n(47946),b=n(29581),w=n(27088),K=n(74499);function k({art:e,children:t}){const n=(0,K.tZ)(i.Z,{children:(0,K.tZ)(o.Z,{variant:"rectangular",width:100,height:100})}),a=(0,K.tZ)(l.Suspense,{fallback:n,children:(0,K.tZ)(B,{art:e})});return(0,K.tZ)(C.Z,{placement:"top",title:a,disableInteractive:!0,children:t})}function B({art:e}){var t;const{t:n}=(0,s.$G)(["ui","charNames_gen"]),{t:o}=(0,s.$G)("statKey_gen"),{database:C}=(0,l.useContext)(u.t),{gender:k}=(0,p.Z)(),B=(0,d.Sk)(e.setKey),{slotKey:L,level:S,rarity:j,mainStatKey:X,substats:H}=e,O=B.getSlotName(L),D=Z.ZP.unit(X),M=Z.ZP.getVariant(X);return(0,K.BX)(i.Z,{p:1,children:[(0,K.BX)(c.Z,{variant:"h6",children:[(0,K.tZ)(w.Z,{slotKey:L,iconProps:f.m})," ",O]}),(0,K.BX)(c.Z,{variant:"subtitle1",color:`${M}.main`,children:[(0,K.tZ)(m.C,{statKey:X,iconProps:f.m})," ",o(X)," ",(0,Z.qs)(null!=(t=h.ZP.mainStatValue(X,j,S))?t:0,Z.ZP.unit(X)),D]}),(0,K.BX)(c.Z,{variant:"subtitle2",sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,K.tZ)(b.q,{stars:j}),(0,K.BX)(x.Z,{color:h.ZP.levelVariant(S),children:["+",S]})," "]}),(0,K.tZ)(i.Z,{py:1,children:H.map((e=>!!e.value&&(0,K.BX)(c.Z,{color:`roll${(0,v.uZ)(e.rolls.length,1,6)}.main`,children:[(0,K.tZ)(m.C,{statKey:e.key,iconProps:f.m})," ",o(e.key)," ",(0,K.tZ)("strong",{children:`+${(0,Z.qs)(e.value,Z.ZP.unit(e.key))}${Z.ZP.unit(e.key)}`})]},e.key)))}),(0,K.tZ)(c.Z,{color:"success.main",children:B.name}),e.location?(0,K.BX)(c.Z,{color:"secondary.main",sx:{display:"flex",alignItems:"center"},children:[(0,K.tZ)(y.Z,{src:(0,a.Li)(C.chars.LocationToCharacterKey(e.location),"iconSide",k),sx:{pr:1}}),n(`charNames_gen:${(0,g.LP)(C.chars.LocationToCharacterKey(e.location),k)}`)]}):(0,K.BX)(c.Z,{color:"secondary.main",sx:{display:"flex",alignItems:"center"},children:[(0,K.tZ)(r.Z,{}),n("ui:inventory")]})]})}},27088:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(50968),r=n(74499);const i=(0,a.Z)((0,r.tZ)("path",{d:"M 21.929688 8.652344 L 22.390625 9.113281 L 18 12.234375 L 12.460938 5.765625 L 13.847656 4.378906 L 12 2.066406 L 10.152344 4.378906 L 11.539062 5.765625 L 6 12.234375 L 1.609375 9.113281 L 2.070312 8.652344 L 0 7.148438 L 5.070312 19.164062 L 12 21.933594 L 18.929688 19.164062 L 24 7.148438 Z M 14.96875 15.546875 L 13.441406 15.804688 C 12.988281 15.878906 12.621094 16.214844 12.507812 16.660156 L 12.082031 18.375 C 12.074219 18.414062 12.039062 18.441406 12 18.441406 C 11.960938 18.441406 11.925781 18.414062 11.917969 18.375 L 11.492188 16.660156 C 11.378906 16.214844 11.011719 15.878906 10.558594 15.804688 L 9.03125 15.546875 C 8.984375 15.546875 8.945312 15.511719 8.945312 15.460938 C 8.945312 15.414062 8.984375 15.378906 9.03125 15.378906 L 10.558594 15.121094 C 11.011719 15.046875 11.378906 14.710938 11.492188 14.265625 L 11.917969 12.550781 C 11.925781 12.511719 11.960938 12.484375 12 12.484375 C 12.039062 12.484375 12.074219 12.511719 12.082031 12.550781 L 12.507812 14.265625 C 12.621094 14.710938 12.988281 15.046875 13.441406 15.121094 L 14.96875 15.378906 C 15.015625 15.378906 15.054688 15.414062 15.054688 15.460938 C 15.054688 15.511719 15.015625 15.546875 14.96875 15.546875 Z M 14.96875 15.546875 "}),"Circlet");var o=n(83171);const c=(0,a.Z)((0,r.tZ)("path",{d:"M 16.363281 14.921875 C 23.429688 10.980469 23.429688 8.828125 23.425781 3.105469 L 0.734375 3.105469 C 0.734375 8.828125 0.734375 10.972656 7.796875 14.921875 C 7.796875 17.921875 10.777344 17.117188 10.777344 18.671875 C 10.90625 19.984375 10.449219 20.742188 9.804688 20.859375 C 7.730469 21.144531 4.03125 22.46875 4.007812 23.882812 L 20.15625 23.882812 C 20.128906 22.46875 16.429688 21.140625 14.355469 20.859375 C 13.714844 20.742188 13.25 19.984375 13.382812 18.671875 C 13.382812 17.117188 16.363281 17.921875 16.363281 14.921875 Z M 12.789062 9.925781 L 12.195312 12.316406 C 12.183594 12.367188 12.136719 12.40625 12.082031 12.40625 C 12.027344 12.40625 11.980469 12.367188 11.96875 12.316406 L 11.371094 9.925781 C 11.214844 9.304688 10.707031 8.832031 10.074219 8.726562 L 7.9375 8.375 C 7.878906 8.367188 7.835938 8.316406 7.835938 8.257812 C 7.835938 8.199219 7.878906 8.148438 7.9375 8.144531 L 10.074219 7.789062 C 10.707031 7.683594 11.214844 7.210938 11.371094 6.589844 L 11.96875 4.199219 C 11.980469 4.148438 12.027344 4.109375 12.082031 4.113281 C 12.132812 4.113281 12.179688 4.148438 12.195312 4.199219 L 12.789062 6.589844 C 12.945312 7.210938 13.453125 7.683594 14.089844 7.789062 L 16.222656 8.144531 C 16.28125 8.148438 16.324219 8.199219 16.324219 8.257812 C 16.324219 8.316406 16.28125 8.367188 16.222656 8.375 L 14.089844 8.730469 C 13.457031 8.835938 12.945312 9.304688 12.789062 9.925781 Z M 22.871094 2.371094 L 1.128906 2.371094 C 0.828125 2.371094 0.542969 2.253906 0.332031 2.042969 C 0.117188 1.832031 0 1.542969 0 1.246094 C 0 0.945312 0.117188 0.65625 0.328125 0.445312 C 0.542969 0.234375 0.828125 0.117188 1.128906 0.117188 L 22.871094 0.117188 C 23.171875 0.117188 23.457031 0.234375 23.671875 0.445312 C 23.882812 0.65625 24 0.945312 24 1.246094 C 24 1.542969 23.882812 1.832031 23.667969 2.042969 C 23.457031 2.253906 23.171875 2.371094 22.871094 2.371094 Z M 22.871094 2.371094 "}),"Goblet");var l=n(79506);const s=(0,a.Z)((0,r.tZ)("path",{d:"M 20.046875 21.785156 L 18.644531 21.785156 L 18.644531 20.167969 C 18.644531 14.105469 13.035156 13.808594 13.035156 11.742188 L 13.035156 11.621094 C 13.03125 11.121094 13.285156 10.65625 13.707031 10.386719 C 15.195312 9.425781 18.460938 8.136719 18.636719 3.707031 C 18.640625 3.609375 18.605469 3.507812 18.535156 3.4375 C 18.464844 3.363281 18.371094 3.324219 18.269531 3.324219 L 5.730469 3.324219 C 5.628906 3.324219 5.535156 3.363281 5.464844 3.4375 C 5.394531 3.507812 5.355469 3.605469 5.359375 3.707031 C 5.53125 8.136719 8.804688 9.425781 10.292969 10.394531 C 10.710938 10.664062 10.964844 11.128906 10.964844 11.628906 L 10.964844 11.75 C 10.964844 13.816406 5.355469 14.113281 5.355469 20.175781 L 5.355469 21.792969 L 3.949219 21.792969 C 3.75 21.792969 3.585938 21.953125 3.582031 22.152344 L 3.582031 23.632812 C 3.582031 23.835938 3.746094 24 3.949219 24 L 20.046875 24 C 20.253906 24 20.417969 23.835938 20.417969 23.632812 L 20.417969 22.152344 C 20.417969 21.949219 20.253906 21.785156 20.046875 21.785156 Z M 12 21.785156 L 6.6875 21.785156 C 6.6875 17.058594 11.410156 18.09375 11.410156 16.171875 L 11.410156 10.265625 C 11.410156 10.265625 8.601562 8.640625 8.601562 7.457031 L 15.394531 7.457031 C 15.394531 8.640625 12.589844 10.265625 12.589844 10.265625 L 12.589844 16.171875 C 12.589844 18.09375 17.316406 17.058594 17.316406 21.785156 Z M 20.417969 0.367188 L 20.417969 1.847656 C 20.417969 2.050781 20.253906 2.214844 20.046875 2.214844 L 3.949219 2.214844 C 3.746094 2.214844 3.582031 2.050781 3.582031 1.847656 L 3.582031 0.367188 C 3.582031 0.164062 3.746094 0 3.949219 0 L 20.046875 0 C 20.253906 0 20.417969 0.164062 20.417969 0.367188 Z M 20.417969 0.367188 "}),"Sands");function d({slotKey:e,iconProps:t={}}){switch(e){case"flower":return(0,r.tZ)(o.Z,Object.assign({},t));case"plume":return(0,r.tZ)(l.Z,Object.assign({},t));case"sands":return(0,r.tZ)(s,Object.assign({},t));case"goblet":return(0,r.tZ)(c,Object.assign({},t));case"circlet":return(0,r.tZ)(i,Object.assign({},t))}}},2089:(e,t,n)=>{n.d(t,{Z:()=>Q});var a=n(68946),r=n(78010),i=n(41508),o=n(14849),c=n(37270),l=n(20387),s=n(78374),d=n(39469),h=n(5282),u=n(86821),Z=n(11611),m=n(5450),p=n(66204),f=n(67116),g=n(17609),v=n(88263),C=n(59695),y=n(97278),x=n(23202),b=n(13336),w=n(8094),K=n(43571),k=n(10228),B=n(87088),L=n(41664),S=n(94247),j=n(50210),X=n(19432),H=n(53669),O=n(47946),D=n(29581),M=n(59540),P=n(52607),z=n(27492),q=n(61793),E=n(81720),T=n(59401),I=n(2234),W=n(74499);function R({weaponId:e}){const t=(0,E.Z)(e),n=(null==t?void 0:t.key)&&(0,M.ub)(t.key),a=(0,p.useMemo)((()=>n&&t&&(0,z.mP)([n.data,(0,z.v0)(t)])),[n,t]);if(!t||!n||!a)return null;const i=(0,W.BX)(s.Z,{children:[(0,W.tZ)($,{node:a.get(x.ri.weapon.main)}),(0,W.tZ)($,{node:a.get(x.ri.weapon.sub)})]});return(0,W.BX)(T.Z,{sx:{height:"100%",maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:[(0,W.tZ)(s.Z,{display:"flex",flexDirection:"column",alignContent:"flex-end",className:`grad-${n.rarity}star`,children:(0,W.tZ)(I.Z,{sheet:n,addlText:i,children:(0,W.tZ)(s.Z,{component:"img",src:(0,r.Aq)(t.key,t.ascension>=2),maxWidth:"100%",maxHeight:"100%",sx:{mt:"auto"}})})}),(0,W.tZ)(m.Z,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none"},children:(0,W.tZ)("strong",{children:(0,W.tZ)(O.Z,{color:"primary",children:P.Z.getLevelString(t)})})}),n.hasRefinement&&(0,W.tZ)(m.Z,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:(0,W.tZ)("strong",{children:(0,W.BX)(O.Z,{color:"secondary",children:["R",t.refinement]})})})]})}function $({node:e}){return(0,W.BX)(m.Z,{children:[e.info.icon," ",(0,q.p)(e)]})}function _({weaponId:e}){const t=(0,E.Z)(e),n=(null==t?void 0:t.key)&&(0,M.ub)(t.key),a=(0,p.useMemo)((()=>n&&t&&(0,z.mP)([n.data,(0,z.v0)(t)])),[n,t]);return t&&n&&a?(0,W.tZ)(T.Z,{children:(0,W.BX)(s.Z,{display:"flex",children:[(0,W.tZ)(s.Z,{flexShrink:1,maxWidth:"35%",display:"flex",flexDirection:"column",alignContent:"flex-end",className:`grad-${n.rarity}star`,children:(0,W.tZ)(s.Z,{component:"img",src:(0,r.Aq)(t.key,t.ascension>=2),width:"100%",height:"auto",sx:{mt:"auto"}})}),(0,W.BX)(s.Z,{flexGrow:1,sx:{p:1},children:[(0,W.tZ)(m.Z,{variant:"body2",gutterBottom:!0,children:(0,W.tZ)("strong",{children:null==n?void 0:n.name})}),(0,W.BX)(m.Z,{variant:"subtitle1",sx:{display:"flex",gap:1},gutterBottom:!0,children:[(0,W.BX)(O.Z,{color:"primary",children:["Lv. ",P.Z.getLevelString(t)]}),n.hasRefinement&&(0,W.BX)(O.Z,{color:"info",children:["R",t.refinement]})]}),(0,W.BX)(m.Z,{variant:"subtitle1",sx:{display:"flex",gap:1},children:[(0,W.tZ)(G,{node:a.get(x.ri.weapon.main)}),(0,W.tZ)(G,{node:a.get(x.ri.weapon.sub)})]})]})]})}):null}function G({node:e}){return(0,W.BX)(O.Z,{color:"secondary",children:[e.info.icon," ",(0,q.p)(e)]})}var V=n(83780);function Q({characterKey:e,artifactChildren:t,weaponChildren:n,characterChildren:a,onClick:r,onClickHeader:h,onClickTeammate:u,footer:Z,hideStats:m,isTeammateCard:f}){var g;const{database:C}=(0,p.useContext)(y.t),x=(0,B.Z)(e),L=(0,b.Z)(e),{gender:S}=(0,k.Z)(),H=(0,v.m)(e,S),O=(0,w.Z)(e),D=null==x||null==(g=x[e])?void 0:g.target,M=(0,p.useCallback)((()=>e&&(null==r?void 0:r(e))),[e,r]),P=(0,p.useCallback)((e=>(0,W.tZ)(c.Z,{onClick:M,sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})),[M]),z=(0,p.useMemo)((()=>L&&H&&{character:L,characterSheet:H,characterDispatch:O}),[L,H,O]),q=(0,p.useMemo)((()=>D&&x&&{data:D,teamData:x}),[D,x]),{favorite:E}=(0,K.Z)(e);return(0,W.tZ)(p.Suspense,{fallback:(0,W.tZ)(l.Z,{variant:"rectangular",width:"100%",height:m?300:600}),children:(0,W.BX)(j.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,W.tZ)(s.Z,{sx:{display:"flex",position:"absolute",zIndex:2,opacity:.7},children:(0,W.tZ)(d.Z,{sx:{p:.5},onClick:t=>C.charMeta.set(e,{favorite:!E}),children:E?(0,W.tZ)(i.Z,{}):(0,W.tZ)(o.Z,{})})}),(0,W.tZ)(X.Z,{condition:!!r,wrapper:P,children:L&&q&&z?(0,W.tZ)(N,{characterContextObj:z,dataContextObj:q,characterKey:e,onClick:r,onClickHeader:h,isTeammateCard:f,character:L,onClickTeammate:u,hideStats:m,weaponChildren:n,artifactChildren:t,characterChildren:a}):(0,W.tZ)(A,{characterKey:e})}),Z]})})}function N({characterContextObj:e,dataContextObj:t,characterKey:n,onClick:a,onClickHeader:r,isTeammateCard:i,character:o,onClickTeammate:c,hideStats:l,weaponChildren:s,artifactChildren:d,characterChildren:Z}){return(0,W.tZ)(f.K.Provider,{value:e,children:(0,W.BX)(g.R.Provider,{value:t,children:[(0,W.tZ)(F,{characterKey:n,onClick:a?void 0:r,children:(0,W.tZ)(U,{})}),(0,W.BX)(h.Z,{sx:e=>({width:"100%",display:"flex",flexDirection:"column",gap:1,flexGrow:1,padding:l?`${e.spacing(1)}!important`:void 0}),children:[(0,W.tZ)(Y,{}),!i&&(0,W.BX)(u.ZP,{container:!0,columns:4,spacing:.75,children:[(0,W.tZ)(u.ZP,{item:!0,xs:1,height:"100%",children:(0,W.tZ)(R,{weaponId:o.equippedWeapon})}),(0,L.w6)(0,2).map((e=>(0,W.tZ)(u.ZP,{item:!0,xs:1,height:"100%",children:o.team[e]?(0,W.tZ)(V.Z,{simpleTooltip:l,characterKey:o.team[e],onClick:a?void 0:c}):(0,W.tZ)(V.D,{index:e})},e)))]}),i&&(0,W.tZ)(_,{weaponId:o.equippedWeapon}),!i&&!l&&(0,W.tZ)(ee,{}),s,d,Z]})]})})}function A({characterKey:e}){return(0,W.BX)(W.HY,{children:[(0,W.tZ)(F,{characterKey:e,children:(0,W.tZ)(J,{characterKey:e})}),(0,W.tZ)(h.Z,{sx:{width:"100%",display:"flex",flexDirection:"column",gap:1,flexGrow:1,height:"100%"}})]})}function F({children:e,characterKey:t,onClick:n}){const{gender:a}=(0,k.Z)(),i=(0,v.m)(t,a),o=(0,p.useCallback)((e=>(0,W.tZ)(c.Z,{onClick:()=>t&&(null==n?void 0:n(t)),sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:e})),[n,t]);return i?(0,W.tZ)(X.Z,{condition:!!n,wrapper:o,children:(0,W.BX)(s.Z,{display:"flex",position:"relative",className:`grad-${i.rarity}star`,sx:{"&::before":{content:'""',display:"block",position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:.7,backgroundImage:`url(${(0,r.Li)(t,"banner",a)})`,backgroundPosition:"center",backgroundSize:"cover"}},width:"100%",children:[(0,W.tZ)(s.Z,{flexShrink:1,sx:{maxWidth:{xs:"40%",lg:"40%"}},alignSelf:"flex-end",display:"flex",flexDirection:"column",zIndex:1,children:(0,W.tZ)(s.Z,{component:"img",src:(0,r.Li)(t,"icon",a),width:"100%",height:"auto",maxWidth:256,sx:{mt:"auto"}})}),(0,W.tZ)(s.Z,{flexGrow:1,sx:{py:1,pr:1},display:"flex",flexDirection:"column",zIndex:1,children:e})]})}):null}function U(){const{characterSheet:e}=(0,p.useContext)(f.K),{data:t}=(0,p.useContext)(g.R),n=t.get(x.ri.charEle).value,a=t.get(x.ri.lvl).value,r=t.get(x.ri.constellation).value,i=t.get(x.ri.asc).value,o=t.get(x.ri.total.autoBoost).value,c=t.get(x.ri.total.skillBoost).value,l=t.get(x.ri.total.burstBoost).value,s=t.get(x.ri.total.auto).value,d=t.get(x.ri.total.skill).value,h=t.get(x.ri.total.burst).value;return(0,W.BX)(W.HY,{children:[(0,W.tZ)(Z.Z,{label:(0,W.tZ)(m.Z,{variant:"subtitle1",children:e.name}),size:"small",color:n,sx:{opacity:.85}}),(0,W.BX)(u.ZP,{container:!0,spacing:1,flexWrap:"nowrap",children:[(0,W.BX)(u.ZP,{item:!0,sx:{textShadow:"0 0 5px gray"},children:[(0,W.BX)(m.Z,{component:"span",variant:"h6",whiteSpace:"nowrap",children:["Lv. ",a]}),(0,W.BX)(m.Z,{component:"span",variant:"h6",color:"text.secondary",children:["/",C.SJ[i]]})]}),(0,W.tZ)(u.ZP,{item:!0,children:(0,W.tZ)(m.Z,{variant:"h6",children:(0,W.BX)(O.Z,{children:["C",r]})})})]}),(0,W.BX)(u.ZP,{container:!0,spacing:1,flexWrap:"nowrap",children:[(0,W.tZ)(u.ZP,{item:!0,children:(0,W.tZ)(Z.Z,{color:o?"info":"secondary",label:(0,W.tZ)("strong",{children:s})})}),(0,W.tZ)(u.ZP,{item:!0,children:(0,W.tZ)(Z.Z,{color:c?"info":"secondary",label:(0,W.tZ)("strong",{children:d})})}),(0,W.tZ)(u.ZP,{item:!0,children:(0,W.tZ)(Z.Z,{color:l?"info":"secondary",label:(0,W.tZ)("strong",{children:h})})})]}),(0,W.tZ)(m.Z,{mt:1,children:(0,W.tZ)(D.q,{stars:e.rarity,colored:!0})})]})}function J({characterKey:e}){const{gender:t}=(0,k.Z)(),n=(0,v.m)(e,t);return n?(0,W.BX)(W.HY,{children:[(0,W.tZ)(Z.Z,{label:(0,W.tZ)(m.Z,{variant:"subtitle1",children:n.name}),size:"small",color:n.elementKey,sx:{opacity:.85}}),(0,W.tZ)(s.Z,{mt:1,children:(0,W.tZ)(m.Z,{variant:"h4",children:(0,W.tZ)(O.Z,{children:"NEW"})})}),(0,W.tZ)(m.Z,{mt:1.5,children:(0,W.tZ)(D.q,{stars:n.rarity,colored:!0})})]}):null}function Y(){const{database:e}=(0,p.useContext)(y.t),{data:t}=(0,p.useContext)(g.R),n=(0,p.useMemo)((()=>a.Ex.map((n=>{var a;return[n,e.arts.get(null!=(a=t.get(x.ri.art[n].id).value)?a:"")]}))),[t,e]);return(0,W.tZ)(u.ZP,{direction:"row",container:!0,spacing:.75,columns:5,children:n.map((([e,t])=>(0,W.tZ)(u.ZP,{item:!0,xs:1,children:(0,W.tZ)(S.Z,{artifactObj:t,slotKey:e})},e)))})}function ee(){const{data:e}=(0,p.useContext)(g.R);return(0,W.BX)(s.Z,{sx:{width:"100%"},children:[Object.values(e.getDisplay().basic).map((e=>(0,W.tZ)(H.JW,{node:e},JSON.stringify(e.info)))),e.get(x.ri.special).info.name&&(0,W.BX)(s.Z,{sx:{display:"flex",gap:1,alignItems:"center"},children:[(0,W.tZ)(m.Z,{flexGrow:1,children:(0,W.tZ)("strong",{children:"Specialized:"})}),e.get(x.ri.special).info.icon,(0,W.tZ)(m.Z,{children:e.get(x.ri.special).info.name})]})]})}},83780:(e,t,n)=>{n.d(t,{D:()=>k,Z:()=>K});var a=n(78010),r=n(24430),i=n(84621),o=n(37270),c=n(20387),l=n(5450),s=n(78374),d=n(66204),h=n(62440),u=n(88263),Z=n(59695),m=n(70554),p=n(13336),f=n(43571),g=n(10228),v=n(22225),C=n(59401),y=n(19432),x=n(47946),b=n(2089),w=n(74499);function K({characterKey:e,onClick:t,onMouseDown:n,onMouseEnter:h,simpleTooltip:K=!1,disableTooltip:k=!1}){const B=(0,p.Z)(e),{favorite:L}=(0,f.Z)(e),{gender:S}=(0,g.Z)(),j=(0,u.m)(e,S),X=(0,d.useCallback)((()=>null==t?void 0:t(e)),[e,t]),H=(0,d.useCallback)((e=>(0,w.tZ)(o.Z,{onClick:X,onMouseDown:n,onMouseEnter:h,children:e})),[X,n,h]),[O,D]=(0,d.useState)(!1),M=(0,d.useCallback)((()=>!k&&D(!0)),[k]),P=(0,d.useCallback)((()=>D(!1)),[]);(0,d.useEffect)((()=>{k&&D(!1)}),[k]);const z=(0,d.useCallback)((e=>(0,w.tZ)(v.Z,{placement:"top",open:O&&!k,onClose:P,onOpen:M,title:(0,w.tZ)(d.Suspense,{fallback:(0,w.tZ)(c.Z,{width:300,height:400}),children:(0,w.BX)(l.Z,{children:[j.elementKey&&(0,w.tZ)(m.Z,{ele:j.elementKey,iconProps:{fontSize:"inherit",sx:{verticalAlign:"-10%",color:`${j.elementKey}.main`}}})," ",j.name]})}),children:e})),[j.elementKey,j.name,k,P,M,O]),q=(0,d.useCallback)((t=>(0,w.tZ)(v.Z,{enterNextDelay:500,enterTouchDelay:500,placement:"top",open:O&&!k,onClose:P,onOpen:M,title:(0,w.tZ)(s.Z,{sx:{width:300,m:-1},children:(0,w.tZ)(b.Z,{hideStats:!0,characterKey:e})}),children:t})),[e,k,P,M,O]);return(0,w.tZ)(y.Z,{condition:K,wrapper:z,falseWrapper:q,children:(0,w.tZ)(C.Z,{sx:{maxWidth:128,position:"relative",display:"flex",flexDirection:"column"},children:(0,w.BX)(y.Z,{condition:!!t||!!n||!!h,wrapper:H,children:[(0,w.tZ)(s.Z,{display:"flex",className:`grad-${j.rarity}star`,children:(0,w.tZ)(s.Z,{component:"img",src:(0,a.Li)(e,"iconSide",S),maxWidth:"100%",maxHeight:"100%",sx:{transform:"scale(1.4)",transformOrigin:"bottom"},draggable:!1})}),B&&(0,w.tZ)(l.Z,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",top:0},children:(0,w.tZ)("strong",{children:(0,w.BX)(x.Z,{color:"primary",children:[B.level,"/",Z.SJ[B.ascension]]})})}),(0,w.tZ)(s.Z,{sx:{position:"absolute",top:0,right:0},children:L?(0,w.tZ)(r.Z,{fontSize:"small"}):(0,w.tZ)(i.Z,{fontSize:"small"})}),B&&(0,w.tZ)(l.Z,{sx:{position:"absolute",fontSize:"0.75rem",lineHeight:1,opacity:.85,pointerEvents:"none",bottom:0,right:0},children:(0,w.tZ)("strong",{children:(0,w.BX)(x.Z,{color:"secondary",children:["C",B.constellation]})})})]})})})}function k({index:e}){return(0,w.tZ)(C.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",py:"12.5%"},children:(0,w.tZ)(s.Z,{component:"img",src:h.Z.team[`team${e+2}`],sx:{width:"75%",height:"auto",opacity:.7}})})}},4958:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(15878),r=n(68946),i=n(92368),o=n(86028),c=n(11875),l=n(11611),s=n(70554),d=n(2377),h=n(61125),u=n(80954);const Z=(0,h.ZP)(u.Z,{shouldForwardProp:e=>"baseColor"!==e&&"selectedColor"!==e})((({theme:e,baseColor:t="secondary",selectedColor:n="success"})=>({"&":{backgroundColor:e.palette[t].main,color:e.palette[t].contrastText},"&:hover":{backgroundColor:e.palette[t].dark},"&.Mui-selected":{backgroundColor:e.palette[n].main,color:e.palette[n].contrastText},"&.Mui-selected:hover":{backgroundColor:e.palette[n].dark},"&.Mui-disabled":{backgroundColor:e.palette[t].dark},"&.Mui-selected.Mui-disabled":{backgroundColor:e.palette[n].dark}})));var m=n(74499);const p=["value","totals","onChange"],f=(0,d.X)([...r.UB]);function g(e){let{value:t,totals:n,onChange:d}=e,h=(0,a.Z)(e,p);const u=(0,i.Z)(),g=!(0,o.Z)(u.breakpoints.up("md")),v=!(0,o.Z)(u.breakpoints.up("sm"));return(0,m.tZ)(c.Z,Object.assign({exclusive:!0,value:t},h,{children:r.UB.map((e=>(0,m.BX)(Z,{value:e,sx:{p:g?1:void 0,minWidth:g?0:"6em",display:"flex"},selectedColor:e,onClick:()=>d(f(t,e)),children:[(0,m.tZ)(s.Z,{ele:e,iconProps:{fontSize:g&&!v?"inherit":void 0}}),!v&&(0,m.tZ)(l.Z,{sx:{ml:.5},label:n[e],size:"small"})]},e)))}))}},47364:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(15878),r=n(92368),i=n(86028),o=n(80954),c=n(11611),l=n(62440),s=n(68946),d=n(2377),h=n(63980),u=n(11213),Z=n(74499);const m=["value","totals","onChange"],p=(0,d.X)([...s.yd]);function f(e){let{value:t,totals:n,onChange:d}=e,f=(0,a.Z)(e,m);const g=(0,r.Z)(),v=!(0,i.Z)(g.breakpoints.up("sm"));return(0,Z.tZ)(u.Z,Object.assign({exclusive:!0,value:t},f,{children:s.yd.map((e=>{var a;return(0,Z.BX)(o.Z,{value:e,sx:{p:v?1:void 0,minWidth:v?0:"7em",display:"flex",gap:v?0:1},onClick:()=>d(p(t,e)),children:[(0,Z.tZ)(h.Z,{src:null==(a=l.Z.weaponTypes)?void 0:a[e],size:2,sideMargin:!0}),(0,Z.tZ)(c.Z,{label:n[e],size:"small"})]},e)}))}))}},2234:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(20387),r=n(5450),i=n(66204),o=n(62440),c=n(22225),l=n(63980),s=n(74499);function d({sheet:e,addlText:t,children:n}){const d=(0,s.BX)(i.Suspense,{fallback:(0,s.tZ)(a.Z,{variant:"text",width:100}),children:[(0,s.BX)(r.Z,{children:[(0,s.tZ)(l.Z,{src:o.Z.weaponTypes[e.weaponType],size:1.5})," ",e.name]}),t]});return(0,s.tZ)(c.Z,{placement:"top",title:d,disableInteractive:!0,children:n})}},53130:(e,t,n)=>{n.d(t,{Y:()=>ne,J:()=>te});var a=n(68946),r=n(66204),i=n(70554),o=n(74499);var c=n(91776),l=n(23202),s=n(27492),d=n(60646),h=n(76564),u=n(69035),Z=n(1865),m=n(66240),p=n(87280),f=n(34003),g=n(73546),v=n(23297),C=n(12404),y=n(41664),x=n(72524);const b=e=>(0,o.tZ)(c.v,{ns:"elementalResonance_gen",key18:e}),w=e=>(0,o.tZ)(c.v,{ns:"elementalResonance",key18:e}),K=(0,d.Sm)(...a.UB.map((e=>l.uK[e]))),k=(0,y.Uq)(a.fR,(e=>[`${e}_res_`,(0,d.Dg)(l.qH.activeCharKey,l.qH.charKey,(0,d.ew)(l.uK.ele,4,(0,d.aQ)(.15)))])),B={name:b("ProtectiveCanopy.name"),desc:b("ProtectiveCanopy.desc"),icon:(0,o.BX)("span",{children:[(0,o.tZ)((function({iconProps:e}){const[t,n]=(0,r.useState)(0);return(0,r.useEffect)((()=>{const e=setInterval((()=>n((e=>e+1))),1e3);return()=>clearInterval(e)}),[]),(0,o.tZ)(i.Z,{ele:a.UB[t%a.UB.length],iconProps:e})}),{iconProps:u.m})," x4"]}),canShow:e=>4===a.UB.filter((t=>e.get(l.uK[t]).value>=1)).length,sections:[{teamBuff:!0,fields:Object.values(k).map((e=>({node:e})))}]},L=(0,d.Dg)(l.qH.activeCharKey,l.qH.charKey,(0,d.ew)(K,4,(0,d.ew)(l.uK.pyro,2,(0,d.aQ)(.25)))),S={name:b("FerventFlames.name"),desc:b("FerventFlames.desc"),icon:(0,o.BX)("span",{children:[(0,o.tZ)(C.Z,Object.assign({},u.m))," ",(0,o.tZ)(C.Z,Object.assign({},u.m))]}),canShow:e=>e.get(l.uK.pyro).value>=2&&e.get(K).value>=4,sections:[{teamBuff:!0,fields:[{text:(0,x.st)("effectDuration.cryo"),value:-40,unit:"%"},{node:L}]}]},j=(0,d.Dg)(l.qH.activeCharKey,l.qH.charKey,(0,d.ew)(K,4,(0,d.ew)(l.uK.hydro,2,(0,d.aQ)(.25)))),X={name:b("SoothingWater.name"),desc:b("SoothingWater.desc"),icon:(0,o.BX)("span",{children:[(0,o.tZ)(v.Z,Object.assign({},u.m))," ",(0,o.tZ)(v.Z,Object.assign({},u.m))]}),canShow:e=>e.get(l.uK.hydro).value>=2&&e.get(K).value>=4,sections:[{teamBuff:!0,fields:[{text:(0,x.st)("effectDuration.pyro"),value:-40,unit:"%"},{node:j}]}]},H=["resonance","ShatteringIce"],O=(0,x.v9)(H),D=(0,d.Dg)(l.qH.activeCharKey,l.qH.charKey,(0,d.ew)(K,4,(0,d.ew)(l.uK.cryo,2,(0,d.Dg)(O,"on",(0,d.aQ)(.15))))),M={name:b("ShatteringIce.name"),desc:b("ShatteringIce.desc"),icon:(0,o.BX)("span",{children:[(0,o.tZ)(m.Z,Object.assign({},u.m))," ",(0,o.tZ)(m.Z,Object.assign({},u.m))]}),canShow:e=>e.get(l.uK.cryo).value>=2&&e.get(K).value>=4,sections:[{teamBuff:!0,fields:[{text:(0,x.st)("effectDuration.electro"),value:-40,unit:"%"}]},{teamBuff:!0,path:H,value:O,name:(0,x.st)("enemyAffected.frozenOrCryo"),header:{title:b("ShatteringIce.name"),icon:(0,o.tZ)(m.Z,{})},states:{on:{fields:[{node:D}]}}}]},P={name:b("HighVoltage.name"),desc:b("HighVoltage.desc"),icon:(0,o.BX)("span",{children:[(0,o.tZ)(f.Z,Object.assign({},u.m))," ",(0,o.tZ)(f.Z,Object.assign({},u.m))]}),canShow:e=>e.get(l.uK.electro).value>=2&&e.get(K).value>=4,sections:[{teamBuff:!0,fields:[{text:(0,x.st)("effectDuration.hydro"),value:-40,unit:"%"}]}]},z=(0,d.Dg)(l.qH.activeCharKey,l.qH.charKey,(0,d.ew)(K,4,(0,d.ew)(l.uK.anemo,2,(0,d.aQ)(-.15)))),q=(0,d.Dg)(l.qH.activeCharKey,l.qH.charKey,(0,d.ew)(K,4,(0,d.ew)(l.uK.anemo,2,(0,d.aQ)(.1)))),E=(0,d.Dg)(l.qH.activeCharKey,l.qH.charKey,(0,d.ew)(K,4,(0,d.ew)(l.uK.anemo,2,(0,d.aQ)(-.05)))),T={name:b("ImpetuousWinds.name"),desc:b("ImpetuousWinds.desc"),icon:(0,o.BX)("span",{children:[(0,o.tZ)(Z.Z,Object.assign({},u.m))," ",(0,o.tZ)(Z.Z,Object.assign({},u.m))]}),canShow:e=>e.get(l.uK.anemo).value>=2&&e.get(K).value>=4,sections:[{teamBuff:!0,fields:[{node:z},{node:q},{node:E}]}]},I=["resonance","EnduringRock"],W=(0,x.v9)(I),R=["resonance","EnduringRockHit"],$=(0,x.v9)(R),_=(0,d.Dg)(l.qH.activeCharKey,l.qH.charKey,(0,d.ew)(K,4,(0,d.ew)(l.uK.geo,2,(0,d.aQ)(.15)))),G=(0,d.Dg)(l.qH.activeCharKey,l.qH.charKey,(0,d.ew)(K,4,(0,d.ew)(l.uK.geo,2,(0,d.Dg)(W,"on",(0,d.aQ)(.15))))),V=(0,d.Dg)(l.qH.activeCharKey,l.qH.charKey,(0,d.ew)(K,4,(0,d.ew)(l.uK.geo,2,(0,d.Dg)($,"on",(0,d.aQ)(-.2))))),Q={name:b("EnduringRock.name"),desc:b("EnduringRock.desc"),icon:(0,o.BX)("span",{children:[(0,o.tZ)(g.Z,Object.assign({},u.m))," ",(0,o.tZ)(g.Z,Object.assign({},u.m))]}),canShow:e=>e.get(l.uK.geo).value>=2&&e.get(K).value>=4,sections:[{teamBuff:!0,text:b("EnduringRock.desc"),fields:[{node:_}]},{teamBuff:!0,path:I,value:W,header:{title:b("EnduringRock.name"),icon:(0,o.tZ)(g.Z,{})},name:(0,x.st)("protectedByShield"),states:{on:{fields:[{node:G}]}}},{teamBuff:!0,path:R,value:$,header:{title:b("EnduringRock.name"),icon:(0,o.tZ)(g.Z,{})},name:w("EnduringRock.hitCond"),states:{on:{fields:[{node:V},{text:(0,x.el)("duration"),value:15,unit:"s"}]}}}]},N=["resonance","SprawlingCanopy2ele"],A=(0,x.v9)(N),F=["resonance","SprawlingCanopy3ele"],U=(0,x.v9)(F),J=(0,d.Dg)(l.qH.activeCharKey,l.qH.charKey,(0,d.ew)(K,4,(0,d.ew)(l.uK.dendro,2,50,Object.assign({},h.ZP.info("eleMas"),{isTeamBuff:!0})))),Y=(0,d.Dg)(l.qH.activeCharKey,l.qH.charKey,(0,d.ew)(K,4,(0,d.ew)(l.uK.dendro,2,(0,d.Dg)(A,"on",30,Object.assign({},h.ZP.info("eleMas"),{isTeamBuff:!0}))))),ee=(0,d.Dg)(l.qH.activeCharKey,l.qH.charKey,(0,d.ew)(K,4,(0,d.ew)(l.uK.dendro,2,(0,d.Dg)(U,"on",20,Object.assign({},h.ZP.info("eleMas"),{isTeamBuff:!0}))))),te=[B,S,X,M,P,T,Q,{name:b("SprawlingGreenery.name"),desc:b("SprawlingGreenery.desc"),icon:(0,o.BX)("span",{children:[(0,o.tZ)(p.Z,Object.assign({},u.m))," ",(0,o.tZ)(p.Z,Object.assign({},u.m))]}),canShow:e=>e.get(l.uK.dendro).value>=2&&e.get(K).value>=4,sections:[{teamBuff:!0,text:b("SprawlingGreenery.desc"),fields:[{node:J}]},{teamBuff:!0,path:N,value:A,header:{title:b("SprawlingGreenery.name"),icon:(0,o.tZ)(p.Z,{})},name:w("SprawlingGreenery.cond2ele"),states:{on:{fields:[{node:Y},{text:(0,x.el)("duration"),value:6,unit:"s"}]}}},{teamBuff:!0,path:F,value:U,header:{title:b("SprawlingGreenery.name"),icon:(0,o.tZ)(p.Z,{})},name:w("SprawlingGreenery.cond3ele"),states:{on:{fields:[{node:ee},{text:(0,x.el)("duration"),value:6,unit:"s"}]}}}]}],ne=(0,s.d1)({teamBuff:{premod:Object.assign({},k,{atk_:L,hp_:j,staminaDec_:z,moveSPD_:q,cdRed_:E,shield_:_,all_dmg_:G,geo_enemyRes_:V,eleMas:(0,d.ce)((0,d.Sm)(J,Y,ee),{pivot:!0})}),total:{critRate_:D}}})},43571:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(66204),r=n(97278);function i(e){const{database:t}=(0,a.useContext)(r.t),[n,i]=(0,a.useState)((()=>t.charMeta.get(e)));return(0,a.useEffect)((()=>t.charMeta.follow(e,((e,t,n)=>i(n)))),[e,t]),(0,a.useEffect)((()=>i(t.charMeta.get(e))),[t,e]),n}},77799:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(66204),r=n(59379),i=n(97278);function o(){var e;const{database:t}=(0,a.useContext)(i.t),n=(0,r.s0)(),{params:{tab:o=""}}=null!=(e=(0,r.bS)({path:"/characters/:charKey/:tab",end:!1}))?e:{params:{tab:""}};return(0,a.useCallback)((e=>{const a=t.chars.get(e);let r=o;a||(t.chars.getWithInitWeapon(e),r=""),n(`/characters/${e}/${r}`)}),[n,t,o])}},13336:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(66204),r=n(97278);function i(e=""){const{database:t}=(0,a.useContext)(r.t),[n,i]=(0,a.useState)(t.chars.get(e));return(0,a.useEffect)((()=>i(t.chars.get(e))),[t,e]),(0,a.useEffect)((()=>e?t.chars.follow(e,((e,t,n)=>"update"===t&&i(n))):void 0),[e,i,t]),n}},8094:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(66204),r=n(97278),i=n(41664);function o(e){const{database:t}=(0,a.useContext)(r.t);return(0,a.useCallback)((n=>{if(!e)return;const a=t.chars.get(e);if(a)if("type"in n)switch(n.type){case"enemyOverride":{const r=a.enemyOverride,{statKey:i,value:o}=n;if(r[i]===o)break;t.chars.set(e,Object.assign({},a,{enemyOverride:Object.assign({},r,{[i]:o})}));break}case"editStats":{const{statKey:r,value:o}=n,c=(0,i.I8)(a.bonusStats);if(c[r]===o)break;o?c[r]=o:delete c[r],t.chars.set(e,Object.assign({},a,{bonusStats:c}));break}case"resetStats":{const{statKey:r}=n,i=a.bonusStats;delete i[r],t.chars.set(e,Object.assign({},a,{bonusStats:i}));break}case"teamConditional":{const{teamMateKey:r,conditional:o}=n,c=(0,i.I8)(a.teamConditional);c[r]=o,t.chars.set(e,Object.assign({},a,{teamConditional:c}));break}case"team":{const{team:r}=a,i=[...r],{index:o,charKey:c}=n;i[o]=c,t.chars.set(e,Object.assign({},a,{team:i}))}}else t.chars.set(e,Object.assign({},a,n))}),[e,t])}},87088:(e,t,n)=>{n.d(t,{V:()=>y,Z:()=>C});var a=n(15878),r=n(66204),i=n(54715),o=n(88263),c=n(53130),l=n(59540),s=n(52607),d=n(97278),h=n(23202),u=n(27492),Z=n(41664),m=n(73181),p=n(10228),f=n(74978);const g=["data"],v=["display"];function C(e,t=0,n,i){const{database:o}=(0,r.useContext)(d.t),[c,l]=(0,f.Z)(),s=(0,r.useDeferredValue)(c),{gender:h}=(0,p.Z)(),m=(0,r.useMemo)((()=>s&&function(e,t,n=0,r,i,o){var c;if(!t)return;if(!n&&!i&&!o){const n=e._getTeamData(t);if(n)return n}const{teamData:l,teamBundle:s}=null!=(c=y(e,t,n,i,o))?c:{};if(!l||!s)return;const d=(0,u.Qo)(l,r,t),h=(0,Z.xh)(d,((e,t)=>{const n=s[t],r=(0,a.Z)(n,g);return Object.assign({},e,r)}));n||i||o||e.cacheTeamData(t,h);return h}(o,e,t,h,n,i)),[s,h,e,o,t,n,i]);return(0,r.useEffect)((()=>e?o.chars.follow(e,l):void 0),[e,l,o]),m}function y(e,t,n=0,a,r){var i;if(!t)return;const o=e.chars.get(t);if(!o)return;const c=x(e,!0,n,o,r||(null!=(i=e.weapons.get(o.equippedWeapon))?i:(0,m.Qu)()),null!=a?a:Object.values(o.equippedArtifacts).map((t=>e.arts.get(t))).filter((e=>e)));if(!c)return;const l={[t]:c},s={[t]:c.data};return c.character.team.forEach((t=>{var n,a;if(!t)return;const r=e.chars.get(t);if(!r)return;const i=x(e,!1,0,Object.assign({},r,{conditional:null!=(n=o.teamConditional[t])?n:{}}),null!=(a=e.weapons.get(r.equippedWeapon))?a:(0,m.Qu)(),Object.values(r.equippedArtifacts).map((t=>e.arts.get(t))).filter((e=>e)));i&&(l[t]=i,s[t]=i.data)})),{teamData:s,teamBundle:l}}function x(e,t=!1,n,r,d,Z){const m=(0,o.m)(r.key,e.gender);if(!m)return;const p=(0,l.ub)(d.key);if(!p)return;const f=s.Z.getAllDataOfType(m.weaponTypeKey),g=t?(()=>{const e=p.data,t=(0,a.Z)(e,v);return(0,u.b3)([t,f])})():p.data,C=(0,u.b3)([m.data,g,i.d5]),y=[...Array.isArray(Z)?Z.map((e=>(0,u.n3)(e,n))):[Z],(0,u.vn)(r,t?C:void 0),(0,u.v0)(d),C,h.y0,c.Y];return{character:r,weapon:d,characterSheet:m,weaponSheet:p,data:y}}},81720:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(66204),r=n(97278);function i(e=""){const{database:t}=(0,a.useContext)(r.t),[n,i]=(0,a.useState)(t.weapons.get(e));return(0,a.useEffect)((()=>i(t.weapons.get(e))),[t,e]),(0,a.useEffect)((()=>e?t.weapons.follow(e,((e,t,n)=>"update"===t&&i(n))):void 0),[e,i,t]),n}},79506:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(50968),r=n(74499);const i=(0,a.Z)((0,r.tZ)("path",{d:"M 21.160156 0 C 20.578125 0.0429688 20.003906 0.148438 19.445312 0.320312 C 18.546875 0.507812 17.6875 0.855469 16.910156 1.347656 C 16.507812 1.585938 16.5 1.902344 16.375 1.816406 C 16.125 1.710938 15.839844 1.6875 15.574219 1.761719 C 9.6875 6.40625 9.558594 6.671875 6.546875 11.132812 C 6.351562 11.210938 6.058594 10.945312 6.058594 10.945312 C 5.957031 11.878906 5.691406 11.878906 5.160156 12.945312 C 4.5 13.980469 4.269531 15.234375 4.515625 16.4375 C 4.085938 16.359375 3.667969 16.21875 3.277344 16.015625 L 4.078125 16.683594 C 3.554688 16.824219 3.015625 16.867188 2.476562 16.820312 L 3.546875 17.621094 C 3.546875 17.621094 2.875 18.285156 2.609375 18.285156 L 3.5 18.414062 C 2.460938 20.15625 1.59375 21.996094 0.917969 23.910156 C 0.910156 23.933594 0.914062 23.960938 0.929688 23.976562 C 0.945312 23.996094 0.96875 24.003906 0.996094 24 L 2.011719 23.484375 C 2.027344 23.476562 2.039062 23.460938 2.046875 23.441406 C 2.511719 21.625 3.546875 20.003906 4.996094 18.8125 L 5.816406 19.753906 C 5.636719 19.335938 5.546875 18.878906 5.550781 18.421875 L 7.019531 18.6875 C 6.351562 18.019531 6.421875 17.726562 6.421875 17.726562 C 7.328125 17.890625 8.261719 17.871094 9.164062 17.667969 C 10.191406 17.289062 11.171875 16.792969 12.085938 16.1875 C 12.230469 16.117188 11.835938 16.046875 11.972656 15.972656 C 12.109375 15.902344 12.535156 15.8125 12.679688 15.726562 C 14.230469 14.6875 15.695312 13.523438 17.058594 12.253906 C 18.636719 10.925781 20.007812 9.363281 21.113281 7.625 C 21.1875 7.496094 20.496094 7.28125 20.214844 7.226562 C 20.515625 7.261719 21.269531 7.433594 21.335938 7.308594 C 22.089844 6.085938 22.589844 4.722656 22.808594 3.296875 C 22.90625 2.132812 23.972656 -0.136719 21.160156 0 Z M 5.285156 16.417969 C 8.632812 9.210938 18.230469 3.335938 18.230469 3.335938 C 21.265625 0.960938 11.441406 7.515625 5.285156 16.550781 Z M 5.285156 16.417969 "}),"Plume")},53537:(e,t,n)=>{n.d(t,{A:()=>r,W:()=>i});var a=n(41664);function r(e,t){const n=(0,a.xh)(e,(e=>o(e)));return t(n),(0,a.xh)(n,(e=>c(e)))}function i(e,t){const n=o(e);return t(n),c(n)}function o(e){return Object.fromEntries(e.map((e=>[e,{total:0,current:0}])))}function c(e){return(0,a.xh)(e,(({total:e,current:t})=>t===e?`${e}`:`${t}/${e}`))}},29822:(e,t,n)=>{var a=n(54734);t.Z=void 0;var r=a(n(53948)),i=n(43188),o=(0,r.default)((0,i.jsx)("path",{d:"M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z"}),"BusinessCenter");t.Z=o},24430:(e,t,n)=>{var a=n(54734);t.Z=void 0;var r=a(n(53948)),i=n(43188),o=(0,r.default)((0,i.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.Z=o},84621:(e,t,n)=>{var a=n(54734);t.Z=void 0;var r=a(n(53948)),i=n(43188),o=(0,r.default)((0,i.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");t.Z=o},63336:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(50968),r=n(43188);const i=(0,a.Z)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever")},22657:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(50968),r=n(43188);const i=(0,a.Z)((0,r.jsx)("path",{fillRule:"evenodd",d:"M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 17H5v-2h5v2zm0-4H5v-2h5v2zm0-4H5V7h5v2zm4.82 6L12 12.16l1.41-1.41 1.41 1.42L17.99 9l1.42 1.42L14.82 15z"}),"FactCheck")},14849:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(50968),r=n(43188);const i=(0,a.Z)((0,r.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder")},23344:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(50968),r=n(43188);const i=(0,a.Z)((0,r.jsx)("path",{d:"M19.8 18.4 14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z"}),"Science")},52560:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(50968),r=n(43188);const i=(0,a.Z)((0,r.jsx)("path",{d:"m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"}),"TrendingUp")}}]);
//# sourceMappingURL=169.077b25345bc419a7.js.map