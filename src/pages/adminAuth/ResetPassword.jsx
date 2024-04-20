import React from 'react'
import LoginFrame from '../../components/adminAuth/LoginFrame';
import SideBar from '../../components/auth/SideBar';
import ResetPasswordFrame from '../../components/adminAuth/ResetPasswordFrame';

const ResetPassword = () => {
    return (
        <main className="w-screen h-screen flex">
          <SideBar role={'admin'} />
          <div className="h-full flex-1 bg-slate-200 admin_auth_bg w-[calc(100vw-320px)] flex justify-center items-center">
            <ResetPasswordFrame />
          </div>
        </main>
      );
}

export default ResetPassword
