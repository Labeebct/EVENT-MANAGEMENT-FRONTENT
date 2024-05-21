import React, { useEffect, useState } from "react";
import Select from "react-select";
import BasicAlert from "../../user/../shared/BasicAlert";
import axiosInstance from "../../../instance/axiosInstance";
import jwtDecode from "../../../utils/jwtDecode";
import { openModal } from "../../../redux/actions/centerConfirm";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makePayment } from "../../../config/razorPay";

const EventDetailsFrame = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const userLoggedIn = localStorage.getItem("jwt");
  const socket = useSelector((state) => state.socket.socket);

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const proceedPending = useSelector((state) => state.confirm.proceedPending);
  const proceedPayment = useSelector((state) => state.confirm.proceedToPay);
  const bookedEvent = useSelector((state) => state.confirm.bookedEvent);

  const [event, setEvent] = useState({});
  const [booked, setBooked] = useState(null); // Initialize with null to check if the event is booked
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  let type;
  let title;
  let message;

  useEffect(() => {
    let userId = null;
    if (userLoggedIn) {
      const user = jwtDecode(userLoggedIn);
      userId = user?.userId;
    }

    const url = userId
      ? `/view-event?id=${id}&userId=${userId}`
      : `/view-event?id=${id}`;

    const fetchEvent = async () => {
      try {
        dispatch({ type: "loading", payload: true });
        const response = await axiosInstance.get(url);
        dispatch({ type: "loading", payload: false });
        const { data, status } = response;

        if (status === 200) {
          setEvent(data.event);
          setBooked(data.findEventBooked); // Set booked to the response data
        }
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;
          if (status === 500) {
            navigate("/500");
          }
        } else {
          navigate("/500");
        }
      }
    };
    fetchEvent();
  }, [id, location]);

  useEffect(() => {
    if (userLoggedIn && booked !== null) {
      if (booked && !booked.isConfirmed) {
        dispatch(
          openModal(
            (type = "pending"),
            (title = "Booking Request Sent"),
            (message =
              "Your event booking request has been submitted. Once approved by the agent, you will be directed to the payment section to finalize your booking. Thank you for choosing us, and we anticipate confirming your reservation shortly")
          )
        );
      } else if (booked && booked.isConfirmed && !booked.isPaymentDone) {
        dispatch(
          openModal(
            (type = "proceed_payment"),
            (title = "Your request has been approved"),
            (message =
              "We are happy to inform you that your recent request has been reviewed and approved. You can now proceed to payment to confirm your booking.")
          )
        );
      } else if (booked && booked.isCancelled) {
        dispatch(
          openModal(
            (type = "cancell_request"),
            (title = "Your request has been rejected"),
            (message =
              "We regret to inform you that your recent request has been reviewed and rejected by our agent due to certain reasons. We apologize for any inconvenience and encourage you to check other available options.")
          )
        );
      }
    }
  }, [booked, dispatch, userLoggedIn]);

  useEffect(() => {
    if (proceedPending) {
      dispatch({ type: "loading", payload: true });
      const jwt = localStorage.getItem("jwt");
      const user = jwtDecode(jwt);
      const bookingDetails = {
        amount: event.advanceAmount,
        selectedDate: selectedDate.value,
        event: event,
        agent: event.agentId,
        user: user.userId,
      };
      socket.emit("bookEvent", bookingDetails);
      setTimeout(() => {
        dispatch({ type: "loading", payload: false });
        dispatch(
          openModal(
            (type = "pending"),
            (title = "Booking Request Sent"),
            (message =
              "Your event booking request has been submitted. Once approved by the agent, you will be directed to the payment section to finalize your booking. Thank you for choosing us, and we anticipate confirming your reservation shortly")
          )
        );
      }, 3000);
    }

    return () => {
      dispatch({ type: "CANCEL_PAYMENT" });
    };
  }, [proceedPending, dispatch]);

  const handleDateChange = (selectedOption) => setSelectedDate(selectedOption);

  const options = event.availableDates
    ? event.availableDates.map((date) => ({
        value: date,
        label: new Date(date).toLocaleDateString("en-US"),
      }))
    : [];

  const handleBook = () => {
    type = null;
    title = "Confirm to Booking";
    message = `Are you sure you want to book the event with the selected date? If you proceed, you will be charged ₹${event.advanceAmount} as a booking charge, which is non-refundable. Proceed to get to the payment section.`;

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
              "You need to log in to book the event. Press the login button to log in/register.")
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

  useEffect(() => {
    if (proceedPayment) {
      const user = jwtDecode();
      makePayment(bookedEvent, user, dispatch, socket);
    }
  }, [proceedPayment]);

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
