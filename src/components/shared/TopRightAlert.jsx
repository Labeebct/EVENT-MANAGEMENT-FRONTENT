import React, { useState } from "react";
import BasicAlert from "./BasicAlert";

const TopRightAlert = ({message}) => {
  
  return (
    <div className="fixed z-20 h-full w-full ">
      <div
        className={`absolute top-2 transition-transform p-1 ${
          message ? "translate-x-0" : "translate-x-56"
        } duration-700 ease-linear  right-1`}
      >
        <BasicAlert type={"info"} msg={message} />
      </div>
    </div>
  );
};

export default TopRightAlert;
