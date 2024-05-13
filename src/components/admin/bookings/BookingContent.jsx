import React, { useEffect, useState } from "react";
import BookingFrame from "./BookingFrame";
import axiosInstance from "../../../instance/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const BookingContent = () => {
  const Navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        dispatch({ type: "loading", payload: true });
        const response = await axiosInstance.get("/admin/bookings");
        dispatch({ type: "loading", payload: false });
        const { data, status } = response;

        if (status == 200) {
          setBookings(data.bookings);
        }
      } catch (error) {
        if (error.response) {
          Navigate("/500");
        } else {
          console.log("No response from the server", error);
          Navigate("/500");
        }
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="h-full flex flex-col gap-3 p-5 w-full">
      {bookings.map((booking) => (
        <BookingFrame key={booking._id} type={"admin"} data={booking} />
      ))}
    </div>
  );
};

export default BookingContent;
