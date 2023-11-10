"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:2},o="Features",l={unversionedId:"features",id:"features",title:"Features",description:"Intro",source:"@site/docs/features.md",sourceDirName:".",slug:"/features",permalink:"/Leaderboard/docs/features",draft:!1,editUrl:"https://github.com/arxkdev/Leaderboard/edit/main/docs/features.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"About",permalink:"/Leaderboard/docs/intro"},next:{title:"Examples",permalink:"/Leaderboard/docs/examples"}},s={},p=[{value:"Intro",id:"intro",level:3},{value:"Sharding",id:"sharding",level:3},{value:"Exponential Backoff",id:"exponential-backoff",level:3},{value:"Other",id:"other",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"features"},"Features"),(0,a.kt)("h3",{id:"intro"},"Intro"),(0,a.kt)("p",null,"The foundation of this library is built upon the best practices recommended by Roblox, as listed here:"),(0,a.kt)("h3",{id:"sharding"},"Sharding"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Shard_(database_architecture)"},"https://en.wikipedia.org/wiki/Shard_(database_architecture)")),(0,a.kt)("p",null,"Leaderboard uses a custom sharding solution for MemoryStoreService to reduce the risk of hitting the size limits for a single Memory Map. This is done by splitting the data into multiple Memory Maps, and then using a custom hashing algorithm to determine which Memory Map to use for a given key."),(0,a.kt)("h3",{id:"exponential-backoff"},"Exponential Backoff"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Exponential_backoff"},"https://en.wikipedia.org/wiki/Exponential_backoff")),(0,a.kt)("p",null,"Leaderboard uses an exponential backoff algorithm to reduce the risk of hitting rate limits. This is done by waiting a certain amount of time before retrying a request, and then increasing the wait time exponentially for each retry."),(0,a.kt)("h3",{id:"other"},"Other"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Abstract API for easy integration into your existing codebase"),(0,a.kt)("li",{parentName:"ul"},"Customizable leaderboard settings"),(0,a.kt)("li",{parentName:"ul"},"Leaderboard types: Hourly, Daily, Weekly, Monthly, All-Time and Yearly"),(0,a.kt)("li",{parentName:"ul"},"A special Leaderboard type for Rolling Leaderboards which automatically reset at a given interval"),(0,a.kt)("li",{parentName:"ul"},"Full type support")))}d.isMDXComponent=!0}}]);