import SideBar from '../../components/auth/SideBar'
import LoginFrame from '../../components/auth/LoginFrame'

const Login = () => {
  return (
    <main className='w-screen h-screen flex'>
     <SideBar role={'user'} />
     <div className='h-full flex-1 auth_bg w-[calc(100vw-320px)] flex justify-center items-center'>
     <LoginFrame />
     </div>
    </main>
  )
}

export default Login