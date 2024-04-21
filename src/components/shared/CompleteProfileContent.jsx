import React, { useState } from "react";
import axiosInstance from "../../instance/axiosInstance";
import BasicAlert from "../../components/shared/BasicAlert";
import { useLocation, useNavigate } from "react-router-dom";

const CompleteProfileContent = () => {
  const Navigate = useNavigate();
  const location = useLocation();

  const email = "ctlabeebthaliyil@gmail.com";
  const role = "admin";

  const api =
    location.pathname === "/admin/complete-profile"
      ? `/admin/complete-profile?email=${email}`
      : `/complete-profile?email=${email}`;

  //Initialising form
  const [form, setForm] = useState({
    role: role,
    fullname: "",
    mobilenum: "",
    dob: "",
    gender: "",
    profile: null,
    profileUrl: "",
    occupation: "",
    referalsource: "",
    state: "",
    district: "",
    pincode: "",
    city: "",
    landmark: "",
    houseno: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    //Collecting form from files
    if (name === "profile") {
      const file = files[0];
      if (file) {
        setForm({
          ...form,
          profile: file,
          profileUrl: URL.createObjectURL(file),
        });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Destrucutring datas from form
      const {
        fullname,
        mobilenum,
        dob,
        gender,
        profile,
        occupation,
        referalsource,
        state,
        district,
        pincode,
        city,
        landmark,
        houseno,
      } = form;

      //creating validating messages
      const validationMsg = {
        fullname: "Please provide your Full Name.",
        mobilenum: "Please enter your Mobile Number.",
        dob: "Please specify your Date of Birth.",
        gender: "Please specify your Gender.",
        profile: "Profile image is required.",
        occupation: "Please enter your Occupation.",
        referalsource: "Please indicate your Referral Source.",
        state: "Please enter your State.",
        district: "Please provide your Pincode.",
        pincode: "Please provide your Pincode.",
        city: "Please enter your City.",
        landmark: "Please describe your Landmark.",
        houseno: "Please provide your House Number.",
      };

      //Validating entered datas
      if (fullname.trim() === "") setError(validationMsg.fullname);
      else if (mobilenum.trim() === "") setError(validationMsg.mobilenum);
      else if (!dob) setError(validationMsg.dob);
      else if (!gender) setError(validationMsg.gender);
      else if (!profile) setError(validationMsg.profile);
      else if (occupation.trim() === "") setError(validationMsg.occupation);
      else if (!referalsource) setError(validationMsg.referalsource);
      else if (state.trim() === "") setError(validationMsg.state);
      else if (district.trim() === "") setError(validationMsg.district);
      else if (pincode.trim() === "") setError(validationMsg.pincode);
      else if (state.trim() === "") setError(validationMsg.state);
      else if (city.trim() === "") setError(validationMsg.city);
      else if (landmark.trim() === "") setError(validationMsg.landmark);
      else if (houseno.trim() === "") setError(validationMsg.houseno);
      else {

        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
          formData.append(key, value);
        });

        try {
          const response = await axiosInstance.post(api, formData);
          const { data, status } = response;
          if (status === 200) {
            setError(data.msg);
            setSuccess(true);
            if (role == "admin")
              setTimeout(() => Navigate("/admin/dashboard"), 800);
            else if (role == "agent")
              setTimeout(() => Navigate("/agent/home"), 800);
            else setTimeout(() => Navigate("/"), 800);
          }
        } catch (error) {
          if (error.response) {
            const { data, status } = error.response;
            if (status === 422) {
              setError(data.msg);
            } else if (status === 500) {
              Navigate("/500");
              console.log("Internal server error", error);
            }
          } else {
            Navigate("/500");
            console.log("No resonse from server", error);
          }
        }
      }
    } catch (error) {
      console.log("Error in complete handle submit", error);
    }
  };

  if (error) setTimeout(() => setError(""), 2000);

  return (
    <div className="bg-white w-[80%] h-[90%] shadow-box rounded-md">
      <form action="" onSubmit={handleSubmit}>
        <div className="w-full h-52 flex">
          <div className="h-full flex-1 flex flex-col gap-3 pt-5 pl-12 pr-2">
            <div className="flex mt-5 justify-between">
              <span className="flex w-[49.5%] flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[.75rem] font-inter opacity-90"
                >
                  Full Name
                </label>
                <input
                  value={form.fullname}
                  onChange={handleChange}
                  spellCheck={false}
                  className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                  type="text"
                  name="fullname"
                />
              </span>
              <span className="flex w-[49.5%] flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[.75rem] font-inter opacity-90"
                >
                  Mobile Number
                </label>
                <input
                  value={form.mobilenum}
                  onChange={handleChange}
                  spellCheck={false}
                  className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem] [appearance:textfield]
             [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  type="number"
                  name="mobilenum"
                />
              </span>
            </div>
            <div className="flex mt-5 justify-between">
              <span className="flex w-[49.5%] flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[.75rem] font-inter opacity-90"
                >
                  DOB
                </label>
                <input
                  value={form.dob}
                  onChange={handleChange}
                  className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                  spellCheck={false}
                  type="date"
                  name="dob"
                />
              </span>
              <span className="flex w-[49.5%] flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[.75rem] font-inter opacity-90"
                >
                  Gender
                </label>
                <select
                  onChange={handleChange}
                  className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                  name="gender"
                  id=""
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </span>
            </div>
          </div>
          <div className="h-full w-[16rem] flex justify-center gap-4 flex-col items-center">
            <div className="h-36 border shadow-md  sm:w-32 w-24 mt-14 ">
              {form.profileUrl && (
                <img src={form.profileUrl} className="h-full w-full" alt="" />
              )}
            </div>
            <div className="w-auto flex h-[2rem] items-center">
              <div className="my-4 p-2 px-4 bg-cusOrange text-white font-poppins font-medium text-[.7rem] rounded-sm">
                CHOOSE FILE
              </div>
              <input
                onChange={handleChange}
                accept="image/*"
                className="absolute opacity-0 w-24"
                type="file"
                encType="multipart/form-data"
                name="profile"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-auto">
          <div className="h-full py-2 px-12 w-full">
            <div className="flex mt-5 justify-between">
              <span className="flex w-[49.5%] flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[.75rem] font-inter opacity-90"
                >
                  Occupation
                </label>
                <input
                  value={form.occupation}
                  onChange={handleChange}
                  spellCheck={false}
                  className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                  type="text"
                  name="occupation"
                />
              </span>
              <span className="flex w-[49.5%] flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[.75rem] font-inter opacity-90"
                >
                  Referral Source
                </label>
                <select
                  onChange={handleChange}
                  className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                  name="referalsource"
                  id=""
                >
                  {" "}
                  <option value="">Referral Source</option>
                  <option value="Online advertising">Online advertising</option>
                  <option value="Social media">Social media</option>
                  <option value="Search engine">Search engine</option>
                  <option value="Referral from a friend">
                    Referral from a friend or family member
                  </option>
                  <option value="Website/blog">Website/blog</option>
                  <option value="Print advertisement">
                    Print advertisement
                  </option>
                </select>
              </span>
            </div>
            <div className="flex mt-5 justify-between">
              <span className="flex w-[41.5%] flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[.75rem] font-inter opacity-90"
                >
                  State
                </label>
                <input
                  value={form.state}
                  onChange={handleChange}
                  spellCheck={false}
                  className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                  type="text"
                  name="state"
                />
              </span>
              <span className="flex w-[35.5%] flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[.75rem] font-inter opacity-90"
                >
                  District
                </label>
                <input
                  value={form.district}
                  onChange={handleChange}
                  spellCheck={false}
                  className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                  type="text"
                  name="district"
                />
              </span>
              <span className="flex w-[21%] flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[.75rem] font-inter opacity-90"
                >
                  Pincode
                </label>
                <input
                  value={form.pincode}
                  onChange={handleChange}
                  spellCheck={false}
                  className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem] [appearance:textfield]
             [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  type="number"
                  name="pincode"
                />
              </span>
            </div>
            <div className="flex mt-5 justify-between">
              <span className="flex w-[33.5%] flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[.75rem] font-inter opacity-90"
                >
                  City
                </label>
                <input
                  value={form.city}
                  onChange={handleChange}
                  spellCheck={false}
                  className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                  type="text"
                  name="city"
                />
              </span>
              <span className="flex w-[35.5%] flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[.75rem] font-inter opacity-90"
                >
                  Landmark
                </label>
                <input
                  value={form.landmark}
                  onChange={handleChange}
                  spellCheck={false}
                  className="h-[2.4rem] w-full shadow-md border outline-none px-4 text-[.9rem]"
                  type="text"
                  name="landmark"
                />
              </span>
              <span className="flex w-[26%] flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-[.75rem] font-inter opacity-90"
                >
                  House No
                </label>
                <input
                  value={form.houseno}
                  onChange={handleChange}
                  spellCheck={false}
                  className="h-[2.4rem] [appearance:textfield]
                  [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full shadow-md border outline-none px-4 text-[.9rem]"
                  type="number"
                  name="houseno"
                />
              </span>
            </div>
            <div className="mt-4">
              {error && (
                <BasicAlert type={success ? "success" : "error"} msg={error} />
              )}
            </div>
            <button className="bg-cusOrange font-inter my-3 ease-in-out duration-200 active:scale-[.99] text-white shadow-box m-auto text-center p-2 w-full">
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompleteProfileContent;
