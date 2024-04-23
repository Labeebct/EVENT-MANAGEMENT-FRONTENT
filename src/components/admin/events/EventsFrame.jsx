import React from "react";
import BlockIcon from "@mui/icons-material/Block";
import EditIcon from "@mui/icons-material/Edit";
import weddingImg from "../../../assets/bg (15).jpg";

const EventsFrame = () => {
  return (
    <div className="filter relative items-center w-full bg-white flex shadow-box flex-1 h-auto">
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
            Price: 1,20,000 / day
          </div>
          <div class="text-[.9rem] font-scope-one font-bold text-gray-700">
            Capacity: 200
          </div>
          <div class="text-[.9rem] font-scope-one font-bold text-gray-700">
            Location: City, Country
          </div>
        </div>
        <div className="w-full absolute right-1 top-1 md:right-3 md:top-3  h-auto flex justify-end pr-5-6 items-center ">
          <button className="p-1 text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out mr-3 bg-green-600">
            <EditIcon sx={{ fontSize: "19px" }} />
          </button>
          <button className="p-1 text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out bg-red-600">
            <BlockIcon sx={{ fontSize: "19px" }} />
          </button>
        </div>
      </div>

      {/* <div className="absolute w-full h-full flex justify-center items-center backdrop-blur-[.04rem] bg-[#ffffff3f]">
        <btn className="bg-red-600 cursor-pointer  ease-in-out duration-100 active:scale-[.95] py-2 px-5 font-bold text-white rounded-sm text-[.7rem] font-inter">
          Unblock
        </btn>
      </div> */}
    </div>
  );
};

export default EventsFrame;
