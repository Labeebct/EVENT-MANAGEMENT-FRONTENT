import React from "react";
import SideBar from "../../components/auth/SideBar";
import LoginFrame from "../../components/adminAuth/LoginFrame";

const Login = () => {
  return (
    <main className="w-screen h-screen flex">
      <SideBar role={'admin'} />
      <div className="h-full flex-1 bg-slate-200 admin_auth_bg w-[calc(100vw-320px)] flex justify-center items-center">
        <LoginFrame />
      </div>
    </main>
  );
};

export default Login;
