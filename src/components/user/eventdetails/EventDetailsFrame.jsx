import React, { useEffect, useState } from "react";
import Select from "react-select";
import BasicAlert from "../../user/../shared/BasicAlert";
import axiosInstance from "../../../instance/axiosInstance";
import { makePayment } from "../../../config/razorPay";
import { openModal } from "../../../redux/actions/centerConfirm";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const EventDetailsFrame = () => {
  const Navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const proceedToPay = useSelector((state) => state.confirm.proceedToPay);

  const [event, setEvent] = useState({});
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axiosInstance.get(`/view-event?id=${id}`);
        const { data, status } = response;

        if (status == 200) {
          setEvent(data.event);
        }
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;
          if (status == 500) {
            Navigate("/500");
          }
        } else {
          Navigate("/500");
        }
      }
    };
    fetchEvent();
  }, [id, location]);

  useEffect(() => {
    if (proceedToPay) {
      makePayment(event, selectedDate);
    }

    return () => {
      dispatch({ type: "CANCEL_PAYMENT" });
    };
  }, [proceedToPay, dispatch]);

  const handleDateChange = (selectedOption) => setSelectedDate(selectedOption);

  const options = event.availableDates
    ? event.availableDates.map((date) => ({
        value: date,
        label: new Date(date).toLocaleDateString("en-US"),
      }))
    : [];

  const handleBook = () => {
    let type = null;
    let title = "Confirm to Booking";
    let message = `Are you sure you want to book the event with selected date? if it is
  you willl be charged ₹${event.advanceAmount} as booking charge which is
  non-refundable. proceed to get in to the payment section`;

    if (!selectedDate) {
      return setError("Please choose your venue date.");
    } else {
      const userLoggedIn = localStorage.getItem("jwt");

      if (!userLoggedIn)
        dispatch(
          openModal(
            (type = "login"),
            (title = "Login to book the event"),
            (message =
              "You need to login for booking the event, press login button to login/register.")
          )
        );
      else
        dispatch(
          openModal(
            (type = "confirm"),
            title,
            message,
            selectedDate,
            event.advanceAmount
          )
        );
    }
  };

  if (error) setTimeout(() => setError(""), 2000);

  return (
    <div className="h-auto mt-10 relative overflow-hidden sm:-mt-6  flex flex-col md:flex-row w-[80%] shadow-box">
      <div
        className={`absolute top-0 transition-transform p-1 ${
          error ? "translate-x-0" : "translate-x-56"
        } duration-300 ease-linear  right-0`}
      >
        <BasicAlert type={"error"} msg={error} />
      </div>

      <div className="h-auto p-4 flex-1 flex justify-center items-center">
        <img
          src={`http://localhost:8082/${event.eventImage}`}
          className="max-w-[42rem] max-h-[32rem]  w-[18rem] md:w-full  h-auto "
          alt=""
        />
      </div>
      <div className="h-full flex-1 flex justify-center px-4 py-4 md:py-8">
        <div className="flex w-full flex-col gap-3">
          <div className="text-[1.3rem] capitalize pl-1 font-bold font-inter my-1">
            {event.venueName}
          </div>
          <div className="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Category: {event.category}
          </div>
          <div className="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Price: {event.price} / day
          </div>
          <div className="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Advance: {event.advanceAmount} Rs
          </div>
          <div className="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Capacity: {event.capacity} No
          </div>
          <div className="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Start Time: {event.startTime}
          </div>
          <div className="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            End Time: {event.endTime}
          </div>
          <div className="text-[.9rem] items-center gap-4 flex pl-1 font-roboto capitalize text-gray-700">
            <p>Available Dates : </p>
            <Select
              className="capitalize w-[60%]"
              options={options}
              value={selectedDate}
              onChange={handleDateChange}
              placeholder="Select a date"
            />
          </div>
          <div className="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Location: {event.country},{event.state},{event.city}
          </div>
          <div className="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Discription: {event.country}
            <textarea
              name=""
              disabled
              value={event.discription}
              className="w-full h-[5rem] p-2 text-.9rem shadow-sm resize-none border my-2"
              id=""
            ></textarea>
          </div>
          <button
            onClick={handleBook}
            className="bg-cusOrange text-[.8rem] sm:text-[.9rem] md:text-[1rem] font-inter ease-in-out duration-200 active:scale-[.97] w-full filter text-white shadow-box py-3"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsFrame;
