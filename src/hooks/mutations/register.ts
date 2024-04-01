import { useMutation } from "@tanstack/react-query";
import baseApi from "src/api/baseApi";

interface Body {
  phone: string;
  name: string;
  surname: string;
  email: string;
  inn: string;
  company_name: string;
  address: string;
  password: string;
}

const registerMutation = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (body: Body) => baseApi.post("/register", body),
  });
};
export default registerMutation;
