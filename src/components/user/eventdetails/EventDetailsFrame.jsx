import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import axiosInstance from "../../../instance/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";

const EventDetailsFrame = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [event, setEvent] = useState({});
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
  }, []);

  const handleDateChange = (selectedOption) => {
    setSelectedDate(selectedOption);
  };

  const options = event.availableDates
    ? event.availableDates.map((date) => ({
        value: date,
        label: new Date(date).toLocaleDateString("en-US"),
      }))
    : [];

  return (
    <div className="h-auto mt-10 sm:-mt-6  flex flex-col md:flex-row w-[80%] shadow-box">
      <div className="h-auto p-4 flex-1 flex justify-center items-center">
        <img
          src={`http://localhost:8082/${event.eventImage}`}
          className="max-w-[42rem] max-h-[32rem]  w-[18rem] md:w-full  h-auto "
          alt=""
        />
      </div>
      <div className="h-full flex-1 flex justify-center px-4 py-4 md:py-8">
        <div class="flex w-full flex-col gap-3">
          <div class="text-[1.3rem] capitalize pl-1 font-bold font-inter my-1">
            {event.venueName}
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Category: {event.category}
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Price: {event.price} / day
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Advance: {event.advanceAmount} Rs
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Capacity: {event.capacity} No
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Start Time: {event.startTime}
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            End Time: {event.endTime}
          </div>
          <div class="text-[.9rem] items-center gap-4 flex pl-1 font-roboto capitalize text-gray-700">
            <p>Available Dates : </p>
            <Select
              className="capitalize w-[60%]"
              options={options}
              value={selectedDate}
              onChange={handleDateChange}
              placeholder="Select a date"
            />
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Location: {event.country},{event.state},{event.city}
          </div>
          <div class="text-[.9rem] pl-1 font-roboto capitalize text-gray-700">
            Discription: {event.country}
            <textarea
              name=""
              disabled
              value={event.discription}
              className="w-full h-[5rem] p-2 text-.9rem shadow-sm resize-none border my-2"
              id=""
            ></textarea>
          </div>
          <button className="bg-cusOrange text-[.8rem] sm:text-[.9rem] md:text-[1rem] font-inter ease-in-out duration-200 active:scale-[.97] w-full filter text-white shadow-box py-3">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsFrame;
