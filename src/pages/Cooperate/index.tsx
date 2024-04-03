import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "src/components/Button";
import MainSelect from "src/components/BaseInputs/MainSelect";
import orderMutation from "src/hooks/mutations/order";
import Loading from "src/components/Loader";
import { OrderType } from "src/utils/types";
import family from "/images/family.png";
import BaseInput from "src/components/BaseInputs";
import MainInput from "src/components/BaseInputs/MainInput";
import MainFileUpload from "src/components/BaseInputs/MainFileUpload";
import CategorySelect from "src/components/CategorySelect";
import MainCheckBox from "src/components/MainCheckBox";

const infoArr = [
  { name_uz: "Ishlab chiqaruvchi", name_ru: "Производитель", id: 1 },
  { name_uz: "Distribyutor", name_ru: "Дистрибьютор", id: 2 },
  { name_uz: "Import qiluvchi", name_ru: "Импортер", id: 3 },
  { name_uz: "Boshqa", name_ru: "Другое", id: 4 },
];

const Cooperate = () => {
  const { t } = useTranslation();
  const { mutate, isPending } = orderMutation();
  const navigate = useNavigate();

  const categoryRef = useRef<HTMLInputElement>(null);
  const commercial_offer_ref = useRef<HTMLInputElement>(null);
  const certificates_ref = useRef<HTMLInputElement>(null);
  const you_are_ref = useRef<HTMLInputElement>(null);
  const is_worker = useRef<HTMLInputElement>(null);

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const { product, brend } = getValues();

    mutate(
      {
        product,
        brend,
        category_id: categoryRef.current?.value,
        role: you_are_ref.current?.value,
        sertificate: certificates_ref.current?.files?.[0],
        brochure: commercial_offer_ref.current?.files?.[0],
        safia_worker: is_worker.current?.checked,
      },
      {
        onSuccess: (data: OrderType) =>
          navigate(`/success/${data.id}`, { replace: true }),
        onError: (e) => alert(e.message),
      }
    );
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-1 lg:gap-20 gap-6 lg:flex-row flex-col items-center pb-10"
    >
      <div className="flex flex-1 max-w-[750px] h-full w-full">
        <img src={family} alt={"making"} className="w-full h-full rounded-lg" />
      </div>

      <div className="flex flex-1 lg:gap-6 gap-3 flex-col lg:w-[30vw] px-3">
        <h1 className="lg:text-5xl uppercase text-2xl">
          {t("will_you_cooperate")}
        </h1>
        <p>{t("order_descr")}</p>
        <BaseInput label={t("order_name")} error={errors.product}>
          <MainInput
            register={register("product", { required: t("required_field") })}
            placeholder={t("order_input")}
          />
        </BaseInput>
        <BaseInput label={t("order_brand")} error={errors.brend}>
          <MainInput
            register={register("brend", { required: t("required_field") })}
            placeholder={t("order_input")}
          />
        </BaseInput>
        <CategorySelect forwardedRef={categoryRef} />
        <BaseInput label={t("order_commertial_reqs")}>
          <MainFileUpload
            placeholder={"order_commertial_reqs_descr"}
            forwardedRef={commercial_offer_ref}
          />
        </BaseInput>
        <BaseInput label={t("order_certificates")}>
          <MainFileUpload
            placeholder={"order_certificated_descr"}
            forwardedRef={certificates_ref}
          />
        </BaseInput>

        <BaseInput label={t("order_you_are")}>
          <MainSelect forwardedRef={you_are_ref} values={infoArr} />
        </BaseInput>

        <MainCheckBox forwardedRef={is_worker} label={"order_worked_with"} />

        <Button type="submit">{t("next")}</Button>
      </div>

      {isPending && <Loading />}
    </form>
  );
};

export default Cooperate;
