import React, { useEffect } from "react";
import { closeModal } from "../../redux/actions/centerConfirm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const CenterConfirm = ({ type, selectedDate, title, message }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const handleCancell = () => dispatch(closeModal());

  const handleProceed = () => {
    if (type == "login") {
      dispatch(closeModal());
      return navigate("/login");
    } else {
      const title = "Booking Request Sent wait for confirmation";
      const message =
        "Your event booking request has been submitted. Once approved by the agent, you will be directed to the payment section to finalize your booking. Thank you for choosing us, and we anticipate confirming your reservation shortly";
      dispatch({
        type: "PROCEED",
        payload: { selectedDate, title, message, type: "pending" },
      });
    }
  };

  return (
    <div className="fixed p-10 flex backdrop-blur-sm justify-center items-center z-50 inset-0 w-screen h-screen ">
      <div className="h-auto flex flex-col items-center p-9 mb-5 rounded-md shadow-box gap-1 w-auto max-w-[560px] bg-white">
        <h4
          className={`font-inter text-[1.3rem] font-medium ${
            type == "pending" ? "text-green-600" : "text-gray-700"
          }`}
        >
          {title}
        </h4>
        <h5 className="font-inter text-center text-gray-800 text-[.86rem] p-6">
          {message}
        </h5>
        {type == "pending" && (
          <div className="pt-2 pb-6">
            <PropagateLoader color="#fa592d" />
          </div>
        )}
        {type !== "pending" && (
          <div className="w-full h-auto flex gap-4 justify-between">
            <button
              onClick={handleCancell}
              className="h-[2.8rem] text-[.9rem] duration-200 active:scale-[.95] ease-in-out bg-red-600 rounded-sm shadow-sm flex-1 font-inter text-white font-semibold"
            >
              {type == "login" ? "Go Back" : "Cancell"}
            </button>
            <button
              onClick={handleProceed}
              className="h-[2.8rem] text-[.9rem] duration-200 active:scale-[.95] ease-in-out bg-green-600 rounded-sm shadow-sm flex-1 font-inter  text-white font-semibold"
            >
              {type == "login" ? "Login" : "proceed"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CenterConfirm;
