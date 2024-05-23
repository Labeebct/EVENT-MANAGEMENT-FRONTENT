import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useAlert } from "../../../context/CenterAlert";
import axiosInstance from "../../../instance/axiosInstance";
import blankProfile from "../../../assets/blank profile.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const UsersFrame = ({ data }) => {
  const showAlert = useAlert();

  const [down, setDown] = useState(false);
  const [block, setBlock] = useState(data.status == "active" ? false : true);
  const status = block ? "UNBLOCK" : "BLOCK";
  const Navigate = useNavigate();

  const handleBlock = () => {
    confirmAlert({
      title: `Confirm to ${status}`,
      message: `Are you sure you want to ${
        status == "BLOCK" ? "block" : "unblock"
      }?`,
      titleClassName: "text-xl font-inter font-bold text-green-500",
      buttons: [
        {
          label: "Yes",
          style: { backgroundColor: "#65B741" },
          className: "text-white font-bold py-2 px-4 rounded mr-2",
          onClick: async () => {
            try {
              const response = await axiosInstance.put(
                `/admin/block?id=${data._id}`
              );
              const { status } = response;
              if (status == 200) {
                setBlock(!block);
                showAlert(
                  "success",
                  `Member has been ${block ? "Unblocked" : "Blocked"}`
                );
              }
            } catch (error) {
              if (error.response) {
                const { data, status } = error.response;
                if (status == 404) {
                  Navigate("/404");
                  console.log(data.msg);
                } else {
                  Navigate("/500");
                }
              } else {
                console.log("No response from server", error);
                Navigate("/500");
              }
            }
          },
        },
        {
          label: "No",
          style: { backgroundColor: "#D80032" },
          className:
            "bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2",
        },
      ],
      overlayClassName:
        "fixed inset-0 bg-[black] bg-opacity-20 flex justify-center items-center",
    });
  };

  return (
    <div className="block">
      <div className="h-32 flex  flex-1  w-full bg-white mx-auto  mt-3">
        <div className="h-full flex justify-center items-center  p-3 min-w-[7rem]">
          <img
            src={
              data?.profile[0]?.profile
                ? `https://eventapi.labio.shop/${data.profile[0].profile}`
                : blankProfile
            }
            className="w-full h-full rounded-sm"
            alt=""
          />
        </div>
        <div className="h-full relative w-[calc(100%-7rem)] px-3 flex flex-col py-3 gap-1">
          <h4 className="font-inter capitalize font-bold text-slate-700 text-[1rem]">
            {data.username}
          </h4>
          <h4 className="font-roboto text-slate-700 text-sm">{data.email}</h4>
          {data.verified ? (
            <h4 className="font-roboto text-[.8rem] text-green-700 font-bold tracking-wide">
              Verified
            </h4>
          ) : (
            <h4 className="font-roboto text-[.8rem] text-red-700 font-bold tracking-wide">
              Unverified
            </h4>
          )}
          <h4 className="font-roboto text-[.72rem] text-slate-700  mt-1 ">
            Reg Date :{" "}
            <span className="text-[.76rem] font-poppins font-[400]">
              {data.regDate}
            </span>
          </h4>
          {down ? (
            <KeyboardArrowDownIcon
              onClick={() => setDown(!down)}
              className="absolute cursor-pointer  bottom-3 right-4"
            />
          ) : (
            <KeyboardArrowUpIcon
              onClick={() => setDown(!down)}
              className="absolute cursor-pointer  bottom-3 right-4"
            />
          )}
          {!block ? (
            <button
              onClick={handleBlock}
              className="bg-green-700 font-[400] font-inter rounded-sm top-1 absolute right-1 duration-150 ease-out active:scale-[.95] text-white text-[.7rem] py-1 px-4"
            >
              Active
            </button>
          ) : (
            <button
              onClick={handleBlock}
              className="bg-red-700 font-[400] font-inter rounded-sm top-1 absolute right-1 duration-150 ease-out active:scale-[.95] text-white text-[.7rem] py-1 px-4"
            >
              Blocked
            </button>
          )}
        </div>
      </div>
      <div
        className={`${
          down ? "h-[22.5rem] " : "h-0"
        } overflow-hidden transition-all  duration-700 ease-in-out flex-1  w-full bg-white mx-auto  shadow-sm`}
      >
        <div className="px-4 p-3 flex flex-col gap-2">
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            Full name : {data?.profile[0]?.fullname}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            Mobile : {data?.profile[0]?.mobilenum}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            DOB : {data?.profile[0]?.dob}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            Gender : {data?.profile[0]?.gender}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            Occupation : {data?.profile[0]?.occupation}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            Refaral Source : {data?.profile[0]?.referalsource}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            State : {data?.profile[0]?.state}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            District : {data?.profile[0]?.district}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            City : {data?.profile[0]?.city}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            Pincode : {data?.profile[0]?.pincode}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            Landmark : {data?.profile[0]?.landmark}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            House No : {data?.profile[0]?.houseno}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default UsersFrame;
