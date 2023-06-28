"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[217],{6882:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(78374),a=n(5450),l=n(74499);function s({avatar:e,title:t,action:n}){return(0,l.BX)(i.Z,{display:"flex",gap:1,p:2,alignItems:"center",children:[e,(0,l.tZ)(a.Z,{variant:"subtitle1",sx:{flexGrow:1},children:t}),n&&(0,l.tZ)(a.Z,{variant:"caption",children:n})]})}},14420:(e,t,n)=>{n.d(t,{X:()=>j,Z:()=>L});var i=n(78374),a=n(5450),l=n(25063),s=n(66204),o=n(17609),c=n(41664),r=n(59401),d=n(6882),Z=n(5282),u=n(53669),h=n(26462),p=n(69126),f=n(57697),m=n(93124),v=n(77726),x=n(67116),b=n(4097),C=n(81356),g=n(47946),y=n(91776),k=n(74499);function w({conditional:e,disabled:t=!1}){return 1===Object.keys(e.states).length&&"path"in e?(0,k.tZ)(B,{conditional:e,disabled:t}):"path"in e?(0,k.tZ)(D,{conditional:e,disabled:t}):(0,k.tZ)(X,{conditional:e,disabled:t})}function B({conditional:e,disabled:t}){const{character:n,characterDispatch:i}=(0,s.useContext)(x.K),{data:a}=(0,s.useContext)(o.R),l=(0,s.useCallback)((t=>{const a=structuredClone(n.conditional);t?(0,b.SR)(a,e.path,t):(0,b.uH)(a,e.path),i({conditional:a})}),[e,n,i]),c=a.get(e.value).value,[r,d]=Object.entries(e.states)[0],Z=R(d.name),u=H(e.name);return(0,k.BX)(f.Z,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:c?"success":"primary",onClick:()=>l(c?void 0:r),disabled:t,startIcon:c?(0,k.tZ)(h.Z,{}):(0,k.tZ)(p.Z,{}),children:[u," ",Z]})}function D({conditional:e,disabled:t}){const{character:n,characterDispatch:i}=(0,s.useContext)(x.K),{data:a}=(0,s.useContext)(o.R),c=(0,s.useCallback)((t=>{const a=structuredClone(n.conditional);t?(0,b.SR)(a,e.path,t):(0,b.uH)(a,e.path),i({conditional:a})}),[e,n,i]),r=a.get(e.value).value,d=r?e.states[r]:void 0,Z=d?R(d.name):(0,k.tZ)(g.Z,{color:"secondary",children:"Not Active"}),u=H(e.name);return(0,k.BX)(C.Z,{fullWidth:!0,size:"small",sx:{borderRadius:0},color:r?"success":"primary",title:(0,k.BX)("span",{children:[u," ",Z]}),disabled:t,children:[(0,k.tZ)(m.Z,{onClick:()=>c(),selected:!d,disabled:!d,children:(0,k.tZ)("span",{children:"Not Active"})}),(0,k.tZ)(l.Z,{}),Object.entries(e.states).map((([e,t])=>(0,k.tZ)(m.Z,{onClick:()=>c(e),selected:r===e,disabled:r===e,children:t.name},e)))]})}function X({conditional:e,disabled:t}){const{character:n,characterDispatch:i}=(0,s.useContext)(x.K),{data:a}=(0,s.useContext)(o.R),l=(0,s.useCallback)(((e,t)=>{const a=structuredClone(n.conditional);t?(0,b.SR)(a,e,t):(0,b.uH)(a,e),i({conditional:a})}),[n,i]);return(0,k.tZ)(v.Z,{fullWidth:!0,orientation:"vertical",disableElevation:!0,color:"secondary",children:Object.entries(e.states).map((([e,n])=>{const i=a.get(n.value).value,s=i===e;return(0,k.tZ)(f.Z,{color:s?"success":"primary",disabled:t,fullWidth:!0,onClick:()=>l(n.path,i?void 0:e),size:"small",startIcon:s?(0,k.tZ)(h.Z,{}):(0,k.tZ)(p.Z,{}),sx:{borderRadius:0},children:H(n.name)},e)}))})}function P(e){return"string"!=typeof e}function R(e){if(!e)return"";let t="primary",n=e;return e&&P(e)&&e.props.color&&(t=e.props.color,n=(0,k.tZ)("span",{children:e.props.children})),(0,k.tZ)(g.Z,{sx:{ml:.5},color:t,children:n})}function H(e){if(P(e)){const t=e.props.key18,n=e.props.ns,i=e.props.values;return(0,k.tZ)(y.v,{ns:n,key18:t,values:i,useBadge:!0})}return e}function S({conditional:e,hideHeader:t=!1,hideDesc:n=!1}){const{data:i}=(0,s.useContext)(o.R);let a;if("path"in e){var l;const t=i.get(e.value).value;a=t&&(null==(l=e.states[t])?void 0:l.fields)}else a=Object.values(e.states).flatMap((e=>i.get(e.value).value?e.fields:[]));return(0,k.BX)(r.Z,{children:[!(0,c.mY)(t,e)&&(0,k.tZ)(j,{header:e.header,hideDesc:n}),(0,k.tZ)(Z.Z,{sx:{p:0,"&:last-child":{pb:0}},children:(0,k.tZ)(w,{conditional:e})}),a&&(0,k.tZ)(u.ZP,{fields:a})]})}var W=n(47422);function L({sections:e,teamBuffOnly:t,hideDesc:n=!1,hideHeader:a=!1}){const{data:l}=(0,s.useContext)(o.R);if(!e.length)return null;const c=e.map(((e,i)=>e.canShow&&!l.get(e.canShow).value||t&&!e.teamBuff?null:(0,k.tZ)(I,{section:e,hideDesc:n,hideHeader:a},i))).filter((e=>e));return c.length?(0,k.tZ)(i.Z,{display:"flex",flexDirection:"column",gap:1,children:c}):null}function I({section:e,hideDesc:t=!1,hideHeader:n=!1}){return"fields"in e?(0,k.tZ)(O,{section:e,hideDesc:t,hideHeader:n}):"states"in e?(0,k.tZ)(S,{conditional:e,hideDesc:t,hideHeader:n}):(0,k.tZ)($,{section:e})}function O({section:e,hideDesc:t,hideHeader:n}){return(0,k.BX)(r.Z,{children:[!(0,c.mY)(n,e)&&e.header&&(0,k.tZ)(j,{header:e.header,hideDesc:t,hideDivider:0===e.fields.length}),(0,k.tZ)(u.ZP,{fields:e.fields})]})}function $({section:e}){const{data:t}=(0,s.useContext)(o.R);return(0,k.tZ)("div",{children:(0,c.mY)(e.text,t)})}function j({header:e,hideDesc:t,hideDivider:n}){const{data:i}=(0,s.useContext)(o.R),{icon:r,title:Z,action:u}=e,h=(0,c.mY)(r,i),p=!t&&(0,c.mY)(e.description,i),f=t?Z:(0,k.BX)("span",{children:[Z,(0,k.tZ)(W.L,{title:(0,k.tZ)(a.Z,{children:p})})]});return(0,k.BX)(k.HY,{children:[(0,k.tZ)(d.Z,{avatar:h,title:f,action:u}),!n&&(0,k.tZ)(l.Z,{})]})}},82281:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(21602),a=n(4097),l=n(77726),s=n(57697),o=n(93124),c=n(66204),r=n(98976),d=n(91887),Z=n(81356),u=n(74499);function h({level:e,ascension:t,setBoth:n,useLow:h=!1}){const{t:p}=(0,r.$G)("ui"),f=h?i.sU:i.SJ,m=(0,c.useCallback)(((e=1)=>{e=(0,a.re)(e,1,h?i.d8:i.Qq);const t=f.findIndex((t=>e<=t));n({level:e,ascension:t})}),[n,f,h]),v=(0,c.useCallback)((()=>{const i=f.findIndex((t=>90!==e&&e===t));n(t===i?{ascension:t+1}:{ascension:i})}),[n,f,t,e]);return(0,u.BX)(l.Z,{sx:{bgcolor:e=>e.palette.contentDark.main},children:[(0,u.tZ)(d.CC,{children:(0,u.tZ)(d.ZP,{onChange:m,value:e,startAdornment:"Lv. ",inputProps:{min:1,max:90,sx:{textAlign:"center",width:"3em"}},sx:{height:"100%",pl:2}})}),(0,u.tZ)(s.Z,{sx:{pl:1,whiteSpace:"nowrap"},disabled:!(h?i.nB:i.ek)(e),onClick:v,children:(0,u.BX)("strong",{children:["/ ",i.SJ[t]]})}),(0,u.tZ)(Z.Z,{title:p("selectlevel"),sx:{flexGrow:1},children:[...h?i.vF:i.D4].map((([i,a])=>{const l=i===e&&a===t;return(0,u.tZ)(o.Z,{selected:l,disabled:l,onClick:()=>n({level:i,ascension:a}),children:i===f[a]?`Lv. ${i}`:`Lv. ${i}/${f[a]}`},`${i}/${a}`)}))})]})}},8448:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(68946),a=n(93124),l=n(98976),s=n(81356),o=n(74499);function c({refinement:e,setRefinement:t}){const{t:n}=(0,l.$G)("ui");return(0,o.tZ)(s.Z,{title:n("refinement",{value:e}),children:i.Lb.map((i=>(0,o.tZ)(a.Z,{onClick:()=>t(i),selected:e===i,disabled:e===i,children:n("refinement",{value:i})},i)))})}},32217:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var i=n(16405),a=n(21602),l=n(7047),s=n(84815),o=n(5282),c=n(86821),r=n(78374),d=n(5450),Z=n(77726),u=n(57697),h=n(74876),p=n(25063),f=n(70977),m=n(66204),v=n(59401),x=n(50210),b=n(6806),C=n(48774),g=n(14420),y=n(53669),k=n(82281),w=n(39006),B=n(8448),D=n(29581),X=n(17609),P=n(24337),R=n(44255),H=n(78089),S=n(23202),W=n(27492),L=n(22010),I=n(10228),O=n(81720),$=n(74499);const j=m.lazy((()=>n.e(592).then(n.bind(n,16299))));function G({weaponId:e,footer:t=!1,onClose:n,extraButtons:G}){var K;const{data:N}=(0,m.useContext)(X.R),{database:T}=(0,m.useContext)(H.t),Y=(0,O.Z)(e),{key:A="",level:z=0,refinement:J=1,ascension:M=0,lock:q,location:E="",id:F}=null!=Y?Y:{},U=A?(0,R.ub)(A):void 0,Q=(0,m.useCallback)((t=>{T.weapons.set(e,t)}),[e,T]),{gender:V}=(0,I.Z)(),_=(0,m.useMemo)((()=>E?(0,P.m)(T.chars.LocationToCharacterKey(E),V):void 0),[T,V,E]),ee=_&&_.weaponTypeKey,te=(0,m.useCallback)((e=>F&&T.weapons.set(F,{location:e})),[T,F]),ne=(0,m.useCallback)((e=>e.weaponTypeKey===(null==U?void 0:U.weaponType)),[U]),[ie,ae,le]=(0,L.aV)(),se=A?(0,i.Aq)(A,M>=2):"";(0,m.useEffect)((()=>{if(U&&Q&&U.key===(null==Y?void 0:Y.key)&&U.rarity<=2&&(z>70||M>4)){const[e,t]=a.vF[0];Q({level:e,ascension:t})}}),[U,Y,Q,z,M]);const oe=(0,m.useMemo)((()=>U&&Y&&(0,W.mP)([U.data,(0,W.v0)(Y)])),[U,Y]);return(0,$.tZ)(w.Z,{open:!!e,onClose:n,containerProps:{maxWidth:"md"},children:(0,$.BX)(x.Z,{children:[(0,$.tZ)(j,{ascension:M,show:ie,onHide:le,onSelect:e=>Q({key:e}),weaponTypeFilter:ee}),(0,$.tZ)(o.Z,{children:U&&oe&&(0,$.BX)(c.ZP,{container:!0,spacing:1.5,children:[(0,$.tZ)(c.ZP,{item:!0,xs:12,sm:3,children:(0,$.BX)(c.ZP,{container:!0,spacing:1.5,children:[(0,$.tZ)(c.ZP,{item:!0,xs:6,sm:12,children:(0,$.tZ)(r.Z,{component:"img",src:se,className:`grad-${U.rarity}star`,sx:{maxWidth:256,width:"100%",height:"auto",borderRadius:1}})}),(0,$.tZ)(c.ZP,{item:!0,xs:6,sm:12,children:(0,$.tZ)(d.Z,{children:(0,$.tZ)("small",{children:U.description})})})]})}),(0,$.BX)(c.ZP,{item:!0,xs:12,sm:9,sx:{display:"flex",flexDirection:"column",gap:1},children:[(0,$.tZ)(r.Z,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:(0,$.BX)(Z.Z,{children:[(0,$.tZ)(u.Z,{color:"info",onClick:ae,children:null!=(K=null==U?void 0:U.name)?K:"Select a Weapon"}),(null==U?void 0:U.hasRefinement)&&(0,$.tZ)(B.Z,{refinement:J,setRefinement:e=>Q({refinement:e})}),G]})}),(0,$.BX)(r.Z,{display:"flex",gap:1,flexWrap:"wrap",justifyContent:"space-between",children:[U&&(0,$.tZ)(k.Z,{level:z,ascension:M,setBoth:Q,useLow:!U.hasRefinement}),(0,$.tZ)(u.Z,{color:"error",onClick:()=>F&&T.weapons.set(F,{lock:!q}),startIcon:q?(0,$.tZ)(l.Z,{}):(0,$.tZ)(s.Z,{}),children:q?"Locked":"Unlocked"})]}),(0,$.tZ)(D.q,{stars:U.rarity}),(0,$.tZ)(d.Z,{variant:"subtitle1",children:(0,$.tZ)("strong",{children:U.passiveName})}),(0,$.tZ)(d.Z,{gutterBottom:!0,children:U.passiveName&&U.passiveDescription(oe.get(S.ri.weapon.refineIndex).value)}),(0,$.BX)(r.Z,{display:"flex",flexDirection:"column",gap:1,children:[(0,$.BX)(v.Z,{children:[(0,$.tZ)(h.Z,{title:"Main Stats",titleTypographyProps:{variant:"subtitle2"}}),(0,$.tZ)(p.Z,{}),(0,$.tZ)(y.lD,{children:[S.ri.weapon.main,S.ri.weapon.sub,S.ri.weapon.sub2].map((e=>{const t=oe.get(e);return t.isEmpty||!t.value?null:(0,$.tZ)(y.JW,{node:t,component:f.ZP},JSON.stringify(t.info))}))})]}),N&&U.document&&(0,$.tZ)(g.Z,{sections:U.document})]})]})]})}),t&&F&&(0,$.tZ)(o.Z,{sx:{py:1},children:(0,$.BX)(c.ZP,{container:!0,spacing:1,children:[(0,$.tZ)(c.ZP,{item:!0,flexGrow:1,children:(0,$.tZ)(b.W,{location:E,setLocation:te,filter:ne,autoCompleteProps:{getOptionDisabled:e=>!e.key}})}),(0,$.tZ)(c.ZP,{item:!0,flexGrow:2}),!!n&&(0,$.tZ)(c.ZP,{item:!0,children:(0,$.tZ)(C.Z,{sx:{height:"100%"},large:!0,onClick:n})})]})})]})})}}}]);
//# sourceMappingURL=217.f99385f727a798e1.js.map