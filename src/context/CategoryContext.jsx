import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../instance/axiosInstance";

const Context = createContext();

const CategoryContext = ({ children }) => {
  const [category, setCategory] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axiosInstance.get("/category");
        const { data, status } = response;
        if (status == 200) {
          setCategory(data.categories);
        }
      } catch (error) {
        if (error.response) {
          const { status } = error.response;
          if (status == 500) {
            navigate("/500");
          }
        } else {
          navigate("/500");
        }
      }
    };

    fetchCategory();
  }, []);

  return <Context.Provider value={category}>{children}</Context.Provider>;
};

export const catgoryContext = () => {
  return useContext(Context);
};

export default CategoryContext;
