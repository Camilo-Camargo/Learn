"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4610:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},l="Get Started with Learn Server",i={unversionedId:"server/intro",id:"server/intro",title:"Get Started with Learn Server",description:"This tutorial will help you:",source:"@site/docs/server/intro.md",sourceDirName:"server",slug:"/server/intro",permalink:"/Learn/docs/server/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/Learn/docs/intro"},next:{title:"Introduction",permalink:"/Learn/docs/server/dev/intro"}},s={},p=[{value:"Step 1: Clone repository",id:"step-1-clone-repository",level:2},{value:"Step 2: Install dependencies",id:"step-2-install-dependencies",level:2},{value:"Step 3: Start the Server",id:"step-3-start-the-server",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-started-with-learn-server"},"Get Started with Learn Server"),(0,a.kt)("p",null,"This tutorial will help you:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Start the Learn Server"),(0,a.kt)("li",{parentName:"ul"},"Understand Learn Server structure")),(0,a.kt)("h2",{id:"step-1-clone-repository"},"Step 1: Clone repository"),(0,a.kt)("p",null,"To get started with Learn Server, you must first clone the Learn repository\nand navigate to the server directory. Open your terminal and enter the\nfollowing commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Camilo-Camargo/Learn\ncd Learn/server/\n")),(0,a.kt)("h2",{id:"step-2-install-dependencies"},"Step 2: Install dependencies"),(0,a.kt)("p",null,"After cloning the repository, you must install the necessary third-party libraries.\nRun the following command in the terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,a.kt)("p",null,"You also need to install the developer dependencies. Learn Server uses TypeScript\nas the main language for the backend. To install TypeScript, run the following\ncommand:"),(0,a.kt)("h2",{id:"step-3-start-the-server"},"Step 3: Start the Server"),(0,a.kt)("p",null,"The server is based on Express and is provided by Apollo Server.\nTo start the server, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,a.kt)("p",null,"You should see the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Learn Server ready at: http://localhost:4000\n")),(0,a.kt)("p",null,"With the server up and running, you can now start developing your Learn application."))}d.isMDXComponent=!0}}]);