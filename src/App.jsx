import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryContext from "./context/CategoryContext";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "./utils/jwtDecode";
import UserRouter from "./router/UserRoute";
import AgentRouter from "./router/AgentRouter";
import AdminRouter from "./router/AdminRouter";
import CenterConfirm from "./components/shared/CenterConfirm";
import Loading from "./components/shared/Loading";
import io from "socket.io-client";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const confirmModal = useSelector((state) => state.confirm.isModalOpen);
  const advanceAmount = useSelector((state) => state.confirm.advanceAmount);
  const selectedDate = useSelector((state) => state.confirm.selectedDate);
  const title = useSelector((state) => state.confirm.title);
  const type = useSelector((state) => state.confirm.type);
  const message = useSelector((state) => state.confirm.message);
  const isLoading = useSelector((state) => state.loading.isLoading);
  const socket = useSelector((state) => state.socket.socket);

  useEffect(() => {
    console.log(socket);
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
      console.log(socket);
      dispatch({ type: "socket", payload: socket });
      dispatch({ type: "getJwt", payload: localStorage.getItem("jwt") });

    }
  }, [socket]);

  return (
    <CategoryContext>
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
