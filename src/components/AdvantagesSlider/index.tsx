import { Box, Img } from "@chakra-ui/react";
import SecondarySlider from "../SecondarySlider";

import grow from "/icons/grow.svg";
import guests from "/images/guests.png";
import product from "/images/product.png";
import family from "/images/family.png";
import supplier from "/images/ss.png";
import developing from "/images/eggPrep.png";

import { useTranslation } from "react-i18next";
import AnimationBlock from "../AnimatedBox";

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

const AdvantagesSlider = () => {
  const { t } = useTranslation();

  return (
    <Box
      flex={1}
      justifyContent={"space-between"}
      display={"flex"}
      gap={2}
      className="lg:!flex-row !flex-col"
    >
      {advantageSlideArr.map((data, idx) => (
        <Box
          key={data.title}
          className="flex flex-col flex-1 justify-center items-center mt-8 px-2"
        >
          <AnimationBlock delay={idx}>
            <Img
              src={data.img}
              alt={"side-img"}
              height={290}
              width={290}
              className="rounded-full overflow-hidden mx-auto object-cover"
            />
            <h4 className="uppercase font-bold text-xl text-center my-3">
              {t(data.title)}
            </h4>

            <p className="text-textGray text-center h-12">{t(data.descr)}</p>
          </AnimationBlock>
        </Box>
      ))}
    </Box>
  );
};

export default AdvantagesSlider;
