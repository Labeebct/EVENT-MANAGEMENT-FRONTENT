import { Route, Routes } from "react-router-dom";
import Signup from "../pages/adminAuth/Signup";
import Login from "../pages/adminAuth/Login";
import Dashboard from "../pages/admin/Dashboard";
import Events from "../pages/admin/Events";
import Category from "../pages/admin/Category";
import Users from "../pages/admin/Users";
import AddCategory from "../pages/admin/AddCategory";
import AddEvent from "../pages/admin/AddEvents";
import AdminLayout from '../layout/AdminLayout'
import Bookings from "../pages/admin/Bookings";
import Messages from "../pages/admin/Messages";

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
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/add-event" element={<AddEvent />} />
      </Route>
    </Routes>   
  );
};

export default AdminRouter;
