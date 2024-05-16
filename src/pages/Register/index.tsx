import cross from "/icons/cross.svg";
import MainInput from "src/components/BaseInputs/MainInput";
import Button from "src/components/Button";

import { useForm } from "react-hook-form";
import MaskedInput from "src/components/BaseInputs/MaskedInput";
import { Link, useNavigate } from "react-router-dom";
import { fixedString } from "src/utils/helper";
import { useTranslation } from "react-i18next";
import registerMutation from "src/hooks/mutations/register";
import Loading from "src/components/Loader";
import BaseInputs from "src/components/BaseInputs";

const Register = () => {
  const { t } = useTranslation();
  const {
    register,
    clearErrors,
    formState: { errors },
    setError,
    getValues,
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const { mutate, isPending } = registerMutation();

  const onSubmit = () => {
    const {
      phone,
      name,
      surname,
      email,
      inn,
      company_name,
      address,
      login,
      password,
      confirmPassword,
    } = getValues();

    if (password !== confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: t("password_do_not_match"),
      });
      return;
    } else {
      clearErrors("confirmPassword");
      mutate(
        {
          phone: fixedString(phone),
          name,
          surname,
          email,
          inn,
          company_name,
          address,
          password,
          login,
        },
        {
          onSuccess: () =>
            navigate(`/auth/verify?phone_number=${getValues("phone")}`),
          onError: (e) => alert(e.message),
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      <Link to={"/"} className="absolute -top-36 -right-20">
        <img src={cross} alt={"cancel"} />
      </Link>
      <div className="flex lg:flex-row gap-5 flex-col flex-1">
        <div className="flex flex-col flex-1">
          <BaseInputs error={errors.name}>
            <MainInput
              placeholder={t("name")}
              register={register("name", {
                required: t("required_field"),
              })}
              className="mb-2"
            />
          </BaseInputs>
          <BaseInputs error={errors.surname}>
            <MainInput
              placeholder={t("surname")}
              register={register("surname")}
              className="mb-2"
            />
          </BaseInputs>
          <BaseInputs error={errors.phone}>
            <MaskedInput
              placeholder={t("phone")}
              defaultValue={998}
              register={register("phone", {
                required: t("required_field"),
              })}
              className="mb-2"
            />
          </BaseInputs>
          <BaseInputs error={errors.login}>
            <MainInput
              placeholder={t("loginn")}
              register={register("login", {
                required: t("required_field"),
              })}
              className="mb-2"
            />
          </BaseInputs>
          <BaseInputs error={errors.password}>
            <MainInput
              placeholder={t("password")}
              className="mb-2"
              type="password"
              register={register("password", {
                required: t("required_field"),
              })}
            />
          </BaseInputs>
        </div>
        <div className="flex flex-col flex-1">
          <BaseInputs>
            <MainInput
              placeholder={t("inn")}
              register={register("inn")}
              className="mb-2"
            />
          </BaseInputs>
          <BaseInputs error={errors.company_name}>
            <MainInput
              placeholder={t("name_company")}
              className="mb-2"
              register={register("company_name", {
                required: t("required_field"),
              })}
            />
          </BaseInputs>
          <BaseInputs>
            <MainInput
              placeholder={t("jur_addr")}
              className="mb-2"
              register={register("address")}
            />
          </BaseInputs>
          <BaseInputs>
            <MainInput
              placeholder={"E-mail"}
              className="mb-2"
              register={register("email")}
            />
          </BaseInputs>
          <BaseInputs error={errors.confirmPassword}>
            <MainInput
              placeholder={t("confirmPassword")}
              className="mb-2"
              type="password"
              register={register("confirmPassword", {
                required: t("required_field"),
              })}
            />
          </BaseInputs>
        </div>
      </div>
      <div className="flex gap-4 items-center flex-[5] justify-center mt-6">
        <Button
          type="submit"
          className="flex justify-center items-center flex-[3]"
        >
          {t("register")}
        </Button>
        <p className="flex-[2] text-xs leading-3 text-textGray flex">
          {t("login_descr")}
        </p>
      </div>
      <Link
        to={"/auth/login"}
        className="text-blue-500 capitalize absolute left-1/2 -translate-x-1/2 -bottom-10"
      >
        {t("login")}
      </Link>

      {isPending && <Loading />}
    </form>
  );
};

export default Register;
