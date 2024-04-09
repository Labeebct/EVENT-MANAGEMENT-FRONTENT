import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';

const Header = () => {
  const Navigate = useNavigate();

  return (
    <main className="w-full block items-center h-[4.5rem]">
    <div className="w-full flex items-center h-[4.5rem] bg-cusBlue px-8">
      <div className="flex">
        <h1 className="font-[600] text-[1.5rem] text-cusOrange font-serif tracking-[.4rem]">
          LABIO
        </h1>
      </div>
      <div className="flex-1 flex justify-center">
        <ul className="hidden sm:flex gap-5 md:gap-3">
          <li className="px-2 py-6 hover:-translate-y-1 ease-out duration-100 cursor-pointer font-roboto font-medium flex items-center tracking-wide">
            <span className="hidden md:block">Home</span>
            <span className="block md:hidden"><HomeIcon sx={{fontSize:'1.3rem', opacity:'.87'}} /></span>
          </li>
          <li className="px-2 py-6 hover:-translate-y-1 ease-out duration-100 cursor-pointer font-roboto font-medium flex items-center tracking-wide">
            <span className="hidden md:block">Events</span>
            <span className="block md:hidden"><CalendarMonthIcon sx={{fontSize:'1.26rem', opacity:'.87'}} /></span>
          </li>
          <li className="px-2 py-6 hover:-translate-y-1 ease-out duration-100 cursor-pointer font-roboto font-medium flex items-center tracking-wide">   
            <span className="hidden md:block">Category</span>
            <span className="block md:hidden"><LeaderboardIcon sx={{fontSize:'1.3rem', opacity:'.87'}} /></span>
          </li>
          <li className="px-2 py-6 hover:-translate-y-1 ease-out duration-100 cursor-pointer font-roboto font-medium flex items-center tracking-wide">
            <span className="hidden md:block">About us</span>
            <span className="block md:hidden"><InfoIcon sx={{fontSize:'1.24rem', opacity:'.87'}} /></span>
          </li>
          <li className="px-2 py-6 hover:-translate-y-1 ease-out duration-100 cursor-pointer font-roboto font-medium flex items-center tracking-wide">
            <span className="hidden md:block">Contact</span>
            <span className="block md:hidden"><PhoneIcon sx={{fontSize:'1.3rem', opacity:'.87'}} /></span>
          </li>
        </ul>
      </div>
      <div className="flex-4">
        <button
          onClick={() => Navigate("/login")}
          className="font-[300] font-inter text-[.85rem] border-[#53515159] bg-white text-cusOrange border-2 p-[.46rem]"
        >
          Login / Register
        </button>
      </div>
    </div>
    <div className="w-full sm:hidden p-2 flex items-center justify-center">
      <ul className="flex gap-1 z-30">
          <li className="px-2 py-4 hover:-translate-y-1 ease-out duration-100 cursor-pointer font-roboto font-medium flex items-center tracking-wide">
             Home
          </li>
          <li className="px-2 py-4 hover:-translate-y-1 ease-out duration-100 cursor-pointer font-roboto font-medium flex items-center tracking-wide">
             Events
          </li>
          <li className="px-2 py-4 hover:-translate-y-1 ease-out duration-100 cursor-pointer font-roboto font-medium flex items-center tracking-wide">   
             Category
          </li>
          <li className="px-2 py-4 hover:-translate-y-1 ease-out duration-100 cursor-pointer font-roboto font-medium flex items-center tracking-wide">
             About
          </li>
          <li className="px-2 py-4 hover:-translate-y-1 ease-out duration-100 cursor-pointer font-roboto font-medium flex items-center tracking-wide">
             Contact
          </li>
        </ul>
    </div>
    </main>
 
  );
};

export default Header;
