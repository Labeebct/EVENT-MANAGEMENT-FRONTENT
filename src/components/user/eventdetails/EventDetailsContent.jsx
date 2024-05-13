import React from "react";
import EventDetailsFrame from "./EventDetailsFrame";
import scrollToTop from "../../../config/scrollToTop";

const EventDetailsContent = () => {
  scrollToTop();
  return (
    <div className="h-auto py-10 w-full min-h-[calc(100vh-4.5rem)] flex justify-center items-center">
      <EventDetailsFrame />
    </div>
  );
};

export default EventDetailsContent;
