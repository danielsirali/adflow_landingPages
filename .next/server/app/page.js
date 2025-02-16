(()=>{var e={};e.id=974,e.ids=[974],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},2544:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>x,pages:()=>o,routeModule:()=>m,tree:()=>c});var a=t(260),r=t(8203),l=t(5155),i=t.n(l),n=t(7292),d={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);t.d(s,d);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,1377)),"/Users/la/adflow_landing_page/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1354)),"/Users/la/adflow_landing_page/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["/Users/la/adflow_landing_page/src/app/page.tsx"],x={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:r.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4210:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},4122:(e,s,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,7174,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},7366:()=>{},5665:()=>{},7659:(e,s,t)=>{Promise.resolve().then(t.bind(t,1377))},803:(e,s,t)=>{Promise.resolve().then(t.bind(t,818))},9334:(e,s,t)=>{"use strict";var a=t(8686);t.o(a,"usePathname")&&t.d(s,{usePathname:function(){return a.usePathname}}),t.o(a,"useRouter")&&t.d(s,{useRouter:function(){return a.useRouter}})},818:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var a=t(5512),r=t(8531),l=t.n(r),i=t(8009),n=t(9334);function d(){let[e,s]=(0,i.useState)(!1),t=(0,i.useRef)(null),[r,d]=(0,i.useState)(!1),c=(0,n.usePathname)(),o=()=>{d(!r)},x=e=>c===e||c.startsWith(e);return e?(0,a.jsx)("div",{children:"Loading"}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("nav",{className:"flex justify-between items-center px-10 relative z-10",children:[(0,a.jsx)("div",{className:"text-2xl font-bold lg:ml-24",children:(0,a.jsx)("div",{className:"w-full py-4",children:(0,a.jsx)("img",{src:"/images/adflow_logo.png",alt:"Adflow Logo",className:"w-28 py-4 object-cover"})})}),(0,a.jsxs)("div",{className:"flex justify-between items-center text-bold space-x-10 text-white text-sm hidden md:flex",children:[(0,a.jsxs)("div",{className:"flex space-x-16 mr-20 font-bold text-sm",children:[(0,a.jsx)(l(),{href:"/",className:`relative px-4 flex flex-row items-center focus:outline-none ${x("/")?"text-red-500 underline underline-offset-8":"text-black hover:text-red-500"}  pr-6`,style:x("/")?{color:"#F20519"}:{},children:"Home"}),(0,a.jsx)(l(),{href:"about-us",className:"hover:text-black text-white",children:"About Us"}),(0,a.jsx)(l(),{href:"/how-it-works",className:"hover:text-black text-white",children:"How it Works"}),(0,a.jsx)(l(),{href:"/contact-us",className:"hover:text-black text-white",children:"Contact Us"})]}),(0,a.jsx)(l(),{href:"/auth/register",children:(0,a.jsx)("div",{className:"bg-white text-red-600 px-4 py-2 mr-8 text-sm font-bold border-none rounded-md hover:text-white hover:bg-red-600",children:"Sign up"})}),(0,a.jsx)("span",{className:"text-white font-bold text-sm",children:"EN ▾"})]}),(0,a.jsx)("div",{className:"md:hidden absolute right-0 flex p-2",children:(0,a.jsx)("button",{onClick:o,className:"focus:outline-none border border-red-400 rounded-lg",children:(0,a.jsx)("i",{className:"bx bx-menu text-xl text-red-400"})})}),r&&(0,a.jsxs)("div",{ref:t,className:"absolute top-0 left-0 w-full h-screen rounded-lg bg-red-50 bg-opacity-90 flex flex-col items-center justify-center space-y-6 md:hidden",children:[(0,a.jsx)(l(),{href:"/",className:"text-red-500 cursor-pointer text-xl hover:text-black",onClick:o,children:"Home"}),(0,a.jsx)(l(),{href:"/about-us",className:"text-red-500 cursor-pointer text-xl hover:text-black",onClick:o,children:"About Us"}),(0,a.jsx)(l(),{href:"/how-it-works",className:"text-red-500 cursor-pointer text-xl hover:text-black",onClick:o,children:"How it Works"}),(0,a.jsx)(l(),{href:"/contact-us",className:"text-red-500 cursor-pointer text-xl hover:text-black",onClick:o,children:"Contact Us"}),(0,a.jsx)("button",{className:"bg-white text-red-600 px-4 py-2 border border-red-600 rounded-md hover:bg-red-600",onClick:o,children:"Sign up"}),(0,a.jsx)("span",{className:"text-red-500 cursor-pointer text-xl",children:"EN ▾"})]})]})})}var c=t(8784);function o(){return(0,a.jsx)("section",{className:"max-w-6xl mx-auto my-10 p-10 bg-red-100 rounded-lg",children:(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-10",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("h2",{className:"text-3xl font-bold text-gray-900",children:["Ready to elevate your media ",(0,a.jsx)("br",{})," buying experience?"]}),(0,a.jsx)("p",{className:"text-gray-700 text-sm mt-2",children:"Kindly fill this form with your details about your inquiries and we will respond your inquiry shortly."}),(0,a.jsx)("div",{className:"border border-gray-400 p-6 rounded-lg mt-5",children:(0,a.jsxs)("form",{action:"#",method:"POST",children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsxs)("label",{className:"block text-gray-700 font-medium",children:["Full name ",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsx)("input",{type:"text",placeholder:"Name",className:"w-full border border-gray-300 rounded-lg px-4 bg-red-100  py-2 mt-1 focus:ring-red-500"})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsxs)("label",{className:"block text-gray-700 font-medium",children:["Email ",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsx)("input",{type:"email",placeholder:"Email",className:"w-full border border-gray-300 rounded-lg px-4 bg-red-100 py-2 mt-1 focus:ring-red-500"})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsxs)("label",{className:"block text-gray-700 font-medium",children:["User type ",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsxs)("select",{className:"w-full border border-gray-300 rounded-lg px-4 bg-red-100 py-2 mt-1 focus:ring-red-500",children:[(0,a.jsx)("option",{children:"Advertiser"}),(0,a.jsx)("option",{children:"Media House"}),(0,a.jsx)("option",{children:"Media Agency"})]})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsxs)("label",{className:"block text-gray-700 font-medium",children:["Additional information ",(0,a.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,a.jsx)("textarea",{rows:4,placeholder:"Message",className:"w-full border border-gray-300 rounded-lg px-4 bg-red-100 py-2 mt-1 focus:ring-red-500"})]}),(0,a.jsx)("button",{type:"submit",className:"w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-black",children:"Send message"})]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-3xl font-bold text-gray-900",children:"Or call our offices"}),(0,a.jsxs)("ul",{className:"mt-6 space-y-10",children:[(0,a.jsxs)("li",{className:"flex items-center space-x-4",children:[(0,a.jsx)("i",{className:"bx bx-envelope text-2xl text-red-600"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-gray-700 text-sm",children:"Send an email"}),(0,a.jsx)("p",{className:"text-gray-900 text-sm font-semibold",children:"adflow@gmail.com"})]})]}),(0,a.jsxs)("li",{className:"flex items-center space-x-4",children:[(0,a.jsx)("i",{className:"bx bx-phone text-2xl text-red-600"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-gray-700 text-sm",children:"Give us a call"}),(0,a.jsx)("p",{className:"text-gray-900 text-sm font-semibold",children:"0700000000"})]})]}),(0,a.jsxs)("li",{className:"flex items-center space-x-4",children:[(0,a.jsx)("i",{className:"bx bx-map text-2xl text-red-600"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-gray-700 text-sm",children:"Office address"}),(0,a.jsx)("p",{className:"text-gray-900 text-sm font-semibold",children:"View park towers, Nairobi"})]})]}),(0,a.jsxs)("li",{className:"flex items-center space-x-4",children:[(0,a.jsx)("i",{className:"bx bx-time text-2xl text-red-600"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"text-gray-700 text-sm",children:"Working hours"}),(0,a.jsx)("p",{className:"text-gray-900 text-sm font-semibold",children:"Mon-Sat: 10am - 5pm"})]})]})]})]})]})})}let x=()=>{let[e,s]=(0,i.useState)(!1),t=(0,i.useRef)(null),[r,l]=(0,i.useState)(!1),n=e=>{t.current&&!t.current.contains(e.target)&&l(!1)};return((0,i.useEffect)(()=>(r?document.addEventListener("mousedown",n):document.removeEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}),[r]),e)?(0,a.jsx)("div",{children:"Loading"}):(0,a.jsxs)("div",{className:"p-8",children:[(0,a.jsx)(d,{}),(0,a.jsx)("img",{src:"/images/decore.png",alt:"Decorative Image",className:"absolute right-0 top-0 z-0 object-cover hidden md:block",style:{width:"800px",height:"800px",marginLeft:"10px",marginTop:"0px"}}),(0,a.jsx)("img",{src:"/images/decore.png",alt:"Decorative Image",className:"absolute right-0 top-0 z-0 object-cover",style:{width:"400px",height:"400px",marginLeft:"0px",marginTop:"0px"}}),(0,a.jsx)("section",{className:"relative",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center px-6",children:[(0,a.jsxs)("div",{className:"md:w-1/2",children:[(0,a.jsxs)("h1",{className:"text-6xl font-bold leading-tight text-black text-center md:text-left",children:["Run ",(0,a.jsx)("span",{className:"text-red-500",children:"ads"})," your ",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"text-red-500",children:"audience"})," cares about"]}),(0,a.jsx)("p",{className:"mt-4 text-gray-600 text-sm",children:"Adflow is your all-in-one marketplace for buying and selling airtime on radio and television. Whether you're an advertiser eager to connect with your ideal audience or a media house looking to optimize your inventory, Adflow simplifies the process—helping you focus on what truly matters: reaching your target faster and smarter."}),(0,a.jsx)("button",{className:"mt-6 h-10 bg-red-500 text-sm text-white flex items-center justify-center border border-red-600 px-6 py-3 rounded-md font-bold hover:bg-red-600 mx-auto lg:mx-0",children:"Get Started"})]}),(0,a.jsxs)("div",{className:"md:w-1/2 relative md:mt-0",children:[(0,a.jsx)("div",{className:"right-0 w-full bg-red-500"}),(0,a.jsx)("img",{src:"/images/adflow_pic_5.png",alt:"Woman holding a retro TV",className:"h-98 w-86 sm:24"})]})]})}),(0,a.jsx)("section",{className:"bg-white py-20 mt-20",children:(0,a.jsxs)("div",{className:"max-w-6xl mx-auto text-center",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-gray-900",children:"Your All-In-One Ad Slot Marketplace"}),(0,a.jsxs)("div",{className:"grid md:grid-cols-3 gap-12 mt-12 items-center",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("img",{src:"/images/centralized_platform.png",alt:"Centralized Platform",className:"h-98 w-86"}),(0,a.jsx)("h3",{className:"mt-4 font-semibold text-lg text-black",children:"Centralized Platform"}),(0,a.jsx)("p",{className:"mt-2 text-gray-600 text-sm",children:"No more juggling between multiple contacts—manage all bookings in one place."})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("img",{src:"/images/real_time_updates.png",alt:"Real-Time Updates",className:"h-98 w-86"}),(0,a.jsx)("h3",{className:"mt-4 font-semibold text-lg text-black",children:"Real-Time Updates"}),(0,a.jsx)("p",{className:"mt-2 text-gray-600 text-sm",children:"See slot availability instantly, ensuring timely campaign placements."})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsx)("img",{src:"/images/data_driven_decisions.png",alt:"Data-Driven Decisions",className:"h-98 w-86"}),(0,a.jsx)("h3",{className:"mt-4 font-semibold text-lg text-black",children:"Data-Driven Decisions"}),(0,a.jsx)("p",{className:"mt-2 text-gray-600 text-sm",children:"Access performance analytics to optimize ad spend."})]})]})]})}),(0,a.jsx)("section",{className:"bg-white px-6",children:(0,a.jsxs)("div",{className:"max-w-6xl flex flex-col md:flex-row mx-auto text-center",children:[(0,a.jsxs)("div",{className:"md:w-1/2 text-left",children:[(0,a.jsx)("h3",{className:"text-gray-500 font-semibold text-sm",children:"Testimonials"}),(0,a.jsxs)("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-2",children:["Trusted By Leading ",(0,a.jsx)("br",{})," Advertisers And Media ",(0,a.jsx)("br",{})," Houses"]}),(0,a.jsxs)("div",{className:"mt-6 flex space-x-2",children:[(0,a.jsx)("span",{className:"w-3 h-3 bg-red-500 rounded-full"}),(0,a.jsx)("span",{className:"w-3 h-3 bg-gray-300 rounded-full"}),(0,a.jsx)("span",{className:"w-3 h-3 bg-gray-300 rounded-full"})]})]}),(0,a.jsxs)("div",{className:"mt-8 md:w-1/2 relative",children:[(0,a.jsxs)("div",{className:"bg-white shadow-lg rounded-lg p-6 md:p-8 relative z-10",children:[(0,a.jsx)("div",{className:"flex items-start",children:(0,a.jsx)("img",{src:"/images/person_image.png",alt:"Smiling man profile picture",className:"w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white shadow-lg -mt-8"})}),(0,a.jsx)("p",{className:"text-gray-600 text-sm text-left mt-2",children:"“Adflow transformed how we manage our ad inventory— bookings have doubled, and revenue is up by 30%!”"}),(0,a.jsxs)("div",{className:"mt-4 text-left",children:[(0,a.jsx)("p",{className:"font-semibold text-gray-900",children:"John Doe"}),(0,a.jsx)("p",{className:"text-gray-500 text-sm",children:"Marketing Director at XYZ Media"})]})]}),(0,a.jsxs)("div",{className:"absolute top-20 left-6 md:left-10 w-full md:w-11/12 bg-white shadow-md rounded-lg p-6 opacity-50",children:[(0,a.jsx)("p",{className:"font-semibold text-gray-900",children:"Chris Thomas"}),(0,a.jsx)("p",{className:"text-gray-500 text-sm",children:"CEO of Red Button"})]})]})]})}),(0,a.jsx)("section",{className:"w-full max-w-6xl mx-auto px-6 py-10",children:(0,a.jsxs)("div",{className:"flex justify-center items-center gap-8 md:gap-12 lg:gap-16",children:[(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)("img",{src:"/images/clients/axon_airlines.png",alt:"Axon Airlines Logo",className:"h-22"})}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)("img",{src:"/images/clients/jetstar.png",alt:"Jetstar Logo",className:"h-22"})}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)("img",{src:"/images/clients/expedia.png",alt:"Expedia Logo",className:"h-22"})}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)("img",{src:"/images/clients/qantas.png",alt:"Qantas Logo",className:"h-22"})}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)("img",{src:"/images/clients/italia.png",alt:"Alitalia Logo",className:"h-22"})})]})}),(0,a.jsx)(o,{}),(0,a.jsx)(c.A,{})]})}},8784:(e,s,t)=>{"use strict";t.d(s,{A:()=>i});var a=t(5512),r=t(8531),l=t.n(r);function i(){return(0,a.jsxs)("footer",{className:"relative bg-white py-18 mt-16 px-6 md:px-16 lg:px-32",children:[(0,a.jsxs)("div",{className:"max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-start relative",children:[(0,a.jsxs)("div",{className:"mt-6 md:mt-0",children:[(0,a.jsx)("img",{src:"/images/adflow_logo.png",alt:"Adflow Logo",className:"w-auto h-auto py-4 object-cover"}),(0,a.jsxs)("p",{className:"text-gray-500 mt-2 text-sm",children:["Making your media buying ",(0,a.jsx)("br",{}),"experience simpler."]})]}),(0,a.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-3 gap-10 mt-6 md:mt-0",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold text-black",children:"Company"}),(0,a.jsxs)("ul",{className:"mt-2 space-y-2 text-black text-sm",children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"#",className:"text-black",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"#",className:"text-black",children:"Mobile"})})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold text-black",children:"Contact"}),(0,a.jsxs)("ul",{className:"mt-2 space-y-2 text-gray-500 text-sm",children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"#",className:"text-black",children:"Help"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"#",className:"text-black",children:"Press"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"#",className:"text-black",children:"Affiliates"})})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold text-black",children:"More"}),(0,a.jsxs)("ul",{className:"mt-2 space-y-2 text-gray-500 text-sm",children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"#",className:"text-black",children:"Privacy Policy"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"#",className:"text-black",children:"Terms of Service"})})]})]})]}),(0,a.jsxs)("div",{className:"flex space-x-4 mt-6 md:mt-0",children:[(0,a.jsx)(l(),{href:"#",className:"w-8 h-8 flex items-center justify-center border rounded-full text-gray-600 hover:text-black transition",children:(0,a.jsx)("i",{className:"bx bxl-facebook"})}),(0,a.jsx)(l(),{href:"#",className:"w-8 h-8 flex items-center justify-center border rounded-full text-gray-600 hover:text-black transition",children:(0,a.jsx)("i",{className:"bx bxl-instagram"})}),(0,a.jsx)(l(),{href:"#",className:"w-8 h-8 flex items-center justify-center border rounded-full text-gray-600 hover:text-black transition",children:(0,a.jsx)("i",{className:"bx bxl-twitter"})})]})]}),(0,a.jsx)("div",{className:"text-center mt-8 text-gray-500 text-sm",children:"Copyright \xa9 2025, All rights reserved. Adflow"}),(0,a.jsx)("img",{src:"/images/color_background.png",alt:"Red gradient background",className:"absolute bottom-0 right-0 top-0 w-80 h-96 pointer-events-none z-10 opacity-80"})]})}t(8009)},1354:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>c,metadata:()=>d});var a=t(2740),r=t(2202),l=t.n(r),i=t(4988),n=t.n(i);t(1135),t(7294);let d={title:"AdFlow",description:"Generated by create next app"};function c({children:e}){return(0,a.jsx)("html",{lang:"en",children:(0,a.jsx)("body",{className:`${l().variable} ${n().variable} antialiased`,children:e})})}},1377:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>a});let a=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/la/adflow_landing_page/src/app/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/la/adflow_landing_page/src/app/page.tsx","default")},440:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>r});var a=t(8077);let r=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var s=require("../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),a=s.X(0,[638,180,367],()=>t(2544));module.exports=a})();