import React, { useEffect, useState } from "react";
import CategoryFrame from "./CategoryFrame";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../instance/axiosInstance";

const CategoryContent = () => {
  const Navigate = useNavigate();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axiosInstance.get("/admin/category");
        const { data, status } = response;
        if (status == 200) {
          setCategory(data.category);
        }
      } catch (error) {
        if (error.respnse) {
          const { status } = error.respnse;
          if (status == 500) {
            Navigate("/500");
          }
        } else {
          Navigate("/500");
        }
      }
    };

    fetchCategory();
  }, []);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-4 h-auto px-6 gap-x-4">
      {category.map((data) => (
        <CategoryFrame key={data._id} data={data} />
      ))}
    </div>
  );
};

export default CategoryContent;
