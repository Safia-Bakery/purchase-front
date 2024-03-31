import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  href: string;
  children?: ReactNode;
}

const HeaderRouter = ({ href, children }: Props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const scroller = () => {
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document?.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    document?.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
  };
  return <button onClick={scroller}>{children}</button>;
};

export default HeaderRouter;
