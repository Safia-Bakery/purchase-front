import bg from "/images/login-bg.png";
import logo from "/icons/safia-logo-white.svg";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "src/store/rootConfig";
import { tokenSelector } from "src/store/reducers/auth";
import { useEffect } from "react";
import useQueryString from "src/hooks/useQueryString";

const AuthLayoout = () => {
  const token = useAppSelector(tokenSelector);
  const is_reset = useQueryString("is_reset");
  useEffect(() => {
    if (!!token && !is_reset) window.location.replace("/");
  }, [token]);

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
