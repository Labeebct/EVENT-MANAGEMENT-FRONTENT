import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRouter from "./router/UserRoute";
import AdminRouter from "./router/AdminRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<UserRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
