import { useEffect, useState } from "react";
import EyePassword from "../shared/EyePassword";
import timeoutLoading from "../../config/timeoutLoading";
import BasicAlert from "../shared/BasicAlert";
import axiosInstance from "../../instance/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPasswordFrame = () => {
  //Loading
  timeoutLoading();

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const Navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setEmail(queryParams.get("email"));
  }, [location.search]);

  const [error, setError] = useState("");
  const [succes, setSuccess] = useState(false);

  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { oldPassword, newPassword, confirmPassword } = form;

    if (!oldPassword || !newPassword || !confirmPassword)
      setError("Please fill all fields");
    else if (!passwordRegex.test(newPassword))
      setError("Please provide a strong password");
    else if (newPassword != confirmPassword) setError("Password mismatch");
    else {
      try {
        //Sending api reqeust
        const response = await axiosInstance.post(
          `/admin/reset-password?email=${email}`,
          {
            oldPassword,
            newPassword,
            confirmPassword,
          }
        );

        const { data, status } = response;

        //Redrecting to Login page after successfull password reset
        if (status == 200) {
          setError(data.msg);
          setSuccess(true);
          setTimeout(() => Navigate("/admin/login"), 800);
        }
      } catch (error) {
        if (error.response) {
          //Destructuring data and status from error response
          const { data, status } = error.response;

          if (
            status == 422 ||
            status == 409 ||
            status == 401 ||
            status == 404
          ) {
            setError(data.msg);
          } else if (500) {
            Navigate("/500");
            console.log("Invalid responce from server", error);
          }
        } else {
          Navigate("/500");
          console.log("No response from server", error);
        }
      }
    }
  };

  if (error) setTimeout(() => setError(""), 2000);

  return (
    <div className="w-[35%] min-w-[290px] bg-white  flex flex-col items-center translate-y-5 h-auto pb-2 rounded-md box_shadow_black">
      <h3 className="text-[2rem] font-playfair mt-7">Reset password</h3>
      <form
        onSubmit={handleSubmit}
        className="w-full text-black h-full flex  flex-col items-center  px-[2rem] py-9 gap-4 flex-1"
      >
        <div className="w-full h-auto flex flex-col mt-5 gap-1">
          <label
            htmlFor="email"
            className="font-roboto text-[gray] text-[.8rem]"
          >
            Old Password
          </label>
          <EyePassword
            handleChange={handleChange}
            name={"oldPassword"}
            value={form.oldPassword}
          />
          <label
            htmlFor="email"
            className="font-roboto mt-3 text-[gray] text-[.8rem]"
          >
            New Password
          </label>
          <EyePassword
            handleChange={handleChange}
            name={"newPassword"}
            value={form.newPassword}
          />
          <label
            htmlFor="email"
            className="font-roboto mt-3 text-[gray] text-[.8rem]"
          >
            Confirm Password
          </label>
          <EyePassword
            handleChange={handleChange}
            name={"confirmPassword"}
            value={form.confirmPassword}
          />
        </div>
        <p className="text-center mt-1 text-[.7rem] mb-2 font-roboto opacity-70">
          Password should contain minimum 8 character with one capital letter,
          one number and a special character
        </p>
        {error && (
          <BasicAlert type={succes ? "success" : "error"} msg={error} />
        )}
        <button
          type="submit"
          className="w-full py-2 mt-2 font-roboto bg-cusOrange tracking-wider active:scale-[.96] ease-out duration-100 top-[21rem] right-24 text-white cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordFrame;
