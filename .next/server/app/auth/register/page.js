(()=>{var e={};e.id=983,e.ids=[983],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},2612:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d});var r=s(260),a=s(8203),l=s(5155),n=s.n(l),o=s(7292),i={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);s.d(t,i);let d=["",{children:["auth",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,9956)),"/Users/la/adflow_landing_page/src/app/auth/register/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1354)),"/Users/la/adflow_landing_page/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(s.t.bind(s,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(s.t.bind(s,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/la/adflow_landing_page/src/app/auth/register/page.tsx"],m={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/auth/register/page",pathname:"/auth/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},661:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,9607,23)),Promise.resolve().then(s.bind(s,5533))},4581:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,8531,23)),Promise.resolve().then(s.bind(s,1681))},4210:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3219,23)),Promise.resolve().then(s.t.bind(s,4863,23)),Promise.resolve().then(s.t.bind(s,5155,23)),Promise.resolve().then(s.t.bind(s,802,23)),Promise.resolve().then(s.t.bind(s,9350,23)),Promise.resolve().then(s.t.bind(s,8530,23)),Promise.resolve().then(s.t.bind(s,8921,23))},4122:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,6959,23)),Promise.resolve().then(s.t.bind(s,3875,23)),Promise.resolve().then(s.t.bind(s,8903,23)),Promise.resolve().then(s.t.bind(s,7174,23)),Promise.resolve().then(s.t.bind(s,4178,23)),Promise.resolve().then(s.t.bind(s,7190,23)),Promise.resolve().then(s.t.bind(s,1365,23))},7366:()=>{},5665:()=>{},1681:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});var r=s(5512),a=s(8009),l=s(8531),n=s.n(l);s(2720);var o=s(9334);function i(){let[e,t]=(0,a.useState)({fullName:"",email:"",accountType:"",password:"",confirmPassword:""});(0,o.useRouter)();let[s,l]=(0,a.useState)(!1),[i,d]=(0,a.useState)([]),c=e=>{let{id:s,value:r}=e.target;t(e=>({...e,[s]:r}))},m=async t=>{if(t.preventDefault(),e.password!==e.confirmPassword){alert("Passwords do not match!");return}l(!0)};return(0,r.jsxs)("form",{className:"w-full max-w-sm space-y-6",onSubmit:m,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"fullName",className:"block text-black text-sm",children:"Full Name"}),(0,r.jsx)("input",{type:"text",name:"fullName",id:"fullName",className:"w-full mt-1 px-4 py-2 border text-black border-gray-300 bg-white rounded-lg shadow-sm",placeholder:"Your full name",value:e.fullName,onChange:c})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-black text-sm",children:"Email"}),(0,r.jsx)("input",{type:"email",name:"email",id:"email",className:"w-full mt-1 px-4 py-2 border text-black border-gray-300 bg-white rounded-lg shadow-sm",placeholder:"admin@admin.com",value:e.email,onChange:c})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"accountType",className:"block text-black text-sm",children:"Account Type"}),(0,r.jsxs)("select",{name:"accountType",value:e.accountType,className:"w-full mt-1 px-4 py-2 border text-black border-gray-300 bg-white rounded-lg shadow-sm",onChange:e=>{let{name:s,value:r}=e.target;t(e=>({...e,[s]:r}))},children:[(0,r.jsx)("option",{value:"",children:"Select Account Type"}),i.map(e=>(0,r.jsx)("option",{value:e.id,children:e.title},e.id))]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"password",className:"block text-black text-sm",children:"Password"}),(0,r.jsx)("input",{type:"password",name:"password",id:"password",className:"w-full mt-1 px-4 py-2 border text-black border-gray-300 bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none",value:e.password,onChange:c})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"confirmPassword",className:"block text-black text-sm",children:"Confirm Password"}),(0,r.jsx)("input",{type:"password",name:"confirmPassword",id:"confirmPassword",className:"w-full mt-1 px-4 py-2 border text-black border-gray-300 bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none",value:e.confirmPassword,onChange:c})]}),(0,r.jsx)("button",{type:"submit",className:"w-full py-1 bg-[#F20519] text-white border border-[#F20519] rounded-lg shadow-md hover:bg-black",children:"Sign Up"}),(0,r.jsxs)("p",{className:"text-center text-sm text-black",children:["Already have an account?"," ",(0,r.jsx)(n(),{href:"/auth/login",children:(0,r.jsx)("span",{className:"text-red-500 hover:underline",children:"Log In"})})]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)("hr",{className:"flex-grow border-gray-300"}),(0,r.jsx)("span",{className:"text-sm text-gray-500",children:"OR"}),(0,r.jsx)("hr",{className:"flex-grow border-gray-300"})]}),(0,r.jsx)("div",{className:"space-y-4 text-black",children:(0,r.jsxs)("button",{type:"button",className:"flex items-center justify-center w-full py-2 text-sm border border-gray-300 rounded-full shadow-sm text-black",children:[(0,r.jsx)("img",{src:"/images/google-icon.png",alt:"Google Logo",className:"w-5 h-5 mr-2 object-cover"}),"Continue with Google"]})})]})}},9956:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(2740),a=s(5533),l=s(6301),n=s(9607),o=s.n(n);function i(){return(0,r.jsxs)("div",{className:"flex h-screen flex-col md:flex-row",children:[(0,r.jsxs)("div",{className:"flex flex-col p-10 w-full md:w-1/2 px-4 md:px-10 bg-green-50 md:bg-transparent",children:[(0,r.jsx)("div",{className:"flex justify-center md:mt-0 sm:mt-8 md:justify-start",children:(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)("img",{src:"/images/adflow_logo.png",alt:"Kaziforce Logo",className:"w-30 h-8"})})}),(0,r.jsxs)("div",{className:"flex flex-col items-center mt-10",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold text-gray-800 mb-4",children:"Create an account"}),(0,r.jsx)("p",{className:"text-black text-sm mb-8",children:"Manage Your Ad Slots with Ease"}),(0,r.jsx)("div",{className:"w-full max-w-sm",children:(0,r.jsx)(l.Suspense,{fallback:(0,r.jsx)("div",{children:"Loading..."}),children:(0,r.jsx)(a.default,{})})})]})]}),(0,r.jsx)("div",{className:"hidden md:block w-full h-screen md:w-1/2 p-4 bg-white justify-center",children:(0,r.jsx)("img",{src:"/images/auth_rectangle.png",alt:"People collaborating",className:"w-auto h-auto p-4 object-cover"})})]})}},1354:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d,metadata:()=>i});var r=s(2740),a=s(2202),l=s.n(a),n=s(4988),o=s.n(n);s(1135),s(7294);let i={title:"AdFlow",description:"Generated by create next app"};function d({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:`${l().variable} ${o().variable} antialiased`,children:e})})}},5533:(e,t,s)=>{"use strict";s.d(t,{default:()=>r});let r=(0,s(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/la/adflow_landing_page/src/components/auth/RegisterForm.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/la/adflow_landing_page/src/components/auth/RegisterForm.tsx","default")},440:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[638,180,367,765],()=>s(2612));module.exports=r})();