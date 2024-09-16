import Container from "src/components/Container";
import safiaLogo from "/images/colored-safia-logo.png";
import { Link, useParams } from "react-router-dom";
import Button from "src/components/Button";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import AnimationBlock from "src/components/AnimatedBox";
import DocumentTitle from "src/components/DocumentTitle";

const Success = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Container className="px-4 mb-6">
      <DocumentTitle title={t("success_title") + " - Safia"} />
      <div className="py-8 px-3 max-w-[748px] w-full shadow-blockShadow rounded-xl flex flex-col items-center mx-auto ">
        <AnimationBlock>
          <img
            src={safiaLogo}
            alt={"safia-logo"}
            className="rounded-full mx-auto"
          />
        </AnimationBlock>
        <AnimationBlock delay={1}>
          <h1 className="my-6 font-bold lg:text-xl text-lg text-center">
            {t("success_title")}
          </h1>
        </AnimationBlock>
        <AnimationBlock delay={2}>
          <div className="mx-auto w-fit">
            <span className="">{t("success_descr")} </span>

            <span className="text-primary mt-4 ">{id}</span>
          </div>
        </AnimationBlock>
        <div className="mt-6" />
        <AnimationBlock delay={3}>
          <Link to={"/"} className="mx-auto max-w-56 mt-6">
            <Button className="w-full">{t("to_main")}</Button>
          </Link>
        </AnimationBlock>
      </div>
    </Container>
  );
};

export default Success;
