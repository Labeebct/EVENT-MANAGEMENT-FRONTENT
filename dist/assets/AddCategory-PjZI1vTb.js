import{u as U,b as F,a as I,r as n,j as e,B as L,c as x}from"./index-DQrfAxQs.js";const P=({type:i})=>{const r=U(),b=F(),y=I(),p=new URLSearchParams(b.search).get("id"),[w,N]=n.useState(""),[j,v]=n.useState(!1),[s,g]=n.useState({}),[f,o]=n.useState("");i=="edit"&&p&&n.useEffect(()=>{(async()=>{try{y({type:"loading",payload:!0});const a=await x.get(`/admin/edit-category?id=${p}`);y({type:"loading",payload:!1}),g(a.data.category)}catch(a){if(a.response){const{status:c}=a.response;c==404?r("/404"):r("/500")}else r("/500")}})()},[]);const C=i=="add"?"/admin/add-category":`/admin/edit-category?id=${p}`,S=t=>{const{files:a}=t.target,c=a[0];N(URL.createObjectURL(c))},D=async t=>{t.preventDefault();const{categoryName:a,category:c,categoryDiscription:h}=t.target,E=c.files[0];if(a.value.trim()=="")return o("Please provide category name.");if(h.value.trim()=="")return o("Please provide description.");const l=new FormData;l.append("categoryName",a.value),l.append("categoryDiscription",h.value),l.append("categoryImage",E);try{const m=await x.post(C,l),{data:d,status:u}=m;u==200&&(v(!0),o(d.msg),setTimeout(()=>r("/admin/category"),800))}catch(m){if(m.response){const{data:d,status:u}=m.response;u==500?(console.log(d.error),r("/500")):u==422&&o(d.msg)}else r("/500")}};return f&&setTimeout(()=>o(""),2e3),e.jsx("div",{className:"h-full w-full p-10 flex items-center justify-center",children:e.jsxs("form",{action:"",onSubmit:D,className:"h-auto rounded-md bg-white min-w-80 flex items-center flex-col py-4 px-10 w-[40%] border shadow-box border-[#0000000c] ",children:[e.jsx("img",{className:"w-36 h-36",src:w||`https://eventapi.labio.shop/${s.categoryImage}`,alt:""}),e.jsxs("div",{className:"w-auto mt-3 flex h-[3rem] items-center",children:[e.jsx("div",{className:"my-4 w-full p-2 px-4 bg-cusGreen text-white font-poppins font-medium text-[.7rem] rounded-sm",children:"CHOOSE FILE"}),e.jsx("input",{className:"absolute opacity-0 w-24",type:"file",onChange:S,encType:"multipart/form-data",name:"category"})]}),e.jsxs("span",{className:"flex w-full flex-col gap-2",children:[e.jsx("label",{htmlFor:"",className:"text-[.75rem] font-inter opacity-70",children:"Category Name"}),e.jsx("input",{spellCheck:!1,className:"h-[2.4rem] w-full shadow-md border border-[#6363631a] outline-none px-4 text-[.9rem]",type:"text",name:"categoryName",value:s?s.categoryName:"",onChange:t=>g({...s,categoryName:t.target.value})})]}),e.jsxs("span",{className:"flex mt-3 mb-4 w-full flex-col gap-2",children:[e.jsx("label",{htmlFor:"",className:"text-[.75rem] font-inter opacity-70",children:"Category Description"}),e.jsx("textarea",{spellCheck:!1,className:"h-[8rem] resize-none shadow-md w-full border border-[#6363631a] outline-none p-3 text-[.9rem]",type:"text",name:"categoryDiscription",value:s?s.categoryDiscription:"",onChange:t=>g({...s,categoryDiscription:t.target.value})})]}),f&&e.jsx(L,{type:j?"success":"error",msg:f}),e.jsx("button",{type:"submit",className:"w-full h-[2.7rem] bg-cusGreen mt-4 text-white font-roboto duration-150 active:scale-[.98] ease-in-out",children:"Submit"})]})})},O=({type:i})=>e.jsx(P,{type:i});export{O as default};