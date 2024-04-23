import { Routes, Route } from "react-router-dom";
import UserRouter from "./router/UserRoute";
import AdminRouter from "./router/AdminRouter";
import AgentRouter from "./router/AgentRouter";

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
