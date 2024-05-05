import { useEffect } from "react";
import EventsFrame from "./EventsFrame";
import axiosInstance from "../../../instance/axiosInstance";
import { useState } from "react";

const EventsContent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosInstance.get("/events");
        const { data, status } = response;

        if (status == 200) {
          setEvents(data.events);
        }
      } catch (error) {
        if (error.response) {
          const { status } = error.response;
          if (status == 500) {
            Navigate("/500");
          }
        } else {
          Navigate("/500");
        }
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="h-auto w-full min-h-[calc(100vh-4.5rem)]">
      <div className="w-full grid grid-cols-1 h-auto p-5 mt-10 sm:mt-0 px-6 gap-x-6  lg:grid-cols-3 sm:grid-cols-2">
        {events.map((data) => (
          <EventsFrame key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default EventsContent;
