import { useMutation } from "@tanstack/react-query";
import baseApi from "src/api/baseApi";

interface Body {
  username: string;
  password: string;
}

const loginMutation = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (body: Body) =>
      baseApi.post("/login", body, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }),
  });
};
export default loginMutation;
