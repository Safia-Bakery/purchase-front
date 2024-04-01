import cross from "/icons/cross.svg";
import MainInput from "src/components/BaseInputs/MainInput";
import Button from "src/components/Button";

import { useForm } from "react-hook-form";
import MaskedInput from "src/components/BaseInputs/MaskedInput";
import baseApi from "src/api/baseApi";
import { Link, useNavigate } from "react-router-dom";
import { fixedString } from "src/utils/helper";
import { useTranslation } from "react-i18next";
import registerMutation from "src/hooks/mutations/register";
import Loading from "src/components/Loader";

const Register = () => {
  const { t } = useTranslation();
  const { register, getValues, handleSubmit } = useForm();
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
      password,
    } = getValues();

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
      },
      {
        onSuccess: () =>
          navigate(`/auth/verify?phone_number=${getValues("phone")}`),
        onError: (e) => alert(e.message),
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative">
      <Link to={"/"} className="absolute -top-36 -right-20">
        <img src={cross} alt={"cancel"} />
      </Link>
      <div className="flex lg:flex-row gap-5 flex-col flex-1">
        <div className="flex flex-col flex-1">
          <MainInput
            placeholder={t("name")}
            register={register("name")}
            className="mb-4"
          />
          <MainInput
            placeholder={t("surname")}
            register={register("surname")}
            className="mb-4"
          />
          <MaskedInput
            placeholder={t("phone")}
            defaultValue={998}
            register={register("phone")}
            className="mb-4"
          />
          <MainInput
            placeholder={"E-mail"}
            className="mb-4"
            register={register("email")}
          />
        </div>
        <div className="flex flex-col flex-1">
          <MainInput
            placeholder={t("inn")}
            register={register("inn")}
            className="mb-4"
          />
          <MainInput
            placeholder={t("name_company")}
            className="mb-4"
            register={register("company_name")}
          />
          <MainInput
            placeholder={t("jur_addr")}
            className="mb-4"
            register={register("address")}
          />
          <MainInput
            placeholder={t("password")}
            className="mb-4"
            type="password"
            register={register("password")}
          />
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
