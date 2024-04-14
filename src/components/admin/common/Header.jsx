import React from "react";
import { Link, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const location = useLocation();
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
    }
  };

  return (
    <div className="w-full justify-between h-[4rem] flex items-center px-6 bg-[#b9c4c5]">
      <h1 className="font-inter text-[1.1rem]">{getTitle()}</h1>
      <div>
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
