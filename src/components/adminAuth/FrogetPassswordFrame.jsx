import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../instance/axiosInstance";
import BasicAlert from "../shared/BasicAlert";

const FrogetPassswordFrame = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const Navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email , secretkey } = e.target;
      if (!email.value.trim() || !secretkey.value.trim()) setMessage("Please fill all fields");
      else if (!emailRegex.test(email.value))
        setMessage("Invalid email format");
      else {
        try {
          const response = await axiosInstance.post("/admin/forget-password", {
            email: email.value,
            secretkey:secretkey.value
          });
          const { data, status } = response;

          if (status == 200) {
            setMessage(data.msg);
            setSuccess(true);
            setTimeout(() => Navigate(`/admin/reset-password?email=${data.email}`), 800);
          }
        } catch (error) {
          if (error.response) {
            //Destructuring data and status from error response
            const { data, status } = error.response;

            if (status == 422 || status == 404 || status == 401) {
              setMessage(data.msg);
            } else if (status == 500) {
              Navigate("/500");
              console.log("Invalid response", error);
            }
          } else {
            Navigate("/500");
            console.log("No response from the server", error);
          }
        }
      }
    } catch (error) {
      console.log("Error in forget password handlesubmit", error);
    }
  };

  if (message) setTimeout(() => setMessage(""), 2000);

  return (
    <div className="w-[35%] min-w-[290px] bg-white flex flex-col items-center translate-y-5 h-[540px] rounded-md box_shadow_black">
      <h3 className="text-[1.7rem] font-playfair mt-9">Forget password</h3>
      <h3 className="mt-7 font-roboto opacity-85 text-[.9rem] text-center px-10">
        Entered your registered email address and the secret key to reset the password.
      </h3>

      <form
        onSubmit={handleSubmit}
        className="w-full text-black h-full flex  flex-col items-center  px-[2rem] py-9 gap-4 flex-1"
      >
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="email"
            className="font-roboto text-[gray] text-[.75rem]"
          >
            Email
          </label>
          <input
            spellCheck={false}
            type="text"
            name="email"
            className="h-[2.5rem] border outline-none px-3 mb-2 text-[.9rem] border-[#39393948] drop-shadow-sm"
          />
          <label
            htmlFor="email"
            className={`font-roboto text-[gray] text-[.75rem]`}
          >
            Secret Password
          </label>
          <input
            spellCheck={false}
            type="password"
            name="secretkey"
            placeholder="XXXX XXXX XXXX"
            maxLength={12}
            className="h-[2.5rem] border outline-none px-3 mb-2 text-[.9rem] border-[#39393948] drop-shadow-sm"
          />
        </div>
        {message && (
          <BasicAlert type={success ? "success" : "error"} msg={message} />
        )}
        <button
          type="submit"
          className="w-full py-2 mt-2 font-roboto bg-cusOrange tracking-wider active:scale-[.96] ease-out duration-100 top-[21rem] right-24 text-white cursor-pointer"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => Navigate("/admin/login")}
          className="p-2  text-black text-[.9rem]"
        >
          BACK
        </button>
      </form>
    </div>
  );
};

export default FrogetPassswordFrame;
