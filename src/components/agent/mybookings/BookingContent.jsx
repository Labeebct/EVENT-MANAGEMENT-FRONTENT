import React from "react";
import BookingSection from "./BookingSection";

const BookingContent = () => {
  return (
    <>
      <div className="w-full flex items-center mt-14 sm:mt-0 justify-start px-8 h-16 bg-[#ece9e9]">
        <h2 className="font-semibold text-[1.2rem] font-inter text-gray-800">
          My Bookings
        </h2>
      </div>
      <BookingSection />
    </>
  );
};

export default BookingContent;
