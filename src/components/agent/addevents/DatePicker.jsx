import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles

const EventDateSelector = ({selectedDates,handleDateChange}) => {


  return (
    <div className="flex  items-center md:items-start flex-col md:flex-row w-full my-8">
      <div className="flex-2">
        <h2 className="my-4 font-inter">Select Available Dates</h2>
        <DatePicker
          selected={null} // Set the selected date (null initially)
          onChange={handleDateChange} // Handle date selection
          inline // Display date picker inline
          isClearable // Allow clearing selected date
          showYearDropdown // Show year dropdown in date picker
          scrollableYearDropdown // Enable scrolling in year dropdown
          placeholderText="Select a Date" // Placeholder text for date input
          dateFormat="MM/dd/yyyy" // Date format
          minDate={new Date()} // Minimum selectable date (today)
          selectsRange={false} // Disable range selection
          startDate={selectedDates.length > 0 ? selectedDates[0] : null} // Start date (not used here)
          endDate={null} // End date (not used here)
        />
      </div>
      <div className="md:pl-16 flex-1 h-[14rem]  w-full ">
        <h3 className="my-4 font-inter  shadow-md p-3 font-bold">
          Selected Dates
        </h3>
        <ul className="overflow-y-auto h-full">
          {selectedDates
            .filter((date) => date instanceof Date && !isNaN(date))
            .map((date, index) => (
              <li className="my-5 font-medium font-inter" key={index}>
                {index + 1 + "    :  " + date.toLocaleDateString()}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default EventDateSelector;
