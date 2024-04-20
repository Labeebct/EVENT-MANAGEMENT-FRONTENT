import React from 'react'
import FrogetPassswordFrame from '../../components/adminAuth/FrogetPassswordFrame'
import SideBar from '../../components/auth/SideBar';

const ForgetPassword = () => {
  return (
    <main className="w-screen h-screen flex">
      <SideBar role={'admin'} />
      <div className="h-full flex-1 bg-slate-200 admin_auth_bg w-[calc(100vw-320px)] flex justify-center items-center">
      <FrogetPassswordFrame />
      </div>
    </main>
  );
}

export default ForgetPassword