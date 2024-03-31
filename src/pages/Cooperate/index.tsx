import family from "/images/family.png";
import BaseInput from "src/components/BaseInputs";
import MainInput from "src/components/BaseInputs/MainInput";
import MainFileUpload from "src/components/BaseInputs/MainFileUpload";
import CategorySelect from "src/components/CategorySelect";
import { useTranslation } from "react-i18next";

const Cooperate = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-1 lg:gap-20 gap-6 lg:flex-row flex-col">
      <div className="flex flex-1 max-w-[800px] h-full w-full">
        <img src={family} alt={"making"} className="w-full h-full rounded-lg" />
      </div>

      <div className="flex lg:flex-none flex-1 lg:gap-6 gap-3 flex-col lg:w-[30vw] ">
        <h1 className="lg:text-5xl uppercase text-2xl">
          {t("will_you_cooperate")}
        </h1>

        <p>{t("order_descr")}</p>

        <BaseInput label={t("order_name")}>
          <MainInput placeholder={t("order_input")} />
        </BaseInput>

        <BaseInput label={t("order_brand")}>
          <MainInput placeholder={t("order_input")} />
        </BaseInput>

        {/* <BaseInput label={t('order_category')}>
              <MainSelect />
            </BaseInput> */}

        <CategorySelect />

        <BaseInput label={t("order_commertial_reqs")}>
          <MainFileUpload />
        </BaseInput>
      </div>
    </div>
  );
};

export default Cooperate;
