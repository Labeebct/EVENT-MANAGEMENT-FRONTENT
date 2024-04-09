import { Link } from "react-router-dom"
import VisibilityIcon from '@mui/icons-material/Visibility';

const LoginFrame = () => {
  return (
    <div className="w-[35%] min-w-[290px] backdrop-blur-[.1rem]  bg-[#ffffff96]  flex flex-col items-center translate-y-5 h-[520px] rounded-md box_shadow_black">
      <h3 className="text-[2rem] font-playfair mt-7">Login</h3>
      <form
          className="w-full text-black h-full flex  flex-col items-center  px-[2rem] py-9 gap-4 flex-1"
        >
          <div className="w-full h-auto flex flex-col mt-8 gap-2">
            <label
              htmlFor="email"
              className='font-roboto text-[gray] text-[.75rem]'
            >
            Email
            </label>
            <input
              spellCheck={false}
              type="text"
              name="email"
              className="h-[2.5rem] border outline-none px-3 text-[.9rem] border-[#39393948] drop-shadow-sm"
            />
            <label
              htmlFor="email"
              className='font-roboto  text-[gray] text-[.75rem]'
            >
              Password
            </label>
            <div className="h-[2.5rem] relative border outline-none  text-[.9rem] border-[#39393948] drop-shadow-sm">
            <input
              type="password"
              name="password"
              maxLength={16}
              className="h-full w-full border-none outline-none px-3 text-[.9rem] border-[#39393948] drop-shadow-sm"
            />
            <span className="absolute right-2 top-2"><VisibilityIcon sx={{opacity:'.7' , fontSize:'1.15rem' , cursor:'pointer'}} /></span>
            </div>
            <Link
              to="/forget-password"
              className="text-[.72rem] text-blue-800 text-end mt-1 mr-1 font-roboto"
            >
              Forget Password ?
            </Link>
          </div>
          <p className="text-[.8rem] text-[gray] font-sans mt-2">
            Dont Have an account ? 
            <Link to="/signup" className="text-blue-800 pl-1">
               Signup.
            </Link>
          </p>
          <p
            className='text-center text- text-[.9rem] text-red-600'
          >
            Incorrect password
          </p>
          <button
            type="submit"
            className="w-full py-2 mt-4 font-roboto bg-cusOrange tracking-wider active:scale-[.96] ease-out duration-100 top-[21rem] right-24 text-white cursor-pointer"
          >
            Login
          </button>
        </form>
    </div>
  ) 
}

export default LoginFrame