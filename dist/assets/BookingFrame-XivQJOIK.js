import{z as je,A as ve,j as t,r as c,n as de,d as Ne,E as me}from"./index-G4zhL9fC.js";import{d as xe}from"./Close-CLTOJbhA.js";import{d as ye,a as we}from"./KeyboardArrowDown-CV4-t5Nb.js";var x={},ze=ve;Object.defineProperty(x,"__esModule",{value:!0});var m=x.default=void 0,ke=ze(je()),Pe=t;m=x.default=(0,ke.default)((0,Pe.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"}),"Done");const Ae=({type:r,data:e})=>{var a,j,v,d,N,y,w,z,k,P,C,D,S,A,_,F,$,B,E,M,R,O,L,U,q,I,T,Y,G,H,V,J,K,Q,W,X,Z,ee,te,se,oe,le,re,ne,ie,ce;const[l,f]=c.useState(!1),[h,fe]=c.useState(e.isCancelled),[u,he]=c.useState(e.isConfirmed),p=de(),b=Ne(s=>s.socket.socket),g=s=>{const o=new Date(s),n=o.getUTCDate(),i=o.getUTCMonth()+1,be=o.getUTCFullYear(),ge=n<10?`0${n}`:n,ae=i<10?`0${i}`:i;return`${ge}-${ae}-${be}`},ue=async(s,o)=>{me({title:"Confirm to cancel booking",message:"Are you sure you want to cancel the booking?",titleClassName:"text-xl font-bold text-green-500",buttons:[{label:"Yes",style:{backgroundColor:"#D80032"},className:"text-white font-bold py-2 px-4 rounded mr-2",onClick:async()=>{fe(!0),b.emit("cancelEvent",s,o),p("success","Event has been cancelled")}},{label:"No",style:{backgroundColor:"#65B741"},className:"bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"}],overlayClassName:"fixed inset-0 bg-[black] bg-opacity-50 flex justify-center items-center"})},pe=async(s,o)=>{me({title:"Confirm to approve booking",message:"Are you sure you want to approve the booking?",titleClassName:"text-xl font-bold text-green-500",buttons:[{label:"Yes",style:{backgroundColor:"#D80032"},className:"text-white font-bold py-2 px-4 rounded mr-2",onClick:async()=>{he(!0),b.emit("approveEvent",s,o),p("success","Event has been approved")}},{label:"No",style:{backgroundColor:"#65B741"},className:"bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"}],overlayClassName:"fixed inset-0 bg-[black] bg-opacity-50 flex justify-center items-center"})};return t.jsxs("div",{className:"block shadow-box mt-2",children:[t.jsxs("div",{className:"filter relative items-center w-full bg-white flex  flex-1 h-auto",children:[t.jsx("img",{src:`https://eventapi.labio.shop/${(a=e==null?void 0:e.event)==null?void 0:a.eventImage}`,className:"md:w-60 w-44 h-auto max-h-72 p-6 object-cover rounded-lg"}),t.jsxs("div",{class:"flex relative bg-white justify-between p-4 pl-1 w-full items-center",children:[l?t.jsx(ye,{onClick:()=>f(!l),className:"absolute cursor-pointer  bottom-3 right-4"}):t.jsx(we,{onClick:()=>f(!l),className:"absolute cursor-pointer  bottom-3 right-4"}),t.jsxs("div",{class:"flex  flex-col gap-2",children:[t.jsx("div",{class:"text-[1.3rem] capitalize font-bold font-inter my-1",children:(j=e==null?void 0:e.event)==null?void 0:j.venueName}),t.jsxs("div",{class:"text-[.9rem] font-roboto capitalize text-gray-700",children:["Category: ",(v=e==null?void 0:e.event)==null?void 0:v.category]}),t.jsxs("div",{class:"text-[.9rem] font-roboto capitalize text-gray-700",children:["Location: ",(d=e==null?void 0:e.event)==null?void 0:d.country,",",(N=e==null?void 0:e.event)==null?void 0:N.state,",",(y=e==null?void 0:e.event)==null?void 0:y.city]}),t.jsxs("div",{class:"text-[.9rem] font-roboto capitalize text-gray-700",children:["Venue Date: ",g(e.selectedDate)]}),t.jsxs("div",{class:"text-[.9rem] font-roboto capitalize text-gray-700",children:["Booked By: ",(z=(w=e==null?void 0:e.userProfile)==null?void 0:w[0])==null?void 0:z.fullname]}),t.jsxs("div",{class:"text-[.9rem] font-roboto capitalize text-gray-700",children:["Booked Date: ",g(e.bookedDate)]}),t.jsxs("div",{class:"text-[.9rem] font-roboto capitalize text-gray-700",children:["Price: ",(k=e==null?void 0:e.event)==null?void 0:k.price," / day"]}),t.jsxs("div",{class:"text-[.9rem] font-roboto capitalize text-gray-700",children:["Advance: ₹",(P=e==null?void 0:e.event)==null?void 0:P.advanceAmount]})]}),u&&t.jsx("div",{className:"w-full gap-2 absolute right-2 top-0 md:right-3 p-2 h-auto flex justify-end items-center ",children:t.jsxs("div",{className:"h-auto w-auto flex gap-2",children:[t.jsx("button",{disabled:!0,className:"p-2 text-white text-[.7rem] font-semibold drop-shadow-md duration-100 active:scale-[.98] ease-in-out rounded-sm font-inter bg-green-700",children:"Approved"}),e.isPaymentDone?t.jsx(t.Fragment,{children:t.jsxs("button",{disabled:!0,className:"p-2 text-white flex justify-center items-center gap-1 text-[.7rem] font-semibold drop-shadow-md duration-100 active:scale-[.98] ease-in-out rounded-sm font-inter shadow-sm bg-green-700",children:["Payment ",t.jsx(m,{className:"text-green-600",sx:{fontSize:"19px"}})]})}):t.jsx(t.Fragment,{children:t.jsxs("button",{disabled:!0,className:"p-2 text-white flex justify-center items-center gap-1 text-[.7rem] font-semibold drop-shadow-md duration-100 active:scale-[.98] ease-in-out rounded-sm font-inter shadow-sm bg-red-700",children:["Payment ",t.jsx(xe,{className:"text-red-600",sx:{fontSize:"19px"}})]})})]})}),t.jsx("div",{className:"w-full gap-2 absolute right-1 top-1 md:right-3 md:top-3  h-auto flex justify-end items-center ",children:h&&t.jsx("button",{disabled:!0,className:"p-2 px-4 sm:block hidden text-white text-[.7rem] font-semibold rounded-sm font-inter bg-red-700",children:"Cancelled"})}),r=="agent"&&t.jsx(t.Fragment,{children:t.jsxs("div",{className:"w-full gap-2 absolute right-1 top-1 md:right-3 md:top-3  h-auto flex justify-end items-center ",children:[!h&&!u&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>ue(e._id,e.user),className:"p-2 sm:block hidden text-white text-[.7rem] font-semibold drop-shadow-md duration-100 active:scale-[.98] ease-in-out rounded-sm font-inter bg-red-700",children:"Cancel"}),t.jsx("button",{onClick:()=>pe(e._id,e.user),className:"p-2 sm:block hidden text-white text-[.7rem] font-semibold drop-shadow-md duration-100 active:scale-[.98] ease-in-out rounded-sm font-inter bg-green-700",children:"Approve"})]}),!(e!=null&&e.isConfirmed)&&t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"p-1 mt-1 ml-1 sm:hidden block text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out  bg-green-600",children:t.jsx(m,{sx:{fontSize:"19px"}})}),t.jsx("button",{className:"p-1 mt-1 ml-1 sm:hidden block text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out  bg-red-600",children:t.jsx(xe,{sx:{fontSize:"19px"}})})]})]})})]})]}),t.jsxs("div",{className:`${l?r==="admin"?"h-[49rem]":"h-[24rem]":"h-0"} overflow-hidden transition-all  duration-700 ease-in-out flex-1  w-full bg-white mx-auto  shadow-sm`,children:[t.jsx("h3",{className:"font-bold px-6 font-inter",children:"User Details"}),t.jsxs("div",{className:"px-6 p-3 flex flex-col gap-2",children:[t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["Full name : ",(D=(C=e==null?void 0:e.userProfile)==null?void 0:C[0])==null?void 0:D.fullname]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["Mobile : ",(A=(S=e==null?void 0:e.userProfile)==null?void 0:S[0])==null?void 0:A.mobilenum]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["DOB : ",(F=(_=e==null?void 0:e.userProfile)==null?void 0:_[0])==null?void 0:F.dob]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["Gender : ",(B=($=e==null?void 0:e.userProfile)==null?void 0:$[0])==null?void 0:B.gender]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["Occupation : ",(M=(E=e==null?void 0:e.userProfile)==null?void 0:E[0])==null?void 0:M.occupation]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["Refaral Source : ",(O=(R=e==null?void 0:e.userProfile)==null?void 0:R[0])==null?void 0:O.referalsource]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["State : ",(U=(L=e==null?void 0:e.userProfile)==null?void 0:L[0])==null?void 0:U.state]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["District : ",(I=(q=e==null?void 0:e.userProfile)==null?void 0:q[0])==null?void 0:I.district]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["City : ",(Y=(T=e==null?void 0:e.userProfile)==null?void 0:T[0])==null?void 0:Y.city]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["Pincode : ",(H=(G=e==null?void 0:e.userProfile)==null?void 0:G[0])==null?void 0:H.pincode]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["Landmark : ",(J=(V=e==null?void 0:e.userProfile)==null?void 0:V[0])==null?void 0:J.landmark]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["House No : ",(Q=(K=e==null?void 0:e.userProfile)==null?void 0:K[0])==null?void 0:Q.houseno]})]}),r=="admin"&&t.jsxs(t.Fragment,{children:[t.jsx("h3",{className:"font-bold px-5 font-inter mt-4 mb-1",children:"Agent Details"}),t.jsxs("div",{className:"px-6 p-3 flex flex-col gap-2",children:[t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["Full name : ",(W=e==null?void 0:e.agentProfile[0])==null?void 0:W.fullname]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["Mobile : ",(X=e==null?void 0:e.agentProfile[0])==null?void 0:X.mobilenum]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["DOB : ",(Z=e==null?void 0:e.agentProfile[0])==null?void 0:Z.dob]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["Gender : ",(ee=e==null?void 0:e.agentProfile[0])==null?void 0:ee.gender]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["Occupation : ",(te=e==null?void 0:e.agentProfile[0])==null?void 0:te.occupation]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["Refaral Source : ",(se=e==null?void 0:e.agentProfile[0])==null?void 0:se.referalsource]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["State : ",(oe=e==null?void 0:e.agentProfile[0])==null?void 0:oe.state]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["District : ",(le=e==null?void 0:e.agentProfile[0])==null?void 0:le.district]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["City : ",(re=e==null?void 0:e.agentProfile[0])==null?void 0:re.city]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["Pincode : ",(ne=e==null?void 0:e.agentProfile[0])==null?void 0:ne.pincode]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["Landmark : ",(ie=e==null?void 0:e.agentProfile[0])==null?void 0:ie.landmark]}),t.jsxs("h4",{className:"font-roboto text-slate-700 text-[.78em] capitalize text-sm",children:["House No : ",(ce=e==null?void 0:e.agentProfile[0])==null?void 0:ce.houseno]})]})]})]})]})};export{Ae as B};