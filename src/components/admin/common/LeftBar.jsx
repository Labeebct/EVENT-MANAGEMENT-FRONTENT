import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import LogoutIcon from "@mui/icons-material/Logout";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function LeftBar() {
  const navigate = useNavigate();

  const [page, setPage] = useState("");
  const [leftNav, setLeftNav] = useState(false);

  const location = useLocation();
  const currentLocation = location.pathname;

  useEffect(() => {
    switch (currentLocation) {
      case "/admin/dashboard":
        setPage("Dashboard");
        break;
      case "/admin/events":
        setPage("Events");
        break;
      case "/admin/category":
        setPage("Category");
        break;
      case "/admin/users":
        setPage("Users");
        break;
      default:
        setPage("");
        break;
    }
  }, [currentLocation]);

  return (
    <div
      className={`xl:relative min-w-[3.1rem] ${
        leftNav ? "w-[13rem] absolute z-10" : "w-[3.2rem]"
      } ease-linear duration-300 xl:w-[15rem] h-full overflow-hidden border-r border-slate-600 border-opacity-20 bg-[#0e333d]`}
    >
      <div className="mb-2 mt-3">
        <h3 className="hidden xl:flex p-6 font-[600] font-serif tracking-[.4rem] text-[1.4rem] sm:text-[1.3rem] md:text-[1.4rem] text-cusOrange">
          LABIO
        </h3>
        <div className="xl:hidden cursor-pointer text-cusOrange py-7 pl-3">
          {leftNav ? (
            <CloseIcon
              onClick={() => setLeftNav(false)}
              sx={{ fontSize: 27 }}
            />
          ) : (
            <MenuIcon onClick={() => setLeftNav(true)} sx={{ fontSize: 27 }} />
          )}
        </div>
      </div>
      <ul className={`w-full h-full flex flex-col`}>
        <Link to="/admin/dashboard">
          <li
            className={`px-4 py-5 text-[.85rem] text-white flex xl:gap-3 gap-4 items-center ${
              page === "Dashboard" ? "bg-[#c0bebe2f]" : ""
            }  hover:bg-[#d4d4d41e] border-opacity-10 cursor-pointer font-inter`}
          >
            <EqualizerIcon sx={{ fontSize: 20 }} />
            Dashboard
          </li>
        </Link>
        <Link to="/admin/events">
          <li
            className={`px-4 py-5 text-[.85rem] text-white flex xl:gap-3 gap-4 items-center ${
              page === "Events" ? "bg-[#c0bebe2f]" : ""
            }  hover:bg-[#d4d4d41e] border-opacity-10 cursor-pointer font-inter`}
          >
            <EventSeatIcon sx={{ fontSize: 20 }} />
            Events
          </li>
        </Link>
        <Link to="/admin/category">
          <li
            className={`px-4 py-5 text-[.85rem] text-white flex xl:gap-3 gap-4 items-center ${
              page === "Category" ? "bg-[#c0bebe2f]" : ""
            }  hover:bg-[#d4d4d41e] border-opacity-10 cursor-pointer font-inter`}
          >
            <CategoryIcon sx={{ fontSize: 20 }} />
            Category
          </li>
        </Link>
        <Link to="/admin/users">
          <li
            className={`px-4 py-5 text-[.85rem] text-white flex xl:gap-3 gap-4 items-center ${
              page === "Users" ? "bg-[#c0bebe2f]" : ""
            }  hover:bg-[#d4d4d41e] border-opacity-10 cursor-pointer font-inter`}
          >
            <PeopleAltIcon sx={{ fontSize: 20 }} />
            Users
          </li>
        </Link>
        <Link to="/admin/login">
          <li
            className={`px-4 py-5 text-[.85rem] text-white flex xl:gap-3 gap-4 items-center  hover:bg-[#d4d4d41e] border-opacity-10 cursor-pointer font-inter`}
          >
            <LogoutIcon sx={{ fontSize: 20 }} />
            Logout
          </li>
        </Link>
      </ul>{" "}
    </div>
  );
}

export default LeftBar;
