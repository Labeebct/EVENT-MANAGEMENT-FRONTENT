import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, useEffect, useLayoutEffect } from "react";
import CategoryContext from "./context/CategoryContext";
import { useDispatch, useSelector } from "react-redux";
import UserRouter from "./router/UserRoute";
import AgentRouter from "./router/AgentRouter";
import AdminRouter from "./router/AdminRouter";
import CenterConfirm from "./components/shared/CenterConfirm";
import Loading from "./components/shared/Loading";

const App = () => {
  const dispatch = useDispatch();

  const confirmModal = useSelector((state) => state.confirm.isModalOpen);
  const advanceAmount = useSelector((state) => state.confirm.advanceAmount);
  const selectedDate = useSelector((state) => state.confirm.selectedDate);
  const title = useSelector((state) => state.confirm.title);
  const type = useSelector((state) => state.confirm.type);
  const message = useSelector((state) => state.confirm.message);
  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    dispatch({ type: "getJwt", payload: localStorage.getItem("jwt") });
  }, []);

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
