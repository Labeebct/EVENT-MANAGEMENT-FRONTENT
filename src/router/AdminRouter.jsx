import { Route, Routes } from "react-router-dom";
import Signup from "../pages/adminAuth/Signup";
import Login from "../pages/adminAuth/Login";
import Dashboard from "../pages/admin/Dashboard";
import { Suspense, lazy } from "react";
import Loading from "../components/shared/Loading";

const Events = lazy(() => import("../pages/admin/Events"));
const Category = lazy(() => import("../pages/admin/Category"));
const Users = lazy(() => import("../pages/admin/Users"));
const AddCategory = lazy(() => import("../pages/admin/AddCategory"));
const AdminLayout = lazy(() => import("../layout/AdminLayout"));
const Bookings = lazy(() => import("../pages/admin/Bookings"));
const Messages = lazy(() => import("../pages/admin/Messages"));
const Agents = lazy(() => import("../pages/admin/Agents"));
const ForgetPassword = lazy(() => import("../pages/adminAuth/ForgetPassword"));
const ResetPassword = lazy(() => import("../pages/adminAuth/ResetPassword"));
const CompleteProfile = lazy(() => import("../pages/shared/CompleteProfile"));
const Profile = lazy(() => import("../pages/admin/Profile"));

const AdminRouter = () => {
  return (
    <Routes>

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/complete-profile" element={<CompleteProfile />} />

      <Route path="/" element={<AdminLayout />}>
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<Loading />}>
              <Dashboard />
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
          path="/category"
          element={
            <Suspense fallback={<Loading />}>
              <Category />
            </Suspense>
          }
        />
        <Route
          path="/agents"
          element={
            <Suspense fallback={<Loading />}>
              <Agents />
            </Suspense>
          }
        />
        <Route
          path="/users"
          element={
            <Suspense fallback={<Loading />}>
              <Users />
            </Suspense>
          }
        />
        <Route
          path="/bookings"
          element={
            <Suspense fallback={<Loading />}>
              <Bookings />
            </Suspense>
          }
        />
        <Route
          path="/messages"
          element={
            <Suspense fallback={<Loading />}>
              <Messages />
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
        <Route
          path="/add-category"
          element={
            <Suspense fallback={<Loading />}>
              <AddCategory type={"add"} />
            </Suspense>
          }
        />
        <Route
          path="/edit-category"
          element={
            <Suspense fallback={<Loading />}>
              <AddCategory type={"edit"} />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AdminRouter;
