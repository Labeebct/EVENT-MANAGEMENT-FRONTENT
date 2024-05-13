import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axiosInstance from "../../../instance/axiosInstance";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";

const Header = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const currentLocation = location.pathname;

  const getTitle = () => {
    switch (currentLocation) {
      case "/admin/dashboard":
        return "Dashboard";
      case "/admin/events":
        return "Events";
      case "/admin/category":
        return "Category";
      case "/admin/users":
        return "Users";
      case "/admin/add-category":
        return "Add Category";
      case "/admin/add-event":
        return "Add Event";
      case "/admin/bookings":
        return "Bookings";
      case "/admin/messages":
        return "Messages";
      case "/admin/agents":
        return "Agents";
      case "/admin/profile":
        return "Profile";
    }
  };

  const handleChange = async (e) => {
    const sortValue = e.target.value;
    try {
      dispatch({ type: "loading", payload: true });
      const response = await axiosInstance.post("/admin/sort-messages", {
        sortValue,
      });
      dispatch({ type: "loading", payload: false });
      const messages = response.data.messages;
      dispatch({ type: "sort", payload: messages });
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status == 500) {
          Navigate("/500");
        }
      } else {
        console.log(error);
        Navigate("/500");
      }
    }
  };

  return (
    <div className="w-full justify-between h-[4rem] flex items-center px-7 bg-[#b9c4c5]">
      <h1 className="font-inter text-[1.1rem] font-semibold">{getTitle()}</h1>
      <div>
        {getTitle() == "Messages" && (
          <select
            onChange={handleChange}
            className="w-32 outline-none border-none p-1 font-inter text-[.9rem]"
            name="sort_role"
            id="role"
          >
            <option
              className="text-[.8rem] cursor-pointer font-inter"
              value="all"
            >
              All
            </option>
            <option
              className="text-[.8rem] cursor-pointer font-inter"
              value="user"
            >
              User
            </option>
            <option
              className="text-[.8rem] cursor-pointer font-inter"
              value="agent"
            >
              Agent
            </option>
          </select>
        )}
        {getTitle() == "Category" && (
          <button
            onClick={() => Navigate("/admin/add-category")}
            className="p-2 bg-[#243d38] font-inter text-[.75rem] text-white duration-150 cursor-pointer active:scale-[.98] ease-in rounded-sm"
          >
            Add Category <AddIcon sx={{ fontSize: "19px" }} />
          </button>
        )}
        <Link to={"/admin/messages"}>
          <button className="duration-100 px-5 ease-out active:scale-[.95]">
            <NotificationsIcon sx={{ fontSize: "1.58rem", opacity: ".8" }} />
          </button>
        </Link>
        <Link to={"/admin/profile"}>
          <button className="duration-100 ease-out active:scale-[.95]">
            <PersonIcon sx={{ fontSize: "1.65rem", opacity: ".8" }} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
