import ForgetPassFrame from "../../components/auth/ForgetPassFrame"
import SideBar from "../../components/auth/SideBar"

const ForgetPassword = () => {
    return (
        <main className='w-screen h-screen flex'>
         <SideBar />
         <div className='h-full flex-1 auth_bg w-[calc(100vw-320px)] flex justify-center items-center'>
         <ForgetPassFrame />
         </div>
        </main>
      )
}

export default ForgetPassword