import { useNavigate, Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { confirmAlert } from "react-confirm-alert";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import "react-confirm-alert/src/react-confirm-alert.css";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Header = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);
  const userLoggedIn = localStorage.getItem("jwt");

  useEffect(() => {
    userLoggedIn && setLoggedIn(true);
  }, []);

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

  const handleLogout = () => {
    if (loggedIn) {
      confirmAlert({
        title: "Confirm to LOGOUT",
        message: "Are you sure you want to Logout?",
        titleClassName: "text-xl font-bold text-green-500",
        buttons: [
          {
            label: "Yes",
            style: { backgroundColor: "#D80032" },
            className: "text-white font-bold py-2 px-4 rounded mr-2",
            onClick: async () => {
              dispatch({ type: "removeJwt", payload: "user" });
            },
          },
          {
            label: "No",
            style: { backgroundColor: "#65B741" },
            className:
              "bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2",
          },
        ],
        overlayClassName:
          "fixed inset-0 bg-[black] bg-opacity-50 flex justify-center items-center",
      });
    } else {
      Navigate("/login");
    }
  };

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
              <li
                onClick={() => setPage("Home")}
                className={`px-2 py-6 hover:-translate-y-[.15rem] ease-out duration-200 cursor-pointer ${
                  page === "Home" && "text-cusOrange font-semibold"
                } font-roboto flex items-center tracking-wide`}
              >
                <span className="hidden md:block">Home</span>
                <span className="block md:hidden">
                  <HomeIcon sx={{ fontSize: "1.3rem", opacity: ".87" }} />
                </span>
              </li>
            </Link>
            <Link to={"/events"}>
              <li
                onClick={() => setPage("Events")}
                className={`px-2 py-6 hover:-translate-y-[.15rem] ease-out duration-200 cursor-pointer ${
                  page === "Events" && "text-cusOrange font-semibold"
                } font-roboto flex items-center tracking-wide`}
              >
                <span className="hidden md:block">Events</span>
                <span className="block md:hidden">
                  <CalendarMonthIcon
                    sx={{ fontSize: "1.26rem", opacity: ".87" }}
                  />
                </span>
              </li>
            </Link>
            <Link to={"/category"}>
              <li
                onClick={() => setPage("Category")}
                className={`px-2 py-6 hover:-translate-y-[.15rem] ease-out duration-200 cursor-pointer ${
                  page === "Category" && "text-cusOrange font-semibold"
                } font-roboto flex items-center tracking-wide`}
              >
                <span className="hidden md:block">Category</span>
                <span className="block md:hidden">
                  <LeaderboardIcon
                    sx={{ fontSize: "1.3rem", opacity: ".87" }}
                  />
                </span>
              </li>
            </Link>
            <Link to={"/about"}>
              <li
                onClick={() => setPage("About")}
                className={`px-2 py-6 hover:-translate-y-[.15rem] ease-out duration-200 cursor-pointer ${
                  page === "About" && "text-cusOrange font-semibold"
                } font-roboto flex items-center tracking-wide`}
              >
                <span className="hidden md:block">About us</span>
                <span className="block md:hidden">
                  <InfoIcon sx={{ fontSize: "1.24rem", opacity: ".87" }} />
                </span>
              </li>
            </Link>
            <Link to={"/contact"}>
              <li
                onClick={() => setPage("Contact")}
                className={`px-2 py-6 hover:-translate-y-[.15rem] ease-out duration-200 cursor-pointer ${
                  page === "Contact" && "text-cusOrange font-semibold"
                } font-roboto flex items-center tracking-wide`}
              >
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
            <button
              className={`duration-100 ${
                page === "Profile" && "text-cusOrange font-semibold"
              } ease-out active:scale-[.95]`}
            >
              <PersonIcon sx={{ fontSize: "1.65rem", opacity: ".8" }} />
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="font-[300] font-inter text-[.85rem] border-[#53515130] bg-white text-cusOrange border-2 p-[.46rem]"
          >
            {loggedIn ? (
              <>
                Logout <PowerSettingsNewIcon sx={{ fontSize: 19 }} />
              </>
            ) : (
              "Login / Register"
            )}
          </button>
        </div>
      </div>
      <div className="w-full sm:hidden flex items-center justify-center overflow-hidden">
        <ul className="flex w-full items-center justify-center gap-1 px-6 z-30 bg-white text-[#000000bd]">
          <Link to={"/"}>
            <li
              className={`px-2 py-4 hover:-translate-y-[.15rem] ease-out duration-200 ${
                page === "Home" && "text-cusOrange font-semibold"
              } cursor-pointer font-roboto flex items-center tracking-wide`}
            >
              Home
            </li>
          </Link>
          <Link to={"/events"}>
            <li
              className={`px-2 py-4 hover:-translate-y-[.15rem] ease-out duration-200 ${
                page === "Events" && "text-cusOrange font-semibold"
              } cursor-pointer font-roboto flex items-center tracking-wide`}
            >
              Events
            </li>
          </Link>
          <Link to={"/category"}>
            <li
              className={`px-2 py-4 hover:-translate-y-[.15rem] ease-out duration-200 ${
                page === "Category" && "text-cusOrange font-semibold"
              } cursor-pointer font-roboto flex items-center tracking-wide`}
            >
              Category
            </li>
          </Link>
          <Link to={"/about"}>
            <li
              className={`px-2 py-4 hover:-translate-y-[.15rem] ease-out duration-200 ${
                page === "About" && "text-cusOrange font-semibold"
              } cursor-pointer font-roboto flex items-center tracking-wide`}
            >
              About
            </li>
          </Link>
          <Link to={"/contact"}>
            <li
              className={`px-2 py-4 hover:-translate-y-[.15rem] ease-out duration-200 ${
                page === "Contact" && "text-cusOrange font-semibold"
              } cursor-pointer font-roboto flex items-center tracking-wide`}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </main>
  );
};

export default Header;
