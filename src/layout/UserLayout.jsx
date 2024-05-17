import { Outlet } from "react-router-dom";
import Header from "../components/user/common/Header";
import Footer from "../components/user/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const UserLayout = () => {
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket.socket);

  useEffect(() => {
    if (socket) {
      socket.on("eventCancelled", (cancelled) => {
        dispatch({type:'EVENT_CANCELED'})
      });
    }
  }, [socket]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer role={"user"} />
    </>
  );
};

export default UserLayout;
