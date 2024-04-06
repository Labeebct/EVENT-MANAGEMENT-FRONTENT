import { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const OtpFrame = () => {
  const navigate = useNavigate();

  //Taking out email from params
  const { email, verifyType } = useParams();
  const inputsRef = useRef([]);

  // const [otpValue , setOtpValue] = useState()
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Focus the first input when component mounts
    inputsRef.current[0]?.focus();
  }, []);

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

  return (
    <div className="w-[35%] min-w-[290px] backdrop-blur-[.07rem]  bg-[#ffffff04]  flex flex-col items-center translate-y-5 h-[520px] rounded-md box_shadow_black">
      <h3 className="text-[2rem] font-playfair mt-7">OTP</h3>
      <h4 className="text-[1.2rem] font-roboto mt-1">Verification</h4>
      <form className="w-full text-black h-full flex  flex-col items-center  px-[2rem] py-9 gap-4 flex-1">
        <h3 className="text-center font-poppins text-[.9em] mt-5">
          Enter the Four Digit OTP send to the email <br />
          {email}
        </h3>
        <div className="w-full h-auto flex justify-center mt-9 gap-3">
          {[...Array(4)].map((_, index) => (
            <input
              ref={(el) => (inputsRef.current[index] = el)}
              key={index}
              className="h-16 w-14 rounded-md border border-[#464646cb] outline-none text-center text-[1.9rem] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="text"
              maxLength={1}
              onChange={(e) => handleInput(index, e)}
              onKeyDown={(e) => handleBackspace(index, e)}
            />
          ))}
        </div>
        <p
            className='text-center text- text-[.9rem] mt-3 text-red-600'
          >
            Incorrect password
          </p>
        <button
          type="submit"
          className="w-full py-2 mt-6 font-roboto bg-cusOrange tracking-wider active:scale-[.96] ease-out duration-100 top-[21rem] right-24 text-white cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default OtpFrame;
