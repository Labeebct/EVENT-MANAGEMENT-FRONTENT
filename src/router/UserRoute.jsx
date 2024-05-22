import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import UserLayout from "../layout/UserLayout";
import Login from "../pages/userAuth/Login";
import Signup from "../pages/userAuth/Signup";
import Otp from "../pages/userAuth/Otp";
import ForgetPassword from "../pages/userAuth/ForgetPassword";
import ResetPassword from "../pages/userAuth/ResetPassword";
import Home from "../pages/user/Home";
import PageNotFoundContent from "../components/shared/404Content";
import InternalServerError from "../pages/shared/500";
import Loading from "../components/shared/Loading";

//Lazy components
const Contactus = lazy(() => import("../pages/user/Contactus"));
const Category = lazy(() => import("../pages/user/Category"));
const Aboutus = lazy(() => import("../pages/user/Aboutus"));
const Events = lazy(() => import("../pages/user/Events"));
const Profile = lazy(() => import("../pages/user/Profile"));
const EventDetails = lazy(() => import("../pages/user/EventDetails"));
const CompleteProfile = lazy(() => import("../pages/shared/CompleteProfile"));

const UserRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-otp/:verifyType/:email" element={<Otp />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/complete-profile" element={<CompleteProfile />} />

      <Route path="/" element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <Contactus />
            </Suspense>
          }
        />
        <Route
          path="/category"
          element={
            <Suspense fallback={<Loading />}>
              <Category />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loading />}>
              <Aboutus />
            </Suspense>
          }
        />
        <Route
          path="/events"
          element={
            <Suspense fallback={<Loading />}>
              <Events />
            </Suspense>
          }
        />
        <Route
          path="/view-event"
          element={
            <Suspense fallback={<Loading />}>
              <EventDetails />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense> 
          }
        />
      </Route>

      <Route path="*" element={<PageNotFoundContent />} />
      <Route path="/404" element={<PageNotFoundContent />} />
      <Route path="/500" element={<InternalServerError />} />
    </Routes>
  );
};

export default UserRoute;
