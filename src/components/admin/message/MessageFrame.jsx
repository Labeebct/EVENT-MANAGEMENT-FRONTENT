import React from "react";
import labio from '../../../assets/labio.png'
import CloseIcon from '@mui/icons-material/Close';

const MessageFrame = () => {
  return (
    <div className="block bg-white">
    <div className="flex-1 relative rounded-md flex items-center px-3 py-5   h-auto mx-auto  bg-white">
       <img src={labio} alt="" className="h-20 w-20 rounded-[11rem]" />
       <div className="flex flex-col gap-2 items-start w-full justify-center h-full px-5">
      <p class="text-[1rem] font-bold mt-3 font-roboto">Name: Labeeb ct</p>
      <p class="text-[.8rem] text-center font-inter  font-bold">
        Subject: Issue in booking  
      </p>
      <p class="text-[.8rem] text-center font-roboto">
        Email: ctlabeebthaliyil@gmail.com   
      </p>
      </div>
    
      <button className="p-1 absolute top-2 right-2 text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out rounded-[3rem] bg-red-600">
            <CloseIcon sx={{ fontSize: "19px" }} />
          </button>
    </div>
      <div className="w-full">
      <p class="text-[.8rem] px-3 py-3 font-roboto">
        Message: i cant book any of the eventsi cant book any of the events  
      </p>
      </div>
      </div>
  );
};

export default MessageFrame;
