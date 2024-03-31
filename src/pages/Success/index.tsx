import Container from "src/components/Container";
import safiaLogo from "/images/colored-safia-logo.png";
import { Link, useParams } from "react-router-dom";
import Button from "src/components/Button";
import { useTranslation } from "react-i18next";

const Success = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  return (
    <Container className="px-4 mb-6">
      <div className="py-8 px-3 max-w-[748px] w-full shadow-blockShadow rounded-xl flex flex-col items-center mx-auto ">
        <img src={safiaLogo} alt={"safia-logo"} className="rounded-full" />

        <h1 className="my-6 font-bold lg:text-xl text-lg">
          {t("success_title")}
        </h1>
        <span>{t("success_descr")}</span>

        <span className="text-primary mt-4">{id}</span>

        <Link to={"/"}>
          <Button className="max-w-56 mt-6">{t("to_main")}</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Success;
