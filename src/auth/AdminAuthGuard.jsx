import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function AuthGuard() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth);
  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
    }
  }, [token, navigate]);

  return <Outlet />;
}

export default AuthGuard;
