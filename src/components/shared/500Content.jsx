import React, { useEffect } from "react";
import Header from "../user/common/Header";
import Footer from "../user/common/Footer";
import { useDispatch } from "react-redux";

const InternalErrorContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "loading", payload: false });
  }, []);

  return (
    <>
      <Header />
      <div className="w-full h-[calc(100vh-4.5rem)] flex justify-center items-center server_errorBg"></div>
      <Footer />
    </>
  );
};

export default InternalErrorContent;
