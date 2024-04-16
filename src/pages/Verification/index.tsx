import MaskedInput from "src/components/BaseInputs/MaskedInput";
import Button from "src/components/Button";
import Timer from "src/components/Timer";
import { useForm } from "react-hook-form";
import BaseInput from "src/components/BaseInputs";
import useQueryString from "src/hooks/useQueryString";
import { useNavigate } from "react-router-dom";
import { fixedString } from "src/utils/helper";
import { useTranslation } from "react-i18next";
import verifyMutation from "src/hooks/mutations/verify";
import { useAppDispatch } from "src/store/rootConfig";
import Loading from "src/components/Loader";
import { loginHandler } from "src/store/reducers/auth";

const Verification = () => {
  const { t } = useTranslation();
  const email = useQueryString("email");
  const phone_number = useQueryString("phone_number");
  const is_reset = useQueryString("is_reset");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { mutate, isPending } = verifyMutation();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e: any) => {
    mutate(
      {
        otp: fixedString(getValues("otp")),
        ...(phone_number && { phone_number: fixedString(phone_number) }),
        ...(email && { email }),
      },
      {
        onSuccess: ({ data }: any) => {
          !!is_reset
            ? navigate("/auth/reset-password")
            : navigate("/", { replace: true });
          dispatch(loginHandler(data.access_token));
        },
        onError: (e) => alert(e.message),
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <h1 className="text-2xl text-center font-bold lg:mb-6 mb-3">
        {`${t("code_sent")} ${email ?? phone_number}`}
      </h1>
      <BaseInput error={errors.otp}>
        <MaskedInput
          autoFocus
          mask="9 - 9 - 9 - 9 - 9 - 9"
          placeholder={t("password")}
          register={register("otp", { required: t("required_field") })}
        />
      </BaseInput>

      <Button type="submit" className="w-full capitalize mt-4">
        {t("next")}
      </Button>

      <div className="mx-auto mt-6 text-blue-500">
        <Timer label={t("resend")} resendLabel={t("resend_after")} />
      </div>

      {isPending && <Loading />}
    </form>
  );
};

export default Verification;
