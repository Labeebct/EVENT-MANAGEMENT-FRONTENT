import React from "react";
import Labio from "../../../assets/labio.png";

const ProfilePicSection = ({ role, profile }) => {
  return (
    <div className="w-full h-auto">
      <div
        className={` ${
          role == "user" ? "user_profile_bg" : "agent_profile_bg"
        }   w-full h-52`}
      ></div>
      <div className="w-full flex pb-9  flex-col  h-auto relative">
        <img
          src={`http://localhost:8082/${profile.profile}`}
          className="border-4 md:w-40 md:h-40 w-32 h-32 rounded-[10rem] absolute -top-20 ml-6 md:ml-12 border-white "
          alt=""
        />

        <h3 className="mt-16 ml-6 md:mt-24 md:ml-14 text-[1.3rem] capitalize font-inter font-bold">
          {profile.fullname}
        </h3>
        <h3 className="mt-2 ml-6 md:mt-2 md:ml-14 text-[.9rem] font-roboto">
          {profile.mobilenum}
        </h3>
        <h3 className="mt-2 ml-6 md:mt-2 md:ml-14 text-[.9rem] font-roboto">
          ctlabeebthaliyil@gmail.com
        </h3>
        <div className="">
          <h3 className="mt-2 ml-6 capitalize md:mt-2 md:ml-14 text-[.9rem] font-roboto">
            DOB : {profile.dob}
          </h3>
          <h3 className="mt-2 ml-6 capitalize md:mt-2 md:ml-14 text-[.9rem] font-roboto">
            Occupation : {profile.occupation}
          </h3>
          <h3 className="mt-2 ml-6 capitalize md:mt-2 md:ml-14 text-[.9rem] font-roboto">
            State : {profile.state}
          </h3>
          <h3 className="mt-2 ml-6 capitalize md:mt-2 md:ml-14 text-[.9rem] font-roboto">
            District : {profile.district}
          </h3>
          <h3 className="mt-2 ml-6 capitalize md:mt-2 md:ml-14 text-[.9rem] font-roboto">
            Pincode : {profile.pincode}
          </h3>
          <h3 className="mt-2 ml-6 capitalize md:mt-2 md:ml-14 text-[.9rem] font-roboto">
            City : {profile.city}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicSection;
