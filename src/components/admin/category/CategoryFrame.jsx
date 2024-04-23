import React from "react";
import cateringImg from "../../../assets/bg (16).jpg";
import BlockIcon from "@mui/icons-material/Block";
import EditIcon from "@mui/icons-material/Edit";

const CategoryFrame = () => {
  return (
    <div
      className={`w-full relative mx-auto duration-200 ease-in-out bg-white flex justify-center flex-col shadow-box my-5 rounded-[.3rem] flex-1 min-w-[250px] max-w-[300px] h-auto p-4`}
    >
      <img src={cateringImg} className="w-full h-[10rem]" alt="Category" />
      <h3 className="text-center mt-4 font-scope-one font-[600] text-[1.3rem] text-[#000000c2] uppercase">
        party
      </h3>
      <p className="text-center max-h-23 font-roboto text-[.9rem] overflow-hidden  py-3 text-gray-800">
        Party planning is the art of organizing social events details like
        venue, decorations, food, and entertainment to ensure a great time for
        guests
      </p>
      <div className="w-full h-auto flex justify-end  items-center ">
        <button className="p-1 text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out mr-3 rounded-sm bg-green-600">
          <EditIcon sx={{ fontSize: "20px" }} />
        </button>
        <button className="p-1 text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out rounded-sm bg-red-600">
          <BlockIcon sx={{ fontSize: "20px" }} />
        </button>
      </div>

      {/* <div className="absolute w-full h-full flex justify-center items-center backdrop-blur-[.04rem] bg-[#ffffff2b]">
        <btn className="bg-red-600 mb-56 mr-9 cursor-pointer ease-linear duration-100 active:scale-[.95] py-2 px-5 font-bold text-white rounded-sm text-[.7rem] font-inter">
          Unblock
        </btn>
      </div> */}

    </div>
  );
};

export default CategoryFrame;
