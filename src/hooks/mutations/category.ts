import { useMutation } from "@tanstack/react-query";
import baseApi from "src/api/baseApi";

interface Body {
  name_uz: string;
  name_ru: string;
  status: number;
}

const categoryMutation = () => {
  console.log("first");
  return useMutation({
    mutationKey: ["post_categories"],
    mutationFn: (body: Body) =>
      baseApi.post("/category", body).then(({ data }) => data),
  });
};
export default categoryMutation;
