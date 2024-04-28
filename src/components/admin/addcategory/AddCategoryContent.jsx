import React, { useState } from "react";
import BasicAlert from "../../shared/BasicAlert";
import axiosInstance from "../../../instance/axiosInstance";
import { useNavigate } from "react-router-dom";

const AddCategoryContent = () => {
  const Navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { files } = e.target;
    const file = files[0];
    setImageUrl(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { categoryName, category, categoryDiscription } = e.target;

    const imageFile = category.files[0];

    if (categoryName.value.trim() == "")
      return setError("Please provide category name.");
    else if (categoryDiscription.value.trim() == "")
      return setError("Please provide description.");
    else if (!imageFile) return setError("Please provide a profile image.");

    const form = new FormData();

    form.append("categoryName", categoryName.value);
    form.append("categoryDiscription", categoryDiscription.value);
    form.append("categoryImage", imageFile);

    try {
      const response = await axiosInstance.post("/admin/add-category", form);
      const { data, status } = response;

      if (status == 200) {
        setSuccess(true);
        setError(data.msg);
        setTimeout(() => Navigate("/admin/category"), 800);
      }
    } catch (error) {
      if (error.response) {
        const {data, status } = error.response;
        if (status == 500) {
          console.log(data.error);
          Navigate("/500");
        }
      } else {
        Navigate("/500");
      }
    }
  };

  if (error) setTimeout(() => setError(""), 2000);

  return (
    <div className="h-full w-full p-10 flex items-center justify-center">
      <form
        action=""
        onSubmit={handleSubmit}
        className="h-auto rounded-md bg-white min-w-80 flex items-center flex-col py-4 px-10 w-[40%] border shadow-box border-[#0000000c] "
      >
        <img className="w-36 h-36" src={imageUrl} alt="" />
        <div className="w-auto mt-3 flex h-[3rem] items-center">
          <div className="my-4 w-full p-2 px-4 bg-cusGreen text-white font-poppins font-medium text-[.7rem] rounded-sm">
            CHOOSE FILE
          </div>
          <input
            className="absolute opacity-0 w-24"
            type="file"
            onChange={handleChange}
            encType="multipart/form-data"
            name="category"
          />
        </div>

        <span className="flex w-full flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-70">
            Category Name
          </label>
          <input
            spellCheck={false}
            className="h-[2.4rem] w-full shadow-md border border-[#6363631a] outline-none px-4 text-[.9rem]"
            type="text"
            name="categoryName"
          />
        </span>

        <span className="flex mt-3 mb-4 w-full flex-col gap-2">
          <label htmlFor="" className="text-[.75rem] font-inter opacity-70">
            Category Description
          </label>
          <textarea
            spellCheck={false}
            className="h-[8rem] resize-none shadow-md w-full border border-[#6363631a] outline-none p-3 text-[.9rem]"
            type="text"
            name="categoryDiscription"
          />
        </span>
        {error && (
          <BasicAlert type={success ? "success" : "error"} msg={error} />
        )}
        <button
          type="submit"
          className="w-full h-[2.7rem] bg-cusGreen mt-4 text-white font-roboto duration-150 active:scale-[.98] ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCategoryContent;
