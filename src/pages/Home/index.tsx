import eggPrep from "/images/eggPrep.png";
import safia_img from "/images/safia-img.png";
import cooperateImg from "/images/cooperate.png";
import stabilization from "/icons/stabilization.svg";
import caring from "/icons/caring.svg";
import developingIcon from "/icons/developing.svg";
import grow from "/icons/grow.svg";
import family from "/images/family.png";
import AdvantagesSlider from "src/components/AdvantagesSlider";
import Container from "src/components/Container";
import Button from "src/components/Button";
import { useTranslation } from "react-i18next";
import MainSlider from "src/components/MainSlider";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useAppSelector } from "src/store/rootConfig";
import { tokenSelector } from "src/store/reducers/auth";
import { safiaEmail } from "src/utils/helper";
import AnimationBlock from "src/components/AnimatedBox";
import { Box, Image, Text } from "@chakra-ui/react";

const Home = () => {
  const { t } = useTranslation();
  const token = useAppSelector(tokenSelector);

  const renderUrl = useMemo(() => {
    return !token ? "/auth/login" : "cooperate";
  }, [token]);

  return (
    <>
      <Box>
        <Box className="relative lg:h-[65svh] overflow-hidden ">
          <MainSlider />
          <Container className="lg:absolute top-0 bottom-0 h-full z-10">
            <Box className="lg:absolute top-1/2 lg:-translate-y-1/2 lg:p-10 z-10 bg-white rounded-xl">
              <AnimationBlock>
                <h1 className="uppercase md:max-w-[430px] lg:text-5xl text-2xl lg:my-0 my-3">
                  {t("will_you_cooperate")}
                </h1>
                <p className="md:max-w-[430px] w-full text-textGray lg:my-6 ">
                  {t("cooperate_descr")}
                </p>
                <Link to={renderUrl}>
                  <Button className="w-64 lg:mt-0 mt-3">
                    {t("send_request")}
                  </Button>
                </Link>
              </AnimationBlock>
            </Box>
          </Container>
        </Box>
      </Box>

      <Box className="lg:pt-10">
        <Container>
          <Box
            className="flex justify-between lg:pt-24 gap-4"
            id={"purchasements"}
          >
            <Box className="flex flex-col flex-1 mt-3 justify-center lg:w-[90%]">
              <AnimationBlock>
                <h2 className="text-3xl">{t("company_purchases")}</h2>
                <p className="lg:text-lg text-xs mt-4 mb-6 text-textGray">
                  {t("company_descr")}
                </p>
              </AnimationBlock>
            </Box>
            <Box className="hidden flex-1 items-center lg:flex justify-center">
              <AnimationBlock delay={4}>
                <Image
                  src={eggPrep}
                  alt="company-purchasements"
                  className="rounded-full"
                />
              </AnimationBlock>
            </Box>
          </Box>

          <Box className="lg:pt-40 pt-16" id={"previlleges"}>
            <h2 className="lg:text-3xl text-xl uppercase z-10 absolute lg:-mt-14 lg:left-1/2 lg:-translate-x-1/2 ">
              {t("advantages")}
            </h2>
            <AdvantagesSlider />
          </Box>

          <Box
            className="flex lg:flex-row flex-col justify-between items-center py-24 gap-4"
            id={"suppliers"}
          >
            <AnimationBlock>
              <Box className="flex flex-1 items-center">
                <Image
                  src={cooperateImg}
                  alt={"cooperate-img"}
                  className="flex rounded-full overflow-hidden"
                />
              </Box>
            </AnimationBlock>
            <AnimationBlock delay={3}>
              <Box className="flex flex-col lg:w-[47%] flex-1 lg:pt-0 pt-5 gap-4">
                <h2 className="lg:text-3xl text-xl uppercase lg:mb-8">
                  {t("coop_title")}
                </h2>

                <Box className="flex gap-3 lg:mb-6 items-center">
                  <Image src={stabilization} alt={"stabilization"} />

                  <span>{t("coop_stabilization")}</span>
                </Box>

                <Box className="flex gap-3 lg:mb-6 items-center">
                  <Image src={grow} alt={"grow"} />

                  <span>{t("coop_grow")}</span>
                </Box>

                <Box className="flex gap-3 lg:mb-6 items-center">
                  <Image src={caring} alt={"caring"} />

                  <span>{t("coop_caring")}</span>
                </Box>

                <Box className="flex gap-3 lg:mb-6 items-center">
                  <Image src={developingIcon} alt={"developing"} />

                  <span>{t("coop_developing")}</span>
                </Box>
              </Box>
            </AnimationBlock>
          </Box>

          <Box
            className="flex justify-between items-center mb-10 lg:flex-row flex-col gap-6 pt-24"
            id={"expectation"}
          >
            <AnimationBlock>
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
            </AnimationBlock>
            <AnimationBlock delay={2}>
              <Image
                src={safia_img}
                alt={"safia-img"}
                className="max-w-[520px] w-full object-contain"
              />
            </AnimationBlock>
          </Box>
        </Container>

        <Box
          className="flex items-center lg:pt-32 lg:h-[75vh] flex-1 lg:flex-row flex-col pt-14 justify-between"
          id={"cooperation"}
        >
          <Box className="flex flex-1 max-w-[800px] h-full w-full">
            <Image
              src={family}
              alt={"making"}
              className="w-full h-full rounded-tr-lg rounded-br-lg"
            />
          </Box>
          <Box className="flex flex-col w-full lg:ml-32 justify-between h-full content-between flex-1 p-4">
            <AnimationBlock>
              <Box className="lg:max-w-[490px] w-full flex flex-col flex-1">
                <Text
                  fontSize={[24, 48]}
                  // className="lg:text-5xl text-2xl"
                >
                  {t("will_you_cooperate")}
                </Text>

                <Text maxW={96} mt={10} mb={14}>
                  {t("cooperate_descr")}
                </Text>

                <Link to={renderUrl}>
                  <Button className="w-full">{t("send_request")}</Button>
                </Link>
              </Box>

              <Box className="flex flex-col mt-8">
                <Text>{t("our_mail")}</Text>

                <Link
                  className="text-[40px] underline mt-3"
                  to={`mailto:${safiaEmail}`}
                >
                  safiabakery.uz
                </Link>
              </Box>
            </AnimationBlock>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
