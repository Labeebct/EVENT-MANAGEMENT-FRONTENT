import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoneIcon from "@mui/icons-material/Done";
import { useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useAlert } from "../../../context/CenterAlert";

const BookingFrame = ({ type, data }) => {
  const [down, setDown] = useState(false);
  const [cancel, setCancel] = useState(data.isCancelled);
  const [approved, setApproved] = useState(data.isConfirmed);
  const centerAlert = useAlert();
  const socket = useSelector((state) => state.socket.socket);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}-${formattedMonth}-${year}`;
  };

  const handleCancel = async (bookingId, userId) => {
    confirmAlert({
      title: "Confirm to cancel booking",
      message: "Are you sure you want to cancel the booking?",
      titleClassName: "text-xl font-bold text-green-500",
      buttons: [
        {
          label: "Yes",
          style: { backgroundColor: "#D80032" },
          className: "text-white font-bold py-2 px-4 rounded mr-2",
          onClick: async () => {
            setCancel(true);
            socket.emit("cancelEvent", bookingId, userId);
            centerAlert("success", "Event has been cancelled");
          },
        },
        {
          label: "No",
          style: { backgroundColor: "#65B741" },
          className:
            "bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2",
        },
      ],
      overlayClassName:
        "fixed inset-0 bg-[black] bg-opacity-50 flex justify-center items-center",
    });
  };

  const handleApprove = async (bookingId, userId) => {
    confirmAlert({
      title: "Confirm to approve booking",
      message: "Are you sure you want to approve the booking?",
      titleClassName: "text-xl font-bold text-green-500",
      buttons: [
        {
          label: "Yes",
          style: { backgroundColor: "#D80032" },
          className: "text-white font-bold py-2 px-4 rounded mr-2",
          onClick: async () => {
            setApproved(true);
            socket.emit("approveEvent", bookingId, userId);
            centerAlert("success", "Event has been approved");
          },
        },
        {
          label: "No",
          style: { backgroundColor: "#65B741" },
          className:
            "bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2",
        },
      ],
      overlayClassName:
        "fixed inset-0 bg-[black] bg-opacity-50 flex justify-center items-center",
    });
  };

  return (
    <div className="block shadow-box mt-2">
      <div className="filter relative items-center w-full bg-white flex  flex-1 h-auto">
        <img
          src={`https://eventapi.labio.shop/${data?.event?.eventImage}`}
          className="md:w-60 w-44 h-auto max-h-72 p-6 object-cover rounded-lg"
        />
        <div class="flex relative bg-white justify-between p-4 pl-1 w-full items-center">
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
          <div class="flex  flex-col gap-2">
            <div class="text-[1.3rem] capitalize font-bold font-inter my-1">
              {data?.event?.venueName}
            </div>
            <div class="text-[.9rem] font-roboto capitalize text-gray-700">
              Category: {data?.event?.category}
            </div>
            <div class="text-[.9rem] font-roboto capitalize text-gray-700">
              Location: {data?.event?.country},{data?.event?.state},
              {data?.event?.city}
            </div>
            <div class="text-[.9rem] font-roboto capitalize text-gray-700">
              Venue Date: {formatDate(data.selectedDate)}
            </div>

            <div class="text-[.9rem] font-roboto capitalize text-gray-700">
              Booked By: {data?.userProfile?.[0]?.fullname}
            </div>
            <div class="text-[.9rem] font-roboto capitalize text-gray-700">
              Booked Date: {formatDate(data.bookedDate)}
            </div>
            <div class="text-[.9rem] font-roboto capitalize text-gray-700">
              Price: {data?.event?.price} / day
            </div>
            <div class="text-[.9rem] font-roboto capitalize text-gray-700">
              Advance: ₹{data?.event?.advanceAmount}
            </div>
          </div>

          {approved && (
            <div className="w-full gap-2 absolute right-2 top-0 md:right-3 p-2 h-auto flex justify-end items-center ">
              <div className="h-auto w-auto flex gap-2">
                <button
                  disabled
                  className="p-2 text-white text-[.7rem] font-semibold drop-shadow-md duration-100 active:scale-[.98] ease-in-out rounded-sm font-inter bg-green-700"
                >
                  Approved
                </button>

                {!data.isPaymentDone ? (
                  <>
                    <button
                      disabled
                      className="p-2 text-white flex justify-center items-center gap-1 text-[.7rem] font-semibold drop-shadow-md duration-100 active:scale-[.98] ease-in-out rounded-sm font-inter shadow-sm bg-red-700"
                    >
                      Payment <CloseIcon className="text-red-600" sx={{ fontSize: "19px" }} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      disabled
                      className="p-2 text-white flex justify-center items-center gap-1 text-[.7rem] font-semibold drop-shadow-md duration-100 active:scale-[.98] ease-in-out rounded-sm font-inter shadow-sm bg-green-700"
                    >
                      Payment <DoneIcon className="text-green-600" sx={{ fontSize: "19px" }} />
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="w-full gap-2 absolute right-1 top-1 md:right-3 md:top-3  h-auto flex justify-end items-center ">
            {cancel && (
              <button
                disabled
                className="p-2 px-4 sm:block hidden text-white text-[.7rem] font-semibold rounded-sm font-inter bg-red-700"
              >
                Cancelled
              </button>
            )}
          </div>

          {type == "agent" && (
            <>
              <div className="w-full gap-2 absolute right-1 top-1 md:right-3 md:top-3  h-auto flex justify-end items-center ">
                {!cancel && !approved && (
                  <>
                    <button
                      onClick={() => handleCancel(data._id, data.user)}
                      className="p-2 sm:block hidden text-white text-[.7rem] font-semibold drop-shadow-md duration-100 active:scale-[.98] ease-in-out rounded-sm font-inter bg-red-700"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleApprove(data._id, data.user)}
                      className="p-2 sm:block hidden text-white text-[.7rem] font-semibold drop-shadow-md duration-100 active:scale-[.98] ease-in-out rounded-sm font-inter bg-green-700"
                    >
                      Approve
                    </button>
                  </>
                )}
                {!data?.isConfirmed && (
                  <>
                    <button className="p-1 mt-1 ml-1 sm:hidden block text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out  bg-green-600">
                      <DoneIcon sx={{ fontSize: "19px" }} />
                    </button>
                    <button className="p-1 mt-1 ml-1 sm:hidden block text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out  bg-red-600">
                      <CloseIcon sx={{ fontSize: "19px" }} />
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className={`${
          down ? (type === "admin" ? "h-[49rem]" : "h-[24rem]") : "h-0"
        } overflow-hidden transition-all  duration-700 ease-in-out flex-1  w-full bg-white mx-auto  shadow-sm`}
      >
        {/* USER DETAILS */}
        <h3 className="font-bold px-6 font-inter">User Details</h3>
        <div className="px-6 p-3 flex flex-col gap-2">
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            Full name : {data?.userProfile?.[0]?.fullname}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            Mobile : {data?.userProfile?.[0]?.mobilenum}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            DOB : {data?.userProfile?.[0]?.dob}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            Gender : {data?.userProfile?.[0]?.gender}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            Occupation : {data?.userProfile?.[0]?.occupation}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            Refaral Source : {data?.userProfile?.[0]?.referalsource}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            State : {data?.userProfile?.[0]?.state}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            District : {data?.userProfile?.[0]?.district}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            City : {data?.userProfile?.[0]?.city}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            Pincode : {data?.userProfile?.[0]?.pincode}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            Landmark : {data?.userProfile?.[0]?.landmark}
          </h4>
          <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
            House No : {data?.userProfile?.[0]?.houseno}
          </h4>
        </div>

        {/* AGENT DETAILS */}

        {type == "admin" && (
          <>
            <h3 className="font-bold px-5 font-inter mt-4 mb-1">
              Agent Details
            </h3>
            <div className="px-6 p-3 flex flex-col gap-2">
              <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
                Full name : {data?.agentProfile[0]?.fullname}
              </h4>
              <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
                Mobile : {data?.agentProfile[0]?.mobilenum}
              </h4>
              <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
                DOB : {data?.agentProfile[0]?.dob}
              </h4>
              <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
                Gender : {data?.agentProfile[0]?.gender}
              </h4>
              <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
                Occupation : {data?.agentProfile[0]?.occupation}
              </h4>
              <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
                Refaral Source : {data?.agentProfile[0]?.referalsource}
              </h4>
              <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
                State : {data?.agentProfile[0]?.state}
              </h4>
              <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
                District : {data?.agentProfile[0]?.district}
              </h4>
              <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
                City : {data?.agentProfile[0]?.city}
              </h4>
              <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
                Pincode : {data?.agentProfile[0]?.pincode}
              </h4>
              <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
                Landmark : {data?.agentProfile[0]?.landmark}
              </h4>
              <h4 className="font-roboto text-slate-700 text-[.78em] capitalize text-sm">
                House No : {data?.agentProfile[0]?.houseno}
              </h4>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingFrame;
