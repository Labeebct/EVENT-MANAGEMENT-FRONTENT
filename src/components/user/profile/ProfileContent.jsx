import React, { useEffect, useState } from "react";
import ProfilePicSection from "./ProfilePicSection";
import axiosInstance from "../../../instance/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProfileContent = ({ role }) => {
  const Navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const dispatch = useDispatch();

  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("jwt"));

  useEffect(() => {
    !loggedIn && Navigate("/login");
  }, [Navigate]);

  useEffect(() => {
    const fetchProfileDatas = async () => {
      try {
        dispatch({ type: "loading", payload: true });
        const response = await axiosInstance.get("/profile");
        dispatch({ type: "loading", payload: false });
        const { data, status } = response;

        if (status == 200) {
          setProfile(data.profile);
        }
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;
          if (status == 404) {
            Navigate("/404");
          } else if (status == 500) {
            Navigate("/500");
          }
        } else {
          console.log("Error in fetch profile");
          Navigate("/500");
        }
      }
    };

    fetchProfileDatas();
  }, []);

  return (
    <>
      <ProfilePicSection role={role} profile={profile} />
    </>
  );
};

export default ProfileContent;
