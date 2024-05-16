import React, { useEffect, useState } from "react";
import BookingFrame from "../../admin/bookings/BookingFrame";
import axiosInstance from "../../../instance/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const BookingSection = () => {
  const Navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        dispatch({ type: "loading", payload: true });
        const response = await axiosInstance.get("/agent/my-bookings");
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
    <div className="h-full p-5 w-full">
      {bookings.map((booking) => (
        <BookingFrame key={booking._id} type={"agent"} data={booking} />
      ))}
    </div>
  );
};

export default BookingSection;
