import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "src/components/Button";
import MainSelect from "src/components/BaseInputs/MainSelect";
import orderMutation from "src/hooks/mutations/order";
import Loading from "src/components/Loader";
import { FileState, ModalTypes, OrderType } from "src/utils/types";
import family from "/images/family.png";
import BaseInput from "src/components/BaseInputs";
import MainInput from "src/components/BaseInputs/MainInput";
import CategorySelect from "src/components/CategorySelect";
import MainCheckBox from "src/components/MainCheckBox";
import UploadImages from "src/components/UploadImages";
import { useAppDispatch, useAppSelector } from "src/store/rootConfig.ts";
import { clearImages, imageSelector } from "src/store/reducers/images.ts";
import { useNavigateParams } from "src/hooks/useCustomNavigate";
import AnimationBlock from "src/components/AnimatedBox";
import DocumentTitle from "src/components/DocumentTitle";

const infoArr = [
  { name_uz: "Ishlab chiqaruvchi", name_ru: "Производитель", id: 1 },
  { name_uz: "Distribyutor", name_ru: "Дистрибьютор", id: 2 },
  { name_uz: "Import qiluvchi", name_ru: "Импортер", id: 3 },
  { name_uz: "Boshqa", name_ru: "Другое", id: 5 },
];

const UploadImagesArr = [
  { label: "order_commertial_reqs", modal: ModalTypes.brochures },
  { label: "order_certificates", modal: ModalTypes.sertificates },
  { label: "product_images", modal: ModalTypes.product_images },
];

const Cooperate = () => {
  const { t } = useTranslation();
  const { mutate, isPending } = orderMutation();
  const navigate = useNavigate();
  const navigateParams = useNavigateParams();
  const dispatch = useAppDispatch();

  const images = useAppSelector(imageSelector);

  const categoryRef = useRef<any>(null);
  const role_ref = useRef<any>();
  const is_worker = useRef<HTMLInputElement>(null);

  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateRole = (val: string | number) => (role_ref.current = val);
  const updateCategory = (val: string | number) => (categoryRef.current = val);

  const handleModal = (modal: ModalTypes) => navigateParams({ modal });

  const onSubmit = () => {
    const { product, brend, price } = getValues();
    const imgIds = Object.keys(images).reduce((acc: any, item) => {
      if (images[item as keyof FileState]?.length)
        acc[item] = images[item as keyof FileState]?.map((item) => item.id);

      return acc;
    }, {});

    mutate(
      {
        product,
        brend,
        category_id: categoryRef.current,
        role: role_ref.current.toString(),
        safia_worker: is_worker.current?.checked,
        price,
        ...imgIds,
      },
      {
        onSuccess: (data: OrderType) => {
          navigate(`/success/${data?.id}`, { replace: true });
          dispatch(clearImages());
        },
        onError: (e) => alert(e.message),
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-1 lg:gap-20 gap-6 lg:flex-row flex-col items-center pb-10"
    >
      <DocumentTitle title={t("cooperation") + " - Safia"} />
      <div className="flex flex-1 max-w-[750px] h-full w-full">
        <img src={family} alt={"making"} className="w-full h-full rounded-lg" />
      </div>

      <div className="flex flex-1 lg:flex-none lg:gap-6 gap-3 flex-col lg:w-[35vw] w-full px-3">
        <AnimationBlock>
          <h1 className="lg:text-5xl uppercase text-2xl">
            {t("will_you_cooperate")}
          </h1>
          <p>{t("order_descr")}</p>
        </AnimationBlock>
        <AnimationBlock delay={1}>
          <BaseInput label={t("order_name")} error={errors.product}>
            <MainInput
              register={register("product", { required: t("required_field") })}
              placeholder={t("order_input")}
            />
          </BaseInput>
        </AnimationBlock>

        <AnimationBlock delay={2}>
          <BaseInput label={t("order_brand")} error={errors.brend}>
            <MainInput
              register={register("brend", { required: t("required_field") })}
              placeholder={t("order_input")}
            />
          </BaseInput>
        </AnimationBlock>

        <AnimationBlock delay={3}>
          <BaseInput label={t("price_with_nds")} error={errors.price}>
            <MainInput
              register={register("price", { required: t("required_field") })}
              placeholder={t("order_input")}
              type="number"
            />
          </BaseInput>
        </AnimationBlock>

        <AnimationBlock delay={4}>
          <CategorySelect updateref={updateCategory} />
        </AnimationBlock>

        {UploadImagesArr.map((item, index) => (
          <BaseInput label={t(item.label)} key={item.modal}>
            <AnimationBlock delay={index + 2}>
              <UploadImages
                openModal={() => handleModal(item.modal)}
                keyObj={item.modal}
              />
            </AnimationBlock>
          </BaseInput>
        ))}
        <AnimationBlock>
          <BaseInput label={t("order_you_are")} className="w-full">
            <MainSelect
              updateRef={updateRole}
              values={infoArr}
              className="w-full"
            />
          </BaseInput>
        </AnimationBlock>
        <AnimationBlock>
          <MainCheckBox forwardedRef={is_worker} label={"order_worked_with"} />
        </AnimationBlock>

        <AnimationBlock>
          <Button className="w-full" type="submit">
            {t("next")}
          </Button>
        </AnimationBlock>
      </div>

      {isPending && <Loading />}
    </form>
  );
};

export default Cooperate;
