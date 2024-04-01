import Button from "src/components/Button";
import { useForm } from "react-hook-form";
import BaseInput from "src/components/BaseInputs";
import MainInput from "src/components/BaseInputs/MainInput";
import { useTranslation } from "react-i18next";
import resetPasswordMutation from "src/hooks/mutations/resetPassword";
import Loading from "src/components/Loader";

const ResetPassword = () => {
  const { t } = useTranslation();
  const { mutate, isPending } = resetPasswordMutation();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    mutate(
      { password: getValues("password") },
      {
        onSuccess: () => window.location.replace("/"),
        onError: (e) => alert(e.message),
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <h1 className="text-2xl text-center font-bold lg:mb-6 mb-3">
        {t("new_password")}
      </h1>
      <BaseInput error={errors.password}>
        <MainInput
          autoFocus
          placeholder={t("password")}
          type="password"
          register={register("password", { required: t("required_field") })}
        />
      </BaseInput>

      <Button type="submit" className="w-full capitalize mt-4">
        {t("next")}
      </Button>
      {isPending && <Loading />}
    </form>
  );
};

export default ResetPassword;
