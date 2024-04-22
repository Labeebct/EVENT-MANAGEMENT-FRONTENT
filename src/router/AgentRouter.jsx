import { Routes, Route } from "react-router-dom";
import AgentLayout from "../layout/AgentLayout";
import Home from "../pages/agent/Home";
import MyEvents from "../pages/agent/MyEvents";
import MyBookings from "../pages/agent/MyBookings";
import AddEvents from "../pages/agent/AddEvents";
import About from "../pages/agent/About";
import Contact from "../pages/agent/Contact";
import Profile from "../pages/agent/Profile";

const AgentRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AgentLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/add-events" element={<AddEvents />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  ); 
};

export default AgentRouter;
