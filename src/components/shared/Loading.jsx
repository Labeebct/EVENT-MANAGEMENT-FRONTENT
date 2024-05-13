import React, { useEffect } from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  return (
    <div className="w-screen flex justify-center items-center bg-white z-10 h-screen fixed ">
      <div className="mb-20">
        <ScaleLoader color="#fd5d00" height={44} width={9} />
      </div>
    </div>
  );
};

export default Loading;
