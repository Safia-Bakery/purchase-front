import { useMutation } from "@tanstack/react-query";
import baseApi from "src/api/baseApi";

interface Body {
  phone_number?: string;
  email?: string;
}

const forgotMutation = () => {
  return useMutation({
    mutationKey: ["forgot"],
    mutationFn: (body: Body) => baseApi.post("/forgot", body),
  });
};
export default forgotMutation;
