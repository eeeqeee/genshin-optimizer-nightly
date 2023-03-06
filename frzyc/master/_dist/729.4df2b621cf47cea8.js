(()=>{"use strict";function e(e,t){if(e&&t)return!Array.isArray(t)&&console.error(t),t.reduce(((e,t)=>null==e?void 0:e[t]),e)}function t(e,t){return Object.fromEntries(e.map(((e,n)=>[e,t(e,n)])))}function n(e,t){return Object.fromEntries(e.map(((e,n)=>t(e,n))))}function a(e,t){return Object.fromEntries(Object.entries(e).map((([e,n],a)=>[e,t(n,e,a)])))}const s=function*(e,t){for(let n=e;n<=t;n++)yield n};function r(e,t){return[...s(e,t)]}function o(e){throw new Error(`Should not reach this with value ${e}`)}i(NaN,{name:"TODO"}),l(1),l(0),i("none");function i(e,t){return"number"==typeof e?{operation:"const",operands:[],type:"number",value:e,info:t}:{operation:"const",operands:[],type:"string",value:e,info:t}}function l(e,t){return e>=Number.MAX_VALUE/100&&(e=1/0),e<=-Number.MAX_VALUE/100&&(e=-1/0),i(e,Object.assign({unit:"%"},t))}function c(e){return e.map((e=>"object"==typeof e?e:i(e)))}function u(e){return"object"!=typeof e?i(e):e}function d(e,t,n){const a=new Set,s=new Set;e.forEach((function e(r){s.has(r)||(a.has(r)?console.error("Found cyclical dependency during formula traversal"):(a.add(r),t(r),r.operands.forEach(e),n(r),a.delete(r),s.add(r)))}))}function h(e,t,n){const a=new Set,s=new Map,r=new Map;function o(e){let l=s.get(e);if(l)return l;l=t(e);let c=r.get(l);return c||(a.has(l)?(console.error("Found cyclical dependency during formula mapping"),i(NaN)):(a.add(l),c=n(function(e){const t=e.operands.map(o);return f(t,e.operands)?e:Object.assign({},e,{operands:t})}(l),e),a.delete(l),s.set(e,c),r.set(l,c),c))}const l=e.map(o);return f(l,e)?e:l}function p(e,t,n){const a=new Map;function s(e,t){let r=a.get(t);r||a.set(t,r=[new Set,new Map]);const[o,i]=r,l=i.get(e);if(l)return l;if(o.has(e))throw new Error("Found cyclical dependency during formula mapping");o.add(e);const c=n(e,t,s);return i.set(e,c),o.delete(e),c}return e.map((e=>s(e,t)))}function f(e,t){return void 0===e?void 0===t:void 0!==t&&(e.length===t.length&&e.every(((e,n)=>e===t[n])))}const m={min:e=>Math.min(...e),max:e=>Math.max(...e),add:e=>e.reduce(((e,t)=>e+t),0),mul:e=>e.reduce(((e,t)=>e*t),1)},g=Object.assign({},m,{res:([e])=>e<0?1-e/2:e>=.75?1/(4*e+1):1-e,sum_frac:e=>e[0]/e.reduce(((e,t)=>e+t)),threshold:([e,t,n,a])=>e>=t?n:a}),v=new Set(Object.keys(m));function b(e){return h(e,(e=>e),(e=>{let t=e;if(v.has(e.operation)){const n=e,{operation:a}=n;let s=!1;const r=n.operands.flatMap((e=>e.operation===a?(s=!0,e.operands):[e]));t=s?Object.assign({},n,{operands:r}):n}return t}))}function w(e){function t(e){const t=new Map;for(const a of e){var n;t.set(a,(null!=(n=t.get(a))?n:0)+1)}return t}const n={common:{counts:new Map,formulas:new Set,operation:"add"}};for(;;){let s;const r={operation:n.common.operation,operands:(a=n.common.counts,[...a].flatMap((([e,t])=>Array(t).fill(e))))},o=new Map;for(const e of Object.keys(m))o.set(e,[]);if(e=h(e,(e=>{if(n.common.formulas.has(e)){const t=e,a=new Map(n.common.counts),s=t.operands.filter((e=>{const t=a.get(e);return!t||(a.set(e,t-1),!1)}));return s.length?(s.push(r),Object.assign({},t,{operands:s})):r}return e}),(e=>{if(!v.has(e.operation))return e;const n=e;if(s){if(s.operation===n.operation){const e=t(n.operands),r=new Map,o=s.counts;let i=0;for(const[t,n]of e.entries()){var a;const e=Math.min(n,null!=(a=o.get(t))?a:0);e?(r.set(t,e),i+=e):r.delete(t)}i>1&&(s.counts=r,s.formulas.add(n))}}else{const e=o.get(n.operation),a=t(n.operands);for(const[t,i]of e){let e=0;const l=new Map;for(const[t,n]of i.entries()){var r;const s=Math.min(n,null!=(r=a.get(t))?r:0);s&&(l.set(t,s),e+=s)}if(e>1){s={counts:l,formulas:new Set([n,t]),operation:n.operation},o.clear();break}}s||e.push([n,a])}return n})),!s)break;n.common=s}var a;return e}function y(t,n,a=(e=>!1)){const s={data:[],processed:new Map},r=new Map([[s,new Map]]),l={data:[n],processed:new Map};return r.set(l,new Map),r.get(s).set(n,l),p(t,l,((t,n,l)=>{var c;const{operation:u}=t,d=(e,t)=>l(e,t),h=(e,t)=>l(e,t);let p;switch(u){case"const":p=t;break;case"add":case"mul":case"max":case"min":const b=g[u],w=[],y=t.operands.filter((e=>{const t=d(e,n);return"const"!==t.operation||(w.push(t.value),!1)})).map((e=>d(e,n))),k=b(w);if(isFinite(k)){if("mul"===u&&0===k){p=i(k);break}}else if("mul"!==u&&("max"!==u||k>0)&&("min"!==u||k<0)){p=i(k);break}k!==b([])&&y.push(i(k)),p=y.length<=1?null!=(c=y[0])?c:i(b([])):{operation:u,operands:y};break;case"res":case"sum_frac":{const e=t.operands.map((e=>d(e,n))),a=g[u];p=e.every((e=>"const"===e.operation))?i(a(e.map((e=>e.value)))):Object.assign({},t,{operands:e});break}case"lookup":{const e=h(t.operands[0],n);if("const"===e.operation){var f;const a=null!=(f=t.table[e.value])?f:t.operands[1];if(a){p=l(a,n);break}}throw new Error(`Unsupported ${u} node while folding`)}case"prio":{const e=t.operands.find((e=>{const t=h(e,n);if("const"!==t.operation)throw new Error(`Unsupported ${u} node while folding`);return void 0!==t.value}));p=e?h(e,n):i(void 0);break}case"small":{var m;let e;for(const a of t.operands){var v;const t=h(a,n);if("const"!==t.operation)throw new Error(`Unsupported ${u} node while folding`);(void 0===(null==(v=e)?void 0:v.value)||void 0!==t.value&&t.value<e.value)&&(e=t)}p=null!=(m=e)?m:i(void 0);break}case"match":{const[e,a,s,r]=t.operands.map((e=>l(e,n)));if("const"!==e.operation||"const"!==a.operation)throw new Error(`Unsupported ${u} node while folding`);p=e.value===a.value?s:r;break}case"threshold":{const[e,a,s,r]=t.operands.map((e=>l(e,n)));p="const"===s.operation&&"const"===r.operation&&s.value===r.value?s:"const"===e.operation&&"const"===a.operation?e.value>=a.value?s:r:Object.assign({},t,{operands:[e,a,s,r]});break}case"subscript":{const e=d(t.operands[0],n);if("const"!==e.operation)throw new Error("Found non-constant subscript node while folding");p=i(t.list[e.value]);break}case"read":{const s=n.data.map((n=>e(n,t.path))).filter((e=>e));if(0===s.length)if(a(t)){const{accu:e}=t;p=void 0===e||"small"===e?"string"===t.type?i(void 0):i(NaN):i(g[e]([]))}else p=t;else p=void 0===t.accu||1===s.length?l(s[s.length-1],n):l({operation:t.accu,operands:s},n);break}case"data":{t.reset&&(n=s);const e=r.get(n);let a=e.get(t.data);a||(a={data:[...n.data,t.data],processed:new Map},r.set(a,new Map),e.set(t.data,a)),p=l(t.operands[0],a);break}default:o(u)}return p.info&&(p=Object.assign({},p),delete p.info),p}))}const k=["Albedo","Alhaitham","Aloy","Amber","AratakiItto","Barbara","Beidou","Bennett","Candace","Chongyun","Collei","Cyno","Dehya","Diluc","Diona","Dori","Eula","Faruzan","Fischl","Ganyu","Gorou","HuTao","Jean","KaedeharaKazuha","Kaeya","KamisatoAyaka","KamisatoAyato","Keqing","Klee","KujouSara","KukiShinobu","Layla","Lisa","Mona","Nahida","Nilou","Ningguang","Noelle","Qiqi","RaidenShogun","Razor","Rosaria","SangonomiyaKokomi","Sayu","Shenhe","ShikanoinHeizou","Sucrose","Tartaglia","Thoma","Tighnari","Venti","Wanderer","Xiangling","Xiao","Xingqiu","Xinyan","YaeMiko","Yanfei","Yaoyao","Yelan","Yoimiya","YunJin","Zhongli"],S=["TravelerAnemo","TravelerGeo","TravelerElectro","TravelerDendro"];const x=["flower","plume","sands","goblet","circlet"],O=["AmenomaKageuchi","AquilaFavonia","BlackcliffLongsword","CinnabarSpindle","CoolSteel","KagotsurubeIsshin","DarkIronSword","DullBlade","FavoniusSword","FesteringDesire","FilletBlade","FreedomSworn","HaranGeppakuFutsu","HarbingerOfDawn","IronSting","KeyOfKhajNisut","LightOfFoliarIncision","LionsRoar","MistsplitterReforged","PrimordialJadeCutter","PrototypeRancour","RoyalLongsword","SacrificialSword","SapwoodBlade","SilverSword","SkyriderSword","SkywardBlade","SummitShaper","SwordOfDescension","TheAlleyFlash","TheBlackSword","TheFlute","ToukabouShigure","TravelersHandySword","XiphosMoonlight"],M=["Akuoumaru","BeaconOfTheReedSea","BlackcliffSlasher","BloodtaintedGreatsword","DebateClub","FavoniusGreatsword","FerrousShadow","ForestRegalia","KatsuragikiriNagamasa","LithicBlade","LuxuriousSeaLord","MailedFlower","MakhairaAquamarine","OldMercsPal","PrototypeArchaic","Rainslasher","RedhornStonethresher","RoyalGreatsword","SacrificialGreatsword","SerpentSpine","SkyriderGreatsword","SkywardPride","SnowTombedStarsilver","SongOfBrokenPines","TheBell","TheUnforged","WasterGreatsword","Whiteblind","WhiteIronGreatsword","WolfsGravestone"],j=["BeginnersProtector","BlackcliffPole","BlackTassel","CalamityQueller","CrescentPike","Deathmatch","DragonsBane","DragonspineSpear","EngulfingLightning","FavoniusLance","Halberd","IronPoint","KitainCrossSpear","LithicSpear","MissiveWindspear","Moonpiercer","PrimordialJadeWingedSpear","PrototypeStarglitter","RoyalSpear","SkywardSpine","StaffOfHoma","StaffOfTheScarletSands","TheCatch","VortexVanquisher","WavebreakersFin","WhiteTassel"],T=["AlleyHunter","AmosBow","AquaSimulacra","BlackcliffWarbow","CompoundBow","ElegyForTheEnd","EndOfTheLine","FadingTwilight","FavoniusWarbow","Hamayumi","HuntersBow","HuntersPath","KingsSquire","Messenger","MitternachtsWaltz","MouunsMoon","PolarStar","Predator","PrototypeCrescent","RavenBow","RecurveBow","RoyalBow","Rust","SacrificialBow","SeasonedHuntersBow","SharpshootersOath","SkywardHarp","Slingshot","TheStringless","TheViridescentHunt","ThunderingPulse","WindblumeOde"],N=["ApprenticesNotes","AThousandFloatingDreams","BlackcliffAgate","DodocoTales","EmeraldOrb","EverlastingMoonglow","EyeOfPerception","FavoniusCodex","Frostbearer","FruitOfFulfillment","HakushinRing","KagurasVerity","LostPrayerToTheSacredWinds","MagicGuide","MappaMare","MemoryOfDust","OathswornEye","OtherworldlyStory","PocketGrimoire","PrototypeAmber","RoyalGrimoire","SacrificialFragments","SkywardAtlas","SolarPearl","TheWidsith","ThrillingTalesOfDragonSlayers","TulaytullahsRemembrance","TwinNephrite","WanderingEvenstar","WineAndSong"],E=["flower","plume","sands","goblet","circlet"],F=["TravelerAnemo","TravelerGeo","TravelerElectro","TravelerDendro"];function A(e,t,n,a,s,r){let o=r;const i={pruneNodeRange:!0},l={pruneNodeRange:!0},c={reaffine:!0},u={pruneOrder:!0,pruneArtRange:!0,pruneNodeRange:!0};let d=0;for(;Object.values(o).some((e=>e))&&d++<20;){if(o.pruneOrder){delete o.pruneOrder;const e=B(n,a,s);n!==e&&(n=e,o=Object.assign({},o,i))}if(o.pruneArtRange){delete o.pruneArtRange;const a=R(e,n,t);n!==a&&(n=a,o=Object.assign({},o,l))}if(o.pruneNodeRange){delete o.pruneNodeRange;const t=D(e,n);e!==t&&(e=t,o=Object.assign({},o,c))}if(o.reaffine){delete o.reaffine;const{nodes:t,arts:a}=$(e,n);e===t&&n===a||(e=t,n=a,o=Object.assign({},o,u))}}return{nodes:e,arts:n}}function $(e,n,s=!1){const r=new Set,l=new Set;function c(e,t){t?r.add(e):e.operands.forEach((e=>r.has(e)&&l.add(e)))}const u=new Set;if(d(e,(e=>{}),(e=>{const{operation:t}=e;switch(t){case"read":u.add(e.path[1]),c(e,!0);break;case"add":c(e,e.operands.every((e=>r.has(e))));break;case"mul":{const t=e.operands.filter((e=>"const"!==e.operation));c(e,0===t.length||1===t.length&&r.has(t[0]));break}case"const":c(e,!0);break;case"res":case"threshold":case"sum_frac":case"max":case"min":c(e,!1);break;default:o(t)}})),[...l].every((({operation:e})=>"read"===e||"const"===e))&&Object.keys(n.base).length===u.size)return{nodes:e,arts:n};let p=-1;function f(){for(;u.has(""+ ++p););return`${p}`}e.forEach((e=>r.has(e)&&l.add(e)));const m=[...l].filter((e=>"const"!==e.operation)),g=new Map(m.map((e=>{return[e,s||"read"!==e.operation||"dyn"!==e.path[0]?Object.assign({},(t=["dyn",`${f()}`],{operation:"read",operands:[],path:t,info:n,type:"number"}),{accu:"add"}):e];var t,n})));function v(e){const t=y([...g.keys()],{dyn:a(e,(e=>i(e)))},(e=>!0));return Object.fromEntries([...g.values()].map(((e,n)=>[e.path[1],t[n].value])))}const b={nodes:e=h(e,(e=>{var t;return null!=(t=g.get(e))?t:e}),(e=>e)),arts:{base:v(n.base),values:t(E,(e=>n.values[e].map((({id:e,set:t,values:n})=>({id:e,set:t,values:v(n)})))))}},w=Object.entries(v({}));for(const e of Object.values(b.arts.values))for(const{values:t}of e)for(const[e,n]of w)t[e]-=n;return b}function B(e,n,a){var s;let r=!1;const o=!(null!=(s=a.rainbow)&&s.length),i=Object.keys(e.base),l=new Set(Object.entries(a).filter((([e,t])=>t.length)).map((([e])=>e))),c=new Set(Object.entries(a).filter((([e,t])=>t.includes(2)&&!t.includes(4))).map((([e])=>e))),u=t(E,(t=>{const a=e.values[t],s=a.filter((e=>{let t=0;return a.every((a=>{const s=i.every((t=>{var n,s;return(null!=(n=a.values[t])?n:0)>=(null!=(s=e.values[t])?s:0)})),r=i.some((t=>{var n,s;return(null!=(n=a.values[t])?n:0)>(null!=(s=e.values[t])?s:0)})),u=s&&(r||a.id>e.id),d=o&&!l.has(a.set)&&!c.has(e.set)||e.set===a.set;return u&&d&&t++,t<n}))}));return s.length!==a.length&&(r=!0),s}));return r?{base:e.base,values:u}:e}function R(e,n,a){const s=Object.fromEntries(Object.entries(n.base).map((([e,t])=>[e,{min:t,max:t}]))),r={arts:n};for(;;){const n=t(E,(e=>P(r.arts.values[e]))),o=t(E,(e=>C(Object.entries(n).map((t=>t[0]===e?s:t[1])).filter((e=>e)))));let i=!1;const l=t(E,(t=>{const n=r.arts.values[t].filter((n=>{const s=C([P([n]),o[t]]),r=I(e,s);return e.every(((e,t)=>{var n;return r.get(e).max>=(null!=(n=a[t])?n:-1/0)}))}));return n.length!==r.arts.values[t].length&&(i=!0),n}));if(!i)break;r.arts={base:r.arts.base,values:l}}return r.arts}function D(e,t){const n=I(e,C([Object.fromEntries(Object.entries(t.base).map((([e,t])=>[e,{min:t,max:t}]))),...Object.values(t.values).map((e=>P(e)))]));return h(e,(e=>{{const{min:t,max:a}=n.get(e);if(t===a)return i(t)}const{operation:t}=e,a=e.operands.map((e=>n.get(e)));switch(t){case"threshold":{const[t,n,s,r]=a;if(t.min>=n.max)return e.operands[2];if(t.max<n.min)return e.operands[3];if(s.max===s.min&&r.max===r.min&&s.min===r.min&&isFinite(s.min))return i(s.max);break}case"min":{const t=e.operands.filter(((e,t)=>{const n=a[t];return a.every(((e,t)=>n.min<=e.max))}));if(t.length<a.length)return function(...e){return{operation:"min",operands:c(e)}}(...t);break}case"max":{const t=e.operands.filter(((e,t)=>{const n=a[t];return a.every((e=>n.max>=e.min))}));if(t.length<a.length)return function(...e){return{operation:"max",operands:c(e)}}(...t);break}}return e}),(e=>e))}function C(e){const t={};return e.forEach((e=>{Object.entries(e).forEach((([e,n])=>{t[e]?(t[e].min+=n.min,t[e].max+=n.max):t[e]=Object.assign({},n)}))})),t}function P(e){const t={};return e.length&&(Object.keys(e[0].values).filter((t=>e.every((e=>e.values[t])))).forEach((n=>t[n]={min:e[0].values[n],max:e[0].values[n]})),e.forEach((({values:e})=>{for(const[n,a]of Object.entries(e))t[n]?(t[n].max<a&&(t[n].max=a),t[n].min>a&&(t[n].min=a)):t[n]={min:0,max:a}}))),t}function I(e,t){const n=new Map;return d(e,(e=>{}),(e=>{var a;const{operation:s}=e,r=e.operands.map((e=>n.get(e)));let i;switch(s){case"read":if("dyn"!==e.path[0])throw new Error(`Found non-dyn path ${e.path} while computing range`);i=null!=(a=t[e.path[1]])?a:{min:0,max:0};break;case"const":i=K([e.value]);break;case"add":case"min":case"max":i={min:g[s](r.map((e=>e.min))),max:g[s](r.map((e=>e.max)))};break;case"res":i={min:g[s]([r[0].max]),max:g[s]([r[0].min])};break;case"mul":i=r.reduce(((e,t)=>K([e.min*t.min,e.min*t.max,e.max*t.min,e.max*t.max])));break;case"threshold":i=r[0].min>=r[1].max?r[2]:r[0].max<r[1].min?r[3]:K([],[r[2],r[3]]);break;case"sum_frac":{const[e,t]=r,n={min:e.min+t.min,max:e.max+t.max};i=n.min<=0&&n.max>=0?e.min<=0&&e.max>=0?{min:NaN,max:NaN}:{min:-1/0,max:1/0}:K([e.min/n.min,e.min/n.max,e.max/n.min,e.max/n.max]);break}default:o(s)}n.set(e,i)})),n}function K(e,t=[]){const n=Math.max(...e,...t.map((e=>e.max)));return{min:Math.min(...e,...t.map((e=>e.min))),max:n}}function U(e,n){return{base:e.base,values:t(E,(t=>{const a=n[t];switch(a.kind){case"id":return e.values[t].filter((e=>a.ids.has(e.id)));case"exclude":return e.values[t].filter((e=>!a.sets.has(e.set)));case"required":return e.values[t].filter((e=>a.sets.has(e.set)))}}))}}function W(e){return E.reduce(((t,n)=>t*e.values[n].length),1)}function z(e){return new Set(null!=e&&e.includes(2)?e.includes(4)?[0,1]:[0,1,4,5]:null!=e&&e.includes(4)?[0,1,2,3]:[0,1,2,3,4,5])}function*G(e,n){const s=[...new Set(n)],o=z(e.rainbow);let i=[];function l(e,t){if(!r(t+1,4).some((t=>5!==e[t])))return(e=[...e])[t]=5,e.reduce(((e,t)=>6*e+t),0)}!function e(t,n,a){if(5!==t.length){for(const s of n)e([...t,s],n,a.filter((e=>e!==s)));e([...t,t.length],new Set([...n,t.length]),[...a,t.length])}else o.has(a.length)&&i.push(t)}([0],new Set([0]),[0]);for(let e=4;e>=0;e--){const t=new Map;for(const n of i){var c;const a=l(n,e);void 0!==a&&t.set(a,(null!=(c=t.get(a))?c:new Set(n.slice(0,e)).size+1)-1)}for(const[n,a]of t.entries())if(0===a){const t=[...i.find((t=>l(t,e)===n))];t[e]=5,i=i.filter((t=>l(t,e)!==n)),i.push(t)}}const u={kind:"exclude",sets:new Set},d=t(E,(e=>u)),h=Object.assign({},a(e,(e=>0)),t(s,(e=>0))),p=a(e,z);function*f(e){const t=new Set;let n=[],a=[];for(const t of e)n.push([]),5===t?a.push(n.length-1):n[t].push(n.length-1);n=n.filter((e=>e.length)).sort(((e,t)=>t.length-e.length));let o=a.length;function*i(e){const t=a.length-e,n=[],o=[],l=[];let c=0;for(const e of s){const a=p[e],s=h[e];a&&(r(1,t).every((e=>!a.has(s+e)))?l.push(e):a.has(s)?r(0,t).some((e=>!a.has(s+e)))&&n.push(e):(c+=[...a].find((e=>e>s))-s,o.push(e)))}if(!(c>t))if(e!==a.length)if(c!==t){for(const t of[...n,...o])h[t]++,d[E[a[e]]]={kind:"required",sets:new Set([t])},yield*i(e+1),h[t]--;d[E[a[e]]]={kind:"exclude",sets:new Set([...o,...l,...n])},yield*i(e+1)}else for(const t of o)h[t]++,d[E[a[e]]]={kind:"required",sets:new Set([t])},yield*i(e+1),h[t]--;else yield Object.assign({},d)}yield*function*e(a){if(a===n.length)return yield*i(0);for(const i of s){if(t.has(i))continue;const s=n[a].length,c=p[i];let u=0;var l;if(c&&!c.has(s))if(u=(null!=(l=r(s+1,5).find((e=>c.has(e))))?l:6)-s,u>o)continue;t.add(i),h[i]=n[a].length,n[a].forEach((e=>d[E[e]]={kind:"required",sets:new Set([i])})),o-=u,yield*e(a+1),o+=u,h[i]=0,t.delete(i)}}(0)}for(const e of i)yield*f(e)}class L{constructor({arts:e,optTarget:t,constraints:n,topN:a},s){this.min=void 0,this.nodes=void 0,this.arts=void 0,this.topN=void 0,this.filters=[],this.interim=void 0,this.firstUncalculated=0,this.callback=void 0,this.arts=e,this.min=[-1/0,...n.map((e=>e.min))],this.nodes=[t,...n.map((e=>e.value))],this.callback=s,this.topN=a,_(this.nodes,e)}addFilter(e){const t=U(this.arts,e),n=W(t);n&&this.filters.push({nodes:this.nodes,arts:t,maxConts:[],approxs:[],age:0,count:n})}setThreshold(e){e>this.min[0]&&(this.min[0]=e,this.firstUncalculated=0,this.filters.forEach((e=>delete e.calculated)))}*split(e,t){for(this.addFilter(e);this.filters.length;){const e=this.getApproxFilter(),{arts:n,count:s}=e;if(s<=t){if(!s)continue;this.firstUncalculated<this.filters.length&&this.calculateFilter(this.firstUncalculated++),this.reportInterim(!1),yield a(n.values,(e=>({kind:"id",ids:new Set(e.map((e=>e.id)))})))}else this.splitOldFilter(e)}this.reportInterim(!0)}reportInterim(e=!1){this.interim&&(this.interim.skipped>1e6||!0===e)&&(this.callback(this.interim),this.interim=void 0)}splitOldFilter({nodes:e,arts:t,approxs:n,age:s}){const r=a(t.values,(e=>{var t,a;const s=e.map((e=>({art:e,cont:n[0].conts[e.id]}))).sort((({cont:e},{cont:t})=>t-e)),r=null!=(t=null==(a=s[s.length-1])?void 0:a.cont)?t:0;let o=s.reduce(((e,{cont:t})=>e+t),-r*s.length)/3;const i=Math.max(1,s.findIndex((({cont:e})=>(o-=e-r)<=0))),l=s.splice(i).map((({art:e})=>e)),c=s.map((({art:e})=>e));return{high:{arts:c,maxConts:n.map((e=>q(c,e)))},low:{arts:l,maxConts:n.map((e=>q(l,e)))}}})),o=Object.keys(r),{filters:i}=this,l={},c={};!function u(d){if(!o.length){const r=n.map(((e,t)=>a(c,(e=>e[t])))),o={base:t.base,values:Object.assign({},l)};return void i.push({nodes:e,arts:o,maxConts:r,approxs:n,age:s+1,count:d})}const h=o.pop(),{high:p,low:f}=r[h];f.arts.length&&(l[h]=f.arts,c[h]=f.maxConts,u(d*f.arts.length)),p.arts.length&&(l[h]=p.arts,c[h]=p.maxConts,u(d*p.arts.length)),o.push(h)}(1)}getApproxFilter(){return this.calculateFilter(this.filters.length-1),this.firstUncalculated>this.filters.length&&(this.firstUncalculated=this.filters.length),this.filters.pop()}calculateFilter(e){let{nodes:t,arts:s,maxConts:r,approxs:o,age:i,count:l,calculated:c}=this.filters[e];if(c)return;(i<3||i%5==2)&&(({nodes:t,arts:s}=A(t,this.min,s,this.topN,{},{pruneNodeRange:!0})),Object.values(s.values).every((e=>e.length))&&(o=function(e,t){return _(e,t).map((e=>({base:H(t.base,e,e.$c),conts:n(Object.values(t.values).flat(),(t=>[t.id,H(t.values,e,0)]))})))}(t,s),r=o.map((e=>a(s.values,(t=>q(t,e)))))));const u=r.map(((e,t)=>Object.values(e).reduce(((e,t)=>e+t),o[t].base-this.min[t]))),d=a(s.values,((e,t)=>{const n=u.map(((e,n)=>r[n][t]-e));return e.filter((({id:e})=>o.every((({conts:t},a)=>t[e]>=n[a]))))}));s={base:s.base,values:d};const h=W(s);h!==l&&(this.interim?this.interim.skipped+=l-h:this.interim={resultType:"interim",buildValues:void 0,tested:0,failed:0,skipped:l-h}),this.filters[e]={nodes:t,arts:s,maxConts:r,approxs:o,age:i,count:h,calculated:!0}}}function q(e,t){return Math.max(...e.map((({id:e})=>t.conts[e])))}function H(e,t,n){return Object.entries(e).reduce(((e,[n,a])=>{var s;return e+(null!=(s=t[n])?s:0)*a}),n)}function V(...e){const t={};for(const[a,s]of e)for(const[e,r]of Object.entries(s)){var n;t[e]=(null!=(n=t[e])?n:0)+a*r}return t}function _(e,t){const n=V([1,t.base],...Object.values(t.values).map((e=>[1/e.length,V(...e.map((e=>[1,e.values])))]))),a=e=>H(n,e,e.$c),s=new Map;d(e,(e=>{const{operation:t}=e;switch("mul"===t&&s.set(e,{min:NaN,max:NaN}),t){case"mul":case"min":case"max":case"threshold":case"res":case"sum_frac":e.operands.forEach((e=>s.set(e,{min:NaN,max:NaN})))}}),(e=>e));const r=I([...s.keys()],function(e){return C([Object.fromEntries(Object.entries(e.base).map((([e,t])=>[e,{min:t,max:t}]))),...Object.values(e.values).map((e=>P(e)))])}(t));for(const[e,t]of r.entries())s.set(e,t);function i(e,t,n,a){return V([1,{$c:n-e*t}],[e,a])}function l(e,t,n,a,s,r){return Math.abs(e-n)<1e-10?{$c:r?Math.max(t,a):Math.min(t,a)}:i((a-t)/(n-e),e,t,s)}const h="u",f="l";return p(e,h,((e,t,n)=>{const{operation:r}=e,d=(e,a=t)=>n(e,a),p=t===h?f:h;if("o"===t){const{min:t,max:n}=s.get(e);if(t<0&&n>0)throw new X("Zero-crossing",r);return d(e,n<=0?f:h)}switch(r){case"const":return{$c:e.value};case"read":return{$c:0,[e.path[1]]:1};case"add":return V(...e.operands.map((e=>[1,d(e)])));case"min":case"max":{const n=g[r],a=e.operands.filter((e=>"const"!==e.operation)),[o]=a;if(1!==a.length)throw new X("Multivariate",r);const i=d(o),c=n(e.operands.filter((e=>"const"===e.operation)).map((e=>e.value)));if("max"===r&&t===f||"min"===r&&t===h)return i;const{min:u,max:p}=s.get(o);return l(u,n([u,c]),p,n([p,c]),i,t===h)}case"res":{if(t!==h)throw new X("Unsupported direction",r);const n=g[r],[a]=e.operands,{min:o,max:i}=s.get(a),c=d(a,p);return o<0&&i<1.75?V([1,{$c:1}],[-.5,c]):l(o,n([o]),i,n([i]),c,t===h)}case"sum_frac":{if(t!==h)throw new X("Unsupported direction",r);const[n,a]=e.operands;if("const"!==a.operation)throw new X("Non-constant node",r);const o=d(n),l=a.value,{min:c,max:u}=s.get(n),p=Math.sqrt((c+l)*(u+l));if(c<=-l)throw new X("Unsupported pattern",r);return i(l/(l+p)/(l+p),p,p/(p+l),o)}case"threshold":{const[n,a,o,l]=e.operands;if("const"!==l.operation||"const"!==a.operation)throw new X("Non-constant node",r);if("const"!==o.operation){if(0!==l.value)throw new X("Unsupported pattern",r);const e=(m=a,v=1,b=l,{operation:"threshold",operands:[u(n),u(m),u(v),u(b)],info:w}),t=function(...e){return{operation:"mul",operands:c(e)}}(e,o),{min:i,max:h}=s.get(o);return s.set(e,{min:0,max:1}),s.set(t,{min:Math.min(i,0),max:Math.max(h,0)}),d(t)}const{min:f,max:g}=s.get(n),y=a.value,k=o.value,S=l.value,x=k>S==(t===h);return i((k-S)/(x?y-f:g-y),y,x?k:S,d(n,k>S?t:p))}case"mul":{const{min:n,max:o}=s.get(e);if(n<0&&o>0)throw new X("Zero-crossing",r);if(n<0&&t!==f||o>0&&t!==h)throw new X("Unsupported direction",r);const i=[...e.operands],l=[];let c=1;for(;i.length;){const e=i.pop();"mul"===e.operation?i.push(...e.operands):"const"===e.operation?c*=e.value:l.push(e)}const u=l.map((e=>d(e,"o"))),p=l.map((e=>s.get(e))),m=u.map(a),g=m.reduce(((e,t,n)=>e+(t>=0?p[n].max:p[n].min)/t),0),v=m.reduce(((e,t)=>e*g*t/u.length),c/g);return V(...u.map(((e,t)=>[v/m[t],e])))}default:o(r)}var m,v,b,w}))}class X extends Error{constructor(e,t){super(`Found ${e} in ${t} node when generating polynomial upper bound`)}}class Y{constructor({arts:e,optTarget:t,constraints:n,plotBase:a,topN:s},r){this.builds=[],this.buildValues=void 0,this.plotData=void 0,this.threshold=-1/0,this.topN=void 0,this.min=void 0,this.arts=void 0,this.nodes=void 0,this.callback=void 0,this.arts=e,this.min=n.map((e=>e.min)),this.topN=s,this.callback=r,this.nodes=n.map((e=>e.value)),this.nodes.push(t),a&&(this.plotData={},this.nodes.push(a)),this.nodes=function(e,t,n=(e=>!1)){let a=y(e,t,n);return a=b(a),w(a)}(this.nodes,{},(e=>!1))}setThreshold(e){this.threshold>e&&(this.threshold=e)}compute(e){const{min:t}=this,n=this;let a=U(this.arts,e);const s=W(a),r=this.builds.length;let i=this.nodes;({nodes:i,arts:a}=A(i,t,a,this.topN,{},{pruneArtRange:!0,pruneNodeRange:!0}));const l=Object.values(a.values).sort(((e,t)=>e.length-t.length)),c=function(e,t,n,a){let s='\n"use strict";\n// copied from the code above\nfunction res(res) {\n  if (res < 0) return 1 - res / 2\n  else if (res >= 0.75) return 1 / (res * 4 + 1)\n  return 1 - res\n}\nconst x0=0',r=1;const i=new Map;return d(e,(e=>{}),(e=>{const{operation:l,operands:c}=e,u="x"+r++,d=c.map((e=>i.get(e)));switch(i.set(e,u),l){case"read":{const r=n(e);let o=new Array(a).fill(null).map(((e,t)=>`(b[${t}].values["${r}"] ?? 0)`));t[r]&&0!==t[r]&&(o=[t[r].toString(),...o]),s+=`,${u}=${o.join("+")}`;break}case"const":i.set(e,`(${e.value})`);break;case"add":case"mul":s+=`,${u}=${d.join("add"===l?"+":"*")}`;break;case"min":case"max":s+=`,${u}=Math.${l}(${d})`;break;case"threshold":{const[e,t,n,a]=d;s+=`,${u}=(${e}>=${t})?${n}:${a}`;break}case"res":s+=`,${u}=res(${d[0]})`;break;case"sum_frac":s+=`,${u}=${d[0]}/(${d[0]}+${d[1]})`;break;default:o(l)}})),s+=`;\nreturn [${e.map((e=>i.get(e)))}]`,new Function("b",s)}(i,a.base,(e=>e.path[1]),l.length),u=Array(l.length),h={tested:0,failed:0,skipped:s-W(a)};!function e(a){if(a<0){const e=c(u);if(t.every(((t,n)=>t<=e[n]))){const a=e[t.length],{builds:s,plotData:r}=n;let o;if(a>=n.threshold&&(o={value:a,artifactIds:u.map((e=>e.id)).filter((e=>e))},s.push(o)),r){const n=e[t.length+1];(!r[n]||r[n].value<a)&&(o||(o={value:a,artifactIds:u.map((e=>e.id)).filter((e=>e))}),o.plot=n,r[n]=o)}}else h.failed+=1}else l[a].forEach((t=>{u[a]=t,e(a-1)})),0===a&&(h.tested+=l[0].length,h.tested>65536&&n.interimReport(h))}(l.length-1),this.interimReport(h,this.builds.length>r)}refresh(e){var t;const{topN:n}=this;var a;(Object.keys(null!=(t=this.plotData)?t:{}).length>=1e5&&(this.plotData=function(e){let t=.01,n=new Set(e.flatMap((e=>Object.values(e).map((e=>Math.round(e.plot/t))))));for(;n.size>1500;)t*=2,n=new Set([...n].map((e=>Math.round(e/2))));const a={};for(const n of e)for(const e of Object.values(n)){const n=Math.round(e.plot/t)*t;(!a[n]||a[n].value<e.value)&&(a[n]=e)}return a}([this.plotData])),this.builds.length>=1e3||e)&&(this.builds=this.builds.sort(((e,t)=>t.value-e.value)).slice(0,n),this.buildValues=this.builds.map((e=>e.value)),this.threshold=Math.max(this.threshold,null!=(a=this.buildValues[n-1])?a:-1/0))}interimReport(e,t=!1){this.refresh(t),this.callback(Object.assign({resultType:"interim",buildValues:this.buildValues},e)),this.buildValues=void 0,e.tested=0,e.failed=0,e.skipped=0}}class J{constructor({arts:e},t){this.arts=void 0,this.stack=[],this.arts=e}setThreshold(e){}add(e,t){this.stack.push({filter:e,count:W(U(this.arts,e)),splittedBy:t})}*split(e,t){this.add(e,"set");for(let e=this.stack.pop();e;e=this.stack.pop()){const{filter:n,count:a,splittedBy:s}=e;if(a<=t)yield n;else switch(s){case"set":this.splitBySet(n);break;case"id":this.splitByID(n,a,t);break;default:o(s)}}}splitBySet(e){const t=U(this.arts,e),n=x.map((e=>({slot:e,sets:new Set(t.values[e].map((e=>e.set)))}))).filter((({sets:e})=>e.size>1));if(!n.length)return this.add(e,"id");const{sets:a,slot:s}=n.reduce(((e,t)=>e.sets.size<t.sets.size?e:t));a.forEach((t=>this.add(Object.assign({},e,{[s]:{kind:"required",sets:new Set([t])}}),"set")))}splitByID(e,t,n){const a=U(this.arts,e),{slot:s,length:r}=x.map((e=>({slot:e,length:a.values[e].length}))).filter((e=>e.length>1)).reduce(((e,t)=>e.length<t.length?e:t)),o=Math.ceil(t/n),i=Math.min(o,r),l=Array(i).fill(0).map((e=>new Set));a.values[s].forEach((({id:e},t)=>l[t%i].add(e))),l.forEach((t=>this.add(Object.assign({},e,{[s]:{kind:"id",ids:t}}),"id")))}}let Z,Q;onmessage=async e=>{const{data:t}=e,{command:n}=t;switch(n){case"split":for(const e of Z.split(t.filter,t.maxIterateSize))postMessage({command:"iterate",filter:e}),await Promise.resolve();break;case"iterate":Q.compute(t.filter);break;case"threshold":return Z.setThreshold(t.threshold),void Q.setThreshold(t.threshold);case"finalize":{Q.refresh(!0);const{builds:e,plotData:t}=Q;postMessage({resultType:"finalize",builds:e,plotData:t});break}case"count":{const{exclusion:e,maxIterateSize:n}=t,s=Q.arts,r=function*(e,t){const n=a(t.values,(e=>new Set(e.map((e=>e.set)))));e:for(const t of e){for(const[e,a]of Object.entries(t)){const t=n[e];switch(a.kind){case"required":if([...a.sets].every((e=>!t.has(e))))continue e;break;case"exclude":if([...t].every((e=>a.sets.has(e))))continue e}}yield t}}(G(e,[...new Set(Object.values(s.values).flatMap((e=>e.map((e=>e.set)))))]),s);let o=0;for(const e of r)postMessage({command:"split",filter:e,maxIterateSize:n}),o+=W(U(s,e));postMessage({resultType:"count",count:o});break}case"setup":try{Z=new L(t,(e=>postMessage(e)))}catch(e){Z=new J(t,(e=>postMessage(e)))}Q=new Y(t,(e=>postMessage(e)));break;default:o(n)}postMessage({resultType:"done"})}})();