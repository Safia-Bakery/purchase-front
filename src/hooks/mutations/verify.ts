import { useMutation } from "@tanstack/react-query";
import baseApi from "src/api/baseApi";

interface Body {
  otp: string;
  phone?: string;
  email?: string;
}

const verifyMutation = () => {
  return useMutation({
    mutationKey: ["verify"],
    mutationFn: (body: Body) => baseApi.post("/verify", body),
  });
};
export default verifyMutation;
