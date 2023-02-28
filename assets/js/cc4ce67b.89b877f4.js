"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:1},a="Introduction",c={unversionedId:"client/dev/intro",id:"client/dev/intro",title:"Introduction",description:"The Learn Client is the primary user interface for",source:"@site/docs/client/dev/intro.md",sourceDirName:"client/dev",slug:"/client/dev/intro",permalink:"/Learn/docs/client/dev/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started with Learn Client",permalink:"/Learn/docs/client/intro"},next:{title:"Learn Client",permalink:"/Learn/docs/client"}},l={},s=[{value:"Monorepo",id:"monorepo",level:2},{value:"Commands",id:"commands",level:2}],p={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The Learn Client is the primary user interface for\nthe application and is created using React Native,\nwhich allows for cross-platform compilation to native\ncode using a single codebase."),(0,o.kt)("h2",{id:"monorepo"},"Monorepo"),(0,o.kt)("p",null,"The application uses a monorepo structure provided\nby Yarn Workspaces to share a single codebase, with\neach platform having its own version of React and\nReact Native."),(0,o.kt)("p",null,"This is necessary because some libraries are not\ncompatible with both Windows and macOS versions.\nHowever, note that a Mac is required to compile\nthe iOS and macOS versions."),(0,o.kt)("h1",{id:"directory-structure"},"Directory Structure"),(0,o.kt)("p",null,"The directory structure follows a monorepo approach,\nwith the shared directory named workit. Each platform\nlinks its entry point to the App.tsx file located\nwithin the workit directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"client\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 packages\n\u2502\xa0\xa0 \u251c\u2500\u2500 mobile\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 android\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 app.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 babel.config.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 ios\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 metro.config.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tsconfig.json\n\u2502\xa0\xa0 \u2514\u2500\u2500 workit\n\u2502\xa0\xa0     \u251c\u2500\u2500 App.tsx\n\u2502\xa0\xa0     \u251c\u2500\u2500 components\n\u2502\xa0\xa0     \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 services\n\u2502\xa0\xa0     \u251c\u2500\u2500 tsconfig.json\n\u2502\xa0\xa0     \u251c\u2500\u2500 @types\n\u2502\xa0\xa0     \u2514\u2500\u2500 views\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 yarn.lock\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"packages/"),": Contains the architectures and shared directory."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"packages/mobile/"),": Contains native code to IOS and Android."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"packages/workit"),": Contains the codebase for all platforms.")),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"The packages.json file at the top level contains commands\nto execute Learn in each platform."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mobile"),": Execute Metro Bundler for both IOS and Android."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"android"),": Compiles the Learn Client for Android devices.")))}u.isMDXComponent=!0}}]);