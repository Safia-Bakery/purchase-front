import { useMutation } from "@tanstack/react-query";
import baseApi from "src/api/baseApi";

interface Body {
  brend?: string;
  product?: string;
  role?: string;
  sertificate?: File;
  brochure?: File;
  category_id?: string;
  safia_worker?: boolean;
}

const contentType = "multipart/form-data";

const orderMutation = () => {
  return useMutation({
    mutationKey: ["order"],
    mutationFn: (body: Body) =>
      baseApi
        .post("/order", body, { headers: { "Content-Type": contentType } })
        .then(({ data }) => data),
  });
};
export default orderMutation;
