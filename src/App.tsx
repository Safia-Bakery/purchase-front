import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Route, Routes, useNavigate } from "react-router-dom";
import Suspend from "./components/Suspend";
import { lazy, useEffect } from "react";
import { useAppSelector } from "./store/rootConfig";
import { langSelector } from "./store/reducers/language";
import i18n from "./localization";

const Login = lazy(() => import("src/pages/Login"));
const AuthLayoout = lazy(() => import("./components/AuthLayout"));
const Home = lazy(() => import("src/pages/Home"));

const ForgotPassword = lazy(() => import("src/pages/ForgotPassword"));
const Register = lazy(() => import("src/pages/Register"));
const ResetPassword = lazy(() => import("src/pages/ResetPassword"));
const Verification = lazy(() => import("src/pages/Verification"));
const Cooperate = lazy(() => import("src/pages/Cooperate"));
const History = lazy(() => import("src/pages/History"));
const Success = lazy(() => import("src/pages/Success"));
const HomeRoutes = lazy(() => import("src/components/HomeRoutes"));

function App() {
  const lang = useAppSelector(langSelector);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspend>
            <HomeRoutes />
          </Suspend>
        }
      >
        <Route
          element={
            <Suspend>
              <Home />
            </Suspend>
          }
          path="/"
        />
        <Route
          element={
            <Suspend>
              <Cooperate />
            </Suspend>
          }
          path="cooperate"
        />
        <Route
          element={
            <Suspend>
              <History />
            </Suspend>
          }
          path="history"
        />
        <Route
          element={
            <Suspend>
              <Success />
            </Suspend>
          }
          path="history"
        />
      </Route>
      <Route path="/auth" element={<AuthLayoout />}>
        <Route
          element={
            <Suspend>
              <Login />
            </Suspend>
          }
          path={"login"}
        />

        <Route
          element={
            <Suspend>
              <ForgotPassword />
            </Suspend>
          }
          path={"forgot"}
        />

        <Route
          element={
            <Suspend>
              <Register />
            </Suspend>
          }
          path={"register"}
        />

        <Route
          element={
            <Suspend>
              <ResetPassword />
            </Suspend>
          }
          path={"reset-password"}
        />

        <Route
          element={
            <Suspend>
              <Verification />
            </Suspend>
          }
          path={"verify"}
        />
      </Route>
    </Routes>
  );
}

export default App;
