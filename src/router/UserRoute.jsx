import { Routes, Route } from "react-router-dom";

import UserLayout from "../layout/UserLayout";
import Login from "../pages/userAuth/Login";
import Signup from "../pages/userAuth/Signup";
import Otp from "../pages/userAuth/Otp";
import ForgetPassword from "../pages/userAuth/ForgetPassword";
import ResetPassword from "../pages/userAuth/ResetPassword";
import Home from "../pages/user/Home";
import Contactus from "../pages/user/Contactus";
import Category from "../pages/user/Category";
import Aboutus from "../pages/user/Aboutus";
import Events from "../pages/user/Events";
import PageNotFoundContent from "../components/shared/404Content";
import InternalServerError from "../pages/shared/500";
import Profile from "../pages/user/Profile";
import EventDetails from "../pages/user/EventDetails";

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-otp/:verifyType/:email" element={<Otp />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      
      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/events" element={<Events />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event_details" element={<EventDetails />} />
      </Route>

      <Route path="*" element={<PageNotFoundContent />} />
      <Route path="/404" element={<PageNotFoundContent />} />
      <Route path="/500" element={<InternalServerError />} />
    </Routes>
  );
};

export default UserRoute;
