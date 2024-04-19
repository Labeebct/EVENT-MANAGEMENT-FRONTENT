import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import EyePassword from "../shared/EyePassword";
import axiosinstance from "../../instance/axiosInstance";
import BasicAlert from "../shared/BasicAlert";

const LoginFrame = () => {

  //Regex for email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const Navigate = useNavigate();

  //Formdata for login
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  //Function for saving usseer datas in state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = form;
      if (!email || !password) {
        setError("Please fill all fields");
      } else if (!emailRegex.test(email)) {
        setError("Invalid email format");
      } else if (password.length < 8) {
        setError("Password should contain more than 8");
      } else {
        try {
          //Sending request to backend
          const response = await axiosinstance.post("/login", {
            email,
            password,
          });
          const { data, status } = response;
          //Redirecting to home page after successfull login
          if (status == 200) {
            setError(data.msg);
            setLoginSuccess(true);
            localStorage.setItem("token", data.token);
            setTimeout(() => Navigate("/"), 300);
          }
        } catch (error) {
          if (error.response) {
            //Destructuring data and status from error reponse
            const { data, status } = error.response;
            if (
              status == 422 ||
              status == 401 ||
              status == 404 ||
              status == 503
            ) {
              setError(data.msg);
            } else if (status === 403) {
              //if user exist and not verified
              setError(data.msg);
              setTimeout(
                () => Navigate(`/verify-otp/signup/${data.email}`),
                800
              );
            } else if (status == 500) {
              //If any malfunction occurs
              Navigate("/500");
              console.log("Invalid response", error);
            }
          } else {
            Navigate("/500");
            console.log("Error in login form submition", error);
          }
        }
      }
    } catch (error) {
      console.log("Error in login handle submit", error);
    }
  };

  if (error) setTimeout(() => setError(""), 2000);

  return (
    <div className="w-[35%] min-w-[290px] bg-white  flex flex-col items-center translate-y-5 h-[510px] rounded-md box_shadow_black">
      <h3 className="text-[2rem] font-playfair mt-7">Login</h3>
      <form
        onSubmit={handleSubmit}
        className="w-full text-black h-full flex  flex-col items-center  px-[2rem] py-9 gap-4 flex-1"
      >
        <div className="w-full h-auto flex flex-col mt-8 gap-2">
          <label
            htmlFor="email"
            className="font-roboto text-[gray] text-[.75rem]"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            spellCheck={false}
            value={form.email}
            type="text"
            name="email"
            className="h-[2.5rem] border outline-none px-3 text-[.9rem] border-[#39393948] drop-shadow-sm"
          />
          <label
            htmlFor="email"
            className="font-roboto  text-[gray] text-[.75rem]"
          >
            Password
          </label>
          <EyePassword
            handleChange={handleChange}
            name={"password"}
            value={form.password}
          />
          <Link
            to="/forget-password"
            className="text-[.72rem] text-blue-800 text-end mt-1 mr-1 font-roboto"
          >
            Forget Password ?
          </Link>
        </div>
        <p className="text-[.8rem] text-[gray] font-sans mt-2">
          Dont Have an account ?
          <Link to="/admin/signup" className="text-blue-800 pl-1">
            Signup.
          </Link>
        </p>
        {error && (
          <BasicAlert type={loginSuccess ? "success" : "error"} msg={error} />
        )}
        <button
          type="submit"
          className="w-full py-2 mt-2 font-roboto bg-cusOrange tracking-wider active:scale-[.96] ease-out duration-100 top-[21rem] right-24 text-white cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginFrame