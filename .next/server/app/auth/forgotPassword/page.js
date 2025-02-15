(()=>{var e={};e.id=192,e.ids=[192],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},8936:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>u,tree:()=>d});var s=r(260),a=r(8203),o=r(5155),n=r.n(o),i=r(7292),l={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let d=["",{children:["auth",{children:["forgotPassword",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8591)),"/Users/la/adflow_landing_page/src/app/auth/forgotPassword/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"/Users/la/adflow_landing_page/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/la/adflow_landing_page/src/app/auth/forgotPassword/page.tsx"],m={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/auth/forgotPassword/page",pathname:"/auth/forgotPassword",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},147:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9607,23)),Promise.resolve().then(r.bind(r,9443))},4219:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8531,23)),Promise.resolve().then(r.bind(r,3239))},4210:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},4122:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},7366:()=>{},5665:()=>{},3239:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(5512),a=r(8009),o=r(8531),n=r.n(o),i=r(9334),l=r(2720);function d(){let[e,t]=(0,a.useState)({email:"",password:""}),[r,o]=(0,a.useState)(!1),d=(0,i.useRouter)(),c=e=>{let{id:r,value:s}=e.target;t(e=>({...e,[r]:s}))},m=async t=>{t.preventDefault(),o(!0);try{let t={"Content-Type":"application/json"},r="e18d5c7000ca249fad54b480baef48d13480411cc9d83fbcbf7f1bcb4ca534d7";r&&(t["api-key"]=r);let s=await fetch("/api/auth/signin",{method:"POST",headers:t,body:JSON.stringify(e)});if(s.ok)l.A.fire("Login successful!","You will be redirected to the homepage.","success").then(()=>{d.push("/")});else{let e=await s.text();l.A.fire("Failed to login",e,"error")}}catch(e){e instanceof Error?l.A.fire("Failed to login",e.message,"error"):l.A.fire("Failed to login","An unknown error occurred","error")}finally{o(!1)}};return(0,s.jsxs)("form",{className:"w-full max-w-sm space-y-6",onSubmit:m,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"block text-black text-sm",children:"Email"}),(0,s.jsx)("input",{type:"email",id:"email",className:"w-full mt-1 px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm",placeholder:"admin@admin.com",value:e.email,onChange:c})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"password",className:"block text-black text-sm",children:"Password"}),(0,s.jsx)("input",{type:"password",id:"password",className:"w-full mt-1 px-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none",value:e.password,onChange:c})]}),(0,s.jsx)("div",{className:"flex justify-center text-sm text-[#037073]",children:(0,s.jsx)(n(),{href:"/auth/forgotPassword",children:(0,s.jsx)("span",{className:"text-secondary hover:underline",children:"Forgot Password"})})}),(0,s.jsx)("button",{type:"submit",className:"w-full py-1 bg-[#F20519] border border-[#F20519] text-white rounded-lg shadow-md hover:bg-[#037073]",disabled:r,children:"Log In"}),(0,s.jsxs)("p",{className:"text-center text-sm text-black",children:["Don't have an account?"," ",(0,s.jsx)(n(),{href:"/auth/register",children:(0,s.jsx)("span",{className:"text-secondary hover:underline",children:"Sign Up"})})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("hr",{className:"flex-grow border-gray-300"}),(0,s.jsx)("span",{className:"text-sm text-gray-500",children:"OR"}),(0,s.jsx)("hr",{className:"flex-grow border-gray-300"})]}),(0,s.jsx)("div",{className:"space-y-4 text-black",children:(0,s.jsxs)("button",{type:"button",className:"flex items-center justify-center w-full py-2 text-sm border border-gray-300 rounded-lg shadow-sm text-black",children:[(0,s.jsx)("img",{src:"/images/google-icon.png",alt:"Kaziforce Logo",className:"w-5 h-5 mr-2 object-cover"}),"Continue with Google"]})})]})}},8591:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(2740),a=r(9443),o=r(6301),n=r(9607),i=r.n(n);function l(){return(0,s.jsxs)("div",{className:"flex h-screen flex-col md:flex-row",children:[(0,s.jsxs)("div",{className:"flex flex-col p-10 w-full md:w-1/2 px-4 md:px-10 bg-green-50 md:bg-transparent",children:[(0,s.jsx)("div",{className:"flex justify-center md:mt-0 sm:mt-8 md:justify-start",children:(0,s.jsx)(i(),{href:"/",children:(0,s.jsx)("img",{src:"/images/adflow_logo.png",alt:"Kaziforce Logo",className:"w-30 h-8"})})}),(0,s.jsxs)("div",{className:"flex flex-col items-center mt-10",children:[(0,s.jsx)("h1",{className:"text-4xl font-bold text-gray-800 mb-4",children:"Welcome Back!"}),(0,s.jsx)("p",{className:"text-black text-sm mb-8",children:"Empowering Your Next Career Move."}),(0,s.jsx)("div",{className:"w-full max-w-sm",children:(0,s.jsx)(o.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(a.default,{})})})]})]}),(0,s.jsx)("div",{className:"hidden md:block w-full h-screen md:w-1/2 p-4 bg-white justify-center",children:(0,s.jsx)("img",{src:"/images/auth_rectangle.png",alt:"People collaborating",className:"w-auto h-auto p-4 object-cover"})})]})}},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>l});var s=r(2740),a=r(2202),o=r.n(a),n=r(4988),i=r.n(n);r(1135),r(7294);let l={title:"AdFlow",description:"Generated by create next app"};function d({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${o().variable} ${i().variable} antialiased`,children:e})})}},9443:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/la/adflow_landing_page/src/components/auth/LoginForm.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/la/adflow_landing_page/src/components/auth/LoginForm.tsx","default")},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(8077);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,180,367,765],()=>r(8936));module.exports=s})();