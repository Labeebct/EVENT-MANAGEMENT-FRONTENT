import React from 'react'
import CompleteProfileContent from '../../components/shared/CompleteProfileContent';
import SideBar from '../../components/auth/SideBar';
import { useLocation } from 'react-router-dom';

const CompleteProfile = () => {

    const location = useLocation()
    const role = location.pathname === '/complete-profile' ? 'user' : 'admin'
    return (
        <main className="w-screen h-screen flex">
          <SideBar role={role} />
          <div className={`h-full flex-1 ${role == 'admin' ? 'bg-slate-200' : 'auth_bg'} w-[calc(100vw-320px)] flex justify-center items-center`}>
          <CompleteProfileContent />
          </div>
        </main>
      );
}

export default CompleteProfile