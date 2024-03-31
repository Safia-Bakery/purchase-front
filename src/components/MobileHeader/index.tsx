import { useEffect, useState } from "react";
import cl from "classnames";

import userIcon from "/icons/user.svg";
import logoutIcon from "/icons/logout.svg";
import Button from "../Button";
import burger from "/icons/burger.svg";
import { Link, useNavigate } from "react-router-dom";
import { BtnTypes } from "src/utils/types";
import { useTranslation } from "react-i18next";

interface Props {
  items: any;
}

const MobileHeader = ({ items }: Props) => {
  const { t } = useTranslation();
  const [active, $active] = useState(false);
  const [token, $token] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleActive = () => $active((prev) => !prev);

  const handleNavigate = () => {
    if (!token) navigate("/auth/register");
    else {
      localStorage.removeItem("token");
      window.location.reload();
    }
  };

  useEffect(() => {
    $token(localStorage.getItem("token"));
  }, []);

  return (
    <>
      <button className="hidden lg:flex ml-6" onClick={handleNavigate}>
        <img src={!token ? userIcon : logoutIcon} alt={"user"} />
      </button>
      <Button
        onClick={toggleActive}
        btnType={BtnTypes.white}
        className="lg:hidden flex items-center justify-center z-20"
      >
        <img src={burger} alt={"open-header"} />
      </Button>
      {active && <div className="fixed inset-0 z-10" onClick={toggleActive} />}
      <div
        className={cl(
          "fixed translate-x-44 transition-transform right-0 top-20 shadow-lg p-2 rounded-lg bg-white z-20 border border-textGray",
          {
            ["!translate-x-0"]: active,
          }
        )}
      >
        <nav className="flex">
          <ul className="flex flex-col gap-x-8">
            {Object.entries(items)?.map((item: any) => (
              <li key={item[0]} className="my-1">
                <Link to={`#${item[0]}`}>{item[1]}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileHeader;
