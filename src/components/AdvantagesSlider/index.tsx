import SecondarySlider from "../SecondarySlider";

import { useTranslation } from "react-i18next";

const AdvantagesSlider = ({ data }: { data: any }) => {
  const { t } = useTranslation();
  const renderFirstSlider = (data: any, idx: number) => {
    return (
      <div key={idx} className="flex flex-col items-center mt-8">
        <img
          src={data.img}
          alt={"side-img"}
          height={360}
          width={360}
          className="rounded-full overflow-hidden"
        />
        <h4 className="uppercase font-bold text-xl text-center my-3">
          {t(data.title)}
        </h4>

        <p className="text-textGray text-center">{t(data.descr)}</p>
      </div>
    );
  };
  return <SecondarySlider data={data} component={renderFirstSlider} />;
};

export default AdvantagesSlider;
