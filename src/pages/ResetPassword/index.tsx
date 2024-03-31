import Button from "src/components/Button";
import { useForm } from "react-hook-form";
import baseApi from "src/api/baseApi";
import BaseInput from "src/components/BaseInputs";
import MainInput from "src/components/BaseInputs/MainInput";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
  const { t } = useTranslation();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    baseApi
      .post("/reset", {
        password: getValues("password"),
      })
      .then((res) => {
        if (res?.data?.success) {
          window.location.replace("/");
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <h1 className="text-2xl text-center font-bold lg:mb-6 mb-3">
        {t("new_password")}
      </h1>
      <BaseInput error={errors.password}>
        <MainInput
          placeholder={t("password")}
          type="password"
          register={register("password", { required: t("required_field") })}
        />
      </BaseInput>

      <Button type="submit" className="w-full capitalize mt-4">
        {t("next")}
      </Button>
    </form>
  );
};

export default ResetPassword;
