import { Outlet, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Header from "../components/agent/common/Header";
import { sideAlert } from "../redux/reducers/topSideAlert";
import Footer from "../components/user/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addBooking } from "../redux/reducers/updateBooking";

const UserLayout = () => {
  const [authenticate, setAuthenticate] = useState(false);
  const token = useSelector((state) => state.auth);
  const localStorageToken = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket.socket);

  useEffect(() => {
    if (!token) {
      if (localStorageToken) {
        const user = jwtDecode(localStorageToken);
        if (user.role == "agent") {
          setAuthenticate(true);
          return;
        } else {
          navigate("/login");
          return;
        }
      } else {
        navigate("/login");
        return;
      }       
    } else {
      const user = jwtDecode(token);
      if (user.role == "agent") {
        setAuthenticate(true);
        return;
      }
    }
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("fetchBooking", (booking) => {
        dispatch(addBooking(booking));
        dispatch(sideAlert("You hava a new booking in pending"));
        setTimeout(() => dispatch(sideAlert(null)), 5000);
      });
    }
  }, [socket]);

  return (
    authenticate && (
      <>
        <Header />
        <div className="min-h-[calc(100vh-4.5rem)] mt-10 sm:mt-0 w-full h-auto">
          <Outlet />
        </div>
        <Footer role={"agent"} />
      </>
    )
  );
};

export default UserLayout;
