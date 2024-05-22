import { Outlet } from "react-router-dom";
import Header from "../components/user/common/Header";
import Footer from "../components/user/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { closeModal, openModal } from "../redux/actions/centerConfirm";

const UserLayout = () => {
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socket.socket);

  let type = null;
  let title = null;
  let message = null;

  useEffect(() => {
    if (socket) {
      socket.on("eventCancelled", () => {
        dispatch(closeModal());
        dispatch({ type: "loading", payload: true });
        setTimeout(() => {
          dispatch({ type: "loading", payload: false });
          dispatch(
            openModal(
              (type = "cancell_request"),
              (title = "Your request has been rejected"),
              (message =
                "We regret to inform you that your recent request has been reviewed and rejected by our agent due to certain reasons. We apologize for any inconvenience and encourage you to check other available options.")
            )
          );
        }, 1000);

        setTimeout(() => {
          dispatch({ type: "EVENT_CANCELED" });
        }, 4000);
      });

      socket.on("eventApproved", (approveEvent) => {
        dispatch(closeModal());
        const bookedEvent = JSON.stringify(approveEvent);
        localStorage.setItem("bookedEvent", bookedEvent);
        dispatch({ type: "loading", payload: true });
        setTimeout(() => {
          dispatch({ type: "loading", payload: false });
          dispatch({ type: "BOOKED_EVENT", payload: approveEvent });
          dispatch(
            openModal(
              (type = "proceed_payment"),
              (title = "Your request has been approved"),
              (message =
                "We are happy to inform you that your recent request has been reviewed and approved.You can now proceed to payment for confirm your booking.")
            )
          );
        }, 2000);
      });
    }
  }, [socket]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer role={"user"} />
    </>
  );
};

export default UserLayout;
