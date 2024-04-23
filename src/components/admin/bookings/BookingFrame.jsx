import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import weddingImg from "../../../assets/bg (15).jpg";

const BookingFrame = () => {
  return (
    <div className="filter mb-4 relative items-center w-full bg-white flex shadow-box flex-1 h-auto">
      <img
        src={weddingImg}
        className="md:w-60 w-44 sm:w-52 h-auto p-6 object-cover rounded-lg"
      />
      <div class="flex relative bg-white justify-between p-6 pl-1 w-full items-center">
        <div class="flex  flex-col gap-2">
          <div class="text-[1.3rem] font-bold font-inter my-1">Venue Name</div>
          <div class="text-[.9rem] font-scope-one font-bold text-gray-700">
            Category: Wedding
          </div>
          <div class="text-[.9rem] font-scope-one font-bold text-gray-700">
            Location: City, Country
          </div>
          <div class="text-[.9rem] font-scope-one font-bold text-gray-700">
            Venue Date: 30-04-2024
          </div>

          <div class="text-[.9rem] font-scope-one font-bold text-gray-700">
            Booked By: Labeeb ct
          </div>
          <div class="text-[.9rem] font-scope-one font-bold text-gray-700">
            Booked Date: 12-03-2024
          </div>
          <div class="text-[.9rem] font-scope-one font-bold text-gray-700">
            Price: 1,20,000 / day
          </div>
          <div class="text-[.9rem] font-scope-one font-bold text-gray-700">
            Advance Paid: 500
          </div>
        </div>
        <div className="w-full gap-2 absolute right-1 top-1 md:right-3 md:top-3  h-auto flex justify-end items-center ">
          <button className="p-2 sm:block hidden text-white text-[.7rem] font-semibold drop-shadow-md duration-100 active:scale-[.98] ease-in-out rounded-sm font-inter bg-green-700">Approve</button>
          {/* <button className="p-2 sm:block hidden text-white text-[.7rem] font-semibold drop-shadow-md duration-100 active:scale-[.98] ease-in-out rounded-sm font-inter bg-green-700">Approved</button> */}
          <button className="p-2 sm:block hidden text-white text-[.7rem] font-semibold drop-shadow-md duration-100 active:scale-[.98] ease-in-out rounded-sm font-inter bg-red-700">Cancel</button>
          <button className="p-1 mt-1 ml-1 sm:hidden block text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out  bg-green-600">
            <DoneIcon sx={{ fontSize: "19px" }} />
          </button>
          <button className="p-1 mt-1 ml-1 sm:hidden block text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out  bg-red-600">
            <CloseIcon sx={{ fontSize: "19px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingFrame;
