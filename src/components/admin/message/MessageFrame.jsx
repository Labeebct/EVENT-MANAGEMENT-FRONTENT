import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { useAlert } from "../../../context/CenterAlert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axiosInstance from "../../../instance/axiosInstance";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const MessageFrame = ({ data }) => {
  
  const showAlert = useAlert();
  const Navigate = useNavigate();

  const [visible, setVisible] = useState(true);

  const handleRemove = () => {
    confirmAlert({
      title: "Confirm to remove the message",
      message: "Are you sure you want to remove the message?",
      titleClassName: "text-xl font-inter font-bold text-green-500",
      buttons: [
        {
          label: "Yes",
          style: { backgroundColor: "#65B741" },
          className: "text-white font-bold py-2 px-4 rounded mr-2",
          onClick: async () => {
            try {
              const response = await axiosInstance.delete(
                `/admin/remove-message?id=${data._id}`
              );
              const { status } = response;
              if (status == 200) {
                setVisible(false);
                showAlert("success", "Message has been deleted.");
              }
            } catch (error) {
              if (error.response) {
                const { data, status } = error.response;
                if (status == 404) {
                  Navigate("/404");
                  console.log(data.error);
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

  if (!visible) {
    return null;
  }
  return (
    <div className="flex-1 pb-5  relative flex items-center p-4 min-h-[11rem] h-auto w-auto bg-white">
      <div className="flex flex-col gap-2 items-start w-full justify-center h-full px-5">
        <p class="text-[.98rem] font-bold mt-3 font-roboto">
          Name: {data.username}
        </p>
        <p class="text-[.8rem] text-center font-inter  font-bold">
          Subject: {data.subject}
        </p>
        <p class="text-[.8rem] text-center font-inter  font-bold">
          Role: {data.role}
        </p>
        <p class="text-[.8rem] text-center font-roboto">Email: {data.email}</p>
        <p class="text-[.8rem] font-roboto">Message: {data.message}</p>
      </div>

      <button
        onClick={handleRemove}
        className="p-1 absolute top-2 right-2 text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out rounded-[3rem] bg-red-600"
      >
        <CloseIcon sx={{ fontSize: "18px" }} />
      </button>
    </div>
  );
};

export default MessageFrame;
