import { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../instance/axiosInstance";
import BasicAlert from "../shared/BasicAlert";

const OtpFrame = () => {
  const navigate = useNavigate();

  //Taking out email from params
  const { email, verifyType } = useParams();
  const inputsRef = useRef([]);

  // const [otpValue , setOtpValue] = useState()
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);

  const [resend, setResend] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Focus the first input when component mounts
    inputsRef.current[0]?.focus();
    setCount(59);
  }, []);

  useEffect(() => {
    let intervalId = setInterval(() => {
      if (count === 0) {
        clearInterval(intervalId);
        setResend(true);
      } else {
        setCount(count - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  const handleInput = (index, e) => {
    const value = e.target.value;
    if (value && index < inputsRef.current.length - 1) {
      // Move focus to the next input
      inputsRef.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && index > 0) {
      if (e.target.value === "") {
        // Move focus to the previous input
        inputsRef.current[index - 1].focus();
      }
    }
  };

  let api;
  if (verifyType === "signup") api = `/otp-verification/${email}`;
  else if (verifyType === "login") api = `/forget-otp-verification/${email}`;
  else api = `/forget-otp-verification/${email}`;

  const handleResend = async () => {
    try {
      setResend(false);
      setCount(59);
      await axiosInstance.get(`/resend-otp?email=${email}&type=${verifyType}`);
    } catch (error) {
      console.log("Error in handle resend otp", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const otpValue = inputsRef.current.map((input) => input.value).join("");
      if (otpValue.length == 0) setMessage("Please provide the OTP");
      else if (otpValue.length < 4) setMessage("OTP should be 4 Digits");
      else {
        try {
          //Api route for signup verify
          const response = await axiosInstance.post(api, { otpValue });
          const { data, status } = response;

          if (status == 200) {
            //Setting success message after and redirecting to login page after verification success
            setMessage(data.msg);
            setVerified(true);
            if (verifyType == "signup")
              setTimeout(() => navigate("/login"), 800);
            else
              setTimeout(
                () => navigate(`/reset-password?email=${data.email}`),
                800
              );
          }
        } catch (error) {
          if (error.response) {
            const { data, status } = error.response;

            //Handling errors based on status code
            if (status == 422 || status == 409) {
              inputsRef.current.map((input) => (input.value = ""));
              setMessage(data.msg);
            } else if (status == 403) {
              setMessage(data.msg);
              setTimeout(() => navigate("/signup"), 800);
            }
            // If verification failed by any malfunction
            else if (status == 500) {
              navigate("/500");
            }
          } else {
            navigate("/500");
            console.log("Error in submit otp", error);
          }
        }
      }
    } catch (error) {
      console.log("Error in otphandle submit", error);
    }
  };

  if (message) setTimeout(() => setMessage(""), 2000);

  return (
    <div className="w-[35%] backdrop-blur-[.1rem]  bg-[#ffffff96]  flex flex-col items-center translate-y-5 h-[500px] rounded-md box_shadow_black">
      <h3 className="text-[2rem] font-playfair mt-7">OTP</h3>
      <h4 className="text-[1.2rem] font-roboto mt-1">Verification</h4>
      <form className="w-full text-black h-full flex  flex-col items-center  px-[2rem] py-5 gap-4 flex-1">
        <h3 className="text-center font-poppins text-[.9em] mt-5">
          Enter the Four Digit OTP send to the email <br />
          {email}
        </h3>
        <div className="w-full h-auto flex justify-center mt-9 gap-3">
          {[...Array(4)].map((_, index) => (
            <input
              ref={(el) => (inputsRef.current[index] = el)}
              key={index}
              className="h-16 w-14 mb-4 rounded-md border border-[#464646cb] outline-none text-center text-[1.9rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="text"
              maxLength={1}
              onChange={(e) => handleInput(index, e)}
              onKeyDown={(e) => handleBackspace(index, e)}
            />
          ))}
        </div>
        {resend ? (
          <button
            onClick={handleResend}
            className="py-2 active:scale-[.97] px-3 cursor-pointer text-[.9rem] rounded-sm duration-200 ease-in-out  bg-slate-500 text-white"
          >
            Resend otp
          </button>
        ) : (
          <span className="text-[.9rem] flex items-center font-roboto">
            Resend otp in{" "}
            <p className="text-[1rem] pl-1 font-poppins pb-[.1rem]">{count}</p>
          </span>
        )}
        {message && (
          <BasicAlert type={verified ? "success" : "error"} msg={message} />
        )}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-2 mt-4 font-roboto bg-cusOrange tracking-wider active:scale-[.96] ease-out duration-100 top-[21rem] right-24 text-white cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OtpFrame;
