import React, { useEffect, useState } from "react";
import axiosInstance from "../../../instance/axiosInstance";
import { useNavigate } from "react-router-dom";

const DashBoardStati = () => {
  const Navigate = useNavigate();
  const [usersCount, setUsersCount] = useState(0);
  const [categoryCount, setCatgoryCount] = useState(0);

  useEffect(() => {

    const fetchStatitics = async () => {
      try {
        const response = await axiosInstance.get("/admin/dashboard");
        const { usersCount, catagoryCount } = response.data;
        setUsersCount(usersCount);
        setCatgoryCount(catagoryCount);
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;
          if (status == 404) {
            Navigate("/404");
          } else {
            console.log(data.error);
            Navigate("/500");
          }
        } else {
          Navigate("/500");
        }
      }
    };

    fetchStatitics();

  }, []);

  return (
    <div className="w-full h-auto justify-between flex-wrap gap-4 items-center rounded-lg bg-white flex p-5">
      <div className="flex-1 flex flex-col cursor-pointer duration-150 hover:scale-[1.02] ease-in items-center py-5 bg-[#1d7b8a3b] shadow-sm h-28 rounded-md min-w-[270px]">
        <h3 className="font-scope-one font-bold text-[1.3rem] text-cusOrange">
          Total Users
        </h3>
        <h5 className="text-[1.3rem] mt-2 font-poppins font-bold text-gray-700">
          {usersCount}
        </h5>
      </div>
      <div className="flex-1 flex flex-col cursor-pointer duration-150 hover:scale-[1.02] ease-in items-center py-5 bg-[#1d7b8a3b] shadow-sm h-28 rounded-md min-w-[270px]">
        <h3 className="font-scope-one font-bold text-[1.4rem]   text-cusOrange">
          Total Categories
        </h3>
        <h5 className="text-[1.3rem] mt-2 font-poppins font-bold text-gray-700">
        {categoryCount}
        </h5>
      </div>
      <div className="flex-1 flex flex-col cursor-pointer duration-150 hover:scale-[1.02] ease-in items-center py-5 bg-[#1d7b8a3b] shadow-sm h-28 rounded-md min-w-[270px]">
        <h3 className="font-scope-one font-bold text-[1.43em] text-cusOrange">
          Total Events
        </h3>
        <h5 className="text-[1.3rem] mt-2 font-poppins font-bold text-gray-700">
          12
        </h5>
      </div>
    </div>
  );
};

export default DashBoardStati;
