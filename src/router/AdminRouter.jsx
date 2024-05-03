import { Route, Routes } from "react-router-dom";
import Signup from "../pages/adminAuth/Signup";
import Login from "../pages/adminAuth/Login";
import Dashboard from "../pages/admin/Dashboard";
import Events from "../pages/admin/Events";
import Category from "../pages/admin/Category";
import Users from "../pages/admin/Users";
import AddCategory from "../pages/admin/AddCategory";
import AdminLayout from "../layout/AdminLayout";
import Bookings from "../pages/admin/Bookings";
import Messages from "../pages/admin/Messages";
import Agents from "../pages/admin/Agents";
import ForgetPassword from "../pages/adminAuth/ForgetPassword";
import ResetPassword from "../pages/adminAuth/ResetPassword";
import CompleteProfile from "../pages/shared/CompleteProfile";
import Profile from "../pages/admin/Profile";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/complete-profile" element={<CompleteProfile />} />

      <Route path="/" element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/category" element={<Category />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/users" element={<Users />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-category" element={<AddCategory type={'add'} />} />
        <Route path="/edit-category" element={<AddCategory type={'edit'}/>} />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
