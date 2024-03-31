import bg from "/images/login-bg.png";
import logo from "/icons/safia-logo-white.svg";
import { Outlet } from "react-router-dom";

const AuthLayoout = () => {
  return (
    <section className="relative h-screen">
      <div className="z-50 fixed inset-0 bg-black opacity-80" />
      <img
        src={bg}
        alt={"background-image"}
        className="fixed inset-0 object-fill h-full z-40"
      />
      <img
        src={logo}
        alt={"safia-logo"}
        className="fixed top-5 left-5 z-[51] "
      />

      <div className="z-50 fixed inset-0">
        <div className="lg:p-24 p-4 z-[51] bg-white rounded-xl max-w-[900px] w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AuthLayoout;
