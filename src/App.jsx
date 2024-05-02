import { Routes, Route } from "react-router-dom";
import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import UserRouter from "./router/UserRoute";
import AgentRouter from "./router/AgentRouter";
import AdminRouter from "./router/AdminRouter";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "getJwt", payload: localStorage.getItem("jwt") });
  }, []);

  return (
    <Routes>
      <Route path="/*" element={<UserRouter />} />
      <Route path="/admin/*" element={<AdminRouter />} />
      <Route path="/agent/*" element={<AgentRouter />} />
    </Routes>
  );
};

export default App;
