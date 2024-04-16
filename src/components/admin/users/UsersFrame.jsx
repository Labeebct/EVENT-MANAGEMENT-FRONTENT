import React from "react";
import LabioImg from "../../../assets/labio.png";

const UsersFrame = () => {
  return (
    <div className="h-32 flex cursor-pointer flex-1  w-full bg-white mx-auto border border-[#8e8e8e71] shadow-sm mt-5">
      <div className="h-full flex justify-center items-center  p-3 min-w-[7rem]">
        <img src={LabioImg} className="w-full h-full rounded-sm" alt="" />
      </div>
      <div className="h-full relative w-[calc(100%-7rem)] px-3 flex flex-col py-3 gap-1">
        <h4 className="font-inter font-bold text-slate-700 text-[1rem]">Labeeb ct</h4>
        <h4 className="font-roboto text-slate-700 text-sm">ctlabeebthaliyil@gmail.com</h4>
        <h4 className="font-roboto text-[.8rem] text-green-700 font-bold tracking-wide">Verified</h4>
        {/* <h4 className="font-roboto text-[.8rem] text-red-700 font-bold">Unverified</h4> */}
        <h4 className="font-roboto text-[.7rem] text-slate-700  mt-1 ">Reg Date : <span className="text-[.7rem] font-poppins font-[400]">12-02-2024 </span></h4>
        {/* <button className="bg-red-700 font-[400] font-inter rounded-sm top-1 absolute right-1 duration-150 ease-out active:scale-[.95] text-white text-[.7rem] py-1 px-4">Blocked</button > */}
        <button className="bg-green-700 font-[400] font-inter rounded-sm top-1 absolute right-1 duration-150 ease-out active:scale-[.95] text-white text-[.7rem] py-1 px-4">Active</button>
      </div>
    </div>
  );
};

export default UsersFrame;
