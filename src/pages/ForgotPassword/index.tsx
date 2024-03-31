import { useForm } from "react-hook-form";
import baseApi from "src/api/baseApi";
import { useNavigate } from "react-router-dom";
import { is_email } from "src/utils/helper";
import MainInput from "src/components/BaseInputs/MainInput";
import Button from "src/components/Button";
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { register, getValues, handleSubmit } = useForm();

  const onSubmit = () => {
    const { phone_or_email } = getValues();

    baseApi
      .post("/forgot", {
        ...(!is_email(phone_or_email)
          ? { phone_number: phone_or_email }
          : { email: phone_or_email }),
      })
      .then((res) => {
        if (res?.status === 200) {
          navigate(`/auth/verify?phone_number=${phone_or_email}&is_reset=1`);
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <h1 className="text-2xl text-center font-bold lg:mb-6 mb-3">
        {t("reset_pass")}
      </h1>

      <MainInput
        placeholder={t("phone_or_email")}
        register={register("phone_or_email")}
        className="mb-4"
      />

      <Button type="submit" className="w-full capitalize mt-4">
        {t("next")}
      </Button>
    </form>
  );
};

export default ForgotPassword;
