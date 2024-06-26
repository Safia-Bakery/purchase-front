import eggPrep from "/images/eggPrep.png";
import safia_img from "/images/safia-img.png";
import cooperateImg from "/images/cooperate.png";
import stabilization from "/icons/stabilization.svg";
import caring from "/icons/caring.svg";
import developingIcon from "/icons/developing.svg";
import grow from "/icons/grow.svg";
import guests from "/images/guests.png";
import product from "/images/product.png";
import family from "/images/family.png";
import supplier from "/images/ss.png";
import developing from "/images/eggPrep.png";
import AdvantagesSlider from "src/components/AdvantagesSlider";
import Container from "src/components/Container";
import Button from "src/components/Button";
import { useTranslation } from "react-i18next";
import MainSlider from "src/components/MainSlider";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useAppSelector } from "src/store/rootConfig";
import { tokenSelector } from "src/store/reducers/auth";
import SuppliersSlider from "src/components/SuppliersSlider";
import { safiaEmail } from "src/utils/helper";

const suppliersSlider = [
  { img: supplier, descr: "Здесь будет цитата от руководителся r" },
  {
    img: supplier,
    descr: "Здесь будет цитата от руководителся, которая идет в две строки p",
  },
  { img: supplier, descr: "Здесь будет цитата от руководителся q" },
  {
    img: supplier,
    descr: "Здесь будет цитата от руководителся, которая идет в две строки",
  },
];

const advantageSlideArr = [
  {
    img: guests,
    descr: "guests_descr",
    title: "guests_title",
  },
  {
    img: product,
    descr: "product_descr",
    title: "product_title",
  },
  {
    img: family,
    descr: "family_descr",
    title: "family_title",
  },
  {
    img: developing,
    descr: "developing_descr",
    title: "developing_title",
  },
];

const Home = () => {
  const { t } = useTranslation();
  const token = useAppSelector(tokenSelector);

  const renderUrl = useMemo(() => {
    return !token ? "/auth/login" : "cooperate";
  }, [token]);

  return (
    <>
      <section>
        <div className="relative lg:h-[65svh] overflow-hidden ">
          <MainSlider />
          <Container className="lg:absolute top-0 bottom-0 h-full z-10">
            <div className="lg:absolute top-1/2 lg:-translate-y-1/2 lg:p-10 z-10 bg-white rounded-xl">
              <h1 className="uppercase md:max-w-[430px] lg:text-5xl text-2xl lg:my-0 my-3">
                {t("will_you_cooperate")}
              </h1>
              <p className="md:max-w-[430px] uppercase w-full text-textGray lg:my-6 ">
                {t("cooperate_descr")}
              </p>
              <Link to={renderUrl}>
                <Button className="w-64 lg:mt-0 mt-3">
                  {t("send_request")}
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      </section>

      <section className="lg:pt-10">
        <Container>
          <div className="flex justify-between lg:pt-20" id={"purchasements"}>
            <div className="flex flex-col flex-1 mt-3 justify-center">
              <h2 className="text-3xl">{t("company_purchases")}</h2>
              <p className="lg:text-lg text-xs mt-4 mb-6 text-textGray">
                {t("company_descr")}
              </p>
              {/* <div className="flex">
                <div className="flex flex-1 flex-col">
                  <h4 className="mb-4 mt-4">{t("purchase_regulations")}</h4>
                  <Button className="w-56 mb-8 ">{t("download_pdf")}</Button>

                  <h4 className="mb-4">{t("delivery_template")}</h4>
                  <Button className="w-56 mb-8">{t("download_pdf")}</Button>

                  <h4 className="mb-4">{t("code_conduct")}</h4>
                  <Button className="w-56 mb-8">{t("download_pdf")}</Button>
                </div>
                <div className="flex flex-1 items-center lg:hidden justify-center">
                  <img
                    src={eggPrep}
                    alt="company-purchasements"
                    className="rounded-full"
                  />
                </div>
              </div> */}
            </div>
            <div className="hidden flex-1 items-center lg:flex justify-center">
              <img
                src={eggPrep}
                alt="company-purchasements"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="lg:pt-32 pt-16" id={"previlleges"}>
            <h2 className="lg:text-3xl text-xl uppercase z-10 absolute lg:-mt-14 lg:left-1/2 lg:-translate-x-1/2 ">
              {t("advantages")}
            </h2>
            <AdvantagesSlider data={advantageSlideArr} />
          </div>

          {/* <div className="lg:pt-24 pt-12 flex items-center flex-col">
            <h2 className="lg:text-3xl text-xl uppercase text-center max-w-[490px] w-full">
              {t("actual_title")}
            </h2>
            <p className="text-textGray text-center mt-8 mb-6 max-w-[750px] w-full">
              {t("actual_descr")}
            </p>

            <Button className="w-56">{t("open_table")}</Button>
          </div> */}

          <div
            className="flex lg:flex-row flex-col justify-between items-center py-20 gap-4"
            id={"suppliers"}
          >
            <div className="flex flex-1 items-center">
              <img
                src={cooperateImg}
                alt={"cooperate-img"}
                className="flex rounded-full overflow-hidden"
              />
            </div>

            <div className="flex flex-col lg:w-[47%] flex-1 lg:pt-0 pt-5 gap-4">
              <h2 className="lg:text-3xl text-xl uppercase lg:mb-8">
                {t("coop_title")}
              </h2>

              <div className="flex gap-3 lg:mb-6 items-center">
                <img src={stabilization} alt={"stabilization"} />

                <span>{t("coop_stabilization")}</span>
              </div>

              <div className="flex gap-3 lg:mb-6 items-center">
                <img src={grow} alt={"grow"} />

                <span>{t("coop_grow")}</span>
              </div>

              <div className="flex gap-3 lg:mb-6 items-center">
                <img src={caring} alt={"caring"} />

                <span>{t("coop_caring")}</span>
              </div>

              <div className="flex gap-3 lg:mb-6 items-center">
                <img src={developingIcon} alt={"developing"} />

                <span>{t("coop_developing")}</span>
              </div>
            </div>
          </div>

          <div
            className="flex justify-between items-center mb-10 lg:flex-row flex-col gap-6"
            id={"expectation"}
          >
            <div>
              <h2 className="lg:text-5xl text-xl uppercase max-w-[620px] w-full mb-4">
                {t("expectation_title")}
              </h2>
              <p className="text-textGray max-w-[490px] w-full">
                {t("expectation_descr")}
              </p>
              <h2 className="lg:text-5xl text-xl uppercase max-w-[620px] w-full mb-4 mt-8">
                {t("how_we_reaching")}
              </h2>
              <p className="text-textGray max-w-[490px] w-full">
                {t("how_we_reaching_descr")}
              </p>
            </div>
            <img
              src={safia_img}
              alt={"safia-img"}
              className="max-w-[520px] w-full object-contain"
            />
          </div>

          <div className="lg:pt-36 pt-14" id={"our_suppliers"}>
            <h2 className="lg:text-3xl text-xl uppercase z-10 absolute lg:left-1/2 lg:-translate-x-1/2 lg:-mt-14">
              {t("our_suppliers")}
            </h2>
            <SuppliersSlider data={suppliersSlider} />
          </div>
        </Container>

        <div
          className="flex items-center lg:pt-32 lg:h-[75vh] flex-1 lg:flex-row flex-col pt-14 justify-between"
          id={"cooperation"}
        >
          <div className="flex flex-1 max-w-[800px] h-full w-full">
            <img
              src={family}
              alt={"making"}
              className="w-full h-full rounded-tr-lg rounded-br-lg"
            />
          </div>
          <div className="flex flex-col w-full lg:ml-32 justify-between h-full content-between flex-1 p-4">
            <div className="lg:max-w-[490px] w-full flex flex-col flex-1">
              <h2 className="lg:text-5xl text-2xl">
                {t("will_you_cooperate")}
              </h2>

              <p className="mt-10 mb-14 max-w-96">{t("cooperate_descr")}</p>

              <Link to={renderUrl}>
                <Button className="w-full">{t("send_request")}</Button>
              </Link>
            </div>

            <div className="flex flex-col mt-8">
              <span>{t("our_mail")}</span>

              <Link
                className="text-[40px] underline mt-3"
                to={`mailto:${safiaEmail}`}
              >
                safiabakery.uz
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
