import { useNavigate, Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";

const Header = () => {
  const Navigate = useNavigate();

  const [page, setPage] = useState("");

  const location = useLocation();
  const currentLocation = location.pathname;

  useEffect(() => {
    switch (currentLocation) {
      case "/":
        setPage("Home");
        break;
      case "/events":
        setPage("Events");
        break;
      case "/category":
        setPage("Category");
        break;
      case "/about":
        setPage("About");
        break;
      case "/contact":
        setPage("Contact");
        break;
      case "/profile":
        setPage("Profile");
        break;
      default:
        setPage("");
        break;
    }
  }, [currentLocation]);

  return (
    <main className="w-full block items-center h-[4.5rem]">
      <div className="w-full flex items-center h-[4.5rem] bg-cusBlue px-8">
        <div className="flex">
          <h1 className="font-[600] text-[1.5rem] text-cusOrange font-serif tracking-[.4rem]">
            LABIO
          </h1>
        </div>
        <div className="flex-1 flex justify-center">
          <ul className="hidden text-[#000000bd] sm:flex gap-5 md:gap-3">
            <Link to={"/"}>
              <li className={`px-2 py-6 hover:-translate-y-1 ease-out duration-200 cursor-pointer ${page === 'Home' && 'text-cusOrange'} font-roboto font-medium flex items-center tracking-wide`}>
                <span className="hidden md:block">Home</span>
                <span className="block md:hidden">
                  <HomeIcon sx={{ fontSize: "1.3rem", opacity: ".87" }} />
                </span>
              </li>
            </Link>
            <Link to={"/events"}>
              <li className={`px-2 py-6 hover:-translate-y-1 ease-out duration-200 cursor-pointer ${page === 'Events' && 'text-cusOrange'} font-roboto font-medium flex items-center tracking-wide`}>
                <span className="hidden md:block">Events</span>
                <span className="block md:hidden">
                  <CalendarMonthIcon
                    sx={{ fontSize: "1.26rem", opacity: ".87" }}
                  />
                </span>
              </li>
            </Link>
            <Link to={"/category"}>
              <li className={`px-2 py-6 hover:-translate-y-1 ease-out duration-200 cursor-pointer ${page === 'Category' && 'text-cusOrange'} font-roboto font-medium flex items-center tracking-wide`}>
                <span className="hidden md:block">Category</span>
                <span className="block md:hidden">
                  <LeaderboardIcon
                    sx={{ fontSize: "1.3rem", opacity: ".87" }}
                  />
                </span>
              </li>
            </Link>
            <Link to={"/about"}>
              <li className={`px-2 py-6 hover:-translate-y-1 ease-out duration-200 cursor-pointer ${page === 'About' && 'text-cusOrange'} font-roboto font-medium flex items-center tracking-wide`}>
                <span className="hidden md:block">About us</span>
                <span className="block md:hidden">
                  <InfoIcon sx={{ fontSize: "1.24rem", opacity: ".87" }} />
                </span>
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className={`px-2 py-6 hover:-translate-y-1 ease-out duration-200 cursor-pointer ${page === 'Contact' && 'text-cusOrange'} font-roboto font-medium flex items-center tracking-wide`}>
                <span className="hidden md:block">Contact</span>
                <span className="block md:hidden">
                  <PhoneIcon sx={{ fontSize: "1.3rem", opacity: ".87" }} />
                </span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex-4 gap-4 flex items-center">
          <Link to={"/profile"}>
            <button className={`duration-100 ${page === 'Profile' && 'text-cusOrange'} ease-out active:scale-[.95]`}>
              <PersonIcon sx={{ fontSize: "1.65rem", opacity: ".8" }} />
            </button>
          </Link>
          <button
            onClick={() => Navigate("/login")}
            className="font-[300] font-inter text-[.85rem] border-[#53515130] bg-white text-cusOrange border-2 p-[.46rem]"
          >
            Login / Register
          </button>
        </div>
      </div>
      <div className="w-full sm:hidden flex items-center justify-center overflow-hidden">
        <ul className="flex w-full items-center justify-center gap-1 z-30 bg-white text-[#000000bd]">
          <Link to={"/"}>
            <li className={`px-2 py-4 hover:-translate-y-1 ease-out duration-200 ${page === 'Home' && 'text-red-600'} cursor-pointer font-roboto font-medium flex items-center tracking-wide`}>
              Home
            </li>
          </Link>
          <Link to={"/events"}>
            <li className={`px-2 py-4 hover:-translate-y-1 ease-out duration-200 ${page === 'Events' && 'text-red-600'} cursor-pointer font-roboto font-medium flex items-center tracking-wide`}>
              Events
            </li>
          </Link>
          <Link to={"/category"}>
            <li className={`px-2 py-4 hover:-translate-y-1 ease-out duration-200 ${page === 'Category' && 'text-red-600'} cursor-pointer font-roboto font-medium flex items-center tracking-wide`}>
              Category
            </li>
          </Link>
          <Link to={"/about"}>
            <li className={`px-2 py-4 hover:-translate-y-1 ease-out duration-200 ${page === 'About' && 'text-red-600'} cursor-pointer font-roboto font-medium flex items-center tracking-wide`}>
              About
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className={`px-2 py-4 hover:-translate-y-1 ease-out duration-200 ${page === 'Contact' && 'text-red-600'} cursor-pointer font-roboto font-medium flex items-center tracking-wide`}>
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </main>
  );
};

export default Header;
