import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRouter from "./router/UserRoute";
import AdminRouter from "./router/AdminRouter";
import AgentRouter from "./router/AgentRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/agent/*" element={<AgentRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
