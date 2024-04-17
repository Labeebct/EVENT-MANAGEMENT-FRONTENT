import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";

const Header = () => {
  const location = useLocation();
  const Navigate = useNavigate()
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
    }
  };

  return (
    <div className="w-full justify-between h-[4rem] flex items-center px-7 bg-[#b9c4c5]">
      <h1 className="font-inter text-[1.1rem]">{getTitle()}</h1>
      <div>
        {getTitle() == "Events" && (
          <button onClick={()=> Navigate('/admin/add-event')} className="p-2 bg-[#243d38] mr-8 font-inter text-[.8rem] text-white duration-150 cursor-pointer active:scale-[.98] ease-in rounded-sm">
            Add Event <AddIcon sx={{ fontSize: "23px" }} />
          </button>
        )}
        {getTitle() == "Category" && (
          <button onClick={()=> Navigate('/admin/add-category')} className="p-2 bg-[#243d38] mr-8 font-inter text-[.8rem] text-white duration-150 cursor-pointer active:scale-[.98] ease-in rounded-sm">
            Add Category <AddIcon sx={{ fontSize: "23px" }} />
          </button>
        )}
        <Link to={"/profile"}>
          <button className="duration-100 ease-out active:scale-[.95]">
            <PersonIcon sx={{ fontSize: "1.65rem", opacity: ".8" }} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
