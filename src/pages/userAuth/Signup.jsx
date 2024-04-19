import SideBar from "../../components/auth/SideBar";
import SignupFrame from "../../components/auth/SignupFrame";

const Signup = () => {
  return (
    <main className="w-screen h-screen flex">
      <SideBar role={"user"} />
      <div className="h-full flex-1 auth_bg w-[calc(100vw-320px)] flex justify-center items-center">
        <SignupFrame />
      </div>
    </main>
  );
};

export default Signup;
