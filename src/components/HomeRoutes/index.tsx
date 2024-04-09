import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";

const HomeRoutes = () => {
  return (
    <div>
      <Header />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomeRoutes;
