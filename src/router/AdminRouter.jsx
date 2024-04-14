import { Route, Routes } from "react-router-dom";
import Signup from "../pages/adminAuth/Signup";
import Login from "../pages/adminAuth/Login";
import Dashboard from "../pages/admin/Dashboard";
import Events from "../pages/admin/Events";
import Category from "../pages/admin/Category";
import Users from "../pages/admin/Users";
import AdminLayout from '../layout/AdminLayout'

const AdminRouter = () => {

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/category" element={<Category />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
