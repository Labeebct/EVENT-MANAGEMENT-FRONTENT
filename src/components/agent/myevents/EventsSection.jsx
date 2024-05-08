import React, { useEffect, useState } from "react";
import EventsFrame from "../../admin/events/EventsFrame";
import axiosInstance from "../../../instance/axiosInstance";
import { useNavigate } from "react-router-dom";

const EventsSection = () => {

  const Navigate = useNavigate();
  const [myEvents, setMyEvents] = useState([]);

  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        const response = await axiosInstance.get("/agent/my-events");
        const { data, status } = response;

        if (status == 200) {
          setMyEvents(data.myEvents);
        }
      } catch (error) {
        if (error.response) { 
          const { status } = error.response;

          if (status == 500) {
            Navigate("/500");
          }
        } else {
          console.log("No response from the server", error);
          Navigate("/500");
        }
      }
    };

    fetchMyEvents();

  }, []);

  return (
    <div className="w-full p-4 h-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
      {myEvents.map((data) => (
        <EventsFrame role={'agent'}  key={data._id} data={data} />
      ))}
    </div>
  );
};

export default EventsSection;
