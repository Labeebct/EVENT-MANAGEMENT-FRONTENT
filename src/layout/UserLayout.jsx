import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/user/common/Header";
import { jwtDecode } from "jwt-decode";
import Footer from "../components/user/common/Footer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserLayout = () => {

  const [authenticate, setAuthenticate] = useState(false);
  const token = useSelector((state) => state.auth);
  const localStorageToken = localStorage.getItem("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      if (localStorageToken) {
        const user = jwtDecode(localStorageToken);
        if (user.role == "user") {
          setAuthenticate(true);
          return;
        }else {
          navigate("/login");
          return;
        }
      } else {
        navigate("/login");
        return
      }
    } else {
      const user = jwtDecode(token);
      if (user.role == "user") {
        setAuthenticate(true);
        return;
      }
    }
  }, []);

  return (
    authenticate && (
      <>
        <Header />
        <Outlet />
        <Footer role={"user"} />
      </>
    )
  );
};

export default UserLayout;
