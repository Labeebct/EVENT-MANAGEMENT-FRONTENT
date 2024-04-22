import { Outlet } from "react-router-dom";
import Header from "../components/user/common/Header";
import Footer from '../components/user/common/Footer'

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer role={'user'} />
    </>
  );
};

export default UserLayout;
