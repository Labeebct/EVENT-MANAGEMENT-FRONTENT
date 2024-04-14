import React from 'react'
import LeftBar from '../components/admin/common/LeftBar'
import Header from '../components/admin/common/Header'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='h-screen flex w-full'>
     <LeftBar />
     <div className='h-full w-full'>
        <Header  />
        <div className='h-[calc(100vh-4rem)]  overflow-y-auto  w-full'>
        <Outlet/>
        </div>
     </div>
    </div>
  )
}

export default AdminLayout