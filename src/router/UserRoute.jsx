import { Routes, Route } from "react-router-dom";

import UserLayout from "../layout/UserLayout";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Otp from "../pages/auth/Otp";
import ForgetPassword from "../pages/auth/ForgetPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import Home from "../pages/user/Home";
import Contactus from "../pages/user/Contactus";
import Category from "../pages/user/Category";
import Aboutus from "../pages/user/Aboutus";
import Events from "../pages/user/Events";

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify" element={<Otp />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/events" element={<Events />} />
      </Route>
    </Routes>
  );
};

export default UserRoute;
