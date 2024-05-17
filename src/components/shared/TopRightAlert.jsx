import React from "react";
import BasicAlert from "./BasicAlert";
import { useNavigate } from "react-router-dom";

const TopRightAlert = ({ message }) => {
  const navigate = useNavigate();

  const handleScroll = () => {
    navigate("/agent/my-bookings");
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed z-20 h-full w-full ">
      <div
        onClick={handleScroll}
        className={`absolute top-2 transition-transform p-1 ${
          message ? "translate-x-0" : "translate-x-56"
        } duration-1000 ease-linear cursor-pointer scale-[.95]  right-1`}
      >
        <BasicAlert type={"warning"} msg={message} />
      </div>
    </div>
  );
};

export default TopRightAlert;
