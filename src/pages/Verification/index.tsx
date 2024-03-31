import MaskedInput from "src/components/BaseInputs/MaskedInput";
import Button from "src/components/Button";
import Timer from "src/components/Timer";
import { useForm } from "react-hook-form";
import baseApi from "src/api/baseApi";
import BaseInput from "src/components/BaseInputs";
import useQueryString from "src/hooks/useQueryString";
import { useNavigate } from "react-router-dom";
import { fixedString } from "src/utils/helper";
import { useTranslation } from "react-i18next";

const Verification = () => {
  const { t } = useTranslation();
  const email = useQueryString("email");
  const phone_number = useQueryString("phone_number");
  const is_reset = useQueryString("is_reset");
  const navigate = useNavigate();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    baseApi
      .post("/verify", {
        otp: fixedString(getValues("otp")),
        ...(phone_number && { phone: fixedString(phone_number) }),
        ...(email && { email }),
      })
      .then((res) => {
        if (res?.status === 200) {
          !!is_reset
            ? navigate("/auth/reset-password")
            : window.location.replace("/");
          localStorage.setItem("token", res.data.access_token);
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <h1 className="text-2xl text-center font-bold lg:mb-6 mb-3">
        {`${t("code_sent")} ${email ?? phone_number}`}
      </h1>
      <BaseInput error={errors.otp}>
        <MaskedInput
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
    </form>
  );
};

export default Verification;
