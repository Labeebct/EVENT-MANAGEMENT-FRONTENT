import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../instance/axiosInstance";
import EyePassword from "../shared/EyePassword";
import { useState } from "react";

function SignupFrame() {
  //Regex for email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //Regex for password
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const Navigate = useNavigate();

  //Creating state for form and asssigning blank value
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [labelError, setLabelError] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  //Function for saving onchange values to form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    switch (name) {
      case "username":
        !value || value.length > 4
          ? setLabelError({ ...labelError, [name]: "" })
          : null;
        break;
      case "email":
        !value || emailRegex.test(value)
          ? setLabelError({ ...labelError, [name]: "" })
          : null;
        break;
      case "password":
        !value || passwordRegex.test(value)
          ? setLabelError({ ...labelError, [name]: "" })
          : null;
        break;
      case "confirmpassword":
        !value || form.password == value
          ? setLabelError({ ...labelError, [name]: "" })
          : null;
        break;
    }
  };

  //Validating datas on blur event
  const handleBlur = (e) => {
    const { name, value } = e.target;
    let err;
    switch (name) {
      case "username":
        err =
          value.length > 0 &&
          value.length < 4 &&
          "Username should be more than 4 characters";
        break;
      case "email":
        err =
          value.length > 0 && !emailRegex.test(value) && "Invalid email format";
        break;
      case "password":
        err =
          value.length > 0 &&
          !passwordRegex.test(value) &&
          "Please provide a strong password";
        break;
      case "confirmpassword":
        err = value.length > 0 && form.password != value && "Password mismatch";
        break;
    }
    setLabelError({ ...labelError, [name]: err });
  };

  //Sending data to backend by api
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errorField = [
        "username",
        "email",
        "password",
        "confirmpassword",
      ].find((fieldName) => labelError[fieldName]);
      if (
        form.username.trim() == "" ||
        form.email.trim() == "" ||
        form.password.trim() == "" ||
        form.confirmpassword.trim() == ""
      ) {
        setError("Please fill all fields");
        return;
      } else if (errorField) {
        setError(labelError[errorField]);
        return;
      }

      //Sending api request
      try {
        const response = await axiosInstance.post("/signup", form);
        const { data, status } = response;
        if (status == 200) {
          setError(data.msg);
          setSuccess(true);
          setTimeout(() => Navigate(`/verify-otp/signup/${data.email}`), 800);
        }
      } catch (error) {
        if (error.response) {
          const { status, data } = error.response;
          if (status == 409 || status == 401) {
            setError(data.msg);
            setTimeout(() => Navigate("/login"), 800);
          } else if (status == 422) setError(data.msg);
          else if (status == 500) Navigate("/500");
        } else {
          Navigate("/500");
        }
      }
    } catch (error) {
      console.log("Error in handle submit");
    }
  };

  error && setTimeout(() => setError(""), 2000);

  return (
    <div className="w-[35%] min-w-[290px] backdrop-blur-[.1rem]  bg-[#ffffff96]  flex flex-col items-center translate-y-5 h-[620px] rounded-md box_shadow_black">
      <h3 className="text-[2rem] font-playfair mt-7">Signup</h3>
      <form
        onSubmit={handleSubmit}
        className="w-full text-black h-full flex  flex-col items-center  px-[2rem] py-4 gap-4 flex-1"
      >
        <div className="w-full h-auto flex flex-col mt-8 gap-2">
          <label
            htmlFor="email"
            className={`font-roboto ${
              labelError.username && "text-red-600"
            } text-[gray] text-[.75rem]`}
          >
            {labelError.username ? labelError.username : "UserName"}
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.username}
            spellCheck={false}
            type="text"
            name="username"
            className="h-[2.5rem] border outline-none px-3 text-[.9rem] border-[#39393948] drop-shadow-sm"
          />
          <label
            htmlFor="email"
            className={`font-roboto ${
              labelError.email && "text-red-600"
            } text-[gray] text-[.75rem]`}
          >
            {labelError.email ? labelError.email : "Email"}
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.email}
            spellCheck={false}
            type="text"
            name="email"
            className="h-[2.5rem] border outline-none px-3 text-[.9rem] border-[#39393948] drop-shadow-sm"
          />
          <label
            htmlFor="email"
            className={`font-roboto ${
              labelError.password && "text-red-600"
            } text-[gray] text-[.75rem]`}
          >
            {labelError.password ? labelError.password : "Password"}
          </label>
          <EyePassword
            handleChange={handleChange}
            name={"password"}
            handleBlur={handleBlur}
            value={form.password}
          />
          <label
            htmlFor="email"
            className={`font-roboto ${
              labelError.confirmpassword && "text-red-600"
            } text-[gray] text-[.75rem]`}
          >
            {labelError.confirmpassword
              ? labelError.confirmpassword
              : "Confirm Password"}
          </label>
          <EyePassword
            handleChange={handleChange}
            name={"confirmpassword"}
            handleBlur={handleBlur}
            value={form.confirmpassword}
          />
        </div>
        <p className="text-[.8rem] text-[gray] font-sans mt-2">
          Already Have an account ?
          <Link to="/login" className="text-blue-800 pl-1">
            Login.
          </Link>
        </p>
        <p
          className={`${
            success ? "text-green-600" : "text-red-500"
          } text-center mt-5`}
        >
          {error}
        </p>
        <button
          type="submit"
          className="w-full py-2 mt-4 font-roboto bg-cusOrange tracking-wider active:scale-[.96] ease-out duration-100 top-[21rem] right-24 text-white cursor-pointer"
        >
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupFrame;
