import { Routes, Route, useNavigate } from "react-router-dom";
import { inject } from '@vercel/analytics';
import { useEffect, useState } from "react";
import CategoryContext from "./context/CategoryContext";
import { useDispatch, useSelector } from "react-redux";
import TopRightAlert from "./components/shared/TopRightAlert";
import jwtDecode from "./utils/jwtDecode";
import UserRouter from "./router/UserRoute";
import AgentRouter from "./router/AgentRouter";
import CongratGif from "./components/shared/CongratGif";
import AdminRouter from "./router/AdminRouter";
import CenterConfirm from "./components/shared/CenterConfirm";
import Loading from "./components/shared/Loading";
import io from "socket.io-client";

const App = () => {
  const dispatch = useDispatch();
  inject();
  const confirmModal = useSelector((state) => state.confirm.isModalOpen);
  const advanceAmount = useSelector((state) => state.confirm.advanceAmount);
  const selectedDate = useSelector((state) => state.confirm.selectedDate);
  const title = useSelector((state) => state.confirm.title);
  const type = useSelector((state) => state.confirm.type);
  const message = useSelector((state) => state.confirm.message);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const showCongratGif = useSelector((state) => state.showCongrat.gifShow);
  const sideMessage = useSelector((state) => state.rightAlert.message);
  const socket = useSelector((state) => state.socket.socket);

  useEffect(() => {
    if (!socket) {
      const socket = io("http://localhost:8082");
      socket.on("connect", () => {
        console.log("Socket connected!");
      });
      const memeber = jwtDecode();
      socket.emit(
        "addMember",
        memeber?.userId || memeber?.agentId || memeber?.adminId
      );

      dispatch({ type: "socket", payload: socket });
      dispatch({ type: "getJwt", payload: localStorage.getItem("jwt") });
    }
  }, [socket]);

  return (
    <CategoryContext>
      {showCongratGif && <CongratGif />}
      {sideMessage && <TopRightAlert message={sideMessage} />}
      {isLoading && <Loading />}
      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/agent/*" element={<AgentRouter />} />
      </Routes>
      {confirmModal && (
        <CenterConfirm
          type={type}
          title={title}
          message={message}
          advanceAmount={advanceAmount}
          selectedDate={selectedDate}
        />
      )}
    </CategoryContext>
  );
};

export default App;
