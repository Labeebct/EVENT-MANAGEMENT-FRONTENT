import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import UserRouter from "./router/UserRoute";
const AgentRouter = lazy(() => import("./router/AgentRouter"));
const AdminRouter = lazy(() => import("./router/AdminRouter"));

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<UserRouter />} />
      <Route path="/admin/*" element={<AdminRouter />} />
      <Route path="/agent/*" element={<AgentRouter />} />
    </Routes>
  );
};

export default App;
