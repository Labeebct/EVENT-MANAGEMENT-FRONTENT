import React, { useEffect, useState } from "react";
import LeftBar from "../components/admin/common/LeftBar";
import Header from "../components/admin/common/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

const AdminLayout = () => {
  const [authenticate, setAuthenticate] = useState(false);
  const token = useSelector((state) => state.auth);
  const localStorageToken = localStorage.getItem("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      if (localStorageToken) {
        const admin = jwtDecode(localStorageToken);
        if (admin.role == "admin") {
          setAuthenticate(true);
          return;
        } else {
          navigate("/login");
          return;
        }
      } else {
        navigate("/admin/login");
        return;
      }
    } else {
      const admin = jwtDecode(token);
      if (admin.role == "admin") {
        setAuthenticate(true);
        return;
      }
    }
  }, []);

  return (
    authenticate && (
      <div className="h-screen flex w-full">
        <LeftBar />
        <div className="h-full w-full">
          <Header />
          <div className="h-[calc(100vh-4rem)]  overflow-y-auto bg-slate-200  w-full">
            <Outlet />
          </div>
        </div>
      </div>
    )
  );
};

export default AdminLayout;
