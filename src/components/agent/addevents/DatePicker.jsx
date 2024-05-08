import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import axiosInstance from "../../../instance/axiosInstance";
import CloseIcon from "@mui/icons-material/Close";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const EventDateSelector = ({
  setSelectedDates,
  selectedDates,
  handleDateChange,
  availableDates,
  id,
}) => {
  const Navigate = useNavigate();

  const [presentDates, setPresentDates] = useState([]);

  useEffect(() => {
    setPresentDates(availableDates);
  }, [availableDates]);

  const handlePopDate = (indexToRemove) => {
    setSelectedDates((dates) => {
      return dates.filter((date, index) => index !== indexToRemove);
    });
  };

  const handleRemoveDate = async (indexToRemove) => {
    try {
      const response = await axiosInstance.delete(
        `/agent/remove-available-dates?id=${id}&index=${indexToRemove}`
      );
      const { data, status } = response;

      if (status == 200) {
        setPresentDates((currentDates) => {
          return currentDates.filter((date, index) => index !== indexToRemove);
        });
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;

        if (status == 500) {
          Navigate("/500");
        }
      } else {
        console.log("No response from the server", error);
        Navigate("/500");
      }
    }
  };

  return (
    <div className="flex items-center md:items-start flex-col md:flex-row w-full my-8">
      <div className="flex-2">
        <h2 className="my-4 font-inter">Select Available Dates</h2>
        <DatePicker
          selected={null}
          onChange={handleDateChange}
          inline
          isClearable
          showYearDropdown
          scrollableYearDropdown
          placeholderText="Select a Date"
          dateFormat="MM/dd/yyyy"
          minDate={new Date()}
          selectsRange={false}
        />
      </div>
      <div className="md:pl-16 flex-1 h-[14rem] w-full">
        <h3 className="my-4 font-inter shadow-md p-3 font-bold">
          Selected Dates
        </h3>
        <ul className="overflow-y-auto h-full">
          {/* Display existing available dates */}
          {presentDates &&
            presentDates.map((date, index) => (
              <li
                className="my-5 p-1 px-2 items-center font-medium font-inter flex justify-between"
                key={index}
              >
                <p>{new Date(date).toLocaleDateString()}</p>
                <button
                  type="button"
                  className="duration-100 active:scale-[.95]"
                  onClick={() => handleRemoveDate(index)}
                >
                  <CloseIcon className="text-red-600" />
                </button>
              </li>
            ))}
          {/* Display newly selected dates */}
          {selectedDates.map((date, index) => (
            <li
              className="my-5 p-1 px-2 items-center font-medium font-inter flex justify-between"
              key={index}
            >
              <p>{new Date(date).toLocaleDateString()}</p>
              <button
                type="button"
                className="duration-100 active:scale-[.95]"
                onClick={() => handlePopDate(index)}
              >
                <CloseIcon className="text-red-600" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventDateSelector;
