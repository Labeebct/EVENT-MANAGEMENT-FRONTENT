import React, { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import BlockIcon from "@mui/icons-material/Block";
import { useAlert } from "../../../context/CenterAlert";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import axiosInstance from "../../../instance/axiosInstance";

const CategoryFrame = ({ data }) => {
  
  const Navigate = useNavigate();
  const showAlert = useAlert();
  const [isBlocked, setBlocked] = useState(data.isBlocked);
  const status = isBlocked ? "Unblock" : "Block";

  const handleBlock = () => {
    confirmAlert({
      title: `Confirm to ${status}`,
      message: `Are you sure you want to ${status} the category?`,
      titleClassName: "text-xl font-inter font-bold text-green-500",
      buttons: [
        {
          label: "Yes",
          style: { backgroundColor: "#65B741" },
          className: "text-white font-bold py-2 px-4 rounded mr-2",
          onClick: async () => {
            try {
              const response = await axiosInstance.put(
                `/admin/category-block?id=${data._id}`
              );
              const { status } = response;
              if (status == 200) {
                setBlocked(!isBlocked);
                showAlert(
                  "success",
                  `Category has been ${isBlocked ? "Unblocked" : "Blocked"}.`
                );
              }
            } catch (error) {
              if (error.response) {
                const { data, status } = error.response;
                if (status == 404) {
                  Navigate("/404");
                  console.log(data.msg);
                } else {
                  Navigate("/500");
                }
              } else {
                console.log("No response from server", error);
                Navigate("/500");
              }
            }
          },
        },
        {
          label: "No",
          style: { backgroundColor: "#D80032" },
          className:
            "bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2",
        },
      ],
      overlayClassName:
        "fixed inset-0 bg-[black] bg-opacity-20 flex justify-center items-center",
    });
  };

  return (
    <div
      className={`w-full relative mx-auto duration-200 ease-in-out bg-white flex justify-center flex-col shadow-box my-5 rounded-[.3rem] flex-1 min-w-[250px] max-w-[300px] h-auto p-4`}
    >
      <img
        src={`https://eventapi.labio.shop/${data.categoryImage}`}
        className="w-full h-[10rem]"
        alt="Category"
      />
      <h3 className="text-center mt-4 font-scope-one font-[600] text-[1.3rem] text-[#000000c2] uppercase">
        {data.categoryName}
      </h3>
      <p className="text-center max-h-23 font-roboto text-[.9rem] overflow-hidden  py-3 text-gray-800">
        {'"' + data.categoryDiscription + '"'}
      </p>
      {!isBlocked && (
        <div className="w-full h-auto flex justify-end  items-center ">
          <button
            onClick={() => Navigate(`/admin/edit-category?id=${data._id}`)}
            className="p-1 text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out mr-3 rounded-sm bg-green-600"
          >
            <EditIcon sx={{ fontSize: "20px" }} />
          </button>
          <button
            onClick={handleBlock}
            className="p-1 text-white text-[.7rem] duration-100 active:scale-[.95] ease-in-out rounded-sm bg-red-600"
          >
            <BlockIcon sx={{ fontSize: "20px" }} />
          </button>
        </div>
      )}

      {isBlocked && (
        <div className="absolute left-0 w-full h-full flex justify-center items-center backdrop-blur-[.06rem] bg-[#ffffff33]">
          <button
            onClick={handleBlock}
            className="bg-red-600 mt-2 mb-32 cursor-pointer ease-linear duration-100 active:scale-[.95] py-2 px-5 font-bold text-white rounded-sm text-[.7rem] font-inter"
          >
            Unblock
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryFrame;
