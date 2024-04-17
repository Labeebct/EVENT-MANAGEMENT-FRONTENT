import React from "react";
import labio from '../../../assets/labio.png'

const MessageFrame = () => {
  return (
    <div className="flex-1 rounded-md flex flex-col gap-2 items-center px-3 py-5 w-full max-w-96 h-auto mx-auto shadow-box bg-white">
       <img src={labio} alt="" className="h-36 w-36 rounded-[11rem]" />
      <p class="text-[1.1rem] font-bold mt-3 font-inter">Name: Labeeb ct</p>
      <p class="text-[.9rem] text-center font-inter mb-2 font-bold">
        Subject: Issue in booking  
      </p>
      <p class="text-[.8rem] text-center font-roboto">
        Email: Ctlabeebthaliyil@gmail.com   
      </p>
      <p class="text-[.8rem] text-center font-roboto">
        Message: i cant book any of the eventsi cant book any of the events 
        Message: i cant book any of the events 
        Message: i cant book any of the events 
      </p>
    </div>
  );
};

export default MessageFrame;
