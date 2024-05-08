import { useEffect } from "react";
import EventsFrame from "./EventsFrame";
import axiosInstance from "../../../instance/axiosInstance";
import { useState } from "react";

const EventsContent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axiosInstance.get("/admin/events");
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
    <div className="w-full p-4 h-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
        {events.map((data) => (
          <EventsFrame role={'admin'} key={data._id} data={data} />
        ))}
    </div>
  );
};

export default EventsContent;
