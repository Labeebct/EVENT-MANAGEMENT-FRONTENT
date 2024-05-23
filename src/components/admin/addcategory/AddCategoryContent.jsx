import React, { useEffect, useState } from "react";
import BasicAlert from "../../shared/BasicAlert";
import axiosInstance from "../../../instance/axiosInstance";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const AddCategoryContent = ({ type }) => {
  const Navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const [imageUrl, setImageUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const [category, setCategory] = useState({});
  const [error, setError] = useState("");

  if (type == "edit" && id) {
    useEffect(() => {
      const fetchCategory = async () => {
        try {
          dispatch({ type: "loading", payload: true });
          const response = await axiosInstance.get(
            `/admin/edit-category?id=${id}`
          );
          dispatch({ type: "loading", payload: false });
          setCategory(response.data.category);
        } catch (error) {
          if (error.response) {
            const { status } = error.response;
            if (status == 404) {
              Navigate("/404");
            } else {
              Navigate("/500");
            }
          } else {
            Navigate("/500");
          }
        }
      };

      fetchCategory();
    }, []);
  }

  const apiUrl =
    type == "add" ? "/admin/add-category" : `/admin/edit-category?id=${id}`;

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

    const form = new FormData();

    form.append("categoryName", categoryName.value);
    form.append("categoryDiscription", categoryDiscription.value);
    form.append("categoryImage", imageFile);

    try {
      const response = await axiosInstance.post(apiUrl, form);
      const { data, status } = response;

      if (status == 200) {
        setSuccess(true);
        setError(data.msg);
        setTimeout(() => Navigate("/admin/category"), 800);
      }
    } catch (error) {
      if (error.response) {
        const { data, status } = error.response;
        if (status == 500) {
          console.log(data.error);
          Navigate("/500");
        } else if (status == 422) {
          setError(data.msg);
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
        <img
          className="w-36 h-36"
          src={
            imageUrl || `https://eventapi.labio.shop/${category.categoryImage}`
          }
          alt=""
        />
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
            value={category ? category.categoryName : ""}
            onChange={(e) =>
              setCategory({ ...category, categoryName: e.target.value })
            }
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
            value={category ? category.categoryDiscription : ""}
            onChange={(e) =>
              setCategory({ ...category, categoryDiscription: e.target.value })
            }
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
