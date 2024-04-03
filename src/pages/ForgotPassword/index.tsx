import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { is_email } from "src/utils/helper";
import MainInput from "src/components/BaseInputs/MainInput";
import Button from "src/components/Button";
import { useTranslation } from "react-i18next";
import forgotMutation from "src/hooks/mutations/forgot";
import Loading from "src/components/Loader";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { mutate, isPending } = forgotMutation();

  const { register, getValues, handleSubmit } = useForm();

  const onSubmit = () => {
    const { phone_or_email } = getValues();

    mutate(
      {
        ...(!is_email(phone_or_email)
          ? { phone_number: phone_or_email }
          : { email: phone_or_email }),
      },
      {
        onSuccess: () =>
          navigate(`/auth/verify?phone_number=${phone_or_email}&is_reset=1`),
        onError: (e) => alert(e.message),
      }
    );
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
      {isPending && <Loading />}
    </form>
  );
};

export default ForgotPassword;
