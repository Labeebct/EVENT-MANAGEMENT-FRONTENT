import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const AuthPrivate = () => {
  const token = useSelector((state) => state.auth);
  const localStorageToken = localStorage.getItem("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    if (token || localStorageToken) {
      console.log('have token');
      const admin = jwtDecode(localStorageToken);
      if (admin.role == "admin") {
        console.log('admin token');
        navigate("/admin/dashboard");
        return;
      } else return
    }
  }, []);

  return <Outlet />;
};

export default AuthPrivate;
