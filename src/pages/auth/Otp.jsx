import OtpFrame from "../../components/auth/OtpFrame"
import SideBar from "../../components/auth/SideBar"

const Otp = () => {
    return (
        <main className='w-screen h-screen flex'>
         <SideBar />
         <div className='h-full flex-1 auth_bg w-[calc(100vw-320px)] flex justify-center items-center'>
         <OtpFrame />
         </div>
        </main>
      )
}

export default Otp