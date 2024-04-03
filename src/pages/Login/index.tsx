import Button from "src/components/Button";
import { useForm } from "react-hook-form";
import cross from "/icons/cross.svg";
import BaseInput from "src/components/BaseInputs";
import MainInput from "src/components/BaseInputs/MainInput";
import logo from "/icons/safia-logo.svg";
import MaskedInput from "src/components/BaseInputs/MaskedInput";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fixedString } from "src/utils/helper";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "src/store/rootConfig";
import { loginHandler } from "src/store/reducers/auth";
import loginMutation from "src/hooks/mutations/login";
import Loading from "src/components/Loader";

const LoginLayout = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [error, $error] = useState(false);
  const dispatch = useAppDispatch();
  const { mutate, isPending } = loginMutation();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const { username, password } = getValues();
    mutate(
      {
        username: fixedString(username),
        password,
      },
      {
        onSuccess: ({ data }: any) => {
          dispatch(loginHandler(data.access_token));
          navigate("/");
        },
        onError: () => $error(true),
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col relative">
      <Link to={"/"} className="absolute -top-36 -right-20">
        <img src={cross} alt={"cancel"} />
      </Link>
      <img src={logo} alt={"safia-logo"} className="mx-auto lb:mb-10 mb-3" />
      <BaseInput error={errors.username}>
        <MaskedInput
          autoFocus
          placeholder={t("phone")}
          defaultValue={998}
          register={register("username", { required: t("required_field") })}
          className="mb-4"
        />
      </BaseInput>
      <BaseInput error={errors.password}>
        <MainInput
          type="password"
          register={register("password", { required: t("required_field") })}
          placeholder={t("password")}
        />
      </BaseInput>

      {error && <p className="text-red-400 text-xs">{t("error")}</p>}

      <Link
        to={"/auth/forgot"}
        className="text-blue-500 capitalize lg:mt-6 mt-3 underline"
      >
        {t("forgot_password")}
      </Link>

      <Button type="submit" className="w-full capitalize mt-4">
        {t("next")}
      </Button>

      <Link
        to={"/auth/register"}
        className="text-center text-blue-500 capitalize mt-4"
      >
        {t("register")}
      </Link>

      {isPending && <Loading />}
    </form>
  );
};

export default LoginLayout;
