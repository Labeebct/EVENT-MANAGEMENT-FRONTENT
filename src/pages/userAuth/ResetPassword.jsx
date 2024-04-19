import ResetPasswordFrame from "../../components/auth/ResetPasswordFrame";
import SideBar from "../../components/auth/SideBar";

const ResetPassword = () => {
  return (
    <main className="w-screen h-screen flex">
      <SideBar role={"user"} />
      <div className="h-full flex-1 auth_bg w-[calc(100vw-320px)] flex justify-center items-center">
        <ResetPasswordFrame />
      </div>
    </main>
  );
};

export default ResetPassword;
