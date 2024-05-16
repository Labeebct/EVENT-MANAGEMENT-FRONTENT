import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthUserAgentPrivate = () => {
  const [authenicate, setAuthenticate] = useState(
    !!localStorage.getItem("jwt")
  );

  return !authenicate ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default AuthUserAgentPrivate;
