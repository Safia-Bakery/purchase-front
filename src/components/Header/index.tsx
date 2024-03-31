import LocaleSwitcher from "../ChangeLang";

import safiaLogo from "/images/safia-logo.png";

import Container from "../Container";
import MobileHeader from "../MobileHeader";
import HeaderRouter from "../HeaderRouter";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Header() {
  const { t } = useTranslation();
  const lib = {
    purchasements: "purchasements",
    previlleges: "previlleges",
    suppliers: "suppliers",
    expectation: "expectation",
    cooperation: "cooperation",
    our_suppliers: "our_suppliers",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
      <Container className="flex justify-between items-center w-full ">
        <Link to="/" className="flex items-center gap-2 lg:flex-1">
          <img src={safiaLogo} alt={"safia-logo"} height={70} width={70} />
          <h3>{t("purchase")}</h3>
        </Link>

        <nav className="container lg:flex hidden items-center justify-between flex-[3]">
          <ul className="flex gap-x-8">
            {Object.entries(lib)?.map((item) => (
              <li key={item[0]}>
                <HeaderRouter href={`${item[0]}`}>{t(item[1])}</HeaderRouter>
              </li>
            ))}
          </ul>
        </nav>
        <LocaleSwitcher />

        <MobileHeader items={lib} />
      </Container>
    </header>
  );
}
