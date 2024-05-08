import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import BlockIcon from "@mui/icons-material/Block";
import { useAlert } from "../../../context/CenterAlert";
import axiosInstance from "../../../instance/axiosInstance";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

const EventsFrame = ({ role, data }) => {
  const Navigate = useNavigate();
  const showAlert = useAlert();
  const [isBlocked, setBlocked] = useState(data.isBlocked);
  const status = isBlocked ? "Unblock" : "Block";

  const handleBlock = () => {
    confirmAlert({
      title: `Confirm to ${status}`,
      message: `Are you sure you want to ${status} the event?`,
      titleClassName: "text-xl font-inter font-bold text-green-500",
      buttons: [
        {
          label: "Yes",
          style: { backgroundColor: "#65B741" },
          className: "text-white font-bold py-2 px-4 rounded mr-2",
          onClick: async () => {
            try {
              const response = await axiosInstance.put(
                `/agent/event-block?id=${data._id}`
              );
              const { status } = response;
              if (status == 200) {
                setBlocked(!isBlocked);
                showAlert(
                  "success",
                  `Event has been ${isBlocked ? "Unblocked" : "Blocked"}.`
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
    <div className="filter relative  w-full bg-white flex shadow-box flex-1 h-auto">
      <img
        src={`http://localhost:8082/${data.eventImage}`}
        className="md:w-48 w-44 h-auto p-6 object-cover rounded-lg"
      />
      <div class="flex relative bg-white justify-between p-6 pl-1 w-full ">
        <div class="flex  flex-col gap-2">
          <div class="text-[1.3rem] pl-1 font-bold capitalize font-inter my-1">
            {data.venueName}
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Category: {data.category}
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Price: {"₹" + " " + data.price} / day
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Advance: {"₹" + " " + data.advanceAmount}
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Capacity: {data.capacity} No
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Location: {data.country},{data.state},{data.city}{" "}
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Discription: {data.discription}
          </div>
        </div>
        <div className="w-full absolute right-1 top-1 md:right-3 md:top-3  h-auto flex justify-end pr-5-6 items-center ">
          {role === "agent" && (
            <button onClick={() => Navigate(`/agent/edit-event?id=${data._id}`)} className="p-1 text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out mr-3 bg-green-600">
              <EditIcon sx={{ fontSize: "19px" }} />
            </button>
          )}
          <button className="p-1 text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out bg-red-600">
            <BlockIcon onClick={handleBlock} sx={{ fontSize: "19px" }} />
          </button>
        </div>
      </div>
     {isBlocked && (
        <div className="absolute w-full h-full flex justify-center items-center backdrop-blur-[.04rem] bg-[#4848483f]">
          <btn
            onClick={handleBlock}
            className="bg-red-600 cursor-pointer  ease-in-out duration-100 active:scale-[.95] py-2 px-5 font-bold text-white rounded-sm text-[.7rem] font-inter"
          >
            Unblock
          </btn>
        </div>
      )}
    </div>
  );
};

export default EventsFrame;
