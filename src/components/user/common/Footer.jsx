import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <div className="w-full h-auto flex md:flex-row flex-col  p-10 bg-cusBlue">
      <div className="w-[30%] min-w-[230px] h-full mx-auto flex flex-col flex-1 md:items-start items-center justify-center">
        <h1 className="font-[600] text-[2rem] text-cusOrange font-serif tracking-[.4rem]">
          LABIO
        </h1>
        <h3 className="font-cagliostro text-gray-600 text-center md:text-start">
          The Innovative future
        </h3>
        <h4 className="font-roboto text-[.7rem] mt-6 md:mt-20 text-center">
          © 2024 Something. All rights reserved.
        </h4>
      </div>
      <div className="md:w-[70%] w-full h-full flex mx-auto flex-wrap  py-4 md:py-0">
        <div className="flex-2 min-w-[210px] h-full mx-10">
          <h1 className="p-2 text-[1.3rem] font-inter text-center md:text-start font-[500] text-[#000000ae]">
            About
          </h1>
          <h5 className="font-inter flex justify-center w-98 text-[.8rem] text-center md:text-start py-5">
            1st floor, #1313 HiLITE Business Park Thondayad <br /> Bypass, Calicut
          </h5>
        </div>
        <div className="flex-1 min-w-[210px] h-full">
          <h1 className="p-2 text-[1.3rem] text-center md:text-start font-inter font-[500] text-[#000000ae]">
            Contact us
          </h1>
          <ul className="my-5">
            <li className="p-2 flex text-center justify-center md:justify-start items-center w-full gap-1 text-[.8rem]">
              <LocalPhoneIcon
                sx={{ fontSize: "1rem", color: "black", opacity: ".9" }}
              />
              <p>+91 8590471530</p>
            </li>
            <li className="p-2 flex items-center justify-center md:justify-start w-full gap-1 text-[.8rem]">
              <MailOutlineIcon
                sx={{ fontSize: "1rem", color: "black", opacity: ".8" }}
              />
              <p>ctlabeebthaliyil@gmail.com</p>
            </li>
            <li className="p-2 flex items-center justify-center md:justify-start w-full gap-1 text-[.8rem]">
              <InstagramIcon
                sx={{ fontSize: "1rem", color: "black", opacity: ".8" }}
              />
              <p>Labeeb ct</p>
            </li>
          </ul>
        </div>
        <div className="flex-1 min-w-[210px] h-full">
          <h1 className="p-2 text-[1.3rem] text-center md:text-start font-inter font-[500] text-[#000000ae]">
            Follow us
          </h1>
          <ul className="flex gap-2 py-3 justify-center md:justify-start pl-2">
            <li className="pr-1 cursor-pointer">
              <InstagramIcon
                sx={{ fontSize: "1.4rem", color: "black", opacity: ".6" }}
              />
            </li>
            <li className="pr-1 cursor-pointer">
              <WhatsAppIcon
                sx={{ fontSize: "1.4rem", color: "black", opacity: ".6" }}
              />
            </li>
            <li className="pr-1 cursor-pointer">
              <XIcon
                sx={{ fontSize: "1.3rem", color: "black", opacity: ".6" }}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
