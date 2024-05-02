import React from "react";
import Labio from "../../../assets/labio.png";

const ProfilePicSection = () => {
  return (
    <div className="w-full h-auto">
      <div className="profile_bg w-full h-52"></div>
      <div className="w-full flex  flex-col  h-44 relative">
        <img
          src={Labio}
          className="border-4 md:w-40 md:h-40 w-32 h-32 rounded-[10rem] absolute -top-20 ml-6 md:ml-12 border-white "
          alt=""
        />
         <div className="w-auto absolute md:ml-56 ml-40 flex h-[3rem] items-center">
                <div className="my-4 p-2 px-4 bg-cusOrange text-white font-poppins font-medium text-[.7rem] rounded-sm">
                  CHOOSE FILE
                </div>
                <input className="absolute opacity-0 w-full"
                 type="file" encType="multipart/form-data"
                 name="foodImg"/>
              </div>
        <h3 className="mt-16 ml-11 md:mt-24 md:ml-16 text-[1.3rem]  font-inter font-bold">
          Labeeb ct
        </h3>
        <h3 className="mt-2 ml-11 md:mt-2 md:ml-16 text-[.9rem] font-roboto">
          8590471530
        </h3>
        <h3 className="mt-2 ml-11 md:mt-2 md:ml-16 text-[.9rem] font-roboto">
          ctlabeebthaliyil@gmail.com
        </h3>
      </div>
    </div>
  );
};

export default ProfilePicSection;
