import { useMutation } from "@tanstack/react-query";
import baseApi from "src/api/baseApi";

interface Body {
  password: string;
}

const resetPasswordMutation = () => {
  return useMutation({
    mutationKey: ["reset_password"],
    mutationFn: (body: Body) => baseApi.post("/reset", body),
  });
};
export default resetPasswordMutation;

//resetPassword
