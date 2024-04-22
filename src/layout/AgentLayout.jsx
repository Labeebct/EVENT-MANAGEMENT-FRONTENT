import { Outlet } from "react-router-dom";
import Header from "../components/agent/common/Header";
import Footer from "../components/user/common/Footer";

const UserLayout = () => {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-4.5rem)] mt-10 sm:mt-0 w-full h-auto">
        <Outlet />
      </div>
      <Footer role={'agent'} />
    </>
  );
};

export default UserLayout;
