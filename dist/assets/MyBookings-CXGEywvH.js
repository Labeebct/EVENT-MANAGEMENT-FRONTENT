import{u as m,r as i,a as p,d as f,j as e,c as u}from"./index-DQrfAxQs.js";import{B as d}from"./BookingFrame-Bp8csIDO.js";import"./Close-D9tJ1D45.js";import"./KeyboardArrowDown-BVxF66fJ.js";const x=()=>{const n=m(),[a,c]=i.useState([]),r=p(),o=f(s=>s.updateBooking);return i.useEffect(()=>{(async()=>{try{r({type:"loading",payload:!0});const t=await u.get("/agent/my-bookings");r({type:"loading",payload:!1});const{data:l,status:g}=t;g==200&&c(l.bookings)}catch(t){t.response||console.log("No response from the server",t),n("/500")}})(),o&&a.unshift(o)},[o]),e.jsx("div",{className:"h-full p-5 w-full",children:a.slice().reverse().map(s=>e.jsx(d,{type:"agent",data:s},s._id))})},h=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full flex items-center mt-14 sm:mt-0 justify-start px-8 h-16 bg-[#ece9e9]",children:e.jsx("h2",{className:"font-semibold text-[1.2rem] font-inter text-gray-800",children:"My Bookings"})}),e.jsx(x,{})]}),v=()=>e.jsx(h,{});export{v as default};