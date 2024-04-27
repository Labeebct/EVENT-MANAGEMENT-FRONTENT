import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axiosInstance from "../../../instance/axiosInstance";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BasicAlert from "../../shared/BasicAlert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = ({ role }) => {
  const Navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (error) setTimeout(() => setError(""), 2000);
  if (success) setTimeout(() => setSuccess(false), 2000);
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center contact_bg agent_contact_bg">
        <h3 className="text-[3.2rem] mb-10 text-[#ffffff] font-cagliostro">
          Contact us
        </h3>
      </div>
      <div className="w-full  h-auto  flex justify-center">
        <div className="w-full p-10 h-auto mt-8 sm:mt-0 flex justify-center flex-wrap">
          <div className="h-auto flex flex-col lg:flex-row items-center flex-1 justify-center">
            <Formik
              initialValues={{
                username: "",
                email: "",
                subject: "",
                message: "",
                role: role,
              }}
              onSubmit={(formData, { resetForm, setSubmitting }) => {
                const validateData = async (formData) => {
                  const { username, email, subject, message } = formData;
                  if (
                    username.trim() == "" ||
                    email.trim() == "" ||
                    subject.trim() == "" ||
                    message.trim() == ""
                  )
                    return setError("Please fill all fields");
                  else if (!emailRegex.test(email))
                    return setError("Invalid email format");
                  else if (message.length < 14)
                    return setError(
                      "Please explain the message with minimum 14 letters"
                    );
                  else {
                    try {
                      const response = await axiosInstance.post(
                        "/contact",
                        formData
                      );
                      const { data, status } = response;

                      if (status == 200) {
                        setSuccess(true);
                        setError(data.msg);
                        setTimeout(() => {
                          resetForm() 
                          Navigate('/')
                        }, 2000);
                      }
                    } catch (error) {
                      if (error.response) {
                        const { status, data } = error.response;
                        if (status == 500) {
                          Navigate("/500");
                        }
                      } else {
                        console.log("No response from the server");
                        Navigate("/500");
                      }
                    }
                  }
                };

                validateData(formData);
              }}
            >
              {({ isSubmitting }) => (
                <Form
                  action=""
                  className="w-[37%]  lg:translate-x-5 -translate-y-40 py-5 min-w-[340px] rounded-[.3rem] bg-white h-auto shadow-box"
                >
                  <div className="w-full px-10 h-auto flex flex-col mt-2 gap-2">
                    <label
                      htmlFor="email"
                      className="font-roboto text-[#808080db] text-[.75rem]"
                    >
                      Name
                    </label>
                    <Field
                      spellCheck={false}
                      type="text"
                      name="username"
                      className="h-[2.5rem] border border-[#6c6c6c15] shadow-md outline-none px-3 text-[.9rem]  bg-gray-50"
                    />
                    <label
                      htmlFor="email"
                      className="font-roboto  text-[#808080db] text-[.75rem]"
                    >
                      Email
                    </label>
                    <div className="h-[2.5rem] border border-[#6c6c6c15] relative shadow-md outline-none  text-[.9rem]  bg-gray-50">
                      <Field
                        type="text"
                        name="email"
                        className="h-full w-full shadow-md-none outline-none px-3 text-[.9rem]  bg-gray-50"
                      />
                    </div>
                    <label
                      htmlFor="email"
                      className="font-roboto  text-[#808080db] text-[.75rem]"
                    >
                      Subject
                    </label>
                    <div className="h-[2.5rem] border border-[#6c6c6c15] relative shadow-md outline-none  text-[.9rem]  bg-gray-50">
                      <Field
                        type="text"
                        name="subject"
                        className="h-full w-full shadow-md-none outline-none px-3 text-[.9rem]  bg-gray-50"
                      />
                    </div>
                    <label
                      htmlFor="email"
                      className="font-roboto  text-[#808080db] text-[.75rem]"
                    >
                      Message
                    </label>
                    <div className="h-[5rem] relative shadow-md outline-none mb-2  text-[.9rem]  bg-gray-50">
                      <Field
                        type="text"
                        as="textarea"
                        name="message"
                        className="h-full p-3 resize-none w-full shadow-md-none outline-none px-3 text-[.9rem]  bg-gray-50"
                      />
                    </div>
                    {error && (
                      <BasicAlert
                        type={success ? "success" : "error"}
                        msg={error}
                      />
                    )}
                    <button
                      type="submit"
                      className={`w-full py-2 my-2 font-roboto ${
                        role === "user" ? "bg-cusOrange" : "bg-[#ff450a]"
                      }  tracking-wider active:scale-[.96] ease-out duration-100 text-white cursor-pointer`}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="flex-1 -translate-y-32 lg:-translate-y-5 w-full gap-3 h-full flex flex-col items-center">
              <div className="w-[70%] lg:ml-40 ml-0 rounded-md  min-w-[370px] flex h-auto py-[1rem] bg-gray-200">
                <div className="min-w-28 flex justify-center items-center">
                  <InstagramIcon sx={{ fontSize: "40px", opacity: ".7" }} />
                </div>
                <div className="flex-2 flex flex-col justify-center gap-2">
                  <h1 className="font-bold text-[1.1rem] font-inter">
                    Follow us
                  </h1>
                  <p className="font-roboto text-[.9rem]">
                    Follow us on instagram to get latest update
                  </p>
                </div>
                <div className="flex-1 flex justify-end pr-5 items-center">
                  <button
                    className={`py-2 bg-cusOrange text-white font-bold w-[5rem] ${
                      role === "user" ? "bg-cusOrange" : "bg-[#ff450a]"
                    } text-[.76rem] duration-150 active:scale-[.98] ease-in-out rounded-sm`}
                  >
                    Follow
                  </button>
                </div>
              </div>
              <div className="w-[70%] lg:ml-40 ml-0 rounded-md  min-w-[370px] flex h-auto py-4 bg-gray-200">
                <div className="min-w-28 flex justify-center items-center">
                  <MailOutlineIcon sx={{ fontSize: "40px", opacity: ".7" }} />
                </div>
                <div className="flex-2 flex flex-col justify-center gap-2">
                  <h1 className="font-bold text-[1.1rem] font-inter">
                    Mail us
                  </h1>
                  <p className="font-roboto text-[.9rem]">
                    Mail us For any kind of issues
                  </p>
                </div>
                <div className="flex-1 flex justify-end pr-5 items-center">
                  <button className="py-2 bg-cusOrange text-white font-bold w-[5rem] text-[.76rem] duration-150 active:scale-[.98] ease-in-out rounded-sm">
                    Mail
                  </button>
                </div>
              </div>
              <div className="w-[70%] lg:ml-40 ml-0 rounded-md  min-w-[370px] flex h-auto py-4 bg-gray-200">
                <div className="min-w-28 flex justify-center items-center">
                  <CallIcon sx={{ fontSize: "40px", opacity: ".7" }} />
                </div>
                <div className="flex-2 flex flex-col justify-center gap-2">
                  <h1 className="font-bold text-[1.1rem] font-inter">
                    Call us
                  </h1>
                  <p className="font-roboto text-[.9rem]">
                    Call us on +91 859 047 1530 for any queries
                  </p>
                </div>
                <div className="flex-1 flex justify-end pr-5 items-center">
                  <button className="py-2 bg-cusOrange text-white font-bold w-[5rem] text-[.76rem] duration-150 active:scale-[.98] ease-in-out rounded-sm">
                    Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
