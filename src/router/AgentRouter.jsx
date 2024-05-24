import { Routes, Route } from "react-router-dom";
import AgentLayout from "../layout/AgentLayout";
import { Suspense, lazy } from "react";
import Loading from "../components/shared/Loading";

const Home = lazy(() => import("../pages/agent/Home"));
const MyEvents = lazy(() => import("../pages/agent/MyEvents"));
const MyBookings = lazy(() => import("../pages/agent/MyBookings"));
const AddEvents = lazy(() => import("../pages/agent/AddEvents"));
const About = lazy(() => import("../pages/agent/About"));
const Contact = lazy(() => import("../pages/agent/Contact"));
const Profile = lazy(() => import("../pages/agent/Profile"));

const AgentRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AgentLayout />}>
        <Route
          path="/home"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/add-events"
          element={
            <Suspense fallback={<Loading />}>
              <AddEvents type={"add"} />
            </Suspense>
          }
        />
        <Route
          path="/my-events"
          element={
            <Suspense fallback={<Loading />}>
              <MyEvents />
            </Suspense>
          }
        />
        <Route
          path="/edit-event"
          element={
            <Suspense fallback={<Loading />}>
              <AddEvents type={"edit"} />
            </Suspense>
          }
        />
        <Route
          path="/my-bookings"
          element={
            <Suspense fallback={<Loading />}>
              <MyBookings />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
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
    </Routes>
  );
};

export default AgentRouter;
